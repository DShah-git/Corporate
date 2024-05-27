// @ts-nocheck
import {MongoClient} from 'mongodb'; 
import 'dotenv/config'

const client = new MongoClient(process.env.mongo_url)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()