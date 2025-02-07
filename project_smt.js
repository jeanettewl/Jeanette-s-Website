// Semester Filter Functionality
document.querySelectorAll(".semester-filter button").forEach(button => {
    button.addEventListener("click", function() {
        const semester = this.getAttribute("data-semester");
        
        // Hide all projects initially
        document.querySelectorAll(".project-item").forEach(item => {
            if (semester === "all" || item.classList.contains(semester)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Set active button
        document.querySelectorAll(".semester-filter button").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
