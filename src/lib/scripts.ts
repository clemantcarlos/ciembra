export const submitHandler = (e:any) =>{
  e.preventDefault()
  console.log(e)

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
  .then( async response => {
    console.log(response)
    await response.json()
  })
  .catch(error => { console.log(error) })
  .finally(() => { form.reset() });
}

export const mobileSubmitHandler = (e:any) =>{
  console.log(e)
} 