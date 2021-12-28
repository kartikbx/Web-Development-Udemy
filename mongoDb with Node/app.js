const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    console.log("Connected successfully to server");


    const database = client.db('fruitsDB'); //selects database and creates it if not present already
    const fruitsCollection = database.collection('fruits'); //created a collection named fruits and stored it in variable fruitsCollection

    // create a document to insert
    const doc =
      [{
        name:"Apple",
        review:"sweet and seasonal"
      },
      {
        name:"Mango",
        review:"sweet and sour and available in summer"
      }]

     /* 
      ----------------------------INSERTING DOCUMENTS------------------------------
      const result = await fruitsCollection.insertMany(doc); //used insertmany cmd to insert the document
      console.log(`3 documents were inserted with the _id: ${result.insertedId}`);
      */


     /*---------------------------USING FIND QUERY-------------------------------
      USING FIND-ONE
      // Query for a document that has the fruit name as "Mango" 
      const query = { name: "Mango" };
      const fruits = await fruitsCollection.findOne(query);
      // since this method returns the matched document, not a cursor, print it directly
      console.log(fruits);
      */

     /*
     QUERYING MULTIPLE DOCUMENTS   
         ||
         \/
     */
      const query = { };
      
      const cursor = fruitsCollection.find(query); //this query returns a cursor
      // print a message if no documents were found
      if ((await cursor.count()) === 0) {
        console.log("No documents found!");
      }
      // replace console.dir with your callback to access individual elements
      await cursor.forEach(console.dir); //this command prints each and every element
      
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
