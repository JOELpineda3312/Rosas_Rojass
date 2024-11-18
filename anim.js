        // Función para reproducir el audio
        const playAudio = () => {
            const audio = document.getElementById('background-audio');
            audio.play().catch((error) => {
                console.error("Error al intentar reproducir el audio:", error);
            });
        };