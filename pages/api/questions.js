// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      question:
        "Does our team represent diversity of people, ideas and backgrounds?",
    },
    {
      question:
        "Have we reviewed whether the employed data is representative of those we want to serve? If no, have we taken any type of action to widen the scope of our data or mitigate potential bias in our system?",
    },
    {
      question:
        "Have we tested for fairness and disparate error rates among different user groups?",
    },
    {
      question:
        "Did we identify potential reasons that causality may not be appropriate such as confounders, missing data, non-ignorable dropout, or unblinded experiments?",
    },
    {
      question:
        "Have we discussed how trolls and malicious actors could abuse or hack our product/solution/service to harass vulnerable people?",
    },
    {
      question:
        "Do we have a way to understand if people are harmed by the results?",
    },
    {
      question: "Do we have a mechanism for redress if people are harmed by the results?"
    },
    {
      question: "Could we shut down our solution/product if it is behaving badly?"
    },
    {
      question: "Can we understand why the product is behaving badly so we can learn and not repeat the same mistakes in the future?"
    }
  ]);
};
