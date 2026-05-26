 
 
 /*
 owner objectId user
    createdAt date
    updatedAt date
    video objectId videos
    comment objectId comments
    tweet objectId tweet
 */
 import mongoose, { Schema } from "mongoose";
 
 let likeschema=new Schema({
     
 
   
     owner:[
         {
             type:Schema.Types.ObjectId,
             ref:"User"
         }
     ],
      ownervideo:[
         {
             type:Schema.Types.ObjectId,
             ref:"Video"
         }
     ],
      ownertweet:[
         {
             type:Schema.Types.ObjectId,
             ref:"Tweet"
         }
     ],
      ownercomment:[
         {
             type:Schema.Types.ObjectId,
             ref:"Comment"
         }
     ],
    

     
 
 },
 {timestamps:true}
 )
 
 
 export let Like=mongoose.model("Like",likeschema)

