<template> 
<div class="card edit-field">
    <div class="card-body">
        <div class="mb-3">
            <label for="edit-post" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
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
.edit-field {
    margin-top: 10px;
}
</style>