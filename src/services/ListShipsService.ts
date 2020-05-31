import { createApolloFetch } from 'apollo-fetch';

import Ship from '../model/Ship';

class ListShipsService {
  public async execute(): Promise<Ship[]> {
    const fetch = createApolloFetch({
      uri: 'https://api.spacex.land/graphql/',
    });

    const response = await fetch({
      query: `{
        ships {
          id
          image
          name
          active
          missions {
            flight
            name
          }
        }
      }`,
    });

    // A pesquisa através do filtro diratamente pela api não esta funcionado.
    // Ao pesquisar active === true, não é retornada nenhuma linha
    // {
    //   ships(find: {active: true}) {
    //     id
    //     image
    //     name
    //     active
    //     missions {
    //       flight
    //       name
    //     }
    //   }
    // }

    const shipsRes = response.data.ships as Ship[];
    const shipsActive = shipsRes.filter(item => item.active === true);

    return shipsActive;
  }
}

export default ListShipsService;
