document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value.toLowerCase();
    let interest = document.getElementById("interest").value;

    let course = "";
    let career = "";

    if (skill === "java") {
        course = "Advanced Java & Spring Boot";
        career = "Java Developer";
    } 
    else if (skill === "python") {
        course = "Data Science & Machine Learning";
        career = "AI Engineer";
    } 
    else if (skill === "html" || skill === "css") {
        course = "Full Stack Web Development";
        career = "Web Developer";
    } 
    else if (skill === "c++") {
        course = "Software Engineering";
        career = "Software Engineer";
    } 
    else {
        course = "General Career Guidance";
        career = "Career Counselor Recommendation";
    }

    document.getElementById("result").innerHTML =
        "<h3>Student Details</h3>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Skill:</b> " + skill + "</p>" +
        "<p><b>Interest:</b> " + interest + "</p>" +
        "<hr>" +
        "<h3>Recommendation</h3>" +
        "<p><b>Recommended Course:</b> " + course + "</p>" +
        "<p><b>Recommended Career:</b> " + career + "</p>";
});
