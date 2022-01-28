import makeResCSS from './makeReservations.module.css';

export default function MakeReservations() {
    const getMinDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    return (
        <div className={makeResCSS.makeReservations}>

            <div className={makeResCSS.formWrapper}>
                <h2>Make a reservagtions</h2>
                <form action="">


                    <fieldset className={makeResCSS.fieldSet}>
                        <legend>date of reservation</legend>
                        <div className={makeResCSS.dateWrapper}>
                        <span className={makeResCSS.inputGroup}>
                            <label htmlFor="dateCheckIn">Date check in</label>
                            <input min={getMinDate()} type="date" className={makeResCSS.date} name='dateCheckIn'/>
                        </span>
                        <span className={makeResCSS.inputGroup}>
                            <label htmlFor="dateCheckOut">Date check out</label>
                            <input min={getMinDate()}  type="date" className={makeResCSS.date} name='dateCheckOut'/>
                        </span>
                        </div>
                        <div className={makeResCSS.selectsWrapper}>
                    <span className={makeResCSS.inputGroup}>
                        <label htmlFor="">Accommodation</label>
                        <select className={makeResCSS.select} name="accommodation" id="accommodation">
                            <option value="">suite - 3 simple bed</option>
                            <option value="">simple chamber - 1 simple bed</option>
                            <option value="">simple chamber - 2 double</option>
                        </select>

                    </span>

                    <span className={makeResCSS.inputGroup}>
                        <label htmlFor="">Pension</label>
                        <select className={makeResCSS.select} name="pension" id="pension">
                            <option value="">full</option>
                            <option value="">half - breakfast/lucch</option>
                            <option value="">half - breakfast/dinner</option>
                        </select>
                        
                    </span>

                    </div>

                    </fieldset>
                   
                </form>
            </div>
        </div>
    );
}
