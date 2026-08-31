let feedbacks = [] 
let nextId = 0;




// addOne(sender, message, rating, platform)
// push method = array.push(new entry)
function addOne(sender, message, rating, platform) {
    const feedback = { id: nextId++, sender, message, rating, platform};
    feedbacks.push(feedback)
    return feedback;
}

// getAll()

function getAll() {
    return feedbacks;
}

// findById(id)
function findById(id) {
    const numericalId = Number(id);
    const feedback = feedbacks.find((item) => item.id === numericalId);
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

// update(id, data)
function update(id, data) {
    const feedback = findById(id)
    if (feedback) {
        if (data.sender) feedback.sender = data.sender;
        if (data.message) feedback.message = data.message;
        if (data.rating) feedback.rating = data.rating; 
        if (data.platform) feedback.platform = data.platform; 
        return feedback;      
    }
    return false;
}
// deleteOne(id)
//function deleteOne(id) {
    


if (require.main === module) {
  const result = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile"
  );

  console.log(result);
  
  update(0, {message: "texting"})
  console.log(getAll())
}