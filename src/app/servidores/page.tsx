'use client'

import Content from '@/components/Content';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { useEffect, useState } from 'react';
import { Api } from '@/shared/api/axios-config';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function Usuarios() {
  const [ servidores, setServidores ] = useState<any>([]);

  function buscaServidores() {
    console.log('atualizou');
    const relative = `http://localhost:3000/servidor`
    Api.get(relative).then((result) => {
      setServidores(result.data.data);
    });
  }
  useEffect(() => {
    buscaServidores();
  }, [])
  return (
    <Content
      breadcrumbs={[
        { label: 'Servidores', href: '/servidores' }
      ]}
      titulo='Servidores'
      pagina='/servidores'
    >
      <Button sx={{ width: 200 }}
        onClick={() => buscaServidores()}
      >Atualizar Servidores</Button>
      <Sheet>
        <Table
          borderAxis="xBetween"
          color="neutral"
          stickyFooter
          stickyHeader
          variant="plain">
          <thead>
            <tr>
              <th>Usuário de Rede</th>
              <th style={{ width: '40%' }}>Nome</th>
              <th>Cargo</th>
              <th>Cargo em Comissão</th>
              <th>Unidade</th>
              <th>Status</th>              
            </tr>
          </thead>
          <tbody>
            {servidores && servidores.map((row: any) => (
              <tr key={row.id}>
                <td>{row.login}</td>
                <td>{row.nome}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
                <td> </td>
              </tr>
            ))}
          </tbody>

        </Table>
      </Sheet>
    </Content>
  );
}