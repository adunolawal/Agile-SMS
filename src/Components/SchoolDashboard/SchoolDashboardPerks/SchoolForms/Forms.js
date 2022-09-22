import { GrWorkshop} from "react-icons/gr";

const Forms = ( ) => {
    return ( 
        <div className="forms">
            <div className="teachStaff">
                    <GrWorkshop className="teachIcon"></GrWorkshop>
                    <h4> Students </h4>
            </div>
            <div className="teachStaff">
                    <GrWorkshop className="teachIcon"></GrWorkshop>
                    <h4> Parents </h4>
            </div>
            <div className="teachStaff">
                    <GrWorkshop className="teachIcon"></GrWorkshop>
                    <h4> Staff </h4>
            </div>
        </div>
    );
}
 
export default Forms;