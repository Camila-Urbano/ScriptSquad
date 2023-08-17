/********************************************* FILTRAR POR CATEGORIA *********************************************/

// Obtener los elementos de categoría
const categorias = document.querySelectorAll('.cate');

// Obtener los elementos de post
const posts = document.querySelectorAll('.post_card');

 // Agregar el evento click a cada categoría
 categorias.forEach(categoria => 
{
     categoria.addEventListener('click', () => 
    {
        // Remover la clase "activo" de todas las categorías
        categorias.forEach(c => c.classList.remove('activo'));

        // Agregar la clase "activo" a la categoría seleccionada
        categoria.classList.add('activo');

        // Obtener el ID de la categoría seleccionada
        const categoriaId = categoria.id.split('-')[1];

        // Mostrar u ocultar los posts según la categoría seleccionada
        posts.forEach(post => 
        {
            const categoriaPost = post.querySelector('.category').textContent;
            if (categoriaId === 'Todos' || categoriaPost === categoriaId) 
            {
                post.style.display = 'block';
            }
            else 
            {
                post.style.display = 'none';
            }
        });
});
});