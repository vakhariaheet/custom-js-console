interface options {
	log?: (message?: any, ...optionalParams: any[]) => void;
	error?: (message?: any, ...optionalParams: any[]) => void;
	info?: (message?: any, ...optionalParams: any[]) => void;
	warn?: (message?: any, ...optionalParams: any[]) => void;
	table?: (tabularData: any, properties?: ReadonlyArray<string>) => void;
	browserLog?: Boolean;
}

export default class customConsole {
	options: {
		log: (message?: any, ...optionalParams: any[]) => void;
		error: (message?: any, ...optionalParams: any[]) => void;
		info: (message?: any, ...optionalParams: any[]) => void;
		warn: (message?: any, ...optionalParams: any[]) => void;
		table: (tabularData: any, properties?: ReadonlyArray<string>) => void;
		browserLog: Boolean;
	};
	/** Original console*/
	originalConsole: Console;
	/**
	 * @param {object} options
	 *
	 * ## Options
	 * - log : Function to execute when console.log is called
	 * - error : Function to execute when console.error is called
	 * - info : Function to execute when console.info is called
	 * - warn : Function to execute when console.warn is called
	 * - table : Function to execute when console.table is called
	 * - browserLog: Boolean to determine whether run above console func i.e if false console.log wont log anything in Browser console
	 *
	 */

	constructor(options: options) {
		this.options = {
			log: options.log || ((message?: any, ...optionalParams: any[]) => {}),
			error: options.error || ((message?: any, ...optionalParams: any[]) => {}),
			info: options.info || ((message?: any, ...optionalParams: any[]) => {}),
			warn: options.warn || ((message?: any, ...optionalParams: any[]) => {}),
			table:
				options.table ||
				((tabularData: any, properties?: ReadonlyArray<string>) => {}),
			browserLog: options.browserLog !== undefined ? options.browserLog : true,
		};

		this.originalConsole = window.console;
		console = {
			...this.originalConsole,
			log: (message?: any, ...optionalParams: any[]) => {
				this.options.log(message, ...optionalParams);
				if (this.options.browserLog) {
					/* istanbul ignore next */
					this.originalConsole.log(message, ...optionalParams);
				}
				return;
			},
			error: (message?: any, ...optionalParams: any[]) => {
				this.options.error(message, ...optionalParams);
				if (this.options.browserLog) {
					this.originalConsole.error(message, ...optionalParams);
				}
				return;
			},
			info: (message?: any, ...optionalParams: any[]) => {
				this.options.info(message, ...optionalParams);
				if (this.options.browserLog) {
					this.originalConsole.info(message, ...optionalParams);
				}
				return;
			},
			warn: (message?: any, ...optionalParams: any[]) => {
				this.options.warn(message, ...optionalParams);
				if (this.options.browserLog) {
					this.originalConsole.warn(message, ...optionalParams);
				}
				return;
			},
			table: (tabularData: any, properties?: ReadonlyArray<string>) => {
				this.options.table(tabularData, properties);
				if (this.options.browserLog) {
					this.originalConsole.table(tabularData, properties);
				}
				return;
			},
		};
	}
}
