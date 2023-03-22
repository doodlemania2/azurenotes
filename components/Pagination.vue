<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >Previous</a
      >
      <a
        href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >Next</a
      >
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav
          class="isolate flex"
          aria-label="Pagination"
        >
          <div
            class="mr-2 relative inline-flex items-center px-2 py-2 focus:z-20 focus:outline-offset-0"
            :class="min === 1 ? 'cursor-default text-gray-200' : 'cursor-pointer text-gray-400 hover:bg-gray-50'"
            @click="prev"
          >
            <span class="sr-only">Previous</span>
            <Icon
              name="material-symbols:arrow-circle-left"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </div>

          <div class="flex items-center">
            <p class="text-sm text-gray-700">
              Showing
              {{ " " }}
              <span class="font-medium">{{ min }}</span>
              {{ " " }}
              to
              {{ " " }}
              <span class="font-medium">{{ max }}</span>
              {{ " " }}
              of
              {{ " " }}
              <span class="font-medium">{{ total }}</span>
              {{ " " }}
              results
            </p>
          </div>

          <div
            class="ml-2 relative inline-flex items-center px-2 py-2 focus:z-20 focus:outline-offset-0"
            :class="max === total ? 'cursor-default text-gray-200' : 'cursor-pointer text-gray-400 hover:bg-gray-50'"
            @click="next"
          >
            <span class="sr-only">Next</span>
            <Icon
              name="material-symbols:arrow-circle-right"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["min", "max", "total"]);
const emit = defineEmits(["next", "prev"]);

const prev = () => {
  if (props.min === 1) return;
  emit("prev");
};

const next = () => {
  if (props.max === props.total) return;
  emit("next");
};
</script>
