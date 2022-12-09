<script setup>
import Nav from '../components/Nav.vue';
import Conv from '../components/ConversationFriend.vue';
import Mess from '../components/ConversationMessageText.vue';
import Send from '../components/ConversationEnvoyer.vue';
import modal from '../components/Modal.vue';
import { ref, reactive } from 'vue';
const showModal = ref(false);
const conversations = reactive([
    {
        username: "Nicolat",
        selected: true,
        msgs: [
            {
                msg: "salut, ça va ?",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: true,
            },
            {
                msg: "Oui et toi ?",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: false,
            },
            {
                msg: "Très bien merci",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            },
            {
                msg: "Tu as bien réussi ta présentation d'ihm ?",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            },
            {
                msg: "Non...",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            },
            {
                msg: "Tqt tu vas te rattraper :)",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            }
        ]
    },
    {
        username: "Mêrinne",
        selected: false,
        msgs: [
            {
                msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            },
            {
                msg: "STOP",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            },
            {
                msg: "Le rapport ??",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: false,
            }
        ]
    },
    {
        username: "Dihmitry",
        selected: false,
        msgs: [
            {
                msg: "AGOUGOUGA",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            },
            {
                msg: "??",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            },
            {
                msg: "GOUGA",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            },
            {
                msg: "La fac t'as rendu zinzin",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            },
        ]
    },
    {
        username: "Nehreiss",
        selected: false,
        msgs: [
            {
                msg: "Installe Unity",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            },
            {
                msg: "Non.",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            }
        ]
    },
    {
        username: "Picx_38",
        selected: false,
        msgs: [
            {
                msg: "Salut c'est mon deuxième compte",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            },
            {
                msg: "Salut Nicolat",
                timestamps: "le 18/01/2022 à 16:16",
                ownMsg: true,
            }
        ]
    },
    {
        username: "Pharid",
        selected: false,
        msgs: [
            {
                msg: "Réel",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            }
        ]
    }
]);

const selectedUsername = ref("Nicolat");

function toggleSelect(username) {
    conversations.map(conv => conv.selected = false);
    conversations.find(conv => conv.username == username).selected = true;
    selectedUsername.value = username;
}

function getUserMsgs(username) {
    return conversations.find(conv => conv.username == username).msgs;
}

function friendNotNull() {
    if (friendAdded == '')
        return false;
    showModal.value = true;
}

function newConv(username) {
    showModal.value = false;
    conversations.push({
        username: username,
        selected: false,
        msgs: [
            {
                msg: "Salut !",
                timestamps: "le 18/01/2022 à 16:15",
                ownMsg: false,
            }
        ],
    });
    toggleSelect(username);
}

function sendMsgTo(username, msg) {
    if (msg == '') {
        return;
    }
    conversations.find(conv => conv.username == username).msgs.push(
        {
            msg: msg,
            timestamps: "le 18/01/2022 à 16:20",
            ownMsg: true,
        }
    );
    setIntervalLimited(function () {
        let elem = document.getElementById("messages");
        elem.scrollTop = elem.scrollHeight;
    }, 50, 1)
}


function setIntervalLimited(callback, interval, x) {
    for (var i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }
}

const friendAdded = ref('');
</script>

<template>
    <Nav />
    <div class="bordur"></div>
    <div class="convs">
        <div class="en-tete">
            <span>Conversations en cours</span>
        </div>
        <div v-for="conv in conversations" @click="toggleSelect(conv.username)">
            <Conv :username="conv.username" :class="{ selected: conv.selected }" />
        </div>
        <div class="add-friend">
            <input id="the-input" type="text" placeholder="Ajouter un ami" v-model="friendAdded">
            <input id="ok-btn" type="button" value="Ok" @click="friendNotNull">
        </div>
    </div>

    <div class="msgs" id="messages">
        <Mess v-for="msg in getUserMsgs(selectedUsername)" :msg="msg.msg" :timestamps="msg.timestamps"
            :ownMsg="msg.ownMsg" />
        <Send :send="sendMsgTo" :username="selectedUsername" />
    </div>
    <div class="bordur"></div>

    <transition name="modal">
        <modal v-if="showModal" @close="(showModal = false)" @save="newConv(friendAdded)">
            <template #header>
                <h3>Requête d'ami(e) envoyée</h3>
            </template>
            <template #body>
                <span>{{friendAdded}} a reçu votre requête !</span>
            </template>
        </modal>
    </transition>
</template>

<style scoped>
.add-friend {
    border-radius: 15px;
    margin: 10px;
    border: 3px solid rgb(255, 255, 255);
    padding: 10px;
}

#the-input {
    width: 250px;
    line-height: 40px;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}

#ok-btn {
    margin: 10px auto;
    margin-left: 5px;
    border: none;
    height: 50px;
    width: 80px;
    border-radius: 15px;
    font-size: 20px;
    color: var(--main-col);
    border: 1px solid var(--main-col);
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s;
}

#ok-btn:hover {
    background-color: var(--main-col);
    color: white;
    transform: scale(1.05);
    transition: transform 0.2s;
}

.msgs {
    float: left;
    width: 40%;
    height: calc(100vh - 160px);
    overflow-y: scroll;
    background-color: rgb(27, 27, 27);
}

.bordur {
    float: left;
    width: 20%;
    height: calc(100vh - 100px);
    background-color: rgb(72, 72, 72);
}

.convs {
    float: left;
    background-color: rgb(48, 48, 48);
    height: calc(100vh - 100px);
    width: 20%;
    overflow-y: auto;
}

.en-tete {
    background-color: rgb(45, 45, 45);
    color: white;
    text-align: center;
    padding: 30px 0;
    font-size: 30px;
}

.selected {
    background-color: var(--main-col) !important;
}
</style>