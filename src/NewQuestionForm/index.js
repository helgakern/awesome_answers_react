import React from "react";

function NewQuestionForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    props.createQuestion({
      title: formData.get("title"),
      body: formData.get("body"),
    });
  }

  return (
    <form
      className="ui form clearing segment NewQuestionForm"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="title">Title</label>
        <br />
        <input name="title" id="title"></input>
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <br />
        <textarea name="body" id="body"></textarea>
      </div>
      <input
        className="ui right floated large orange button"
        type="submit"
        value="submit"
      />
    </form>
  );
}

export default NewQuestionForm;
