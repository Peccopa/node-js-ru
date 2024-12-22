import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (username) => {
      console.log(`${username} liked your post`);
    });
    this.on("error", (error) => {
      console.error(error);
    });
  }
  like(username) {
    if (!username) {
      return this.emit(
        "error",
        new Error("There are no username in the like request!")
      );
    }
    this.likesQty += 1;
    this.emit("likePost", username);
  }
}

const myPost = new Post("Bonza", "Some post text");
// myPost.on("likePost", (username) => {
//   console.log(`${username} liked your post`);
// });

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like("Alice");
// console.log(myPost.likesQty);
setTimeout(() => myPost.like("Alex"), 1000);
setTimeout(() => myPost.like(), 2000);
