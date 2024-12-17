 // AOS init dengan once: false agar bisa diulang
        AOS.init({
            duration: 1000,
            once: false  // Ubah menjadi false agar animasi bisa diulang
        });

        // Scroll to Top functionality
        const scrollBtn = document.querySelector('.scroll-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                scrollBtn.classList.add('active');
            } else {
                scrollBtn.classList.remove('active');
            }
        });

        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Refresh AOS setelah scroll to top
            setTimeout(() => {
                AOS.refresh();
            }, 1000); // Tunggu 1 detik setelah scroll selesai
        });