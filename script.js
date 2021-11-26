const message = {
    color : ['red', 'blue', 'green', 'black', 'white', 'orange', 'yellow', 'pink', 'purple', 'grey'],
    clothes : ['dress', 'suit', 'jeans', 'T-shirt', 'hoodie', 'shirt', 'trousers', 'coat', 'jacket', 'swimsuit', 'wetsuit'],
    activity : ['meeting', 'swimming', 'walking', 'running', 'cycling', 'shopping', 'climbing', 'scuba diving'],

    randomMessages() {
        const randomColor = this.color[Math.floor(Math.random() * message.color.length)];
        const randomClothes = this.clothes[Math.floor(Math.random() * message.clothes.length)];
        const randomActivity = this.activity[Math.floor(Math.random() * message.activity.length)];
        return `Today I am going for a ${randomActivity} in my ${randomColor} ${randomClothes}.`
    }
};

console.log(message.randomMessages())




