<template>
    <ContentBase>
        <div class="container text-center">
            <div class="row">
                <div class="col-3">
                用户信息
                </div>
                <div class="col-9">
                帖子信息
                </div>
            </div>
        </div>
    </ContentBase>

    <UserProfileInfo></UserProfileInfo>

</template>

<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue"

export default {
    name: 'UserProfile',
    components: {
        ContentBase,
        UserProfileInfo,
    }
}
</script>

<style scoped>
</style>>
  