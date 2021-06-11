function submit() {
  fetch("http://beyondchern.eu.pythonanywhere.com/submit", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(submission),
  }).then(() => {
    console.log(submission);
    location.reload();
  });
}
