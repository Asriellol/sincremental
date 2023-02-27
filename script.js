window.onload = function() {
    // Get DOM elements
    const cultivator = document.querySelector('#cultivator');
    const enemyContainer = document.querySelector('#enemy');
    const cultivatorHPBar = document.querySelector('#cultivatorHPBar');
    const enemyHPBar = document.querySelector('#enemyHPBar');
  
    let cultivatorHP = 100;
    let cultivatorAttackDamage = 10;
    let enemies = [];

    // Move the enemies towards the cultivator

    function moveEnemies() {
        for (const enemy of enemies) {
            // Find the distance between the enemy and the cultivator
            let dx = cultivator.offsetLeft - enemy.offsetLeft;
            let dy = cultivator.offsetTop - enemy.offsetTop;
            const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
          
            if (distance > 0) {
                // Normalize dx and dy
                dx /= distance;
                dy /= distance;
    
                // Move towards the cultivator based on the distance
                enemy.style.left = `${enemy.offsetLeft + dx * 5}px`;
                enemy.style.top = `${enemy.offsetTop + dy * 5}px`;
            }
        }
    }

    // Generate a new enemy
function generateEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
  
    // Generate a random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    enemy.style.left = `${x}px`;
    enemy.style.top = `${y}px`;
  
    // Append the enemy to the DOM
    enemyContainer.appendChild(enemy);
  
    // Add the enemy to the enemies array
    enemies.push(enemy);
  
    console.log("Enemy generated at x:", x, "y:", y);
    console.log("Total enemies:", enemies.length);
  }

  // Update the cultivator's HP bar
  function updateCultivatorHPBar() {
    cultivatorHPBar.style.width = `${cultivatorHP}%`;
  }
    
    // Generate a random enemy every second
    setInterval(() => {
        generateEnemy();
      }, 5000);
    
    setInterval(() => {
          moveEnemies()
          updateCultivatorHPBar()
  }, 100);


}
