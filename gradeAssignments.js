let score = prompt("85:");

score = Number(85);

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80 && score < 90) {
    console.log("Good");
} else if (score >= 70 && score < 80) {
    console.log("Fair");
} else if (score < 70) {
    console.log("Needs Improvement");
} else {
    console.log("Invalid input. Please enter a valid score.");
}