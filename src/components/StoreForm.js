import { Link } from "react-router-dom"

function StoreForm() {
    return (
        <main>
            <h2>Nowy sklep</h2>
            <form className="form">
                <label htmlFor="name">Nazwa:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="name" id="name" required maxLength="20" placeholder="Od 3 do 20 znaków" />
                <span id="errorName" className="errors-text"></span>

                <label htmlFor="city">Miejscowość:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="city" id="city" required maxLength="40" placeholder="Maks. 40 znaków" />
                <span id="errorCity" className="errors-text"></span>

                <label htmlFor="street">Ulica i numer/nr. mieszkania:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="street" id="street" required maxLength="135" placeholder="np. Warszawska 9A/3" />
                <span id="errorStreet" className="errors-text"></span>

                <label htmlFor="phoneNumber">Numer telefonu:</label>
                <input type="text" name="phoneNumber" id="phoneNumber" maxLength="9" placeholder="np. 111222333" />
                <span id="errorPhoneNumber" className="errors-text"></span>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" maxLength="50" placeholder="np. kowalski@example.org" />
                <span id="errorEmail" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" value="Dodaj" />
                    <Link to=".." className="form-button-cancel">Anuluj</Link>
                </div>
            </form>
        </main>
    )
}

export default StoreForm