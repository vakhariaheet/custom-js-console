import customConsole from '../src';

const { options } = new customConsole({
	log: (...msgs) => {
		alert(msgs.join(' ').toUpperCase());
	},
	info: (...msgs) => {
		alert(msgs.join(' ').toUpperCase());
	},
	error: (...msgs) => {
		alert(msgs.join(' ').toUpperCase());
	},
	warn: (...msgs) => {
		alert(msgs.join(' ').toUpperCase());
	},
	table: (msg, properties) => {
		alert(msg.join(' ').toUpperCase());
	},
	browserLog: false,
});

it('Console.log : BrowserLog false', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	console.log('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
});

it('Console.log : BrowserLog true', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
	options.browserLog = true;

	setTimeout(() => {
		console.log('hello');
		expect(alertSpy).toHaveBeenCalledWith('HELLO');
		expect(consoleSpy).toHaveBeenCalledWith('hello');
	}, 10);
});

it('Console.warn : BrowserLog false', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	console.warn('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
});
it('Console.warn : BrowserLog true', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
	options.browserLog = true;
	console.warn('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
	expect(consoleSpy).toHaveBeenCalledWith('hello');
});
it('Console.error : BrowserLog false', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	console.error('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
});
it('Console.error : BrowserLog true', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
	options.browserLog = true;
	console.error('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
	expect(consoleSpy).toHaveBeenCalledWith('hello');
});
it('Console.info : BrowserLog false', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	console.info('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
});
it('Console.info : BrowserLog true', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	const consoleSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
	options.browserLog = true;
	console.info('hello');
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
	expect(consoleSpy).toHaveBeenCalledWith('hello');
});
it('Console.table : BrowserLog false', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	console.table(['hello']);
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
});
it('Console.table : BrowserLog true', () => {
	const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
	const consoleSpy = jest.spyOn(console, 'table').mockImplementation(() => {});
	options.browserLog = true;
	console.table(['hello']);
	expect(alertSpy).toHaveBeenCalledWith('HELLO');
	expect(consoleSpy).toHaveBeenCalledWith(['hello']);
});
