document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value.toLowerCase();
    let interest = document.getElementById("interest").value.toLowerCase();

    let course = "";
    let career = "";

    // Recommendation Logic
    if (skill.includes("java")) {
        course = "Java Full Stack Development";
        career = "Software Developer";
    }
    else if (skill.includes("python")) {
        course = "Python for Data Science";
        career = "Data Scientist";
    }
    else if (
        skill.includes("html") ||
        skill.includes("css") ||
        skill.includes("javascript")
    ) {
        course = "Full Stack Web Development";
        career = "Frontend Web Developer";
    }
    else if (skill.includes("design") || interest.includes("design")) {
        course = "UI/UX Design";
        career = "UI/UX Designer";
    }
    else if (skill.includes("marketing") || interest.includes("marketing")) {
        course = "Digital Marketing";
        career = "Digital Marketing Executive";
    }
    else if (skill.includes("business") || interest.includes("business")) {
        course = "Business Management";
        career = "Business Analyst";
    }
    else {
        course = "Career Guidance Program";
        career = "Career Counselling Recommended";
    }

    document.getElementById("result").innerHTML = `
        <h3>Student Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Skill:</strong> ${skill}</p>
        <p><strong>Interest:</strong> ${interest}</p>

        <hr>

        <h3>Recommended Course</h3>
        <p>${course}</p>

        <h3>Recommended Career</h3>
        <p>${career}</p>
    `;
});
