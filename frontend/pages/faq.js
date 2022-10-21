import Layout from "../components/Layout";
import Questions from "../components/Questions";
import { fetcher } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

const Faq = ({ faqs, questions, secondPartQuestion, thirdPartQuestion }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <div className="min-w-[1140px] px-4 flex flex-col font-light">
        <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
          {faqs[0].attributes.title}
        </div>
        <div className="text-2xl mb-7 uppercase font-['Helvetica']">
          {faqs[0].attributes.subtitle}
        </div>
        <Questions questions={questions} />
        <div className="text-2xl mb-7 uppercase font-['Helvetica']">
          {faqs[1].attributes.subtitle}
        </div>
        <Questions questions={secondPartQuestion} />
        <div className="text-2xl mb-7 uppercase font-['Helvetica']">
          {faqs[2].attributes.subtitle}
        </div>
        <Questions questions={thirdPartQuestion} />
      </div>
    </Layout>
  );
};

export default Faq;

export async function getServerSideProps() {
  const faqResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/faqs`
  );

  const questionResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/questions`
  );

  const secondPartQuestionResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/questions-second-parts`
  );

  const thirdPartQuestionResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/questions-third-parts`
  );

  return {
    props: {
      faqs: faqResponse.data,
      questions: questionResponse,
      secondPartQuestion: secondPartQuestionResponse,
      thirdPartQuestion: thirdPartQuestionResponse,
    },
  };
}
