RABOT

This project involves creating an interactive system that allows users to interact with monuments based on their location using an advanced model that integrates various technologies such as natural language processing (NLP), machine learning, and speech synthesis.

Overview
The system allows users to query information about monuments. It uses the user's geographical coordinates to identify nearby monuments, fetches data using various APIs and models, and generates interactive, audio-visual responses that sync speech with animations. This system combines GPT-4, Google Maps API, Wav2Lip, and other technologies to offer a smooth and engaging user experience.

Flow of Interaction
Monument Identification:

The system first determines the monument the user wants to interact with.
The user's coordinates are requested to identify the nearby monument.
Location Identification:

The coordinates are sent to the web server, which utilizes the Google Maps API to identify the name of the user's location.
Contextual Query Generation:

The location name is passed into a monument detection model, which generates a text query for the chatbot based on the detected monument.
Context Infusion:

The chatbot query is processed by a context infusion function, which incorporates data from the user’s historical interactions (stored in the user database). This allows the system to tailor responses based on past conversations.
GPT-4 Chatbot Interaction:

After context infusion, the generated query is sent to a GPT-4 chatbot, which provides the response to the user’s query.
Speech Synthesis:

The GPT-4 chatbot's text response is converted to speech using a Text2Speech model.
Lip-Sync Animation:

An image of the identified monument is fetched, and Wav2Lip is used to synchronize the audio response with a realistic lip movement on the image of the monument, providing an interactive talking experience.
User Data Tokenization:

The system waits for a new reply from the user. The new input is tokenized and stored in a vector database, which represents the user’s data for future interactions.
Technologies Used
Google Maps API: For geolocation and identifying the user's location.
Llama2: For natural language understanding and response generation.
Text2Speech Model: For converting the chatbot's text responses into speech.
RaBot: For synchronizing speech with lip movements on the image of the monument.
Context Infusion: For personalizing responses based on the user's past interactions.
Vector Database: For storing and managing user-specific data to improve query relevance.


Screenshots of the project

![image](https://github.com/user-attachments/assets/c2ef156e-820b-4f58-afc8-26ad4224bcde)

Whole Pojrcte recorded:
https://drive.google.com/file/d/1CnZ3_uBV9-0PVKVbUymtCfod6BwKEom2/view?t=2
