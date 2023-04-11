<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo :user="user"/>
                
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
            username: "hulu",
            followerCount: 0,
            is_follow: false,

        });

        return {
            user,
        }
    }

    
}
</script>

<style scoped>
</style>>
  