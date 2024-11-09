const customers = [
  { id: 1, name: 'João', idade: 28 },
  { id: 2, name: 'Carlos', idade: 32 },
  { id: 3, name: 'Paulo', idade: 19 },
];

class Controller {
  constructor() {}

  //GET
  list(req, res) {
    console.log(
      'GET :: /customers todos os clientes foram listados',
      JSON.stringify(customers),
    );
    return res.json(customers);
  }
  //GET
  locate(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    console.log(`GET ::/customers/id cliente do id ${id} foi encontrado`);
    return res.status(status).json(customer);
  }
  //POST
  create(req, res) {
    const { name, idade } = req.body;
    const id =
      customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
    const NewCustomers = { id, name, idade };
    customers.push(NewCustomers);

    console.log(
      `POST :: /customers , o cliente ${NewCustomers} foi adicionando com sucesso`,
    );
    return res.status(201).json(NewCustomers);
  }

  //PUT
  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, idade } = req.body;
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id, name, idade };
      console.log(
        `PUT :: /customers/:id ,  cliente de ID ${id} foi atualizado com sucesso`,
      );
      return res.status(status).json(customers[index]);
    } else {
      return { message: 'Não foi possível atualizar o usuario' };
    }
  }

  //DELETE
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers.splice(index, 1);
      console.log(`DELETE :: /customers/${id} - Cliente removido com sucesso.`);
      return res
        .status(status)
        .json({ message: `Cliente de id ${id} removido com sucesso.` });
    }
  }
}

export default new Controller();
