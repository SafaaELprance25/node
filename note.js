const fs = require('fs')
const yargs = require('yargs')
const addStud = (nameOfStudent,subject,grade,comment) =>{
     const studs = loadNotes()
    
    const duplicateStud = studs.filter((note)=> note.nameOfStudent === nameOfStudent
      
       
    )


   if(duplicateStud.length ===0){
    studs.push({
        nameOfStudent,
        subject,
        grade,
        comment
    })
    saveNotes(studs)
    console.log('Saved Successfully')

   }
   else{
       console.log('Error Duplicate title')
   }
}

const loadNotes = () =>{
    

    try{
        const data = fs.readFileSync('studs.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}



const saveNotes = (studs) =>{
    const saveData = JSON.stringify(studs)
    fs.writeFileSync('studs.json',saveData)
}


const removeName= (nameOfStudent) =>{
    const studs= loadNotes();

    const studsToKeep = studs.filter((note)=>{
        return note.nameOfStudent !== nameOfStudent
    })

    console.log(studsToKeep)

    saveNotes(studsToKeep)
    console.log('Note is removed')
}



const listOfName = () =>{
    const studs = loadNotes()
    studs.forEach((note) => {
        console.log(note.nameOfStudent)
        
    });
}


const readComment = (nameOfStudent) =>{
    const studs = loadNotes()

    const note = studs.find((note)=>{
        return note.nameOfStudent === nameOfStudent
    })

    if(note){
        console.log('name:'+ note.name)
        console.log('Subject: '+ note.subject)
        console.log('Grade: '+ note.grade)
        console.log('Comment: '+ note.comment)
    }
    else{
        console.log('Name not found')
    }

}

module.exports = {
    addStud,
    removeName,
    listOfName,
    readComment
}