AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".about_us-cards");

const exp = [
       // blog 10
     {
    title: "Google Opportunity 2024",
    cardImage: "assets/images/Blog/10.png",
    topic:"Internship Opportunity For Fresher in Google",
    date:"13-07-2024",
    desp: "<br><b>Software Engineering Intern, Summer 2025</b><br>Google, Bengaluru, Karnataka, India; Hyderabad, Telangana, India; Pune, Maharashtra, India<br>Application Deadline: July 21, 2024<br>Internship Duration: May/June 2025 for 10-12 weeks<br><br>Google is seeking students pursuing a Bachelor's, Master's, or Dual degree in Computer Science or a related field for its Summer 2025 Software Engineering Internship. Candidates must have experience with programming languages such as Java, C/C++, Python, JavaScript, or Go, and familiarity with Unix/Linux environments, data structures, algorithms, and software design. Preferred applicants are in their penultimate year of study and can demonstrate involvement in tech projects and extracurricular activities. Responsibilities include developing scalable software systems, collaborating on a variety of projects involving AI, machine learning, and data compression, and supporting a productive team environment.",
    desp2: "To apply, candidates must submit an updated CV or resume and an unofficial or official transcript in English. Applicants can select their preferred work location from Bengaluru, Hyderabad, or Pune. Google is committed to equal opportunity and affirmative action, encouraging applications from all backgrounds.",
    desp3: "Link To Video: <a href=\"https://youtu.be/oXP3nIRSTYM\" target=\"_blank\">https://youtu.be/oXP3nIRSTYM</a><br>Link To Event Website: <a href=\"https://shorturl.at/BYdL7\" target=\"_blank\">https://shorturl.at/BYdL7</a>",
      },
       
       // blog 9
     {
    title: "SalesForce 2024",
    cardImage: "assets/images/Blog/salesforce.png",
    topic:"Salesforce Learning Program 2024",
    date:"10-07-2024",
    desp: "Explore the power of Salesforce Trailhead's Trailmix: Get Started with Data Cloud Quest. This course empowers you to deliver personalized customer experiences at every touchpoint. By leveraging data insights, you can significantly increase customer satisfaction and loyalty.<br>",
    desp2: "Dive into practical strategies and tools that drive business growth. Learn how to harness data to understand customer needs and preferences, ensuring every interaction is meaningful and impactful. Enhance your skills and elevate your customer service with this essential learning path.",
    desp3: "Link To Video: <a href=\"https://youtu.be/vYpkmdXZ-j4\" target=\"_blank\">https://youtu.be/vYpkmdXZ-j4</a><br>Link To Event Website: <a href=\"https://shorturl.at/UxG7f\" target=\"_blank\">https://shorturl.at/UxG7f</a>",
      },
  
    // blog 8
     {
    title: "Flipkart GRiD 6.0",
    cardImage: "assets/images/Blog/flipkart.png",
    topic:"Software Engineering & Internship Opportunities At Flipkart",
    date:"10-07-2024",
    desp: "<b>Organizer: Flipkart <br>Location: Online<br> Overview:<br>Flipkart GRiD 6.0 is the sixth edition of Flipkart’s flagship engineering campus challenge. It offers engineering students a chance to showcase their technical skills by solving real-world E-Commerce problems.<br>Eligibility:<br>Open to B.Tech/B.E./M.Tech/M.S students (Batch 2025-2028) from any engineering specialization.<br>Teams of 1-3 members.<br>Cross-specialization and cross-campus teams allowed.",
    desp2: "<br>Stages:<br>E-Commerce & Tech Quiz: Online quiz on E-Commerce trivia and tech fundamentals.<br>Submission Round: Idea submission with a video presentation.<br>National Finale: Finalists present their solutions to Flipkart domain experts.<br><br>Prizes:<br>Winners: EGVs worth INR 1,00,000, PPIs for tech roles.<br>First Runners-Up: EGVs worth INR 75,000.<br>Finalists: Certificates, PPIs with CTCs of INR 32 LPA, and internship stipends starting from INR 1,00,000.<br><br>Career Opportunities:Top-performing teams get pre-placement interviews for internships and full-time roles at Flipkart.<br><br><b>Ready to enter the GRiD?</b>",
    desp3: "Link To Video: <a href=\"https://youtu.be/LhrTLPLT69s\" target=\"_blank\">https://youtu.be/LhrTLPLT69s</a><br>Link To Event Website: <a href=\"https://shorturl.at/3xd6J\" target=\"_blank\">https://shorturl.at/3xd6J</a>",
      },
  
  // blog 7
     {
    title: "GOOGLE ON CAMPUS 2024",
    cardImage: "assets/images/Blog/google1.png",
    topic:"Software Engineering Opportunities at Google India",
    date:"08-07-2024",
    desp: "<b>Welcome to the session on Software Engineering Opportunities at Google India!</b> <br>We are excited to have you join us for this insightful session. Today, we have a stellar lineup of speakers:<br><b>Aditi Bakshi</b> from the Talent Engagement Team<br><b>Rashma Raveendra</b> from Google Cloud<br><b>Rakesh Sinha</b> from Google Search<br><b>Taruni N</b>, a former Google Intern turned Software Engineer<br> <br>They will be sharing insights about Google’s culture, Google for India, our hiring philosophy, and the numerous opportunities you can leverage to become a part of Google. Stay tuned to find out more!",
    desp2: "<br><b>Highlights:</b><br> Google's Culture: Discover what makes Google a unique workplace.<br> <br>Google for India: Learn about Google's initiatives and impact in India. <br>Hiring Philosophy: Understand what Google looks for in potential hires.<br>Opportunities: Explore student programs, events, scholarships, and more.<br>",
    desp3: "Link To Video: <a href=\"https://youtu.be/TsX9UJnY3vs\" target=\"_blank\">https://youtu.be/TsX9UJnY3vs</a><br>Link To Event Website: <a href=\"https://shorturl.at/QhD5v\" target=\"_blank\">https://shorturl.at/QhD5v</a>",
      },
 
 // blog 6
     {
    title: "Cloud Yatra 2024",
    cardImage: "assets/images/Blog/google.png",
    topic:"Cloud Yatra: Level Up Your Cloud Game",
    date:"07-07-2024",
    desp: "<b>Get up to speed on cloud computing and Google Cloud Platform (GCP) in just one day. Enjoy interactive sessions, expert tips, and career hacks while meeting fellow cloud enthusiasts and accessing valuable student resources.",
    desp2: "<br><b>Level Up Your Cloud Skills:</b><br>Cloud Computing Demystified: Discover how the cloud enhances your business.<br>GCP: Your Cloud Toolkit: Explore core services like compute, storage, and databases.<br>Security Like a Boss: Learn to secure your cloud environment.<br>Networking Made Easy: Navigate the cloud's digital highways.<br>Student Launchpad: Access exclusive resources to kickstart your cloud career.<br><br><b>Ready to take your business to the cloud? See you at Cloud Yatra!<br>",
    desp3: "Link To Video: <a href=\"https://youtu.be/vc6ngQpBB5U\" target=\"_blank\">https://youtu.be/RZjz6nAQdKQ</a><br>Link To Event Website: <a href=\"https://shorturl.at/rJuHJ\" target=\"_blank\">https://shorturl.at/rJuHJ</a>",
      },
 
 // blog 5
     {
    title: "Goldman Sachs Opportunity",
    cardImage: "assets/images/Blog/job.png",
    topic:"Internship + Full Time Opportunity",
    date:"06-07-2024",
    desp: "<b>Exciting Career Opportunity with Goldman Sachs for 2024, 2025, and 2026 Graduates!</b><br>Goldman Sachs is offering a unique program for 2024, 2025, and 2026 graduates that combines an enriching internship experience with the potential for full-time employment.<br><br><b>Program Highlights:</b>Gain hands-on experience in various domains like investment banking, asset management, and technology through a comprehensive internship. Successful interns will be considered for full-time positions, with opportunities to connect with industry leaders and benefit from mentorship programs. Participate in cutting-edge learning through workshops, seminars, and training sessions in a diverse workplace that values unique perspectives and encourages innovation.",
    desp2: "<br><b>Who Should Apply?</b><br>Open to students graduating in 2024, 2025, and 2026 who are ambitious and eager to make a mark in the financial world.",
    desp3: "Link To Video: <a href=\"https://youtu.be/RZjz6nAQdKQ\" target=\"_blank\">https://youtu.be/RZjz6nAQdKQ</a><br>Link To Event Website: <a href=\"https://www.goldmansachs.com/careers/students/programs/index.html\" target=\"_blank\">https://www.goldmansachs.com/careers/students/programs/index.html</a>",
      },
 
 // blog 4
     {
    title: "Code Cubicle 2.0",
    cardImage: "assets/images/Blog/code.png",
    topic:"Visit MicroSoft Office",
    date:"05-07-2024",
    desp: "🚀 Join the ultimate hackathon by Geek Room and dive into innovation and creativity.<br>💰 Prize Pool:<br>Worth INR 30,00,000+ <br>Cash Prize worth INR 40,000+ <br>🎯 Activities:<br>Live project presentations, pitching sessions, and fun games with exciting prizes!<br>🎁 Perks:<br>Free swags, networking with industry experts, awesome goodies, complimentary accommodation, and meals.<br>🌈 Break barriers and pioneer inventive solutions. Join us at Code Cubicle 2.0 for an unforgettable tech adventure!",
    desp2: "",
    desp3: "Link To Video: <a href=\"https://youtu.be/jMj5_G9y4yg\" target=\"_blank\">https://youtu.be/jMj5_G9y4yg</a><br>Link To Event Website: <a href=\"https://shorturl.at/qLXX2\" target=\"_blank\">https://shorturl.at/qLXX2</a>",
      },
  
  // blog 3
     {
    title: "Geeks For Geeks Coding Program 2024",
    cardImage: "assets/images/Blog/gfg.png",
    topic:"Coding Contest",
    date:"03-07-2024",
    desp: "Get ready for the Geeks for Geeks Coding Contest 2024! This is your chance to demonstrate your coding expertise and compete with top programmers globally. The contest features a variety of challenging problems designed to test your skills and creativity. Whether you're a beginner or an experienced coder, there’s something for everyone. Exciting prizes, certificates, and global recognition await the best performers. Participate to enhance your problem-solving abilities, learn new techniques, and connect with a community of passionate coders. Don't miss this opportunity to shine and advance your coding career! Mark your calendars and start preparing now!",
    desp2: "",
    desp3: "Link To Video: <a href=\"https://youtu.be/jMj5_G9y4yg\" target=\"_blank\">https://youtu.be/jMj5_G9y4yg</a><br>Link To Event Website: <a href=\"https://shorturl.at/wzAJV\" target=\"_blank\">https://shorturl.at/wzAJV</a>",
      },

  // blog 1
  {
    title: "10+ Free Courses For Beginner With Free Certificate & Goodies",
    cardImage: "assets/images/Blog/Blog.png",
    topic:"Free Courses & Certificate For Student",
    date:"01-07-2024",
    desp: "Embarking on a new learning journey can be exciting, especially when you have access to high-quality, free courses. One platform offers a variety of free courses for beginners, complete with certificates and sometimes even additional goodies. These courses cover diverse topics such as programming, data science, and providing foundational knowledge, practical skills, and industry-recognized certifications to boost your career.",
    desp2: "",
    desp3: "These free courses also provide an excellent opportunity for you guys.\nLink To Video: <a href=\"https://youtu.be/7JKSrp80TFY\" target=\"_blank\">https://youtu.be/7JKSrp80TFY</a><br>Link To Event Website: <a href=\"https://letsupgrade.in/programs#events\" target=\"_blank\">https://letsupgrade.in/programs#events</a>",
  },
      
  // blog 2
   {
    title: "Google Innovators Program 2024",
    cardImage: "assets/images/Blog/Thumbnail.png",
    topic:"Google Innovators Scholarship for Google Certificate",
    date:"01-07-2024",
    desp: "The Google Innovators Scholarship for Google Certificate is a remarkable opportunity for individuals looking to enhance their skills with industry-recognized Google certifications. This scholarship offers a 100% free certification voucher, enabling learners to access high-quality training programs at no cost. Whether you're a beginner or looking to advance your expertise, this scholarship covers a range of courses that equip you with practical skills and knowledge required in today's tech-driven world. Don't miss out on this chance to accelerate your career growth with a prestigious Google Certificate. Apply now and take the first step towards achieving your professional goals.",
    desp2: "",
    desp3: "Link To Video: <a href=\"https://youtu.be/SP20o2NLbD4\" target=\"_blank\">https://youtu.be/SP20o2NLbD4</a><br>Link To Event Website: <a href=\"https://cloud.google.com/innovators?hl=en\" target=\"_blank\">https://cloud.google.com/innovators?hl=en</a>",
  },
];





const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title,topic,date,cardImage, desp , desp2 , desp3}) =>
      (output += `        
        <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
          <div class="card card1">
            <img src="${cardImage}" class="featured-image"/>
            <article class="card-body">
              <header>
                <div class="title">
                  <h3>${title}</h3>
                </div>
                <p class="meta">
                  <span class="pre-heading">${topic}</span><br>
                  <span class="author">${date}</span>
                </p>
            <ol>
            <div class="desptext_1">
              ${desp}
            </div>
            </ol>
            <ol>
            <div class="desptext_1">
              ${desp2}
            </div>
            </ol>
            <ol>
            <div class="desptext_1">
              ${desp3}
            </div>
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);




 
