<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user"/>
                
            </div>
            <div class="col-9">
                <UserProfilePost :posts="posts"/>
            </div>
        </div>
    </ContentBase>

    

</template>

<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue"
import UserProfilePost from "../components/UserProfilePost.vue"
import UserProfileWrite from "../components/UserProfileWrite.vue"
import { reactive  } from "vue";

export default {
    name: 'UserProfile',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePost,
        UserProfileWrite,
    },
    setup() {
        const user = reactive ({
            id: 1,
            username: "licongyan",
            secondname: "Li",
            firstname: "Congyan",
            followerCount: 0,
            is_follow: false,

        });

        const posts = reactive ({
            count: 3,
            posts:[
                {
                    id:1,
                    userId:1,
                    content:"今天写了代码我真TM开心",
                },
                {
                    id:2,
                    userId:1,
                    content:"今天还要写5道算法题,我TM更开心了",
                },
                {
                    id:3,
                    userId:1,
                    content:"只能加油了",
                },
            ]
        });

        const follow = () => {
            if(user.is_follow) return;
            user.is_follow = true;
            user.followerCount++;
        };

        const unfollow = () => {
            if(!user.is_follow) return;
            user.is_follow = false;
            user.followerCount--;
        };

        return {
            user,
            follow,
            unfollow,
            posts,
        }
    }

    
}
</script>

<style scoped>
</style>>
  