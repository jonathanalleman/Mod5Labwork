class Calculator {
    constructor() {
    this.id = Math.floor(Math.random() * 100000);
    this.logger = new Logger('Calculator', this.id);

    }
    #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`)
    }
    add(num1, num2) {
    const value = num1 + num2

    this.logger.log(value)
    return value;
    }
    sub(num1, num2) {
        const value = num1 - num2
    
        this.logger.log(value)
        return value;
        }
        multi(num1, num2) {
            const value = num1 * num2
        
            this.logger.log(value)
            return value;
            }
            divide(num1, num2) {
                const value = num1 / num2
            
                this.logger.log(value)
                return value;
                }
                    

    }

    module.exports = Calculator