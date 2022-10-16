const deleteBtn = document.querySelector(
  "body > div > div.button-container > a.delete"
);

deleteBtn.addEventListener("click", (e) => {
  fetch(`/blogs/${deleteBtn.dataset.doc}`, { method: "DELETE" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      window.location.href = data.redirects;
    })
    .catch((error) => {
      console.log(error);
    });
});
