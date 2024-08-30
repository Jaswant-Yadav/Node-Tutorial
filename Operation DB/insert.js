const dbConnect = require('./mongodb');

// INSERT DATA 

const insert = async() =>{
    let db =await dbConnect();
    let result = await db.insertMany(
        [
            {name:'macbook', brand: 'Mac', price: 80000, category:'laptop'},
            {name:'inspire', brand: 'Dell', price: 50000, category:'laptop'},
            {name:'HP130', brand: 'HP', price: 40000, category:'laptop'}
        ]
    )
    if(result.acknowledged){
        console.log("data is inserted sucessfully...");
    }

}
insert();