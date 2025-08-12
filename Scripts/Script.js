        
        console.log("texte js")

        const MenuIcon = document.getElementById('MenuIcon');
        
        // Seleciona a sidebar pelo ID
        const sidebar = document.getElementById('sidebar-menu');

        MenuIcon.addEventListener('click', () => {
            // A cada clique, ele adiciona ou remove a classe 'visivel' da sidebar
            sidebar.classList.toggle('visivel');
        });