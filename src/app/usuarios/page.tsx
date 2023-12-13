import Content from '@/components/Content';

export default function Servidores() {
  return (
    <Content
      breadcrumbs={[
        { label: 'Usuários', href: '/usuario' }
      ]}
      titulo='Usuários'
      pagina='/usuario'
    >
    </Content>
  );
}