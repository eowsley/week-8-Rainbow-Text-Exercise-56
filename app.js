const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
for (let i = 0; i < colors.length; i++) {
    document.querySelector(`span:nth-of-type(${i+1})`).style.color = `${colors[i]}`
    
}