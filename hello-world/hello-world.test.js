const hello = require('./hello-world');

describe(hello.helloWorld.name, () => {
  test('should print "HELLO WORLD"', () => {
    const holdsConsoleLog = console.log;
    console.log = jest.fn();
    hello.helloWorld();
    expect(console.log).toHaveBeenCalledWith('HELLO WORLD');

    console.log = holdsConsoleLog;
  });
});

