var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
function logout() {
	var answer = confirm("Anda yakin ingin logout?");
	if(answer){
		return true;
	}
	else
		return false;
	//the "cancel" button on confirmation does not work well
}
function pleaseLogin() {
	alert("Please login first before you proceed.");
}
function nologin() {
	alert("You will be redirected to http://tinyurl.com/bbmSignUp");
	//window.location.href='https://web.archive.org/web/20180818082250/http://tinyurl.com/bbmSignUp';
	window.open("https://web.archive.org/web/20180818082250/http://tinyurl.com/bbmSignUp")
}
function validate(){
	pwd = document.getElementById("pwd").value
	cpwd = document.getElementById("cpwd").value
	if(pwd != cpwd) {
    	alert("Password tidak sesuai.");
	}
}
}

/*
     FILE ARCHIVED ON 08:22:50 Aug 18, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:14:47 Jul 19, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.519
  exclusion.robots: 0.051
  exclusion.robots.policy: 0.036
  esindex: 0.01
  cdx.remote: 236.87
  LoadShardBlock: 214.051 (3)
  PetaboxLoader3.resolve: 135.071 (4)
  PetaboxLoader3.datanode: 118.04 (4)
  load_resource: 124.102
*/