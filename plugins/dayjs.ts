import dayjs from "dayjs";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('dayjs', dayjs);
})
declare module "#app" {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
  }
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}