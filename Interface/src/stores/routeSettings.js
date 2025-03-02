import { ref } from "vue";
import { defineStore } from "pinia";

export const routeSettigns = defineStore(
  "routeSettings",
  () => {
    // Liste des parametres d'une route*
    const nom = ref("");
    const sens_route = ref([]);
    const proba_gauche = ref(0);
    const proba_droite = ref(0);
    const proba_bas = ref(0);
    const proba_haut = ref(0);
    const longeur = ref(0);

    return {
      sens_route,
      longeur,
      nom,
      proba_gauche,
      proba_droite,
      proba_bas,
      proba_haut
    };
  },
  {
    persist: true,
  }
);
