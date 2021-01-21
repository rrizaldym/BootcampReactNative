console.log(`1. Animal Class `)
class Animal {
    // Code class di sini
    constructor(name){
        this._name = name
        this.legs=4
        this.cold_blooded=false
    }
    get name(){
        return this._name
    }
}
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal{
    constructor(cold_blooded){
        super(cold_blooded)
    }
    yell(){
        console.log(`Auooo`)
    }
}

class Frog extends Animal{
    constructor(legs, cold_blooded){
        super(legs, cold_blooded)
    }
    jump(){
        console.log(`hop hop`)
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log(`\n2. Function to Class`)

class Clock{
    constructor({template}){
        this._template = template
        this._timer
    }
    render(){
        this._date = new Date()
        
        this._hours = this._date.getHours();
        if (this._hours < 10) this._hours = '0' + this._hours;

        this._mins = this._date.getMinutes();
        if (this._mins < 10) this._mins = '0' + this._mins;

        this._secs = this._date.getSeconds();
        if (this._secs < 10) this._secs = '0' + this._secs;

        this._output = this._template
        .replace('h', this._hours)
        .replace('m', this._mins)
        .replace('s', this._secs);

        console.log(this._output);
    }
    start(){
        this.render()
        this._timer = setInterval(this.render.bind(this), 1000)
    }
    stop(){
        clearInterval(this._timer)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  
