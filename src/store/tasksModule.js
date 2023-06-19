export default {
  state: {
    categories: {
      work: {
        label: 'Рабочие задачи',
        checkedCount: 0,
        tasks: [
          {
            checked: false,
            label: 'Создать рабочие задачи',
          },
        ],
      },
      home: {
        label: 'Задачи по дому',
        checkedCount: 1,
        tasks: [
          {
            checked: false,
            label: 'Сделать уборку',
          },
          {
            checked: false,
            label: 'Сходить в магазин',
          },
          {
            checked: true,
            label: 'Отдохнуть',
          },
        ],
      },
    },
  },
  getters: {
    getCategories(state) {
      return Object.entries(state.categories);
    },
    getCategoryByKey: (state) => (key) => state.categories[key],
    getTaskCountByKey: (state) => (key) => {
      if (state.categories[key]) {
        let checkedTasks = 0;
        for (let task in state.categories[key].tasks) {
          if (task.checked) checkedTasks += 1;
        }
        return [
          checkedTasks,
          state.categories[key].tasks.length - checkedTasks,
          state.categories[key].tasks.length,
        ];
      }
      return [0, 0, 0];
    },
  },
  mutations: {
    checkTasks(state, { key }) {
      if (state.categories[key]) {
        let checkedCount = 0;
        for (let task in state.categories[key].tasks) {
          if (task.checked) checkedCount += 1;
        }
        state.categories[key].checkedCount = checkedCount;

        state.categories[key].checkedCount =
          state.categories[key].checkedCount >
          state.categories[key].tasks.length
            ? state.categories[key].tasks.length
            : state.categories[key].checkedCount;

        state.categories[key].checkedCount =
          state.categories[key].checkedCount < 0
            ? 0
            : state.categories[key].checkedCount;
      }
      return state;
    },
    checkAllTasks(state) {
      for (let key in Object.keys(state.categories)) {
        if (state.categories[key]) {
          let checkedCount = 0;
          for (let task in state.categories[key].tasks) {
            if (task.checked) checkedCount += 1;
          }
          state.categories[key].checkedCount = checkedCount;
        }
      }
      return state;
    },
    setChecked(state, { key, index, checked }) {
      if (state.categories[key] && state.categories[key].tasks[index]) {
        state.categories[key].tasks[index].checked = checked;
        state.categories[key].checkedCount += checked ? 1 : -1;
      }
      return state;
    },
    setLabel(state, { key, index, label }) {
      if (state.categories[key] && state.categories[key].tasks[index]) {
        state.categories[key].tasks[index].label = label;
      }
      return state;
    },
    setTitleLabel(state, { key, label }) {
      if (state.categories[key]) {
        state.categories[key].label = label;
      }
      return state;
    },
    deleteTask(state, { key, index }) {
      if (state.categories[key]) {
        const [deletedTask] = state.categories[key].tasks.splice(index, 1);
        if (deletedTask.checked) {
          state.categories[key] -= 1;
        }
      }
      return state;
    },
    addTask(state, { key, task }) {
      if (state.categories[key] && task.label) {
        state.categories[key].tasks.push(task);
      }
      return state;
    },
  },
  actions: {},
};
