<template>
    <div class="row">
        <div class="col-10">
            <div class="row">
                <div class="col-12">
                    <h6 class="card-title"><i class="far fa-map-marker"></i> here • <b>{{ hello }}</b> • {{ post.created }}</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="card-text">{{ post.message }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p></p>
                    <i class="far fa-comments"> </i>
                    <small>{{ post.comments_count }}</small>
                </div>
            </div>
        </div>
        <div class="col-2 align-self-center">
            <div class="col-12">
                <i class="fas fa-angle-up"></i>
                {{ post.likes_count }}
                <i class="fas fa-angle-down"></i>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['post'],
    }
</script>

<style scoped>

</style>