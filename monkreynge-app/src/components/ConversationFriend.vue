<script setup>
defineProps({
    username: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="friendList">
        <img src="./icons/user.png" alt="userPP" />
        <span>{{ username }}</span>
    </div>
</template>

<style scoped>
.friendList {
    border-radius: 15px;
    margin: 10px;
    border: 1px solid rgba(0, 0, 0, 0);
    transform: scale(1);
    transition: transform .2s;
    padding: 10px;
    cursor: pointer;
}

.friendList:hover {
    transform: scale(1.02);
    transition: transform .2s;
    background-color: rgb(45, 45, 45);
    border: 1px solid whitesmoke;
}

.friendList span {
    color: white;
    font-weight: bold;
    font-size: 22px;
    margin-left: 20px;
}

img {
    width: 60px;
    border: 3px solid white;
    border-radius: 30px;
    vertical-align: middle;
    padding: 5px;
}
</style>