import styles from './Spinner.module.css'
export function Spinner(){
    return(
        <div id='spinnerContainer'>
        <div className={[styles.spinnerLoad]}>
            
        </div>

        <small className={[styles.spinnerCenter]}>Tu contenido se va a mostrar en breve</small>
        </div>
    )
}