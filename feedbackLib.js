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
// function update(id, data) {
//     const feedback = findById(id)
//     if (feedback) {
//         if (data) {
//             feedback.
//         }
//     }
// }
// deleteOne(id)