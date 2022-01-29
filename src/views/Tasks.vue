<template>
  <div class="home">
    <h2>Задачи</h2>
    <div id="tasks-groups">
        <div class="task-group-wrap group1">
            <h3>Принятие задания</h3>
            <draggable class="task-group" v-model="Tasks" group="Tasks" @start="drag=true" @end="drag=false">
                <div v-for="element in Tasks" :key="element.order">
                    <div class="wrap">
                        <div class="title">
                            <h4>{{ element.name }}</h4>
                            <button @click="changeTask({
                                name: element.name,
                                order: element.order,
                                discr: element.discr,
                                fixed: false
                            }, 'Tasks')">Изменить</button> 
                            <button @click="removeTask({
                                order: element.order,
                                keyTask: 'Tasks'
                            })">Удалить</button>
                        </div>
                        <span>{{ element.order }}</span>
                    </div>
                </div>
            </draggable>
            <AddTask/>
        </div>
        <div class="task-group-wrap group2">
            <h3>Обсуждение и составление тз</h3>
            <draggable class="task-group" v-model="Tasks2" group="Tasks" @start="drag=true" @end="drag=false">
                <div v-for="element in Tasks2" :key="element.order">
                   <div class="wrap">
                        <div class="title">
                            <h4>{{ element.name }}</h4>
                            <button @click="changeTask({
                                name: element.name,
                                order: element.order,
                                discr: element.discr,
                                fixed: false
                            }, 'Tasks2')">Изменить</button> 
                            <button @click="removeTask({
                                order: element.order,
                                keyTask: 'Tasks2'
                            })">Удалить</button>
                        </div>
                        <span>{{ element.order }}</span>
                    </div>
                </div>
            </draggable>
        </div>
        <div class="task-group-wrap group3">
            <h3>Разработка</h3>
            <draggable class="task-group" v-model="Tasks3" group="Tasks" @start="drag=true" @end="drag=false">
                <div v-for="element in Tasks3" :key="element.order">
                   <div class="wrap">
                        <div class="title">
                            <h4>{{ element.name }}</h4>
                            <button @click="changeTask({
                                name: element.name,
                                order: element.order,
                                discr: element.discr,
                                fixed: false
                            }, 'Tasks3')">Изменить</button> 
                            <button @click="removeTask({
                                order: element.order,
                                keyTask: 'Tasks3'
                            })">Удалить</button>
                        </div>
                        <span>{{ element.order }}</span>
                    </div>
                </div>
            </draggable>
        </div>
        <div class="task-group-wrap group4">
            <h3>Тестирование</h3>
            <draggable class="task-group" v-model="Tasks4" group="Tasks" @start="drag=true" @end="drag=false">
                <div v-for="element in Tasks4" :key="element.order">
                   <div class="wrap">
                        <div class="title">
                            <h4>{{ element.name }}</h4>
                            <button @click="changeTask({
                                name: element.name,
                                order: element.order,
                                discr: element.discr,
                                fixed: false
                            }, 'Tasks4')">Изменить</button> 
                            <button @click="removeTask({
                                order: element.order,
                                keyTask: 'Tasks4'
                            })">Удалить</button>
                        </div>
                        <span>{{ element.order }}</span>
                    </div>
                </div>
            </draggable>
        </div>
        <div class="task-group-wrap group5">
            <h3>Передача задания</h3>
            <draggable class="task-group" v-model="Tasks5" group="Tasks" @start="drag=true" @end="drag=false">
                <div v-for="element in Tasks5" :key="element.order">
                   <div class="wrap">
                        <div class="title">
                            <h4>{{ element.name }}</h4>
                            <button @click="changeTask({
                                name: element.name,
                                order: element.order,
                                discr: element.discr,
                                fixed: false
                            }, 'Tasks5')">Изменить</button> 
                            <button @click="removeTask({
                                order: element.order,
                                keyTask: 'Tasks5'
                            })">Удалить</button>
                        </div>
                        <span>{{ element.order }}</span>
                    </div>
                </div>
            </draggable>
        </div>
        <div class="task-group-wrap group6">
            <h3>Закрытые задание</h3>
            <draggable class="task-group" v-model="Tasks6" group="Tasks" @start="drag=true" @end="drag=false">
                <div v-for="element in Tasks6" :key="element.order">
                   <div class="wrap">
                        <div class="title">
                            <h4>{{ element.name }}</h4>
                            <button @click="removeTask({
                                order: element.order,
                                keyTask: 'Tasks6'
                            })">Удалить</button>
                        </div>
                        <span>{{ element.order }}</span>
                    </div>
                </div>
            </draggable>
        </div>
    </div>
    <ChangeTask :key="reRender" :task="taskChange" :keyTask="keyTask" v-if="showChangeTask" @closeForm="closeForm"/>
    <div id="overlay" :class="{ show: showOverlay }"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import draggable from 'vuedraggable'
