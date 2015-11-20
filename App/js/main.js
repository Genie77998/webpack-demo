import $ from 'zepto';
import Vue from 'vue';
import Router from 'vue-router';
//import App from './templ.vue';
require('../css/stylea.css');
Vue.config.debug = true // 开启调试模式
Vue.use(Router);
Zepto(function() {
    console.log('ready');
    var MyComponent = Vue.extend({
        template: (function() {
            return '<div @click="shows">this is a template!</div>'
        })(),
        methods: {
            shows: function() {
                console.log(this);
            }
        }
    });

    Vue.component('my-component', MyComponent)

    // 创建根实例
    var vm = new Vue({
        el: '#example',
        data: {
            placehloder: "Hello Vue.js!",
            message: '',
            button: '点击切换',
            todos: [{
                text: 'Learn JavaScript',
                shows: true,
                isA: true,
                isB: true
            }, {
                text: 'Learn Vue.js',
                shows: true,
                isA: true,
                isB: false
            }, {
                text: 'Build Something Awesome',
                shows: false,
                isA: false,
                isB: true
            }]
        },
        methods: {
            toogle: function() {
                var _me = this;
                _me.message = _me.message.split('').reverse().join('');
                if (!_me.todos) {
                    return;
                }
                for (var i = 0; i < _me.todos.length; i++) {
                    this.todos[i].text = this.todos[i].text.split('').reverse().join('')
                }
            },
            aaaa: function() {
                console.log(this);
            },
            addTodo: function() {
                var text = this.message.trim();
                console.log(text);
                if (text) {
                    this.todos.push({
                        text: text,
                        shows: text.length > 5 ? true : false
                    })
                    this.message = ''
                }
            },
        }
    });
    var testView = Vue.extend({
        template: '<p>This is testView!</p>'
    })

    // define some components
    var Foo = Vue.extend({
        template: '<div class="foo">' +
            '<h2>This is Foo!</h2>' +
            '<router-view></router-view>' + // <- nested outlet
            '</div>'
    })

    var Bar = Vue.extend({
        template: '<p>This is bar!</p>'
    })

    var Baz = Vue.extend({
        template: '<p>This is baz!</p>'
    })

    // configure router
    var router = new Router({
        transitionOnLoad: true
    });

    router.map({
        '/foo': {
            component: Foo,
            // add a subRoutes map under /foo
            subRoutes: {
                '/': {
                    // This component will be rendered into Foo's <router-view>
                    // when /foo is matched. Using an inline component definition
                    // here for convenience.
                    component: {
                        template: '<p>Default sub view for Foo</p>'
                    }
                },
                '/bar': {
                    // Bar will be rendered inside Foo's <router-view>
                    // when /foo/bar is matched
                    component: Bar
                },
                '/baz': {
                    // same for Baz, but only when /foo/baz is matched
                    component: Baz
                }
            }
        }
    })

    // start app
    var App = Vue.extend({})
    router.start(App, '#app')
})
