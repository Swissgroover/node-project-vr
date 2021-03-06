var socket = io();

const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const userList = document.getElementById('user-list');

messageInput.focus();

messageInput.addEventListener('keydown', event => {
    if (event.key == 'Enter' && messageInput.value.trim() !== '') {
        socket.emit('chat_message', messageInput.value);
        messageInput.value = '';
    }
});

socket.on('connection', playerId => {
    const item = document.createElement('li');
    item.textContent = 'User ' + userId + ' connected';
    chatMessages.appendChild(item);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on('updateUserList', userListObj => {
    userList.innerHTML = "";
    for (const userName in userListObj) {
        userList.innerHTML += `
        <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
            <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                <p>${ userName }</p>
            </div>
        </div>`;
    }
});

socket.on('chat_message', msgObj => {
    console.log(msgObj)
    const item = document.createElement('div');
    if (this.socket.id == msgObj.socketId) {
        item.innerHTML = `
        <div class="flex flex-row justify-end">
            <div class="messages text-sm text-white grid grid-flow-row gap-2">
                <div class="text-right text-gray-700">
                    <p>${ msgObj.user }</p>
                </div>
                <div class="flex items-center flex-row-reverse group">
                    <p class="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">${ msgObj.message }</p>
                </div>
            </div>
        </div>
    `
    } else {
        item.innerHTML = `
            <div class="flex flex-col justify-start">
            <p class="font-bold text-xs mb-1"></p>
                <div class="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                    <div>
                        <p>${ msgObj.user }</p>
                    </div>
                    <div class="flex items-center group">
                        <p class="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">${ msgObj.message }</p>
                    </div>
                </div>
            </div>
    `
    }
    chatMessages.appendChild(item);
});

document.getElementById('logout').onclick = function() {
    console.log('logout');
    location.href = '/logout';
};