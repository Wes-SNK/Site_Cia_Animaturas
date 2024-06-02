//início função de colorir cada letra da logo
        function changeColors() {
            const logoText = document.getElementById('logo').querySelector('a').textContent;
            const logo = document.getElementById('logo').querySelector('a');      
            const colors = ['#1b73d8', '#1b73d8', '#1b73d8', '#1b73d8', '#1b73d8', '#1b73d8', '#1b73d8', '#1b73d8'];

            let animationProgress = 0;

            logo.innerHTML = ''; // Clear existing content

            for (let i = 0; i < logoText.length; i++) {
                const span = document.createElement('span');
                span.textContent = logoText[i];
                span.style.color = 'white'; // Initial color
                logo.appendChild(span);
            }

            const animateColors = () => {
                if (animationProgress >= logoText.length) return;
                const span = logo.querySelectorAll('span')[animationProgress];
                    span.style.color = colors[animationProgress % colors.length];
                animationProgress++;
                    setTimeout(animateColors, 60); // Adjust delay as desired in milliseconds
            };

            animateColors(); 
        }
        
        function resetColors() {
            const logo = document.getElementById('logo');
            logo.innerHTML = '<a href="index.html" target="_self">Cia. Animaturas</a>';
        }
        // fim da função de colorir cada letra do logo

            // Função para definir favicon baseado no modo (light/dark)
        function setFavicon(mode) {
            const faviconLinks = document.querySelectorAll('link[rel="icon"]');
            const lightIconPath = 'img/icone/';
            const darkIconPath = 'img/icone/';

            const lightIcons = [
                'icone_azul_16x16.ico',
                'icone_azul_32x32.ico',
                'icone_azul_48x48.ico',
                'icone_azul_64x64.ico',
                'icone_azul_72x72.ico'
            ];

            const darkIcons = [
                'icone_branco_16x16.ico',
                'icone_branco_32x32.ico',
                'icone_branco_48x48.ico',
                'icone_branco_64x64.ico',
                'icone_branco_72x72.ico'
            ];

            faviconLinks.forEach(link => {
                const sizes = link.getAttribute('sizes');
                let iconFilename;
                if (sizes) {
                    const sizeValue = sizes.split('x')[0]; // Extrai a primeira dimensão do tamanho
                    const index = ['16', '32', '48', '64', '72'].indexOf(sizeValue);
                    iconFilename = mode === 'light' ? lightIcons[index] : darkIcons[index];
                } else {
                    iconFilename = mode === 'light' ? lightIcons[0] : darkIcons[0];
                }
                const faviconURL = `${mode === 'light' ? lightIconPath : darkIconPath}${iconFilename}`;
                link.href = faviconURL;
            });
        }

        // Verifica a preferência do usuário
        let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setFavicon(prefersDarkMode ? 'dark' : 'light');

        // Adiciona um listener para mudanças na preferência de cores
        window.matchMedia('(prefers-color-scheme: dark)').addListener(event => {
            const newPrefersDarkMode = event.matches;
            setFavicon(newPrefersDarkMode ? 'dark' : 'light');
            prefersDarkMode = newPrefersDarkMode;
        });
        // fim função de alterar favicon light mode e dark mode do navegador

        // Troca o GIF animado por uma imagem estática após a reprodução inicial
        window.onload = () => {
            const logoGif = document.getElementById('logoGif');
            const staticImage = 'img/icone/logo_cia_animaturas_80px.png'; // Caminho para a versão estática da imagem

            setTimeout(() => {
                logoGif.src = staticImage;
            }, 3000); // Ajuste o tempo conforme a duração do seu GIF
        };
        