class Computer {
    constructor(make, model, driveCapacity) {
        this.make = make;
        this.model = model;
        this.driveCapacity = driveCapacity;
        this.batteryPercent = 100; 
        this.status = false; 
    }

    getBatteryPercent() {
        return `${this.batteryPercent}%`;
    }

    getStatus() {
        return this.status ? 'ON' : 'OFF';
    }
}


