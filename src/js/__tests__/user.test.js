import personage from '../app'

test('verify life-status healthy', () => {
    const result = personage({ name: 'мечник', health: 100});
    expect(result).toBe('healthy');
});

test('verify life-status wounded', () => {
    const result = personage({ name: 'лучник', health: 35});
    expect(result).toBe('wounded');
});

test('verify life-status critical', () => {
    const result = personage({ name: 'смертник', health: 12});
    expect(result).toBe('critical');
});

