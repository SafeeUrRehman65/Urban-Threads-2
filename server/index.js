// const express = require('express');
// const { json } = require('react-router-dom');
// const app = express();
// const port = 3000;
// const cors = require('cors')
// const bodyParser = require('body-parser')

// app.use(cors());
// app.use(express.static('build'));

// const API_KEY = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';
// const BASE_URL = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action';

// // For Product Overview Page
// app.get('/api/products/:category?/:subCategory?/:productUUID?', async (req, res, _next) => {
//   const category = req.params['category']
//   const subCategory = req.params['subCategory']
//   const productUUID = req.params['productUUID']

//   const url = `${BASE_URL}/find`;

//   const filters = {}

//   if (category != undefined) {
//     filters['category'] = category.toLowerCase()
//   }

//   if (subCategory != undefined) {
//     filters['sub_category'] = subCategory.toLowerCase()
//   }

//   if (productUUID != undefined) {
//     filters['unique_identifier'] = productUUID.toUpperCase()
//   }

//   const data = {
//     dataSource: 'Cluster0',
//     database: 'UrbanThreadsDB',
//     collection: 'Products',
//     filter: filters
//   };

//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'apiKey': API_KEY
//   };

//   fetch(url, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(data)
//   }).then(async response => {
//     const data = await response.json();
//     res.send(data);
//   }).then(async result => {
//     console.log('API Response:', result);
//   }).catch(async error => {
//     console.error('Fetch error:', error);
//   });
// });

// // For products Page
// app.get('/data/product/fetch', async (_req, res, _next) => {
//   const apiKey = 'ZOlIbr32F9Z8KGoIeMIBcqSiLUuRVJQnuZrUF91R97398K4IRrfIa9uIedM6d7PJ';
//   const url = 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zwsiz/endpoint/data/v1/action/find';
//   const data = {
//     dataSource: 'Cluster0',
//     database: 'UrbanThreadsDB',
//     collection: 'ProductsH',
//     filter: { name: { $in: ['men', 'boys'] } }
//   }

//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'apiKey': apiKey
//   };

//   fetch(url, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(data)
//   }).then(async response => {
//     res.send(await response.json());
//   }).then(async result => {
//     console.log('API Response:', result);
//   }).catch(async error => {
//     console.error('Fetch error:', error);
//   });
// });



// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://administrator:safee-123@cluster0.uofanou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// async function run() {
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   try {
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");
//   } catch (err) {
//     console.error("Connection failed!");
//     console.error("Error Name:", err.name);
//     console.error("Error Message:", err.message);
//     if (err.code) console.error("Error Code:", err.code);
//     if (err.stack) console.error("Stack Trace:", err.stack);
//     if (err.reason) console.error("Reason:", err.reason); // Sometimes used in driver errors
//   } finally {
//     await client.close();
//   }
// }

// run();


const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection setup
const uri = "mongodb+srv://administrator:safee-123@cluster0.uofanou.mongodb.net/UrbanThreadsDB?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Middleware
app.use(cors());
app.use(express.static('build'));

// Connect to MongoDB when server starts
let db;
async function connectToMongoDB() {
  try {
    await client.connect();
    db = client.db();
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Connection failed!");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    if (err.code) console.error("Error Code:", err.code);
    process.exit(1); // Exit if can't connect to DB
  }
}

// For Product Overview Page
app.get('/api/products/:category?/:subCategory?/:productUUID?', async (req, res) => {
  try {
    const { category, subCategory, productUUID } = req.params;
    const filters = {};

    if (category) filters['category'] = category.toLowerCase();
    if (subCategory) filters['sub_category'] = subCategory.toLowerCase();
    if (productUUID) filters['unique_identifier'] = productUUID.toUpperCase();

    const products = await db.collection('Products').find(filters).toArray();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// For products Page (men/boys filter)
app.get('/data/product/fetch', async (req, res) => {
  try {
    const products = await db.collection('ProductsH')
      .find({ name: { $in: ['men', 'boys'] } })
      .toArray();
    res.json(products);
  } catch (error) {
    console.error('Error fetching men/boys products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server after DB connection
connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});