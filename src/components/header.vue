<template>
<header>
    <h1 class="head-title">Natsuyu</h1>
    <p class="description">5rC45LiN5oG26KiA55u45ZCR77yM5rC45LiN5pqX6Ieq6Zeu5YG/</p>
    <p class="description">5rC45LiN5pS+5Lu757ud5pyb77yM5rC45LiN5YGc5q2i5oiQ6ZW/</p>
    <nav>
      <ul class="nav-guide">
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/list/0">BLOG</a></li>
        <li><a href="/favorite">FAVORITE</a></li>
      </ul>
    </nav>
</header>
<script type="text/javascript">
  $(window).resize(function(){
    var main = $("main")[0];
    var archi = $("#archieve");
    var width = main.offsetWidth;
    if(width <= 500){
      archi.css({
        display: "none"
      });
    }else{
      archi.css({
        display: "block"
      })
    }
  })
</script>  
</template>
<script>
    export default {
        data:()=> {
            return {}
        }
    }
</script>