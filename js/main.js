window.onload = () => {
    // Remove page blur after load
    document.body.classList.remove('loading');

    const sections = document.querySelectorAll("home, skills, experience, projects, contacts");
    const links = document.querySelectorAll("nav a");
    const nav = document.getElementById("mainNav");
    let actualCurrentSession = window.location.hash || "#home";

    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    function updateHashOnScroll() {
        let currentSection = null;
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section;
            }
        });

        if (currentSection && actualCurrentSession !== `#${currentSection.id}`) {
            history.replaceState(null, null, `#${currentSection.id}`);
            actualCurrentSession = `#${currentSection.id}`;
            updateAria();
        }
    }

    function updateAria() {
        links.forEach(link => {
            if (link.getAttribute('href') === actualCurrentSession) {
                link.setAttribute('aria-current', 'page');
                link.classList.add('active');
            } else {
                link.removeAttribute('aria-current');
                link.classList.remove('active');
            }
        });
    }

    function handleNavBlur() {
        if (window.scrollY > nav.offsetHeight) {
            nav.classList.add("dark-nav");
            nav.classList.remove("transparent-nav");
        } else {
            nav.classList.remove("dark-nav");
            nav.classList.add("transparent-nav");
        }
    }

    // Set up click listeners for smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get the ID without the "#"
            scrollToSection(targetId);
        });
    });

    // Event listeners
    window.addEventListener('scroll', () => {
        updateHashOnScroll();
        handleNavBlur();
    });

    window.addEventListener('hashchange', updateAria);

    // Initial load actions
    updateHashOnScroll();
    updateAria();
    handleNavBlur();
};
