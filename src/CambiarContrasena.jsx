import { useState } from 'react'

function CambiarContrasena() {
    const [contrasenaActual, setContrasenaActual] = useState('')
    const [contrasenaNueva, setContrasenaNueva] = useState('')
    const [confirmarContrasena, setConfirmarContrasena] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()

    if (contrasenaNueva !== confirmarContrasena) {
        alert('Las contraseñas no coinciden')
        return
    }

    console.log('Contraseña actual:', contrasenaActual)
    console.log('Contraseña nueva:', contrasenaNueva)
}

return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
    <h2 className="mb-4">Cambiar contraseña</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className="form-label">Contraseña actual</label>
        <input
            type="password"
            className="form-control"
            value={contrasenaActual}
            onChange={(e) => setContrasenaActual(e.target.value)}
            required
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Contraseña nueva</label>
        <input
            type="password"
            className="form-control"
            value={contrasenaNueva}
            onChange={(e) => setContrasenaNueva(e.target.value)}
            required
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Confirmar contraseña nueva</label>
        <input
            type="password"
            className="form-control"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
        />
        </div>

        <button type="submit" className="btn btn-primary">
            Cambiar contraseña
        </button>
        </form>
    </div>
    )
}

export default CambiarContrasena