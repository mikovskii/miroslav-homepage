import { readFile, writeFile } from 'node:fs/promises'

const projectsPath = new URL('../src/data/listProjects.json', import.meta.url)
const projects = JSON.parse(await readFile(projectsPath, 'utf8'))

function getRepoPath(htmlUrl) {
  const { pathname } = new URL(htmlUrl)
  const [, owner, repo] = pathname.split('/')

  if (!owner || !repo)
    throw new Error(`Invalid GitHub URL: ${htmlUrl}`)

  return `${owner}/${repo}`
}

async function fetchRepoStats(project) {
  const repoPath = getRepoPath(project.html_url)
  const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'killitar-homepage-build',
    },
  })

  if (!response.ok) {
    console.warn(`Skipped ${repoPath}: ${response.status} ${response.statusText}`)

    return {
      ...project,
      stars: project.stars ?? 0,
      forks: project.forks ?? 0,
      updated_at: project.updated_at ?? null,
    }
  }

  const repo = await response.json()

  return {
    ...project,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updated_at: repo.updated_at,
  }
}

try {
  const updatedProjects = await Promise.all(projects.map(fetchRepoStats))
  await writeFile(projectsPath, `${JSON.stringify(updatedProjects, null, 2)}\n`)
  console.log(`Updated GitHub stats for ${updatedProjects.length} projects`)
}
catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
