<template> 
<div class="card edit-field">
    <div class="card-body">
        <!-- <div class="col-3">
            <button key="发帖"></button>
        </div> -->
    </div>
</div>
</template>

<script>
export default {
    name:"UserProfileWrite",
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