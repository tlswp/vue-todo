<template>
  <div
    v-bind:class="wrapperClass"
    class="group p-3 rounded-md bg-gray-50 flex justify-between items-center duration-200 hover:ring-2"
  >
    <div class="flex gap-4 items-center w-full">
      <label class="cursor-pointer">
        <input @change="onCheck" type="checkbox" class="hidden" />
        <div
          v-bind:class="checkboxClass"
          class="w-6 h-6 flex justify-center items-center rounded-md cursor-pointer hover:ring-1 duration-200 select-none"
        >
          <svg
            v-if="checked"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </label>
      <input
        @focus="onFocus"
        @blur="onBlur"
        :disabled="checked"
        :value="value"
        @input="onChangeValue"
        class="bg-gray-50 ring-0 outline-none overflow-hidden resize-none w-full"
        v-bind:class="inputClass"
      />
    </div>
    <svg
      @click="onDeletePress"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 opacity-0 group-hover:opacity-100 text-gray-300 cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  props: [
    'checked',
    'value',
    'onCheck',
    'onChangeValue',
    'onBlurInput',
    'onDeletePress',
  ],
  data: () => ({
    focused: false,
  }),
  computed: {
    checkboxClass() {
      if (this.checked) return 'bg-blue-500 ring-blue-500 text-white';
      return 'bg-gray-200 ring-gray-200 text-white';
    },
    inputClass() {
      let className = '';
      if (this.checked) className += 'line-through opacity-25';
      return className;
    },
    wrapperClass() {
      let className = '';
      if (this.focused) className += 'ring-blue-500 ring-2';
      else className += 'ring-gray-300';
      return className;
    },
  },
  methods: {
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
  },
};
</script>
