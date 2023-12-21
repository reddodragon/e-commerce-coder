import EditForm from '../../../components/admin/edit/EditForm';

const EditProductPage = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <h1>Editar Producto</h1>
            <EditForm productId={id} />
        </div>
    );
};

export default EditProductPage;