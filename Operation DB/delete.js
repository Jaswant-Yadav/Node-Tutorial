// DELETE DB

const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany(
        {
            category : "laptop"
        }
    )
    console.log("deleted sucessfully.....")
}

deleteData();