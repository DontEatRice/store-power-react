import { Link } from "react-router-dom"

function ProductForm() {
    return (
        <main>
            <h2>Nowy produkt</h2>
            <form className="form">
                <label htmlFor="name">Nazwa: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="name" id="name" required maxLength="20" placeholder="Od 3 do 20 znaków" />
                <span id="errorName" className="errors-text"></span>

                <label htmlFor="description">Opis:</label>
                <textarea name="description" id="description" rows="5" cols="40"></textarea>
                <span id="errorDescription" className="errors-text"></span>

                <label htmlFor="imageLink">Link do obrazka: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="imageLink" id="imageLink" required placeholder="np. https://example.com/image.png" />
                <span id="errorImageLink" className="errors-text"></span>

                <label htmlFor="unitOfMeasure">Jednostka miary: <abbr title="required" aria-label="required">*</abbr></label>
                <select name="unitOfMeasureId" id="unitOfMeasure" defaultValue="">
                    <option value="">-- Wybierz jednostkę --</option>
                </select>
                <span id="errorUnitOfMeasure" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" value="Dodaj" />
                    <Link to=".." className="form-button-cancel">Anuluj</Link>
                </div>
            </form>
        </main>
    )
}

export default ProductForm