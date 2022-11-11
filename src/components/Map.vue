<template>
  <div id = "map"> 
    
</div>
</template>

<script>
import styleJson1 from '../custom_map_config.json'
export default {
	
	name: 'Gps1',
	props: {
		title: String
	},
	data() {
		return{
			lat:0,
			lon:0,
		}
	},
	beforeMount() {
		
	
	},
	mounted() {
		//默认城市
		var map = new BMapGL.Map('map',{
								showControls: true,
								// enableIconClick: true,
								}); // 创建Map实例,添加室内图控件
		//var map = new BMap.Map("container");   // 创建Map实例
		var point = new BMapGL.Point(116.514, 39.915); // 创建点坐标
		// map.centerAndZoom(point, 16); // 初始化地图,设置中心点坐标和地图级别
		// map.enableScrollWheelZoom(true);
		var convertor = new BMapGL.Convertor();
		
		var geolocation = new BMapGL.Geolocation();
		    // 开启SDK辅助定位
		geolocation.enableSDKLocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				map.centerAndZoom(r.point, 16); // 初始化地图,设置中心点坐标和地图级别
				map.enableScrollWheelZoom(true);
				var mk = new BMapGL.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				alert('您的位置：' + r.point.lng + ',' + r.point.lat);
			}
			else {
				alert('failed' + this.getStatus());
			}        
		});
		// 创建定位控件
		var locationControl = new BMapGL.LocationControl({
			// 控件的停靠位置（可选，默认左上角）
			anchor: BMAP_ANCHOR_TOP_RIGHT,
			// 控件基于停靠位置的偏移量（可选）
			offset: new BMapGL.Size(20, 20)
		});
		// 将控件添加到地图上
		map.addControl(locationControl);

		// 添加定位事件
		locationControl.addEventListener("locationSuccess", function(e){
			var address = '';
			address += e.addressComponent.province;
			address += e.addressComponent.city;
			address += e.addressComponent.district;
			address += e.addressComponent.street;
			address += e.addressComponent.streetNumber;
			alert("当前定位地址为：" + address);
		});
		locationControl.addEventListener("locationError",function(e){
			alert(e.message);
		});
		
			
		
		// if (navigator.geolocation) {
		//     navigator.geolocation.getCurrentPosition(function (position) {
		//         var lat = position.coords.latitude;
		//         var lon = position.coords.longitude;
		//         console.log(lat,lon);
		// 		var map = new BMapGL.Map('map',{
		// 								showControls: true,
		// 								enableIconClick: true}); // 创建Map实例,添加室内图控件
		//         //var map = new BMap.Map("container");   // 创建Map实例
		//         var point = new BMapGL.Point(lon, lat); // 创建点坐标
		//         var convertor = new BMapGL.Convertor();

		//         var gc = new BMapGL.Geocoder();
		//         var pointArr = [];
		//         pointArr.push(point);
		//         convertor.translate(pointArr, 1, 5, function(data){
		//           console.log(data);
		//           if(data.status === 0){
		// 			  var point_new = new BMapGL.Point(data.points[0].lng,data.points[0].lat); // 创建点坐标
		// 			  map.centerAndZoom(point_new, 16); // 初始化地图,设置中心点坐标和地图级别
		// 			  map.enableScrollWheelZoom(true);
		// 			  // map.setMapStyleV2({styleJson: styleJson1});
		// 			  // 隐藏室内图
		// 			  // map.setDisplayOptions({
		// 			  //     indoor: true
		// 			  // });
		// 			  // var marker1 = new BMapGL.Marker(point_new);
		// 			  // map.addOverlay(marker1);
					  
					
					  
					  
		//              gc.getLocation(data.points[0], function (rs) {
		//               var addComp = rs.addressComponents;
		//               var curCity = {
		//                   id: '',
		//                   city: `${addComp.city}`,
		//                   district:`${addComp.district}`,
		//                   street:`${addComp.street}`,
		//                   streetNumber:`${addComp.streetNumber}`,
		//                   province:`${addComp.province}`,
		//                   date: `${new Date()}`
		//               };
		//               //当前定位城市
		//               console.log("curCity0:",curCity);
		              
		//               // $.cookie('VP_MOBILE_CURRENTCITY', JSON.stringify(curCity), { expires: 7, path: '/' });
		//               //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street);
		//               // if (successFunc != undefined)
		//               //     successFunc(addComp);
		//               });
		//           }
		         
		//         })
		//     },
		//     function (error) {
		//         switch (error.code) {
		//             case 1:
		//                 alert("位置服务被拒绝。");
		//                 break;
		//             case 2:
		//                 alert("暂时获取不到位置信息。");
		//                 break;
		//             case 3:
		//                 alert("获取位置信息超时。");
		//                 break;
		//             default:
		//                 alert("未知错误。");
		//                 break;
		//         }
		//         var curCity = {
		//             id: '000001',
		//             name: '北京市',
		//             date: new Date()
		//         };
		//         //默认城市
		//          console.log("curCity1:",curCity);
				
		//         // $.cookie('VP_MOBILE_DEFAULTCITY', JSON.stringify(curCity), { expires: 1, path: '/' });
		//         // if (errorFunc != undefined)
		//         //     errorFunc(error);
		//     }, { timeout: 5000, enableHighAccuracy: true });
		// } else {
		//     alert("你的浏览器不支持获取地理位置信息。");
		//     // if (errorFunc != undefined)
		//     //     errorFunc("你的浏览器不支持获取地理位置信息。");
		// }
			
		
		

		
		
	}
		
}


</script>

<style scoped>
	#map{
		position: relative;
		width: 100%!important;
		height: 100%!important;
	/* 	aspect-ratio: 3072/4096; */
		display: block;
		/* top:1em; */
	}

</style>
