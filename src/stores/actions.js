const ADDAUTHOR = "ADDAUTHOR";
const DELETEAUTHOR = "DELETEAUTHOR";

export const addAuthor = () => {
  return {
    type: ADDAUTHOR
  };
};

export const deleteAuthor = authid => {
  return {
    type: DELETEAUTHOR,
    auhtorID: authid
  };
};
