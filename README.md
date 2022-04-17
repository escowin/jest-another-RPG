# jest-another-RPG
* 10 | Object-Oriented Programming


## mocking data
* see 10.2.5:
const fs = require('fs');
jest.mock('fs');
fs.readFileSync.mockReturnValue('fake content');