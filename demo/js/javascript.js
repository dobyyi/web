window.onload = function(){
		//图片轮播
		var aImg = ['images/bn1.jpg','images/bn2.jpg','images/bn3.jpg'];
		var oImg = document.getElementById('img1');
		var oUl = document.getElementsByTagName('ul')[2];
		var Src = 'images/bn'+1+'.jpg';
		var num = 0;
		var aLi1 = oUl.getElementsByTagName('li');
		
		var that =  aLi1[0];
		that.style.background = '#000';
		for(var i=0; i<aLi1.length;i++){
			aLi1[i].index = i;
			aLi1[i].onclick = aLi1[i].onmouseover = function(){
			oImg.src = aImg[this.index];
			that.style.background = '#666';
			this.style.background = '#000';
			that = this
			};
		}
		
		//nav 鼠标切换
		var oWrap = document.querySelector('.wrap1');
		var oUl = oWrap.querySelector('ul');//不支持ie6 ，7  通过class来选择只能选择当前一组中的第一个元素
		var aLi2 = oUl.getElementsByTagName('li');
			aLi2[0].style.borderBottom = '2px';
			aLi2[0].style.borderBottomColor = '#4CC25C'
			aLi2[0].style.borderBottomStyle = 'solid'
			aLi2[0].style.color = '#4CC25C';
		
		for(var i=1;i<aLi2.length;i++){
			aLi2[i].onmouseover = function(){
				this.style.borderBottom = '2px';
				this.style.borderBottomColor = '#4CC25C'
				this.style.borderBottomStyle = 'solid'
				this.style.color = '#4CC25C';
				
			};
			aLi2[i].onmouseout = function(){
				
					this.style.borderBottom = 'none';
					this.style.color = '#000';
			
			};
		}





		//获取className函数封装
		function getClass(tagName,className){
			if(document.getElementsByClassName){
				return document.getElementsByClassName(className);
			}else{
				var tags = document.getElementsByTagName(tagName);
				var arrTag = [];
				for(var i=0;i<tags.length;i++){
					if ( tags[i].class == className){
						
						arrTag[arrTag.length] = tag[i];
					}
					
				}
				return tagArr;
			}	
		}

	//新闻滚动
	var aScroll = getClass('div','news_scroll_box');
	var num1 = 0 ;
		setInterval(function(){
			
			for(var i=0;i<aScroll.length;i++){
				
				aScroll[i].style.top = num1 +'px';
				
			}
			num1-=25;
			if(num1 <= -303 ){
				num1 = 0;
			}
		},1500);

		//返回浏览器顶部

	var oTop = document.getElementById('btn_top');

	 window.onscroll = function(){
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		
		if(scrolltop<1500){
			oTop.style.display = 'none';
		}else{
			oTop.style.display = 'block';
		}
	
	}
	oTop.onclick = function(){
		document.documentELement.scrollTop = document.body.scrollTop = 0 ;
	}
  
	};
	
