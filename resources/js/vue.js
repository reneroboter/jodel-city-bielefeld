var post = Vue.component('jodel-post', {
    props: ['post'],
    template: '<div class="row">\n' +
    '    <div class="col-10">\n' +
    '        <div class="row">\n' +
    '            <div class="col-12">\n' +
    '                <h6 class="card-title"><i class="far fa-map-marker"></i> here • <b>{{ post.channel }}</b> • {{ post.created }}</h6>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-12">\n' +
    '                <p class="card-text">{{ post.message }}</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-12">\n' +
    '                <p></p>\n' +
    '                <i class="far fa-comments"> </i>\n' +
    '                <small>{{ post.comments_count }}</small>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-2 align-self-center">\n' +
    '        <div class="col-12">\n' +
    '            <i class="fas fa-angle-up"></i>\n' +
    '            {{ post.likes_count }}\n' +
    '            <i class="fas fa-angle-down"></i>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'
});

var app = new Vue({
    el: '#app',
    data: {
        errors: [],
        posts: []
    },
    created() {
        axios.get('http://localhost')
            .then(response => {
                this.posts = response.data.posts
            })
            .catch(e => {
                this.errors.push(e)
            })
    },

    components: {post: post},

});
