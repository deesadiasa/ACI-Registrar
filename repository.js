// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBsTJb-TOHR-_VPgxnG_uqeGS1_2kpEdtU",
    authDomain: "aci-registrar.firebaseapp.com",
    projectId: "aci-registrar",
    storageBucket: "aci-registrar.appspot.com",
    messagingSenderId: "49882101284",
    appId: "1:49882101284:web:b511700ced8288972d4ab1",
    measurementId: "G-63VYPB0CXY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Save form data to Firestore when submitted
document.getElementById('documentRequestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = new FormData(event.target);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => { jsonData[key] = value; });

    // Save form data to Firestore
    db.collection('documentRequests').add(jsonData)
        .then(function(docRef) {
            console.log('Document written with ID: ', docRef.id);
            // Add submitted data to table (if needed)
            // Refresh table (if needed)
        })
        .catch(function(error) {
            console.error('Error adding document: ', error);
        });

    // Reset form
    event.target.reset();
});

// Retrieve and display data from Firestore when page loads
window.addEventListener('load', function() {
    // Clear existing table data (if needed)

    // Retrieve data from Firestore
    db.collection('documentRequests').get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // Display data in table (if needed)
            });
        })
        .catch(function(error) {
            console.error('Error getting documents: ', error);
        });
});
