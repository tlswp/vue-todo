<template>
  <div class="container mx-auto pt-10">
    <h1 class="text-4xl font-bold text-gray-900">Категории</h1>
    <div class="grid grid-cols-3 gap-4 mt-4">
      <CategoryCard
        v-for="[key, category] in categories"
        :key="key"
        @click.native="$router.push('/tasks/' + key)"
        :title="category.label"
        :task-complited="category.checkedCount"
        :task-quantity="category.tasks.length"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard';

export default {
  name: 'MainPage',
  components: {
    CategoryCard,
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
};
</script>
