

import EditProductForm from '../../components/EditProductForm';

const EditProductPage = ({id}) => {

    return (
        <div>
            <h1>Editar Producto</h1>
            <EditProductForm productId={id} />
        </div>
    );
};

export default EditProductPage;