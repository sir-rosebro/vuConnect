import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile';


const Education = ({ education, deleteEducation }) => {
    

    const educations = education.map( edu => (
                    <tr key= {edu._id}>
                        <td>{ edu.school}</td>
                        <td class="hide-sm">{ edu.degree }</td>
                        <td>{ edu.fieldofstudy}</td>
                        <td>

                        <Moment format='YYYY/MM/DD'> 
                                    {edu.from} 
                                </Moment> - {' '}
                                {
                                    edu.to === null ? ('Now')
                                    : (
                                    <Moment format='YYYY/MM/DD'> 
                                        {edu.to} 
                                    </Moment>  
                                    )
                                } 
                        </td>
                        <td>
                            <button class="btn btn-danger" onClick = { (_id) => { deleteEducation(_id) }}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    
                ));
    return (
            <Fragment>
               <h2 class="my-2"> Academics </h2>
                <table class="table">
                    <thead>
                    <tr>
                        <th>School</th>
                        <th class="hide-sm">Degree</th>
                        <th class="hide-sm">Field Of Studey</th>
                        <th class="hide-sm">Years</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        { educations }
                    </tbody>
                </table>
        </Fragment>
    )
}
Education.propTypes ={
    deleteEducation: PropTypes.func.isRequired
}
export default connect( null, { deleteEducation }) (Education);
