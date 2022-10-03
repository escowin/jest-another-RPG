# jest-another-RPG
* 10 | Object-Oriented Programming


## mocking data

mocking the fs module:

    const fs = require('fs');
    jest.mock('fs');
    fs.readFileSync.mockReturnValue('fake content');

 always return the string 'fake content', eliminating the need to read from an actual file during testing.