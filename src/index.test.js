import { healthStatus } from './index';

test('health > 50 = healthy', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health 15-50 = wounded', () => {
  expect(healthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
});

test('health < 15 = critical', () => {
  expect(healthStatus({ name: 'Лучник', health: 10 })).toBe('critical');
});
