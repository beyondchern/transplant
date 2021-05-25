getData();
async function getData() {
  const response = await fetch("/getdata");
  const contributions = await response.json();
  console.log("data:");
  console.log(contributions);
}
