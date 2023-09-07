function telephoneCheck(str) {
  let myRegex = /^(1|1 )?(\d{3}|\(\d{3}\))(-| )?\d{3}(-| )?\d{4}$/
  // console.log(str.match(myRegex))
  return myRegex.test(str)
}

telephoneCheck("1 555-555-5555")
