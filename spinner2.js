let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ' ];

let timer = 100;
for (const line of spinner){
  setTimeout(() => {
    process.stdout.write(line);
  }, timer);
  timer += 200;


}






