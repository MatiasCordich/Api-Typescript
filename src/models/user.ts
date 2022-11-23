import {Schema, Types, model, Model} from 'mongoose'
import { User } from '../interfaces/user'

const UserSchema = new Schema<User>(
    {
        name : {
            type: String,
            required: true
        },
        surname : {
            type: String,
            default: null
        },
        password : {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const UserModel = model('users', UserSchema)

export default UserModel