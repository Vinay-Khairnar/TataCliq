const mongoose=require('mongoose');
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,   
            require:true
        },
        avatar:{
            type:String,
            require:true
        },
        password:{
            type:String,
            select:false
        },
        authType:{
            type:String,
        },
        githubOAuth:{
              username:String,
        },
        googleOAuth:{
             useremail:String,
        },
        facebookOAuth:{
              useremail:String,
        },
         wishlist:[String]
    },{
        versionKey:false,
        timestamps:true
    }
)
const User = mongoose.model('users',userSchema);
module.exports=User;