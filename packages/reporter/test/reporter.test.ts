import { Reporter } from '../src';
import { test, expect } from 'vitest';

const reporter = new Reporter({
	info: 'info: $message',
	warn: 'warning: $message',
	ready: 'ready $message',
	start: 'start $message',
	success: 'success: $message',
});

test('should user getters', () => {
	expect(reporter.info).toBe('info: $message');
	expect(reporter.warn).toBe('warning: $message');
	expect(reporter.ready).toBe('ready $message');
	expect(reporter.start).toBe('start $message');
	expect(reporter.success).toBe('success: $message');
	expect(reporter.error).toStrictEqual({ name: '$name', message: '$message' });
});
