<style lang="scss" scoped>
$bgc: #f5f5f5;
.bg 
{
	position:fixed;
	width:100%; height:100%;
	// background: url(../images/pink.jpg) ;
}
main 
{
	// overflow:hidden;
	.content
	{
		.title, .date {
			height: 30px;
			line-height: 30px;
		}
		.preview
		{
			
			height: 100px;
			width: 100%;
			line-height: 20px;
			// box-sizing:border-box;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis-word;
			& > *{
				text-align: left;
				// height: 20px; line-height:20px;
			}
		}
	}
}
header
{
	nav
	{
		background-color: $bgc;
	}
}
.remove, .update, .add
{
	width: 60px; height:30px;
	line-height: 30px;
	float:right;
	cursor: pointer;
	margin-right: 5px;
	border-radius: 5px;
	border:1px solid #ccc;
	&:hover
	{
		background-color: #e6155a;
		color:#fff;
		transition: all 0.5s;
		border:0;
		box-shadow:1px 1px 2px #000;
	}
}
.add
{
	position: absolute;
	bottom:calc(100% + 5px); left: 10px;
	background-color: #fff;
}
.page-btn 
{
	width:80px;
	height: 30px; line-height:30px;
	text-align: center;
	// background-color: #FFF;
	color:#e6155a;
	border-radius: 5px;
	font-weight:bold;
	cursor:pointer;
	// margin-top:10px;
}

.page-ac
{
	background-color: #e6155a;
	color:#fff;
}

</style>
<template>
    <h1>It's list</h1>
    <main>
            <div class="content" v-for="(index, item) in data">
                <h3 class="title"><a v-link="{path: '/document/'+item._id}">{{item.title}}</a></h3>
                <div class="date">{{ new Date(Date.parse(item.date)).toLocaleDateString() }}</div>
            </div>
        
        <div class="page">
                <span v-if="start">...</span>
                <a  v-for="i in (end - start + 1)"  v-link="{path: path+(i+start)  ,activeClass:'page-ac'}" class="page-btn"  >{{i+1}}</a>
                <span v-if="end != len-1">...</span>
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
                console.log(data.start)
                return {
                    data: JSON.parse(data.data),
                    start: +data.start,
                    end: +data.end,
                    path: data.path
                }
            })
            }
        }
    }
</script>