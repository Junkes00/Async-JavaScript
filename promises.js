const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("Error in login"));
    }

    console.log("User logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUserVideos');
      resolve(['video1', 'video2', 'video3']);
    }, 2000);
  })
}

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getVideosDetails');
      resolve({ title: "video title" });
    }, 2500);
  })
};

loginUser("nicolas@gmail.com", "123456")
  .then((user) => {
    return getUserVideos(user.email);
  })
  .then((videos) => {
    return getVideoDetails(videos[0]);
  })
  .then(videoDetails => console.log({ videoDetails }))
  .catch((error) => {
    console.log({ error })
  })

// Promise.all
// When the promise haven't parameter, you can to call a new instance 
const yt = new Promise(resolve => {
  setTimeout(() => {
    resolve('videos from YouTube');
  }, 3000);
})

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Posts from Facebook')
  }, 3500);
})

Promise.all([yt, fb]).then((result) => {
  console.log({ result });
})