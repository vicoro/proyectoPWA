let main;
let modalPost;
let addPost;
let btnShowPost;
let btnCancelPost;

// cuando se carge todo nuestro DOM
window.addEventListener('load', () => {
    main = document.querySelector('#main');
    modalPost = document.getElementById('modal-post-section');
    addPost = document.getElementById('btn-upload-post');
    btnShowPost = document.getElementById('btn-post-submit');
    btnCancelPost = document.getElementById('btn-post-cancel');
    addPost.addEventListener('click',ShowPostModal);
    btnCancelPost.addEventListener('click',ClosePostModal);
});

// Funciones
const ShowPostModal = () => {
    main.style.display = 'none';
    modalPost.style.display = 'block';
    setTimeout(()=>{
        modalPost.style.transform = 'translateY(0)';1
    },1);
}
const ClosePostModal = () => {
    main.style.display = 'block';
    modalPost.style.transform = ' translateY(100vh)';
    
}