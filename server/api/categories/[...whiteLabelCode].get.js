export default defineEventHandler(async (event) => {  
  const categories = await $fetch( `http://colormind.io/list/` );
  return categories;
});