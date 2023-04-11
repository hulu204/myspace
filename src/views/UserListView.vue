<template>
    <ContentBase>
        <div class="card" v-for = "user in users" :key="user.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
                        <img :src="user.photo" alt =""/>
                    </div>
                    <div class="col-11"></div>
                </div>
            </div>
        </div>
    </ContentBase>

</template>

<script>
import ContentBase from "../components/ContentBase.vue";
import $ from 'jquery';
import {ref} from 'vue';

export default {
    name: 'UserList',
    components: {
        ContentBase,
    },
    setup() {
        let users = ref([]);

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: 'get',
            success(resp) {
                users.value = resp;

            }
        })
    }
}
</script>

<style scoped>
</style>>
  
