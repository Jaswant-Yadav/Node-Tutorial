// UPDATE DATA

const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
      
            { name: "v20" }, { $set: { name: "Vivo V20" } }
        
    );
    console.log(result);
    console.log("Updated Data sucessfully....")


}

updateData();
