document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        circle.addEventListener("mouseover", () => {
            circle.style.transform = "scale(1.2)";
        });

        circle.addEventListener("mouseout", () => {
            circle.style.transform = "scale(1)";
        });
    });
});
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0 0 20px rgba(255, 204, 0, 0.8)";
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "none";
    });
});
