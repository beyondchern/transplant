function submit() {
  fetch("/submission", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(submission),
  });
  console.log(submission);
}
