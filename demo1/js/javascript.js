window.onload = function(){
	
	//输入框的变换
	var oInp = document.getElementById("search");
	var oBtn =  document.getElementById("btn1");
	oInp.onfocus = function(){
		oInp.style.border = '1px solid #ffb84a';
		if(oInp.value !== '请输入关键字'){
			
			oInp.value = oInp.value;
			
		}else{
			oInp.value = '';
		};
	}
	oInp.onblur = function(){
		if(oInp.value == ''){
			oInp.value = '请输入关键字';
		};
		oInp.style.border = '1px solid #ccc';
	}

	//选项样式变换
	var oUl = document.getElementById("nav-list");
	var aLi = oUl.getElementsByTagName("li");
	
		
		for(var i=0; i<aLi.length;i++){
			aLi[i].onmouseover = function(){
				this.style.background = '#fa6c00';
			}
			aLi[i].onmouseout = function(){
				this.style.background = '#e98d01';
				aLi[0].style.background = '#fa6c00';
			}
	}
	//图片轮播
	var oUlImg = document.getElementById('bannerul');
	var oBanImg = document.getElementById('bannerimg');
	var arr = ["img/banner.png","img/banner1.png","img/banner2.png"]
	var aLiImg = oUlImg.getElementsByTagName('li');
	var that = aLiImg[0];
	that.style.background = '#ffe200';
	for(var i=0;i<aLiImg.length;i++){
		aLiImg[i].index = i;
		aLiImg[i].onmouseover = function(){
			oBanImg.src = arr[this.index];
			that.style.background = '#818181';
			this.style.background = '#ffe200';
			that = this;
		}
		
	}
	
};

