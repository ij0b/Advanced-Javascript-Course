Vue.component('erroraccess', {
    template: `<div v-if='$root.error' style='font-size:30px;font-weight:700;letter-spacing:3px;'>
                   Ошибка доступа к файлу json на веб-сервисе  
               </div>`
});