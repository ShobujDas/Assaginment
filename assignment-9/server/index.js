const {PORT ,mongoose ,MONGOOSE ,app} = require('./app');

// connect mongoose....
const mongooseConnect = async ()=>{
    try {
    await mongoose.connect(MONGOOSE);
     console.log('mongoose connect done.');
    } catch (error) {
     console.log(error);
    }
 };
 

 // run server....
 app.listen(PORT , async ()=>{
     console.log(`server run successfully http://127.0.0.1:${PORT}`);
     await mongooseConnect();
 });