$(function(){
	mui.init()
	//地址管理
	mui(".address").on("tap",".r",function(){
		mui.openWindow({
		  url:'address.html'
		});
	})
	//付款
	mui("footer").on("tap",".btn",function(){
		mui.toast("微信付款")
	})
})
