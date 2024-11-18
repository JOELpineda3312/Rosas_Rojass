onload = () =>{
    document.body.classList.remove("container");
};
function playAudioAndRedirect() {
    const audio = document.getElementById('background-audio');
    
    // Reproducir el audio
    audio.play().then(() => {
        // Si el audio se reproduce con éxito, redirigir a flower.html después de 3 segundos
        setTimeout(() => {
            window.location.href = 'flower.html';
        }, 3000);  // Cambiar el valor si necesitas más o menos tiempo antes de redirigir
    }).catch((error) => {
        // Si hubo un problema con la reproducción del audio
        console.error("Error al reproducir el audio:", error);
    });
}

        // Función que redirige a flower.html
        function redirectToFlowerPage() {
            window.location.href = 'flower.html'; // Redirige a flower.html
        }
  