const router = require('express').Router();
const table = require('../models/table1.model');


router.route('/').get((req,res)=>{
    table.find()
        .then(table => res.json(table))
        .catch(err => res.status(400).json('Erro:'+ err));
});

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;

    const newtable = new table({
        title,
        description,
        image
    });

    newtable.save()
        .then(()=>res.json('table added!'))
        .catch(err => res.status(400).json('Error:'+err))
});

router.route('/:id').get((req,res)=>{
    table.findById(req.params.id)
        .then(table => res.json(table))
        .catch(err => res.status(400).json('Error:'+err))
})

router.route('/:id').delete((req,res)=>{
    table.findByIdAndDelete(req.params.id)
        .then(()=>res.json("table deleted" ))
        .catch(err=>res.status(400).json('Error:' + err));
})

//update exercises by Id
router.route('/update/:id').post((req,res)=>{
    table.findById(req.params.id)
        .then(table=>{
            console.log("req",req.body);
            console.log(table,"exe");

           table.title = req.body.title;
            table.description = req.body.description;
            table.image=req.body.image;
            table.save()
                .then(()=> res.json('table Updated!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error:'+err))
})
module.exports = router;