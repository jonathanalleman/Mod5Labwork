const express = require('express');
const router = express.Router();

const calculatorController =
require('../controllers/calculatorController')


router.get('/add', (req, res) => {
calculatorController.addNumbers(req,res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res)
    })

    router.get('/multi', (req, res) => {
        calculatorController.multiNumbers(req,res)
        })

        router.get('/sub', (req, res) => {
            calculatorController.subNumbers(req,res)
            })
module.exports = router;


// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
//     })

//     router.get('/divide', (req, res) => {
//         let number1 = parseInt(req.query.num1);
//         let number2 = parseInt(req.query.num2);
//         let divide = number1 / number2
//         console.log(divide)
//         res.status(200)
//         res.json({result:divide})
//         })

//         router.get('/multiply', (req, res) => {
//             let number1 = parseInt(req.query.num1);
//             let number2 = parseInt(req.query.num2);
//             let multi = number1 * number2
//             console.log(multi)
//             res.status(200)
//             res.json({result:multi})
//             })




//             router.get('/subtract', (req, res) => {
//                 let number1 = parseInt(req.query.num1);
//                 let number2 = parseInt(req.query.num2);
//                 let sub = number1 - number2
//                 console.log(sub)
//                 res.status(200)
//                 res.json({result:sub})
//                 })

//     module.exports = router;
