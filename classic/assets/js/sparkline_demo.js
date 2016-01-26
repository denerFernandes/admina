$(document).ready(function(){
	$("#dashboard1").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
	    type: 'line',
	    width: '100%',
	    height: '32',
	    lineColor: '#3f007f',
	    fillColor: '#1ca8dd',
	    spotColor: '#3f007f',
	    minSpotColor: '#00007f',
	    maxSpotColor: '#00007f',
	    highlightSpotColor: '#e8e8e8',
	    highlightLineColor: '#ffffff'
    });
    $("#dashboard2").sparkline([5,6,7,2,0,-4,-2,4], {
    	type: 'line',
	    width: '100%',
	    height: '32',
	    lineColor: '#bf5f00',
	    fillColor: '#ff0000',
	    spotColor: '#bf0000',
	    minSpotColor: '#bf0000',
	    maxSpotColor: '#bf0000',
	    highlightSpotColor: '#e8e8e8',
	    highlightLineColor: '#ffffff'
    });
    $("#dashboard3").sparkline([1,1,2], {
    	type: 'pie',
    	width: '100%',
    	height: '100%'
    });
    $("#dashboard4").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    	type: 'tristate',
    	height: '32px',
    	posBarColor: '#ff7f00',
    	zeroAxis: false
    });
    
});
