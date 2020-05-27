import Question from "../components/Question";

function Questionnaire() {
  return (
    <div>
      <h1 className="text-3xl">List of questions</h1>
      <Question content="Does our team represent diversity of people, ideas and backgrounds?" />
      <Question content="Have we reviewed whether the employed data is representative of those we want to serve? If no, have we taken any type of action to widen the scope of our data or mitigate potential bias in our system?" />
      <Question content="Have we tested for fairness and disparate error rates among different user groups?" />
      <Question content="Did we identify potential reasons that causality may not be appropriate such as confounders, missing data, non-ignorable dropout, or unblinded experiments?" />
      <Question content="Have we discussed how trolls and malicious actors could abuse or hack our product/solution/service to harass vulnerable people?" />
      <Question content="Do we have a way to understand if people are harmed by the results? "/>
      <Question content="Do we have a mechanism for redress if people are harmed by the results?" />
      <Question content="Could we shut down our solution/product if it is behaving badly?" />
      <Question content="Can we understand why the product is behaving badly so we can learn and not repeat the same mistakes in the future?" />
    </div>
  );
}

export default Questionnaire;
