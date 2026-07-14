document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Student Information

    let name = document.getElementById("name").value.trim();

    let skill = document.getElementById("skill").value.toLowerCase().trim();

    let interest = document.getElementById("interest").value.toLowerCase().trim();

    // Recommendation Variables

    let course = "";

    let career = "";

    let description = "";

    let certification = "";

    let salary = "";

    let platform = "";

    let level = "";

    let duration = "";

    // ==========================
    // JAVA CAREERS
    // ==========================

    if (skill.includes("java") && interest.includes("web")) {

        course = "Java Full Stack Development";

        career = "Full Stack Developer";

        description = "Develops frontend and backend web applications using Java, Spring Boot, HTML, CSS and JavaScript.";

        certification = "Oracle Java Foundations, Cisco JavaScript Essentials";

        salary = "₹5 LPA - ₹12 LPA";

        platform = "Infosys Springboard, NPTEL, Oracle Academy";

        level = "Intermediate";

        duration = "4 - 6 Months";

    }

    else if (skill.includes("java") && interest.includes("programming")) {

        course = "Advanced Java Programming";

        career = "Java Developer";

        description = "Develops desktop, enterprise and web applications using Java.";

        certification = "Oracle Certified Professional Java";

        salary = "₹4 LPA - ₹10 LPA";

        platform = "Oracle Academy, Coursera";

        level = "Intermediate";

        duration = "3 - 5 Months";

    }

    else if (skill.includes("java") && interest.includes("cloud")) {

        course = "Cloud Computing with Java";

        career = "Cloud Engineer";

        description = "Deploys Java applications on AWS and Azure Cloud.";

        certification = "AWS Cloud Practitioner";

        salary = "₹6 LPA - ₹15 LPA";

        platform = "AWS Skill Builder";

        level = "Intermediate";

        duration = "4 Months";

    }

    else if (skill.includes("java") && interest.includes("ai")) {

        course = "Artificial Intelligence with Java";

        career = "AI Engineer";

        description = "Develops Artificial Intelligence applications using Java.";

        certification = "Google AI Essentials";

        salary = "₹8 LPA - ₹18 LPA";

        platform = "Google AI, Coursera";

        level = "Advanced";

        duration = "6 Months";

    }

    // ==========================
    // PYTHON CAREERS
    // ==========================
        else if (skill.includes("python") && interest.includes("data")) {

        course = "Python for Data Science";

        career = "Data Scientist";

        description = "Analyzes data, builds predictive models and generates business insights.";

        certification = "IBM Data Science Professional Certificate";

        salary = "₹6 LPA - ₹15 LPA";

        platform = "Coursera, IBM SkillsBuild";

        level = "Intermediate";

        duration = "4 - 6 Months";

    }

    else if (skill.includes("python") && interest.includes("ai")) {

        course = "Machine Learning";

        career = "Machine Learning Engineer";

        description = "Builds intelligent systems using Machine Learning and Artificial Intelligence.";

        certification = "Google AI Essentials";

        salary = "₹8 LPA - ₹18 LPA";

        platform = "Google, Coursera";

        level = "Advanced";

        duration = "6 Months";

    }

    else if (skill.includes("python") && interest.includes("web")) {

        course = "Django Web Development";

        career = "Backend Developer";

        description = "Develops secure backend web applications using Django Framework.";

        certification = "Python Essentials";

        salary = "₹5 LPA - ₹12 LPA";

        platform = "Cisco Networking Academy";

        level = "Intermediate";

        duration = "4 Months";

    }

    else if (skill.includes("python") && interest.includes("automation")) {

        course = "Python Automation";

        career = "Automation Engineer";

        description = "Automates repetitive tasks and testing using Python.";

        certification = "Python Institute Certification";

        salary = "₹5 LPA - ₹10 LPA";

        platform = "Coursera";

        level = "Intermediate";

        duration = "3 Months";

    }

    // ==========================
    // WEB DEVELOPMENT
    // ==========================

    else if (
        (skill.includes("html") ||
        skill.includes("css") ||
        skill.includes("javascript"))
        &&
        interest.includes("web")
    ) {

        course = "Full Stack Web Development";

        career = "Frontend Web Developer";

        description = "Builds responsive websites using HTML, CSS and JavaScript.";

        certification = "Meta Front-End Developer";

        salary = "₹4 LPA - ₹10 LPA";

        platform = "freeCodeCamp, Coursera";

        level = "Beginner";

        duration = "3 - 4 Months";

    }

    else if (skill.includes("javascript") && interest.includes("programming")) {

        course = "JavaScript Programming";

        career = "JavaScript Developer";

        description = "Develops dynamic and interactive web applications.";

        certification = "Cisco JavaScript Essentials";

        salary = "₹5 LPA - ₹11 LPA";

        platform = "Cisco Skills for All";

        level = "Beginner";

        duration = "3 Months";

    }

    // ==========================
    // C & C++
    // ==========================
        else if (skill.includes("c") && interest.includes("programming")) {

        course = "Advanced C Programming";

        career = "Software Engineer";

        description = "Develops efficient software applications using C programming language.";

        certification = "C Programming Certification";

        salary = "₹3 LPA - ₹8 LPA";

        platform = "NPTEL, Udemy";

        level = "Beginner";

        duration = "2 - 3 Months";

    }

    else if (skill.includes("c++") && interest.includes("game")) {

        course = "Game Development";

        career = "Game Developer";

        description = "Develops games using C++ and modern game engines like Unity and Unreal Engine.";

        certification = "Unity Certified User";

        salary = "₹5 LPA - ₹12 LPA";

        platform = "Unity Learn";

        level = "Intermediate";

        duration = "4 - 6 Months";

    }

    else if (skill.includes("sql") && interest.includes("database")) {

        course = "Database Management System";

        career = "Database Administrator";

        description = "Designs, manages and maintains databases for organizations.";

        certification = "Oracle Database SQL Associate";

        salary = "₹4 LPA - ₹10 LPA";

        platform = "Oracle Academy";

        level = "Beginner";

        duration = "3 Months";

    }

    else if (skill.includes("cloud") && interest.includes("cloud")) {

        course = "AWS / Azure Cloud Computing";

        career = "Cloud Engineer";

        description = "Designs, deploys and manages cloud infrastructure.";

        certification = "AWS Cloud Practitioner";

        salary = "₹6 LPA - ₹16 LPA";

        platform = "AWS Skill Builder, Microsoft Learn";

        level = "Intermediate";

        duration = "4 Months";

    }

    else if (skill.includes("cyber") || interest.includes("security")) {

        course = "Ethical Hacking & Cyber Security";

        career = "Cyber Security Analyst";

        description = "Protects computer systems and networks from cyber attacks.";

        certification = "Cisco Cybersecurity Essentials";

        salary = "₹6 LPA - ₹15 LPA";

        platform = "Cisco Skills for All";

        level = "Intermediate";

        duration = "4 - 5 Months";

    }

    // ==========================
    // AI, ML & NETWORKING
    // ==========================
        else if (skill.includes("ai") && interest.includes("robotics")) {

        course = "Artificial Intelligence & Robotics";

        career = "Robotics Engineer";

        description = "Designs intelligent robots for automation, healthcare and manufacturing.";

        certification = "Google AI Essentials";

        salary = "₹8 LPA - ₹20 LPA";

        platform = "Coursera, Google AI";

        level = "Advanced";

        duration = "6 Months";

    }

    else if (skill.includes("machine learning") && interest.includes("ai")) {

        course = "Advanced Machine Learning";

        career = "Machine Learning Engineer";

        description = "Builds predictive models and intelligent AI applications.";

        certification = "IBM Machine Learning";

        salary = "₹8 LPA - ₹18 LPA";

        platform = "Coursera";

        level = "Advanced";

        duration = "6 Months";

    }

    else if (skill.includes("networking") && interest.includes("network")) {

        course = "CCNA Networking";

        career = "Network Engineer";

        description = "Maintains routers, switches and enterprise computer networks.";

        certification = "Cisco CCNA";

        salary = "₹4 LPA - ₹10 LPA";

        platform = "Cisco Skills for All";

        level = "Intermediate";

        duration = "4 Months";

    }

    else if (skill.includes("android") && interest.includes("mobile")) {

        course = "Android App Development";

        career = "Android Developer";

        description = "Develops Android mobile applications using Kotlin and Java.";

        certification = "Google Android Developer";

        salary = "₹5 LPA - ₹12 LPA";

        platform = "Android Developers";

        level = "Intermediate";

        duration = "5 Months";

    }

    else if (skill.includes("ios") && interest.includes("mobile")) {

        course = "iOS App Development";

        career = "iOS Developer";

        description = "Develops applications for Apple iPhone and iPad.";

        certification = "Apple App Development";

        salary = "₹6 LPA - ₹14 LPA";

        platform = "Apple Developer";

        level = "Intermediate";

        duration = "5 Months";

    }

    else if (skill.includes("devops") && interest.includes("automation")) {

        course = "DevOps Engineering";

        career = "DevOps Engineer";

        description = "Automates software development, deployment and monitoring.";

        certification = "AWS DevOps Engineer";

        salary = "₹7 LPA - ₹16 LPA";

        platform = "AWS Skill Builder";

        level = "Advanced";

        duration = "5 Months";

    }

    else if (skill.includes("testing") && interest.includes("software")) {

        course = "Software Testing";

        career = "QA Engineer";

        description = "Tests software applications to ensure quality and reliability.";

        certification = "ISTQB Foundation";

        salary = "₹4 LPA - ₹9 LPA";

        platform = "Udemy";

        level = "Beginner";

        duration = "3 Months";

    }

    // ==========================
    // UI/UX, MARKETING, BLOCKCHAIN
    // ==========================
        else if (skill.includes("ui/ux") && interest.includes("design")) {

        course = "UI/UX Design";

        career = "UI/UX Designer";

        description = "Designs attractive and user-friendly websites and mobile applications.";

        certification = "Google UX Design Professional Certificate";

        salary = "₹4 LPA - ₹10 LPA";

        platform = "Coursera";

        level = "Beginner";

        duration = "3 - 4 Months";

    }

    else if (skill.includes("digital marketing") && interest.includes("marketing")) {

        course = "Digital Marketing";

        career = "Digital Marketing Executive";

        description = "Promotes businesses using SEO, social media and online advertising.";

        certification = "Google Digital Marketing";

        salary = "₹3 LPA - ₹8 LPA";

        platform = "Google Skillshop";

        level = "Beginner";

        duration = "2 - 3 Months";

    }

    else if (skill.includes("blockchain") && interest.includes("blockchain")) {

        course = "Blockchain Development";

        career = "Blockchain Developer";

        description = "Develops decentralized blockchain applications.";

        certification = "Blockchain Council Certification";

        salary = "₹8 LPA - ₹20 LPA";

        platform = "Coursera";

        level = "Advanced";

        duration = "6 Months";

    }

    else if (skill.includes("iot") && interest.includes("iot")) {

        course = "Internet of Things";

        career = "IoT Engineer";

        description = "Develops smart devices connected through the Internet.";

        certification = "Cisco IoT";

        salary = "₹5 LPA - ₹12 LPA";

        platform = "Cisco Skills for All";

        level = "Intermediate";

        duration = "4 Months";

    }

    else if (skill.includes("embedded") && interest.includes("embedded")) {

        course = "Embedded Systems";

        career = "Embedded Systems Engineer";

        description = "Designs embedded hardware and software systems.";

        certification = "Embedded Systems Certification";

        salary = "₹5 LPA - ₹11 LPA";

        platform = "NPTEL";

        level = "Intermediate";

        duration = "4 Months";

    }

    else if (skill.includes("business") && interest.includes("business")) {

        course = "Business Management";

        career = "Business Analyst";

        description = "Analyzes business processes and improves organizational performance.";

        certification = "Business Analysis Foundation";

        salary = "₹5 LPA - ₹12 LPA";

        platform = "Coursera";

        level = "Intermediate";

        duration = "4 Months";

    }

    else {

        course = "Career Guidance Program";

        career = "Career Counsellor Recommendation";

        description = "No exact match found. Please explore more skills and interests.";

        certification = "Google Career Certificates";

        salary = "Depends on chosen career";

        platform = "NPTEL, Coursera, Cisco Skills for All";

        level = "Beginner";

        duration = "Varies";

    }

    document.getElementById("result").innerHTML = `

    <div style="background:#ffffff;padding:25px;border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);margin-top:25px;">

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

        <h3 style="color:#dc3545;">💰 Average Salary</h3>

        <p>${salary}</p>

        <h3 style="color:#0dcaf0;">📖 Learning Platform</h3>

        <p>${platform}</p>

        <h3 style="color:#6c757d;">📈 Course Level</h3>

        <p>${level}</p>

        <h3 style="color:#fd7e14;">⏳ Course Duration</h3>

        <p>${duration}</p>

    </div>

    `;

    document.getElementById("studentForm").reset();

});
                                            
