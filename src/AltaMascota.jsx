import { useState } from 'react'

function AltaMascota() {
    const [nombre, setNombre] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [raza, setRaza] = useState('')
    const [foto, setFoto] = useState(null)
    const [telefono, setTelefono] = useState('')
    const [bozal, setBozal] = useState(false)
    const [golosinas, setGolosinas] = useState(false)

    const calcularEdad = (fecha) => {
    if (!fecha) return ''
    const nacimiento = new Date(fecha)
    const hoy = new Date()
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    const mes = hoy.getMonth() - nacimiento.getMonth()
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--
    }
    return edad
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
        nombre,
        fechaNacimiento,
        edad: calcularEdad(fechaNacimiento),
        raza,
        foto,
        telefono,
        bozal,
        golosinas,
    })
    }

    return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4">Alta de mascota</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                />
        </div>

        <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>
            <input
            type="date"
            className="form-control"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
            type="text"
            className="form-control"
            value={calcularEdad(fechaNacimiento)}
            disabled
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Raza</label>
            <input
            type="text"
            className="form-control"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Foto</label>
            <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Teléfono de contacto</label>
            <input
            type="tel"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            />
        </div>

        <div className="form-check mb-2">
            <input
            type="checkbox"
            className="form-check-input"
            id="bozal"
            checked={bozal}
            onChange={(e) => setBozal(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="bozal">
            Usa bozal
            </label>
        </div>

        <div className="form-check mb-3">
            <input
            type="checkbox"
            className="form-check-input"
            id="golosinas"
            checked={golosinas}
            onChange={(e) => setGolosinas(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="golosinas">
            Puede consumir golosinas
            </label>
        </div>

        <button type="submit" className="btn btn-primary">
            Guardar

        </button>
        </form>
    </div>
    )
}

export default AltaMascota