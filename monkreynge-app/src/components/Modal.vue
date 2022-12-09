<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        Pas de header
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        Pas de body
                    </slot>
                </div>

                <div class="modal-footer">
                    <input type="button" class="cancel" value="Annuler" @click="$emit('close')">
                    <input type="button" class="valid" value="Valider" @click="$emit('save')">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    position: relative;
    width: 40%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: rgb(23, 23, 23);
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header {
    margin-top: 0;
    color: var(--main-col);
}

.modal-body {
    margin: 20px 0;
    padding: 20px 0 50px 0;
    color: white;
}

.modal-footer {
    position: absolute;
    margin: 10px 0;
    bottom: 0;
    right: 20px;
}

input[type="button"] {
    padding: 8px 10px;
    margin-right: 10px;
    border-radius: 10px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;

}

.cancel {
    border: 1px solid rgb(199, 83, 83);
    color: rgb(199, 83, 83);
    transform: scale(1);
    transition: transform 0.2s;
}
.cancel:hover {
    color: white;
    background-color: rgb(199, 83, 83);
    transform: scale(1.05);
    transition: transform 0.2s;
}

.valid {
    color: white;
    background-color: var(--main-col);
    border: 1px solid var(--main-col);
    
}
.valid:hover {

}
</style>