const User = require('../Models/User');
const wrap = require('handle-try-catch');

const userRegistration = wrap(async (req,res)=>{
    const user = await User.create(req.body);
    res.status(200).json({user});
})

const login = wrap(async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email})

    if(user.password === password){
        res.status(200).json({user});
    }else{
        res.status(404).json({msg:'incorrect user details'});
    }if(!user.email){
        return res.status(404).json({msg:' no task with that id' });
    }

})

const updateUser =wrap(async (req , res) => {

    const {email:userEmail} = req.params;
    const user = await User.findOneAndUpdate({email:userEmail},req.body,{
        new:true,
        runValidators: true,
    }); 

    if(!user){
        return res.status(404).json({msg:' no task with that id' });
    }

    res.status(200).json({user});
})

module.exports = {
    userRegistration,
    updateUser,
    login
}