<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo/>
                
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

export default {
    name: 'UserProfile',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePost,
    }
}
</script>

<style scoped>
</style>>
  