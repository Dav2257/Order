import {hono} from 'hono';

const app = new hono();

app.get('/api', (c) => {
  return c.text('hi');
})

app.get('/api/orders', async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM orders").all()
  return c.json(results)
})

app.post('/api/orders', async (c) => {
  const input = await c.req.json()
  const query = `INSERT INTO orders(name,amount) values ("${input.name}","${input.amount}")`
  const newData = await c.env.DB.exec(query)
  return c.json(newData)
})

app.get('/api/orders/:id', async (c) => {
  const id = c.req.param('id')
  let { results } = await c.env.DB.prepare('SELECT * FROM orders WHERE id = ?').bind(id).all()
  return c.json(results[0])
})

app.put('/api/orders/:id', async (c) => {
  const id = c.req.param('id')

  const input = await c.req.json()
  const query = `UPDATE orders SET name = "${input.name}", amount = "${input.amount}" WHERE id = "${id}"`
  const data = await c.env.DB.exec(query)

  return c.json(data)
})

app.delete('/api/orders/:id', async (c) => {
  const id = c.req.param('id')

  const query = `DELETE FROM orders WHERE id = "${id}"`
  const data = await c.env.DB.exec(query)

  return c.json(data)
})

app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;