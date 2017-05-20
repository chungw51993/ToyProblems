function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (isNaN(parseInt(pin[i]))) {
        return false;
      }
    }
    return true;
  }

  return false;
}