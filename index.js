var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://192.168.1.6");
//const express = require("express");

client.on("connect", function () {
  console.log("conectado");
  client.subscribe("smarthome/room1/temp");
});

client.on("message", function (topic, message) {
  console.log(message.toString());
  client.end();
});
