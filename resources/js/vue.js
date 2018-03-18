new Vue({
    el: '#app',
    data: {
        posts: [],
    },
    mounted() {
        axios.get('http://localhost')
            .then(response => this.posts = response.data.posts)
            .catch(e => {
                this.errors.push(e)
            })
    },
    filters: {
        moment: function (date) {
            return moment(date, 'YYYYMMDD').fromNow();
        }
    }
});