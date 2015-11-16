import $ from 'zepto';
import Vue from 'vue';
require('../css/stylea.css');
Zepto(function() {
    console.log('ready');
    var MyComponent = Vue.extend({
            template: (function(){
              return  '<div v-on:click="shows">this is a template!</div>'
            })(),
            methods : {
              shows : function(){
                console.log(this);
              }
            }
        });

    // register
    Vue.component('my-component', MyComponent)
      
    // 创建根实例
   var vm =  new Vue({
        el: '#example',
        data: {
            placehloder : "Hello Vue.js!",
            message: '',
            button: '点击切换',
            todos: [{
                text: 'Learn JavaScript'
            }, {
                text: 'Learn Vue.js'
            }, {
                text: 'Build Something Awesome'
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
            addTodo: function() {
                var text = this.message.trim();
                console.log(text);
                if (text) {
                    this.todos.push({
                        text: text
                    })
                    this.message = ''
                }
            },
        }
    });

})
