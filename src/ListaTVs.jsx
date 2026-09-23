import { tvs } from './tvs'

function TarjetaTV({ tv }) {
    return (
    <div className="col-md-4 mb-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{tv.marca} - {tv.pulgadas}"</h5>
            <p className="card-text">Sistema operativo: {tv.sistema_operativo}</p>
            <p className="card-text">WiFi: {tv.wifi ? 'Sí' : 'No'}</p>
        </div> 
        </div>
    </div>
    )
}

function ListaTVs() {
    const sinWifi = tvs.filter((tv) => !tv.wifi)
    const googleTV = tvs.filter((tv) => tv.sistema_operativo === 'Google TV')
    const samsungConWifi = tvs.filter((tv) => tv.marca === 'Samsung' && tv.wifi)

    return (
    <div className="container mt-5">
        <h2 className="mb-4">a) Lista completa</h2>
        <div className="row">
        {tvs.map((tv) => (
            <TarjetaTV key={tv.id} tv={tv} />
        ))}
        </div>

        <h2 className="mb-4 mt-5">b) TVs sin WiFi</h2>
        <div className="row">
        {sinWifi.map((tv) => (
            <TarjetaTV key={tv.id} tv={tv} />
        ))}
        </div>

        <h2 className="mb-4 mt-5">c) TVs con Google TV</h2>
        <div className="row">
        {googleTV.map((tv) => (
            <TarjetaTV key={tv.id} tv={tv} />
        ))}
        </div>

        <h2 className="mb-4 mt-5">d) Samsung con WiFi</h2>
        <div className="row">
        {samsungConWifi.map((tv) => (
            <TarjetaTV key={tv.id} tv={tv} />
        ))}
        </div>
    </div>
    )
}

export default ListaTVs