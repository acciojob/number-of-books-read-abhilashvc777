const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: true,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let count = 0;
   library.forEach((e)=>{
	   if(e.readingStatus==true){
		   count++
	   }
   })
	return count
};

// Do not change th
console.log(numberOfBooksRead())