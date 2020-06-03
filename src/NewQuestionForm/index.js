import React from "react";

function NewQuestionForm(props) {
  const { newQuestionData, updateQuestionData } = props;

  function handleSubmit(event) {
    event.preventDefault();
    // const { currentTarget } = event;
    // const formData = new FormData(currentTarget);
    // props.createQuestion({
    //   title: formData.get("title"),
    //   body: formData.get("body"),
    // });
    props.createQuestion()
  }

  function handleQuestionInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget
    updateQuestionData({[name]: value})
  }

  return (
    <form
      className="ui form clearing segment NewQuestionForm"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="title">Title</label>
        <br />
        <input 
          name="title"
          id="title"
          value={newQuestionData.title}
          onChange={handleQuestionInput}
        >
        </input>
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <br />
        <textarea 
          name="body"
          id="body"
          value={newQuestionData.body}
          onChange={handleQuestionInput}
          >
        </textarea>
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
