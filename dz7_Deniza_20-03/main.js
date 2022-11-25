
class Cars {
    static type ="CARS"

    constructor(params) {
        this.model = params.model
        this.color = params.color
        this.wheels = params.wheels
    }

    start() {
        console.log('Машина заведена');
    }
}

const car = new Cars({
    model: 'Toyota Rav 4',
    color: 'black',
    wheels: 4
})


class SportCars extends Cars {
    static type = "SPORT_CAR"

    constructor(params) {
        super(params)
        this.speed = params.speed
    }

    start() {
        console.log('Врууум, машина заведена');
    }
}
const formula1 = new SportCars({
    model: 'Formula-1',
    color: 'red',
    wheels: 4,
    speed: "223mph"
})


class SUVS extends Cars {
    static type = "SUV"

    constructor(params) {
        super(params)
        this.height = params.height
    }

    start() {
        console.log(' машина заведена');
    }
}
const hammerH1 = new SUVS({
    model: 'Hammer H1',
    color: 'black',
    wheels: 4,
    height: '2,197 mm'
})


class ElectroCars extends Cars {
    static type = "ELECTRO_CAR"

    constructor(params) {
        super(params)
        this.battery = params.battery
    }

    start() {
        console.log('Ваша машина заведена');
    }
}

const teslaModelS = new ElectroCars({
    model: 'Tesla Model S',
    color: 'blue',
    wheels: 4,
    battery: '103 kWh'
})


console.log(formula1, formula1.start())
console.log(hammerH1, hammerH1.start())
console.log(teslaModelS, teslaModelS.start())
