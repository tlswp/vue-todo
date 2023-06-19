<template>
  <div class="container mx-auto pt-10">
    <a @click="$router.back()" class="cursor-pointer mb-6">Назад</a>
    <h1 class="text-4xl font-bold text-gray-900">{{ category.label }}</h1>
    <div class="grid gap-4 mt-4 max-w-[500px]">
      <button
        @click="onAddTask"
        class="group p-3 rounded-md bg-gray-50 flex justify-between items-center duration-200 hover:ring-2 ring-blue-500"
      >
        Добавить задачу
      </button>
      <TaskInput
        v-for="(task, index) in category.tasks"
        :key="index"
        :value="task.label"
        :checked="task.checked"
        :on-check="(e) => onCheck(e, index)"
        :on-change-value="(e) => onChangeValue(e, index)"
        :on-blur-input="(e) => onBlurInput(e, index)"
        :on-delete-press="(e) => onDeletePress(index)"
      />
    </div>
  </div>
</template>

<script>
import TaskInput from '@/components/TaskInput.vue';

export default {
  name: 'TasksPage',
  components: {
    TaskInput,
  },
  computed: {
    category() {
      return this.$store.getters.getCategoryByKey(this.$route.params.id);
    },
  },
  methods: {
    onCheck(e, index) {
      this.$store.commit('setChecked', {
        checked: e.target.checked,
        key: this.$route.params.id,
        index,
      });
    },
    onChangeValue(e, index) {
      this.$store.commit('setLabel', {
        label: e.target.value,
        key: this.$route.params.id,
        index,
      });
    },
    onBlurInput(e, index) {
      if (e.target.value.trim() === '') {
        this.$store.commit('deleteTask', { key: this.$route.params.id, index });
      }
    },
    onDeletePress(index) {
      this.$store.commit('deleteTask', { key: this.$route.params.id, index });
    },
    onAddTask() {
      this.$store.commit('addTask', {
        key: this.$route.params.id,
        task: { label: 'Новая задача', checked: false },
      });
    },
  },
};
</script>
