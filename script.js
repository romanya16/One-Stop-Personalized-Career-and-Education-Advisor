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
    <div style="background:#ffffff;
                padding:20px;
                border-radius:12px;
                box-shadow:0 4px 10px rgba(0,0,0,0.2);
                margin-top:20px;">

        <h2 style="color:#0d6efd;">🎓 Student Career Report</h2>

        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>💻 Skill:</strong> ${skill}</p>
        <p><strong>🎯 Interest:</strong> ${interest}</p>

        <hr>

        <h3 style="color:green;">📚 Recommended Course</h3>
        <p>${course}</p>

        <h3 style="color:#ff6600;">💼 Recommended Career</h3>
        <p>${career}</p>

    </div>
    `;
});
