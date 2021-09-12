/**
 * @description - hash string
 * @thanks - https://github.com/darkskyapp/string-hash
 * @param str - Input String
 * @returns { Number } - string hash    
 */
export const hash = (str: string): string => {
    let hash: number = 5381;
    let i: number = str.length;
  
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
  
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return (hash >>> 0).toString(36);
  }