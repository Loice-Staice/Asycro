// question one
async function logMessageWithDelay(message, delayInMilliseconds) {
    await new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
    console.log(message);
  }
  

  logMessageWithDelay("Hello, world!", 2000); 

//   question two
async function fetchUserDataSequentially(userIds) {
    const userDataArray = [];
  
    for (const userId of userIds) {
      try {
        const userData = await getUserData(userId);
        userDataArray.push(userData);
        console.log(`User data for ID ${userId}:`, userData);
      } catch (error) {
        console.error(`Error fetching data for ID ${userId}:`, error.message);
      }
    }
  
    console.log(`Fetch data for ${userIds.length} user IDs.`);
  }
  
  
  const userIds = [1, 2, 3]; 
  fetchUserDataSequentially(userIds);

//   question 3
async function handleTask() {
    try {
      await performTask();
      console.log("Task completed successfully!");
    } catch (error) {
      console.error("Error encountered during task:", error.message);
    }
  }
  
  handleTask();

//   question 4
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
      if (randomValue > failureProbability) {
        resolve(`${taskName} succeeded`);
      } else {
        reject(`${taskName} failed`);
      }
    });
  }
  
  async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await unstableTask(taskName, failureProbability);
        console.log(`Attempt ${attempt}: ${result}`);
        return; 
      } catch (error) {
        console.error(`Attempt ${attempt}: ${error}`);
      }
    }
    console.log(`All ${retry} attempts failed for ${taskName}.`);
  }
  
  
  executeWithRetry("SampleTask", 3, 0.9);
  
  
  
  