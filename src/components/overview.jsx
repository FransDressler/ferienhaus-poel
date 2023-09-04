import React from 'react';

class Overview extends React.Component {
    constructor() {
        super();
        this.state = {
          reservations: [],
        }
      }

    handleDelete = (id) => {
        fetch(`https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/deleteReservation/${id}`, { // Pass the ID as a URL parameter
        method: 'delete',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Item deleted successfully');
            // Perform any additional logic you need here
        } else {
            console.error('Error deleting item:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error deleting item:', error);
    });

          fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/reservations', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .then(reservations => this.setState({reservations: reservations}))
          .catch(err => console.log('Error fetching products:', err));
  
      };

    sendMail = (email, name, price) => {
        fetch(`https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/sendEmail`, { // Pass the ID as a URL parameter
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        name: name,
        email: email,
        price: price
    })
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Item deleted successfully');
            // Perform any additional logic you need here
        } else {
            console.error('Error deleting item:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error deleting item:', error);
    });

          fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/reservations', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
          })
          .then(response => response.json())
          .then(reservations => this.setState({reservations: reservations}))
          .catch(err => console.log('Error fetching products:', err));
  
      };

      handleStatusChange = (id,status) => {
        fetch(`https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/reservationStatusChange/${id}`, { // Pass the ID as a URL parameter
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({verify_status: status})
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Item favorite changed successfully');
            // Perform any additional logic you need here
        } else {
            console.error('Error while changing favorite:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error deleting item:', error);
    });

    fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/reservations', {
          method: 'get',
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(reservations => {
            this.setState({reservations: reservations})
        })
        .catch(err => console.log('Error fetching reservations:', err));
        
    }

    
    

    componentDidMount() {
        fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/reservations', {
          method: 'get',
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(reservations => {
            this.setState({reservations: reservations})
        })
        .catch(err => console.log('Error fetching reservations:', err));
        
    }

    render() {
      return (
        <section className='bg-teal-900'>
          <div className="pt-[7em] pb-20">
            <div className="flex flex-col align-center">
                <table class="table-auto w-full text-left">
                    <thead className="bg-teal-500 text-lg">
                        <tr className="">
                            <th className="p-4 border border-gray-400">Name</th>
                            <th className="p-4 border border-gray-400">Email</th>
                            <th className="p-4 border border-gray-400">Addresse</th>
                            <th className="p-4 border border-gray-400">Pers.</th>
                            <th className="p-4 border border-gray-400">Anmerkung</th>
                            <th className="p-4 border border-gray-400">Start</th>
                            <th className="p-4 border border-gray-400">Ende</th>
                            <th className="p-4 border border-gray-400">Haus</th>
                            <th className="p-4 border border-gray-400">Preis</th>
                            <th className="p-4 border border-gray-400">Extras</th>
                            <th className="p-4 border border-gray-400">Bezahlt?</th>
                            <th className="p-4 border border-gray-400"></th>
                            <th className="p-4 border border-gray-400"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reservations.map((reservation, index) => {
                            return(
                                <tr>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.name}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.email}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.zip} {reservation.place}, {reservation.street} {reservation.house_number}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.number_of_guests}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.remark}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.start_date.split("T")[0]}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.end_date.split("T")[0]}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.house}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">{reservation.price}</td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">
                                        {reservation.laundry ? <p className="mt-3" >Bettwäsche für {reservation.number_of_guests} Personen</p> : <p></p>}
                                        {reservation.towels ? <p className="mt-3" >Handtücher für {reservation.number_of_guests} Personen</p> : <p></p>}
                                        {reservation.visitortax ? <p className="mt-3" >Kurtaxe für {reservation.number_of_guests} Personen</p> : <p></p>}
                                    </td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0 text-center">
                                        { reservation.verify_status?     
                                        <i className="fa-solid fa-circle-check cursor-pointer" onClick={() => this.handleStatusChange(reservation.id, false)}></i> :
                                        <i className="fa-regular fa-circle-check cursor-pointer" onClick={() => this.handleStatusChange(reservation.id, true)}></i>
                                    }
                                    </td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">
                                    <button
                                      className="hover:bg-white text-teal-50 font-semibold py-2 px-4 border border-teal-200 hover:border-transparent rounded hover:text-teal-800"
                                      onClick={() => this.sendMail(reservation.email, reservation.name, reservation.price)}
                                    >
                                      Email senden
                                    </button>
                                    </td>
                                    <td key={index} className="p-2 pl-4 border border-teal-400 border-x-0 border-t-0">
                                    <button
                                      className="hover:bg-white text-teal-50 font-semibold py-2 px-4 border border-teal-200 hover:border-transparent rounded hover:text-teal-800"
                                      onClick={() => this.handleDelete(reservation.id)}
                                    >
                                      Entfernen
                                    </button>
                                    </td>
                                </tr>
                        )
                        })}
                        
                    </tbody>
                </table>
                
            </div>
          </div>
          </section>
        )
    }
}

export default Overview;