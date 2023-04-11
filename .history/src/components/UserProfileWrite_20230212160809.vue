<template> 
<div class="card edit-field">
    <div class="card-body">
        <div class="mb-3">
            <label for="edit-post" class="form-label">发帖</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="button" class="btn btn-primary">发帖</button>
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
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>