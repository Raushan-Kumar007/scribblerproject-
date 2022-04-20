var titleEle = document.getElementById("postTitle");
var contentEle = document.getElementById("postContent");
var authorEle = document.getElementById("author");
var likeNo = 0;

window.onload = function() {
  titleEle.innerHTML = sessionStorage.getItem("postTitle");
  contentEle.innerHTML = sessionStorage.getItem("postContent");
  authorEle.innerHTML = sessionStorage.getItem("author");
};


document.addEventListener(
  "click",
  function(e) {
    if (hasClass(e.target, "saved")) {
      // edit button clicked
      e.target.classList.remove("saved");
      e.target.classList.add("unsaved");
      e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
      titleEle.setAttribute("contenteditable", true);
      titleEle.classList.add("editable");
      contentEle.setAttribute("contenteditable", true);
      contentEle.classList.add("editable");
    } else if (hasClass(e.target, "unsaved")) {
      // save button clicked
      e.target.classList.remove("unsaved");
      e.target.classList.add("saved");
      e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
      titleEle.setAttribute("contenteditable", false);
      titleEle.classList.remove("editable");
      contentEle.setAttribute("contenteditable", false);
      contentEle.classList.remove("editable");
      // Updating Session storage on Save to reflect correct data if only this page is refreshed
      sessionStorage.setItem("postTitle", titleEle.innerText);
      sessionStorage.setItem("postContent", contentEle.innerText);
    } else if (hasClass(e.target, "like-button")) {
      // Like Button Clicked
      likeNo++;
      e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
      if (likeNo == 1) {
        document.getElementById("likeText").innerHTML = "1 person likes this!";
      } else if (likeNo > 1) {
        document.getElementById("likeText").innerHTML =
          likeNo + " people like this!";
      }
    } else if (hasClass(e.target, "comment-button")) {
      // Comment Button Clicked
      var commentText = document.getElementById("commentBox").value.trim();
      if (commentText !== "") {
        // Logic to post latest comment at the top
        document.getElementById("comments-wrapper").innerHTML =
          "<p>" +
          commentText +
          "</p>" +
          document.getElementById("comments-wrapper").innerHTML;
      }
      // Emptying the value after adding the comment to All comments section
      document.getElementById("commentBox").value = "";
    }
  },
  false
);


function hasClass(elem, className) {
    return elem.classList.contains(className);
  }