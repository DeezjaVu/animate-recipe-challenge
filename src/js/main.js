"use strict";

import recipesModel from "./mod-recipes.js";

// const recipesModel = new RecipesModel();

/**
 * 
 */
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("MAIN ::: DOMContentLoaded");

    const card = document.body.querySelector('.card');
    const handle = document.body.querySelector('.card-handle');

    console.log(' - recipes:', recipesModel.recipes);
    setRecipes();

    // const T = TweenLite.to('.card-content', 1, { width: 0, flex: 'none', ease: Bounce.easeOut }).reversed(true);
    const tw = TweenLite.to('.card-content', 1,
        {
            width: 0,
            autoAlpha: 0,
            'padding-left': 0,
            'padding-right': 0,
            flex: '0 0 0%',
            ease: Strong.easeInOut
        }).reversed(true);

    handle.addEventListener('click', (event) => {
        tw.reversed(!tw.reversed());
    });

});

/**
 * 
 */
function setRecipes() {
    console.log("MAIN ::: setRecipes");

    const div = document.body.querySelector('.recipes-nav-buttons');
    console.log(' - container:', div);

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    const recipes = recipesModel.recipes;
    const len = recipes.length;
    recipes.forEach(recipe => {
        const img = new Image();
        img.src = recipe.thumb;
        const domImg = div.appendChild(img);
        domImg.addEventListener('click', (event) => {
            console.log(' - id:', recipe.id);
            setSelectedRecipe(recipe);
        })
    });
}

/**
 * Displays the selected recipe.
 * 
 * @param {*} recipe The recipe data to display.
 */
function setSelectedRecipe(recipe) {
    console.log("MAIN ::: setSelectedRecipe");
    console.log(' - recipe:', recipe);
    const card = document.body.querySelector('.card');

    // Smoothen the transition for the large bg images.
    let img = new Image();
    img.src = recipe.image;
    img.addEventListener('load', (event) => {
        console.log(' - image loaded:', recipe.image);
        const bgImg = card.querySelector('#recipe-image');
        bgImg.style.backgroundImage = `url('${recipe.image}')`;
        const tw = TweenLite.fromTo('#recipe-image', 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Strong.easeIn });
        img = null;
    })

    const title = card.querySelector('#recipe-title');
    const subtitle = card.querySelector('#recipe-subtitle');
    const desc = card.querySelector('#recipe-desc');
    const dur = card.querySelector('#recipe-duration');

    title.innerText = recipe.title;
    subtitle.innerText = recipe.subtitle;
    desc.innerText = recipe.description;
    dur.innerText = recipe.duration;

    const twDesc = TweenLite.fromTo(["#recipe-title", "#recipe-subtitle", "#recipe-desc"], 0.6, { opacity: 0, x: 50 }, { opacity: 1, x: 0, ease: Back.easeInOut });
    const twDur = TweenLite.fromTo(".recipes-time", 0.6, { opacity: 0, right: '20%' }, { opacity: 1, right: 0, ease: Back.easeInOut });
}