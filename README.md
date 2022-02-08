Describe: isValid(creditNumber)

Test: "If the string (after being trimmed) representing the card number is empty, then the card is not valid."
Code: isValid("    ")
Expected Output: "This card number is not valid."

Test: "If the string representing the card number contains character(s) other than digits, then the card is not valid."
Code: isValid("abc912!")
Expected Output: "This card number is not valid."

Test: "It can process a string representing the card number if every other digit is a 0 and there are no digits greater than 4."
Code: isValid("2020202020202020")
Expected Output: "This card number is not valid."

Test: "It can process a string representing the card number if there are no digits greater than 4."
Code: isValid("0404040404040404")
Expected Output: "This card number is not valid."


