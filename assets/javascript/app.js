//========== Global Vaiables ==========//
var timer = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;


//========== Document Ready Function ==========//
$(document).ready(function() {
	$("#questionsDiv").hide();
	$("#resultsDiv").hide();

	$("#startButton").on("click", function() {
		$("#startDiv").hide();
		$("#questionsDiv").show();
		setTimer();
		return;

	});


//========== set timer ==========//
function setTimer() {
	setInterval(timeRemaining, 1000);
}

//========== time reminaing function ==========//
function timeRemaining() {
	timer--;
    $("#timer").html("Time Remaining:" + " " + timer + " " + "Seconds");
	$("#doneButton").on("click", function() {
	timer = 0;
	return;

	});

	if(timer === -1) {
		questionsFunction();
		$("#questionsDiv").hide();
	}
	}



//========== questions function ==========//
function questionsFunction() {
	var question1 = $('input[name="question1"]:checked').val();
	var question2 = $('input[name="question2"]:checked').val();
	var question3 = $('input[name="question3"]:checked').val();
	var question4 = $('input[name="question4"]:checked').val();
	var question5 = $('input[name="question5"]:checked').val();
	var question6 = $('input[name="question6"]:checked').val();

	if (question1 === undefined) {
		unanswered++;
	}
	else if (question1 === "bacteria") {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}


	if (question2 === undefined) {
		unanswered++;
	}
	else if (question2 === "jupiter") {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}

	if (question3 === undefined) {
		unanswered++;
	}
	else if (question3 === "40") {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}

	if (question4 === undefined) {
		unanswered++;
	}
	else if (question4 === "isoHunt") {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}

	if (question5 === undefined) {
		unanswered++;
	}
	else if (question5 === "computer") {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}
	if (question6 === undefined) {
		unanswered++;
	}
	else if (question6 === "17") {
		correctAnswers++;
	}
	else {
		wrongAnswers++;
	}

	$('#correctAnswers').html("Correct Answers:" + " " + correctAnswers);
	$('#incorrectAnswers').html("Incorrect Answers:" + " " + wrongAnswers);
	$('#unanswered').html("Unanswered:" + " " + unanswered);
	$("#resultsDiv").show();

	}

});


