// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: false,
    progress: false,
    history: false,
    overview: false,
    loop: false,
    transition: 'linear',
    anything: [
     // {
     //  className: "random",
     //  defaults: {min: 0, max: 9},
     //  initialize: ((container, options) => {
     //    container.innerHTML = Math.trunc( options.min + Math.random()*(options.max-options.min + 1) );
     //  }),
     // },
    {
      className: "step",
      initialize: ((container) => {
        var sampleSVG = d3.select(container)
            .append("svg")
            .attr("width", container.width)
            .attr("height", container.height);

        sampleSVG.append("circle")
            .style("stroke", "gray")
            .style("fill", "white")
            .attr("r", 50)
            .attr("cx", 50)
            .attr("cy", 50)
            .on("mouseover", function() {
                d3.select(this).style("fill", "aliceblue");
            })
            .on("mouseout", function() {
                d3.select(this).style("fill", "white");
            })
            .on("click", function() {
                console.log('clocl');
            });
      }),
     },
     {
        className: "chart",
        initialize: (function(container, options){ container.chart = new Chart(container.getContext("2d"), options);  })
     },
    ],
    dependencies: [
      { src: 'plugin/bower_components/reveal.js-plugins/chart/Chart.min.js' },
      { src: 'https://d3js.org/d3.v4.min.js' },
      { src: 'liquidFillGauge.js' },
      { src: 'plugin/bower_components/reveal.js-plugins/anything/anything.js' },
    ],
});

// Reveal.addEventListener('slidechanged', function(event) {
//     animateContent(event);
//     if(event.indexh>0){
//         updateMap();
//         checktimeline();
//     }else{
//         $('#timeline ul li a').removeClass('selected');
//     }
// });


// Animate and position the content when loading a new slide
// function animateContent(event){
//     $(event.currentSlide).find('.content').css('top',document.body.clientHeight / 2 - ($(event.currentSlide).find('.content').height() / 2));
//     if((event.indexh) > 0){
//         $(event.currentSlide).find('.content').delay(ANIMATE_DELAY).animate({opacity: 1}, 1000);
//         $(event.currentSlide).find('.nextButton').delay(ANIMATE_DELAY).animate({opacity: 1}, 1000);
//     }else{
//         $(event.currentSlide).find('.nextButton').delay(ANIMATE_DELAY).animate({opacity: 1}, 1000);
//     }
//     $(event.previousSlide).find('.content').delay(ANIMATE_DELAY*2).animate({opacity: 0}, 100);
//     $(event.previousSlide).find('.nextButton').delay(ANIMATE_DELAY*2).animate({opacity: 0}, 100);
// }
