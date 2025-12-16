(function($) {
	'use strict';
	
/* BACKGROUND WAVE ANIMATION JS */
		window.addEventListener('load', function () {
			var canvas = document.getElementById('banner_canvas');
			if (!canvas) return;
			
			var ctx = canvas.getContext('2d');
			var w = window.innerWidth;
			var h = window.innerHeight;
			
			canvas.width = w;
			canvas.height = h;
			
			var time = 0;
			var waveHeight = 100;
			var waveSpeed = 0.02;
			var waveColors = ['rgba(250, 250, 142, 0.15)', 'rgba(247, 247, 101, 0.12)', 'rgba(240, 240, 120, 0.1)'];
			
			function drawWave() {
				ctx.clearRect(0, 0, w, h);
				
				for (var i = 0; i < waveColors.length; i++) {
					ctx.beginPath();
					ctx.moveTo(0, h / 2);
					
					for (var x = 0; x < w; x++) {
						var y = h / 2 + Math.sin((x * 0.01) + (time * waveSpeed) + (i * Math.PI / 3)) * (waveHeight - i * 20) * Math.cos(time * 0.01);
						ctx.lineTo(x, y);
					}
					
					ctx.lineTo(w, h);
					ctx.lineTo(0, h);
					ctx.closePath();
					ctx.fillStyle = waveColors[i];
					ctx.fill();
				}
				
				time += 1;
				requestAnimationFrame(drawWave);
			}
			
			function resize() {
				w = window.innerWidth;
				h = window.innerHeight;
				canvas.width = w;
				canvas.height = h;
			}
			
			window.addEventListener('resize', resize);
			drawWave();
		});
		
})(jQuery);