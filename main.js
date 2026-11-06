const lines = document.querySelectorAll(".flow-line");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
           
        } else {
            entry.target.classList.remove("show");
        }
    });

}, {threshold: 0.6});

lines.forEach(function (line) {
    observer.observe(line);
});