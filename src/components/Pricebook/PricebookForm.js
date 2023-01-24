import { Link } from "react-router-dom"

function PricebookForm() {
    return (
        <main>
            <h2>Nowa książka cenowa</h2>
            <form className="form">
                <input type="hidden" name="id" value="<%= pricebook.id %>" />
                <label htmlFor="product">Produkt: <abbr title="required" aria-label="required">*</abbr></label>
                <select name="productId" id="product" defaultValue="">
                    <option value="">-- Wybierz produkt --</option>
                </select>
                <span id="errorProduct" className="errors-text"></span>

                <label htmlFor="store">Sklep: <abbr title="required" aria-label="required">*</abbr></label>
                <select name="storeId" id="store" defaultValue="">
                    <option value="">-- Wybierz sklep --</option>
                </select>
                <span id="errorStore" className="errors-text"></span>

                <label htmlFor="price">Cena: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="number" name="price" id="price" required min="0" />
                <span id="errorPrice" className="errors-text"></span>

                <label htmlFor="validFrom">Obowiązuje od:</label>
                <input type="date" name="validFrom" id="validFrom" min="2022-10-09" max="2025-10-10" />
                <span id="errorValidFrom" className="errors-text"></span>

                <label htmlFor="validTo">Obowiązuje do:</label>
                <input type="date" name="validTo" id="validTo" min="2022-10-09" max="2025-10-10" />
                <span id="errorValidTo" className="errors-text"></span>

                <label htmlFor="quantity">Ilość: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="number" name="quantity" id="quantity" required min="0" />
                <span id="errorQuantity" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" defaultValue="Dodaj" />
                    <Link to=".." className="form-button-cancel">Anuluj</Link>
                </div>
            </form>
        </main>
    )
}

export default PricebookForm