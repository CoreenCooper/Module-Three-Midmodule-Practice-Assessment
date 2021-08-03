const includesLetters = (string) => {
    const digits = "0123456789";
    for (const char of string) {
      if (!digits.includes(char)) return true;
    }
    return false;
  };

  export default includesLetters;