// تأثير الظهور التدريجي عند التمرير (Intersection Observer)
// هذا هو الكود البرمجي الوحيد المتبقي لضمان أفضل أداء وسلاسة في ظهور العناصر
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .about-content, .contact-wrapper').forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.15}s`;
    observer.observe(el);
});
