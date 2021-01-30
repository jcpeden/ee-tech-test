function Form() {
  return (
    <div className="form">
      <h2>Fizz Buzz Application</h2>
      <form class="form">
        <div class="form__row">
          <label for="start-value" class="form__label">
            Start Value
          </label>
          <input
            required="required"
            type="text"
            name="start"
            id="start-value"
            class="form__field form__input"
          />
        </div>
        <div class="form__row">
          <label for="end-value" class="form__label">
            End Value
          </label>
          <input
            required="required"
            type="text"
            name="end"
            id="end-value"
            class="form__field form__input"
          />
        </div>
        <div class="form__row">
          <button class="button button--fizzbuzz">Go!</button>
        </div>
      </form>
      <p class="error" hidden>
        Something went wrong, please try again
      </p>
      <p class="output" hidden>
        1, 2, 3, 4, fizz
      </p>
    </div>
  );
}

export default Form;
