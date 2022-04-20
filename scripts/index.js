var createPostBtn = document.getElementById("createPostBtn");

var closeCreatePost = document.getElementById("createPost-close");

var createPostModal = document.getElementById("createPost");


closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

createPostBtn.addEventListener("click", () => openModal(createPostModal));

window.addEventListener("click", function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
});