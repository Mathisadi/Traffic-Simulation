import { ref } from "vue";
import { defineStore } from "pinia";

export const routeSettigns = defineStore(
  "routeSettings",
  () => {
    // Liste des parametres d'une route*
    const nom = ref("");
    const sens_route = ref("");
    const proba_gauche = ref(0);
    const proba_droite = ref(0);
    const proba_bas = ref(0);
    const proba_haut = ref(0);
    const longeur = ref(0);

    const clear = () => {
      nom.value = "";
      sens_route.value = "";
      proba_gauche.value = 0;
      proba_droite.value = 0;
      proba_bas.value = 0;
      proba_haut.value = 0;
      longeur.value = 0;
    };

    const getRouteSettings = () => {
      return {
        "nom": nom.value,
        "sens": sens_route.value,
        "proba_g": proba_gauche.value,
        "proba_d": proba_droite.value,
        "proba_b": proba_bas.value,
        "proba_h": proba_haut.value,
        "len": longeur.value,
      };
    };

    return {
      sens_route,
      longeur,
      nom,
      proba_gauche,
      proba_droite,
      proba_bas,
      proba_haut,
      clear,
      getRouteSettings
    };
  },
  {
    persist: true,
  }
);
