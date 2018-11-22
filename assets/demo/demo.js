'use strict';


// THIS FILE IS INTENTED TO RUN THE DEMO SVG ANIMATION ON THE HOMEPAGE
window.myData={

  randomize: function(min, max, wavelength_ms, phase) {
    var d = new Date();
    var rnd = (1+Math.cos(d/wavelength_ms+phase))/2; //between 0 and 1;
    return min+(max-min)*rnd;
  }

};


var getXY = function(d3Node) {
  var d = d3Node.attr('d'); // d is like d="M463.6,437.1"
  if (!d) { //maybe it is a group containing the path
    d=d3Node.select('path').attr('d');
  }
  return d.replace('M', '').split(',');
};

document.addEventListener("DOMContentLoaded", function() {

//  console.log("STARTING ANIMATIONS")
  /*
  ==============================================================================
  ==============================================================================
  DEAL WITH ENGINES
  ==============================================================================
  ==============================================================================
  */

  var lime='#339933';
  var bgColor = '#333333';
  var darkorange = 'darkorange';

  var svg = d3.select('#Layer_1');
  var valveRotation = d3.scaleLinear().domain([0.5, 1]).range([90, 0]).clamp(true);
  var maxNeedleAngle=250;
  var maxPress=110;
  var pdRotation = d3.scaleLinear().domain([0, maxPress]).range([0, maxNeedleAngle]).clamp(true);
  var redZonePress=maxPress*0.85; // redZone is about 85% of all span

  var pipeColor = d3.scaleLinear()
  .domain([60, 100])
  .range([bgColor, lime]).clamp(true);

  var eng1= {
    inputPress:100,
    bias:0,
    prvOpen:1,
    draw: {
      prvGaugeNeedle: svg.select('#PD1_needle_anim'),
      prvGaugeValue: svg.select('#PD1_value_anim'),
      prvGaugeCenter: getXY(svg.select('#PD1_center_anim')),

      prvValve: svg.select('#PRV1_anim'),
      prvValveCenter: getXY(svg.select('#PRV1_center_anim')),

      inputPipe: svg.select('#pre_PD1_pipe_anim'),
      outputPipe: svg.select('#post_PD1_pipe_anim').selectAll('[stroke]'),

      fcv: svg.select('#FCV1_anim'),
    }
  };

  var eng2= {
    inputPress:100,
    prvOpen:1,
    bias:0.5,
    draw: {
      prvGaugeNeedle: svg.select('#PD2_needle_anim'),
      prvGaugeValue: svg.select('#PD2_value_anim'),
      prvGaugeCenter: getXY(svg.select('#PD2_center_anim')),

      prvValve: svg.select('#PRV2_anim'),
      prvValveCenter: getXY(svg.select('#PRV2_center_anim')),

      inputPipe: svg.select('#pre_PD2_pipe_anim'),
      outputPipe: svg.select('#post_PD2_pipe_anim').selectAll('[stroke]'),

      fcv: svg.select('#FCV2_anim'),
    }
  };

  window.myData.pressDiff=0;

  var updateEng = function(eng) {
    eng.inputPress = window.myData.randomize(80, 100, 5000, eng.bias); //slowly between 80 and 100
    eng.prvOpen=window.myData.randomize(0.8, 1, 5000, eng.bias); //slowly between 0 and 1
    eng.prvPress=eng.inputPress*eng.prvOpen;
    return eng;
  };

  var draw = function(eng) {
    //updates the PD gauge (random makes the needle vibrate)
    eng.draw.prvGaugeNeedle
    .attr('transform', 'rotate('+pdRotation(eng.prvPress+Math.random()*maxPress*0.02)+','+eng.draw.prvGaugeCenter+')')
    .attr('fill', function() {return (eng.prvPress>redZonePress)?darkorange:lime;});
    eng.draw.prvGaugeValue
    .text(eng.prvPress.toFixed(0))
    .attr('fill', function() {return (eng.prvPress>redZonePress)?darkorange:lime;});

    //rotates the PRV valve
    eng.draw.prvValve
    .attr('transform', 'rotate('+valveRotation(eng.prvOpen)+','+eng.draw.prvValveCenter+')');

    // pipe color
    eng.draw.inputPipe.attr('stroke', pipeColor(eng.inputPress));
    eng.draw.outputPipe.attr('stroke', pipeColor(eng.prvPress));

    // set FCV
    eng.draw.fcv.text((eng.prvPress*0.05).toFixed(1));
  };

  var match=svg.select('#match_anim').attr('opacity', 0);

  window.setInterval(function() {
    draw(updateEng(eng1));
    draw(updateEng(eng2));
    window.myData.pressDiff=Math.abs(eng1.prvOpen-eng2.prvOpen);
    match.attr('opacity', (window.myData.pressDiff>0.03)?1:0);
  }, 250);


  /*
  ==============================================================================
  ==============================================================================
  BLINKS THE REAL TIME DOT
  ==============================================================================
  ==============================================================================
  */

  var svg = d3.select('svg');

  var heartbeat = svg.selectAll('#RT_anim');
  var rInit = heartbeat.attr('r');


  window.setInterval(function() {
    heartbeat.attr('r', rInit).attr('opacity', 1).transition().duration(800).attr('r', rInit/1.1).attr('opacity', 0.5);
    svg.select('#acars_anim').attr('opacity', 1).transition().attr('opacity', 0.35);
  }, 1692);



  /*
  ==============================================================================
  ==============================================================================
  DEAL WITH CONFIDENCE FACTOR
  ==============================================================================
  ==============================================================================
  */

  var svg = d3.select('svg');
  var cf = svg.select('#CF_anim');
  var bg = svg.select('#CF_bg_anim').selectAll('[fill]');

  var color = d3.scaleLinear()//scaleQuantize()
  .domain([98.9, 100.0])
  .range(['darkorange', bg.attr('fill')]);
  //		.range(['darkorange', bg.attr('fill')]);


  window.setInterval(function() {
    var val = 99.9-(window.myData.pressDiff*10);
    cf.text(val.toFixed(1));
    bg.attr('fill', color(val));
    svg.select('#amos_anim').attr('opacity', 1).transition().duration(2000).attr('opacity', 0.35);
  }, 10000);


  /*
  ==============================================================================
  ==============================================================================
  DEAL WITH ALTITUDE
  ==============================================================================
  ==============================================================================
  */
  var alt = svg.select('#alt_txt_anim');
  var altScale = d3.scaleLinear().domain([0, 1]).range([3617, 3630]).clamp(true);


  window.setInterval(function() {
    alt.text(Math.round(altScale(Math.random())).toFixed(0)+'0 ft');
    svg.select('#adsb_anim').attr('opacity', 1).transition().duration(2000).attr('opacity', 0.35);
  }, 6840);




});
