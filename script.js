document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value.toLowerCase();
    let interest = document.getElementById("interest").value.toLowerCase();

    let course = "";
    let career = "";
    let description = "";
    let certification = "";

    // Java + Web
    if (skill === "java" && interest === "web") {
        course = "Java Full Stack Development";
        career = "Full Stack Developer";
        description = "Develops both frontend and backend web applications using Java, Spring Boot, HTML, CSS and JavaScript.";
        certification = "Oracle Java Foundations, Cisco JavaScript Essentials";
    }

    // Java + AI
    else if (skill === "java" && interest === "ai") {
        course = "Artificial Intelligence with Java";
        career = "AI Engineer";
        description = "Builds intelligent software using Artificial Intelligence and Machine Learning.";
        certification = "Google AI Essentials, Oracle Java Foundations";
    }

    // Java + Cloud
    else if (skill === "java" && interest === "cloud") {
        course = "Cloud Computing with Java";
        career = "Cloud Engineer";
        description = "Develops and deploys Java applications on cloud platforms.";
        certification = "AWS Cloud Practitioner, Microsoft Azure Fundamentals";
    }

    // Python + Data
    else if (skill === "python" && interest === "data") {
        course = "Python for Data Science";
        career = "Data Scientist";
        description = "Analyzes data, builds predictive models and creates business insights.";
        certification = "IBM Data Science, Google Data Analytics";
    }

    // Python + AI
    else if (skill === "python" && interest === "ai") {
        course = "Machine Learning";
        career = "Machine Learning Engineer";
        description = "Creates machine learning models and AI solutions.";
        certification = "Google AI Essentials, IBM Machine Learning";
    }

    // Python + Web
    else if (skill === "python" && interest === "web") {
        course = "Django Web Development";
        career = "Backend Developer";
        description = "Develops secure backend web applications using Django.";
        certification = "Python Essentials, Django Certification";
    }

    // HTML / CSS / JavaScript
    else if (
        (skill === "html" ||
         skill === "css" ||
         skill === "javascript") &&
         interest === "web"
    ) {
        course = "Full Stack Web Development";
        career = "Frontend Web Developer";
        description = "Designs responsive and interactive websites using HTML, CSS and JavaScript.";
        certification = "Cisco JavaScript Essentials, Responsive Web Design";
    }

    // C Programming
    else if (skill === "c" && interest === "programming") {
        course = "Advanced C Programming";
        career = "Software Engineer";
        description = "Builds efficient software applications using C programming.";
        certification = "C Programming Certification";
    }

    // C++
    else if (skill === "c++" && interest === "game") {
        course = "Game Development";
        career = "Game Developer";
        description = "Develops games using C++ and modern game engines.";
        certification = "Unity Developer Certification";
    }

    // SQL
    else if (skill === "sql" && interest === "database") {
        course = "Database Management System";
        career = "Database Administrator";
        description = "Designs and manages organizational databases.";
        certification = "Oracle Database SQL Associate";
    }

    // Cyber Security
    else if (skill === "cyber" && interest === "security") {
        course = "Ethical Hacking & Cyber Security";
        career = "Cyber Security Analyst";
        description = "Protects computer systems and networks from cyber attacks.";
        certification = "Cisco Cybersecurity Essentials, CompTIA Security+";
    }

    // Cloud
    else if (skill === "cloud" && interest === "cloud") {
        course = "AWS / Azure Cloud Computing";
        career = "Cloud Engineer";
        description = "Designs, deploys and manages cloud infrastructure.";
        certification = "AWS Cloud Practitioner, Microsoft Azure Fundamentals";
    }
        // AI + Robotics
    else if (skill === "ai" && interest === "robotics") {
        course = "Artificial Intelligence & Robotics";
        career = "Robotics Engineer";
        description = "Designs intelligent robots for automation and manufacturing.";
        certification = "Google AI Essentials, Robotics Foundation";
    }

    // Machine Learning
    else if (skill === "machine learning" && interest === "ai") {
        course = "Advanced Machine Learning";
        career = "Machine Learning Engineer";
        description = "Builds machine learning models for intelligent applications.";
        certification = "IBM Machine Learning, Google AI";
    }

    // Networking
    else if (skill === "networking" && interest === "network") {
        course = "CCNA Networking";
        career = "Network Engineer";
        description = "Maintains and manages computer networks.";
        certification = "Cisco CCNA";
    }

    // Android
    else if (skill === "android" && interest === "mobile") {
        course = "Android App Development";
        career = "Android Developer";
        description = "Develops Android mobile applications.";
        certification = "Android Developer Certification";
    }

    // iOS
    else if (skill === "ios" && interest === "mobile") {
        course = "iOS App Development";
        career = "iOS Developer";
        description = "Develops applications for Apple iOS devices.";
        certification = "Apple App Development";
    }

    // DevOps
    else if (skill === "devops" && interest === "automation") {
        course = "DevOps Engineering";
        career = "DevOps Engineer";
        description = "Automates software development and deployment processes.";
        certification = "AWS DevOps Engineer";
    }

    // Testing
    else if (skill === "testing" && interest === "software") {
        course = "Software Testing";
        career = "QA Engineer";
        description = "Tests software applications to ensure quality.";
        certification = "ISTQB Foundation Level";
    }

    // UI/UX
    else if (skill === "ui/ux" && interest === "design") {
        course = "UI/UX Design";
        career = "UI/UX Designer";
        description = "Creates user-friendly and attractive digital interfaces.";
        certification = "Google UX Design";
    }

    // Digital Marketing
    else if (skill === "digital marketing" && interest === "marketing") {
        course = "Digital Marketing";
        career = "Digital Marketing Executive";
        description = "Promotes businesses through digital platforms.";
        certification = "Google Digital Garage";
    }

    // Blockchain
    else if (skill === "blockchain" && interest === "blockchain") {
        course = "Blockchain Development";
        career = "Blockchain Developer";
        description = "Develops decentralized blockchain applications.";
        certification = "Blockchain Council Certification";
    }

    // IoT
    else if (skill === "iot" && interest === "iot") {
        course = "Internet of Things";
        career = "IoT Engineer";
        description = "Builds smart devices connected through the Internet.";
        certification = "Cisco IoT";
    }

    // Embedded
    else if (skill === "embedded" && interest === "embedded") {
        course = "Embedded Systems";
        career = "Embedded Systems Engineer";
        description = "Designs embedded hardware and software systems.";
        certification = "Embedded Systems Certification";
    }

    // Business
    else if (skill === "business" && interest === "business") {
        course = "Business Management";
        career = "Business Analyst";
        description = "Analyzes business processes and improves performance.";
        certification = "Business Analysis Foundation";
    }

    else {
        course = "Career Guidance Program";
        career = "Career Counselling";
        description = "Explore your interests and improve your skills to find the best career path.";
        certification = "Google Career Certificates";
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

        <h3 style="color:#6f42c1;">📝 Career Description</h3>
        <p>${description}</p>

        <h3 style="color:#198754;">🏆 Recommended Certification</h3>
        <p>${certification}</p>

    </div>
    `;

    document.getElementById("studentForm").reset();
});
