<template>

<form action="">
<div class="rating rating2"><!--
		--><a id="5" href="#5" title="Give 5 stars">★</a><!--
		--><a id="4" href="#4" title="Give 4 stars">★</a><!--
		--><a id="3" href="#3" title="Give 3 stars">★</a><!--
		--><a id="2" href="#2" title="Give 2 stars">★</a><!--
		--><a id="1" href="#1" title="Give 1 star">★</a>
	</div>

</form>
</template>

<script>
    export default {
      name: 'EtoileAvis',
      props: {
        msg: String
      }
    }
    </script>
<style>
body {
        background: #FDFDFD;
			font-family: "Segoe WP","Segoe UI", Helvetica, Arial, sans-serif;
			text-align:center;
		}

em {
			display: block;
			margin: .5em auto 2em;
			color: #bbb;
		}

		
a[href*="intent"] {
			display:inline-block;
			margin-top: 0.4em;
		}

		.rating {
			width: 226px;
			margin: 0 auto 1em;
			font-size: 45px;
			overflow:hidden;
		}
		.rating a {
			float: right;
			color: #aaa;
			text-decoration: none;
			-webkit-transition: color .4s;
			-moz-transition: color .4s;
			-o-transition: color .4s;
			transition: color .4s;
		}
		.rating a:hover,
		.rating a:hover ~ a,
		.rating a:focus,
		.rating a:focus ~ a		{
			color: orange;
			cursor: pointer;
		}
		.rating2 {
			direction: rtl;
		}
		.rating2 a {
			float:none
		}
    
</style>