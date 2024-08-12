export const getPosts = async () => {
  return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
};
