import React, { useState, useEffect } from 'react'
import {
    AppDetailsContainer,
    ButtonBase,
    ListGroup,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from '../../atom'
import { formatNumber, longDate, shortDate } from '../../utils'

const Details = ({ fixture }) => {
    const [ fixtures, setFixtures ] = useState([])
    const [ modalData, setModalData ] = useState([])
    const [ isModalOpen, setModalIsOpen ] = useState(false)
    const [ visible, setVisible ] = useState(5)
    const [ error, setError ] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3001/api/applications`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Something went wrong while requesting fixtures!')
            })
            .then((data) => setFixtures(data))
            .catch((error) => setError(error.message))
    }, [])

    const handleLoadFixtures = (e) => {
        e.preventDefault()
        setVisible(visible + 5)
    }

    const handleFixture = (e, id) => {
        e.preventDefault()
        fetch(`http://localhost:3001/api/applications/${id}`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Something went wrong while requesting a fixture!')
            })
            .then((data) => {
                setModalData(data)
                setModalIsOpen(true)
            })
            .catch((error) => setError(error.message))
    }

    const handleModal = (e) => {
        e.preventDefault()
        setModalIsOpen(!isModalOpen)
    }

    return (
        <AppDetailsContainer>
            { error !== '' && (
                <p>{ error }</p>
            )}
            { fixtures.slice(0, visible).map(({ id, first_name, last_name, company, email, loan_amount, date_created, expiry_date }) =>
                <ListGroup key={ id } onClick={ (e) => { handleFixture(e, id) } }>
                    <li>
                        <sub>Company</sub>
                        { company }
                    </li>
                    <li>
                        <sub>Name</sub>
                        { first_name } { last_name }
                    </li>
                    <li>
                        <sub>Email</sub>
                        <a href={`mailto:${email}`}>{ email }</a>
                    </li>
                    <li>
                        <sub>Loan Amount</sub>
                        { formatNumber(loan_amount, false, true) }
                    </li>
                    <li>
                        <sub>Application Date</sub>
                        { longDate(date_created) }
                    </li>
                    <li>
                        <sub>Expiry date</sub>
                        { longDate(expiry_date) }
                    </li>
                </ListGroup>
            )}
            { visible < fixtures.length && (
                <ButtonBase onClick={ handleLoadFixtures }>
                    Load more
                </ButtonBase>
            )}
            { isModalOpen && (
                <>
                    <ModalContainer>
                        <ModalBody>
                            <ModalHeader>
                                <div className="modal-header__content">
                                    <div className="modal-header__content-avatar">
                                        <img src={ modalData.avatar } alt={ modalData.first_name + ' ' + modalData.last_name } />
                                    </div>
                                    <div className="modal-header__content-description">
                                        <div className="modal-header__content-description__company">
                                            { modalData.company }
                                        </div>
                                        <div className="modal-header__content-description__detail">
                                            <p>{ modalData.first_name } { modalData.last_name }</p>
                                            <a href={`mailto:${modalData.email}`}>{ modalData.email } </a>
                                        </div>
                                    </div>
                                    <div className="modal-header__content-loan">
                                        <div className="modal-header__content-loan__amount">
                                            <small>Loan amount</small>
                                            { formatNumber(modalData.loan_amount, false, true) }
                                        </div>
                                        <div className="modal-header__content-loan-details">
                                            <div className="modal-header__content-loan-details__item">
                                                <small>Product</small>
                                                <p>{ modalData.loan_type }</p>
                                            </div>
                                            <div className="modal-header__content-loan-details__item">
                                                <small>Application date</small>
                                                <p>{ shortDate(modalData.date_created) }</p>
                                            </div>
                                            <div className="modal-header__content-loan-details__item">
                                                <small>Expiry date</small>
                                                <p>{ shortDate(modalData.expiry_date) }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-header__action">
                                    <a role="button" onClick={ handleModal }>
                                        x
                                    </a>
                                </div>
                            </ModalHeader>
                            <ModalContent>
                                <h3>Loan History</h3>
                                <table className="modal-content__table">
                                    <thead>
                                        <tr>
                                            <th>Start date</th>
                                            <th>End date</th>
                                            <th>Principal</th>
                                            <th>Interest</th>
                                            <th>Repayment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { modalData.loan_history.map(({ id, loan_started, loan_ended, principle, interest_rate, interest }) =>
                                            <tr key={ id }>
                                                <td>{ shortDate(loan_started) }</td>
                                                <td>{ shortDate(loan_ended) }</td>
                                                <td>{ formatNumber(principle, false, true) }</td>
                                                <td>{ formatNumber(interest, false, true) }</td>
                                                <td>{ formatNumber(Number(principle) + Number(interest), false, true) }</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </ModalContent>
                        </ModalBody>
                    </ModalContainer>
                    <ModalOverlay />
                </>
            )}
        </AppDetailsContainer>
    )
}

export default Details
