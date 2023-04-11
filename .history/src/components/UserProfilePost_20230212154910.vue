<template>
    <div class="card">
        <div class="card-body">
            <v-for>
                {{posts.content}}
            </v-for>
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