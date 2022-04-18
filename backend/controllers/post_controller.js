const models = require('../models')

exports.createPost = async(request,response,next) =>{
    try{
        let mandatory = ['title']
        for (let i = 0; i < mandatory.length; i++){
            if (!(mandatory[i] in request.body)){
                response.status(400).json('Please provide '+mandatory[i])
                return
            }
        }
        var new_post = await models.Posts.create({title: request.body.title})
        response.status(200).json(new_post.dataValues.id)        
    } catch (e){
        if (process.env.DEV){
            response.status(500).send(e.message)
            return
        } else {
            next(e)
        }
    }
}

exports.attachImage = async(request,response,next) =>{
    try{
        post = await models.Posts.findOne({where:{id: request.params.id}})
        updated_post = await post.update({image_name: request.file.filename})
        response.status(200).json(updated_post)
    } catch (e){
        if (process.env.DEV){
            response.status(500).send(e.message)
            return
        } else {
            response.status(500).send('Something went wrong')
        }
    }
}