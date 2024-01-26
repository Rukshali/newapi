import User from "../models/userModel.js";

//fetch
export const fetch= async(req,res)=>{
    try{
        const users = await User.find();
        if(users.length==0){
            return res.status(200).json({message:"user not found"});
        }
        res.status(200).json(users);

    } catch{
        res.status(200).json({error:"Internal server error"});
    }
}
//create
export const create = async(req,res)=>{
    try{
        const userData = new User(req.body);
        const {email} = userData;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(200).json({message:"User already exists"});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);

    } catch(error){
        res.status(200).json({error:"Internal server error"});
    }
}
//update 
export const update=async(res,req)=>{
    try{
        const id = req.params.id;
        const userExist= await User.findOne({_id:id})
        if(!userExist){
            return res.status(200).json({message:"User not found"});
        } 
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedUser);

    }catch(error) {
        res.status(200).json({error:"Internal server error"});
    }
}
//delete
export const deleteUser= async(res,req)=>{
    try{
        const id = req.params.id;
        const userExist= await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message:"user deleted sucessfully"});
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }
}