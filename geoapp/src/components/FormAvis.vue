<template>

<div class="w-full p-6 m-auto bg-white border-t border-gray rounded shadow-lg shadow-gray-600/40 lg:max-w-md my-20">
    <div>
        <label for="small-input" class="block mb-2 text-sm font-bold text-darkgray ">Title</label>
        <input type="text" id="small-input" class="block p-2 w-full   rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 bg-darkgray  text-white" placeholder="EX: Spot View mountain">
    </div>

    <div>
    <label for="message" class="block mb-2 text-sm font-bold text-darkgray  ">Description</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-darkgray  text-white " placeholder="Leave a comment... (optionnel)"></textarea>
    </div>
</div>

    <router-view/>
</template>

<script>
    export default {
      name: 'FormAvis',
      props: {
        msg: String
      }
    }
    </script>