function submit() {
  fetch("/submission", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(submission),
  }).then(() => {
    console.log(submission);
    location.reload();
  });
}
