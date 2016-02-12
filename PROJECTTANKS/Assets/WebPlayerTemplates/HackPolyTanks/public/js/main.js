/* global Connection */
/// <reference path="../../typings/jquery/jquery.d.ts"/>
/* global nipplejs */
/*
 Copyright (C) 2015 Electronic Arts Inc.  All rights reserved.

 This software is solely licensed pursuant to the Hackathon License Agreement,
 Available at:  [URL to Hackathon License Agreement].
 All other use is strictly prohibited.
 */
// Utils
var u = {};
u.distance = function (p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;

    return Math.sqrt((dx * dx) + (dy * dy));
};

u.angle = function(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;

    return u.degrees(Math.atan2(dy, dx));
};

u.findCoord = function(p, d, a) {
    var b = {x: 0, y: 0};
    a = u.radians(a);
    b.x = p.x - d * Math.cos(a);
    b.y = p.y - d * Math.sin(a);
    return b;
};

u.radians = function(a) {
    return a * (Math.PI / 180);
};

u.degrees = function(a) {
    return a * (180 / Math.PI);
};

$(document).ready(function () {

	console.log("Document Loaded");

	// INIT..
	var conn = new Connection();
	conn.sendMessage({"type": "connect"});

	var controlstate = {
        "type": "controls",
	    "up": false,
	    "down": false,
	    "left": false,
	    "right": false,
	    "shoot": false,
	    "jump": false
	};
	//// Movement Joystick
	
	//var movement	= new VirtualJoystick({
	//	container	: document.body,
	//	strokeStyle	: 'cyan',
	//	limitStickTravel: true,
	//	stickRadius	: 50	
	//});
	//movement.addEventListener('touchStartValidation', function(event){
	//	var touch	= event.changedTouches[0];
	//	if( touch.pageX >= window.innerWidth/2 )	return false;
	//	return true
	//});
	
	//var prevAngle;
	//var prevDistance;
	//setInterval(function() {
	//	var angle = u.angle({x:0,y:0}, {x:movement.deltaX(), y:movement.deltaY()});
	//	var distance = u.distance({x:0,y:0}, {x:movement.deltaX(), y:movement.deltaY()});
		
	//	if (prevAngle !== angle && prevDistance != distance) {
	//		prevAngle = angle !== 0 ? angle : prevAngle;
	//		prevDistance = distance;
	//		conn.sendMessage({"type": "movement", "angle": -prevAngle, "force": distance/50});			
	//	}

	//}, 1000/20);

	//// Shooting Joystick

	//var shooting	= new VirtualJoystick({
	//	container	: document.body,
	//	strokeStyle	: 'orange',
	//	limitStickTravel: true,
	//	stickRadius	: 0		
	//});
	//shooting.addEventListener('touchStartValidation', function(event){
	//	var touch	= event.changedTouches[0];
	//	if( touch.pageX < window.innerWidth/2 )	return false;
	//	return true
	//});
	//shooting.addEventListener('touchStart', function(){
	//	conn.sendMessage({"type": "fire"});
    //})

	setInterval(function () {

	    conn.sendMessage(controlstate);

    }, 1000/20);

	$("#up").on('touchstart', function () {
	    console.log("Pressed up");
	    controlstate["up"] = true;
	});

	$("#up").on('touchend', function () {
	    console.log("Released up");
	    controlstate["up"] = false;
	});
	$("#down").on('touchstart', function () {
	    console.log("Pressed down");
	    controlstate["down"] = true;
	});

	$("#down").on('touchend', function () {
	    console.log("Released down");
	    controlstate["down"] = false;
	});
	$("#left").on('touchstart', function () {
	    console.log("Pressed left");
	    controlstate["left"] = true;
	});

	$("#left").on('touchend', function () {
	    console.log("Released left");
	    controlstate["left"] = false;
	});
	$("#right").on('touchstart', function () {
	    console.log("Pressed right");
	    controlstate["right"] = true;
	});

	$("#right").on('touchend', function () {
	    console.log("Released right");
	    controlstate["right"] = false;
	});
	$("#shoot").on('touchstart', function () {
	    console.log("Pressed shoot");
	    controlstate["shoot"] = true;
	});

	$("#shoot").on('touchend', function () {
	    console.log("Released shoot");
	    controlstate["shoot"] = false;
	});
	$("#jump").on('touchstart', function () {a
	    console.log("Pressed jump");
	    controlstate["jump"] = true;
	});

	$("#jump").on('touchend', function () {
	    console.log("Released jump");
	    controlstate["jump"] = false;
	});

	// Process incoming game messages
	$(document).on("game_message", function (e, message) {
		console.log("Received Message: " + JSON.stringify(message));
		var payload = message.payload;
		switch (payload.type) {
			default:
				break;
		}
	});
});
