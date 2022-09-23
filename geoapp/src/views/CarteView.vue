<template>
    <NavbarMain></NavbarMain>  
<div class="flex justify-center">
    <div class="button  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm  mt-1 w-12"><button type = "button" v-on:click="removePolygon">reset</button> </div>
  </div>
  <div class="flex justify-center ">
    <div class="button mt-1 w-12 text-white bg-blue-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm  "><button onclick="validatePolygon()" >valider</button> </div>
  </div>
<div  id="mapContainer" >
    {{pathOne}}
     </div>



  

    <FooterMain></FooterMain>
    

</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue';
import FooterMain from '@/components/FooterMain.vue';
import ApiService from '@/service/ApiService';

import "leaflet/dist/leaflet.css";
import L from "leaflet";


export default {
  name: "LeafletMap",
  components: {
    NavbarMain,
    FooterMain
},
  data() {
    return {
      map: null,
      donner_gps:[],
      polygon:null,
    };
  },
  mounted() {
    this.map = L.map("mapContainer").setView([46.05, 11.05], 5);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
   
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    L.marker([50, 14]).addTo(this.map);

    L.marker([53, 20]).addTo(this.map);
    L.marker([49.5, 19.5]).addTo(this.map);
    L.marker([49, 25]).addTo(this.map);
    L.marker([-10, 25]).addTo(this.map);
    L.marker([10, -25]).addTo(this.map);
    L.marker([0, 0]).addTo(this.map);
    

    this.map.on('click',this.onMapClick);
  },
  methods: {
 onMapClick(e) {
   console.log(e)
        var donner=e.latlng
        this.donner_gps.push(donner);
        console.log(this.donner_gps)
        if (this.polygon)this.polygon.remove()
        if (this.donner_gps.length>1)
        this.polygon = new L.polygon( this.donner_gps).addTo(this.map);
        
},

async validatePolygon(){

  var result = await ApiService.post("rides.json")
  var ride_info = result.data
  console.log(ride_info)


}, 

removePolygon(){

  this.polygon.remove()
  this.donner_gps=[]

}

  



  },
  
  onBeforeUnmount() {
    if (this.map) {
      (this.map).remove();
    }
    
  },
  

};






</script>


<style >
    #mapContainer {
      position: absolute;
  top:15%;
  bottom: 8%;
  width: 100%;
    }

    .button{
      z-index: 1000;
    }

    </style>