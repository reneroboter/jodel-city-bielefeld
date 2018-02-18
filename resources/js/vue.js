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
        posts: [
            {
                id: 'exampleModalPost',
                message: 'Wenns Display defekt ist muss halt die Maus her😂',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#dd5f5f',
            }, {
                id: 'exampleModalPost',
                message: 'Gestern vom Döner geträumt, heute einen geholt. Träume nicht dein Leben, sondern lebe deinen Traum\n' +
                '\n' +
                '#Dönerliebe',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#FFBA00',
            }, {
                id: 'exampleModalPost',
                message: 'Heute kam ein Strauß Rosen von meinem Freund aus Kanada. Jetzt ist meine Mutter sauer auf mein Paps, weil sie nicht mal eine Blume bekommt und mein Paps sauer auf mein Freund... \n' +
                '\n' +
                '#ichfreumich\n' +
                '#bisschenamüsant\n' +
                '#3st\n',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#06A3CB',
            }, {
                id: 'exampleModalPost',
                message: 'Woran ich gestern Nacht gemerkt habe, dass ich in München bin?\n' +
                '\n' +
                'An der Garderobe im Club hingen mehr Echtpelz als Kunstfellkrägen 🙈\n' +
                '\n' +
                '#justusse️',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#06A3CB',
            }, {
                id: 'exampleModalPost',
                message: 'Top jodel on Nordkorea ist gerade ich zitiere "Ein sehr nices Land vong Freedom her" 😂\n' +
                '\n' +
                '#Pyongyang️',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#FFBA00',
            }, {
                id: 'exampleModalPost',
                message: 'Ich schau gerade die olympischen Winterspiele und frage mich gerade, wie man drauf kommt sich auf nen mini Schlitten zu legen und Kopfüber mit 140 km/h ne Eisbahn runterzubrettern 😀❄️❄️❄️',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#06A3CB',
            }, {
                id: 'exampleModalPostImage',
                message: '',
                comments_count: 3,
                likes_count: 5,
                channel: 'Main Feed',
                created: '1min',
                color: '#06A3CB',
                image_url: 'http://dgue1f1nm4nsd.cloudfront.net/5a8800f229e9790010545a48_rW8tS81guPXFRM4J_thumb.jpeg',
            }
        ]
    },
    components: {post: post},
});
