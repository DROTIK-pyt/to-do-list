<template>
    <div id="change-task">
        <h3 class="title">{{ title }}</h3>
        <button class="close-form" @click="closeForm">X</button>
        <form @submit.prevent="changeTask" action>
            <input type="text" v-model="name">
            <input type="number" v-model="order">
            <textarea cols="45" rows="8" v-model="discr"></textarea>
            <button type="submit">{{ btnChange }}</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ChangeTask',
    props: [ 'task', 'keyTask' ],
    data() {
        return {
            title: 'Изменить задание',
            btnChange: 'Изменить',
            name: this.task[0].name,
            order: this.task[0].order,
            oldName: this.task[0].name,
            oldOrder: this.task[0].order,
            discr: this.task[0].discr,

            posX: '',
            posY: ''
        }   
    },
    methods: {
        ...mapActions([ 'updateTasks' ]),
        changeTask() {
            let changedTask = {
                name: this.name,
                order: this.order,
                discr: this.discr,
                fixed: false
            }

            let tasks = this.$store.state.otherTask[this.keyTask]
            
            tasks.forEach(t => {
                if(t.order == this.oldOrder) {
                    t.order = changedTask.order
                    t.name = changedTask.name
                    t.discr = changedTask.discr
                }
            })

            let o = {}
            o[this.keyTask] = tasks
        },
        closeForm() {
            this.name = '',
            this.order = ''

            this.$emit('closeForm', false)
        },
    }
}
</script>

<style lang="less" scoped>
#change-task {
    width: 380px;
    height: 300px;
    background-color: rgb(104, 104, 104);
    color: #fff;
    padding: 20px 10px 10px 10px;
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);

    .title {
        color: #fff;
        margin: 0;
        padding: 0 0 10px 0;
        width: 100%;
    }

    button.close-form {
        position: absolute;
        top: 12px;
        right: 12px;
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        font-size: .8rem;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    form {
        margin: 0;
        padding: 0;

        input {
            margin-bottom: 5px;
            padding: 5px;
            display: block;
            width: 90%;
        }

        button {
            display: block;
            padding: 5px;
            cursor: pointer;
        }
    }
}
</style>
