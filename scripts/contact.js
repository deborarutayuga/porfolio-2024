const scriptURL = 'https://script.google.com/macros/s/AKfycbwvUJoc53-tyipoiabkJTItiBUWq_HaYgAX4993uNv9zPj_0jIIBWWATyWFh5bDSnrm/exec'
        const form = document.forms['submit-to-google-sheet']
        //when click submit to show the message
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            // .then(response => console.log('Success!', response))
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                }, 2000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })