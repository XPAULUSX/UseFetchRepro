export const useWhiteLabels = async () => {     
    const whiteLabels = await useFetch("/api/whitelabels");
    return whiteLabels;
}