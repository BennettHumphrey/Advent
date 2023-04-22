export const setBG = (id, date, glow, width) => {
    if (id === date - 1 && glow === true) {
      return "bg-blue-400"
    };
    if (id < date) {
      return "bg-[#EA5D8D]"
    };
    if(width < 640) {
      return "bg-[#313131]"
    }
      return "bg-[#000000FA] border border-[#AAAAAA]"
  }