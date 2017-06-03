function domainName(url){
  let domain = url.split('.');
  if (domain[0].includes('www')) {
    return domain[1];
  } else if (domain[0].includes('http')) {
    return domain[0].split('//')[1];
  } else {
    return domain[0];
  }
}