import AddTask from '../components/AddTask'
import ChangeTask from '../components/ChangeTask'

export default {
    name: 'Tasks',
    data() {
        return {
            taskChange: {},
            keyTask: '',
            showChangeTask: false,
            reRender: 0,
            showOverlay: false
        }
    },
    components: {
        draggable, AddTask, ChangeTask
    },
    methods: {

        changeTask(task, keyTask) {
            this.showOverlay = true

            if (!this.taskChange) {
                Vue.set(this.taskChange, 0, task)
                this.keyTask = keyTask
                this.showChangeTask = true
            } else {
                Vue.set(this.taskChange, 0, task)
                this.keyTask = keyTask
                this.showChangeTask = true

                this.reRender++
            }
        },
        closeForm(showChangeTask) {
            this.showChangeTask = showChangeTask
            this.showOverlay = false
        },
        removeTask(task) {
            if(confirm('Delete?')) {
                this.$store.state.otherTask[task.keyTask] = 
                this.$store.state.otherTask[task.keyTask].filter(t => t.order != task.order)
            }
        }
    },
    computed: {
        Tasks: {
            get() {
                return this.$store.state.otherTask.Tasks
            },
            set(task) {
                this.$store.commit('updateTasks', {Tasks: task})
            }
        },
        Tasks2: {
            get() {
                return this.$store.state.otherTask.Tasks2
            },
            set(task) {
                this.$store.commit('updateTasks', {Tasks2: task})
            }
        },
        Tasks3: {
            get() {
                return this.$store.state.otherTask.Tasks3
            },
            set(task) {
                this.$store.commit('updateTasks', {Tasks3: task})
            }
        },
        Tasks4: {
            get() {
                return this.$store.state.otherTask.Tasks4
            },
            set(task) {
                this.$store.commit('updateTasks', {Tasks4: task})
            }
        },
        Tasks5: {
            get() {
                return this.$store.state.otherTask.Tasks5
            },
            set(task) {
                this.$store.commit('updateTasks', {Tasks5: task})
            }
        },
        Tasks6: {
            get() {
                return this.$store.state.otherTask.Tasks6
            },
            set(task) {
                this.$store.commit('updateTasks', {Tasks6: task})
            }
        }
    },
}
</script>

<style lang="less" scoped>
h4 {
    margin: 0 0 4px 0;
    text-align: left;
}
#overlay {
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(0, 0, 0);
    opacity: .5;
    visibility: hidden;
    z-index: -100;

    .show {
        visibility: visible;
        z-index: 10;
    }
}
.title {
    button {
        visibility: hidden;
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;

        &:last-child {
            margin-left: 4px;
        }
    }
}
#tasks-groups {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.group1 .wrap {
    background-color: #ccc;
}
.group2 .wrap {
    background-color: rgb(217, 255, 0);
}
.group3 .wrap {
    background-color: rgb(25, 0, 255);
    color: #fff;
    .title button {
        color: #fff;
    }
}
.group4 .wrap {
    background-color: rgb(255, 0, 212);
    color: #fff;
    .title button {
        color: #fff;
    }
}
.group5 .wrap {
    background-color: rgb(0, 255, 242);
}
.group6 .wrap {
    background-color: rgb(21, 255, 0);
}
.wrap {
    width: 10%;
    min-width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    margin: 5px;


    &:active,
    &:hover {
        cursor: move !important;

        .title {
            button {
                visibility: visible;
            }
        }
    }
}

.task-group-wrap {
    border: 1px solid rgb(87, 87, 87);
    min-height: 100px;
    margin: 15px 0;
    min-width: 250px;
    padding: 10px;
}
.task-group {
    border: 1px solid #ccc;
    min-height: 40px;
}
</style>