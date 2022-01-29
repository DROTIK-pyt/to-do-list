import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    otherTask: {
      Tasks: [
        {
          name: 'Task1',
          order: 1,
          discr: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime nihil suscipit amet ipsum, consequatur inventore impedit omnis ducimus eligendi, nemo repellat quam ipsam cupiditate molestias hic doloremque, animi reiciendis.
          Impedit voluptatem molestias totam veritatis cum sit voluptates quia voluptate cumque repellendus iste suscipit, eveniet rem aspernatur perspiciatis corrupti assumenda nisi ab nulla consequuntur dolor fugiat porro quidem! Nulla, labore.`,
          fixed: false
        },
        {
          name: 'Task2',
          order: 2,
          discr: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime nihil suscipit amet ipsum, consequatur inventore impedit omnis ducimus eligendi, nemo repellat quam ipsam cupiditate molestias hic doloremque, animi reiciendis.
          Impedit voluptatem molestias totam veritatis cum sit voluptates quia voluptate cumque repellendus iste suscipit, eveniet rem aspernatur perspiciatis corrupti assumenda nisi ab nulla consequuntur dolor fugiat porro quidem! Nulla, labore.`,
          fixed: false
        },
        {
          name: 'Task3',
          order: 3,
          discr: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime nihil suscipit amet ipsum, consequatur inventore impedit omnis ducimus eligendi, nemo repellat quam ipsam cupiditate molestias hic doloremque, animi reiciendis.
          Impedit voluptatem molestias totam veritatis cum sit voluptates quia voluptate cumque repellendus iste suscipit, eveniet rem aspernatur perspiciatis corrupti assumenda nisi ab nulla consequuntur dolor fugiat porro quidem! Nulla, labore.`,
          fixed: false
        },
        {
          name: 'Task4',
          order: 4,
          discr: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime nihil suscipit amet ipsum, consequatur inventore impedit omnis ducimus eligendi, nemo repellat quam ipsam cupiditate molestias hic doloremque, animi reiciendis.
          Impedit voluptatem molestias totam veritatis cum sit voluptates quia voluptate cumque repellendus iste suscipit, eveniet rem aspernatur perspiciatis corrupti assumenda nisi ab nulla consequuntur dolor fugiat porro quidem! Nulla, labore.`,
          fixed: false
        },
        {
          name: 'Task5',
          order: 5,
          discr: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime nihil suscipit amet ipsum, consequatur inventore impedit omnis ducimus eligendi, nemo repellat quam ipsam cupiditate molestias hic doloremque, animi reiciendis.
          Impedit voluptatem molestias totam veritatis cum sit voluptates quia voluptate cumque repellendus iste suscipit, eveniet rem aspernatur perspiciatis corrupti assumenda nisi ab nulla consequuntur dolor fugiat porro quidem! Nulla, labore.`,
          fixed: false
        },
      ],
      Tasks2: [],
      Tasks3: [],
      Tasks4: [],
      Tasks5: [],
      Tasks6: [],
    },
    flag: true
  },
  mutations: {
    addTask(state, newTask) {
      if(newTask.name.length && newTask.order.length)
        Vue.set(state.otherTask.Tasks, state.otherTask.Tasks.length, newTask)
    },
    updateTasks(state, data) {
      if(state.flag) {
        let k = Object.keys(data).pop()
        
        if(data[k].length == 1)  {
          data[k].forEach(task => {
            state.otherTask[k].push(task)
          })
        } else {
          state.otherTask[k] = []

          data[k].forEach(task => {
            state.otherTask[k].push(task)
          })
        }

        state.flag = false
      } else {
        let k = Object.keys(data).pop()

        state.otherTask[k] = data[k]
        state.flag = true
      }
    }
  },
  actions: {
    addTask({commit}, newTask) {
      commit('addTask', newTask)
    },
    updateTasks({commit}, Task) {
      commit('updateTasks', Task)
    }
  },
  getters: {
    
  },
  modules: {
  }
})
