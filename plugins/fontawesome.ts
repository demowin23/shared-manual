import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faChevronLeft, faChevronRight);
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
}); 