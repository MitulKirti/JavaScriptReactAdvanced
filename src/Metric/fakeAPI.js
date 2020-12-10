export function fetchProfileData() {
    let userPromise = fetchUser();
    let postsPromise = fetchPosts();
    return {
      user: wrapPromise(userPromise),
      posts: wrapPromise(postsPromise)
    };
  }
  
  // Suspense integrations like Relay implement
  // a contract like this to integrate with React.
  // Real implementations can be significantly more complex.
  // Don't copy-paste this into your project!
  function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }
  
  function fetchUser() {
    console.log("fetch user...");
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("fetched user");
        resolve({
          name: "Mitul Kirti"
        });
      }, 1000);
    });
  }
  
  function fetchPosts() {
    console.log("fetch posts...");
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("fetched posts");
        resolve([
          {
            id: 0,
            text:
              "Software consultant with 5.10 years of experience."
          },
          {
            id: 1,
            text:
              "Youtuber"
          },
          {
            id: 2,
            text:
              "Loves creativity"
          }
        ]);
      }, 2000);
    });
  }
  