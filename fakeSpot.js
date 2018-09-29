// set grade array "A~F"
var myGrades = [
  "A", "B", "C", "D", "F"
  ];

// grade the review randomly
var randomGrade = myGrades[Math.floor(Math.random()* myGrades.length)];

// grab id where to put the grade 
var fakeSpotRandomGrade = $('#tellAFriendBox_feature_div');

// create new div for the grade
var newFakeSpotDiv = $("<div id='random-grade-box'>" + "<h4> Review Grade </h4>" + randomGrade + "</div>")

// add the new div 
fakeSpotRandomGrade.append(newFakeSpotDiv);
	

$(document).ready(function () {  
  var top = $('#random-grade-box').offset().top;
  $(window).scroll(function (event) {
    var boxScrollTop = $(this).scrollTop();
    
    if (boxScrollTop >= top) {
      $('#random-grade-box').addClass('fixed');
    }
    
    else {
      $('#random-grade-box').removeClass('fixed');
    }
    
  });
});