"use strict";
const addSkillBtn = document.getElementById("add-skill");
const addEducationBtn = document.getElementById("add-education");
const addExperienceBtn = document.getElementById("add-experience");
const generateBtn = document.getElementById("generate-btn");
const skillsContainer = document.getElementById("skills-container");
const educationContainer = document.getElementById("education-container");
const experienceContainer = document.getElementById("experience-container");
const previewName = document.getElementById("preview-name");
const previewContact = document.getElementById("preview-contact");
const previewEducation = document.getElementById("preview-education");
const previewExperience = document.getElementById("preview-experience");
const previewSkills = document.getElementById("preview-skills");
addSkillBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Skill";
    skillsContainer.appendChild(input);
    input.focus();
});
addEducationBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Degree — University — Year";
    educationContainer.appendChild(input);
    input.focus();
});
addExperienceBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Job Title — Company — Description";
    experienceContainer.appendChild(input);
    input.focus();
});
generateBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin")
        .value;
    previewName.textContent = name || "Your Name";
    previewContact.innerHTML = `${email || "Email"} · ${phone || "Phone"} · ${linkedin || "LinkedIn"}`;
    previewEducation.innerHTML = "";
    previewExperience.innerHTML = "";
    previewSkills.innerHTML = "";
    function createItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        li.style.opacity = "0";
        li.style.transform = "translateX(-8px)";
        li.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        return li;
    }
    // EDUCATION
    const educationInputs = educationContainer.getElementsByTagName("input");
    let eduHasContent = false;
    for (let input of educationInputs) {
        if (input.value.trim()) {
            previewEducation.appendChild(createItem(input.value));
            eduHasContent = true;
        }
    }
    if (!eduHasContent) {
        const li = document.createElement("li");
        li.textContent = "Your education will appear here";
        li.className = "placeholder-item";
        previewEducation.appendChild(li);
    }
    // EXPERIENCE
    const experienceInputs = experienceContainer.getElementsByTagName("input");
    let expHasContent = false;
    for (let input of experienceInputs) {
        if (input.value.trim()) {
            previewExperience.appendChild(createItem(input.value));
            expHasContent = true;
        }
    }
    if (!expHasContent) {
        const li = document.createElement("li");
        li.textContent = "Your experience will appear here";
        li.className = "placeholder-item";
        previewExperience.appendChild(li);
    }
    // SKILLS
    const skillInputs = skillsContainer.getElementsByTagName("input");
    let skillHasContent = false;
    for (let input of skillInputs) {
        if (input.value.trim()) {
            previewSkills.appendChild(createItem(input.value));
            skillHasContent = true;
        }
    }
    if (!skillHasContent) {
        const li = document.createElement("li");
        li.textContent = "Your skills will appear here";
        li.className = "placeholder-item";
        previewSkills.appendChild(li);
    }
    // Animation
    const items = document.querySelectorAll("#resume li:not(.placeholder-item)");
    items.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, i * 60);
    });
});
//# sourceMappingURL=script.js.map