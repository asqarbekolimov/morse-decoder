const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
}

function decode(expr) {
	const chunkSize = 10
	let decodedString = ''

	for (let i = 0; i < expr.length; i += chunkSize) {
		const chunk = expr.slice(i, i + chunkSize)

		if (chunk === '**********') {
			decodedString += ' '
		} else {
			let morseCode = ''

			for (let j = 0; j < chunkSize; j += 2) {
				const morseSymbol = chunk.slice(j, j + 2)

				if (morseSymbol === '10') {
					morseCode += '.'
				} else if (morseSymbol === '11') {
					morseCode += '-'
				}
				// Skip '00' as they are padding and not part of Morse code
			}

			decodedString += MORSE_TABLE[morseCode] || ''
		}
	}

	return decodedString
}

module.exports = {
	decode,
}
