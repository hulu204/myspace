<template>
    <div class="card">
        <div class="card-body">
            <div v-for="post in posts">
                {{post.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"UserProfilePost",
    props: {
        posts: {
            type: Object,
            required:true,
        }
    }
}
</script>

<style scoped>

</style>