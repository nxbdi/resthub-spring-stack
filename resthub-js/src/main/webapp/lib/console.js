/**
 * Minimal CommonJS console implementation.
 * Doesn't support advanced feature if not available through original console
 * @see http://wiki.commonjs.org/wiki/Console
 * @author Florian Traverse
 */
define(function() {
	var logger,
		notSupported = function() {};
	
	logger = (console && console.log) ? console : {log: notSupported };
	
	logger.debug = console.debug || logger.log;
	logger.info = console.info || logger.log;
	logger.warn = console.warn || logger.log;
	logger.error = console.error || logger.log;

	//unsupported features
	logger.trace = console.trace || notSupported;
	logger.assert = console.assert || notSupported;
	logger.dir = console.dir || notSupported;
	logger.dirxml = console.dirxml || notSupported;
	logger.group = console.group || notSupported;
	logger.groupEnd = console.groupEnd || notSupported;
	logger.time = console.time|| notSupported;
	logger.timeEnd = console.timeEnd|| notSupported;
	logger.profile = console.profile|| notSupported;
	logger.profileEnd = console.profileEnd|| notSupported;
	logger.count = console.count || notSupported;
	//for non-modules
	if(window && !( console && console.log))
		window.console = logger;
	return logger;
});
