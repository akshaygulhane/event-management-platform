import mongoose from 'mongoose';

const MONGODB_HOST_URL = process.env.MONGODB_HOST_URL || ''

export const initialize =  (async () => {
  try {
    const db = await mongoose.connect(MONGODB_HOST_URL)
    console.log('connection : ' + db.connection.host);
  } catch (error) {
    console.log('error connecting to database', error)
  }
})
