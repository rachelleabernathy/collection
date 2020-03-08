let myDinoArray = [
    {
        name: "Tyrannosaurus Rex",
        meaning: "Rex is Latin for King",
        time: "Cretaceous period",
        geo: "Western North America",
        size: "40-42 feet long",
        diet: "carnivorous"
    },

    {
        name: "Velociraptor",
        meaning: "Swift Seizer in Latin",
        time: "Cretaceous period",
        geo: "Asia",
        size: "6 feet long",
        diet: "carnivorous"
    },

    {
        name: "Triceratops",
        meaning: "Three Horned Face",
        time: "Cretaceous period",
        geo: "North America",
        size: "26-30 feet long",
        diet: "herbivorous"
    },

    {
        name: "Brontosaurus",
        meaning: "Thunder Lizard",
        time: "Late Jurassic period",
        geo: "North America",
        size: "75 feet long",
        diet: "herbivorous"
    },

    {
        name: "Brachiosaurus",
        meaning: "Arm Lizard",
        time: "Late Jurassic early Cretaceious periods",
        geo: "North America",
        size: "85 feet long",
        diet: "herbivorous"
    }
];

var vm = new Vue({
    el:"#dinosaurs",
    data: {
        dinoList: myDinoArray
    }
});