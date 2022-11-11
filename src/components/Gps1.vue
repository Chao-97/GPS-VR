<template>
  <div class="gps1" id = "gps1"> 
	  
    <a-scene
		embedded
        vr-mode-ui="enabled: false"
		arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false;'>
		<a-assets>
			<a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
		</a-assets>
        <!-- <a-box material="color: red;" scale="5 5 5" gps-entity-place="latitude: 31.1872034; longitude: 121.4282682;" position="0 30 0"></a-box> -->
		<a-gltf-model id="avatar" scale="0.03 0.03 0.03"   look-at="[gps-camera]" gps-entity-place="latitude: 31.1872034; longitude: 121.4282682;" position="0 0 0" src="#avatarModel"></a-gltf-model>
        <a-camera
		
            rotation-reader
            gps-camera="gpsMinDistance: 5;"
        >
		</a-camera>
	</a-scene>
</div>
</template>

<script>

export default {
	
	name: 'Gps1',
	props: {
		title: String
	},
	methods:{
		// onClick(){
		// 	document.querySelector('a-scene').components.screenshot.capture('perspective')	
		// },
	},
	beforeMount() {
		
		

	},
	mounted() {
		

		
		
	}
		
}


</script>

<style scoped>
	.gps1{
		position: relative;
		width: auto;
		height: 100%;
		aspect-ratio: 3072/4096;
		/* top:1em;	 */
	}

</style>
