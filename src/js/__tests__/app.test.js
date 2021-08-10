import showSpecialAttack from '../app';

test('должна возвращать извлечённый массив из объектов с четыремя полями', () => {
  const received = [
    {
      id: 8,
      nameAttack: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      nameAttack: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  const expected = showSpecialAttack();
  expect(received).toEqual(expected);
});
