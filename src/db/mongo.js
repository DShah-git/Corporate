
import {MongoClient} from 'mongodb'; 
import { mongo_url } from '$env/static/private';
import 'dotenv/config'

// @ts-ignore
const client = new MongoClient(mongo_url)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()