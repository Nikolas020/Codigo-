const {Blog}=require('../models')
let listarBlogService = async() => {
    try{
        console.log("Hello there")
        let resp= await Blog.findAll();
        return resp;
    }
    catch(e){   
    console.log(e)
    }
}
module.exports={listarBlogService}