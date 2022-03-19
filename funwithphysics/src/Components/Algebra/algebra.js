import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Algebra() {
  // topics_data
  const Topics = [
    {
      topic: "Permutation And Combination",
      details: [`A permutation of a set is a loosely defined organisation of its members into a sequence or linear order, or a rearranging of its elements if the set is already sorted.
      The word "permutation" also refers to the act or process of changing the linear order of an ordered set.It is denoted by nPr.`,
        <br />,
        `On the other hand,Combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`
      ],
      formula: [`nPr = n!/(n-r)!`,
        <br />,
        `nCr = n!/r!(n-r)!`
      ],

      process: [
        "To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.",
        <br />,
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
        <br />,
      ],
    },
    {
      topic: "Progression",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "AP = N + d * (n-1) <br> GP = N * r ^ (n-1)",
      process:
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
    },
    {
      topic: "Statistics",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "AP = N + d * (n-1) <br> GP = N * r ^ (n-1)",
      process:
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
    },
    {
      topic: "Binomial",
      details:"The binomial theorem states the principle for expanding the algebraic expression (x + y)<sup>n</sup> and expresses it as a sum of the terms involving individual exponents of variables x and y.",
    },
    {
      topic: "Matrices and Determinants",
    },
    {
      topic: "Mathematical Induction",
      details: [`A proof by mathematical induction is a powerful method that is used to prove that a conjecture (theory, proposition, speculation, belief, statement, formula, etc...) is true for all cases.
      Just because a conjecture is true for many examples does not mean it will be for all cases.`,
      <br />,
      <br />,
      `Mathematical induction is a mathematical proof technique. It is essentially used to prove that a statement P(n) holds for every natural number n = 0, 1, 2, 3, ... ; that is, the overall statement is a sequence of infinitely many cases P(0), P(1), P(2), P(3)`,
      <br />,
      <br />,
      `The simplest and most common form of mathematical induction infers that a statement involving a natural number n (that is, an integer n ≥ 0 or 1) holds for all values of n. The proof consists of two steps:

      The initial or base case: prove that the statement holds for 0, or 1.
      The induction step, inductive step, or step case: prove that for every n, if the statement holds for n, then it holds for n + 1. In other words, assume that the statement holds for some arbitrary natural number n, and prove that the statement holds for n + 1.
      The hypothesis in the inductive step, that the statement holds for a particular n, is called the induction hypothesis or inductive hypothesis. To prove the inductive step, one assumes the induction hypothesis for n and then uses this assumption to prove that the statement holds for n + 1.
      
      Authors who prefer to define natural numbers to begin at 0 use that value in the base case; those who define natural numbers to begin at 1 use that value.`,
      <br />,
      <br />


      ],
      formula: [`In order to show that the conjecture is true for all cases, we can prove it by mathematical induction as outlined below.`,
      <br />,
      <br />,
      `Important notes and explanations about a proof by mathematical induction`,
      <br />,
      <img src="https://www.basic-mathematics.com/images/proof-by-mathematical-induction.png" alt="" />,
      <br />
      ],
    },
    {
      topic: "Probability",
      details: [`The probability of an event represents the likelihood of the occurence of the event.

          For an unbiased event(where all outcomes are equally likely to occur), the probability of the event E is the number of outcomes in E divided by the number of outcomes in the Sample Space. 
          The probability of an event is a number between 0 and 1, where  0 indicates impossibility of the occurence of the event and 1 indicates that the event will surely occur.     
      
            `],
      formula: [`P(E) = n(E)/n(S)`,
        <br />,
        `where n(E) is the number of times the event E occurs and n(S) is the total possible occurence`],
      process: ["To calculate the probability of occurence of an equally-likely event,",
        <br />, "we need to determine the following quantities:",
        <br />, "n(E): Number of outcomes favoring the occurence of the event",
        <br />, "n(S): Total Number of outcomes",
        <br />, "Probability of occurence then becomes P(E)=n(E)/n(S)"
      ],
    },
    {
      topic: 'Complex Numbers',
      details: `A number of the form x + iy, where x and y are real numbers, is called a complex number, x is called real part and y is called imaginary part of the complex number i.e. Re(Z) = x and Im(Z) = y.`,
      formula: 'Z = x + iy',
      process:
        'Addition = (x1 + x2) + i (y1 + y2)',
    },
    {
      topic: "Exponents",
      details: [
        "Exponentiation refers to repeated multiplication of a given number with itself certain number of times.Square-Root of a given number is defined as the factor of the number which when multiplied with itself gives the given number.Cube-Root of a given number is the number which when multiplied thrice with itself gives the given number."
      ],
      formula: [
        "(y)^n=(y)*(y)*(y)*(y)...n times"
      ],
      process: [
        "To find x raised to the power n we need to multiply x with itself n times."
      ],
    },
    {
      topic: "Quadratic Equation",
      details: `Quadratic equations are second-degree algebraic expressions and are of the form ax2 + bx + c = 0.`,
      formula: "For quadratic equation ax^2 +bx+c, the roots are <br/> x1,x2=[-b ± √(b² - 4ac)]/2a",
      process: `The quadratic equation in its standard form is ax2 + bx + c = 0.
      The discriminant of the quadratic equation is D = b^2 - 4ac
      For D > 0 the roots are real and distinct.
      For D = 0 the roots are real and equal.
      For D < 0 the roots do not exist, or the roots are imaginary.`,
    },
    {
      topic: "Sets And Relations",
      details: ["A Set is a well-defined collection of distinct objects denoted by capital letters like A, Q, R etc.",
        "There are different kinds of sets like:Empty set, Equal set, Equivalence set. Sets are said to be empty if they contain no element.Sets are said to be equal if they contain the same elements and number elements are also the same.",
        "A relation between two sets is a collection of ordered pairs containing one element from each set. If an element x is from the first set and the  element y is from the second set, then the elements are said to be related if the ordered pair (x,y) is present in the relation."],
      formula: ["If the number of elements in a set is n,the number of subsets is given as  :  ",
        2, <sup>n</sup>, <br />,
        "If A  has  m elements and  B has n elements ,A x B has m x n elements and hence the number of different relations from A to B is ", 2, <sup>m*n</sup>],
      process: ["Using the formulae given and using the concept of Venn Diagram, we can easily find different sets out of 2 sets A and B depending on the condition."],

    },
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Algebra | Math | Tech N Science</title>
          <meta name="description" content="Explore the Algebra calculator" />
          <meta name="keywords" content="Algebra" />
        </Helmet>
        <div className="mech__header">
          <h1>Algebra-Topics</h1>
        </div>
        <div className="mech__topics-card">
          {Topics.map((data) => (
            <React.Fragment key={data.topic}>
              <Card key={data.topic} style={{ width: "18rem" }}>
                <Card.Body>
                  {data.details === undefined ? (
                    <Link
                      className="btn"
                      disabled={true}
                      to={`/algebra/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/algebra/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  )}
                  <div style={{ padding: "0.3em" }}>
                    {data.details === undefined ? (
                      <Card.Text>
                        {" "}
                        Will be{" "}
                        <span style={{ fontWeight: "bold", color: "#19165b" }}>
                          available
                        </span>{" "}
                        soon...
                      </Card.Text>
                    ) : (
                      <Card.Text> </Card.Text>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
