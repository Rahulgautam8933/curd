const express = require('express');

const router = express.Router();

const users = require ('../models/userSchema');

// router.get('/',(req,res)=>{
//     console.log('connect');
// })


// ........................ post data from user .......................//



router.post("/register",async (req,res)=>{
    // console.log(req.body);

    const {name,email,age,mobile,work,address,description} = req.body;

    if(!name || !email|| !age || !mobile || !work || !address || !description){
        res.status(422).json('plz fill the data');

    }


    try {
        const preuser = await  users.findOne({email:email});
        console.log(preuser);
        if(preuser){
            res.status(422).json('user alreDY PRESENT');
        }
        else{
            const adduser = new users({
                name,email,age,mobile,work,address,description
            });
            await adduser.save();
            res.status(201).json('useradd')
            console.log(adduser);

        }
    
    } catch (error) {
        res.status(422).json(error);
    }



})


// get user data

router.get("/getdata",async(req,res)=>{
     
    try {
        const preuser1 = await  users.find();
        res.status(201).json(preuser1);

        console.log(preuser1);
        
    
    } catch (error) {
        res.status(422).json(error);
    }


})


// get individual user data


router.get('/getuser/:id',async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error)
    }
})

 
// update data


router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updateduser);
        res.status(201).json(updateduser);
        
    } catch (error) {
        res.status(422).json(error);

        
    }
})



// delete user data

router.delete('/deleteuser/:id',async(req,res)=>{


    try {
        const {id} = req.params;
        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);
        
    } catch (error) {
        res.status(422).json(error);

        
    }

})




module.exports = router;
