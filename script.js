document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value.toLowerCase();
    let interest = document.getElementById("interest").value.toLowerCase();

    let course = "";
    let career = "";

    // Smart Recommendation

    if (skill === "java" && interest === "web") {
        course = "Java Full Stack Development";
        career = "Full Stack Developer";
    }
    else if (skill === "java" && interest === "ai") {
        course = "Artificial Intelligence with Java";
        career = "AI Engineer";
    }
    else if (skill === "java" && interest === "cloud") {
        course = "Cloud Computing with Java";
        career = "Cloud Engineer";
    }
    else if (skill === "python" && interest === "data") {
        course = "Python for Data Science";
        career = "Data Scientist";
    }
    else if (skill === "python" && interest === "ai") {
        course = "Machine Learning";
        career = "Machine Learning Engineer";
    }
    else if (skill === "python" && interest === "web") {
        course = "Django Web Development";
        career = "Backend Developer";
    }
    else if (
        (skill === "html" || skill === "css" || skill === "javascript")
        && interest === "web"
    ) {
        course = "Full Stack Web Development";
        career = "Frontend Web Developer";
    }
    else if (skill === "c" && interest === "programming") {
        course = "Advanced C Programming";
        career = "Software Engineer";
    }
    else if (skill === "c++" && interest === "game") {
        course = "Game Development";
        career = "Game Developer";
    }
    else if (skill === "sql" && interest === "database") {
        course = "Database Management System";
        career = "Database Administrator";
    }
    else if (skill === "cyber" && interest === "security") {
        course = "Ethical Hacking & Cyber Security";
        career = "Cyber Security Analyst";
    }
    else if (skill === "cloud" && interest === "cloud") {
        course = "AWS / Azure Cloud Computing";
        career = "Cloud Engineer";
    }
    else if (skill === "ai" && interest === "robotics") {
        course = "Artificial Intelligence & Robotics";
        career = "Robotics Engineer";
    }
    else if (skill === "machine learning" && interest === "ai") {
        course = "Advanced Machine Learning";
        career = "Machine Learning Engineer";
    }
    else if (skill === "networking" && interest === "network") {
        course = "CCNA Networking";
        career = "Network Engineer";
    }
    else if (skill === "android" && interest === "mobile") {
        course = "Android App Development";
        career = "Android Developer";
    }
    else if (skill === "ios" && interest === "mobile") {
        course = "iOS App Development";
        career = "iOS Developer";
    }
    else if (skill === "devops" && interest === "automation") {
        course = "DevOps Engineering";
        career = "DevOps Engineer";
    }
    else if (skill === "testing" && interest === "software") {
        course = "Software Testing";
        career = "QA Engineer";
    }
    else if (skill === "ui/ux" && interest === "design") {
        course = "UI/UX Design";
        career = "UI/UX Designer";
    }
    else if (skill === "digital marketing" && interest === "marketing") {
        course = "Digital Marketing";
        career = "Digital Marketing Executive";
    }
    else if (skill === "blockchain" && interest === "blockchain") {
        course = "Blockchain Development";
        career = "Blockchain Developer";
    }
    else if (skill === "iot" && interest === "iot") {
        course = "Internet of Things";
        career = "IoT Engineer";
    }
    else if (skill === "embedded" && interest === "embedded") {
        course = "Embedded Systems";
        career = "Embedded Systems Engineer";
    }
    else if (skill === "business" && interest === "business") {
        course = "Business Management";
        career = "Business Analyst";
    }
    else {
        course = "Career Guidance Program";
        career = "Please explore different career paths based on your interests.";
    }

    document.getElementById("result").innerHTML = `
    <div style="background:#fff;padding:20px;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);margin-top:20px;">

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

    document.getElementById("studentForm").reset();
});
