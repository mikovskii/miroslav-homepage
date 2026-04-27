<script setup lang="ts">
import { ref } from 'vue'
import listProjects from '../data/listProjects.json'

const isProjectsAccordionOpen = ref<boolean>(false)

function toggleProjectsAccordion(): void {
  isProjectsAccordionOpen.value = !isProjectsAccordionOpen.value
}
</script>

<template>
  <div class="rounded-xl border-2 border-secondary p-2 lg:rounded-none lg:border-0 lg:p-0">
    <button
      type="button"
      class="group flex min-w-full items-center justify-between lg:mb-4"
      :aria-expanded="isProjectsAccordionOpen"
      aria-controls="projects-list"
      @click="toggleProjectsAccordion"
    >
      <p class="text-2xl text-primary duration-300 group-hover:text-secondary lg:text-4xl">
        projects
      </p>
      <svg
        viewBox="0 0 21 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden h-5 w-5 fill-primary duration-300 transition-transform group-hover:fill-secondary lg:block"
        :class="[isProjectsAccordionOpen ? 'rotate-90' : 'rotate-0']"
      >
        <path d="M0.666651 1.99999V26C0.667412 26.243 0.73443 26.4812 0.860487 26.6889C0.986546 26.8966 1.16687 27.066 1.38205 27.1789C1.59724 27.2918 1.83913 27.3438 2.08169 27.3295C2.32426 27.3151 2.55831 27.2348 2.75865 27.0973L20.092 15.0973C20.8106 14.6 20.8106 13.4027 20.092 12.904L2.75865 0.903992C2.55873 0.765092 2.32456 0.683637 2.08159 0.668479C1.83862 0.65332 1.59615 0.705037 1.38051 0.81801C1.16487 0.930984 0.984312 1.10089 0.858458 1.30928C0.732605 1.51766 0.666267 1.75655 0.666651 1.99999Z" />
      </svg>
      <svg
        id="Layer_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="h-5 w-5 fill-primary duration-300 transition-transform group-hover:fill-secondary lg:hidden"
        :class="[isProjectsAccordionOpen ? 'rotate-90' : 'rotate-0']"
        viewBox="0 0 512 512"
        xml:space="preserve"
      >
        <g><g><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M269.043,389.286V283.429 H109.714v-54.857h159.329V122.704l133.242,133.307L269.043,389.286z" /></g></g>
      </svg>
    </button>

    <transition name="accordion">
      <div v-if="isProjectsAccordionOpen" id="projects-list" class="overflow-hidden">
        <hr class="border-1 my-2 border-secondary lg:hidden">
        <ul class="scrollbar-hide max-h-64 overflow-y-auto">
          <li
            v-for="project in listProjects"
            :key="project.name"
            class="mb-3 flex flex-col last:mb-0 lg:rounded-lg lg:border-2 lg:border-primary lg:p-3"
          >
            <div class="mb-1 flex items-center justify-between gap-3 lg:mb-2">
              <div class="flex min-w-0 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 shrink-0 fill-primary" viewBox="0 0 24 24"><path d="M6.615 21q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3h10.77q.69 0 1.152.463q.463.462.463 1.152v14.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h10.77q.23 0 .423-.192q.192-.193.192-.423V4.615q0-.23-.192-.423Q17.615 4 17.385 4H16v6.115l-2-1.192l-2 1.192V4H6.615q-.23 0-.423-.192Q6 4.385 6 4.615v14.77q0 .23.192.423q.193.192.423.192M6 20V4zm6-9.885l2-1.192l2 1.192l-2-1.192z" /></svg>
                <a class="truncate text-lg text-primary duration-300 hover:text-secondary" :href="project.html_url" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
              </div>
              <div class="flex shrink-0 items-center gap-2 text-sm text-primary-variant duration-300" aria-label="GitHub stats">
                <span class="flex items-center gap-1" :title="`${project.stars ?? 0} stars`">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="m12 17.27l5.18 3.13l-1.64-5.89L20.1 10.5l-6-.52L12 4.4L9.9 9.98l-6 .52l4.56 4.01l-1.64 5.89z" /></svg>
                  {{ project.stars ?? 0 }}
                </span>
                <span class="hidden items-center gap-1 lg:flex" :title="`${project.forks ?? 0} forks`">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M7 5a3 3 0 1 1 4 2.83V9h2V7.83A3.001 3.001 0 1 1 15 5a2.99 2.99 0 0 1-.78 2H15a3 3 0 0 1 3 3v3.17a3.001 3.001 0 1 1-2 0V10a1 1 0 0 0-1-1h-2v5.17a3.001 3.001 0 1 1-2 0V9H9a1 1 0 0 0-1 1v4.17a3.001 3.001 0 1 1-2 0V10a3 3 0 0 1 3-3h.78A2.99 2.99 0 0 1 7 5" /></svg>
                  {{ project.forks ?? 0 }}
                </span>
              </div>
            </div>
            <span class="text-secondary duration-300">{{ project.description }}</span>
            <div class="hidden items-center lg:flex">
              <div class="mr-1 h-2 w-2 rounded-full bg-secondary duration-300" />
              <p class="text-primary-variant duration-300">
                {{ project.language }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.5s ease-in-out,
    opacity 0.3s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px;
  opacity: 1;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
