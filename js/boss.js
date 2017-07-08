window.onload=function(){
	/*获取元素*/
	var oHeader = document.getElementsByTagName('header')[0];
		var oDownload = $('download');
		var oInfo = $('info');
		var oFigurePhone = $('figure-phone')
		var oFigureLogo = $('figure-logo')
		var headerH = oHeader.offsetHeight;
		var downloadH = oDownload.offsetHeight;
		var oChat = $('online-chat');
		var chatH = oChat.offsetHeight;
		var figureUl = $('figure-boss');
		var figureLis = figureUl.getElementsByTagName('li');
		var oDirec    = $('direcruit');
		var direcFigure = oDirec.getElementsByClassName('figure')[0];
		var oText       = oDirec.getElementsByClassName('text')[0];
		var companyText = document.getElementById('company-text');
		var payFigure   = document.getElementById('pay-figure');
		var payText     = document.getElementById('pay-text');
		var figureComputer = $('figure-computer');
		var figureLogos    = $('figure-logos');
		var logoLis        = figureLogos.children;
		var oCards         = $('figure-cards');
		var oReport        = $('report');
		var oUl            = $('scroll-left');
		var chatInner   = $('chat-inner');
		var chatTip     = $('chat-tip');
	/*获取元素*/
	var type = onoff = change = flag = turn = true;
	document.onscroll=function(){
		var top =document.documentElement.scrollTop||document.body.scrollTop;
		/*下载app部分 start*/
		if (headerH*2 + downloadH <  document.documentElement.clientHeight + top) {
			oInfo.className += ' ' +'fadeDown';
			oFigurePhone.className += ' ' +'fadeInUp';
			oFigureLogo.className += ' ' +'bounceIn';
		}
		/*下载app部分 start*/
		/*BOSS直聘部分 start*/
		if (top > headerH + downloadH) {
			if (type) {
				type = !type;
				for (var i = 0; i < figureLis.length; i++) {
					figureLis[i].className = '';
					figureLis[i].className = 'fadeIn';
					figureLis[i].className += ' '+'animation';
					figureLis[i].style.animationDelay = i*0.3+0.3+'s';
					figureLis[i].children[1].style.display = 'block';
				}
			
				setTimeout(function(){
					for(var i=0; i<figureLis.length; i++){
		            (function(){
		                var x = i;
		                setTimeout(function(){
			                figureLis[x].children[1].style.display = 'none';
						    figureLis[x].className += ' ' + 'show-boss-img';
						    figureLis[x].onmouseenter=function(){
						    	this.children[0].setAttribute('src','./img/company-'+(x+1)+'.png');
						    }
						    figureLis[x].onmouseleave=function(){
						    	this.children[0].setAttribute('src','./img/boss-'+(x+1)+'.png');
						    }
		                }, 1000*x);
		            })();
        		}
        	},2000)
			}
		}
		/*BOSS直聘部分 end*/
		/*direcruit部分 start*/
		if (top > headerH + downloadH + chatH*1/3) {
			if (onoff) {
				onoff = !onoff;
				direcFigure.className += ' ' + 'toRight';
				oText.className += ' ' + 'toLeft';
				chatInner.className += ' ' + 'chatScroll';
				chatTip.className   += ' ' + 'chatTip';
			}
		}
		/*direcruit部分 end*/
		/*big-company部分 start*/
		if (top > 2050) {
			if (change) {
				change = !change;
				companyText.className += ' ' + 'fadeDown';
				figureComputer.className += ' ' + 'toTop';
				for (var i = 0; i < logoLis.length; i++) {
					logoLis[i].className += ' ' + 'fadeIn'
				}
			}
		}
		/*big-company部分 end*/
		/*decent Pay部分 start*/
		if (top > 3100) {
			if (flag) {
				flag = !flag;
				payText.className += ' '+'toRight';
				payFigure.className += ' '+'toLeft';
				oCards.className    += ' '+'show-card';
				for (var i = 0; i < oCards.children.length; i++) {
					oCards.children[i].style.display = 'block';
				}
			}
		}
		/*decent Pay部分 end*/
		/*媒体报道部分 start*/ 
		if (top > 3840) {
			if (turn) {
				turn =!turn;
				oReport.className += ' ' + 'fadeDown';
			}
		}
		/*媒体报道部分 end*/
	}
	for (var i = 0; i < 14; i++) {
		var oLi = document.createElement('li');
		var oImg = document.createElement('img');
		oImg.src = './img/c-'+(i+1)+'.png';
		oLi.appendChild(oImg);
		oUl.appendChild(oLi);
	}
	oUl.innerHTML += oUl.innerHTML;
}