import EditForm from '../../../components/admin/edit/EditForm';

const EditProductPage = ({ params }) => {
    const { id } = params;
    return (
        <div className='rounded-3xl w-4/5 p-8 mx-auto bg-[#ede0d0] text-[#1e1305]'>
            <EditForm productId={id} />
        </div>
    );
};

export default EditProductPage;