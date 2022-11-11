<template>
  <div class="gps">
	<a-scene  vr-mode-ui='enabled: false' arjs-new="sourceType: webcam;videoTexture: true; debugUIEnabled: false" renderer='antialias: true; alpha: true' v-pre>
	<!--
		<a-camera gps-new-camera='gpsMinDistance: 5' look-controls-enabled='false' arjs-device-orientation-controls></a-camera>
	-->
		<!-- <a-box scale='40 40 40' material = "color :black;" gps-new-entity-place='latitude:31.187619 ;longitude:121.429286 ;' v-pre></a-box> -->
		<a-camera gps-new-camera='gpsMinDistance: 5' v-pre></a-camera>
	</a-scene>
	<div id='setloc' style='position:absolute; left: 10px; bottom: 2%; z-index:999; background-color: blue; color: white; padding: 10px'>
		Lat:<input id="lat" value="31.187619" />
		Lon: <input id="lon" value="121.429286"/>
		Min Acc: <input id='minacc' value='1000' /> <input type='button' id='go' value='go' />
	</div>
  </div>
</template>

<script>

export default {
	
	name: 'Gps',
	props: {
		title: String
	},
	beforeMount() {

		//   navigator.mediaDevices.enumerateDevices().then(function (devices) {
		//       console.log(devices);
		//  if(devices){ devices.forEach(function(e){
		//       console.log(e)
		//       if(e.kind=="videoinput")
		//       {
		//           camreass.push(e.deviceId)
		//       }
		//   })}
		//   console.log(camreass)
			
		// })

	},
	mounted() {
		// navigator.mediaDevices.enumerateDevices().then(function (devices) {
		//       console.log(devices);
		//  if(devices){ devices.forEach(function(e){
		//       console.log(e)
		//       if(e.kind=="videoinput")
		//       {
		//           camreass.push(e.deviceId)
		//       }
		//   })}
		//   console.log(camreass)
		// }).then(()=>{
			// const length = camreass.length;
			// const sceneEl = document.querySelector("[arjs]");
			// const sceneSy = sceneEl.systems["arjs"];
			// sceneEl.setAttribute('arjs',{sourceType: "webcam",deviceId:camreass[length-1],videoTexture: true,debugUIEnabled: false,})
			// console.log("length1",length);
			// sceneSy.init(); 
		// })
		
	// sceneSy.init(); 

	let testEntitiesAdded = false;
	alert('If testing the lat/lon manual input on a mobile device, please turn off your GPS to avoid the real location being detected.');
	const el = document.querySelector("[gps-new-camera]");
	el.addEventListener("gps-camera-update-position", e => {
		if(!testEntitiesAdded) {
			alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
			// Add four boxes to the north (red), south (yellow), west (blue)
			// and east (red) of the initial GPS position
			const properties = [{
					color: 'red',
					latDis: 0.001,
					lonDis: 0
				},{
					color: 'yellow',
					latDis: -0.001,
					lonDis: 0
				},{
					color: 'blue',
					latDis: 0,
					lonDis: -0.001
				},{
					color: 'green',
					latDis: 0,
					lonDis: 0.001
				}
			];
			for(const prop of properties){
				const entity = document.createElement("a-box");
				entity.setAttribute("scale", {
					x: 20, 
					y: 20,
					z: 20
				});
				entity.setAttribute('material', { color: prop.color } );
				entity.setAttribute('gps-new-entity-place', {
					latitude: e.detail.position.latitude + prop.latDis,
					longitude: e.detail.position.longitude + prop.lonDis
				});
				document.querySelector("a-scene").appendChild(entity);
			}
			testEntitiesAdded = true;
		}
	});

	document.getElementById("go").addEventListener("click", ()=> {
		const lat = document.getElementById('lat').value;
		const lon = document.getElementById('lon').value;
		const minacc = document.getElementById('minacc').value;
		console.log("change")
		el.setAttribute('gps-new-camera', { 
			simulateLatitude: lat, 
			simulateLongitude: lon, 
			positionMinAccuracy: minacc } );
	});
	}
}


</script>

<style scoped>
  .site-title {
    text-transform: uppercase;
  }
  .paintball {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  button {
    font-size: 20px;
    display: block;
    border: none;
    color: #fff;
    background-color: hsla(248, 100%, 76%, 1);
    border-radius: 6px;
    margin: 0 auto .5em;
    padding: .5em 1em;
    box-shadow: 4px 4px 0px #000;
    transition: .25s;
  }
  button:hover {
    box-shadow: 2px 2px 0px #000;
  }
</style>
