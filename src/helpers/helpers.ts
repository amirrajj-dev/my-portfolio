export const getSyntaxClass = (char: string): string => {
  if (/[{}]/.test(char)) return "text-warning";
  if (/[:;]/.test(char)) return "text-info";
  if (/(import|const|return|className|from|useEffect)/.test(char))
    return "text-primary font-semibold";
  if (/['"]/.test(char)) return "text-success";
  if (/(useState|Portfolio)/.test(char)) return "text-secondary";
  if (/(=>|\(|\))/.test(char)) return "text-accent";
  return "";
};