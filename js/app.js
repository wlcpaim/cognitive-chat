const app = document.getElementById('app');
const messagesContainer = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

let messages = [
  { sender: 'bot', text: 'Olá! Como posso ajudar você hoje?' }
];

function renderMessages() {
  messagesContainer.innerHTML = messages
    .map(m => `<div class="message ${m.sender}">${m.text}</div>`)
    .join('');
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;

  messages.push({ sender: 'user', text });
  messageInput.value = '';
  renderMessages();

  setTimeout(() => {
    messages.push({ sender: 'bot', text: 'Recebido: ' + text });
    renderMessages();
  }, 500);
});

renderMessages();
