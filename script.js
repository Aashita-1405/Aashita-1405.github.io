  document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger?.addEventListener('click', () => navMenu.classList.toggle('active'));
    document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('active')));

    // Set current year in footer
    document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Aashita Sasikumar. All rights reserved.`;

    // Certificate links - REPLACE THESE URLS WITH YOUR ACTUAL CERTIFICATE LINKS
    const certLinks = {
        cert1: "https://www.linkedin.com/posts/aashita-sasikumar-976a51299_plans-activity-7415431676895391745-f9zZ?utm_source=share&utm_medium=member_android&rcm=ACoAAEg8aSoBaQU_e0FQO07cAe7c8ep20KfkIek",  // Microsoft Power BI
        cert2: "https://www.linkedin.com/posts/aashita-sasikumar-976a51299_successfully-completed-data-science-for-beginners-activity-7427342521426550786-SB7q?utm_source=share&utm_medium=member_android&rcm=ACoAAEg8aSoBaQU_e0FQO07cAe7c8ep20KfkIek",  // Data Science for Beginners
        cert3: "https://www.linkedin.com/posts/aashita-sasikumar-976a51299_hackerrank-python-learningjourney-activity-7400519846725214208-EPYj?utm_source=share&utm_medium=member_android&rcm=ACoAAEg8aSoBaQU_e0FQO07cAe7c8ep20KfkIek",  // Python Basics - HackerRank
        cert4: "https://www.linkedin.com/posts/aashita-sasikumar-976a51299_aiforbeginners-hplife-techskills-activity-7398601522269315072-ks3k?utm_source=share&utm_medium=member_android&rcm=ACoAAEg8aSoBaQU_e0FQO07cAe7c8ep20KfkIek",  // HP AI for Beginners
        cert5: "https://www.linkedin.com/posts/aashita-sasikumar-976a51299_introducing-sap-abap-platform-fundamentals-activity-7321038859117432832-kNAB?utm_source=share&utm_medium=member_android&rcm=ACoAAEg8aSoBaQU_e0FQO07cAe7c8ep20KfkIek",  // SAP ABAP Fundamentals
        cert6: "https://www.linkedin.com/posts/aashita-sasikumar-976a51299_i-am-feeling-elated-to-have-just-completed-activity-7261977773185867777-3hAm?utm_source=share&utm_medium=member_android&rcm=ACoAAEg8aSoBaQU_e0FQO07cAe7c8ep20KfkIek"   // Cybersecurity - Microsoft
    };
    for (let i = 1; i <= 6; i++) {
        const el = document.getElementById(`cert${i}`);
        if (el && certLinks[`cert${i}`]) el.href = certLinks[`cert${i}`];
    }

    // Contact form alert
    const form = document.getElementById('contactForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        form.reset();
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
