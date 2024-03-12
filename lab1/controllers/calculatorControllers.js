const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    }

    const divideNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let divide = number1 / number2
        console.log(divide)
        res.status(200)
        res.json({result:divide})
        }

        const multiNumbers = (req, res) => {
            let number1 = parseInt(req.query.num1);
            let number2 = parseInt(req.query.num2);
            let multi = number1 * number2
            console.log(multi)
            res.status(200)
            res.json({result:multi})
            }




            const subNumbers = (req, res) => {
                let number1 = parseInt(req.query.num1);
                let number2 = parseInt(req.query.num2);
                let sub = number1 - number2
                console.log(sub)
                res.status(200)
                res.json({result:sub})
                }

    module.exports = {
        addNumbers , divideNumbers, multiNumbers, subNumbers
       
    }
    