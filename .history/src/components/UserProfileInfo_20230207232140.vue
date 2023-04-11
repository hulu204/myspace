
<template>
    <div class="row">
        <div class="col-3">
            <img src="https://cdn.acwing.com/media/user/profile/photo/151659_lg_8e80e6fa73.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-9">
            <div class="username">Hulu</div>
            <div class="fans">粉丝数:123</div>  
            <button type="button" class="btn btn-primary btn-small">关注</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'UserProfileInfo',
    components: {
        
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}
</style>