[View Deployed Site Here](https://ajfriel86.github.io/GenTest2/)

Task:

- The page loads an external JS that you cannot modify for the test since it is hosted on S3. You cannot remove this script. This JS injects in the div “container” a button after a random time from the page load (from 0 to  5 seconds), so you cannot predict when the button will appear. Also, the button can appear as green available or red unavailable. When clicked, this button displays an alert. The “customer” has the following requirements, implement as many as possible. You are allowed to add extra scripts and modify the CSS if needed (but cannot remove the S3  script) 

    - When the button appears green, add a hand cursor on hover to indicate that  is clickable - DONE
    - When the button appears and it is red (unavailable), disable it, which means nothing should happen when trying to click on it. Then, grey it out and apply a “disabled” red cursor on hover. - DONE   
    - Extra Bonus challenge: 
        - Are you able to achieve this without the button flashing red at all? - DONE