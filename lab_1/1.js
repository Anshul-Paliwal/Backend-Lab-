const object = {
    name : "Anshul paliwal",
    age : 21,

    greet: function() {
        return `Hello from ${this.name}!`;
    },
}

module.exports = object;