function spinWords(string){
  
  string = string.split(' ');
  
  for(let i = 0; i < string.length; i++)
    {
      if(string[i].length >= 5)
        {
          string[i] = string[i].split('').reverse().join('');
        }
    }
  
  
  
  return string.join(' ');
}
