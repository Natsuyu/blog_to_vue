<style lang='scss'>
$bgc: #f5f5f5;
$descript: #999;
$green: #e6155a; //pink
//reset
*{margin:0;padding:0;text-align:center;}
//
body
{
	background-color: $bgc;
	font-family:"Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", sans-serif;
}
img
{
	max-width: 100%;
}
.description
{
	color: $descript;
	white-space: normal;
	// overflow:hidden;
}
ul
{
	list-style:none;
}
a
{
	text-decoration: none;
	color:#473232;;
	display: inline-block;
}
header
{
	width: 60%;
	height: 100px;
	// position: relative;
	margin:0 auto;
	padding-top:40px;
	// background-color: red;
	.head-title{
		font-size: 60px;
		line-height: 60px;
		margin-top:10px;
	}
	p 
	{
		margin-top: 5px;
		text-align: right;
		font-size: 0.8rem;
	}
	nav
	{
		position: absolute;
		top: 15px; left:20px;
		width: 100%;
		z-index: 99;
		box-sizing: border-box;
		li 
		{
			float: left;
			margin-right: 20px;
			line-height: 40px;
			height: 40px;
			width: 80px;
			position: relative;
			&::after
			{
				content: "";
				width: 100%; height: 3px;
				position: absolute;
				top:100%; left:100%;
				background-color: $green;
				transition: all 0.7s;
				opacity: 0;
			}
		}
		li:hover
		{
			transition: all 0.7s;
			a 
			{
				color: $green;
				font-weight: bolder;
			}
			&::after 
			{
				transform: translateX(-100%);
				opacity: 1;
			}
		}
	}
}
main
{
	width: 50%; margin:auto;
	margin-top: 20px;
	background-color: #fff;
	box-sizing: border-box;
	min-height: 100px;
	padding:25px 25px 35px;
	position: relative;
	.content
	{
		padding:5px;
		margin-bottom: 1px;
		background-color: #FFF;
		& > * {
			text-align:left;
		}
		.title a
		{
			color: $green;
			// color:#473232;
		}
	}
	&::after
	{
		content: "";
		width: 200px; height: 100px;
		box-shadow: 10px 10px 5px #888;
		position: absolute;
		bottom:8px; right: 20px;
		z-index: -1;
		transform: rotate(4deg);
	}
}
.archieve
{
	position: fixed;
	top:250px;
	right: 5%;
	width: 15%;
	// background-color: yellow;
	box-sizing: border-box;
	padding-top:5px;
	li 
	{
		height: 30px;
		line-height: 30px;
	}
}
footer
{
	width:100%; 
	height:50px;
	line-height: 50px;
	color:$descript;
}
@media screen and (max-width: 425px){
	main
	{
		min-width: 80%;
		&::after
		{
			width: 50%; height: 100px;
			box-shadow: 10px 10px 5px #888;
			position: absolute;
			bottom:8px; right: 20px;
			z-index: -1;
			transform: rotate(4deg);
		}
	}
	.archieve
	{
		display: none;
	}
	header 
	{
		.head-title
		{
			font-size: 1.5rem;
		}
		nav 
		{
			margin-top: -10px;
			font-size: 0.8rem;
		}
	}

}
@media screen and (max-width: 768px){
	// header
	// {
	// 	nav{
	// 		width: 100%;
	// 	}
	// }
}
</style>
<template>
    <h1>Here it's index</h1>
    <a v-link="{path: '/list/0'}">Go To List</a>
    <a v-link="{path: '/document/0'}">Go To Document</a>
</template>
<script>
    module.exports = {
        data: function(){
            return {}
        }
    }
</script>