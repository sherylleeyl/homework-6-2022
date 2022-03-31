var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// turn off autoplay and looping
	video.autoplay = false
	video.loop = false
	

});

// go to play button and wait for users to click
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	// play video
	video.play()
	console.log("The current volume is " + video.volume)
	// update volume; volume is: ____
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// pause video
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click",function(){
	console.log("Slow Down")
	console.log("Current speed is " + video.playbackRate)
	console.log(video.playbackRate)
	video.playbackRate *= 0.95;
	console.log("New speed is:" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Faster")
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate /=  0.95;
	console.log("New speed is:" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Original Location: " + video.currentTime)
	
	if (video.currentTime > 52) { 
		video.currentTime = 0
		video.currentTime += 15
		console.log("New Location: " + video.currentTime)
	}
	else {
		video.currentTime += 15
		console.log("New Location: " + video.currentTime)
	}

});

document.querySelector("#mute").addEventListener("click",function(){
	console.log("The value of mute is " + video.muted)
	if (video.muted == true) { 
		video.muted = false
		//set button to mute
		document.querySelector("#mute").innerHTML = "Mute"
	}

	
	else { 
	video.muted = true
	// set button to muted
	document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log(this.value)
	// use this.value to update video volume and update volume element
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	console.log(video.classList)
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	console.log(video.classList)
});

