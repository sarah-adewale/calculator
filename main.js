/*
required ability
accepts intputs of numbers, operators, and another number
should accept decimals
store inputs
recognize inputs, perform calculations
return a result

other features
accepts longer arithmetic operations
display all input as it is being entered
store previous total as start of next operation
clear all entries
prevent invalid input (operators next to each other, two decimals points)
*/

const keys = document.querySelector('.calculator-buttons') //listens for click anywhere inside the container
    keys.addEventListener('click', event => { //grabbing the value from the input
        const {target} = event
        const {value} = target
        if(!target.matches('button')){
            return; //stop the function(quickly). return not really necessary
        }else{
            //pass to parse method
            calculator.parseIput(value)
        }
    })


const calculator = {
    displayText: '0',
    prevTotal: null,

    parseIput(value){

        switch(value){
            case '=':
                //calculate the answer
                break;
            case 'AC':
                //clear screen and stored value
                break;
            case '.':
                if(this.displayText == 0){
                    //pass '0' into add text method
                }else{
                    //add value to text string
                }
                break;
            default:
                //add value to text string
                break;
        }

    },

    addText(value){ //configure text string
        if(this.displayText === '0'){
            this.displayText = ''
        }else if(this.prevTotal !== null){
            this.displayText = this.prevTotal //add preivous value to new value
            this.prevTotal = null
        }
        if(){ //prevent invalid values/input. if user entered invalid sequence, dont proceed

        }
        this.displayText += value
        //output display to screen
    }
}