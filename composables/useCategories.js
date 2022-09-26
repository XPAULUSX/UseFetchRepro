const whiteLabels = ref([]);

export const useCategories = async () => {
    
    const route = useRoute();
    const fetchUrl = route.params.whiteLabelCode ? `/api/categories/${route.params.whiteLabelCode}` : "/api/categories/";    
    const fetch = await useFetch(fetchUrl, { initialCache: false });  
        
    if (whiteLabels.value.length === 0) {
        whiteLabels.value = await useWhiteLabels();
    }    

    return { 
        all: readonly(fetch.data),
        whiteLabels: whiteLabels
    }
}



