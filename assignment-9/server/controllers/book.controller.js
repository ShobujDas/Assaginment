const { bookModel } = require("../modules/book.schema.modul");


// create a book
exports.bookCreate = async(req,res)=>{
    try {
        const {title,author,description,publishedYear} = req.body;
        const bookData = await new bookModel(
            {
                title,author,description,publishedYear
            }
        ).save();
        res.status(200).json(
            {
                success: true,
                message:"book create done",
                Data:bookData
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};


// get a all book in database...
exports.bookGet = async(req,res)=>{
    try {
       const allBook = await bookModel.find();
        res.status(200).json(
            {
                success: true,
                message:"all book get done",
                Data:allBook
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};


// get a single book by ID in database...
exports.singleBookGet = async(req,res)=>{
    try {
       const {id} = req.params;
       const singleBook = await bookModel.findOne({_id:id});
        res.status(200).json(
            {
                success: true,
                message:"single book get done",
                Data:singleBook
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};


// updata a book by ID in database...
exports.singleBookUpdate = async(req,res)=>{
    try {
       const {id} = req.params;
       const singleBookUpdate = await bookModel.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $set:{
                title:req.body.title,
                author:req.body.author,
                description:req.body.description,
                publishedYear:req.body.publishedYear
            }
        },
        {
            new: true
        }
       );
        res.status(200).json(
            {
                success: true,
                message:"single book update done",
                Data:singleBookUpdate
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};


// delete a book by ID in database...
exports.singleBookDelete = async(req,res)=>{
    try {
       const {id} = req.params;
       const singleBookDelete = await bookModel.findByIdAndDelete({ _id: id });
        res.status(200).json(
            {
                success: true,
                message:"single book delete done",
                Data:singleBookDelete
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};