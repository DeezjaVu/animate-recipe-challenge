"use strict";

import recipesModel from "./mod-recipes.js";

/**
 * 
 */
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("MAIN ::: DOMContentLoaded");
    console.log(' - recipes:', recipesModel.recipes);
});
