export const formatDate = (data) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dateNew = new Date(data).toLocaleDateString(undefined, options);
    const [dia, mes, ano] = dateNew.split('/');
    const dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada    
  };