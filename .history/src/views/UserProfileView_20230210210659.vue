<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user"/>
                
            </div>
            <div class="col-9">
                <UserProfilePost/>
            </div>
        </div>
    </ContentBase>

    

</template>

<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue"
import UserProfilePost from "../components/UserProfilePost.vue"
import { reactive  } from "vue";

export default {
    name: 'UserProfile',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePost,
    },
    setup() {
        const user = reactive ({
            id: 1,
            username: "licongyan",
            secondname: "Li",
            firstname: "Congyan",
            followerCount: 0,
            is_follow: true,

        });

        const follow = () => {

        };

        const unfollow = () => {

        };

        return {
            user,
            follow,
            unfollow,
        }
    }

    
}
</script>

<style scoped>
</style>>
  