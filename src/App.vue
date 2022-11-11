<template>
  <div id="app">
		<div class="buttons">
				<button class="say-hi-button" @click="download">SAY HI!</button>
		</div>
    <PaintBall title="paintball" v-if="layout === 'landing'"/>
    <PaintBallMap title="Paintball AR" v-else-if="layout === 'map1'"/>
	<Gps title="gps" v-else-if="layout === 'gps'"/>
	<Gps1 title="gps1" v-else-if="layout === 'gps1'"/>
	<Map title="map" v-else-if="layout === 'map'"/>
  </div>
</template>

<script>
import PaintBall from './components/PaintBall.vue'
import PaintBallMap from './components/PaintBallMap.vue'
import Gps from './components/Gps.vue'
import Gps1 from './components/Gps1.vue'
import Map from './components/Map.vue'
import './normalize.css'


export default {
  name: 'app',
  components: {
    PaintBall,
    PaintBallMap,
	Gps,
	Gps1,
	Map
  },
  data: function () {
    return {
      layout: 'gps1'
    }
  },
  methods: {
    changeView: function (layout) {
      this.layout = layout;
    },
	download() {
	// 截图下载
		// html2canvas(document.getElementById('app'), {
		// 	backgroundColor: 'white', //画出来的图片有白色的边框,不要可设置背景为透明色（null）
		// 	useCORS: true, //支持图片跨域
		// 	scale: 1, //设置放大的倍数
		// }).then((canvas) => {
		// //截图用img元素承装，显示在页面的上
		// let img = new Image()
		// //如果你需要下载截图，可以使用a标签进行下载
		// let a = document.createElement('a')
		// 	a.href = canvas.toDataURL('image/pdf')
		// 	a.download = 'test'
		// 	a.click()
		// })
	},

  }
}
</script>

<style>
	body{
		max-width: 630px!important;
		margin: auto;
		overflow-x: hidden;
		text-align: center;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: calc(100vh)!important;
		width: 100%;
		/* z-index: 2; */
		position: relative;
	}

/* 	.a-canvas {
		position: relative;
		width: auto!important;
		height: 100%!important;
		aspect-ratio: 640/480;
		display: block;

	} */
/* 	canvas {
		position: relative;
		width: 100%!important;
		height: 100%!important;
		display: block;
	
	} */
	video {
		height: 0;

	}
	.site-logo {
		max-width: 200px;
		margin: 0 auto;
	}
	.buttons {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 5em;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}
	.say-hi-button {
		padding: 0.25em;
		border-radius: 4px;
		border: none;
		background: white;
		color: black;
		width: 5em;
		height: 2em;
	}
</style>