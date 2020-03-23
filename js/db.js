//real time listener
db.collection('recipes').onSnapshot((snapshot) =>{
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change =>{
  //  console.log(change, change.doc.data(), change.doc.id);
  if(change.type === 'added'){
    //add the doc data to the web page

  }
  if(change.type === 'removed'){
    //remove the doc data from the web page

  }
});
})
