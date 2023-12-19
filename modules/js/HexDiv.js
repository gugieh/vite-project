export default class CustomDiv {

    constructor(hex) {

        console.log(this)

        this.hex = hex
        //
        this.createDiv()

    }

    createDiv() {

        this.div = document.createElement("div")
        this.div.classList = 'hex-row'
        for (let i = 0; i < this.hex; i++) {
            if (i % 2 == 0) {
                const top = document.createElement("div")
                top.classList = 'top'
                const middle = document.createElement("div")
                middle.classList = 'middle'
                const bottom = document.createElement("div")
                bottom.classList = 'bottom'
                const hex = document.createElement("div")
                hex.classList = 'hex'
                hex.append(top)
                hex.append(middle)
                hex.append(bottom)
                this.div.append(hex)
            }
            if (i % 2 !== 0) {
                const top = document.createElement("div")
                top.classList = 'top'
                const middle = document.createElement("div")
                middle.classList = 'middle'
                const bottom = document.createElement("div")
                bottom.classList = 'bottom'
                const hex = document.createElement("div")
                hex.classList = 'hex even'
                hex.append(top)
                hex.append(middle)
                hex.append(bottom)
                this.div.append(hex)
            }

        }

    }

    getRoot() {
        return this.div
    }

}