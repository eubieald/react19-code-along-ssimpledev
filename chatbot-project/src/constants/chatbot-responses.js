import { Chatbot } from "supersimpledev";

export function loadChatbotResponses() {
  Chatbot.addResponses({
    // Greetings
    Hello: "Hello! 👋",
    Hi: "Hi there!",
    Hey: "Hey! How can I help you?",

    // Identity
    "What is your name?": "I am a chatbot created by SuperSimpleDev.",
    "Who made you?": "I was created by SuperSimpleDev.",

    // Feelings
    "How are you?": "I'm just a bunch of code, but I'm doing great!",
    "I love you": "I love you too! ❤️",

    // Help
    "I need help": "I'm here to help you!",
    "Can you help me?": "Of course! What do you need help with?",

    // Fun
    "Tell me a joke":
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",

    // Goodbye
    Bye: "Goodbye! 👋",
    Goodbye: "Take care! 😊",
  });
}
