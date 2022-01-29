<template>
    <div id="addTask">
        <button @click="showed = true" v-if="!showed">+</button>
        <form class="addTask-form" action @submit.prevent="addTask({name, order})" v-if="showed">
            <button @click="showed = false" class="close-form">X</button>
            <h4>Добавить Task</h4>
            <input type="text" v-model="name">
            <input type="number" v-model="order">
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddTask',
    data() {
        return {
            name: '',
            order: '',
            showed: false,
        }
    },
    methods: {
        ...mapActions([ 'addTask' ]),
    },
}
</script>

<style lang="less" scoped>
button:not([type=submit]) {
    border-radius: 50%;
    padding: 1px 4px;
    border: 1px solid;
    cursor: pointer;
    flex-grow: 0;
    margin: 5px;
    
    &:hover {
        background-color: rgb(0, 238, 255);
    }
}

.addTask-form {
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    padding: 5px 5px 5px 5px;
    margin: 10px 0;
    position: relative;

    input {
        margin: 5px 2px;
    }

    .close-form {
        position: absolute;
        top: 5px;
        right: 9px;
        border-radius: 50%;
        font-weight: 600;
        padding: 3px;
        background-color: transparent;
    }

    h4 {
        padding: 0 0 0 5px;
        margin: 10px 0;
        text-align: left;
    }
}
</style>