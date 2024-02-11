import React from 'react'
import groupYoga from '../../../assets/img/Courses/group-yoga.jpg'
import onlineYoga from '../../../assets/img/Courses/online-yoga.jpg'
import physio from '../../../assets/img/Courses/physio.jpg'
import telerehabilitation from '../../../assets/img/Courses/telerehabilitation.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const Courses = () => {
    const coursesList = [
        {
            id: 101,
            name: 'Group Yoga Training Session',
            profile: groupYoga,
            data: [
                { _id: 1, title: 'Increased motivation and accountability' },
                { _id: 2, title: 'Improved form and technique' },
                { _id: 3, title: 'Sense of community and belonging' },
                { _id: 4, title: 'Reduced stress and anxiety' },
                { _id: 5, title: 'Increased energy and vitality' },
                { _id: 6, title: 'Greater sense of accomplishment' },
                { _id: 7, title: 'More Fun' },
            ]
        },
        {
            id: 102,
            name: 'Online Yoga Class',
            profile: onlineYoga,
            data: [
                { _id: 1, title: 'Personalized Training' },
                { _id: 2, title: 'Easy to access' },
                { _id: 3, title: 'Access from anywhere' },
                { _id: 4, title: 'Cheaper than the Market' },
                { _id: 5, title: 'Benefit of Telerehabilitation' },
            ]
        },
        {
            id: 103,
            name: 'Physiotherapy',
            profile: physio,
            data: [
                { _id: 1, title: 'Get treated by Expert' },
                { _id: 2, title: 'Improve Strength' },
                { _id: 3, title: 'Improve flexibility' },
                { _id: 4, title: 'Improve Balance' },
                { _id: 5, title: 'Improve Co-ordination' },
            ]
        },
        {
            id: 104,
            name: 'Telerehabilitation',
            profile: telerehabilitation,
            data: [
                { _id: 1, title: 'Get treated by Expert' },
                { _id: 2, title: 'Easy to access' },
                { _id: 3, title: 'Get treated anytime & anywhere' },
                { _id: 4, title: 'Get pre-recorded exercise videos' },
                { _id: 5, title: 'Be a part of fastest growing network' },
            ]
        },
    ]
    return (
        <>
            <h1 className='section-title' data-heading='Our'>Courses</h1>

            <div className='course-list mt-5'>
                {coursesList?.map(card => {
                    return (
                        <>
                            <React.Fragment key={card?.id}>
                                <div className="card-design">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="card-image">
                                                <img src={card?.profile} alt="" className='img-fluid' />
                                                <div className='design-effect'>
                                                    <h1 className='card-title'>{card?.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            {card?.data?.map(data => {
                                                return (
                                                    <tr key={data?._id}>
                                                        <td>
                                                            <span><FontAwesomeIcon icon={faCircleCheck} /> {data?.title}</span>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </div >
                            </React.Fragment>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Courses
