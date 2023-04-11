
<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img src="https://cdn.acwing.com/media/user/profile/photo/151659_lg_8e80e6fa73.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{fullname}}</div>
                    <div class="fans">粉丝数:{{user.followerCount}}</div>  
                    <button v-if="!user.is_follow" type="button" class="btn btn-secondary btn-small">关注</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {computed} from 'vue';

export default {
    name : 'UserProfileInfo',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        let fullname = computed(() => props.user.firstname + ' ' + props.user.secondname);

        return {
            fullname
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}


.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>