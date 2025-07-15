const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

async function getMessageById(id) {
  return messages.find(message => message.id === id);
}

module.exports = {
  messages,
  getMessageById
};

