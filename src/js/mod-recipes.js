"use strict";

// export default 
class RecipesModel {

    constructor() {
        console.log("RecipeModel ::: CONSTRUCTOR");

    }

    recipes = [
        {
            id: 0,
            title: "Tasty pancakes",
            subtitle: "Season favourite",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi laboriosam dicta culpa, minima nihil pariatur non quis, dolor et aut optio exercitationem nesciunt quia eos!",
            thumb: "./img/sm-pancakes.jpg",
            image: "./img/pancakes.jpg",
            duration: "40",
        },
        {
            id: 1,
            title: "Chocolate Cupcake",
            subtitle: "Granny's recipe",
            description: "Soluta, accusamus sit praesentium dignissimos atque consectetur culpa explicabo officiis recusandae distinctio alias, sapiente laborum velit incidunt voluptate.",
            thumb: "./img/sm-chocolate-cupcake.jpg",
            image: "./img/chocolate-cupcake.jpg",
            duration: "45",
        },
        {
            id: 2,
            title: "Chocolate Pie",
            subtitle: "Everyone's favourite",
            description: "Laborum suscipit molestiae voluptatibus ullam mollitia fugit voluptate excepturi ab. A ex laudantium nostrum earum animi excepturi, praesentium eum doloremque ea reiciendis non assumenda nam nesciunt eveniet!",
            thumb: "./img/sm-chocolate-pie.jpg",
            image: "./img/chocolate-pie.jpg",
            duration: "60",
        }

    ]

}

const instance = new RecipesModel;

export default instance;