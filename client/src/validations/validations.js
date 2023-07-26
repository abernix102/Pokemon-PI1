const Validation = (fieldName, value) => {
    let error = false;
    let errorMessage = '';
  
    if (fieldName === 'name') {
        if (value.trim() === '') {
          error = true;
          errorMessage = 'name is required';
        }else if(value.length > 20 ){
          error = true;
          errorMessage = 'name mayor a 20 caracteres'
        }else if (!/^[^+{}'.ñ<>áéíóúÁÉÍÓÚñ]*$/.test(value)) {
          error = true;
          errorMessage = 'name cannot contain certain characters';
        }
    }
  
    if (fieldName === 'hp') {
      if (value < 1 || value > 225) {
        error = true;
        errorMessage = 'HP must be between 1 and 225';
      }
    }
  
    if (fieldName === 'attack') {
      if (value < 1 || value > 165) {
        error = true;
        errorMessage = 'attack power cannot be greater than 165 or less than 1';
      }
    }
  
    if (fieldName === 'defense') {
      if (value < 1 || value > 230) {
        error = true;
        errorMessage = 'defense cannot be less than 1 and greater than 230';
      }
    }
  
    if (fieldName === 'speed') {
      if (value < 1 || value > 160) {
        error = true;
        errorMessage = 'speed cannot be less than 1 and greater than 160';
      }
    }
  
    if (fieldName === 'height') {
      if (value < 1 || value > 145) {
        error = true;
        errorMessage = 'height cannot be less than 1 and greater than 145';
      }
    }
  
    if (fieldName === 'weight') {
      if (value < 1 || value > 9500) {
        error = true;
        errorMessage = 'weight cannot be less than 1 and greater than 9500';
      }
    }
    
    return { value: errorMessage, error };
  }
  

export default Validation;