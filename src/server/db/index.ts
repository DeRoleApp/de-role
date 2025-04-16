import mongoose from 'mongoose'

const MONGODB_URI =
  'mongodb+srv://admin:admin@teste.wiajo.mongodb.net/?retryWrites=true&w=majority&appName=Teste'

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI não está definida nas variáveis de ambiente')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

const globalMongoose = globalThis as typeof globalThis & {
  mongoose: MongooseCache
}

if (!globalMongoose.mongoose) {
  globalMongoose.mongoose = {
    conn: null,
    promise: null
  }
}

const cached = globalMongoose.mongoose

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}
