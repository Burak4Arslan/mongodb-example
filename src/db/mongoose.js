const mongoose = require('mongoose')
const validator = require('validator')

const cURL='mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(cURL, {
    useNewUrlParser : true,
    useCreateIndex: true
});

const User = mongoose.model('User', {

    name: {
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if(value.length<=6 || validator.contains(value,'password')) {
                throw new Error('Düzgün Password Gir Lan')
            }
        }
    }

})

// const me = new User({
//     name: 'Bigoş',
//     age: 21,
//     password: '♥♥♥♥♥♥♥'
// });

// me.save().then(()=>{

//     console.log(me);

// }).catch((error)=> {
//     console.log(error);
// })


const Task = mongoose.model('Task', {

    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
    
})

const ta = new Task({
    description: 'Bunlar yapılacak'
})


ta.save().then(()=> {
    console.log(ta);
}).catch((error)=> {

    console.log(error)

})