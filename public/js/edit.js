const editForm = document.querySelector("body > div > form");

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const formDataObj = {};
  data.forEach((value, key) => (formDataObj[key] = value));
  fetch(`/blogs/${editForm.dataset.doc}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObj),
  })
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
