// This sections, document, refers to the HTML document
// This section, addEventListener, is a method used to listen to the HTML document
// This section, DOMContentLoaded, refers to what is being listened for and tells the event listener that the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // This section, var container, defines the variable
    // This section, document.getElementById("container"), gets the HTML element, "container," and assigns it to the, var container
    var container = document.getElementById("container");

    // This section defines the variable, observer
    // It then creates and uses the method, MutationObserver, which is an inbuilt JS object that provides a way to react to changes in the DOM
    // function (mutations), is a callback function that will be executed when changes in the DOM occur
    // mutations, this parameter is ued for the callback function and is an array passed to the MutationsObserver when changes happen within the DOM   
    var observer = new MutationObserver(function (mutations) {
        // mutations, This is the array object
        // forEach(function (mutation), this is a method used to iterate over the array's callback function
        mutations.forEach(function (mutation) {
            // This if statement is used for checking conditions, if they are met a node is added, if not, it will carry out other tasks
            // mutation.addedNodes.length > 0, Checks if there are any nodes added as part of the mutation. The condition is true if at least one node has been added
            // mutation.addedNodes[0].tagName === "BUTTON", Checks if the added node is a <button> element 
            // mutation.addedNodes[0].classList.contains("available"), Checks if the first added node has the "available" class in its list of classes
            if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].tagName === "BUTTON" && mutation.addedNodes[0].classList.contains("available")) {
                // This section refers to the first added node in the array, when it is added style.cursor = pointer changes the style of the cursor
                mutation.addedNodes[0].style.cursor = "pointer";

                // This method is used to stop/disconnect/close the MutationObserver from observing the DOM mutations 
                observer.disconnect();
            }
            // This else if statement is used to check if conditions are true, if they are tasks are executed
            // mutation.addedNodes.length > 0, Checks if there are any nodes added as part of the mutation. The condition is true if at least one node has been added
            // mutation.addedNodes[0].tagName === "BUTTON", Checks if the added node is a <button> element 
            // mutation.addedNodes[0].classList.contains("unavailable"), Checks if the first added node has the "unavailable" class in its list of classes
            else if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].tagName === "BUTTON" && mutation.addedNodes[0].classList.contains("unavailable")) {
                // This line targets the first added node in the mutation and sets its CSS cursor property to "not-allowed."
                mutation.addedNodes[0].style.cursor = "not-allowed";
                // This line targets the second added node in the mutation and sets its CSS backgroundColor property to "gray."
                mutation.addedNodes[0].style.backgroundColor = "gray";
                // This line targets the third added node in the mutation and sets its disabled attribute to true
                mutation.addedNodes[0].disabled = true;
            }
        });
    });

    // This variable, config, is used to configure the options within the MutationsObserver
    var config = {
        // This specifies that the observer should watch for changes in the child nodes of the target element
        childList: true,
        // It indicates that the observer should also consider changes in the descendants of the target element
        subtree: true
    };
    // This is then used to start the MutationsObserver where 'container' is the target and 'config' is the types of mutations to observer
    observer.observe(container, config);
});