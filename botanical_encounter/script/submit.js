function submit() {
  fetch("/submition", {
    method: "POST",
    header: { "Content-type": "application/json" },
    body: JSON.stringify(submition),
  });
}
