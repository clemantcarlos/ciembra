export const submitHandler = (e:any) =>{
  const form = e.target
  const formData = new FormData(form)
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => await response.json())
  .catch(error => { console.log(error) })
  .then(() => { form.reset() });
}