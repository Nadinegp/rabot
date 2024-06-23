// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

inputForm.addEventListener('submit', async function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Set the value to "video"
  var valueToSend = "video";

  // Make an HTTP POST request to the server
  fetch('/send-value', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ value: valueToSend }) // Send the value "video"
  })
  .then(video => {
    if (video.ok) {
      console.log('Value sent successfully!');
    } else {
      console.error('Failed to send value');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  try {
    // Generate chatbot video
    const video = await getValue();

    // Add chatbot video to conversation
    message = document.createElement('div');
    message.classList.add('chatbot-message','chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${video}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({behavior: "smooth"});
  } catch (error) {
    console.error('Error:', error);
    // Handle the error as needed
  }
});

async function getValue() {
  try {
    const variableValue = await getVariableFromPython();
    console.log("Variable value:", variableValue);
    return variableValue;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to be caught by the event listener
  }
}

function getVariableFromPython() {
    return fetch('/get-variable')
        .then(video => {
            if (!video.ok) {
                throw new Error('Network video was not ok');
            }
            return video.json();
        })
        .then(data => {
            return data.value;
        })
        .catch(error => {
            console.error('Error:', error);
            return ''; // Return an empty string or handle the error as needed
        });
}

async function getValue() {
  try {
    const variableValue = await getVariableFromPython();
    console.log("Variable value:", variableValue);
    return variableValue; // Return the variable value
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to be caught by the event listener
  }
}
