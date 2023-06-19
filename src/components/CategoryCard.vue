<template>
  <button
    class="group p-5 rounded-md bg-gray-50 flex justify-between items-center hover:ring-2 ring-blue-500 duration-200"
  >
    <div>
      <h4 class="text-xl font-bold text-gray-900">{{ title }}</h4>
      <p class="text-sm font-medium text-gray-400">
        {{ taskComplited }}/{{ taskQuantity }} выполненных задач
      </p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6 group-hover:-translate-x-1.5 duration-200 group-hover:text-blue-500"
    >
      <path
        fill-rule="evenodd"
        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['title', 'taskComplited', 'taskQuantity'],
};
</script>
