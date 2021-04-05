const yargs = require('yargs')
const studs = require('./note')
yargs.command({
    command: 'add',
    describe: 'add student',
    builder:{
        name:{
            describe: 'student name',
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:' subject ',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'grade',
            demandOption:true,
            type:Number
        },
        comment:{
            describe:'comment',
            demandOption:true,
            type:'string'
        }
    },
    
    handler:(argv) =>{
      
        studs.addStud(argv.name,argv.subject,argv.grade,argv.comment)
    }
})


yargs.command({
    command:'remove',
    describe:'remove',
    builder:{
        name:{
            describe:'name is required',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        studs.removeName(argv.name)
    }
})

yargs.command({
    command:'list',
    describe:'List note',
    handler:(argv) =>{
        studs.listOfName(argv.name)
    }
})

yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        name:{
            describe:'This is required name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        studs.readComment(argv.name)
    }
})

yargs.parse()