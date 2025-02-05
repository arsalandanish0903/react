import config from '../config/config.js';
import {Client, Account, ID} from 'appwrite'

export class AuthService {

    client = new Client()
    account;
    
    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // Call Another Method
                return this.login({email, password});
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentuser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite Service :: getCurrentUser :: error', error);
        }

        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;