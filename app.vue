<template>
  <DataTable :items="items" :total="total" @sort="sort" />
</template>

<script setup>
const { getItems } = useDirectusItems();

const items = ref("");
const total = ref("");

let params = {
  limit: 20,
  sort: "-id",
  fields: [
    "id",
    "description",
    "status",
    "created_on",
    "updated_on",
    "reference",
    "product.sku_id.sku_name",
  ],
  meta: 'total_count'
}

const { data, pending, error, refresh } = await useAsyncData("notes", () => {
  return getItems({
    collection: "notes",
    params
  });
});

onMounted(() => {
  items.value = data.value.data;
  total.value = data.value.meta.total_count
});

const sort = async (field, asc, page) => {
  console.log('sorting by ' + field + ': sort ascending: ' + asc + ': getting page: ' + page)

  let sortParam = asc 
    ? field 
    : '-' + field

  let offset = page * params.limit
  if (offset < 0) 
    offset = 0;

  let data = await getItems({
    collection: "notes",
    params: {
      ...params,
      sort: sortParam,
      offset
    }
  })

  items.value = data.data
}
</script>
