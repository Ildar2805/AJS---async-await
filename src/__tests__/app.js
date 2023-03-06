import GameSavingLoader from '../js/app';

test('проверка вызова callback с resolved', async () => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const data = await GameSavingLoader.load();
  expect(data).toEqual(expected);
});

test('проверка обработки ошибки', async () => {
  expect.assertions(1);
  try {
    const data = await GameSavingLoader.load();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
