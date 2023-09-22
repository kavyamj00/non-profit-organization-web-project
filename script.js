// JavaScript code for loading images and project descriptions
document.addEventListener("DOMContentLoaded", function () {
    // Image URLs
    const projectImageUrls = [
        "https://habitatbroward.org/wp-content/uploads/2019/10/6-Differences-Between-For-Profit-and-Nonprofit-Organizations.jpg",
        "https://marketbusinessnews.com/wp-content/uploads/2016/12/Non-profit-organization.jpg"
    ];

    // Project descriptions
    const projectDescriptions = [
        {
            title: "Clean Water Initiative",
            description: "Our Clean Water Initiative is dedicated to providing clean and safe drinking water to underserved communities in regions affected by water scarcity. With a focus on sustainable solutions, we implement water purification systems and well installations to ensure access to clean water sources. By doing so, we aim to improve health, sanitation, and overall quality of life for thousands of individuals, especially women and children who often bear the burden of water collection. Join us in the fight for a healthier and more equitable world by supporting Project 1."
        },
        {
            title: "Education for All",
            description: "Education for All is a transformative project designed to break down barriers to education and empower disadvantaged youth. We believe that education is the key to breaking the cycle of poverty and inequality. Through Project 2, we provide scholarships, school supplies, and access to quality educational resources to children in underprivileged communities. Additionally, we engage local educators and volunteers to mentor and support these young minds. By investing in education, we're nurturing future leaders and changemakers who will drive positive change in their communities."
        }
    ];

    // Load images and project descriptions
    for (let i = 0; i < projectImageUrls.length; i++) {
        const projectImageElement = document.getElementById(`project-image-${i + 1}`);
        const projectTitleElement = document.getElementById(`project-title-${i + 1}`);
        const projectDescriptionElement = document.getElementById(`project-description-${i + 1}`);

        // Set image source
        projectImageElement.src = projectImageUrls[i];

        // Set project title and description
        projectTitleElement.textContent = projectDescriptions[i].title;
        projectDescriptionElement.textContent = projectDescriptions[i].description;
    }
});
