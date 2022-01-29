<template>
    <div class="root-menues">
        <ul :class="classMenu">
            <li :class="item.class" v-for="item in list" :key="item.text">
                <router-link :to="item.href">{{ item.text }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: [ 'list', 'classMenu' ],
    data() {
        return {
        }
    },
}
</script>

<style lang="less" scoped>
ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0 15px;

    li:not(:last-child) {
        margin-right: 10px;
    }

    li a {
        padding: 5px 10px;
        background-color: #ccc;
        color: #000;
        border-radius: 8px;
        text-decoration: none;
        transition: all .22s ease;

        &:hover {
            background-color: transparent;
            color: red;
        }

        &.router-link-exact-active.router-link-active {
            background-color: rgb(64, 67, 255);
            color: #fff;
        }
    }
}
</style>