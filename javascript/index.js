document.addEventListener('DOMContentLoaded', function() {
    function typeAnimation(element, text, speed) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    const introText = "Gayeon's Portfolio Website";
    const personalInfoText = "SKKU Computer Education\n2020314968 김가연";
    
    const introElement = document.querySelector('.introduction h1');
    const personalInfoElement = document.querySelector('.personal-info');
    
    introElement.innerHTML = ''; // Clear existing content
    personalInfoElement.innerHTML = ''; // Clear existing content

    typeAnimation(introElement, introText, 100); // Speed of typing the intro text
    setTimeout(() => {
        typeAnimation(personalInfoElement, personalInfoText, 100); // Speed of typing the personal info text
    }, introText.length * 100); // Delay the start based on the length of the intro text
});

