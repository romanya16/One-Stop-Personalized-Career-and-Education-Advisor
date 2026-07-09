document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value.toLowerCase();
    let interest = document.getElementById("interest").value.toLowerCase();

    let course = "";
    let career = "";

    // Smart Recommendation

    if (skill.includes("java") && interest.includes("web")) {
        course = "Java Full Stack Development";
        career = "Full Stack Developer";
    }
    else if (skill.includes("java") && interest.includes("ai")) {
        course = "Artificial Intelligence with Java";
        career = "AI Engineer";
    }
    else if (skill.includes("java") && interest.includes("mobile")) {
        course = "Android App Development";
        career = "Android Developer";
    }
    else if (skill.includes("python") && interest.includes("data")) {
        course = "Python for Data Science";
        career = "Data Scientist";
    }
    else if (skill.includes("python") && interest.includes("ai")) {
        course = "Machine Learning";
        career = "Machine Learning Engineer";
    }
    else if (
        (skill.includes("html") ||
         skill.includes("css") ||
         skill.includes("javascript")) &&
         interest.includes("web")
    ) {
        course = "Full Stack Web Development";
        career = "Frontend Web Developer";
    }
    else if (skill.includes("c") && interest.includes("programming")) {
        course = "Advanced C Programming";
        career = "Software Engineer";
    }
    else if (skill.includes("c++") && interest.includes("game")) {
        course = "Game Development";
        career = "Game Developer";
    }
    else if (skill.includes("sql") && interest.includes("database")) {
        course = "Database Management System";
        career = "Database Administrator";
    }
    else if (skill.includes("cyber") || interest.includes("security")) {
        course = "Ethical Hacking & Cyber Security";
        career = "Cyber Security Analyst";
    }
    else if (skill.includes("cloud") || interest.includes("cloud")) {
        course = "AWS / Azure Cloud Computing";
        career = "Cloud Engineer";
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
        career = "Please explore different career paths based on your interests.";
    }

    document.getElementById("result").innerHTML = `
        <div style="background:white;padding:20px;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.2);margin-top:20px;">

        <h2>🎓 Student Career Report</h2>

        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>💻 Skill:</strong> ${skill}</p>
        <p><strong>🎯 Interest:</strong> ${interest}</p>

        <hr>

        <h3>📚 Recommended Course</h3>
        <p>${course}</p>

        <h3>💼 Recommended Career</h3>
        <p>${career}</p>

        </div>
    `;
});
