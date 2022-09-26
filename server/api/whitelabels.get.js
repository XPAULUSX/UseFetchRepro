export default defineEventHandler(async () => {  
    const whitelabels = await $fetch( `http://colormind.io/list/` );
    return whitelabels;
    });