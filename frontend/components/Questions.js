import ReactMarkdown from "react-markdown";

const Questions = ({ questions }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl mb-3">
        {questions &&
          questions.data.map((question) => {
            return (
              <li key={question.id}>
                <div className="flex flex-col last:mb-0 font-serif">
                  <p className="mb-4 text-base">
                    <strong>Q: </strong><em>{question.attributes.question}</em> 
                  </p>
                  <p className="mb-8 text-base font-normal leading-5">
                    <ReactMarkdown>{question.attributes.answer}</ReactMarkdown>
                  </p>                  
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Questions;
