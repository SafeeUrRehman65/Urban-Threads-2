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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://administrator:safee-123%40123@cluster0.uofanou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Connection failed:", err.message);
  } finally {
    await client.close();
  }
}

run();


