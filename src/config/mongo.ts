import 'dotenv/config'
import { connect } from 'mongoose'

const dbConnect = async (): Promise<void> => {
    const DB_URI = <string>process.env.MONGO_URL

    await connect(DB_URI)
}

export default dbConnect