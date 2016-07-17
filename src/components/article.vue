<template>
    <h1>It's article</h1>
    <main>
      <div class="content">
        <h2 class="title">{{data.title}}</h2>
        <div class="text">{{{ data.content }}}</div>
      </div>
    </main>
</template>
<script>
import backend from "./../../config/backend.js"
import url from "url"
    module.exports = {
        route: {
            data: function(transition){
                return $.ajax({
                url: backend.url+url.parse(document.URL).path,
                type: "get"
            }).then(function(data){
                return {
                    data: data.data[0],
                    time: data.time
                }
            })
            }
        }
    }
</script>