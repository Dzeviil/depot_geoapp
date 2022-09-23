<template>

  
  <NavbarMain></NavbarMain>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div
            class="w-full p-6 m-auto bg-white border-t border-gray rounded shadow-lg shadow-gray-600/40 lg:max-w-md">
            <h1 class="text-3xl font-semibold text-center text-darkgray">CONNEXION</h1>
    
            <form class="mt-6">
                <div>
                    <label for="email" class="block text-sm text-gray-800">Email</label>
                    <input type="email" id="email" ref="email" class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <div class="mt-4">
                    <div>
                        <label for="password" class="block text-sm text-gray-800">Password</label>
                        <input id="pwd" type="password" ref="pwd"
                            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    </div>
                    <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
                    <div class="mt-6">
                        <div id="error_mail"></div>
                        <div id="error_mdp"></div>
                        <button id="signin" v-on:click="signin"
                            type="button" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-darkgray rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="inscription"
                    class="font-medium text-purple-600 hover:underline">Sign up</a></p>
        </div>
    </div>
  <FooterMain></FooterMain>
  

</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue';
import FooterMain from '@/components/FooterMain.vue'
// import { UserService } from '@/service/index.ts'
import ApiService from '@/service/ApiService';
// require('../service/openapi.js')

export default {
name: 'HomeView',
components: {
  NavbarMain,
  FooterMain

},
// async created(){

// },
methods: {

async signin(){
  
    var result = await ApiService.get("users.json")
    var user_info = result.data
    var mail = document.getElementById('email').value
    var pwd = document.getElementById('pwd').value
    console.log(user_info)
    for(var i = 0; i<user_info.length; i++){

        if(user_info[i]['mail'] == mail){
            if(user_info[i]['mail'] == pwd){
             var id = user_info[i]["id"]
             var info_id = await ApiService.get("users/"+id)
             console.log(info_id)
            }
            else{
                document.getElementById("error_mdp").innerHTML ="Mot de passe invalide"
            }
        }
        else{
            document.getElementById("error_mail").innerHTML ="Email invalide"
        }


    }

  
}  ,  manageResults(results){
    console.log(results);
  if(results.data && results.data.includes("[id]") )
 {
console.log("login success");
localStorage.setItem("isLoggedIn","true");
// this.$router.replace({ path: '/profil' })
 return ;
 }
},

}
}
</script>
