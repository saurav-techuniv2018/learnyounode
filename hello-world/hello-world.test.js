const helloWorld = require('./hello-world');

describe(helloWorld.name, () => {
  test('should print "HELLO WORLD"', () => {
    const holdsConsoleLog = console.log;
    console.log = jest.fn();
    helloWorld();
    expect(console.log).toHaveBeenCalledWith('HELLO WORLD');

    console.log = holdsConsoleLog;
  });
});

