// Get chatbot elements
const chatbot = document.getElementById('chatbotv');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

inputForm.addEventListener('submit', async function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;


  /* to send the value because its the only way */
// Capture the value you want to send
var valueToSend = "Hello from JavaScript!";

// Make an HTTP POST request to the server
fetch('/send-value', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ value: input })
})
.then(response => {
  if (response.ok) {
    console.log('Value sent successfully!');
  } else {
    console.error('Failed to send value');
  }
})
.catch(error => {
  console.error('Error:', error);
});
/********************************************************/
/* so far we have recieved a value from user .. this will be used later because we need it in the model for further use
>> now lets head to the important part which is the video display

*/


  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);


/* here is where we start >> this area is suppose to get the value from the python which in the first case is a string but here in this case is a video 
>> so where suppose to get the video and display it in the html*/

  
  try {
    // Generate chatbot response
   // const response = await getVariableFromPython();

    // Add chatbot response to conversation
    message = document.createElement('div');
    message.classList.add('chatbot-message','chatbotv');
    message.innerHTML = `<video controls>
            <source src="/video" type="video/mp4">
            Your browser does not support the video tag.
        </video>`;
   // message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({behavior: "smooth"});
  } catch (error) {
    console.error('Error:', error);
    // Handle the error as needed
  }
});








