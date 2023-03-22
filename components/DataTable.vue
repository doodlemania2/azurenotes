<template>
  <Pagination
    :min="page * items.length + 1"
    :max="page * items.length + items.length"
    :total="total"
    @next="pageUp"
    @prev="pageDown"
  />
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-4 flow-root">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3 cursor-pointer"
                  @click="sort('id')"
                >
                  <span class="flex items-center">
                    Id
                    <Icon
                      v-if="sortField === 'id'"
                      :name="
                        sortAscending ? 'tabler:sort-ascending' : 'tabler:sort-descending'
                      "
                      class="ml-auto ml-2 text-red-600 hover:text-red-800"
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  @click="sort('created_on')"
                >
                  <span class="flex items-center">
                    Created
                    <Icon
                      v-if="sortField === 'created_on'"
                      :name="
                        sortAscending ? 'tabler:sort-ascending' : 'tabler:sort-descending'
                      "
                      class="ml-auto ml-2 text-red-600 hover:text-red-800"
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Product Area
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Description
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Reference
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for="(item, ind) in items"
                :key="ind"
                :class="ind % 2 === 0 ? undefined : 'bg-gray-50'"
              >
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                >
                  {{ item.id }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ new Date(item.created_on).toLocaleString("en-US") }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                  {{ item.product[0].sku_id.sku_name }}
                </td>
                <td class="whitespace-wrap px-3 py-4 text-sm text-gray-500">
                  {{ item.description ? trunc(item.description) : "" }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <a
                    :href="item.reference"
                    class="underline text-blue-500 hover:text-blue-700 visited:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["items", "total"]);
const emit = defineEmits(["sort"]);

let page = 0;
let sortAscending = false;
let sortField = "id";

const trunc = (txt) => {
  return txt.length > 250 ? txt.substring(0, 250) + "..." : txt;
};

const pageUp = () => {
  page++;
  emit("sort", sortField, sortAscending, page);
};

const pageDown = () => {
  page--;
  if (page < 0) page = 0;
  emit("sort", sortField, sortAscending, page);
};

const sort = (field) => {
  console.log(field);
  if (field === sortField) {
    sortAscending = !sortAscending;
  } else {
    sortAscending = true;
    sortField = field;
  }
  emit("sort", field, sortAscending, page);
};
</script>
