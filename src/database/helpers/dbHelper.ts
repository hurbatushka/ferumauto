import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.DB_CONN_STRING as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
class DatabaseHelper {
  async getAllServices() {
    try {
      await client.connect();
      const res = await client.db('ferrumauto').collection('Service').find({}).toArray();
      return res;
    } finally {
      await client.close();
    }
  }

  async run() {
    try {
      await client.connect();
      await client.db('ferrumauto').command({ ping: 1 });
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
      await client.close();
    }
  }
}

export default DatabaseHelper;
