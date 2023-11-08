const fs=require('fs')
const chalk=require('chalk')
const hello=require('./notes.json')
const getNotes=()=>
{
    return 'Your notes...'
}

const addNote= (title,body)=>{
  const notes=loadNotes() 
  const duplicateNotes=notes.filter((note)=>note.title===title)
  if(duplicateNotes.length===0){
    notes.push({
        title:title,
        body:body
     })
     saveNotes(notes)
     console.log(chalk.green('New note added'))
    } else{
        console.log('Note title taken')
    }
  }

 


const saveNotes=(notes)=>{
   const dataJSON=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
  try{  
 const dataBuffer=fs.readFileSync('notes.json')
  const dataJSON=dataBuffer.toString()
  return JSON.parse(dataJSON)
  }
  catch(e){
    return []
  }
}

const readNote=(title)=>{
  const notes=loadNotes()
  const note=notes.find((note)=>note.title===title)
  if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }
  else{
    console.log(chalk.red.inverse('Note not found!'))
  }

}

const removeNote=(title)=>{
    
    const notes=loadNotes()
    const blen=hello.length;
    const notesToKeep=notes.filter(function(note){
      return note.title!==title 

    })
    saveNotes(notesToKeep)
    const alen=notesToKeep.length;
   
    if(blen==alen)
    {
        console.log(chalk.red("Note is not removed"))
    }
    else
    {
        console.log(chalk.green("Note is removed"))
    }

  
}


const listNotes=()=>{
   const notes=loadNotes()
   console.log(chalk.inverse('Your notes'))
   notes.forEach((note)=>{
      console.log(note.title)
   })
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}