import UpdateItem from '../components/UpdateItem';
import Link from 'next/link';

const Update = ({query}) => (
    <div>
        <UpdateItem id={query.id}/>
    </div>
);
//takes id from props in app.js 
//shit is stateless so not this.props but just props
export default Update;