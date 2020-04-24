const {User,Book,UserBook}=require('../models')
const cutReview = require('../helpers/cutReview')
const toRupiah = require('../helpers/toRupiah')

// const bcrypt = require('bcryptjs')

class BookController{
    static show(req,res){
        Book.findAll()
        .then((data=>{
            // res.send(data)
            res.render('booktable',{data, req, toRupiah})
        })).catch((err=>{
            res.send(err)
        }))
    }

    static addForm(req,res){
        const error=req.query.error
        res.render('add',{error, req})
    }

    static add(req,res){
        Book.Add(req.body)
        .then((data=>{
            res.redirect('/book')
        })).catch((err=>{
            const error=[]
            for (let i = 0; i < err.errors.length; i++) {
                error.push(err.errors[i].message)
                
            }
            res.redirect(`/book/add?error=${error}`)
        }))
    }

    static editForm(req,res){
        Book.findOne({
            where:{
                id:Number(req.params.id)
            }
        })
        .then(data=>{
            res.render('edit',{data, req})
        }).catch(err=>{
            res.send(err)
        })
    }

    static edit(req,res){
        Book.update({
            title:req.body.title,
            writer:req.body.writer,
            publisher:req.body.publisher,
            price:req.body.price,
            released_year:req.body.releasedyear
        },{
            where:{
                id:Number(req.params.id)
            }
        })
        .then((()=>{
            res.redirect('/book')
        })).catch((err=>{
            res.send(err)
        }))
    }

    static delete(req,res){
        Book.destroy({
            where:{
                id:Number(req.params.id)
            }
        })
        .then((()=>{
            res.redirect('/book')
        })).catch((err=>{
            res.send(err)
        }))
    }

    static addreview(req,res){
        Book.findOne({
            where:{
                id:Number(req.params.id)
            }
        })
        .then(data=>{
            res.render('review',{data, req})
        })
        .catch((err=>{
            res.send(err)
        }))
    }

    static reviewPost(req,res){
        UserBook.create({
            UserId:req.session.userId,
            BookId:req.params.id,
            review:req.body.review
        })
        .then(data=>{
            // res.send(req.session)
            res.redirect('/book')
        })
        .catch((err=>{
            res.send(err)
        }))
    }

    static seeReview(req,res) {
        Book.findOne({
            include: User,
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            // res.send(data)
            res.render('bookreview', {data, cutReview, req})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports=BookController