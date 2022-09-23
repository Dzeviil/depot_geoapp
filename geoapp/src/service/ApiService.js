// Script qui gere les requetes ajax avec AXIOS

const axios = require('axios').default;

const url= "http://172.17.1.47/Symfony/geoapp_back/public/index.php/api/";
class ApiService{

    //des fonctions async qui permettent d'attendre que le resultat arrive 
    async post(action,params={}){
        let results = await axios.post(url + action, params, {headers: {"Access-Control-Allow-Origin": ""}});
        return results;
    }

    async get(action){
        let results = await axios.get(url + action , {headers: {"Access-Control-Allow-Origin": ""}});
        return results;
    }
    // async getid(action,params={}){
    //     let results = await axios.getid(url + action , params,{headers: {"Access-Control-Allow-Origin": ""}});
    //     return results;
    // }
    async update(action,params={}){
        let results = await axios.patch(url + action, params, {headers: {"Access-Control-Allow-Origin": ""}});
        return results;
    }
    async delete(action,params={}){
        let results = await axios.delete(url + action, params, {headers: {"Access-Control-Allow-Origin": ""}});
        return results;
    }
}

export default new ApiService();