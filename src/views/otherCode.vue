<script type="text/javascript">
	
// THIS is for searching a doc.id -- use to to create a collection and search the collection ids
	var docRef = db.collection("TimePeriods").doc(x);
	docRef.get().then(function(doc) {
	    if (doc.exists) {
	        console.log("Document data:", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});

//THIS is for searching a doc
	if (appDate[x]){
		console.log("hey");
	}

//THIS is for getting a substopic
	let snapshot2 = await db.collection('TimePeriods').doc('TimePeriod2').collection('subtopics').get();

//CREATING a new subtopic COLLECTION
	if(this.createdSubtopic.subtopic_published){
		console.log("true")
		db.doc(url + "/" + this.informationType).set({
			ArrayOfevents: this.form
		});
	}

//ERROR CATCHING
	.then(function(doc){
		console.log(doc);
		if (doc.exists) {
			console.log("Document data:", doc.data());
			return doc.data();
		} else {
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
	this.blog = todosRef;


</script>
	