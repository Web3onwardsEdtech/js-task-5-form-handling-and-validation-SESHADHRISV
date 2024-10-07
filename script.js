let skills = ['JavaScript', 'HTML', 'CSS']; 
let favoriteCount = 0;

function displaySkills() {
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${skill}
            <button onclick="markAsFavorite(this)">Favorite</button>
        `;
        skillsList.appendChild(li);
    });
}

function markAsFavorite(button) {
    button.style.backgroundColor = '#FFD700'; 
    button.innerText = 'Favorited';
    button.disabled = true; 

      favoriteCount++;
    document.getElementById('favoritesCount').innerText = favoriteCount;
}


function sortSkills() {
    skills.sort();
    displaySkills();
}

document.getElementById('skillForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const skillName = document.getElementById('skillName').value.trim();
    const feedback = document.getElementById('feedback');
    
    if (skillName === '') {
        feedback.innerText = 'Please enter a valid skill.';
        return;
    }
    

    skills.push(skillName);
    displaySkills();
    
   
    document.getElementById('skillName').value = '';
    feedback.innerText = '';
});

displaySkills();

