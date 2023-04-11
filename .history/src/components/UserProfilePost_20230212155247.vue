<template>
    <div class="card">
        <div class="card-body">
            <div v-for="post in posts" :key="post">
                <div class="card">
                    <div class="card-body">
                        {{post.content}}
                    </div>
                </div>
                
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