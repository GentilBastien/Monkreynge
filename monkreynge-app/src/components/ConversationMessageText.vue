<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    },
    timestamps: {
        type: String,
        required: true
    },
    ownMsg: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <div class="bloc-msg">
        <div :style="{ float: ownMsg ? 'right' : 'left' }">
            <div class="bloc-msg-content" :style="{ backgroundColor: ownMsg ? '#D9D9D9' : '#b3aaaa' }">
                <span>{{ msg }}</span>
            </div>
            <span class="timestamp">{{ timestamps }}</span>
        </div>
    </div>
</template>

<style scoped>
.bloc-msg {
    width: 100%;
    margin: 5px 0;
    float: right;
}
.bloc-msg-content {
    width: fit-content;
    max-width: 300px;
    padding: 15px;
    margin: 10px;
    border-radius: 15px;
}

.bloc-msg-content span {
    font-size: 20px;
}

.timestamp {
    color: rgb(197, 197, 197);
    margin: 0 15px;
}
</style>
