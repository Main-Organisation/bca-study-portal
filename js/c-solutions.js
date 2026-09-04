// C SOLUTIONS — EXERCISE CONTENT
//
// Structure:
// SOLUTIONS["topic-id"] = [
//   `Exercise 1 ...`,
//   `Exercise 2 ...`
// ];

const SOLUTIONS = {};

// ==========================================================
// MODULE 1 — ALGORITHM
// ==========================================================

SOLUTIONS["s-m1-algorithm"] = [

  // ========================================================
  // Exercise 1
  // ========================================================

  `
  <h2>Algorithm — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to add two numbers.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input A and B</li>
    <li>Calculate SUM = A + B</li>
    <li>Display SUM</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm takes two numbers as input, adds them,
    and displays the sum.
  </p>
  `,


  // ========================================================
  // Exercise 2
  // ========================================================

  `
  <h2>Algorithm — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to find the largest of two numbers.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input A and B</li>
    <li>Compare A and B</li>
    <li>If A is greater than B, display A</li>
    <li>Otherwise, display B</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm compares the two input values and
    displays the greater number.
  </p>
  `,


  // ========================================================
  // Exercise 3
  // ========================================================

  `
  <h2>Algorithm — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to find the area of a rectangle.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input length and width</li>
    <li>Calculate AREA = length × width</li>
    <li>Display AREA</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm accepts the length and width of a rectangle,
    calculates its area, and displays the result.
  </p>
  `,


  // ========================================================
  // Exercise 4
  // ========================================================

  `
  <h2>Algorithm — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to calculate the simple interest.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input Principal, Rate and Time</li>
    <li>Calculate SI = (Principal × Rate × Time) / 100</li>
    <li>Display SI</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm takes the principal amount, rate of interest,
    and time as input and applies the simple interest formula.
  </p>
  `,


  // ========================================================
  // Exercise 5
  // ========================================================

  `
  <h2>Algorithm — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to check whether a number is even or odd.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input N</li>
    <li>Calculate N % 2</li>
    <li>If the remainder is 0, display "Even"</li>
    <li>Otherwise, display "Odd"</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm uses the modulus operator to find the remainder
    after dividing the number by 2. A remainder of 0 means the
    number is even; otherwise it is odd.
  </p>
  `,


  // ========================================================
  // Exercise 6
  // ========================================================

  `
  <h2>Algorithm — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to check whether a number is positive,
    negative, or zero.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input N</li>
    <li>If N is greater than 0, display "Positive"</li>
    <li>Else if N is less than 0, display "Negative"</li>
    <li>Otherwise, display "Zero"</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm checks the value of N against zero and identifies
    whether the number is positive, negative, or zero.
  </p>
  `,


  // ========================================================
  // Exercise 7
  // ========================================================

  `
  <h2>Algorithm — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to find the largest of three numbers.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input A, B and C</li>
    <li>Compare A, B and C</li>
    <li>If A is greater than or equal to B and C, display A</li>
    <li>Else if B is greater than or equal to A and C, display B</li>
    <li>Otherwise, display C</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm compares all three input values and identifies
    the greatest number.
  </p>
  `,


  // ========================================================
  // Exercise 8
  // ========================================================

  `
  <h2>Algorithm — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to calculate the factorial of a number.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input N</li>
    <li>Set FACT = 1</li>
    <li>Repeat from 1 to N and multiply FACT by each number</li>
    <li>Display FACT</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm initializes the factorial value to 1 and
    repeatedly multiplies it by each number from 1 to N.
  </p>
  `,


  // ========================================================
  // Exercise 9
  // ========================================================

  `
  <h2>Algorithm — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to reverse a given number.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input N</li>
    <li>Set REV = 0</li>
    <li>Extract the last digit of N</li>
    <li>Add the digit to REV</li>
    <li>Remove the last digit from N</li>
    <li>Repeat until N becomes 0</li>
    <li>Display REV</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm repeatedly extracts the last digit of the number
    and builds the reversed number using those digits.
  </p>
  `,


  // ========================================================
  // Exercise 10
  // ========================================================

  `
  <h2>Algorithm — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to find the sum of the first N natural numbers.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input N</li>
    <li>Set SUM = 0</li>
    <li>Repeat from 1 to N and add each number to SUM</li>
    <li>Display SUM</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm starts with a sum of zero and adds each natural
    number from 1 to N. The final value is displayed as the result.
  </p>
  `

];
// ==========================================================
// MODULE 1 — FLOWCHART
// ==========================================================

SOLUTIONS["s-m1-flowchart"] = [

  // ========================================================
  // Exercise 1
  // ========================================================

  `
  <h2>Flowchart — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to add two numbers.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart-add.png"
      alt="Flowchart to add two numbers"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart starts by taking two numbers as input, adds them,
    displays the sum, and then stops.
  </p>
  `,


  // ========================================================
  // Exercise 2
  // ========================================================

  `
  <h2>Flowchart — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to find the largest of two numbers.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/Largest_Between_two.png"
      alt="Flowchart to find the largest of two numbers"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart accepts two numbers, compares them, and displays
    the greater number.
  </p>
  `,


  // ========================================================
  // Exercise 3
  // ========================================================

  `
  <h2>Flowchart — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to calculate the area of a rectangle.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/calculate_the_are_of_rectangle.png"
      alt="Flowchart to calculate area of a rectangle"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart takes the length and width as input, calculates
    the area using length × width, displays the result, and stops.
  </p>
  `,


  // ========================================================
  // Exercise 4
  // ========================================================

  `
  <h2>Flowchart — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to calculate simple interest.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flow_Calculate_Simple_Interest.png"
      alt="Flowchart to calculate simple interest"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart accepts the principal amount, rate and time,
    applies the simple interest formula, displays the result,
    and stops.
  </p>
  `,


  // ========================================================
  // Exercise 5
  // ========================================================

  `
  <h2>Flowchart — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to check whether a number is even or odd.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart_to_check_whether_a_number_is_even_or_odd.png"
      alt="Flowchart to check whether a number is even or odd"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart divides the number by 2 and checks the remainder.
    A remainder of 0 indicates an even number; otherwise the number
    is odd.
  </p>
  `,


  // ========================================================
  // Exercise 6
  // ========================================================

  `
  <h2>Flowchart — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to check whether a number is positive,
    negative, or zero.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart_to_check_whether_a_number_is_positive_negative_zero.png"
      alt="Flowchart to check positive negative or zero"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart compares the input number with zero and determines
    whether it is positive, negative, or zero.
  </p>
  `,


  // ========================================================
  // Exercise 7
  // ========================================================

  `
  <h2>Flowchart — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to find the largest of three numbers.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart-largest-three.png"
      alt="Flowchart to find the largest of three numbers"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart compares the three input values and determines
    which one is the largest.
  </p>
  `,


  // ========================================================
  // Exercise 8
  // ========================================================

  `
  <h2>Flowchart — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to calculate the factorial of a number.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart-factorial.png"
      alt="Flowchart to calculate factorial"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart initializes the factorial value, repeatedly
    multiplies it by the numbers from 1 to N, and displays the result.
  </p>
  `,


  // ========================================================
  // Exercise 9
  // ========================================================

  `
  <h2>Flowchart — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to reverse a given number.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart-reverse-number.png"
      alt="Flowchart to reverse a number"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart repeatedly extracts the last digit of the number
    and constructs the reversed number until the original number
    becomes zero.
  </p>
  `,


  // ========================================================
  // Exercise 10
  // ========================================================

  `
  <h2>Flowchart — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to find the sum of the first N natural numbers.
  </p>

  <h3>Flowchart</h3>

  <div class="solution-image">
    <img
      src="images/flowchart-sum-natural-numbers.png"
      alt="Flowchart to find sum of first N natural numbers"
    >
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart starts with SUM = 0 and repeatedly adds the
    natural numbers from 1 to N. The final sum is then displayed.
  </p>
  `

];


// ==========================================================
// MODULE 1 — SIMPLE PROBLEMS
// ==========================================================

SOLUTIONS["s-m1-simple-problems"] = [

  `
  <h2>Simple Problems — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm and flowchart to calculate the sum of two numbers.
  </p>

  <h3>Solution</h3>

  <p>
    This problem can be solved using the basic input → process → output
    approach.
  </p>
  `

];


// ==========================================================
// MODULE 2 — INTRODUCTION TO C
// ==========================================================

SOLUTIONS["s-m2-introduction-c"] = [

  `
  <h2>Introduction to C — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to display a welcome message for C programming.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    // display a welcome message
    printf("Welcome to C Programming.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program starts from <code>main()</code> and uses
    <code>printf()</code> to display the welcome message.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>
      Welcome to C Programming.
    </p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — FEATURES OF C
// ==========================================================

SOLUTIONS["s-m2-features-c"] = [

  `
  <h2>Features of C — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a simple C program that demonstrates the structured nature
    of a C program by using a separate function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void display()
{
    // function displays the message
    printf("C is a structured programming language.\\n");
}

int main()
{
    display();  // call the function

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program uses a separate function named <code>display()</code>
    for a specific task. The <code>main()</code> function calls it.
    This demonstrates how a program can be divided into smaller parts.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>
      C is a structured programming language.
    </p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — BASIC C PROGRAM STRUCTURE
// ==========================================================

SOLUTIONS["s-m2-program-structure"] = [

  `
  <h2>Basic C Program Structure — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to accept two numbers and display their sum.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    // calculate the sum
    printf("Sum = %d\\n", a + b);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program contains the header file, <code>main()</code> function,
    variable declarations, input statement, processing statement,
    output statement, and <code>return 0;</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 15</p>
    <p><strong>Sum = 25</strong></p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — C TOKENS
// ==========================================================

SOLUTIONS["s-m2-tokens"] = [

  `
  <h2>C Tokens — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program and identify the keywords, identifiers,
    constants and operators used in it.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a = 10;
    int b = 20;
    int sum = a + b;

    // display the result
    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    In this program, <code>int</code> and <code>return</code> are keywords,
    <code>a</code>, <code>b</code> and <code>sum</code> are identifiers,
    <code>10</code> and <code>20</code> are constants, and
    <code>+</code> and <code>=</code> are operators.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Sum = 30</strong></p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — DATA TYPES
// ==========================================================

SOLUTIONS["s-m2-data-types"] = [

  `
  <h2>Data Types — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store and display an integer,
    a decimal value and a character.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int age = 20;              // integer value
    float percentage = 82.5f;  // decimal value
    char grade = 'A';          // single character

    printf("Age = %d\\n", age);
    printf("Percentage = %.1f\\n", percentage);
    printf("Grade = %c\\n", grade);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program uses <code>int</code> for a whole number,
    <code>float</code> for a decimal value and <code>char</code>
    for a single character.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Age = 20</p>
    <p>Percentage = 82.5</p>
    <p>Grade = A</p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — OPERATORS AND PRECEDENCE
// ==========================================================

SOLUTIONS["s-m2-operators-precedence"] = [

  `
  <h2>C Operators and Precedence — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate operator precedence using
    an arithmetic expression.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a = 5, b = 3, c = 2;
    int result;

    // multiplication is evaluated before addition
    result = a + b * c;

    printf("Result = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiplication has higher precedence than addition, so
    <code>b * c</code> is evaluated before <code>a +</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Result = 11</strong></p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — TYPE CONVERSION
// ==========================================================

SOLUTIONS["s-m2-type-conversion"] = [

  `
  <h2>Type Conversion — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program that demonstrates implicit and explicit
    type conversion between an integer and a float.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num = 5;
    float value = 9.75f;

    float implicitResult = num;       // int to float automatically
    int explicitResult = (int)value;  // float to int using casting

    printf("Implicit conversion = %.2f\\n", implicitResult);
    printf("Explicit conversion = %d\\n", explicitResult);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Assigning the integer to a float performs implicit conversion.
    The expression <code>(int)value</code> performs explicit conversion
    and removes the fractional part.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Implicit conversion = 5.00</p>
    <p>Explicit conversion = 9</p>
  </div>
  `

];


// ==========================================================
// MODULE 2 — IF
// ==========================================================

SOLUTIONS["s-m2-if"] = [

  `
  <h2>if — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is positive.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // check whether the number is positive
    if (num &gt; 0)
        printf("The number is positive.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>if</code> statement executes its statement only when
    the condition <code>num &gt; 0</code> is true.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 15</p>
    <p><strong>The number is positive.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is negative.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // check whether the number is negative
    if (num &lt; 0)
        printf("The number is negative.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition <code>num &lt; 0</code> becomes true when the
    entered number is less than zero.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: -8</p>
    <p><strong>The number is negative.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is even.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // check whether the number is even
    if (num % 2 == 0)
        printf("The number is even.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The modulus operator <code>%</code> returns the remainder.
    If <code>num % 2 == 0</code>, the number is even.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 24</p>
    <p><strong>The number is even.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is divisible by 5.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // check divisibility by 5
    if (num % 5 == 0)
        printf("The number is divisible by 5.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    If the remainder obtained by dividing the number by 5 is zero,
    the number is divisible by 5.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 25</p>
    <p><strong>The number is divisible by 5.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a person is eligible to vote.
    A person is eligible if the age is 18 or more.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int age;

    printf("Enter age: ");
    scanf("%d", &amp;age);

    // check voting eligibility
    if (age &gt;= 18)
        printf("Eligible to vote.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition <code>age &gt;= 18</code> checks whether the person
    has reached the required age.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter age: 21</p>
    <p><strong>Eligible to vote.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a student has scored 50 or more marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    // check whether marks are 50 or more
    if (marks &gt;= 50)
        printf("The student has passed.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>if</code> condition checks whether the marks are
    greater than or equal to 50.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks: 72</p>
    <p><strong>The student has passed.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is greater than 100.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // check whether the number is greater than 100
    if (num &gt; 100)
        printf("The number is greater than 100.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition <code>num &gt; 100</code> is true only when
    the entered value is greater than 100.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 150</p>
    <p><strong>The number is greater than 100.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a character is an uppercase letter.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char ch;

    printf("Enter a character: ");
    scanf(" %c", &amp;ch);

    // check whether the character is uppercase
    if (ch &gt;= 'A' &amp;&amp; ch &lt;= 'Z')
        printf("The character is uppercase.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition checks whether the character lies between
    <code>'A'</code> and <code>'Z'</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a character: G</p>
    <p><strong>The character is uppercase.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a year is a leap year.
    Consider a year divisible by 400, or divisible by 4 but not by 100.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int year;

    printf("Enter year: ");
    scanf("%d", &amp;year);

    // check leap year condition
    if ((year % 400 == 0) || (year % 4 == 0 &amp;&amp; year % 100 != 0))
        printf("The year is a leap year.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition checks the standard leap-year rules using
    arithmetic and logical operators.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter year: 2024</p>
    <p><strong>The year is a leap year.</strong></p>
  </div>
  `,

  `
  <h2>if — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is a three-digit number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // check whether the number has three digits
    if ((num &gt;= 100 &amp;&amp; num &lt;= 999) ||
        (num &lt;= -100 &amp;&amp; num &gt;= -999))
        printf("The number is a three-digit number.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition checks both positive and negative values having
    exactly three digits.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 456</p>
    <p><strong>The number is a three-digit number.</strong></p>
  </div>
  `

];

// ==========================================================
// MODULE 2 — IF-ELSE
// ==========================================================

SOLUTIONS["s-m2-if-else"] = [

  `
  <h2>if-else — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is positive or negative.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Check whether the number is positive
    if (num &gt;= 0)
        printf("The number is positive.\\n");
    else
        printf("The number is negative.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>if</code> block executes when the condition is true.
    Otherwise, the <code>else</code> block executes.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: -12</p>
    <p><strong>The number is negative.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Check divisibility by 2
    if (num % 2 == 0)
        printf("The number is even.\\n");
    else
        printf("The number is odd.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    If the remainder after division by 2 is zero, the number is even;
    otherwise, it is odd.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 17</p>
    <p><strong>The number is odd.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a student has passed or failed.
    A student passes if marks are 50 or more.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    // Check passing condition
    if (marks &gt;= 50)
        printf("Pass.\\n");
    else
        printf("Fail.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program compares the marks with 50. If the condition is true,
    the student passes; otherwise, the student fails.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks: 42</p>
    <p><strong>Fail.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the greater of two numbers using if-else.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    // Compare the two numbers
    if (a &gt; b)
        printf("%d is greater.\\n", a);
    else
        printf("%d is greater or equal.\\n", b);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The two numbers are compared. If <code>a</code> is greater than
    <code>b</code>, <code>a</code> is displayed; otherwise, <code>b</code>
    is displayed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 25 40</p>
    <p><strong>40 is greater or equal.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a person is eligible to vote.
    A person is eligible if the age is 18 or more.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int age;

    printf("Enter age: ");
    scanf("%d", &amp;age);

    // Check voting eligibility
    if (age &gt;= 18)
        printf("Eligible to vote.\\n");
    else
        printf("Not eligible to vote.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The condition checks whether the age is at least 18.
    Both possible outcomes are handled by if-else.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter age: 16</p>
    <p><strong>Not eligible to vote.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is divisible by both 5 and 11.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Check divisibility by both 5 and 11
    if (num % 5 == 0 &amp;&amp; num % 11 == 0)
        printf("The number is divisible by both 5 and 11.\\n");
    else
        printf("The number is not divisible by both 5 and 11.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The logical AND operator <code>&amp;&amp;</code> requires both
    divisibility conditions to be true.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 55</p>
    <p><strong>The number is divisible by both 5 and 11.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to determine whether a character is a vowel or a consonant.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char ch;

    printf("Enter a character: ");
    scanf(" %c", &amp;ch);

    // Check whether the character is a vowel
    if (ch == 'a' || ch == 'e' || ch == 'i' ||
        ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I' ||
        ch == 'O' || ch == 'U')
        printf("The character is a vowel.\\n");
    else
        printf("The character is a consonant.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The character is compared with all five vowels in both lowercase
    and uppercase forms.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a character: E</p>
    <p><strong>The character is a vowel.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a year is a leap year.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int year;

    printf("Enter year: ");
    scanf("%d", &amp;year);

    // Check leap year condition
    if ((year % 400 == 0) ||
        (year % 4 == 0 &amp;&amp; year % 100 != 0))
        printf("Leap year.\\n");
    else
        printf("Not a leap year.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A year is considered a leap year when it is divisible by 400,
    or divisible by 4 but not by 100.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter year: 2024</p>
    <p><strong>Leap year.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a person receives a discount.
    A discount is given when the purchase amount is 5000 or more.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float amount;

    printf("Enter purchase amount: ");
    scanf("%f", &amp;amount);

    // Check discount eligibility
    if (amount &gt;= 5000)
        printf("Discount is applicable.\\n");
    else
        printf("Discount is not applicable.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The purchase amount is compared with the minimum amount required
    for the discount.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter purchase amount: 6500</p>
    <p><strong>Discount is applicable.</strong></p>
  </div>
  `,

  `
  <h2>if-else — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number lies within the range
    1 to 100.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Check whether the number lies in the range
    if (num &gt;= 1 &amp;&amp; num &lt;= 100)
        printf("The number is within the range.\\n");
    else
        printf("The number is outside the range.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The logical AND operator ensures that both conditions are true:
    the number must be at least 1 and at most 100.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 75</p>
    <p><strong>The number is within the range.</strong></p>
  </div>
  `

];



// ==========================================================
// PLACEHOLDER SECTIONS FOR FUTURE TOPICS
// ==========================================================

SOLUTIONS["s-m2-nested-if"] = [

  `
  <h2>Nested if — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is positive and, if it is positive,
    further check whether it is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // First check whether the number is positive
    if (num &gt; 0)
    {
        // Further check whether the positive number is even or odd
        if (num % 2 == 0)
            printf("The number is positive and even.\\n");
        else
            printf("The number is positive and odd.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The inner <code>if</code> statement is executed only when the outer
    <code>if</code> condition is true. This is called nested decision-making.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 24</p>
    <p><strong>The number is positive and even.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a person is eligible for a driving
    test. If the age is 18 or more, further check whether the person has
    a valid learner licence.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int age, licence;

    printf("Enter age: ");
    scanf("%d", &amp;age);

    // First check the minimum age
    if (age &gt;= 18)
    {
        printf("Do you have a learner licence? (1 = Yes, 0 = No): ");
        scanf("%d", &amp;licence);

        // Check licence only for eligible age
        if (licence == 1)
            printf("Eligible for the driving test.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The second condition is checked only after the first condition
    confirms that the age requirement is satisfied.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter age: 20</p>
    <p>Do you have a learner licence? (1 = Yes, 0 = No): 1</p>
    <p><strong>Eligible for the driving test.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to determine whether a student is eligible for an
    examination. The student must have attendance of at least 75%.
    If eligible, further check whether the student has paid the examination fee.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float attendance;
    int feePaid;

    printf("Enter attendance percentage: ");
    scanf("%f", &amp;attendance);

    // First check attendance
    if (attendance &gt;= 75)
    {
        printf("Has examination fee been paid? (1 = Yes, 0 = No): ");
        scanf("%d", &amp;feePaid);

        // Check fee payment
        if (feePaid == 1)
            printf("Student is eligible for the examination.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The inner condition is dependent on the outer attendance condition.
    Therefore, the program uses nested <code>if</code> statements.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter attendance percentage: 82</p>
    <p>Has examination fee been paid? (1 = Yes, 0 = No): 1</p>
    <p><strong>Student is eligible for the examination.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest of three numbers using nested if statements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b, c, largest;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;a, &amp;b, &amp;c);

    // Compare the first two numbers
    if (a &gt; b)
    {
        // Compare a with c
        if (a &gt; c)
            largest = a;
        else
            largest = c;
    }
    else
    {
        // Compare b with c
        if (b &gt; c)
            largest = b;
        else
            largest = c;
    }

    printf("Largest = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The first <code>if</code> compares <code>a</code> and <code>b</code>.
    A second condition then compares the larger candidate with <code>c</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 25 68 42</p>
    <p><strong>Largest = 68</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is a two-digit number and,
    if it is, determine whether it is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Check whether the number is two-digit
    if ((num &gt;= 10 &amp;&amp; num &lt;= 99) ||
        (num &lt;= -10 &amp;&amp; num &gt;= -99))
    {
        // Determine whether the two-digit number is even or odd
        if (num % 2 == 0)
            printf("The two-digit number is even.\\n");
        else
            printf("The two-digit number is odd.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The outer condition first checks the number of digits. Only when the
    number is two-digit does the inner condition check even or odd.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 48</p>
    <p><strong>The two-digit number is even.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to determine a student's result using nested if.
    First check whether the student has passed in the subject. If passed,
    check whether the marks are 75 or more for distinction.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    // First check whether the student has passed
    if (marks &gt;= 50)
    {
        // Check distinction after passing
        if (marks &gt;= 75)
            printf("Pass with distinction.\\n");
        else
            printf("Pass.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The inner condition is checked only if the minimum passing marks
    condition is satisfied.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks: 82</p>
    <p><strong>Pass with distinction.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a number is positive, and if positive,
    determine whether it is greater than 100 or not.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // First check whether the number is positive
    if (num &gt; 0)
    {
        // Check whether it is greater than 100
        if (num &gt; 100)
            printf("Positive number greater than 100.\\n");
        else
            printf("Positive number but not greater than 100.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The second decision is made only when the first condition confirms
    that the number is positive.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 150</p>
    <p><strong>Positive number greater than 100.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate a discount based on purchase amount.
    First check whether the amount is at least 1000. If yes, further check
    whether it is at least 5000 for a higher discount.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float amount;

    printf("Enter purchase amount: ");
    scanf("%f", &amp;amount);

    // Check minimum amount for discount
    if (amount &gt;= 1000)
    {
        // Check higher discount category
        if (amount &gt;= 5000)
            printf("10%% discount applicable.\\n");
        else
            printf("5%% discount applicable.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The outer condition identifies customers eligible for a discount.
    The inner condition separates them into two discount categories.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter purchase amount: 6500</p>
    <p><strong>10% discount applicable.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a year is valid for leap-year
    processing. If it is divisible by 4, further check the special
    conditions involving 100 and 400.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int year;

    printf("Enter year: ");
    scanf("%d", &amp;year);

    // First check divisibility by 4
    if (year % 4 == 0)
    {
        // Handle century years separately
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
                printf("Leap year.\\n");
            else
                printf("Not a leap year.\\n");
        }
        else
        {
            printf("Leap year.\\n");
        }
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Nested conditions are used to handle the special case of century years.
    A year divisible by 100 needs an additional check for divisibility by 400.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter year: 2000</p>
    <p><strong>Leap year.</strong></p>
  </div>
  `,

  `
  <h2>Nested if — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest among three numbers and also
    check whether the largest number is positive or negative.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b, c, largest;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;a, &amp;b, &amp;c);

    // Find the largest number
    if (a &gt; b)
    {
        if (a &gt; c)
            largest = a;
        else
            largest = c;
    }
    else
    {
        if (b &gt; c)
            largest = b;
        else
            largest = c;
    }

    printf("Largest = %d\\n", largest);

    // Check the sign of the largest number
    if (largest &gt;= 0)
    {
        if (largest == 0)
            printf("The largest number is zero.\\n");
        else
            printf("The largest number is positive.\\n");
    }
    else
    {
        printf("The largest number is negative.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This program demonstrates multiple levels of nested decision-making.
    It first finds the largest value and then applies another decision
    process to determine its sign.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: -20 -5 -15</p>
    <p><strong>Largest = -5</strong></p>
    <p><strong>The largest number is negative.</strong></p>
  </div>
  `
];
SOLUTIONS["s-m2-switch-case"] = [

  `
  <h2>switch-case — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to display the day of the week using a number from
    1 to 7 entered by the user.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int day;

    printf("Enter day number (1-7): ");
    scanf("%d", &amp;day);

    // Select the day using switch
    switch (day)
    {
        case 1:
            printf("Monday\\n");
            break;

        case 2:
            printf("Tuesday\\n");
            break;

        case 3:
            printf("Wednesday\\n");
            break;

        case 4:
            printf("Thursday\\n");
            break;

        case 5:
            printf("Friday\\n");
            break;

        case 6:
            printf("Saturday\\n");
            break;

        case 7:
            printf("Sunday\\n");
            break;

        default:
            printf("Invalid day number.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>switch</code> statement compares the value of <code>day</code>
    with each case. The matching case is executed and <code>break</code>
    prevents execution from continuing into the next case.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter day number (1-7): 3</p>
    <p><strong>Wednesday</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using switch-case to display the name of a month
    based on a number from 1 to 12.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int month;

    printf("Enter month number (1-12): ");
    scanf("%d", &amp;month);

    // Select month name
    switch (month)
    {
        case 1:
            printf("January\\n");
            break;

        case 2:
            printf("February\\n");
            break;

        case 3:
            printf("March\\n");
            break;

        case 4:
            printf("April\\n");
            break;

        case 5:
            printf("May\\n");
            break;

        case 6:
            printf("June\\n");
            break;

        case 7:
            printf("July\\n");
            break;

        case 8:
            printf("August\\n");
            break;

        case 9:
            printf("September\\n");
            break;

        case 10:
            printf("October\\n");
            break;

        case 11:
            printf("November\\n");
            break;

        case 12:
            printf("December\\n");
            break;

        default:
            printf("Invalid month number.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each month number is associated with a separate case. The
    <code>default</code> case handles invalid input.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter month number (1-12): 8</p>
    <p><strong>August</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a simple calculator using switch-case for addition, subtraction,
    multiplication and division.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float a, b;
    char op;

    printf("Enter first number: ");
    scanf("%f", &amp;a);

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &amp;op);

    printf("Enter second number: ");
    scanf("%f", &amp;b);

    // Select operation using switch
    switch (op)
    {
        case '+':
            printf("Result = %.2f\\n", a + b);
            break;

        case '-':
            printf("Result = %.2f\\n", a - b);
            break;

        case '*':
            printf("Result = %.2f\\n", a * b);
            break;

        case '/':
            if (b != 0)
                printf("Result = %.2f\\n", a / b);
            else
                printf("Division by zero is not allowed.\\n");
            break;

        default:
            printf("Invalid operator.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The operator entered by the user determines which case is executed.
    Division also checks for zero before performing the operation.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first number: 20</p>
    <p>Enter operator (+, -, *, /): *</p>
    <p>Enter second number: 5</p>
    <p><strong>Result = 100.00</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using switch-case to determine whether a character
    is a vowel.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char ch;

    printf("Enter a character: ");
    scanf(" %c", &amp;ch);

    // Check vowel using switch
    switch (ch)
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            printf("The character is a vowel.\\n");
            break;

        default:
            printf("The character is not a vowel.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple case labels can perform the same operation. Here, all vowel
    characters share a common statement.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a character: E</p>
    <p><strong>The character is a vowel.</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to display the type of traffic signal based on
    the entered character: R for Red, Y for Yellow and G for Green.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char signal;

    printf("Enter signal (R/Y/G): ");
    scanf(" %c", &amp;signal);

    // Identify traffic signal
    switch (signal)
    {
        case 'R':
        case 'r':
            printf("Stop\\n");
            break;

        case 'Y':
        case 'y':
            printf("Wait\\n");
            break;

        case 'G':
        case 'g':
            printf("Go\\n");
            break;

        default:
            printf("Invalid signal.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The switch statement maps each signal character to its corresponding
    instruction.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter signal (R/Y/G): G</p>
    <p><strong>Go</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using switch-case to calculate the area of a
    selected shape: circle, rectangle or square.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int choice;
    float radius, length, width, side;

    printf("1. Circle\\n");
    printf("2. Rectangle\\n");
    printf("3. Square\\n");
    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    // Select shape
    switch (choice)
    {
        case 1:
            printf("Enter radius: ");
            scanf("%f", &amp;radius);
            printf("Area = %.2f\\n", 3.14159 * radius * radius);
            break;

        case 2:
            printf("Enter length and width: ");
            scanf("%f %f", &amp;length, &amp;width);
            printf("Area = %.2f\\n", length * width);
            break;

        case 3:
            printf("Enter side: ");
            scanf("%f", &amp;side);
            printf("Area = %.2f\\n", side * side);
            break;

        default:
            printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The value of <code>choice</code> determines which shape calculation
    is performed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Circle</p>
    <p>2. Rectangle</p>
    <p>3. Square</p>
    <p>Enter choice: 2</p>
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using switch-case to display the number of days
    in a month for a given month number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int month;

    printf("Enter month number (1-12): ");
    scanf("%d", &amp;month);

    // Group months having the same number of days
    switch (month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            printf("31 days.\\n");
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            printf("30 days.\\n");
            break;

        case 2:
            printf("28 or 29 days.\\n");
            break;

        default:
            printf("Invalid month number.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple case labels can be grouped when they produce the same output.
    This avoids writing the same statement repeatedly.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter month number (1-12): 4</p>
    <p><strong>30 days.</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to display the grade description based on a grade
    character entered by the user: A, B, C, D or F.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char grade;

    printf("Enter grade: ");
    scanf(" %c", &amp;grade);

    // Display grade description
    switch (grade)
    {
        case 'A':
        case 'a':
            printf("Excellent performance.\\n");
            break;

        case 'B':
        case 'b':
            printf("Very good performance.\\n");
            break;

        case 'C':
        case 'c':
            printf("Good performance.\\n");
            break;

        case 'D':
        case 'd':
            printf("Needs improvement.\\n");
            break;

        case 'F':
        case 'f':
            printf("Fail.\\n");
            break;

        default:
            printf("Invalid grade.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each grade character is mapped to a corresponding description using
    switch-case.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter grade: B</p>
    <p><strong>Very good performance.</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a menu-driven C program using switch-case to perform addition,
    subtraction, multiplication and division based on the user's choice.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int choice;
    float a, b;

    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");

    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    printf("Enter two numbers: ");
    scanf("%f %f", &amp;a, &amp;b);

    // Perform selected calculation
    switch (choice)
    {
        case 1:
            printf("Result = %.2f\\n", a + b);
            break;

        case 2:
            printf("Result = %.2f\\n", a - b);
            break;

        case 3:
            printf("Result = %.2f\\n", a * b);
            break;

        case 4:
            if (b != 0)
                printf("Result = %.2f\\n", a / b);
            else
                printf("Division by zero is not allowed.\\n");
            break;

        default:
            printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The menu gives the user multiple choices, and the selected case
    performs the corresponding arithmetic operation.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Addition</p>
    <p>2. Subtraction</p>
    <p>3. Multiplication</p>
    <p>4. Division</p>
    <p>Enter choice: 1</p>
    <p>Enter two numbers: 25 15</p>
    <p><strong>Result = 40.00</strong></p>
  </div>
  `,

  `
  <h2>switch-case — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using switch-case to perform a simple unit conversion:
    1 for kilometres to metres, 2 for metres to centimetres, and
    3 for kilograms to grams.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int choice;
    float value;

    printf("1. Kilometres to Metres\\n");
    printf("2. Metres to Centimetres\\n");
    printf("3. Kilograms to Grams\\n");

    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    printf("Enter value: ");
    scanf("%f", &amp;value);

    // Perform selected conversion
    switch (choice)
    {
        case 1:
            printf("Result = %.2f metres\\n", value * 1000);
            break;

        case 2:
            printf("Result = %.2f centimetres\\n", value * 100);
            break;

        case 3:
            printf("Result = %.2f grams\\n", value * 1000);
            break;

        default:
            printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The switch statement selects one conversion formula according to
    the user's choice.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Kilometres to Metres</p>
    <p>2. Metres to Centimetres</p>
    <p>3. Kilograms to Grams</p>
    <p>Enter choice: 1</p>
    <p>Enter value: 2.5</p>
    <p><strong>Result = 2500.00 metres</strong></p>
  </div>
  `
];
SOLUTIONS["s-m2-while"] = [

  // ========================================================
  // Exercise 1
  // ========================================================

  `
  <h2>while Loop — Exercise 1</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to reverse the digits of a given number using
    a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the working of a <code>while</code> loop.</li>
    <li>Extract the last digit using the modulus operator.</li>
    <li>Build a reversed number step by step.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Use <code>% 10</code> to extract the last digit and
    <code>/= 10</code> to remove the last digit.
  </p>

  <h3>Theory</h3>

  <p>
    A <code>while</code> loop repeatedly executes a block of statements
    while its condition remains true. Here, the loop continues until
    all digits of the number have been processed.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, reverse = 0, digit;

    // Read the number
    printf("Enter a number to reverse: ");
    scanf("%d", &amp;num);

    // Extract digits and build the reversed number
    while (num != 0)
    {
        digit = num % 10;                 // get last digit
        reverse = reverse * 10 + digit;   // add digit to reverse
        num /= 10;                        // remove last digit
    }

    printf("Reversed number = %d\\n", reverse);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number to reverse: 12345</p>
    <p><strong>Reversed number = 54321</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The condition is checked before every iteration, so the loop stops
    when the number becomes zero.
  </p>
  `,


  // ========================================================
  // Exercise 2
  // ========================================================

  `
  <h2>while Loop — Exercise 2</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to count the number of digits in a given number
    using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a <code>while</code> loop for repeated processing.</li>
    <li>Understand how integer division removes the last digit.</li>
    <li>Count the digits of a number.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Repeatedly divide the number by 10 and increase the counter by 1
    until the number becomes zero.
  </p>

  <h3>Theory</h3>

  <p>
    Each integer division by 10 removes the last digit of a positive
    integer. The number of such divisions required to reach zero gives
    the total number of digits.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, count = 0;

    // Read the number
    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Count digits
    while (num != 0)
    {
        num /= 10;   // remove the last digit
        count++;
    }

    printf("Number of digits = %d\\n", count);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12345</p>
    <p><strong>Number of digits = 5</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    This approach directly demonstrates how a loop can repeatedly
    process each digit of an integer.
  </p>
  `,


  // ========================================================
  // Exercise 3
  // ========================================================

  `
  <h2>while Loop — Exercise 3</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the sum of the digits of a given
    number using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Extract individual digits from a number.</li>
    <li>Perform repeated addition using a loop.</li>
    <li>Understand digit-processing logic.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Extract the last digit using <code>% 10</code>, add it to
    <code>sum</code>, and remove the last digit using <code>/= 10</code>.
  </p>

  <h3>Theory</h3>

  <p>
    The modulus operator returns the last digit of an integer when it
    is divided by 10. By repeatedly extracting and adding these digits,
    the sum of all digits can be calculated.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, digit, sum = 0;

    // Read the number
    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Add all digits
    while (num != 0)
    {
        digit = num % 10;  // extract last digit
        sum += digit;      // add digit to sum
        num /= 10;         // remove last digit
    }

    printf("Sum of digits = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12345</p>
    <p><strong>Sum of digits = 15</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The same digit-extraction pattern is useful in many number-based
    programming problems.
  </p>
  `,


  // ========================================================
  // Exercise 4
  // ========================================================

  `
  <h2>while Loop — Exercise 4</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to check whether a given number is a palindrome
    using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Reverse a number using a loop.</li>
    <li>Compare the original number with its reverse.</li>
    <li>Apply multiple operations inside a loop.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Store the original number, create its reverse using
    <code>% 10</code> and <code>/= 10</code>, then compare both values.
  </p>

  <h3>Theory</h3>

  <p>
    A palindrome number reads the same from left to right and right to
    left. The program checks this by creating the reverse of the number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, original, reverse = 0, digit;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    original = num;

    // Create the reverse
    while (num != 0)
    {
        digit = num % 10;
        reverse = reverse * 10 + digit;
        num /= 10;
    }

    // Compare original and reverse
    if (original == reverse)
        printf("%d is a Palindrome.\\n", original);
    else
        printf("%d is not a Palindrome.\\n", original);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 121</p>
    <p><strong>121 is a Palindrome.</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    A copy of the original number is required because the working loop
    changes the value of the input number.
  </p>
  `,


  // ========================================================
  // Exercise 5
  // ========================================================

  `
  <h2>while Loop — Exercise 5</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to check whether a given number is an Armstrong
    number using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Process digits repeatedly using a loop.</li>
    <li>Calculate the cube of each digit.</li>
    <li>Compare the calculated sum with the original number.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Extract each digit using <code>% 10</code>, add its cube to
    <code>sum</code>, and remove the digit using <code>/= 10</code>.
  </p>

  <h3>Theory</h3>

  <p>
    A three-digit Armstrong number is a number whose value is equal to
    the sum of the cubes of its digits. For example,
    153 = 1³ + 5³ + 3³.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, original, digit, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    original = num;

    // Calculate sum of cubes of digits
    while (num != 0)
    {
        digit = num % 10;
        sum += digit * digit * digit;
        num /= 10;
    }

    // Compare result with original number
    if (sum == original)
        printf("%d is an Armstrong number.\\n", original);
    else
        printf("%d is not an Armstrong number.\\n", original);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 153</p>
    <p><strong>153 is an Armstrong number.</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    This exercise is intended for the basic three-digit Armstrong
    number concept taught at this level.
  </p>
  `,


  // ========================================================
  // Exercise 6
  // ========================================================

  `
  <h2>while Loop — Exercise 6</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to check whether a given number is prime using
    a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a loop to test possible divisors.</li>
    <li>Understand divisibility and remainder.</li>
    <li>Use a counter to track successful divisions.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Check divisibility from 1 up to the given number using the modulus
    operator and count the number of divisors.
  </p>

  <h3>Theory</h3>

  <p>
    A prime number has exactly two positive divisors: 1 and itself.
    The program uses a <code>while</code> loop to test possible divisors.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, i = 1, count = 0;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Count divisors
    while (i &lt;= num)
    {
        if (num % i == 0)
            count++;

        i++;
    }

    if (num &gt; 1 &amp;&amp; count == 2)
        printf("%d is a Prime number.\\n", num);
    else
        printf("%d is not a Prime number.\\n", num);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 17</p>
    <p><strong>17 is a Prime number.</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    This version emphasizes the basic idea of checking divisors,
    making it suitable for first-year beginners.
  </p>
  `,


  // ========================================================
  // Exercise 7
  // ========================================================

  `
  <h2>while Loop — Exercise 7</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the factorial of a number using
    a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a loop for repeated multiplication.</li>
    <li>Understand factorial calculation.</li>
    <li>Update a result variable during each iteration.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Initialize <code>fact = 1</code> and multiply it by each number
    from 1 to <code>n</code>.
  </p>

  <h3>Theory</h3>

  <p>
    The factorial of a non-negative integer N is the product of all
    positive integers from 1 to N. It is written as
    <code>N!</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int n, i = 1;
    long long fact = 1;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    // Calculate factorial
    while (i &lt;= n)
    {
        fact *= i;
        i++;
    }

    printf("Factorial = %lld\\n", fact);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Factorial = 120</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The factorial of 0 is also defined as 1. For large values,
    the factorial may exceed the range of the selected data type.
  </p>
  `,


  // ========================================================
  // Exercise 8
  // ========================================================

  `
  <h2>while Loop — Exercise 8</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to generate the Fibonacci series up to N terms
    using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand repeated sequence generation.</li>
    <li>Update multiple variables inside a loop.</li>
    <li>Use a loop counter to control repetitions.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Start with 0 and 1. Each next term is obtained by adding the
    previous two terms.
  </p>

  <h3>Theory</h3>

  <p>
    In the Fibonacci series, each term is the sum of the two previous
    terms. The sequence starts with 0 and 1.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int n, count = 1;
    int first = 0, second = 1, next;

    printf("Enter number of terms: ");
    scanf("%d", &amp;n);

    // Generate Fibonacci series
    while (count &lt;= n)
    {
        printf("%d ", first);

        next = first + second;
        first = second;
        second = next;

        count++;
    }

    printf("\\n");

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of terms: 7</p>
    <p><strong>0 1 1 2 3 5 8</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The loop is controlled by the number of terms rather than by
    the value of a number being reduced.
  </p>
  `,


  // ========================================================
  // Exercise 9
  // ========================================================

  `
  <h2>while Loop — Exercise 9</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the sum of the first N natural
    numbers using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a counter-controlled loop.</li>
    <li>Perform repeated addition.</li>
    <li>Understand how the loop variable changes after each iteration.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Start with <code>sum = 0</code> and add each number from 1 to N.
  </p>

  <h3>Theory</h3>

  <p>
    Natural numbers begin with 1. Their sum can be calculated by
    repeatedly adding each number until N is reached.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int n, i = 1, sum = 0;

    printf("Enter N: ");
    scanf("%d", &amp;n);

    // Add natural numbers from 1 to N
    while (i &lt;= n)
    {
        sum += i;
        i++;
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter N: 10</p>
    <p><strong>Sum = 55</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    This exercise shows a simple counter-controlled <code>while</code>
    loop and is useful for understanding initialization, condition,
    body, and update.
  </p>
  `,


  // ========================================================
  // Exercise 10
  // ========================================================

  `
  <h2>while Loop — Exercise 10</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to print the multiplication table of a given
    number using a <code>while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a counter variable with a <code>while</code> loop.</li>
    <li>Perform repeated multiplication.</li>
    <li>Generate structured output using a loop.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Start the counter from 1 and continue until it reaches 10.
  </p>

  <h3>Theory</h3>

  <p>
    A multiplication table can be generated by repeatedly multiplying
    a fixed number by consecutive integers. A <code>while</code> loop
    avoids writing the same statement ten times.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, i = 1;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Print table from 1 to 10
    while (i &lt;= 10)
    {
        printf("%d x %d = %d\\n", num, i, num * i);
        i++;
    }

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p>
      <strong>
        5 x 1 = 5<br>
        5 x 2 = 10<br>
        5 x 3 = 15<br>
        5 x 4 = 20<br>
        5 x 5 = 25<br>
        5 x 6 = 30<br>
        5 x 7 = 35<br>
        5 x 8 = 40<br>
        5 x 9 = 45<br>
        5 x 10 = 50
      </strong>
    </p>
  </div>

  <h3>Note</h3>

  <p>
    The counter is initialized before the loop and updated at the
    end of each iteration. This is a basic example of a
    counter-controlled <code>while</code> loop.
  </p>
  `

];
SOLUTIONS["s-m2-do-while"] = [

  // ========================================================
  // Exercise 1
  // ========================================================

  `
  <h2>do-while Loop — Exercise 1</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to display numbers from 1 to 10 using a
    <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the basic working of a <code>do-while</code> loop.</li>
    <li>Use a counter variable with a loop.</li>
    <li>Understand that the loop body executes before the condition is checked.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Initialize the counter with 1, print it, increment it, and
    continue while the counter is less than or equal to 10.
  </p>

  <h3>Theory</h3>

  <p>
    A <code>do-while</code> loop executes its body first and checks
    the condition afterwards. Therefore, the loop body executes
    at least once.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    // Display numbers from 1 to 10
    do
    {
        printf("%d ", i);
        i++;
    }
    while (i &lt;= 10);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>1 2 3 4 5 6 7 8 9 10</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    Even if the condition is false initially, the body of a
    <code>do-while</code> loop executes once.
  </p>
  `,


  // ========================================================
  // Exercise 2
  // ========================================================

  `
  <h2>do-while Loop — Exercise 2</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the sum of the first N natural
    numbers using a <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a <code>do-while</code> loop for repeated addition.</li>
    <li>Understand counter-controlled repetition.</li>
    <li>Update the sum during every iteration.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Start with <code>sum = 0</code> and <code>i = 1</code>. Add
    <code>i</code> to the sum and increment <code>i</code>.
  </p>

  <h3>Theory</h3>

  <p>
    The sum of the first N natural numbers is obtained by adding
    each number from 1 through N. The <code>do-while</code> loop
    performs the calculation at least once.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int n, i = 1, sum = 0;

    // Read the limit
    printf("Enter N: ");
    scanf("%d", &amp;n);

    // Calculate the sum
    if (n &gt;= 1)
    {
        do
        {
            sum += i;
            i++;
        }
        while (i &lt;= n);
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter N: 10</p>
    <p><strong>Sum = 55</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The counter starts at 1 and continues until it reaches N.
  </p>
  `,


  // ========================================================
  // Exercise 3
  // ========================================================

  `
  <h2>do-while Loop — Exercise 3</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the factorial of a number using
    a <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Perform repeated multiplication using a loop.</li>
    <li>Understand factorial calculation.</li>
    <li>Use a loop variable to control repetition.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Initialize <code>fact = 1</code> and multiply it by each number
    from 1 to N.
  </p>

  <h3>Theory</h3>

  <p>
    The factorial of N is the product of all positive integers from
    1 to N. It is represented as <code>N!</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int n, i = 1;
    long long fact = 1;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    // Calculate factorial
    if (n &gt;= 1)
    {
        do
        {
            fact *= i;
            i++;
        }
        while (i &lt;= n);
    }

    printf("Factorial = %lld\\n", fact);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Factorial = 120</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The factorial of 0 is defined as 1. The condition is checked
    only after the loop body executes.
  </p>
  `,


  // ========================================================
  // Exercise 4
  // ========================================================

  `
  <h2>do-while Loop — Exercise 4</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to print the multiplication table of a given
    number using a <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use a loop for repeated multiplication.</li>
    <li>Generate structured output.</li>
    <li>Understand counter updates.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Start the counter from 1 and continue up to 10.
  </p>

  <h3>Theory</h3>

  <p>
    A multiplication table repeatedly multiplies a fixed number by
    consecutive integers. A <code>do-while</code> loop can be used
    to perform these repeated operations.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, i = 1;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Print multiplication table
    do
    {
        printf("%d x %d = %d\\n", num, i, num * i);
        i++;
    }
    while (i &lt;= 10);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p>
      <strong>
        5 x 1 = 5<br>
        5 x 2 = 10<br>
        5 x 3 = 15<br>
        5 x 4 = 20<br>
        5 x 5 = 25<br>
        5 x 6 = 30<br>
        5 x 7 = 35<br>
        5 x 8 = 40<br>
        5 x 9 = 45<br>
        5 x 10 = 50
      </strong>
    </p>
  </div>

  <h3>Note</h3>

  <p>
    The loop prints one complete multiplication step before checking
    the condition.
  </p>
  `,


  // ========================================================
  // Exercise 5
  // ========================================================

  `
  <h2>do-while Loop — Exercise 5</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the sum of digits of a given
    number using a <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Extract digits using the modulus operator.</li>
    <li>Perform repeated addition.</li>
    <li>Understand digit-processing with a loop.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Extract the last digit using <code>% 10</code>, add it to
    <code>sum</code>, and remove it using <code>/= 10</code>.
  </p>

  <h3>Theory</h3>

  <p>
    The modulus operator returns the last digit when an integer is
    divided by 10. This process can be repeated until all digits
    have been processed.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, digit, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Process each digit
    do
    {
        digit = num % 10;
        sum += digit;
        num /= 10;
    }
    while (num != 0);

    printf("Sum of digits = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12345</p>
    <p><strong>Sum of digits = 15</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    Unlike <code>while</code>, this loop processes at least one digit,
    which is especially visible when the input is 0.
  </p>
  `,


  // ========================================================
  // Exercise 6
  // ========================================================

  `
  <h2>do-while Loop — Exercise 6</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to reverse a given number using a
    <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Extract digits from an integer.</li>
    <li>Build a reversed number.</li>
    <li>Use an exit-controlled loop for digit processing.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Extract the last digit using <code>% 10</code>, add it to the
    reversed number, and remove the last digit using <code>/= 10</code>.
  </p>

  <h3>Theory</h3>

  <p>
    Reversing a number involves processing its digits from right to
    left and constructing a new number from those digits.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, digit, reverse = 0;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Reverse the number
    do
    {
        digit = num % 10;
        reverse = reverse * 10 + digit;
        num /= 10;
    }
    while (num != 0);

    printf("Reversed number = %d\\n", reverse);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12345</p>
    <p><strong>Reversed number = 54321</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The loop body executes before the condition is checked, making
    <code>do-while</code> an exit-controlled loop.
  </p>
  `,


  // ========================================================
  // Exercise 7
  // ========================================================

  `
  <h2>do-while Loop — Exercise 7</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to check whether a given number is even or odd
    using a <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use the modulus operator in a conditional check.</li>
    <li>Understand the role of a loop in repeated validation.</li>
    <li>Apply <code>if-else</code> inside a <code>do-while</code> loop.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Take a number, check <code>num % 2</code>, display the result,
    and ask whether the user wants to check another number.
  </p>

  <h3>Theory</h3>

  <p>
    A <code>do-while</code> loop is useful when an operation must be
    performed at least once. Here, the user is given the opportunity
    to check a number before the continuation condition is evaluated.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, choice;

    do
    {
        // Read the number
        printf("Enter a number: ");
        scanf("%d", &amp;num);

        // Check even or odd
        if (num % 2 == 0)
            printf("%d is Even.\\n", num);
        else
            printf("%d is Odd.\\n", num);

        // Ask whether to continue
        printf("Enter 1 to continue, 0 to stop: ");
        scanf("%d", &amp;choice);

    }
    while (choice == 1);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12</p>
    <p><strong>12 is Even.</strong></p>
    <p>Enter 1 to continue, 0 to stop: 0</p>
  </div>

  <h3>Note</h3>

  <p>
    The program demonstrates a practical reason for using
    <code>do-while</code>: the user must get at least one chance
    to perform the operation.
  </p>
  `,


  // ========================================================
  // Exercise 8
  // ========================================================

  `
  <h2>do-while Loop — Exercise 8</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a menu-driven C program using <code>do-while</code> to
    perform addition, subtraction, multiplication and division.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Build a simple menu-driven program.</li>
    <li>Combine <code>do-while</code> and <code>switch-case</code>.</li>
    <li>Handle invalid choices and division by zero.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Display the menu at least once, read the choice, perform the
    selected operation, and repeat until the user chooses Exit.
  </p>

  <h3>Theory</h3>

  <p>
    A <code>do-while</code> loop is well suited for menu-driven
    programs because the menu must be displayed before the program
    can ask whether the user wants to continue.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int choice;
    float a, b;

    do
    {
        // Display menu
        printf("\\n1. Addition\\n");
        printf("2. Subtraction\\n");
        printf("3. Multiplication\\n");
        printf("4. Division\\n");
        printf("5. Exit\\n");

        printf("Enter your choice: ");
        scanf("%d", &amp;choice);

        if (choice &gt;= 1 &amp;&amp; choice &lt;= 4)
        {
            printf("Enter two numbers: ");
            scanf("%f %f", &amp;a, &amp;b);
        }

        switch (choice)
        {
            case 1:
                printf("Result = %.2f\\n", a + b);
                break;

            case 2:
                printf("Result = %.2f\\n", a - b);
                break;

            case 3:
                printf("Result = %.2f\\n", a * b);
                break;

            case 4:
                if (b != 0)
                    printf("Result = %.2f\\n", a / b);
                else
                    printf("Error: Division by zero\\n");
                break;

            case 5:
                printf("Exiting program.\\n");
                break;

            default:
                printf("Invalid choice.\\n");
        }

    }
    while (choice != 5);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>
      1. Addition<br>
      2. Subtraction<br>
      3. Multiplication<br>
      4. Division<br>
      5. Exit
    </p>

    <p>Enter your choice: 1</p>
    <p>Enter two numbers: 10 20</p>
    <p><strong>Result = 30.00</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    Always ensure that the menu's Exit option and the loop's
    termination condition use the same value.
  </p>
  `,


  // ========================================================
  // Exercise 9
  // ========================================================

  `
  <h2>do-while Loop — Exercise 9</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to find the largest of a series of numbers
    entered by the user using a <code>do-while</code> loop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Compare values repeatedly.</li>
    <li>Maintain the largest value during execution.</li>
    <li>Use a <code>do-while</code> loop for repeated input.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Read the first number as the initial largest value. Then read
    additional numbers and update the largest value whenever a
    bigger number is found.
  </p>

  <h3>Theory</h3>

  <p>
    A running maximum stores the largest value found so far.
    Every new input is compared with this value and replaces it
    when necessary.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int n, i = 1, num, largest;

    printf("How many numbers? ");
    scanf("%d", &amp;n);

    printf("Enter number 1: ");
    scanf("%d", &amp;largest);

    i = 2;

    // Compare remaining numbers
    if (n &gt; 1)
    {
        do
        {
            printf("Enter number %d: ", i);
            scanf("%d", &amp;num);

            if (num &gt; largest)
                largest = num;

            i++;
        }
        while (i &lt;= n);
    }

    printf("Largest number = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>How many numbers? 4</p>
    <p>Enter number 1: 12</p>
    <p>Enter number 2: 25</p>
    <p>Enter number 3: 18</p>
    <p>Enter number 4: 30</p>
    <p><strong>Largest number = 30</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    The first input is stored separately so that it can be used as
    the initial value of <code>largest</code>.
  </p>
  `,


  // ========================================================
  // Exercise 10
  // ========================================================

  `
  <h2>do-while Loop — Exercise 10</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that repeatedly accepts a positive number and
    calculates its square. The program should continue until the
    user chooses to stop.
  </p>

  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand repeated user interaction.</li>
    <li>Use <code>do-while</code> for menu-like repetition.</li>
    <li>Combine input, calculation and a continuation condition.</li>
  </ul>

  <h3>Hint</h3>

  <p>
    Read a number, calculate its square, then ask the user whether
    another calculation is required.
  </p>

  <h3>Theory</h3>

  <p>
    The <code>do-while</code> loop is useful when a task must be
    performed at least once and the decision to continue is made
    after the task is completed.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num, choice;

    do
    {
        // Read the number
        printf("Enter a number: ");
        scanf("%d", &amp;num);

        // Display the square
        printf("Square = %d\\n", num * num);

        // Ask whether to continue
        printf("Enter 1 to continue, 0 to stop: ");
        scanf("%d", &amp;choice);

    }
    while (choice == 1);

    printf("Program ended.\\n");

    return 0;
}
  </div>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 7</p>
    <p><strong>Square = 49</strong></p>
    <p>Enter 1 to continue, 0 to stop: 0</p>
    <p><strong>Program ended.</strong></p>
  </div>

  <h3>Note</h3>

  <p>
    This exercise demonstrates the practical use of an
    exit-controlled loop where the user decides whether another
    iteration is required.
  </p>
  `

];
SOLUTIONS["s-m2-for"] = [

  `
  <h2>Exercise 1: Print Numbers from 1 to 10</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program using a for loop to display numbers from 1 to 10.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand the basic syntax and working of a for loop.</p>

  <h3>Hint</h3>
  <p>Initialize the loop variable with 1 and continue until it reaches 10.</p>

  <h3>Theory</h3>
  <p>A for loop is useful when the number of iterations is known in advance. It combines initialization, condition and update in a single statement.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Display numbers from 1 to 10
    for (i = 1; i &lt;= 10; i++)
    {
        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 3 4 5 6 7 8 9 10</pre>

  <h3>Note</h3>
  <p>The loop runs exactly 10 times because the condition is checked for each value of <code>i</code>.</p>
  `,

  `
  <h2>Exercise 2: Display Even Numbers from 1 to 20</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program using a for loop to display all even numbers between 1 and 20.</p>

  <h3>Learning Outcomes</h3>
  <p>Use a for loop together with the modulus operator to filter values.</p>

  <h3>Hint</h3>
  <p>Check whether each number is divisible by 2 using <code>%</code>.</p>

  <h3>Theory</h3>
  <p>An even number gives remainder 0 when divided by 2. The for loop can examine each number in the required range.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Check every number from 1 to 20
    for (i = 1; i &lt;= 20; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d ", i);
        }
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">2 4 6 8 10 12 14 16 18 20</pre>

  <h3>Note</h3>
  <p>The condition inside the loop ensures that only even numbers are displayed.</p>
  `,

  `
  <h2>Exercise 3: Sum of First N Natural Numbers</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to calculate the sum of the first N natural numbers using a for loop.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand accumulation of values inside a loop.</p>

  <h3>Hint</h3>
  <p>Start the sum with 0 and add each number from 1 to N.</p>

  <h3>Theory</h3>
  <p>An accumulator variable stores the result obtained during repeated iterations of a loop.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i, sum = 0;

    printf("Enter N: ");
    scanf("%d", &amp;n);

    // Add numbers from 1 to N
    for (i = 1; i &lt;= n; i++)
    {
        sum = sum + i;
    }

    printf("Sum = %d", sum);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter N: 5
Sum = 15</pre>

  <h3>Note</h3>
  <p>For N = 5, the calculation is 1 + 2 + 3 + 4 + 5 = 15.</p>
  `,

  `
  <h2>Exercise 4: Multiplication Table</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program using a for loop to print the multiplication table of a number entered by the user.</p>

  <h3>Learning Outcomes</h3>
  <p>Use a counter-controlled loop for repeated arithmetic operations.</p>

  <h3>Hint</h3>
  <p>Run the loop from 1 to 10 and multiply the number by the loop variable.</p>

  <h3>Theory</h3>
  <p>A for loop is convenient when a task has a fixed number of repetitions, such as printing ten lines of a multiplication table.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    // Generate multiplication table
    for (i = 1; i &lt;= 10; i++)
    {
        printf("%d x %d = %d\\n", n, i, n * i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter a number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50</pre>

  <h3>Note</h3>
  <p>The loop executes exactly 10 times.</p>
  `,

  `
  <h2>Exercise 5: Factorial of a Number</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to calculate the factorial of a number using a for loop.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand repeated multiplication and use of an accumulator.</p>

  <h3>Hint</h3>
  <p>Initialize factorial to 1 and multiply it by every number from 1 to N.</p>

  <h3>Theory</h3>
  <p>The factorial of a positive integer N is the product of all integers from 1 to N. It is written as N!.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i;
    long long factorial = 1;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    // Calculate factorial
    for (i = 1; i &lt;= n; i++)
    {
        factorial = factorial * i;
    }

    printf("Factorial = %lld", factorial);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter a number: 5
Factorial = 120</pre>

  <h3>Note</h3>
  <p>5! = 5 × 4 × 3 × 2 × 1 = 120.</p>
  `,

  `
  <h2>Exercise 6: Reverse a Number</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to reverse a given number using a for loop.</p>

  <h3>Learning Outcomes</h3>
  <p>Practice digit extraction and repeated processing using a loop.</p>

  <h3>Hint</h3>
  <p>Extract the last digit using <code>% 10</code> and remove it using integer division by 10.</p>

  <h3>Theory</h3>
  <p>A number can be processed digit by digit. Each extracted digit is added to the reverse in the correct position.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, digit, reverse = 0;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    // Process digits until the number becomes zero
    for (; n != 0; n = n / 10)
    {
        digit = n % 10;
        reverse = reverse * 10 + digit;
    }

    printf("Reversed number = %d", reverse);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter a number: 1234
Reversed number = 4321</pre>

  <h3>Note</h3>
  <p>The initialization part of the for loop is omitted because the required variables are already initialized.</p>
  `,

  `
  <h2>Exercise 7: Find the Largest Number in a Series</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to read N numbers and find the largest number using a for loop.</p>

  <h3>Learning Outcomes</h3>
  <p>Use a loop for repeated input and comparison.</p>

  <h3>Hint</h3>
  <p>Store the first number as the current largest and compare the remaining numbers with it.</p>

  <h3>Theory</h3>
  <p>Repeated comparison can be used to find the maximum value in a collection of numbers.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i, num, largest;

    printf("Enter how many numbers: ");
    scanf("%d", &amp;n);

    printf("Enter number 1: ");
    scanf("%d", &amp;largest);

    // Compare remaining numbers
    for (i = 2; i &lt;= n; i++)
    {
        printf("Enter number %d: ", i);
        scanf("%d", &amp;num);

        if (num &gt; largest)
        {
            largest = num;
        }
    }

    printf("Largest = %d", largest);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter how many numbers: 5
Enter number 1: 12
Enter number 2: 45
Enter number 3: 7
Enter number 4: 31
Enter number 5: 20
Largest = 45</pre>

  <h3>Note</h3>
  <p>The variable <code>largest</code> always stores the largest value found so far.</p>
  `,

  `
  <h2>Exercise 8: Employee Bonus for 12 Months</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program using a for loop to enter the bonus received by an employee for 12 months and calculate the total bonus.</p>

  <h3>Learning Outcomes</h3>
  <p>Apply a for loop to a practical real-world repetitive calculation.</p>

  <h3>Hint</h3>
  <p>Run the loop exactly 12 times and add each month's bonus to the total.</p>

  <h3>Theory</h3>
  <p>When the number of repetitions is fixed, a counter-controlled for loop provides a simple way to process each item.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    float bonus, total = 0;
    int month;

    // Read bonus for 12 months
    for (month = 1; month &lt;= 12; month++)
    {
        printf("Enter bonus for month %d: ", month);
        scanf("%f", &amp;bonus);

        total = total + bonus;
    }

    printf("Total annual bonus = %.2f", total);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter bonus for month 1: 1000
Enter bonus for month 2: 1200
Enter bonus for month 3: 900
...
Enter bonus for month 12: 1500
Total annual bonus = 13200.00</pre>

  <h3>Note</h3>
  <p>This is a practical example of a fixed-count loop, where the number of iterations is known in advance.</p>
  `,

  `
  <h2>Exercise 9: Print a Star Pattern</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program using nested for loops to print the following pattern:</p>

  <pre class="output-box">*
* *
* * *
* * * *
* * * * *</pre>

  <h3>Learning Outcomes</h3>
  <p>Understand nested for loops and repeated operations at two levels.</p>

  <h3>Hint</h3>
  <p>Use one for loop for rows and another for printing stars in each row.</p>

  <h3>Theory</h3>
  <p>A nested loop is a loop placed inside another loop. It is useful for patterns, matrices, rows and columns, and other multi-level repetition tasks. :contentReference[oaicite:2]{index=2}</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i, j;

    // Outer loop controls rows
    for (i = 1; i &lt;= 5; i++)
    {
        // Inner loop controls stars in each row
        for (j = 1; j &lt;= i; j++)
        {
            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">*
* *
* * *
* * * *
* * * * *</pre>

  <h3>Note</h3>
  <p>The inner loop runs a different number of times for each row.</p>
  `,

  `
  <h2>Exercise 10: Display Prime Numbers from 1 to N</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display all prime numbers from 1 to N using for loops.</p>

  <h3>Learning Outcomes</h3>
  <p>Use nested loops for repeated divisibility checking.</p>

  <h3>Hint</h3>
  <p>For every number, check whether it is divisible by any number from 2 up to its square root.</p>

  <h3>Theory</h3>
  <p>A prime number has exactly two positive divisors: 1 and itself. A loop can be used to test divisibility for every number in the required range.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i, j, isPrime;

    printf("Enter N: ");
    scanf("%d", &amp;n);

    printf("Prime numbers: ");

    // Check every number from 2 to N
    for (i = 2; i &lt;= n; i++)
    {
        isPrime = 1;

        // Check divisibility
        for (j = 2; j * j &lt;= i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
                break;
            }
        }

        if (isPrime)
        {
            printf("%d ", i);
        }
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter N: 20
Prime numbers: 2 3 5 7 11 13 17 19</pre>

  <h3>Note</h3>
  <p>This exercise combines a for loop, nested looping, conditional checking and the break statement.</p>
  `
];
SOLUTIONS["s-m2-break"] = [

  `
  <h2>Exercise 1: Stop the Loop at 6</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 10, but terminate the loop when the number becomes 6.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand how the break statement immediately terminates a loop.</p>

  <h3>Hint</h3>
  <p>Use a for loop and place break inside an if condition when <code>i == 6</code>.</p>

  <h3>Theory</h3>
  <p>The break statement terminates the nearest loop immediately and transfers control to the statement following the loop. :contentReference[oaicite:0]{index=0}</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Display numbers from 1 to 10
    for (i = 1; i &lt;= 10; i++)
    {
        // Stop the loop when i becomes 6
        if (i == 6)
        {
            break;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 3 4 5</pre>

  <h3>Note</h3>
  <p>When <code>i</code> becomes 6, break terminates the loop completely.</p>
  `,

  `
  <h2>Exercise 2: Search for a Number</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to search for a given number in a series of numbers. Stop searching as soon as the number is found.</p>

  <h3>Learning Outcomes</h3>
  <p>Use break to terminate a search operation as soon as the required value is located.</p>

  <h3>Hint</h3>
  <p>Compare each input value with the search value and use break when they match.</p>

  <h3>Theory</h3>
  <p>In a sequential search, values are checked one by one. Once the required value is found, further checking is unnecessary, so break can terminate the loop.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i, num, search;
    int found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter number to search: ");
    scanf("%d", &amp;search);

    // Read and search values
    for (i = 1; i &lt;= n; i++)
    {
        printf("Enter number %d: ", i);
        scanf("%d", &amp;num);

        if (num == search)
        {
            found = 1;
            break;
        }
    }

    if (found)
    {
        printf("Number found.");
    }
    else
    {
        printf("Number not found.");
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter number of elements: 5
Enter number to search: 30
Enter number 1: 10
Enter number 2: 25
Enter number 3: 30
Number found.</pre>

  <h3>Note</h3>
  <p>The loop stops immediately after finding the required number.</p>
  `,

  `
  <h2>Exercise 3: Stop When Zero is Entered</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program that continuously accepts numbers and stops when the user enters zero.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand how break can be used to terminate a loop based on user input.</p>

  <h3>Hint</h3>
  <p>Use an infinite for loop and terminate it when the input becomes zero.</p>

  <h3>Theory</h3>
  <p>A loop can intentionally continue indefinitely and use break as an explicit termination mechanism. :contentReference[oaicite:1]{index=1}</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int num;

    // Continue until the user enters zero
    for (;;)
    {
        printf("Enter a number (0 to stop): ");
        scanf("%d", &amp;num);

        if (num == 0)
        {
            break;
        }

        printf("You entered: %d\\n", num);
    }

    printf("Loop terminated.");

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter a number (0 to stop): 10
You entered: 10
Enter a number (0 to stop): 25
You entered: 25
Enter a number (0 to stop): 0
Loop terminated.</pre>

  <h3>Note</h3>
  <p>The <code>for (;;)</code> creates an infinite loop and break provides the termination condition.</p>
  `,

  `
  <h2>Exercise 4: Stop When a Negative Number is Entered</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to accept numbers and calculate their sum. Stop the input process when a negative number is entered.</p>

  <h3>Learning Outcomes</h3>
  <p>Use break to stop input processing based on a condition.</p>

  <h3>Hint</h3>
  <p>Keep adding positive values and use break whenever the entered number is negative.</p>

  <h3>Theory</h3>
  <p>The break statement is useful when input processing must terminate before a loop's normal condition is reached.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int num, sum = 0;

    // Accept numbers until a negative value is entered
    for (;;)
    {
        printf("Enter a number: ");
        scanf("%d", &amp;num);

        if (num &lt; 0)
        {
            break;
        }

        sum = sum + num;
    }

    printf("Sum = %d", sum);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter a number: 10
Enter a number: 20
Enter a number: 15
Enter a number: -1
Sum = 45</pre>

  <h3>Note</h3>
  <p>The negative number acts as a stopping signal and is not added to the sum.</p>
  `,

  `
  <h2>Exercise 5: Find First Number Divisible by 7</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to check numbers from 1 to 100 and display the first number divisible by 7 using break.</p>

  <h3>Learning Outcomes</h3>
  <p>Use break to terminate a loop after the first successful condition.</p>

  <h3>Hint</h3>
  <p>Check <code>i % 7 == 0</code> and use break when the condition becomes true.</p>

  <h3>Theory</h3>
  <p>Break is useful when only the first matching value is required and processing of later values is unnecessary.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Search from 1 to 100
    for (i = 1; i &lt;= 100; i++)
    {
        if (i % 7 == 0)
        {
            printf("First number divisible by 7 = %d", i);
            break;
        }
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">First number divisible by 7 = 7</pre>

  <h3>Note</h3>
  <p>The loop stops at the first value satisfying the divisibility condition.</p>
  `,

  `
  <h2>Exercise 6: Password Verification</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program that gives the user up to 3 attempts to enter a password. Stop the loop immediately when the correct password is entered.</p>

  <h3>Learning Outcomes</h3>
  <p>Apply break in a practical input-validation problem.</p>

  <h3>Hint</h3>
  <p>Compare the entered password with a predefined password and use break when they match.</p>

  <h3>Theory</h3>
  <p>Break can terminate a loop early when a successful condition is achieved.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int password, i;
    int correct = 1234;

    // Allow maximum three attempts
    for (i = 1; i &lt;= 3; i++)
    {
        printf("Enter password: ");
        scanf("%d", &amp;password);

        if (password == correct)
        {
            printf("Login successful.");
            break;
        }

        printf("Incorrect password.\\n");
    }

    if (i &gt; 3)
    {
        printf("Account locked.");
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter password: 1234
Login successful.</pre>

  <h3>Note</h3>
  <p>Once the correct password is entered, break prevents unnecessary remaining attempts.</p>
  `,

  `
  <h2>Exercise 7: Stop at the First Multiple of 10</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 50 and stop the loop at the first multiple of 10.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand early termination using a conditional break.</p>

  <h3>Hint</h3>
  <p>Check whether the current number is divisible by 10.</p>

  <h3>Theory</h3>
  <p>A conditional break is executed only when a particular condition becomes true.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Display values until the first multiple of 10
    for (i = 1; i &lt;= 50; i++)
    {
        printf("%d ", i);

        if (i % 10 == 0)
        {
            break;
        }
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 3 4 5 6 7 8 9 10</pre>

  <h3>Note</h3>
  <p>The loop terminates when the first multiple of 10 is reached.</p>
  `,

  `
  <h2>Exercise 8: Menu-Driven Program with Exit Option</h2>

  <h3>Problem Statement</h3>
  <p>Write a menu-driven C program that repeatedly displays options for addition and subtraction. Use break when the user selects the exit option.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand the use of break for terminating menu-driven loops.</p>

  <h3>Hint</h3>
  <p>Use an infinite loop containing a switch statement and terminate it with break when option 3 is selected.</p>

  <h3>Theory</h3>
  <p>Menu-driven applications often use an infinite loop and break to terminate execution when the user selects an exit option. :contentReference[oaicite:2]{index=2}</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int choice, a, b;

    // Display menu until Exit is selected
    for (;;)
    {
        printf("\\n1. Addition\\n");
        printf("2. Subtraction\\n");
        printf("3. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &amp;choice);

        if (choice == 3)
        {
            break;
        }

        if (choice == 1 || choice == 2)
        {
            printf("Enter two numbers: ");
            scanf("%d %d", &amp;a, &amp;b);

            if (choice == 1)
            {
                printf("Result = %d\\n", a + b);
            }
            else
            {
                printf("Result = %d\\n", a - b);
            }
        }
        else
        {
            printf("Invalid choice.\\n");
        }
    }

    printf("Program terminated.");

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1. Addition
2. Subtraction
3. Exit
Enter choice: 1
Enter two numbers: 20 10
Result = 30

1. Addition
2. Subtraction
3. Exit
Enter choice: 3
Program terminated.</pre>

  <h3>Note</h3>
  <p>The exit option uses break to terminate the infinite loop.</p>
  `,

  `
  <h2>Exercise 9: Find the First Number Greater Than 100</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to read numbers from the user and stop as soon as a number greater than 100 is entered.</p>

  <h3>Learning Outcomes</h3>
  <p>Use break with user-controlled input and conditional checking.</p>

  <h3>Hint</h3>
  <p>Continue accepting numbers inside a loop and use break when the entered number is greater than 100.</p>

  <h3>Theory</h3>
  <p>Break is useful when the loop should terminate immediately after a special input condition is satisfied.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int num;

    // Continue until a number greater than 100 is entered
    for (;;)
    {
        printf("Enter a number: ");
        scanf("%d", &amp;num);

        if (num &gt; 100)
        {
            printf("Number greater than 100 found: %d", num);
            break;
        }
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter a number: 25
Enter a number: 60
Enter a number: 90
Enter a number: 150
Number greater than 100 found: 150</pre>

  <h3>Note</h3>
  <p>The loop continues until the required condition becomes true.</p>
  `,

  `
  <h2>Exercise 10: Find the First Prime Number in a Range</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to search for the first prime number between 10 and 50 and stop the search using break.</p>

  <h3>Learning Outcomes</h3>
  <p>Apply break in a nested loop and understand early termination during searching.</p>

  <h3>Hint</h3>
  <p>For each number, check whether it has a divisor. Use break when a divisor is found. Stop the outer loop when a prime number is identified.</p>

  <h3>Theory</h3>
  <p>Nested loops can be used when one repeated operation must be performed inside another. Break can terminate the inner loop once a divisor is found and can also terminate the outer search after the first prime is found.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i, j, isPrime;

    // Search numbers from 10 to 50
    for (i = 10; i &lt;= 50; i++)
    {
        isPrime = 1;

        // Check whether i has a divisor
        for (j = 2; j * j &lt;= i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
                break;
            }
        }

        // Stop after finding the first prime
        if (isPrime)
        {
            printf("First prime number = %d", i);
            break;
        }
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">First prime number = 11</pre>

  <h3>Note</h3>
  <p>This example demonstrates break in both the inner divisibility check and the outer search loop.</p>
  `
];
SOLUTIONS["s-m2-continue"] = [

  `
  <h2>Exercise 1: Skip Number 5</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 10, but skip the number 5 using the continue statement.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand how continue skips the remaining statements of the current iteration.</p>

  <h3>Hint</h3>
  <p>When <code>i == 5</code>, use continue.</p>

  <h3>Theory</h3>
  <p>The continue statement skips the remaining statements of the current loop iteration and moves to the next iteration. :contentReference[oaicite:0]{index=0}</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Display numbers from 1 to 10
    for (i = 1; i &lt;= 10; i++)
    {
        // Skip number 5
        if (i == 5)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 3 4 6 7 8 9 10</pre>

  <h3>Note</h3>
  <p>Only the iteration for 5 is skipped; the loop continues normally with 6.</p>
  `,

  `
  <h2>Exercise 2: Display Only Odd Numbers</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display odd numbers from 1 to 20 using the continue statement.</p>

  <h3>Learning Outcomes</h3>
  <p>Use continue to skip unwanted values during loop execution.</p>

  <h3>Hint</h3>
  <p>When a number is even, use continue to skip its printing.</p>

  <h3>Theory</h3>
  <p>Continue is useful when certain values should be ignored while the remaining iterations continue normally.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    // Check numbers from 1 to 20
    for (i = 1; i &lt;= 20; i++)
    {
        // Skip even numbers
        if (i % 2 == 0)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 3 5 7 9 11 13 15 17 19</pre>

  <h3>Note</h3>
  <p>Whenever an even number is encountered, continue skips its printing.</p>
  `,

  `
  <h2>Exercise 3: Skip Negative Numbers</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to read 10 numbers and calculate the sum of only positive numbers. Negative numbers should be skipped using continue.</p>

  <h3>Learning Outcomes</h3>
  <p>Apply continue to filter unwanted input values.</p>

  <h3>Hint</h3>
  <p>If the entered number is negative, use continue before adding it to the sum.</p>

  <h3>Theory</h3>
  <p>Continue allows a program to ignore a particular input or case without terminating the entire loop.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i, num, sum = 0;

    // Read 10 numbers
    for (i = 1; i &lt;= 10; i++)
    {
        printf("Enter number %d: ", i);
        scanf("%d", &amp;num);

        // Ignore negative numbers
        if (num &lt; 0)
        {
            continue;
        }

        sum = sum + num;
    }

    printf("Sum of positive numbers = %d", sum);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter number 1: 10
Enter number 2: -5
Enter number 3: 20
Enter number 4: -2
Enter number 5: 15
...
Sum of positive numbers = 45</pre>

  <h3>Note</h3>
  <p>Negative values are ignored and are not included in the sum.</p>
  `,

  `
  <h2>Exercise 4: Skip Multiples of 3</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 30 except the numbers divisible by 3.</p>

  <h3>Learning Outcomes</h3>
  <p>Use continue with a divisibility condition.</p>

  <h3>Hint</h3>
  <p>Check <code>i % 3 == 0</code> and skip that iteration.</p>

  <h3>Theory</h3>
  <p>The continue statement can be combined with conditional statements to ignore values satisfying a particular condition.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 30; i++)
    {
        // Skip multiples of 3
        if (i % 3 == 0)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 4 5 7 8 10 11 13 14 16 17 19 20 22 23 25 26 28 29</pre>

  <h3>Note</h3>
  <p>Every multiple of 3 is skipped without stopping the loop.</p>
  `,

  `
  <h2>Exercise 5: Skip Zero Values</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to read 8 numbers and calculate their sum, but ignore all zero values using continue.</p>

  <h3>Learning Outcomes</h3>
  <p>Understand how continue can be used to ignore special input values.</p>

  <h3>Hint</h3>
  <p>When the input is zero, use continue before performing the addition.</p>

  <h3>Theory</h3>
  <p>Continue is appropriate when an iteration should be ignored but the loop itself must continue.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i, num, sum = 0;

    for (i = 1; i &lt;= 8; i++)
    {
        printf("Enter number %d: ", i);
        scanf("%d", &amp;num);

        // Ignore zero values
        if (num == 0)
        {
            continue;
        }

        sum = sum + num;
    }

    printf("Sum excluding zeros = %d", sum);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter number 1: 10
Enter number 2: 0
Enter number 3: 20
Enter number 4: 5
Enter number 5: 0
...
Sum excluding zeros = 35</pre>

  <h3>Note</h3>
  <p>Zero values are ignored and do not affect the sum.</p>
  `,

  `
  <h2>Exercise 6: Print Numbers Not Divisible by 5</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 50 that are not divisible by 5.</p>

  <h3>Learning Outcomes</h3>
  <p>Use continue to skip values based on a mathematical condition.</p>

  <h3>Hint</h3>
  <p>Use the modulus operator and skip numbers for which <code>i % 5 == 0</code>.</p>

  <h3>Theory</h3>
  <p>Continue moves execution directly to the next iteration, making it useful for filtering values during a loop.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 50; i++)
    {
        // Skip numbers divisible by 5
        if (i % 5 == 0)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 3 4 6 7 8 9 11 12 13 14 16 17 18 19 ... 49</pre>

  <h3>Note</h3>
  <p>The loop continues through all numbers, but multiples of 5 are not printed.</p>
  `,

  `
  <h2>Exercise 7: Accept Only Positive Marks</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to read marks of 10 students. Ignore invalid negative marks using continue and calculate the total of valid marks.</p>

  <h3>Learning Outcomes</h3>
  <p>Apply continue to basic input validation.</p>

  <h3>Hint</h3>
  <p>When a mark is negative, skip the current iteration.</p>

  <h3>Theory</h3>
  <p>Continue can be used to skip invalid data while allowing the program to process the remaining inputs.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i, marks, total = 0;

    for (i = 1; i &lt;= 10; i++)
    {
        printf("Enter marks for student %d: ", i);
        scanf("%d", &amp;marks);

        // Ignore invalid negative marks
        if (marks &lt; 0)
        {
            continue;
        }

        total = total + marks;
    }

    printf("Total of valid marks = %d", total);

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter marks for student 1: 70
Enter marks for student 2: 85
Enter marks for student 3: -1
Enter marks for student 4: 60
...
Total of valid marks = 215</pre>

  <h3>Note</h3>
  <p>A negative mark is treated as invalid and is skipped.</p>
  `,

  `
  <h2>Exercise 8: Skip Numbers Between 10 and 20</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 30, but skip all numbers from 10 to 20.</p>

  <h3>Learning Outcomes</h3>
  <p>Use continue with a range-based condition.</p>

  <h3>Hint</h3>
  <p>Use an if condition that checks whether <code>i</code> lies between 10 and 20.</p>

  <h3>Theory</h3>
  <p>Continue can skip multiple consecutive values when the condition represents a range.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 30; i++)
    {
        // Skip values from 10 to 20
        if (i &gt;= 10 &amp;&amp; i &lt;= 20)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 2 3 4 5 6 7 8 9 21 22 23 24 25 26 27 28 29 30</pre>

  <h3>Note</h3>
  <p>All iterations corresponding to numbers 10 through 20 are skipped.</p>
  `,

  `
  <h2>Exercise 9: Display Valid Numbers from User Input</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to read 10 numbers and display only numbers greater than or equal to 10. Values below 10 should be skipped using continue.</p>

  <h3>Learning Outcomes</h3>
  <p>Use continue for conditional filtering of user input.</p>

  <h3>Hint</h3>
  <p>If the entered number is less than 10, use continue.</p>

  <h3>Theory</h3>
  <p>Continue is useful in data-processing programs when certain values need to be ignored without stopping the entire process.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i, num;

    for (i = 1; i &lt;= 10; i++)
    {
        printf("Enter number %d: ", i);
        scanf("%d", &amp;num);

        // Skip numbers below 10
        if (num &lt; 10)
        {
            continue;
        }

        printf("Valid number: %d\\n", num);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">Enter number 1: 5
Enter number 2: 25
Valid number: 25
Enter number 3: 8
Enter number 4: 40
Valid number: 40</pre>

  <h3>Note</h3>
  <p>Only values satisfying the required condition are processed further.</p>
  `,

  `
  <h2>Exercise 10: Skip Multiples of 2 and 3</h2>

  <h3>Problem Statement</h3>
  <p>Write a C program to display numbers from 1 to 50, skipping numbers divisible by either 2 or 3.</p>

  <h3>Learning Outcomes</h3>
  <p>Combine logical conditions with continue to filter multiple categories of values.</p>

  <h3>Hint</h3>
  <p>Skip the current iteration when the number is divisible by 2 or by 3.</p>

  <h3>Theory</h3>
  <p>Continue can be used with compound logical conditions to ignore values that belong to one or more unwanted categories.</p>

  <h3>Program</h3>
  <pre class="program-code notranslate"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 50; i++)
    {
        // Skip numbers divisible by 2 or 3
        if (i % 2 == 0 || i % 3 == 0)
        {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

  <h3>Expected Output</h3>
  <pre class="output-box">1 5 7 11 13 17 19 23 25 29 31 35 37 41 43 47 49</pre>

  <h3>Note</h3>
  <p>Only numbers that are neither divisible by 2 nor divisible by 3 are displayed.</p>
  `
];

SOLUTIONS["s-m3-arrays-1d"] = [

  `
  <h2>1-D Array — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store 5 integers in a one-dimensional array
    and display all the elements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[5];
    int i;

    printf("Enter 5 elements: ");

    // Store elements in the array
    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    printf("Array elements: ");

    // Display array elements
    for (i = 0; i &lt; 5; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A one-dimensional array stores multiple values of the same data type
    in contiguous memory locations. The index starts from 0.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 5 elements: 10 20 30 40 50</p>
    <p><strong>Array elements: 10 20 30 40 50</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the sum of all elements of a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i, sum = 0;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Calculate sum of elements
    for (i = 0; i &lt; n; i++)
    {
        sum = sum + arr[i];
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each array element is added to the accumulator variable
    <code>sum</code> during the second loop.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 5 15 10</p>
    <p><strong>Sum = 60</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest element in a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i, largest;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Use first element as the initial largest
    largest = arr[0];

    // Compare remaining elements
    for (i = 1; i &lt; n; i++)
    {
        if (arr[i] &gt; largest)
        {
            largest = arr[i];
        }
    }

    printf("Largest = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The first array element is taken as the initial largest value.
    Each remaining element is then compared with it.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 12 45 7 32 18</p>
    <p><strong>Largest = 45</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the smallest element in a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i, smallest;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Use first element as initial smallest
    smallest = arr[0];

    // Compare remaining elements
    for (i = 1; i &lt; n; i++)
    {
        if (arr[i] &lt; smallest)
        {
            smallest = arr[i];
        }
    }

    printf("Smallest = %d\\n", smallest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The first element is initially considered the smallest and is compared
    with every remaining element.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 12 45 7 32 18</p>
    <p><strong>Smallest = 7</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the average of elements stored in a
    one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i, sum = 0;
    float average;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read elements and calculate total
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
        sum = sum + arr[i];
    }

    average = (float)sum / n;

    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The sum of all elements is divided by the total number of elements.
    Type casting ensures that the division produces a decimal result.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 40 50</p>
    <p><strong>Average = 30.00</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the number of even and odd elements
    in a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i;
    int even = 0, odd = 0;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read and classify each element
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);

        if (arr[i] % 2 == 0)
            even++;
        else
            odd++;
    }

    printf("Even elements = %d\\n", even);
    printf("Odd elements = %d\\n", odd);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each array element is checked using the modulus operator.
    A remainder of zero when divided by 2 indicates an even number.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 6</p>
    <p>Enter 6 elements: 10 15 22 7 18 9</p>
    <p><strong>Even elements = 3</strong></p>
    <p><strong>Odd elements = 3</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to search for an element in a one-dimensional array
    using a linear search.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i, search;
    int found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &amp;search);

    // Search each element sequentially
    for (i = 0; i &lt; n; i++)
    {
        if (arr[i] == search)
        {
            found = 1;
            break;
        }
    }

    if (found)
        printf("Element found at index %d.\\n", i);
    else
        printf("Element not found.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Linear search checks array elements one by one until the required
    value is found or the array ends.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 25 30 45 50</p>
    <p>Enter element to search: 30</p>
    <p><strong>Element found at index 2.</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to reverse the elements of a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    printf("Reversed array: ");

    // Display elements from last index to first
    for (i = n - 1; i &gt;= 0; i--)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The array does not need to be physically modified to display it in
    reverse order. The loop simply starts from the last index.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 40 50</p>
    <p><strong>Reversed array: 50 40 30 20 10</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to sort the elements of a one-dimensional array
    in ascending order using Bubble Sort.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[100], n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Bubble Sort
    for (i = 0; i &lt; n - 1; i++)
    {
        for (j = 0; j &lt; n - i - 1; j++)
        {
            if (arr[j] &gt; arr[j + 1])
            {
                // Swap adjacent elements
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted array: ");

    for (i = 0; i &lt; n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Bubble Sort repeatedly compares adjacent elements and swaps them when
    they are in the wrong order. After each pass, the largest unsorted
    element moves toward the end of the array. :contentReference[oaicite:0]{index=0}
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 40 10 30 5 25</p>
    <p><strong>Sorted array: 5 10 25 30 40</strong></p>
  </div>
  `,

  `
  <h2>1-D Array — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the average, highest, and lowest
    marks of N students using a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks[100], n, i;
    int sum = 0, highest, lowest;
    float average;

    printf("Enter number of students: ");
    scanf("%d", &amp;n);

    printf("Enter marks: ");

    // Read marks into the array
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;marks[i]);
    }

    // Initialize highest and lowest
    highest = lowest = marks[0];

    // Process all marks
    for (i = 0; i &lt; n; i++)
    {
        sum = sum + marks[i];

        if (marks[i] &gt; highest)
            highest = marks[i];

        if (marks[i] &lt; lowest)
            lowest = marks[i];
    }

    average = (float)sum / n;

    printf("Average = %.2f\\n", average);
    printf("Highest = %d\\n", highest);
    printf("Lowest = %d\\n", lowest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The array stores the marks of all students. A loop is then used to
    calculate the total, maximum and minimum values. This combines several
    common array-processing operations in one program. :contentReference[oaicite:1]{index=1}
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of students: 5</p>
    <p>Enter marks: 12 45 3 67 22</p>
    <p><strong>Average = 29.80</strong></p>
    <p><strong>Highest = 67</strong></p>
    <p><strong>Lowest = 3</strong></p>
  </div>
  `
];
SOLUTIONS["s-m3-arrays-2d"] = [

  `
  <h2>2-D Array — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store elements in a 2-D array of 2 rows and
    3 columns and display the matrix.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[2][3];
    int i, j;

    printf("Enter 6 elements: ");

    // Read elements row by row
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    printf("Matrix:\\n");

    // Display the matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            printf("%d ", arr[i][j]);
        }

        printf("\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A two-dimensional array stores data in rows and columns.
    Two indexes are used: the first represents the row and the second
    represents the column.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 6 elements: 1 2 3 4 5 6</p>
    <p><strong>Matrix:</strong></p>
    <p><strong>1 2 3</strong></p>
    <p><strong>4 5 6</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the sum of all elements of a 2-D array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[3][3];
    int i, j, sum = 0;

    printf("Enter 9 elements: ");

    // Read matrix elements
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    // Calculate total
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            sum = sum + arr[i][j];
        }
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Nested loops are used to visit every row and column of the matrix.
    Each element is added to the running total.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 9 elements: 1 2 3 4 5 6 7 8 9</p>
    <p><strong>Sum = 45</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the sum of each row of a 2-D array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[3][3];
    int i, j, sum;

    printf("Enter 9 elements: ");

    // Read matrix elements
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    // Calculate sum of each row
    for (i = 0; i &lt; 3; i++)
    {
        sum = 0;

        for (j = 0; j &lt; 3; j++)
        {
            sum = sum + arr[i][j];
        }

        printf("Sum of row %d = %d\\n", i + 1, sum);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The outer loop selects a row, while the inner loop processes all
    elements belonging to that row.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 9 elements: 1 2 3 4 5 6 7 8 9</p>
    <p><strong>Sum of row 1 = 6</strong></p>
    <p><strong>Sum of row 2 = 15</strong></p>
    <p><strong>Sum of row 3 = 24</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the sum of each column of a 2-D array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[3][3];
    int i, j, sum;

    printf("Enter 9 elements: ");

    // Read matrix elements
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    // Calculate sum of each column
    for (j = 0; j &lt; 3; j++)
    {
        sum = 0;

        for (i = 0; i &lt; 3; i++)
        {
            sum = sum + arr[i][j];
        }

        printf("Sum of column %d = %d\\n", j + 1, sum);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Here the outer loop selects a column and the inner loop visits each
    row element in that column.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 9 elements: 1 2 3 4 5 6 7 8 9</p>
    <p><strong>Sum of column 1 = 12</strong></p>
    <p><strong>Sum of column 2 = 15</strong></p>
    <p><strong>Sum of column 3 = 18</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest element in a 2-D array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[3][3];
    int i, j, largest;

    printf("Enter 9 elements: ");

    // Read matrix elements
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    // Start with the first element
    largest = arr[0][0];

    // Search for the largest element
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            if (arr[i][j] &gt; largest)
            {
                largest = arr[i][j];
            }
        }
    }

    printf("Largest = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Every element of the matrix is compared with the current largest value.
    Whenever a larger value is found, it becomes the new largest value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 9 elements: 12 5 30 8 45 17 3 25 10</p>
    <p><strong>Largest = 45</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the transpose of a 2-D matrix.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[2][3];
    int i, j;

    printf("Enter 6 elements: ");

    // Read original matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    printf("Transpose:\\n");

    // Swap rows and columns while displaying
    for (j = 0; j &lt; 3; j++)
    {
        for (i = 0; i &lt; 2; i++)
        {
            printf("%d ", arr[i][j]);
        }

        printf("\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The transpose of a matrix is obtained by converting its rows into
    columns and its columns into rows.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 6 elements: 1 2 3 4 5 6</p>
    <p><strong>Transpose:</strong></p>
    <p><strong>1 4</strong></p>
    <p><strong>2 5</strong></p>
    <p><strong>3 6</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to add two 2 × 2 matrices.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a[2][2], b[2][2], sum[2][2];
    int i, j;

    printf("Enter elements of first matrix: ");

    // Read first matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            scanf("%d", &amp;a[i][j]);
        }
    }

    printf("Enter elements of second matrix: ");

    // Read second matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            scanf("%d", &amp;b[i][j]);
        }
    }

    // Add corresponding elements
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            sum[i][j] = a[i][j] + b[i][j];
        }
    }

    printf("Sum matrix:\\n");

    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            printf("%d ", sum[i][j]);
        }

        printf("\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Matrix addition is performed by adding corresponding elements of
    the two matrices.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter elements of first matrix: 1 2 3 4</p>
    <p>Enter elements of second matrix: 5 6 7 8</p>
    <p><strong>Sum matrix:</strong></p>
    <p><strong>6 8</strong></p>
    <p><strong>10 12</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the sum of the main diagonal elements
    of a square matrix.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[3][3];
    int i, j, sum = 0;

    printf("Enter 9 elements: ");

    // Read matrix elements
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    // Add main diagonal elements
    for (i = 0; i &lt; 3; i++)
    {
        sum = sum + arr[i][i];
    }

    printf("Main diagonal sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The main diagonal contains elements where the row index and column
    index are equal: <code>arr[0][0]</code>, <code>arr[1][1]</code>,
    and <code>arr[2][2]</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 9 elements: 1 2 3 4 5 6 7 8 9</p>
    <p><strong>Main diagonal sum = 15</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a square matrix is an identity matrix.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[3][3];
    int i, j, isIdentity = 1;

    printf("Enter 9 elements: ");

    // Read matrix elements
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            scanf("%d", &amp;arr[i][j]);
        }
    }

    // Check identity matrix conditions
    for (i = 0; i &lt; 3; i++)
    {
        for (j = 0; j &lt; 3; j++)
        {
            if (i == j)
            {
                if (arr[i][j] != 1)
                {
                    isIdentity = 0;
                }
            }
            else
            {
                if (arr[i][j] != 0)
                {
                    isIdentity = 0;
                }
            }
        }
    }

    if (isIdentity)
        printf("The matrix is an identity matrix.\\n");
    else
        printf("The matrix is not an identity matrix.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An identity matrix contains 1 on the main diagonal and 0 at every
    other position.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 9 elements: 1 0 0 0 1 0 0 0 1</p>
    <p><strong>The matrix is an identity matrix.</strong></p>
  </div>
  `,

  `
  <h2>2-D Array — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to multiply two 2 × 2 matrices using 2-D arrays.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a[2][2], b[2][2], result[2][2] = {0};
    int i, j, k;

    printf("Enter elements of first matrix: ");

    // Read first matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            scanf("%d", &amp;a[i][j]);
        }
    }

    printf("Enter elements of second matrix: ");

    // Read second matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            scanf("%d", &amp;b[i][j]);
        }
    }

    // Multiply the two matrices
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            for (k = 0; k &lt; 2; k++)
            {
                result[i][j] =
                    result[i][j] + a[i][k] * b[k][j];
            }
        }
    }

    printf("Result matrix:\\n");

    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
        {
            printf("%d ", result[i][j]);
        }

        printf("\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Matrix multiplication uses three nested loops. For each result
    position, corresponding elements from a row of the first matrix
    and a column of the second matrix are multiplied and added.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter elements of first matrix: 1 2 3 4</p>
    <p>Enter elements of second matrix: 5 6 7 8</p>
    <p><strong>Result matrix:</strong></p>
    <p><strong>19 22</strong></p>
    <p><strong>43 50</strong></p>
  </div>
  `
];
SOLUTIONS["s-m3-character-arrays-strings"] = [

  `
  <h2>Character Arrays & Strings — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to read a string and display the entered string.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100];

    printf("Enter a string: ");
    scanf("%99s", str);

    // Display the entered string
    printf("You entered: %s\\n", str);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A string in C is stored as a character array ending with the null
    character <code>\\0</code>. The <code>%s</code> format specifier is
    used to read and display a string.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: Hello</p>
    <p><strong>You entered: Hello</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the length of a string without using
    the <code>strlen()</code> function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100];
    int i, length = 0;

    printf("Enter a string: ");
    scanf("%99s", str);

    // Count characters until the null character
    for (i = 0; str[i] != '\\0'; i++)
    {
        length++;
    }

    printf("Length = %d\\n", length);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The loop continues until the null character is reached.
    The number of characters counted is the string length.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: Programming</p>
    <p><strong>Length = 11</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the number of vowels and consonants
    in a string.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100];
    int i, vowels = 0, consonants = 0;

    printf("Enter a string: ");
    scanf("%99s", str);

    // Examine each character
    for (i = 0; str[i] != '\\0'; i++)
    {
        if (str[i] == 'a' || str[i] == 'e' ||
            str[i] == 'i' || str[i] == 'o' ||
            str[i] == 'u' || str[i] == 'A' ||
            str[i] == 'E' || str[i] == 'I' ||
            str[i] == 'O' || str[i] == 'U')
        {
            vowels++;
        }
        else
        {
            consonants++;
        }
    }

    printf("Vowels = %d\\n", vowels);
    printf("Consonants = %d\\n", consonants);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each character is checked against the vowels. If it matches a vowel,
    the vowel counter increases; otherwise, it is counted as a consonant.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: Hello</p>
    <p><strong>Vowels = 2</strong></p>
    <p><strong>Consonants = 3</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to reverse a string without using a library
    string-reversal function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100];
    int i, length = 0;

    printf("Enter a string: ");
    scanf("%99s", str);

    // Find the string length
    for (i = 0; str[i] != '\\0'; i++)
    {
        length++;
    }

    printf("Reversed string: ");

    // Print characters from last to first
    for (i = length - 1; i &gt;= 0; i--)
    {
        printf("%c", str[i]);
    }

    printf("\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    First the length of the string is determined. The characters are then
    displayed from the last index to the first index.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: Computer</p>
    <p><strong>Reversed string: retupmoC</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a string is a palindrome.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100];
    int i, length = 0, palindrome = 1;

    printf("Enter a string: ");
    scanf("%99s", str);

    // Find string length
    for (i = 0; str[i] != '\\0'; i++)
    {
        length++;
    }

    // Compare characters from both ends
    for (i = 0; i &lt; length / 2; i++)
    {
        if (str[i] != str[length - 1 - i])
        {
            palindrome = 0;
            break;
        }
    }

    if (palindrome)
        printf("The string is a palindrome.\\n");
    else
        printf("The string is not a palindrome.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A palindrome reads the same from left to right and right to left.
    The program compares corresponding characters from both ends.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: madam</p>
    <p><strong>The string is a palindrome.</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to copy one string into another without using
    <code>strcpy()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char source[100], destination[100];
    int i;

    printf("Enter a string: ");
    scanf("%99s", source);

    // Copy each character
    for (i = 0; source[i] != '\\0'; i++)
    {
        destination[i] = source[i];
    }

    // Add null character at the end
    destination[i] = '\\0';

    printf("Copied string: %s\\n", destination);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each character from the source array is copied to the destination array.
    The null character is added at the end to properly terminate the string.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: College</p>
    <p><strong>Copied string: College</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to compare two strings without using <code>strcmp()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str1[100], str2[100];
    int i, same = 1;

    printf("Enter first string: ");
    scanf("%99s", str1);

    printf("Enter second string: ");
    scanf("%99s", str2);

    // Compare characters at corresponding positions
    for (i = 0; str1[i] != '\\0' || str2[i] != '\\0'; i++)
    {
        if (str1[i] != str2[i])
        {
            same = 0;
            break;
        }
    }

    if (same)
        printf("Strings are equal.\\n");
    else
        printf("Strings are not equal.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The corresponding characters of both strings are compared one by one.
    A difference at any position means the strings are not equal.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first string: hello</p>
    <p>Enter second string: hello</p>
    <p><strong>Strings are equal.</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the number of digits, alphabets and
    special characters in a string.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100];
    int i, alphabets = 0, digits = 0, special = 0;

    printf("Enter a string: ");
    scanf("%99s", str);

    // Classify each character
    for (i = 0; str[i] != '\\0'; i++)
    {
        if ((str[i] &gt;= 'A' &amp;&amp; str[i] &lt;= 'Z') ||
            (str[i] &gt;= 'a' &amp;&amp; str[i] &lt;= 'z'))
        {
            alphabets++;
        }
        else if (str[i] &gt;= '0' &amp;&amp; str[i] &lt;= '9')
        {
            digits++;
        }
        else
        {
            special++;
        }
    }

    printf("Alphabets = %d\\n", alphabets);
    printf("Digits = %d\\n", digits);
    printf("Special characters = %d\\n", special);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each character is classified based on its ASCII character range:
    alphabetic characters, numeric digits or other characters.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: BCA123@</p>
    <p><strong>Alphabets = 3</strong></p>
    <p><strong>Digits = 3</strong></p>
    <p><strong>Special characters = 1</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the number of words in a sentence.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[200];
    int i, words = 0, inWord = 0;

    printf("Enter a sentence: ");
    fgets(str, sizeof(str), stdin);

    // Identify the beginning of each word
    for (i = 0; str[i] != '\\0'; i++)
    {
        if (str[i] != ' ' &amp;&amp; str[i] != '\\n' &amp;&amp; str[i] != '\\t')
        {
            if (inWord == 0)
            {
                words++;
                inWord = 1;
            }
        }
        else
        {
            inWord = 0;
        }
    }

    printf("Number of words = %d\\n", words);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A new word is counted when the program moves from a separator to
    a non-space character. Spaces, tabs and the newline character act
    as word separators.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a sentence: C programming is easy</p>
    <p><strong>Number of words = 4</strong></p>
  </div>
  `,

  `
  <h2>Character Arrays & Strings — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the frequency of a particular character
    in a string.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char str[100], ch;
    int i, count = 0;

    printf("Enter a string: ");
    scanf("%99s", str);

    printf("Enter character to search: ");
    scanf(" %c", &amp;ch);

    // Count occurrences of the selected character
    for (i = 0; str[i] != '\\0'; i++)
    {
        if (str[i] == ch)
        {
            count++;
        }
    }

    printf("Frequency of '%c' = %d\\n", ch, count);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program compares every character of the string with the character
    entered by the user and increments the counter whenever a match occurs.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a string: banana</p>
    <p>Enter character to search: a</p>
    <p><strong>Frequency of 'a' = 3</strong></p>
  </div>
  `

];
SOLUTIONS["s-m3-function-types"] = [

  `
  <h2>Functions — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function with no arguments and no return value
    to display a welcome message.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void welcome()
{
    // Display welcome message
    printf("Welcome to C Programming!\\n");
}

int main()
{
    // Call the function
    welcome();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function <code>welcome()</code> does not accept any arguments and
    does not return a value. Its purpose is simply to perform an action.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Welcome to C Programming!</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function with arguments and no return value
    to display the square of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void square(int num)
{
    // Calculate and display square
    printf("Square = %d\\n", num * num);
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Pass number to the function
    square(num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives a value through its parameter but does not
    return any value. The result is displayed inside the function.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 8</p>
    <p><strong>Square = 64</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function with no arguments but with a return
    value to calculate and return the square of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int square()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Return the calculated square
    return num * num;
}

int main()
{
    int result;

    // Receive the returned value
    result = square();

    printf("Square = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function takes no argument, but it returns an integer value to
    the calling function.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 7</p>
    <p><strong>Square = 49</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function with arguments and a return value
    to calculate the sum of two numbers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int add(int a, int b)
{
    // Return sum of two numbers
    return a + b;
}

int main()
{
    int a, b, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    // Call function with arguments
    result = add(a, b);

    printf("Sum = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives two arguments and returns their sum to the
    <code>main()</code> function.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 20 15</p>
    <p><strong>Sum = 35</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function to find the larger of two numbers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int largest(int a, int b)
{
    // Compare the two numbers
    if (a &gt; b)
        return a;
    else
        return b;
}

int main()
{
    int a, b, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    // Call function to find larger value
    result = largest(a, b);

    printf("Largest = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives two numbers and returns the greater value.
    This demonstrates how a function can perform decision-making.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 35 48</p>
    <p><strong>Largest = 48</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function to calculate the factorial of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

long long factorial(int n)
{
    long long fact = 1;
    int i;

    // Calculate factorial
    for (i = 1; i &lt;= n; i++)
    {
        fact = fact * i;
    }

    return fact;
}

int main()
{
    int n;
    long long result;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    // Call factorial function
    result = factorial(n);

    printf("Factorial = %lld\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function performs repeated multiplication and returns the
    calculated factorial to <code>main()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Factorial = 120</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function to check whether a number is prime.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int isPrime(int n)
{
    int i;

    // Numbers less than 2 are not prime
    if (n &lt; 2)
        return 0;

    // Check possible divisors
    for (i = 2; i * i &lt;= n; i++)
    {
        if (n % i == 0)
            return 0;
    }

    return 1;
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Check result returned by the function
    if (isPrime(num))
        printf("The number is prime.\\n");
    else
        printf("The number is not prime.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function checks divisibility and returns <code>1</code> for a
    prime number and <code>0</code> otherwise.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 29</p>
    <p><strong>The number is prime.</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using separate functions to perform addition,
    subtraction, multiplication and division of two numbers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float add(float a, float b)
{
    return a + b;
}

float subtract(float a, float b)
{
    return a - b;
}

float multiply(float a, float b)
{
    return a * b;
}

float divide(float a, float b)
{
    return a / b;
}

int main()
{
    float a, b;

    printf("Enter two numbers: ");
    scanf("%f %f", &amp;a, &amp;b);

    printf("Addition = %.2f\\n", add(a, b));
    printf("Subtraction = %.2f\\n", subtract(a, b));
    printf("Multiplication = %.2f\\n", multiply(a, b));

    // Check division by zero
    if (b != 0)
        printf("Division = %.2f\\n", divide(a, b));
    else
        printf("Division by zero is not allowed.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Separate functions are created for each arithmetic operation.
    This makes the program modular and easier to maintain.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 20 5</p>
    <p><strong>Addition = 25.00</strong></p>
    <p><strong>Subtraction = 15.00</strong></p>
    <p><strong>Multiplication = 100.00</strong></p>
    <p><strong>Division = 4.00</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a function to find the largest among three numbers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int largestOfThree(int a, int b, int c)
{
    int largest;

    // Find larger value among the first two numbers
    if (a &gt; b)
        largest = a;
    else
        largest = b;

    // Compare with the third number
    if (c &gt; largest)
        largest = c;

    return largest;
}

int main()
{
    int a, b, c, result;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;a, &amp;b, &amp;c);

    // Call the function
    result = largestOfThree(a, b, c);

    printf("Largest = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The comparison logic is separated into a function. The function
    receives three arguments and returns the largest value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 25 72 48</p>
    <p><strong>Largest = 72</strong></p>
  </div>
  `,

  `
  <h2>Functions — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a menu-driven C program using separate functions for addition,
    subtraction, multiplication and division.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float add(float a, float b)
{
    return a + b;
}

float subtract(float a, float b)
{
    return a - b;
}

float multiply(float a, float b)
{
    return a * b;
}

float divide(float a, float b)
{
    return a / b;
}

int main()
{
    int choice;
    float a, b;

    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");

    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    printf("Enter two numbers: ");
    scanf("%f %f", &amp;a, &amp;b);

    // Select the required function
    switch (choice)
    {
        case 1:
            printf("Result = %.2f\\n", add(a, b));
            break;

        case 2:
            printf("Result = %.2f\\n", subtract(a, b));
            break;

        case 3:
            printf("Result = %.2f\\n", multiply(a, b));
            break;

        case 4:
            if (b != 0)
                printf("Result = %.2f\\n", divide(a, b));
            else
                printf("Division by zero is not allowed.\\n");
            break;

        default:
            printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This program combines functions with switch-case. Each operation
    has its own function, while the switch statement selects which
    function should be called.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Addition</p>
    <p>2. Subtraction</p>
    <p>3. Multiplication</p>
    <p>4. Division</p>
    <p>Enter choice: 1</p>
    <p>Enter two numbers: 25 15</p>
    <p><strong>Result = 40.00</strong></p>
  </div>
  `
];
SOLUTIONS["s-m3-formal-actual"] = [

  `
  <h2>Formal & Actual Arguments — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to add two numbers using formal and actual arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int add(int a, int b)
{
    // a and b are formal arguments
    return a + b;
}

int main()
{
    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // x and y are actual arguments
    result = add(x, y);

    printf("Sum = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The parameters <code>a</code> and <code>b</code> in the function
    definition are called formal arguments. The values <code>x</code>
    and <code>y</code> passed during the function call are actual arguments.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 15 25</p>
    <p><strong>Sum = 40</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the square of a number using a function
    with a formal argument.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int square(int num)
{
    // num is a formal argument
    return num * num;
}

int main()
{
    int value, result;

    printf("Enter a number: ");
    scanf("%d", &amp;value);

    // value is the actual argument
    result = square(value);

    printf("Square = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The variable <code>num</code> receives the value passed by
    <code>value</code>. Therefore, <code>num</code> is the formal
    argument and <code>value</code> is the actual argument.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 9</p>
    <p><strong>Square = 81</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the larger of two numbers using formal
    and actual arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int largest(int a, int b)
{
    // a and b are formal arguments
    if (a &gt; b)
        return a;
    else
        return b;
}

int main()
{
    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // x and y are actual arguments
    result = largest(x, y);

    printf("Largest = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives two values through its formal arguments.
    The variables used in the function call are the actual arguments.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 45 72</p>
    <p><strong>Largest = 72</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the area of a rectangle using
    formal and actual arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float area(float length, float width)
{
    // length and width are formal arguments
    return length * width;
}

int main()
{
    float l, w, result;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;l, &amp;w);

    // l and w are actual arguments
    result = area(l, w);

    printf("Area = %.2f\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function parameters <code>length</code> and <code>width</code>
    receive values from the actual arguments <code>l</code> and <code>w</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the simple interest using a function
    with three arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float simpleInterest(float principal, float rate, float time)
{
    // All three parameters are formal arguments
    return (principal * rate * time) / 100;
}

int main()
{
    float p, r, t, interest;

    printf("Enter principal, rate and time: ");
    scanf("%f %f %f", &amp;p, &amp;r, &amp;t);

    // p, r and t are actual arguments
    interest = simpleInterest(p, r, t);

    printf("Simple Interest = %.2f\\n", interest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives three values through formal arguments.
    The variables supplied during the function call are actual arguments.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter principal, rate and time: 10000 5 2</p>
    <p><strong>Simple Interest = 1000.00</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the average of three numbers using a function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float average(int a, int b, int c)
{
    // a, b and c are formal arguments
    return (a + b + c) / 3.0;
}

int main()
{
    int x, y, z;
    float result;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;x, &amp;y, &amp;z);

    // x, y and z are actual arguments
    result = average(x, y, z);

    printf("Average = %.2f\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function accepts three values as formal arguments and returns
    their average. The variables from <code>main()</code> are actual arguments.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 10 20 30</p>
    <p><strong>Average = 20.00</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to exchange two values using a function and
    demonstrate the difference between actual and formal arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void exchange(int a, int b)
{
    int temp;

    // a and b are formal arguments
    temp = a;
    a = b;
    b = temp;

    printf("Inside function: a = %d, b = %d\\n", a, b);
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    printf("Before function call: x = %d, y = %d\\n", x, y);

    // x and y are actual arguments
    exchange(x, y);

    printf("After function call: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    In this program, <code>x</code> and <code>y</code> are actual arguments,
    while <code>a</code> and <code>b</code> are formal arguments.
    Since ordinary arguments are passed by value, changes to the formal
    arguments do not change the original variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before function call: x = 10, y = 20</strong></p>
    <p><strong>Inside function: a = 20, b = 10</strong></p>
    <p><strong>After function call: x = 10, y = 20</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the maximum of three numbers using
    a function with three arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int maximum(int a, int b, int c)
{
    int max;

    // Find the largest value
    if (a &gt; b)
        max = a;
    else
        max = b;

    if (c &gt; max)
        max = c;

    return max;
}

int main()
{
    int x, y, z, result;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;x, &amp;y, &amp;z);

    // x, y and z are actual arguments
    result = maximum(x, y, z);

    printf("Maximum = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function's parameters are formal arguments, while the variables
    passed from <code>main()</code> are actual arguments.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 35 90 62</p>
    <p><strong>Maximum = 90</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the total and average marks of three subjects
    using a function with arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int totalMarks(int m1, int m2, int m3)
{
    // m1, m2 and m3 are formal arguments
    return m1 + m2 + m3;
}

int main()
{
    int marks1, marks2, marks3, total;
    float average;

    printf("Enter marks of three subjects: ");
    scanf("%d %d %d", &amp;marks1, &amp;marks2, &amp;marks3);

    // Actual arguments are passed to the function
    total = totalMarks(marks1, marks2, marks3);

    average = total / 3.0;

    printf("Total = %d\\n", total);
    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives the three subject marks through its formal
    arguments. The variables from <code>main()</code> act as actual arguments.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks of three subjects: 70 80 90</p>
    <p><strong>Total = 240</strong></p>
    <p><strong>Average = 80.00</strong></p>
  </div>
  `,

  `
  <h2>Formal & Actual Arguments — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using separate functions to calculate the area and
    perimeter of a rectangle. Demonstrate the use of formal and actual arguments.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float area(float length, float width)
{
    // length and width are formal arguments
    return length * width;
}

float perimeter(float length, float width)
{
    // length and width are formal arguments
    return 2 * (length + width);
}

int main()
{
    float l, w;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;l, &amp;w);

    // l and w are actual arguments
    printf("Area = %.2f\\n", area(l, w));
    printf("Perimeter = %.2f\\n", perimeter(l, w));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Both functions receive values through their formal parameters.
    The variables <code>l</code> and <code>w</code> supplied during each
    function call are the actual arguments. The same actual arguments
    can be passed to multiple functions.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
    <p><strong>Perimeter = 30.00</strong></p>
  </div>
  `

];
SOLUTIONS["s-m3-parameter-passing"] = [

  `
  <h2>Parameter Passing — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass two integers to a function and display their sum.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void add(int a, int b)
{
    // Display the sum of received values
    printf("Sum = %d\\n", a + b);
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // Pass values to the function
    add(x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The values of <code>x</code> and <code>y</code> are passed to the
    function parameters <code>a</code> and <code>b</code>.
    The function works with these received values.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Sum = 30</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass a number to a function and display its square.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void square(int n)
{
    // Calculate square of received value
    printf("Square = %d\\n", n * n);
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Pass num to the function
    square(num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The value stored in <code>num</code> is passed to the function.
    The function parameter <code>n</code> receives that value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 9</p>
    <p><strong>Square = 81</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass the length and width of a rectangle to a
    function and calculate its area.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float area(float length, float width)
{
    // Return calculated area
    return length * width;
}

int main()
{
    float l, w, result;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;l, &amp;w);

    // Pass both values to the function
    result = area(l, w);

    printf("Area = %.2f\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Two values are passed to the function at the same time. The function
    uses both parameters to calculate and return the area.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 12 5</p>
    <p><strong>Area = 60.00</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass three marks to a function and calculate their average.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float average(int a, int b, int c)
{
    // Calculate average of three values
    return (a + b + c) / 3.0;
}

int main()
{
    int m1, m2, m3;
    float result;

    printf("Enter marks of three subjects: ");
    scanf("%d %d %d", &amp;m1, &amp;m2, &amp;m3);

    // Pass all three marks to the function
    result = average(m1, m2, m3);

    printf("Average = %.2f\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The three actual values are passed to the three function parameters.
    The function then performs the required calculation.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks of three subjects: 70 80 90</p>
    <p><strong>Average = 80.00</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass two values to a function and demonstrate
    that changes made to the function parameters do not change the original values.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void changeValues(int a, int b)
{
    // Modify local copies
    a = a + 10;
    b = b + 10;

    printf("Inside function: a = %d, b = %d\\n", a, b);
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    printf("Before function call: x = %d, y = %d\\n", x, y);

    // Pass values to the function
    changeValues(x, y);

    printf("After function call: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    In normal value parameter passing, the function receives copies of
    the original values. Changes to the parameters therefore do not
    modify the original variables in <code>main()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before function call: x = 10, y = 20</strong></p>
    <p><strong>Inside function: a = 20, b = 30</strong></p>
    <p><strong>After function call: x = 10, y = 20</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass a number to a function and determine whether
    the number is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void checkEvenOdd(int num)
{
    // Check divisibility by 2
    if (num % 2 == 0)
        printf("The number is even.\\n");
    else
        printf("The number is odd.\\n");
}

int main()
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &amp;number);

    // Pass number to the function
    checkEvenOdd(number);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The value is passed to the function, which performs the decision-making
    operation using its parameter.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 27</p>
    <p><strong>The number is odd.</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass principal, rate and time to a function and
    calculate simple interest.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float simpleInterest(float p, float r, float t)
{
    // Calculate simple interest
    return (p * r * t) / 100;
}

int main()
{
    float principal, rate, time, interest;

    printf("Enter principal, rate and time: ");
    scanf("%f %f %f", &amp;principal, &amp;rate, &amp;time);

    // Pass three values to the function
    interest = simpleInterest(principal, rate, time);

    printf("Simple Interest = %.2f\\n", interest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Three values are passed as arguments to the function. The function
    calculates simple interest using all three parameters.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter principal, rate and time: 10000 5 2</p>
    <p><strong>Simple Interest = 1000.00</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass two numbers to a function and return
    their greatest common divisor (GCD).
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int gcd(int a, int b)
{
    int remainder;

    // Apply Euclidean algorithm
    while (b != 0)
    {
        remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

int main()
{
    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // Pass both values to the function
    result = gcd(x, y);

    printf("GCD = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The two input values are passed to the <code>gcd()</code> function.
    The function processes the parameters and returns the GCD.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 48 18</p>
    <p><strong>GCD = 6</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array and its size to a function and
    calculate the sum of all array elements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int arraySum(int arr[], int n)
{
    int i, sum = 0;

    // Add all array elements
    for (i = 0; i &lt; n; i++)
    {
        sum = sum + arr[i];
    }

    return sum;
}

int main()
{
    int arr[100], n, i, result;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array and its size
    result = arraySum(arr, n);

    printf("Sum = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An array and its size are passed to the function. The function can
    access the array elements using the array parameter.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 15 25</p>
    <p><strong>Sum = 100</strong></p>
  </div>
  `,

  `
  <h2>Parameter Passing — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program that passes two numbers to separate functions
    to calculate their sum, product and difference.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int add(int a, int b)
{
    return a + b;
}

int multiply(int a, int b)
{
    return a * b;
}

int subtract(int a, int b)
{
    return a - b;
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // Pass the same values to different functions
    printf("Sum = %d\\n", add(x, y));
    printf("Product = %d\\n", multiply(x, y));
    printf("Difference = %d\\n", subtract(x, y));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The same actual arguments can be passed to multiple functions.
    Each function receives its own parameters and performs a different operation.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 20 5</p>
    <p><strong>Sum = 25</strong></p>
    <p><strong>Product = 100</strong></p>
    <p><strong>Difference = 15</strong></p>
  </div>
  `

];
SOLUTIONS["s-m3-call-by-value"] = [

  `
  <h2>Call by Value — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an integer to a function and increase its
    value by 10. Display the value before, inside and after the function call.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void increase(int n)
{
    // Modify the local copy
    n = n + 10;

    printf("Inside function: %d\\n", n);
}

int main()
{
    int num = 20;

    printf("Before function call: %d\\n", num);

    // Value of num is copied to n
    increase(num);

    printf("After function call: %d\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    In call by value, a copy of the actual value is passed to the function.
    Therefore, changes made to the parameter do not change the original variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before function call: 20</strong></p>
    <p><strong>Inside function: 30</strong></p>
    <p><strong>After function call: 20</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass two integers to a function and swap them.
    Display the values before, inside and after the function call.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void swap(int a, int b)
{
    int temp;

    // Swap the local copies
    temp = a;
    a = b;
    b = temp;

    printf("Inside function: a = %d, b = %d\\n", a, b);
}

int main()
{
    int x = 10, y = 20;

    printf("Before function call: x = %d, y = %d\\n", x, y);

    // Pass values to the function
    swap(x, y);

    printf("After function call: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives copies of <code>x</code> and <code>y</code>.
    The copies are swapped, but the original variables remain unchanged.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before function call: x = 10, y = 20</strong></p>
    <p><strong>Inside function: a = 20, b = 10</strong></p>
    <p><strong>After function call: x = 10, y = 20</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass a number to a function and change its value
    to zero. Show that the original value remains unchanged.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void makeZero(int n)
{
    // Change only the local copy
    n = 0;

    printf("Inside function: %d\\n", n);
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    printf("Before function call: %d\\n", num);

    // Pass num by value
    makeZero(num);

    printf("After function call: %d\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function changes only its local parameter. Since the original
    variable and the parameter occupy separate storage locations, the
    original value is not changed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 50</p>
    <p><strong>Before function call: 50</strong></p>
    <p><strong>Inside function: 0</strong></p>
    <p><strong>After function call: 50</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass two numbers to a function and increase both
    values by 5. Demonstrate that the original variables are unchanged.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void increase(int a, int b)
{
    // Modify local copies
    a = a + 5;
    b = b + 5;

    printf("Inside function: a = %d, b = %d\\n", a, b);
}

int main()
{
    int x = 10, y = 20;

    printf("Before function call: x = %d, y = %d\\n", x, y);

    increase(x, y);

    printf("After function call: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Both arguments are passed as values. The function receives separate
    copies and modifications affect only those copies.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before function call: x = 10, y = 20</strong></p>
    <p><strong>Inside function: a = 15, b = 25</strong></p>
    <p><strong>After function call: x = 10, y = 20</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the square of a number using call by value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int square(int n)
{
    // Calculate square using the received copy
    return n * n;
}

int main()
{
    int num, result;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Pass num by value
    result = square(num);

    printf("Square = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives a copy of the number and uses that copy to
    perform the calculation. The original value does not need to change.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12</p>
    <p><strong>Square = 144</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the largest of three numbers by passing
    the three values to a function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int largest(int a, int b, int c)
{
    int max;

    // Compare the received values
    if (a &gt; b)
        max = a;
    else
        max = b;

    if (c &gt; max)
        max = c;

    return max;
}

int main()
{
    int x, y, z, result;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;x, &amp;y, &amp;z);

    // Pass values by value
    result = largest(x, y, z);

    printf("Largest = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives copies of all three values. Since the function
    only reads these copies, the original variables are unaffected.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 25 70 45</p>
    <p><strong>Largest = 70</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate simple interest by passing principal,
    rate and time to a function using call by value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float simpleInterest(float p, float r, float t)
{
    // Calculate simple interest
    return (p * r * t) / 100;
}

int main()
{
    float principal, rate, time, interest;

    printf("Enter principal, rate and time: ");
    scanf("%f %f %f", &amp;principal, &amp;rate, &amp;time);

    // Pass values to the function
    interest = simpleInterest(principal, rate, time);

    printf("Simple Interest = %.2f\\n", interest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The values are copied into the function parameters. The function
    performs the calculation without modifying the original variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter principal, rate and time: 10000 5 2</p>
    <p><strong>Simple Interest = 1000.00</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate call by value using a function that
    attempts to change the marks of a student.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void modifyMarks(int marks)
{
    // Modify only the local copy
    marks = marks + 10;

    printf("Inside function: marks = %d\\n", marks);
}

int main()
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    printf("Before function call: marks = %d\\n", marks);

    // Pass marks by value
    modifyMarks(marks);

    printf("After function call: marks = %d\\n", marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives a copy of the student's marks. Adding 10 inside
    the function changes only that copy, not the original variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks: 65</p>
    <p><strong>Before function call: marks = 65</strong></p>
    <p><strong>Inside function: marks = 75</strong></p>
    <p><strong>After function call: marks = 65</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the area and perimeter of a rectangle
    using functions with parameters passed by value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float area(float length, float width)
{
    // Calculate area
    return length * width;
}

float perimeter(float length, float width)
{
    // Calculate perimeter
    return 2 * (length + width);
}

int main()
{
    float l, w;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;l, &amp;w);

    // Values are passed by value
    printf("Area = %.2f\\n", area(l, w));
    printf("Perimeter = %.2f\\n", perimeter(l, w));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The length and width values are copied into the parameters of both
    functions. Neither function changes the original variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
    <p><strong>Perimeter = 30.00</strong></p>
  </div>
  `,

  `
  <h2>Call by Value — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate call by value by passing two numbers
    to a function that attempts to swap them. Clearly display the values
    before and after the function call.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void swap(int a, int b)
{
    int temp;

    // Swap only the copied values
    temp = a;
    a = b;
    b = temp;

    printf("Inside function after swap: a = %d, b = %d\\n", a, b);
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    printf("Before function call: x = %d, y = %d\\n", x, y);

    // Pass x and y by value
    swap(x, y);

    printf("After function call: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This is the key demonstration of call by value. The function can
    modify its parameters, but the original variables remain unchanged
    because only copies were passed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 100 200</p>
    <p><strong>Before function call: x = 100, y = 200</strong></p>
    <p><strong>Inside function after swap: a = 200, b = 100</strong></p>
    <p><strong>After function call: x = 100, y = 200</strong></p>
  </div>
  `
];
SOLUTIONS["s-m3-call-by-reference"] = [

  `
  <h2>Call by Reference — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to change the value of an integer using a function
    and demonstrate modification of the original variable.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void changeValue(int *n)
{
    // Modify the original variable through its address
    *n = 100;
}

int main()
{
    int num = 20;

    printf("Before function call: %d\\n", num);

    // Pass the address of num
    changeValue(&amp;num);

    printf("After function call: %d\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives the address of <code>num</code> through a pointer.
    Using <code>*n</code>, the function accesses and modifies the original variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before function call: 20</strong></p>
    <p><strong>After function call: 100</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to swap two numbers using a function and pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void swap(int *a, int *b)
{
    int temp;

    // Swap the original values
    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    printf("Before swap: x = %d, y = %d\\n", x, y);

    // Pass addresses of x and y
    swap(&amp;x, &amp;y);

    printf("After swap: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The addresses of <code>x</code> and <code>y</code> are passed to the
    function. Therefore, changes made through the pointers affect the
    original variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before swap: x = 10, y = 20</strong></p>
    <p><strong>After swap: x = 20, y = 10</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to increase a number by 10 using a function and pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void increase(int *n)
{
    // Modify the original value
    *n = *n + 10;
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Pass address of num
    increase(&amp;num);

    printf("Updated value = %d\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer parameter stores the address of the original variable.
    Dereferencing it with <code>*n</code> changes the original value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 25</p>
    <p><strong>Updated value = 35</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the quotient and remainder of two numbers
    using a function with pointer parameters.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void divide(int dividend, int divisor, int *quotient, int *remainder)
{
    // Store both results through pointers
    *quotient = dividend / divisor;
    *remainder = dividend % divisor;
}

int main()
{
    int a, b, quotient, remainder;

    printf("Enter dividend and divisor: ");
    scanf("%d %d", &amp;a, &amp;b);

    if (b != 0)
    {
        // Pass addresses for output values
        divide(a, b, &amp;quotient, &amp;remainder);

        printf("Quotient = %d\\n", quotient);
        printf("Remainder = %d\\n", remainder);
    }
    else
    {
        printf("Division by zero is not allowed.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Pointer parameters allow a function to write results directly into
    variables supplied by the caller. Here, two results are returned
    through <code>quotient</code> and <code>remainder</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter dividend and divisor: 17 5</p>
    <p><strong>Quotient = 3</strong></p>
    <p><strong>Remainder = 2</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest and smallest of two numbers
    using pointer parameters.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void findValues(int a, int b, int *largest, int *smallest)
{
    // Determine largest value
    if (a &gt; b)
    {
        *largest = a;
        *smallest = b;
    }
    else
    {
        *largest = b;
        *smallest = a;
    }
}

int main()
{
    int x, y, largest, smallest;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // Pass addresses of result variables
    findValues(x, y, &amp;largest, &amp;smallest);

    printf("Largest = %d\\n", largest);
    printf("Smallest = %d\\n", smallest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The input values are passed normally, while the addresses of the
    result variables are passed through pointers so the function can
    store both results directly.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 45 12</p>
    <p><strong>Largest = 45</strong></p>
    <p><strong>Smallest = 12</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the total and average of three marks
    using pointer parameters to return both results.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void calculate(int m1, int m2, int m3, int *total, float *average)
{
    // Calculate total
    *total = m1 + m2 + m3;

    // Calculate average
    *average = *total / 3.0;
}

int main()
{
    int m1, m2, m3, total;
    float average;

    printf("Enter three marks: ");
    scanf("%d %d %d", &amp;m1, &amp;m2, &amp;m3);

    // Pass addresses of output variables
    calculate(m1, m2, m3, &amp;total, &amp;average);

    printf("Total = %d\\n", total);
    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function uses pointer parameters to return two values:
    <code>total</code> and <code>average</code>. This is useful when a
    function needs to provide multiple results.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three marks: 70 80 90</p>
    <p><strong>Total = 240</strong></p>
    <p><strong>Average = 80.00</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to increment a value using a function and display
    the changed value in <code>main()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void increment(int *n)
{
    // Increment the original variable
    (*n)++;
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    printf("Before increment: %d\\n", num);

    // Pass address of num
    increment(&amp;num);

    printf("After increment: %d\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Because the function receives the address of <code>num</code>, it can
    modify the original variable using the dereference operator.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 50</p>
    <p><strong>Before increment: 50</strong></p>
    <p><strong>After increment: 51</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify two numbers using a function so that
    the first number becomes twice its original value and the second
    number becomes three times its original value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void modify(int *a, int *b)
{
    // Modify the original values
    *a = *a * 2;
    *b = *b * 3;
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    printf("Before modification: x = %d, y = %d\\n", x, y);

    // Pass addresses of both variables
    modify(&amp;x, &amp;y);

    printf("After modification: x = %d, y = %d\\n", x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Both variables are modified through their addresses. Therefore,
    the changes are visible in <code>main()</code> after the function returns.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before modification: x = 10, y = 20</strong></p>
    <p><strong>After modification: x = 20, y = 60</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the sum and product of two numbers using
    a function with pointer parameters for the results.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void calculate(int a, int b, int *sum, int *product)
{
    // Store results using pointers
    *sum = a + b;
    *product = a * b;
}

int main()
{
    int x, y, sum, product;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    // Pass addresses of result variables
    calculate(x, y, &amp;sum, &amp;product);

    printf("Sum = %d\\n", sum);
    printf("Product = %d\\n", product);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function returns two results through pointer parameters.
    This demonstrates a common use of pointers when a function needs
    to modify or produce more than one output value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 8 7</p>
    <p><strong>Sum = 15</strong></p>
    <p><strong>Product = 56</strong></p>
  </div>
  `,

  `
  <h2>Call by Reference — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to sort three numbers in ascending order using
    a function and pointer parameters.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void sortThree(int *a, int *b, int *c)
{
    int temp;

    // Compare first and second values
    if (*a &gt; *b)
    {
        temp = *a;
        *a = *b;
        *b = temp;
    }

    // Compare second and third values
    if (*b &gt; *c)
    {
        temp = *b;
        *b = *c;
        *c = temp;
    }

    // Check first and second again
    if (*a &gt; *b)
    {
        temp = *a;
        *a = *b;
        *b = temp;
    }
}

int main()
{
    int x, y, z;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;x, &amp;y, &amp;z);

    // Pass addresses of the three variables
    sortThree(&amp;x, &amp;y, &amp;z);

    printf("Ascending order: %d %d %d\\n", x, y, z);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives the addresses of all three variables and
    directly rearranges their original values. Therefore, the sorted
    values are available in <code>main()</code> after the function call.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 30 10 20</p>
    <p><strong>Ascending order: 10 20 30</strong></p>
  </div>
  `

];
SOLUTIONS["s-m3-passing-arrays"] = [

  `
  <h2>Passing Arrays to Functions — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass a one-dimensional array to a function
    and display all its elements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void displayArray(int arr[], int n)
{
    int i;

    // Display array elements
    for (i = 0; i &lt; n; i++)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    // Read array elements
    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array and size to the function
    printf("Array: ");
    displayArray(arr, n);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An array can be passed to a function by providing its name.
    The function receives access to the array elements along with its size.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 40 50</p>
    <p><strong>Array: 10 20 30 40 50</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and calculate the
    sum of all its elements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int arraySum(int arr[], int n)
{
    int i, sum = 0;

    // Add every array element
    for (i = 0; i &lt; n; i++)
    {
        sum = sum + arr[i];
    }

    return sum;
}

int main()
{
    int arr[100], n, i, result;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array to the function
    result = arraySum(arr, n);

    printf("Sum = %d\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives the array and its size and processes each
    element to calculate the total.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 5 15 10</p>
    <p><strong>Sum = 60</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and find its largest
    and smallest elements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void findValues(int arr[], int n, int *largest, int *smallest)
{
    int i;

    // Initialize using the first element
    *largest = arr[0];
    *smallest = arr[0];

    // Compare remaining elements
    for (i = 1; i &lt; n; i++)
    {
        if (arr[i] &gt; *largest)
            *largest = arr[i];

        if (arr[i] &lt; *smallest)
            *smallest = arr[i];
    }
}

int main()
{
    int arr[100], n, i;
    int largest, smallest;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array and addresses of result variables
    findValues(arr, n, &amp;largest, &amp;smallest);

    printf("Largest = %d\\n", largest);
    printf("Smallest = %d\\n", smallest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The array is passed to the function for processing, while pointers
    are used to return the largest and smallest values.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 12 45 7 30 18</p>
    <p><strong>Largest = 45</strong></p>
    <p><strong>Smallest = 7</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and calculate its average.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float arrayAverage(int arr[], int n)
{
    int i, sum = 0;

    // Calculate total of array elements
    for (i = 0; i &lt; n; i++)
    {
        sum = sum + arr[i];
    }

    return (float)sum / n;
}

int main()
{
    int arr[100], n, i;
    float average;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array to the function
    average = arrayAverage(arr, n);

    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function calculates the sum of all elements and divides it by
    the number of elements to obtain the average.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 40 50</p>
    <p><strong>Average = 30.00</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and count the number
    of even and odd elements.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void countEvenOdd(int arr[], int n, int *even, int *odd)
{
    int i;

    *even = 0;
    *odd = 0;

    // Classify each element
    for (i = 0; i &lt; n; i++)
    {
        if (arr[i] % 2 == 0)
            (*even)++;
        else
            (*odd)++;
    }
}

int main()
{
    int arr[100], n, i;
    int even, odd;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array and result addresses
    countEvenOdd(arr, n, &amp;even, &amp;odd);

    printf("Even elements = %d\\n", even);
    printf("Odd elements = %d\\n", odd);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function examines every array element and uses pointer parameters
    to return the two counts.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 6</p>
    <p>Enter 6 elements: 10 15 22 7 18 9</p>
    <p><strong>Even elements = 3</strong></p>
    <p><strong>Odd elements = 3</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and search for
    a given element using linear search.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int searchElement(int arr[], int n, int search)
{
    int i;

    // Search elements one by one
    for (i = 0; i &lt; n; i++)
    {
        if (arr[i] == search)
        {
            return i;
        }
    }

    return -1;
}

int main()
{
    int arr[100], n, i, search, position;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &amp;search);

    // Pass array to search function
    position = searchElement(arr, n, search);

    if (position != -1)
        printf("Element found at index %d.\\n", position);
    else
        printf("Element not found.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function checks each array element and returns its index when
    the required element is found. It returns <code>-1</code> if no match exists.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 25 30 45 50</p>
    <p>Enter element to search: 30</p>
    <p><strong>Element found at index 2.</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and display its
    elements in reverse order.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void displayReverse(int arr[], int n)
{
    int i;

    // Start from the last array element
    for (i = n - 1; i &gt;= 0; i--)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    printf("Reverse order: ");

    // Pass array to the function
    displayReverse(arr, n);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function receives the array and starts accessing it from the
    last valid index, producing the reverse order.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 40 50</p>
    <p><strong>Reverse order: 50 40 30 20 10</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and replace every
    negative element with zero.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void replaceNegative(int arr[], int n)
{
    int i;

    // Replace negative values
    for (i = 0; i &lt; n; i++)
    {
        if (arr[i] &lt; 0)
        {
            arr[i] = 0;
        }
    }
}

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array for modification
    replaceNegative(arr, n);

    printf("Modified array: ");

    for (i = 0; i &lt; n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The array is passed to the function, which modifies its elements.
    Therefore, the changes are visible in <code>main()</code> as well.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 -5 20 -8 15</p>
    <p><strong>Modified array: 10 0 20 0 15</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array to a function and sort its elements
    in ascending order using Bubble Sort.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void sortArray(int arr[], int n)
{
    int i, j, temp;

    // Perform Bubble Sort
    for (i = 0; i &lt; n - 1; i++)
    {
        for (j = 0; j &lt; n - i - 1; j++)
        {
            if (arr[j] &gt; arr[j + 1])
            {
                // Swap adjacent elements
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    // Pass array to sorting function
    sortArray(arr, n);

    printf("Sorted array: ");

    for (i = 0; i &lt; n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The sorting function directly rearranges the elements of the passed
    array. Bubble Sort compares adjacent elements and swaps them when
    they are in the wrong order.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 40 10 30 5 25</p>
    <p><strong>Sorted array: 5 10 25 30 40</strong></p>
  </div>
  `,

  `
  <h2>Passing Arrays to Functions — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an array of student marks to a function
    and calculate the average, highest and lowest marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void analyzeMarks(
    int marks[],
    int n,
    float *average,
    int *highest,
    int *lowest)
{
    int i, sum = 0;

    // Initialize highest and lowest
    *highest = marks[0];
    *lowest = marks[0];

    // Process all marks
    for (i = 0; i &lt; n; i++)
    {
        sum = sum + marks[i];

        if (marks[i] &gt; *highest)
            *highest = marks[i];

        if (marks[i] &lt; *lowest)
            *lowest = marks[i];
    }

    *average = (float)sum / n;
}

int main()
{
    int marks[100], n, i;
    int highest, lowest;
    float average;

    printf("Enter number of students: ");
    scanf("%d", &amp;n);

    printf("Enter marks: ");

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;marks[i]);
    }

    // Pass array and addresses of result variables
    analyzeMarks(
        marks,
        n,
        &amp;average,
        &amp;highest,
        &amp;lowest
    );

    printf("Average = %.2f\\n", average);
    printf("Highest = %d\\n", highest);
    printf("Lowest = %d\\n", lowest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines array passing with pointer parameters. The
    function processes the complete array and returns three results:
    average, highest and lowest. This is a practical pattern for
    processing student marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of students: 5</p>
    <p>Enter marks: 12 45 3 67 22</p>
    <p><strong>Average = 29.80</strong></p>
    <p><strong>Highest = 67</strong></p>
    <p><strong>Lowest = 3</strong></p>
  </div>
  `
];
SOLUTIONS["s-m3-nested-functions"] = [

  `
  <h2>Nested Functions — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program in which one function calls another function to
    calculate the square of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int square(int n)
{
    // Return square of the number
    return n * n;
}

void displaySquare(int n)
{
    // Call square() from another function
    int result = square(n);

    printf("Square = %d\\n", result);
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // Call the function that internally calls square()
    displaySquare(num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>displaySquare()</code> function calls <code>square()</code>.
    This demonstrates function-to-function calling in C.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 8</p>
    <p><strong>Square = 64</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where one function calls another function to
    calculate the cube of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int cube(int n)
{
    // Calculate cube
    return n * n * n;
}

void displayCube(int n)
{
    // Call cube() from this function
    printf("Cube = %d\\n", cube(n));
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    displayCube(num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>displayCube()</code> function does not calculate the cube
    itself. Instead, it calls the <code>cube()</code> function and uses
    its returned value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 4</p>
    <p><strong>Cube = 64</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where a function calls another function to determine
    whether a number is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int isEven(int n)
{
    // Return 1 when the number is even
    return n % 2 == 0;
}

void checkNumber(int n)
{
    // Call isEven() from another function
    if (isEven(n))
        printf("The number is even.\\n");
    else
        printf("The number is odd.\\n");
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    checkNumber(num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    <code>checkNumber()</code> calls <code>isEven()</code> to obtain the
    result and then displays the appropriate message.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 15</p>
    <p><strong>The number is odd.</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where one function calls two other functions to
    calculate the square and cube of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int square(int n)
{
    return n * n;
}

int cube(int n)
{
    return n * n * n;
}

void displayResults(int n)
{
    // Call both helper functions
    printf("Square = %d\\n", square(n));
    printf("Cube = %d\\n", cube(n));
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    displayResults(num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A single function can call multiple other functions. Here,
    <code>displayResults()</code> calls both <code>square()</code>
    and <code>cube()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Square = 25</strong></p>
    <p><strong>Cube = 125</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where one function calculates the largest of two
    numbers by calling another comparison function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int larger(int a, int b)
{
    // Return the larger number
    if (a &gt; b)
        return a;
    else
        return b;
}

void displayLargest(int a, int b)
{
    // Call larger() from this function
    int result = larger(a, b);

    printf("Largest = %d\\n", result);
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    displayLargest(x, y);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    <code>displayLargest()</code> delegates the comparison to
    <code>larger()</code> and displays the returned value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 35 72</p>
    <p><strong>Largest = 72</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where one function calculates the area of a rectangle
    and another function calls it to display the result.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float rectangleArea(float length, float width)
{
    // Calculate rectangle area
    return length * width;
}

void displayArea(float length, float width)
{
    // Call rectangleArea() from this function
    printf("Area = %.2f\\n", rectangleArea(length, width));
}

int main()
{
    float l, w;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;l, &amp;w);

    displayArea(l, w);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function <code>displayArea()</code> calls
    <code>rectangleArea()</code> and displays the returned area.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where one function calls another function to
    calculate the factorial of a number and then determines whether
    the factorial is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

long long factorial(int n)
{
    long long fact = 1;
    int i;

    // Calculate factorial
    for (i = 1; i &lt;= n; i++)
    {
        fact = fact * i;
    }

    return fact;
}

void checkFactorial(int n)
{
    long long result;

    // Call factorial() from this function
    result = factorial(n);

    printf("Factorial = %lld\\n", result);

    // Check the returned result
    if (result % 2 == 0)
        printf("Factorial is even.\\n");
    else
        printf("Factorial is odd.\\n");
}

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    checkFactorial(n);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    <code>checkFactorial()</code> first calls <code>factorial()</code>
    and then performs another operation on the returned value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Factorial = 120</strong></p>
    <p><strong>Factorial is even.</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where a function calls separate functions to
    calculate total and average marks of three subjects.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int totalMarks(int a, int b, int c)
{
    // Return total marks
    return a + b + c;
}

float averageMarks(int a, int b, int c)
{
    // Calculate average
    return totalMarks(a, b, c) / 3.0;
}

void displayResult(int a, int b, int c)
{
    // Call both functions
    printf("Total = %d\\n", totalMarks(a, b, c));
    printf("Average = %.2f\\n", averageMarks(a, b, c));
}

int main()
{
    int m1, m2, m3;

    printf("Enter marks of three subjects: ");
    scanf("%d %d %d", &amp;m1, &amp;m2, &amp;m3);

    displayResult(m1, m2, m3);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example demonstrates a chain of function calls:
    <code>main()</code> calls <code>displayResult()</code>, which calls
    other functions. <code>averageMarks()</code> also calls
    <code>totalMarks()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks of three subjects: 70 80 90</p>
    <p><strong>Total = 240</strong></p>
    <p><strong>Average = 80.00</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program where one function calls separate functions to
    calculate the area and perimeter of a circle.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float circleArea(float radius)
{
    return 3.14159 * radius * radius;
}

float circlePerimeter(float radius)
{
    return 2 * 3.14159 * radius;
}

void displayCircleResult(float radius)
{
    // Call both calculation functions
    printf("Area = %.2f\\n", circleArea(radius));
    printf("Circumference = %.2f\\n", circlePerimeter(radius));
}

int main()
{
    float radius;

    printf("Enter radius: ");
    scanf("%f", &amp;radius);

    displayCircleResult(radius);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The display function calls two separate calculation functions.
    This makes each function responsible for one specific task.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter radius: 5</p>
    <p><strong>Area = 78.54</strong></p>
    <p><strong>Circumference = 31.42</strong></p>
  </div>
  `,

  `
  <h2>Nested Functions — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a chain of functions to find the largest
    of three numbers. One function should compare two numbers, while
    another function should use it to determine the largest value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int larger(int a, int b)
{
    // Return the larger of two values
    if (a &gt; b)
        return a;
    else
        return b;
}

int largestOfThree(int a, int b, int c)
{
    int firstLargest;

    // Call larger() to compare first two values
    firstLargest = larger(a, b);

    // Call larger() again with the third value
    return larger(firstLargest, c);
}

void displayLargest(int a, int b, int c)
{
    // Call largestOfThree()
    int result = largestOfThree(a, b, c);

    printf("Largest = %d\\n", result);
}

int main()
{
    int x, y, z;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;x, &amp;y, &amp;z);

    displayLargest(x, y, z);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example demonstrates a chain of function calls:
    <code>main()</code> calls <code>displayLargest()</code>,
    <code>displayLargest()</code> calls <code>largestOfThree()</code>,
    and <code>largestOfThree()</code> calls <code>larger()</code>.
    This is a useful way to demonstrate nested function calls in standard C.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 25 68 42</p>
    <p><strong>Largest = 68</strong></p>
  </div>
  `

];

SOLUTIONS["s-m3-recursion"] = [

  `
  <h2>Recursion — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to calculate the factorial of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

long long factorial(int n)
{
    // Base case
    if (n &lt;= 1)
        return 1;

    // Recursive call
    return n * factorial(n - 1);
}

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &amp;n);

    printf("Factorial = %lld\\n", factorial(n));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Recursion occurs when a function calls itself. Every recursive function
    must have a base case to stop further calls. Here, <code>n &lt;= 1</code>
    is the base case.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Factorial = 120</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to calculate the sum of the first
    N natural numbers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int sumNatural(int n)
{
    // Base case
    if (n == 0)
        return 0;

    // Recursive call
    return n + sumNatural(n - 1);
}

int main()
{
    int n;

    printf("Enter N: ");
    scanf("%d", &amp;n);

    printf("Sum = %d\\n", sumNatural(n));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function reduces the problem by one value in every call.
    When <code>n</code> becomes zero, recursion stops.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter N: 5</p>
    <p><strong>Sum = 15</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to generate the first N Fibonacci terms using recursion.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int fibonacci(int n)
{
    // Base cases
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    // Recursive calls
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main()
{
    int n, i;

    printf("Enter number of terms: ");
    scanf("%d", &amp;n);

    printf("Fibonacci series: ");

    // Generate Fibonacci terms
    for (i = 0; i &lt; n; i++)
    {
        printf("%d ", fibonacci(i));
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each Fibonacci term is obtained by adding the previous two terms.
    The first two terms form the base cases of the recursive function.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of terms: 7</p>
    <p><strong>Fibonacci series: 0 1 1 2 3 5 8</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to calculate the power of a number.
    Calculate <code>base<sup>exponent</sup></code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

long long power(int base, int exponent)
{
    // Base case
    if (exponent == 0)
        return 1;

    // Recursive multiplication
    return base * power(base, exponent - 1);
}

int main()
{
    int base, exponent;

    printf("Enter base and exponent: ");
    scanf("%d %d", &amp;base, &amp;exponent);

    printf("Result = %lld\\n", power(base, exponent));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The exponent is reduced by one during every recursive call.
    When the exponent becomes zero, the function returns 1.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter base and exponent: 2 5</p>
    <p><strong>Result = 32</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to calculate the sum of digits
    of an integer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int sumDigits(int n)
{
    // Base case
    if (n == 0)
        return 0;

    // Add last digit and process remaining digits
    return (n % 10) + sumDigits(n / 10);
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    if (num &lt; 0)
        num = -num;

    printf("Sum of digits = %d\\n", sumDigits(num));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The last digit is extracted using <code>% 10</code>, while
    <code>n / 10</code> removes that digit before the next recursive call.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 4527</p>
    <p><strong>Sum of digits = 18</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to calculate the greatest common
    divisor (GCD) of two numbers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int gcd(int a, int b)
{
    // Base case
    if (b == 0)
        return a;

    // Recursive Euclidean algorithm
    return gcd(b, a % b);
}

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    printf("GCD = %d\\n", gcd(a, b));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The Euclidean algorithm repeatedly replaces the pair with
    <code>(b, a % b)</code>. Recursion stops when the second value becomes zero.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 48 18</p>
    <p><strong>GCD = 6</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to print the numbers from N down to 1.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void printDescending(int n)
{
    // Stop when n reaches zero
    if (n == 0)
        return;

    printf("%d ", n);

    // Recursive call with smaller value
    printDescending(n - 1);
}

int main()
{
    int n;

    printf("Enter N: ");
    scanf("%d", &amp;n);

    printf("Numbers: ");
    printDescending(n);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function prints the current value before making the next recursive
    call. Recursion ends when <code>n</code> becomes zero.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter N: 5</p>
    <p><strong>Numbers: 5 4 3 2 1</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to reverse the digits of a number.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void reverseNumber(int n)
{
    // Print last digit
    printf("%d", n % 10);

    // Continue with remaining digits
    if (n &gt;= 10)
    {
        reverseNumber(n / 10);
    }
}

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    if (num &lt; 0)
        num = -num;

    printf("Reversed number = ");

    if (num == 0)
        printf("0");
    else
        reverseNumber(num);

    printf("\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function prints the last digit first and then recursively processes
    the remaining digits. This naturally produces the digits in reverse order.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12345</p>
    <p><strong>Reversed number = 54321</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to calculate the sum of elements
    of a one-dimensional array.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int arraySum(int arr[], int n)
{
    // Base case
    if (n == 0)
        return 0;

    // Add last element and process remaining elements
    return arr[n - 1] + arraySum(arr, n - 1);
}

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    printf("Enter %d elements: ", n);

    for (i = 0; i &lt; n; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    printf("Sum = %d\\n", arraySum(arr, n));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function processes one array element at a time. The problem size
    decreases from <code>n</code> to <code>n - 1</code> until no elements remain.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter number of elements: 5</p>
    <p>Enter 5 elements: 10 20 30 15 25</p>
    <p><strong>Sum = 100</strong></p>
  </div>
  `,

  `
  <h2>Recursion — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using recursion to convert a decimal number
    into its binary representation.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void decimalToBinary(int n)
{
    // Process higher-order bits first
    if (n &gt; 1)
    {
        decimalToBinary(n / 2);
    }

    // Display the current binary digit
    printf("%d", n % 2);
}

int main()
{
    int num;

    printf("Enter a decimal number: ");
    scanf("%d", &amp;num);

    if (num == 0)
    {
        printf("Binary = 0\\n");
    }
    else
    {
        printf("Binary = ");
        decimalToBinary(num);
        printf("\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The function repeatedly divides the decimal number by 2 using recursion.
    The digits are printed while the recursive calls return, producing the
    binary representation in the correct order.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a decimal number: 13</p>
    <p><strong>Binary = 1101</strong></p>
  </div>
  `
];

SOLUTIONS["s-m4-introduction"] = [

  `
  <h2>Structure & Union — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a simple structure named <code>Student</code>
    containing roll number, name and marks. Read and display the student's details.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Display student details
    printf("\\nStudent Details:\\n");
    printf("Roll Number = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure is a user-defined data type that can group variables of
    different data types under one name. Here, the <code>Student</code>
    structure groups roll number, name and marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 82.5</p>
    <p><strong>Student Details:</strong></p>
    <p><strong>Roll Number = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 82.50</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a structure named <code>Employee</code>
    containing employee ID, name and salary, and display the stored information.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee emp;

    printf("Enter employee ID: ");
    scanf("%d", &amp;emp.id);

    printf("Enter name: ");
    scanf("%49s", emp.name);

    printf("Enter salary: ");
    scanf("%f", &amp;emp.salary);

    // Display employee information
    printf("\\nEmployee Details:\\n");
    printf("ID = %d\\n", emp.id);
    printf("Name = %s\\n", emp.name);
    printf("Salary = %.2f\\n", emp.salary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure can combine related information belonging to one entity.
    Each member is accessed using the dot operator.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter salary: 45000</p>
    <p><strong>Employee Details:</strong></p>
    <p><strong>ID = 501</strong></p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Salary = 45000.00</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a book using a structure
    containing book ID, title and price.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Book
{
    int id;
    char title[100];
    float price;
};

int main()
{
    struct Book book;

    printf("Enter book ID: ");
    scanf("%d", &amp;book.id);

    printf("Enter title: ");
    scanf("%99s", book.title);

    printf("Enter price: ");
    scanf("%f", &amp;book.price);

    // Display book details
    printf("\\nBook Details:\\n");
    printf("Book ID = %d\\n", book.id);
    printf("Title = %s\\n", book.title);
    printf("Price = %.2f\\n", book.price);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure is useful for representing a real-world object whose
    properties may have different data types.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter book ID: 101</p>
    <p>Enter title: CProgramming</p>
    <p>Enter price: 450</p>
    <p><strong>Book Details:</strong></p>
    <p><strong>Book ID = 101</strong></p>
    <p><strong>Title = CProgramming</strong></p>
    <p><strong>Price = 450.00</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the total and average marks of a student
    using a structure.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    char name[50];
    int marks1;
    int marks2;
    int marks3;
};

int main()
{
    struct Student s;
    int total;
    float average;

    printf("Enter student name: ");
    scanf("%49s", s.name);

    printf("Enter marks of three subjects: ");
    scanf("%d %d %d",
          &amp;s.marks1,
          &amp;s.marks2,
          &amp;s.marks3);

    // Calculate total and average
    total = s.marks1 + s.marks2 + s.marks3;
    average = total / 3.0;

    printf("\\nStudent = %s\\n", s.name);
    printf("Total = %d\\n", total);
    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can be used directly in calculations. Here,
    the marks stored inside the structure are added to calculate
    the total and average.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter student name: Neha</p>
    <p>Enter marks of three subjects: 70 80 90</p>
    <p><strong>Student = Neha</strong></p>
    <p><strong>Total = 240</strong></p>
    <p><strong>Average = 80.00</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a rectangle using a structure
    and calculate its area and perimeter.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Rectangle
{
    float length;
    float width;
};

int main()
{
    struct Rectangle r;
    float area, perimeter;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;r.length, &amp;r.width);

    // Calculate area and perimeter
    area = r.length * r.width;
    perimeter = 2 * (r.length + r.width);

    printf("Area = %.2f\\n", area);
    printf("Perimeter = %.2f\\n", perimeter);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can represent the properties of a real-world object.
    Here, length and width are grouped inside the <code>Rectangle</code> structure.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
    <p><strong>Perimeter = 30.00</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to compare the marks of two students using a structure
    and display the student with higher marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    char name[50];
    float marks;
};

int main()
{
    struct Student s1, s2;

    printf("Enter first student's name and marks: ");
    scanf("%49s %f", s1.name, &amp;s1.marks);

    printf("Enter second student's name and marks: ");
    scanf("%49s %f", s2.name, &amp;s2.marks);

    // Compare marks
    if (s1.marks &gt; s2.marks)
        printf("%s has higher marks.\\n", s1.name);
    else if (s2.marks &gt; s1.marks)
        printf("%s has higher marks.\\n", s2.name);
    else
        printf("Both students have equal marks.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Separate structure variables can store information about different
    students. Their individual members can then be compared like normal variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first student's name and marks: Rahul 78</p>
    <p>Enter second student's name and marks: Amit 85</p>
    <p><strong>Amit has higher marks.</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store date information using a structure containing
    day, month and year, and display the date.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Date
{
    int day;
    int month;
    int year;
};

int main()
{
    struct Date date;

    printf("Enter day, month and year: ");
    scanf("%d %d %d",
          &amp;date.day,
          &amp;date.month,
          &amp;date.year);

    // Display date
    printf("Date = %02d/%02d/%d\\n",
           date.day,
           date.month,
           date.year);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure can group several related values into one logical unit.
    The <code>Date</code> structure groups day, month and year.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter day, month and year: 4 9 2026</p>
    <p><strong>Date = 04/09/2026</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a product using a structure
    and calculate the total cost for a given quantity.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Product
{
    int id;
    char name[50];
    float price;
    int quantity;
};

int main()
{
    struct Product p;
    float total;

    printf("Enter product ID: ");
    scanf("%d", &amp;p.id);

    printf("Enter product name: ");
    scanf("%49s", p.name);

    printf("Enter price: ");
    scanf("%f", &amp;p.price);

    printf("Enter quantity: ");
    scanf("%d", &amp;p.quantity);

    // Calculate total cost
    total = p.price * p.quantity;

    printf("\\nProduct Details:\\n");
    printf("ID = %d\\n", p.id);
    printf("Name = %s\\n", p.name);
    printf("Total Cost = %.2f\\n", total);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure allows multiple properties of a product to be stored
    together. The stored members can then be used in calculations.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter product ID: 201</p>
    <p>Enter product name: Keyboard</p>
    <p>Enter price: 800</p>
    <p>Enter quantity: 3</p>
    <p><strong>Product Details:</strong></p>
    <p><strong>ID = 201</strong></p>
    <p><strong>Name = Keyboard</strong></p>
    <p><strong>Total Cost = 2400.00</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a student using a structure
    and determine whether the student has passed or failed based on marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Check result using structure member
    if (s.marks &gt;= 50)
        printf("%s has passed.\\n", s.name);
    else
        printf("%s has failed.\\n", s.name);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can be used directly in decision-making statements.
    Here, the student's marks member is used to determine the result.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 105</p>
    <p>Enter name: Priya</p>
    <p>Enter marks: 68</p>
    <p><strong>Priya has passed.</strong></p>
  </div>
  `,

  `
  <h2>Structure & Union — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a structure named <code>Student</code>
    containing roll number, name and marks, and display the complete
    student record in a formatted manner.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Display complete record
    printf("\\n-------------------------\\n");
    printf("       STUDENT RECORD\\n");
    printf("-------------------------\\n");
    printf("Roll Number : %d\\n", s.roll);
    printf("Name        : %s\\n", s.name);
    printf("Marks       : %.2f\\n", s.marks);
    printf("-------------------------\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This program brings together the basic structure concepts covered
    in this section: structure definition, structure variable creation,
    member access using the dot operator, input and formatted output.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rohit</p>
    <p>Enter marks: 88.5</p>
    <p><strong>-------------------------</strong></p>
    <p><strong>       STUDENT RECORD</strong></p>
    <p><strong>-------------------------</strong></p>
    <p><strong>Roll Number : 101</strong></p>
    <p><strong>Name        : Rohit</strong></p>
    <p><strong>Marks       : 88.50</strong></p>
    <p><strong>-------------------------</strong></p>
  </div>
  `
];

SOLUTIONS["s-m4-storage-classes"] = [

  `
  <h2>Storage Classes — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to declare a local variable using the
    <code>auto</code> storage class and display its value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    auto int num = 25;

    // Display the auto variable
    printf("Value = %d\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>auto</code> storage class is the default storage class for
    local variables. An automatic variable exists while the block in
    which it is declared is executing.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value = 25</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate the use of a local <code>auto</code>
    variable inside a function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void display()
{
    auto int value = 10;

    // Display local automatic variable
    printf("Value inside function = %d\\n", value);
}

int main()
{
    display();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>auto</code> variable is local to the function. Its scope is
    limited to that function block.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value inside function = 10</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate a <code>register</code> variable
    used as a loop counter.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    register int i;

    // Use register variable as loop counter
    for (i = 1; i &lt;= 5; i++)
    {
        printf("%d ", i);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>register</code> storage class is used to request that a
    frequently accessed local variable be kept in a CPU register when
    practical. The compiler decides whether the request can be honored.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>1 2 3 4 5</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program using a <code>static</code> local variable to
    demonstrate that its value is preserved between function calls.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void counter()
{
    static int count = 0;

    // Increase the preserved value
    count++;

    printf("Count = %d\\n", count);
}

int main()
{
    // Call the function multiple times
    counter();
    counter();
    counter();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A local <code>static</code> variable retains its value between
    function calls. Unlike an ordinary local variable, it is not
    reinitialized on every call.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Count = 1</strong></p>
    <p><strong>Count = 2</strong></p>
    <p><strong>Count = 3</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to compare an ordinary local variable with a
    static local variable by calling the same function three times.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void compareVariables()
{
    int normal = 0;
    static int persistent = 0;

    // Increment both variables
    normal++;
    persistent++;

    printf("Normal = %d, Static = %d\\n",
           normal, persistent);
}

int main()
{
    // Call function repeatedly
    compareVariables();
    compareVariables();
    compareVariables();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The ordinary local variable is initialized again on every function
    call, so its value remains 1. The static variable retains its
    previous value and therefore increases with every call.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Normal = 1, Static = 1</strong></p>
    <p><strong>Normal = 1, Static = 2</strong></p>
    <p><strong>Normal = 1, Static = 3</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate an <code>extern</code> variable
    declared outside the function and accessed inside <code>main()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int number = 50;

int main()
{
    extern int number;

    // Access the externally declared variable
    printf("Number = %d\\n", number);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>extern</code> declaration tells the compiler that the
    variable is defined elsewhere. Here, the actual definition of
    <code>number</code> is outside <code>main()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Number = 50</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use a global variable with an <code>extern</code>
    declaration inside a function and modify its value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int value = 20;

void update()
{
    extern int value;

    // Modify the global variable
    value = value + 10;
}

int main()
{
    printf("Before update = %d\\n", value);

    update();

    printf("After update = %d\\n", value);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>extern</code> declaration allows the function to refer to
    the global variable defined outside it. Therefore, the update is
    visible in <code>main()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before update = 20</strong></p>
    <p><strong>After update = 30</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate a static variable used to count
    how many times a function has been called.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void functionCallCount()
{
    static int count = 0;

    // Preserve and increment the call count
    count++;

    printf("Function called %d time(s).\\n", count);
}

int main()
{
    functionCallCount();
    functionCallCount();
    functionCallCount();
    functionCallCount();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The static variable retains its value after the function returns.
    This makes it useful for maintaining state across multiple calls.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Function called 1 time(s).</strong></p>
    <p><strong>Function called 2 time(s).</strong></p>
    <p><strong>Function called 3 time(s).</strong></p>
    <p><strong>Function called 4 time(s).</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate the difference between a normal
    local variable and a static local variable using repeated function calls.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void demonstrate()
{
    int normal = 10;
    static int persistent = 10;

    // Modify both variables
    normal = normal + 5;
    persistent = persistent + 5;

    printf("Normal = %d, Static = %d\\n",
           normal, persistent);
}

int main()
{
    demonstrate();
    demonstrate();
    demonstrate();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The normal variable starts again from 10 on every function call.
    The static variable remembers its previous value and continues
    from where the previous call ended.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Normal = 15, Static = 15</strong></p>
    <p><strong>Normal = 15, Static = 20</strong></p>
    <p><strong>Normal = 15, Static = 25</strong></p>
  </div>
  `,

  `
  <h2>Storage Classes — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program that demonstrates the use of <code>auto</code>,
    <code>register</code>, <code>static</code> and <code>extern</code>
    storage class concepts in one program.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int globalValue = 100;

void demonstrate()
{
    auto int automaticValue = 10;
    register int registerValue = 20;
    static int staticValue = 0;

    // Static value retains its previous value
    staticValue++;

    printf("Auto = %d\\n", automaticValue);
    printf("Register = %d\\n", registerValue);
    printf("Static = %d\\n", staticValue);
}

int main()
{
    extern int globalValue;

    printf("Extern = %d\\n\\n", globalValue);

    // Call function multiple times
    demonstrate();
    demonstrate();

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This program demonstrates the basic behavior of four storage-class
    concepts. The automatic variable is recreated on each function call,
    the register variable is a local variable requested for register
    storage, the static variable retains its value, and the extern
    declaration refers to a variable defined elsewhere in the program.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Extern = 100</strong></p>
    <p><strong>Auto = 10</strong></p>
    <p><strong>Register = 20</strong></p>
    <p><strong>Static = 1</strong></p>
    <p><strong>Auto = 10</strong></p>
    <p><strong>Register = 20</strong></p>
    <p><strong>Static = 2</strong></p>
  </div>
  `

];
SOLUTIONS["s-m4-structures"] = [

  `
  <h2>Structures — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define a structure named <code>Student</code>
    containing roll number, name and marks. Read and display the student details.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Display student details
    printf("\\nRoll Number = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure is a user-defined data type used to group related
    variables, even when those variables have different data types.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 82.5</p>
    <p><strong>Roll Number = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 82.50</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define an <code>Employee</code> structure
    containing employee ID, name and salary and display its members.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee emp;

    printf("Enter employee ID: ");
    scanf("%d", &amp;emp.id);

    printf("Enter name: ");
    scanf("%49s", emp.name);

    printf("Enter salary: ");
    scanf("%f", &amp;emp.salary);

    // Display employee details
    printf("\\nEmployee ID = %d\\n", emp.id);
    printf("Name = %s\\n", emp.name);
    printf("Salary = %.2f\\n", emp.salary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each structure variable contains its own copy of all the members
    declared in the structure. Members are accessed using the dot operator.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter salary: 45000</p>
    <p><strong>Employee ID = 501</strong></p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Salary = 45000.00</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to initialize a structure variable directly
    at the time of declaration and display its values.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Product
{
    int id;
    char name[50];
    float price;
};

int main()
{
    // Initialize structure during declaration
    struct Product p = {101, "Laptop", 55000.0};

    printf("Product ID = %d\\n", p.id);
    printf("Product Name = %s\\n", p.name);
    printf("Price = %.2f\\n", p.price);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure variable can be initialized at the time of declaration.
    The values are assigned to the members in their declared order.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Product ID = 101</strong></p>
    <p><strong>Product Name = Laptop</strong></p>
    <p><strong>Price = 55000.00</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the dimensions of a rectangle in a structure
    and calculate its area and perimeter.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Rectangle
{
    float length;
    float width;
};

int main()
{
    struct Rectangle r;
    float area, perimeter;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;r.length, &amp;r.width);

    // Calculate area and perimeter
    area = r.length * r.width;
    perimeter = 2 * (r.length + r.width);

    printf("Area = %.2f\\n", area);
    printf("Perimeter = %.2f\\n", perimeter);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can participate in arithmetic expressions just like
    ordinary variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
    <p><strong>Perimeter = 30.00</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create two structure variables of type
    <code>Student</code> and display the details of both students.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s1, s2;

    printf("Enter first student details: ");
    scanf("%d %49s %f", &amp;s1.roll, s1.name, &amp;s1.marks);

    printf("Enter second student details: ");
    scanf("%d %49s %f", &amp;s2.roll, s2.name, &amp;s2.marks);

    // Display both records
    printf("\\nStudent 1:\\n");
    printf("Roll = %d\\n", s1.roll);
    printf("Name = %s\\n", s1.name);
    printf("Marks = %.2f\\n", s1.marks);

    printf("\\nStudent 2:\\n");
    printf("Roll = %d\\n", s2.roll);
    printf("Name = %s\\n", s2.name);
    printf("Marks = %.2f\\n", s2.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple structure variables of the same structure type can be created.
    Each variable stores an independent record.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first student details: 101 Rahul 80</p>
    <p>Enter second student details: 102 Priya 90</p>
    <p><strong>Student 1:</strong></p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 80.00</strong></p>
    <p><strong>Student 2:</strong></p>
    <p><strong>Roll = 102</strong></p>
    <p><strong>Name = Priya</strong></p>
    <p><strong>Marks = 90.00</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to compare the marks of two students stored in
    structure variables and display the student with higher marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s1, s2;

    printf("Enter first student details: ");
    scanf("%d %49s %f", &amp;s1.roll, s1.name, &amp;s1.marks);

    printf("Enter second student details: ");
    scanf("%d %49s %f", &amp;s2.roll, s2.name, &amp;s2.marks);

    // Compare marks
    if (s1.marks &gt; s2.marks)
    {
        printf("%s has higher marks.\\n", s1.name);
    }
    else if (s2.marks &gt; s1.marks)
    {
        printf("%s has higher marks.\\n", s2.name);
    }
    else
    {
        printf("Both students have equal marks.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Individual members of structure variables can be compared using
    ordinary relational operators.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first student details: 101 Rahul 72</p>
    <p>Enter second student details: 102 Priya 85</p>
    <p><strong>Priya has higher marks.</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store a time value using a structure containing
    hours, minutes and seconds, and display the time.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Time
{
    int hours;
    int minutes;
    int seconds;
};

int main()
{
    struct Time t;

    printf("Enter hours, minutes and seconds: ");
    scanf("%d %d %d",
          &amp;t.hours,
          &amp;t.minutes,
          &amp;t.seconds);

    // Display stored time
    printf("Time = %02d:%02d:%02d\\n",
           t.hours,
           t.minutes,
           t.seconds);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure can represent a logical entity by grouping all of its
    related properties into one variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter hours, minutes and seconds: 14 30 25</p>
    <p><strong>Time = 14:30:25</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a bank account using a
    structure and calculate the balance after a deposit.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Account
{
    int accountNo;
    char name[50];
    float balance;
};

int main()
{
    struct Account acc;
    float deposit;

    printf("Enter account number: ");
    scanf("%d", &amp;acc.accountNo);

    printf("Enter account holder name: ");
    scanf("%49s", acc.name);

    printf("Enter current balance: ");
    scanf("%f", &amp;acc.balance);

    printf("Enter deposit amount: ");
    scanf("%f", &amp;deposit);

    // Update the structure member
    acc.balance = acc.balance + deposit;

    printf("\\nAccount Number = %d\\n", acc.accountNo);
    printf("Name = %s\\n", acc.name);
    printf("Updated Balance = %.2f\\n", acc.balance);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure member can be updated directly using the dot operator.
    Here, the balance member is modified after a deposit.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter account number: 1001</p>
    <p>Enter account holder name: Amit</p>
    <p>Enter current balance: 25000</p>
    <p>Enter deposit amount: 5000</p>
    <p><strong>Account Number = 1001</strong></p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Updated Balance = 30000.00</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a book and calculate its
    selling price after applying a discount.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Book
{
    int id;
    char title[100];
    float price;
};

int main()
{
    struct Book book;
    float discount, sellingPrice;

    printf("Enter book ID: ");
    scanf("%d", &amp;book.id);

    printf("Enter title: ");
    scanf("%99s", book.title);

    printf("Enter price: ");
    scanf("%f", &amp;book.price);

    printf("Enter discount percentage: ");
    scanf("%f", &amp;discount);

    // Calculate discounted selling price
    sellingPrice = book.price - (book.price * discount / 100);

    printf("\\nBook ID = %d\\n", book.id);
    printf("Title = %s\\n", book.title);
    printf("Selling Price = %.2f\\n", sellingPrice);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can be used as inputs to formulas. The program
    calculates the final price using the price stored in the structure.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter book ID: 101</p>
    <p>Enter title: CProgramming</p>
    <p>Enter price: 500</p>
    <p>Enter discount percentage: 10</p>
    <p><strong>Book ID = 101</strong></p>
    <p><strong>Title = CProgramming</strong></p>
    <p><strong>Selling Price = 450.00</strong></p>
  </div>
  `,

  `
  <h2>Structures — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a structure named <code>Student</code>
    containing roll number, name and marks of three subjects. Calculate
    total, average and display the complete student record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    int marks1;
    int marks2;
    int marks3;
};

int main()
{
    struct Student s;
    int total;
    float average;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks of three subjects: ");
    scanf("%d %d %d",
          &amp;s.marks1,
          &amp;s.marks2,
          &amp;s.marks3);

    // Calculate total and average
    total = s.marks1 + s.marks2 + s.marks3;
    average = total / 3.0;

    printf("\\n-------------------------\\n");
    printf("       STUDENT RECORD\\n");
    printf("-------------------------\\n");
    printf("Roll Number : %d\\n", s.roll);
    printf("Name        : %s\\n", s.name);
    printf("Total Marks : %d\\n", total);
    printf("Average     : %.2f\\n", average);
    printf("-------------------------\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This exercise combines structure definition, member access and
    calculations. Related student information is kept together in one
    structure variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks of three subjects: 70 80 90</p>
    <p><strong>-------------------------</strong></p>
    <p><strong>       STUDENT RECORD</strong></p>
    <p><strong>-------------------------</strong></p>
    <p><strong>Roll Number : 101</strong></p>
    <p><strong>Name        : Rahul</strong></p>
    <p><strong>Total Marks : 240</strong></p>
    <p><strong>Average     : 80.00</strong></p>
    <p><strong>-------------------------</strong></p>
  </div>
  `
];
SOLUTIONS["s-m4-advantages"] = [

  `
  <h2>Advantages of Structures — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store student roll number, name and marks
    together using a structure and display the complete record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Display related data as one record
    printf("\\nStudent Record:\\n");
    printf("Roll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    One major advantage of a structure is that related data can be grouped
    into a single logical record. This makes the program easier to organize.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 85.5</p>
    <p><strong>Student Record:</strong></p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 85.50</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of an employee using a structure
    containing ID, name and salary, and calculate the annual salary.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee emp;
    float annualSalary;

    printf("Enter employee ID: ");
    scanf("%d", &amp;emp.id);

    printf("Enter name: ");
    scanf("%49s", emp.name);

    printf("Enter monthly salary: ");
    scanf("%f", &amp;emp.salary);

    // Calculate annual salary
    annualSalary = emp.salary * 12;

    printf("\\nEmployee ID = %d\\n", emp.id);
    printf("Name = %s\\n", emp.name);
    printf("Annual Salary = %.2f\\n", annualSalary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure keeps all employee-related information together.
    This improves readability and makes calculations using the record convenient.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter monthly salary: 40000</p>
    <p><strong>Employee ID = 501</strong></p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Annual Salary = 480000.00</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of a book using a structure
    and calculate its price after discount.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Book
{
    int id;
    char title[100];
    float price;
};

int main()
{
    struct Book book;
    float discount, finalPrice;

    printf("Enter book ID: ");
    scanf("%d", &amp;book.id);

    printf("Enter title: ");
    scanf("%99s", book.title);

    printf("Enter price: ");
    scanf("%f", &amp;book.price);

    printf("Enter discount percentage: ");
    scanf("%f", &amp;discount);

    // Calculate discounted price
    finalPrice = book.price - (book.price * discount / 100);

    printf("\\nBook ID = %d\\n", book.id);
    printf("Title = %s\\n", book.title);
    printf("Final Price = %.2f\\n", finalPrice);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structures make it convenient to keep different types of information
    about the same object together. Here, book identification and pricing
    information are stored in one record.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter book ID: 101</p>
    <p>Enter title: Programming</p>
    <p>Enter price: 500</p>
    <p>Enter discount percentage: 10</p>
    <p><strong>Book ID = 101</strong></p>
    <p><strong>Title = Programming</strong></p>
    <p><strong>Final Price = 450.00</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create two student records using a structure
    and compare their marks to find the higher scorer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s1, s2;

    printf("Enter first student details: ");
    scanf("%d %49s %f",
          &amp;s1.roll,
          s1.name,
          &amp;s1.marks);

    printf("Enter second student details: ");
    scanf("%d %49s %f",
          &amp;s2.roll,
          s2.name,
          &amp;s2.marks);

    // Compare student records using their members
    if (s1.marks &gt; s2.marks)
        printf("%s scored higher marks.\\n", s1.name);
    else if (s2.marks &gt; s1.marks)
        printf("%s scored higher marks.\\n", s2.name);
    else
        printf("Both students scored equal marks.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple records of the same type can be created easily using
    structure variables. Each record keeps its own related data together.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first student details: 101 Rahul 72</p>
    <p>Enter second student details: 102 Priya 88</p>
    <p><strong>Priya scored higher marks.</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the dimensions of a rectangle in a structure
    and calculate both area and perimeter using the same record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Rectangle
{
    float length;
    float width;
};

int main()
{
    struct Rectangle r;
    float area, perimeter;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;r.length, &amp;r.width);

    // Use structure members in calculations
    area = r.length * r.width;
    perimeter = 2 * (r.length + r.width);

    printf("Area = %.2f\\n", area);
    printf("Perimeter = %.2f\\n", perimeter);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structures improve organization by keeping related values together.
    The same structure record can then be used for several calculations.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
    <p><strong>Perimeter = 30.00</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store a student's details and determine whether
    the student has passed based on marks stored in the structure.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Use the structure member for decision making
    if (s.marks &gt;= 50)
        printf("%s has passed.\\n", s.name);
    else
        printf("%s has failed.\\n", s.name);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can be used directly in conditions. Keeping
    student information together makes record-based decision making easier.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 105</p>
    <p>Enter name: Neha</p>
    <p>Enter marks: 67</p>
    <p><strong>Neha has passed.</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store product name, price and quantity in a structure
    and calculate the total bill amount.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Product
{
    char name[50];
    float price;
    int quantity;
};

int main()
{
    struct Product p;
    float total;

    printf("Enter product name: ");
    scanf("%49s", p.name);

    printf("Enter price: ");
    scanf("%f", &amp;p.price);

    printf("Enter quantity: ");
    scanf("%d", &amp;p.quantity);

    // Calculate total amount
    total = p.price * p.quantity;

    printf("\\nProduct = %s\\n", p.name);
    printf("Total Bill = %.2f\\n", total);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure can represent a complete real-world entity. Here,
    product details are stored together and used directly to calculate
    the bill amount.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter product name: Keyboard</p>
    <p>Enter price: 800</p>
    <p>Enter quantity: 3</p>
    <p><strong>Product = Keyboard</strong></p>
    <p><strong>Total Bill = 2400.00</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create two employee records using a structure
    and calculate the total of their salaries.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee e1, e2;
    float totalSalary;

    printf("Enter first employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e1.id,
          e1.name,
          &amp;e1.salary);

    printf("Enter second employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e2.id,
          e2.name,
          &amp;e2.salary);

    // Add salaries from both records
    totalSalary = e1.salary + e2.salary;

    printf("Total Salary = %.2f\\n", totalSalary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structures allow multiple related records to be maintained using
    variables of the same structure type. This makes record management
    more organized.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first employee ID, name and salary: 101 Amit 40000</p>
    <p>Enter second employee ID, name and salary: 102 Neha 45000</p>
    <p><strong>Total Salary = 85000.00</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the date of birth of a person using a
    structure and calculate the person's approximate age from the birth year.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Date
{
    int day;
    int month;
    int year;
};

int main()
{
    struct Date dob;
    int currentYear, age;

    printf("Enter date of birth (day month year): ");
    scanf("%d %d %d",
          &amp;dob.day,
          &amp;dob.month,
          &amp;dob.year);

    printf("Enter current year: ");
    scanf("%d", &amp;currentYear);

    // Calculate approximate age
    age = currentYear - dob.year;

    printf("Date of Birth = %02d/%02d/%d\\n",
           dob.day,
           dob.month,
           dob.year);

    printf("Approximate age = %d years\\n", age);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The date is naturally represented as a group of related values.
    A structure keeps day, month and year together as a single logical record.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter date of birth (day month year): 15 8 2005</p>
    <p>Enter current year: 2026</p>
    <p><strong>Date of Birth = 15/08/2005</strong></p>
    <p><strong>Approximate age = 21 years</strong></p>
  </div>
  `,

  `
  <h2>Advantages of Structures — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a complete student record using a structure.
    Store roll number, name and marks of three subjects, then calculate
    total, average and display the result.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    int marks1;
    int marks2;
    int marks3;
};

int main()
{
    struct Student s;
    int total;
    float average;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks of three subjects: ");
    scanf("%d %d %d",
          &amp;s.marks1,
          &amp;s.marks2,
          &amp;s.marks3);

    // Calculate total and average
    total = s.marks1 + s.marks2 + s.marks3;
    average = total / 3.0;

    printf("\\n-------------------------\\n");
    printf("       STUDENT RECORD\\n");
    printf("-------------------------\\n");
    printf("Roll Number : %d\\n", s.roll);
    printf("Name        : %s\\n", s.name);
    printf("Total Marks : %d\\n", total);
    printf("Average     : %.2f\\n", average);
    printf("-------------------------\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This final example demonstrates the main advantage of structures:
    different but related data can be represented as one complete record.
    The record can then be easily read, processed and displayed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks of three subjects: 70 80 90</p>
    <p><strong>-------------------------</strong></p>
    <p><strong>       STUDENT RECORD</strong></p>
    <p><strong>-------------------------</strong></p>
    <p><strong>Roll Number : 101</strong></p>
    <p><strong>Name        : Rahul</strong></p>
    <p><strong>Total Marks : 240</strong></p>
    <p><strong>Average     : 80.00</strong></p>
    <p><strong>-------------------------</strong></p>
  </div>
  `

];

SOLUTIONS["s-m4-accessing-elements"] = [

  `
  <h2>Accessing Structure Elements — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a <code>Student</code> structure and access
    its roll number, name and marks using the dot operator.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Access structure members using dot operator
    printf("\\nRoll Number = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The dot operator <code>.</code> is used to access a member of a
    structure variable. For example, <code>s.roll</code> accesses the
    roll member of structure variable <code>s</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 85</p>
    <p><strong>Roll Number = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 85.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to initialize a structure variable and access
    individual members using the dot operator.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Book
{
    int id;
    char title[50];
    float price;
};

int main()
{
    // Initialize structure variable
    struct Book book = {101, "Programming", 500.0};

    // Access members individually
    printf("Book ID = %d\\n", book.id);
    printf("Title = %s\\n", book.title);
    printf("Price = %.2f\\n", book.price);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each member of a structure can be accessed independently using
    the structure variable followed by the dot operator.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Book ID = 101</strong></p>
    <p><strong>Title = Programming</strong></p>
    <p><strong>Price = 500.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify the marks of a student after the structure
    has been initialized and display the updated value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s = {101, "Amit", 70.0};

    printf("Original marks = %.2f\\n", s.marks);

    // Modify a structure member
    s.marks = 82.5;

    printf("Updated marks = %.2f\\n", s.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members are not read-only. A member can be modified directly
    using the dot operator and assignment operator.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Original marks = 70.00</strong></p>
    <p><strong>Updated marks = 82.50</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create two employee structure variables and
    access the members of both variables separately.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee e1, e2;

    printf("Enter first employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e1.id,
          e1.name,
          &amp;e1.salary);

    printf("Enter second employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e2.id,
          e2.name,
          &amp;e2.salary);

    // Access members of first employee
    printf("\\nEmployee 1:\\n");
    printf("ID = %d\\n", e1.id);
    printf("Name = %s\\n", e1.name);
    printf("Salary = %.2f\\n", e1.salary);

    // Access members of second employee
    printf("\\nEmployee 2:\\n");
    printf("ID = %d\\n", e2.id);
    printf("Name = %s\\n", e2.name);
    printf("Salary = %.2f\\n", e2.salary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each structure variable has its own set of members. The same member
    name can be accessed independently through different structure variables.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first employee ID, name and salary: 101 Amit 40000</p>
    <p>Enter second employee ID, name and salary: 102 Neha 45000</p>
    <p><strong>Employee 1:</strong></p>
    <p><strong>ID = 101</strong></p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Salary = 40000.00</strong></p>
    <p><strong>Employee 2:</strong></p>
    <p><strong>ID = 102</strong></p>
    <p><strong>Name = Neha</strong></p>
    <p><strong>Salary = 45000.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the total and average marks by
    accessing subject marks stored as structure members.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    char name[50];
    int math;
    int cProgramming;
    int computer;
};

int main()
{
    struct Student s;
    int total;
    float average;

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks in Mathematics, C Programming and Computer: ");
    scanf("%d %d %d",
          &amp;s.math,
          &amp;s.cProgramming,
          &amp;s.computer);

    // Access and process individual members
    total = s.math + s.cProgramming + s.computer;
    average = total / 3.0;

    printf("\\nStudent = %s\\n", s.name);
    printf("Total = %d\\n", total);
    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each subject is represented as a separate structure member.
    The dot operator is used to access those members in an expression.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter name: Priya</p>
    <p>Enter marks in Mathematics, C Programming and Computer: 80 90 85</p>
    <p><strong>Student = Priya</strong></p>
    <p><strong>Total = 255</strong></p>
    <p><strong>Average = 85.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to access structure members through a pointer
    using the arrow operator <code>-&gt;</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;
    struct Student *ptr;

    ptr = &amp;s;

    printf("Enter roll number: ");
    scanf("%d", &amp;ptr-&gt;roll);

    printf("Enter name: ");
    scanf("%49s", ptr-&gt;name);

    printf("Enter marks: ");
    scanf("%f", &amp;ptr-&gt;marks);

    // Access structure members using pointer
    printf("\\nRoll = %d\\n", ptr-&gt;roll);
    printf("Name = %s\\n", ptr-&gt;name);
    printf("Marks = %.2f\\n", ptr-&gt;marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    When a pointer points to a structure, its members can be accessed
    conveniently using the arrow operator <code>-&gt;</code>.
    For example, <code>ptr-&gt;roll</code> accesses the roll member.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 88</p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 88.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to access a structure through a pointer and
    modify one of its members.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    float salary;
};

int main()
{
    struct Employee emp = {101, 40000.0};
    struct Employee *ptr = &amp;emp;

    printf("Original salary = %.2f\\n", ptr-&gt;salary);

    // Modify the original member through pointer
    ptr-&gt;salary = 50000.0;

    printf("Updated salary = %.2f\\n", ptr-&gt;salary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer stores the address of the structure variable.
    Using <code>-&gt;</code>, the program can directly read or modify
    the structure members through that pointer.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Original salary = 40000.00</strong></p>
    <p><strong>Updated salary = 50000.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to access the members of a structure passed to
    a function using a structure pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Product
{
    int id;
    char name[50];
    float price;
};

void displayProduct(struct Product *p)
{
    // Access structure members through pointer
    printf("Product ID = %d\\n", p-&gt;id);
    printf("Product Name = %s\\n", p-&gt;name);
    printf("Price = %.2f\\n", p-&gt;price);
}

int main()
{
    struct Product p;

    printf("Enter product ID: ");
    scanf("%d", &amp;p.id);

    printf("Enter product name: ");
    scanf("%49s", p.name);

    printf("Enter price: ");
    scanf("%f", &amp;p.price);

    // Pass structure address to function
    displayProduct(&amp;p);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Passing the structure address allows the function to access its
    members through a pointer. The arrow operator is used inside the function.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter product ID: 201</p>
    <p>Enter product name: Keyboard</p>
    <p>Enter price: 800</p>
    <p><strong>Product ID = 201</strong></p>
    <p><strong>Product Name = Keyboard</strong></p>
    <p><strong>Price = 800.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the total salary of two employees
    by accessing their salary members.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee e1, e2;
    float totalSalary;

    printf("Enter first employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e1.id,
          e1.name,
          &amp;e1.salary);

    printf("Enter second employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e2.id,
          e2.name,
          &amp;e2.salary);

    // Access salary members and calculate total
    totalSalary = e1.salary + e2.salary;

    printf("Total Salary = %.2f\\n", totalSalary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members can be used directly in arithmetic expressions.
    Here, the salary member of both structure variables is accessed
    separately and added.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first employee ID, name and salary: 101 Amit 40000</p>
    <p>Enter second employee ID, name and salary: 102 Neha 45000</p>
    <p><strong>Total Salary = 85000.00</strong></p>
  </div>
  `,

  `
  <h2>Accessing Structure Elements — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a student structure, access its members
    using both the dot operator and a structure pointer, and display
    the complete record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;
    struct Student *ptr;

    ptr = &amp;s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    // Access using dot operator
    printf("\\nUsing dot operator:\\n");
    printf("Roll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);

    // Access the same members through a pointer
    printf("\\nUsing arrow operator:\\n");
    printf("Roll = %d\\n", ptr-&gt;roll);
    printf("Name = %s\\n", ptr-&gt;name);
    printf("Marks = %.2f\\n", ptr-&gt;marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A normal structure variable accesses members with <code>.</code>,
    while a pointer to a structure accesses the same members with
    <code>-&gt;</code>. Both refer to the same underlying structure data.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 87</p>
    <p><strong>Using dot operator:</strong></p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 87.00</strong></p>
    <p><strong>Using arrow operator:</strong></p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 87.00</strong></p>
  </div>
  `

];
id="nested-struct-10"
SOLUTIONS["s-m4-nested-structures"] = [

  `
  <h2>Nested Structures — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a structure <code>Address</code> containing
    city and PIN code, and include it inside a <code>Student</code> structure.
    Display all student details.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Address
{
    char city[50];
    int pin;
};

struct Student
{
    int roll;
    char name[50];
    struct Address address;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter city: ");
    scanf("%49s", s.address.city);

    printf("Enter PIN code: ");
    scanf("%d", &amp;s.address.pin);

    // Access nested structure members
    printf("\\nRoll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("City = %s\\n", s.address.city);
    printf("PIN = %d\\n", s.address.pin);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A nested structure is a structure used as a member of another structure.
    Here, <code>Address</code> is nested inside <code>Student</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter city: Jaipur</p>
    <p>Enter PIN code: 302001</p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>City = Jaipur</strong></p>
    <p><strong>PIN = 302001</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store a student's date of birth using a nested
    <code>Date</code> structure inside a <code>Student</code> structure.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    int roll;
    char name[50];
    struct Date dob;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter date of birth (day month year): ");
    scanf("%d %d %d",
          &amp;s.dob.day,
          &amp;s.dob.month,
          &amp;s.dob.year);

    // Display nested date members
    printf("\\nRoll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Date of Birth = %02d/%02d/%d\\n",
           s.dob.day,
           s.dob.month,
           s.dob.year);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>Date</code> structure becomes a member of <code>Student</code>.
    Its members are accessed using multiple dot operators such as
    <code>s.dob.year</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Priya</p>
    <p>Enter date of birth (day month year): 15 8 2005</p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Priya</strong></p>
    <p><strong>Date of Birth = 15/08/2005</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store employee details with a nested
    <code>Address</code> structure containing city and state.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Address
{
    char city[50];
    char state[50];
};

struct Employee
{
    int id;
    char name[50];
    float salary;
    struct Address address;
};

int main()
{
    struct Employee emp;

    printf("Enter employee ID: ");
    scanf("%d", &amp;emp.id);

    printf("Enter name: ");
    scanf("%49s", emp.name);

    printf("Enter salary: ");
    scanf("%f", &amp;emp.salary);

    printf("Enter city: ");
    scanf("%49s", emp.address.city);

    printf("Enter state: ");
    scanf("%49s", emp.address.state);

    // Display employee record
    printf("\\nEmployee ID = %d\\n", emp.id);
    printf("Name = %s\\n", emp.name);
    printf("Salary = %.2f\\n", emp.salary);
    printf("City = %s\\n", emp.address.city);
    printf("State = %s\\n", emp.address.state);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Nested structures help group sub-records within a larger record.
    Here, employee information contains a separate address record.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter salary: 45000</p>
    <p>Enter city: Jaipur</p>
    <p>Enter state: Rajasthan</p>
    <p><strong>Employee ID = 501</strong></p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Salary = 45000.00</strong></p>
    <p><strong>City = Jaipur</strong></p>
    <p><strong>State = Rajasthan</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a <code>Student</code> structure containing
    a nested <code>Marks</code> structure for three subjects. Calculate
    the total and average marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Marks
{
    int math;
    int cProgramming;
    int computer;
};

struct Student
{
    int roll;
    char name[50];
    struct Marks marks;
};

int main()
{
    struct Student s;
    int total;
    float average;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks in three subjects: ");
    scanf("%d %d %d",
          &amp;s.marks.math,
          &amp;s.marks.cProgramming,
          &amp;s.marks.computer);

    // Calculate total using nested members
    total = s.marks.math +
            s.marks.cProgramming +
            s.marks.computer;

    average = total / 3.0;

    printf("Total = %d\\n", total);
    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The nested <code>Marks</code> structure keeps subject marks together.
    Members are accessed through expressions such as <code>s.marks.math</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks in three subjects: 80 90 85</p>
    <p><strong>Total = 255</strong></p>
    <p><strong>Average = 85.00</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store product information along with a nested
    <code>ManufactureDate</code> structure and display the complete record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Date
{
    int day;
    int month;
    int year;
};

struct Product
{
    int id;
    char name[50];
    float price;
    struct Date manufactureDate;
};

int main()
{
    struct Product p;

    printf("Enter product ID: ");
    scanf("%d", &amp;p.id);

    printf("Enter product name: ");
    scanf("%49s", p.name);

    printf("Enter price: ");
    scanf("%f", &amp;p.price);

    printf("Enter manufacture date: ");
    scanf("%d %d %d",
          &amp;p.manufactureDate.day,
          &amp;p.manufactureDate.month,
          &amp;p.manufactureDate.year);

    // Display product details
    printf("\\nProduct ID = %d\\n", p.id);
    printf("Name = %s\\n", p.name);
    printf("Price = %.2f\\n", p.price);
    printf("Manufacture Date = %02d/%02d/%d\\n",
           p.manufactureDate.day,
           p.manufactureDate.month,
           p.manufactureDate.year);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A nested structure is useful when one record contains another logical
    record. Here, the product contains a separate date record.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter product ID: 201</p>
    <p>Enter product name: Keyboard</p>
    <p>Enter price: 800</p>
    <p>Enter manufacture date: 10 6 2026</p>
    <p><strong>Product ID = 201</strong></p>
    <p><strong>Name = Keyboard</strong></p>
    <p><strong>Price = 800.00</strong></p>
    <p><strong>Manufacture Date = 10/06/2026</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to compare the marks of two students when the
    marks are stored inside a nested structure.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Marks
{
    float marks;
};

struct Student
{
    int roll;
    char name[50];
    struct Marks result;
};

int main()
{
    struct Student s1, s2;

    printf("Enter first student roll, name and marks: ");
    scanf("%d %49s %f",
          &amp;s1.roll,
          s1.name,
          &amp;s1.result.marks);

    printf("Enter second student roll, name and marks: ");
    scanf("%d %49s %f",
          &amp;s2.roll,
          s2.name,
          &amp;s2.result.marks);

    // Compare nested marks members
    if (s1.result.marks &gt; s2.result.marks)
        printf("%s has higher marks.\\n", s1.name);
    else if (s2.result.marks &gt; s1.result.marks)
        printf("%s has higher marks.\\n", s2.name);
    else
        printf("Both students have equal marks.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Nested members can be used in expressions and conditions just like
    ordinary structure members. The complete access path is
    <code>s1.result.marks</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first student roll, name and marks: 101 Rahul 75</p>
    <p>Enter second student roll, name and marks: 102 Priya 88</p>
    <p><strong>Priya has higher marks.</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store an employee's joining date using a nested
    date structure and calculate the number of years since joining based
    on the current year.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Date
{
    int day;
    int month;
    int year;
};

struct Employee
{
    int id;
    char name[50];
    struct Date joiningDate;
};

int main()
{
    struct Employee emp;
    int currentYear, years;

    printf("Enter employee ID: ");
    scanf("%d", &amp;emp.id);

    printf("Enter name: ");
    scanf("%49s", emp.name);

    printf("Enter joining date (day month year): ");
    scanf("%d %d %d",
          &amp;emp.joiningDate.day,
          &amp;emp.joiningDate.month,
          &amp;emp.joiningDate.year);

    printf("Enter current year: ");
    scanf("%d", &amp;currentYear);

    // Calculate approximate years of service
    years = currentYear - emp.joiningDate.year;

    printf("\\nEmployee = %s\\n", emp.name);
    printf("Joining Date = %02d/%02d/%d\\n",
           emp.joiningDate.day,
           emp.joiningDate.month,
           emp.joiningDate.year);
    printf("Years of Service = %d\\n", years);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A nested date structure allows date information to remain grouped
    inside the employee record. Its members can be accessed using
    multiple dot operators.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter joining date (day month year): 10 7 2021</p>
    <p>Enter current year: 2026</p>
    <p><strong>Employee = Amit</strong></p>
    <p><strong>Joining Date = 10/07/2021</strong></p>
    <p><strong>Years of Service = 5</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an <code>Address</code> structure and
    include it inside a <code>Customer</code> structure. Modify the
    customer's city after input and display the updated record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Address
{
    char city[50];
    char state[50];
};

struct Customer
{
    int id;
    char name[50];
    struct Address address;
};

int main()
{
    struct Customer c;

    printf("Enter customer ID: ");
    scanf("%d", &amp;c.id);

    printf("Enter name: ");
    scanf("%49s", c.name);

    printf("Enter city: ");
    scanf("%49s", c.address.city);

    printf("Enter state: ");
    scanf("%49s", c.address.state);

    // Modify nested structure member
    printf("Enter updated city: ");
    scanf("%49s", c.address.city);

    printf("\\nCustomer ID = %d\\n", c.id);
    printf("Name = %s\\n", c.name);
    printf("City = %s\\n", c.address.city);
    printf("State = %s\\n", c.address.state);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Nested structure members can also be modified directly. The expression
    <code>c.address.city</code> accesses the city member inside the
    nested address structure.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter customer ID: 1001</p>
    <p>Enter name: Ravi</p>
    <p>Enter city: Delhi</p>
    <p>Enter state: Delhi</p>
    <p>Enter updated city: Jaipur</p>
    <p><strong>Customer ID = 1001</strong></p>
    <p><strong>Name = Ravi</strong></p>
    <p><strong>City = Jaipur</strong></p>
    <p><strong>State = Delhi</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass a structure containing a nested structure
    to a function and display its details.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Address
{
    char city[50];
    int pin;
};

struct Student
{
    int roll;
    char name[50];
    struct Address address;
};

void displayStudent(struct Student s)
{
    // Access nested structure members
    printf("Roll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("City = %s\\n", s.address.city);
    printf("PIN = %d\\n", s.address.pin);
}

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter city: ");
    scanf("%49s", s.address.city);

    printf("Enter PIN code: ");
    scanf("%d", &amp;s.address.pin);

    // Pass complete structure to function
    displayStudent(s);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure containing another structure can be passed to a function
    just like other structure variables. The function can access nested
    members using the complete member path.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Neha</p>
    <p>Enter city: Jaipur</p>
    <p>Enter PIN code: 302001</p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Neha</strong></p>
    <p><strong>City = Jaipur</strong></p>
    <p><strong>PIN = 302001</strong></p>
  </div>
  `,

  `
  <h2>Nested Structures — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a complete employee record using nested
    structures for address and joining date. Display the formatted record.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Address
{
    char city[50];
    char state[50];
};

struct Date
{
    int day;
    int month;
    int year;
};

struct Employee
{
    int id;
    char name[50];
    float salary;
    struct Address address;
    struct Date joiningDate;
};

int main()
{
    struct Employee emp;

    printf("Enter employee ID: ");
    scanf("%d", &amp;emp.id);

    printf("Enter name: ");
    scanf("%49s", emp.name);

    printf("Enter salary: ");
    scanf("%f", &amp;emp.salary);

    printf("Enter city and state: ");
    scanf("%49s %49s",
          emp.address.city,
          emp.address.state);

    printf("Enter joining date (day month year): ");
    scanf("%d %d %d",
          &amp;emp.joiningDate.day,
          &amp;emp.joiningDate.month,
          &amp;emp.joiningDate.year);

    // Display complete nested record
    printf("\\n-----------------------------\\n");
    printf("       EMPLOYEE RECORD\\n");
    printf("-----------------------------\\n");
    printf("ID            : %d\\n", emp.id);
    printf("Name          : %s\\n", emp.name);
    printf("Salary        : %.2f\\n", emp.salary);
    printf("City          : %s\\n", emp.address.city);
    printf("State         : %s\\n", emp.address.state);
    printf("Joining Date  : %02d/%02d/%d\\n",
           emp.joiningDate.day,
           emp.joiningDate.month,
           emp.joiningDate.year);
    printf("-----------------------------\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines multiple nested structures inside one main
    structure. The employee record contains separate address and date
    records, demonstrating how complex information can be organized
    hierarchically.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter salary: 45000</p>
    <p>Enter city and state: Jaipur Rajasthan</p>
    <p>Enter joining date (day month year): 10 7 2021</p>
    <p><strong>-----------------------------</strong></p>
    <p><strong>       EMPLOYEE RECORD</strong></p>
    <p><strong>-----------------------------</strong></p>
    <p><strong>ID            : 501</strong></p>
    <p><strong>Name          : Amit</strong></p>
    <p><strong>Salary        : 45000.00</strong></p>
    <p><strong>City          : Jaipur</strong></p>
    <p><strong>State         : Rajasthan</strong></p>
    <p><strong>Joining Date  : 10/07/2021</strong></p>
    <p><strong>-----------------------------</strong></p>
  </div>
  `

];
SOLUTIONS["s-m4-array-structures"] = [

  `
  <h2>Array of Structures — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store and display the details of 3 students using
    an array of structures.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s[3];
    int i;

    printf("Enter details of 3 students:\\n");

    for (i = 0; i &lt; 3; i++)
    {
        printf("\\nStudent %d\\n", i + 1);

        printf("Enter roll number: ");
        scanf("%d", &amp;s[i].roll);

        printf("Enter name: ");
        scanf("%49s", s[i].name);

        printf("Enter marks: ");
        scanf("%f", &amp;s[i].marks);
    }

    printf("\\nStudent Records\\n");

    for (i = 0; i &lt; 3; i++)
    {
        printf("\\nRoll = %d\\n", s[i].roll);
        printf("Name = %s\\n", s[i].name);
        printf("Marks = %.2f\\n", s[i].marks);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An array of structures stores multiple structure variables of the same
    type. Here, <code>s[3]</code> stores the records of three students.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Student Records</p>
    <p><strong>Roll = 101, Name = Rahul, Marks = 82.00</strong></p>
    <p><strong>Roll = 102, Name = Priya, Marks = 91.00</strong></p>
    <p><strong>Roll = 103, Name = Amit, Marks = 76.00</strong></p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the details of 5 employees using an array
    of structures and display all employee records.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee e[5];
    int i;

    for (i = 0; i &lt; 5; i++)
    {
        printf("\\nEmployee %d\\n", i + 1);

        printf("Enter ID: ");
        scanf("%d", &amp;e[i].id);

        printf("Enter name: ");
        scanf("%49s", e[i].name);

        printf("Enter salary: ");
        scanf("%f", &amp;e[i].salary);
    }

    printf("\\nEmployee Records\\n");

    for (i = 0; i &lt; 5; i++)
    {
        printf("\\nID = %d\\n", e[i].id);
        printf("Name = %s\\n", e[i].name);
        printf("Salary = %.2f\\n", e[i].salary);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The declaration <code>struct Employee e[5]</code> creates an array
    containing five employee structure records.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>ID = 501, Name = Amit, Salary = 45000.00</strong></p>
    <p><strong>ID = 502, Name = Neha, Salary = 52000.00</strong></p>
    <p><strong>ID = 503, Name = Ravi, Salary = 48000.00</strong></p>
    <p><strong>ID = 504, Name = Pooja, Salary = 60000.00</strong></p>
    <p><strong>ID = 505, Name = Karan, Salary = 55000.00</strong></p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the student who has obtained the highest
    marks from an array of 5 students.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s[5];
    int i;
    int highestIndex = 0;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter roll, name and marks for student %d: ",
               i + 1);

        scanf("%d %49s %f",
              &amp;s[i].roll,
              s[i].name,
              &amp;s[i].marks);
    }

    for (i = 1; i &lt; 5; i++)
    {
        if (s[i].marks &gt; s[highestIndex].marks)
        {
            highestIndex = i;
        }
    }

    printf("\\nStudent with highest marks:\\n");
    printf("Roll = %d\\n", s[highestIndex].roll);
    printf("Name = %s\\n", s[highestIndex].name);
    printf("Marks = %.2f\\n", s[highestIndex].marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program compares the <code>marks</code> member of each structure
    and stores the index of the student having the highest marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Student with highest marks:</strong></p>
    <p>Roll = 103</p>
    <p>Name = Priya</p>
    <p>Marks = 94.00</p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the employee having the lowest salary from
    an array of employees.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee e[5];
    int i;
    int lowestIndex = 0;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter ID, name and salary for employee %d: ",
               i + 1);

        scanf("%d %49s %f",
              &amp;e[i].id,
              e[i].name,
              &amp;e[i].salary);
    }

    for (i = 1; i &lt; 5; i++)
    {
        if (e[i].salary &lt; e[lowestIndex].salary)
        {
            lowestIndex = i;
        }
    }

    printf("\\nEmployee with lowest salary:\\n");
    printf("ID = %d\\n", e[lowestIndex].id);
    printf("Name = %s\\n", e[lowestIndex].name);
    printf("Salary = %.2f\\n", e[lowestIndex].salary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each employee record is stored in the array. The program compares the
    salary member and keeps track of the employee having the minimum salary.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Employee with lowest salary:</strong></p>
    <p>ID = 503</p>
    <p>Name = Ravi</p>
    <p>Salary = 32000.00</p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the total and average marks of 5
    students using an array of structures.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s[5];
    int i;
    float total = 0;
    float average;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter roll, name and marks: ");

        scanf("%d %49s %f",
              &amp;s[i].roll,
              s[i].name,
              &amp;s[i].marks);

        total += s[i].marks;
    }

    average = total / 5;

    printf("\\nTotal Marks = %.2f\\n", total);
    printf("Average Marks = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program accesses the <code>marks</code> member of every structure
    element and adds the values to calculate the total and average.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Total Marks = 420.00</strong></p>
    <p><strong>Average Marks = 84.00</strong></p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to search for an employee by employee ID in an
    array of structures.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee e[5];
    int i;
    int searchId;
    int found = 0;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter ID, name and salary: ");

        scanf("%d %49s %f",
              &amp;e[i].id,
              e[i].name,
              &amp;e[i].salary);
    }

    printf("\\nEnter employee ID to search: ");
    scanf("%d", &amp;searchId);

    for (i = 0; i &lt; 5; i++)
    {
        if (e[i].id == searchId)
        {
            printf("\\nEmployee Found\\n");
            printf("ID = %d\\n", e[i].id);
            printf("Name = %s\\n", e[i].name);
            printf("Salary = %.2f\\n", e[i].salary);

            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("\\nEmployee not found.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program checks the ID of each structure element against the
    entered search ID. When a match is found, the employee details are displayed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID to search: 503</p>
    <p><strong>Employee Found</strong></p>
    <p>ID = 503</p>
    <p>Name = Ravi</p>
    <p>Salary = 48000.00</p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to search for a student using roll number from an
    array of structures and display the student's marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s[5];
    int i;
    int roll;
    int found = 0;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter roll, name and marks: ");

        scanf("%d %49s %f",
              &amp;s[i].roll,
              s[i].name,
              &amp;s[i].marks);
    }

    printf("\\nEnter roll number to search: ");
    scanf("%d", &amp;roll);

    for (i = 0; i &lt; 5; i++)
    {
        if (s[i].roll == roll)
        {
            printf("\\nStudent Found\\n");
            printf("Name = %s\\n", s[i].name);
            printf("Marks = %.2f\\n", s[i].marks);

            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("\\nStudent not found.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The roll number is used as the search key. The program checks every
    structure in the array until a matching roll number is found.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number to search: 102</p>
    <p><strong>Student Found</strong></p>
    <p>Name = Priya</p>
    <p>Marks = 91.00</p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to sort 5 students in descending order according
    to their marks using an array of structures.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s[5];
    struct Student temp;
    int i, j;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter roll, name and marks: ");

        scanf("%d %49s %f",
              &amp;s[i].roll,
              s[i].name,
              &amp;s[i].marks);
    }

    // Sort students by marks
    for (i = 0; i &lt; 4; i++)
    {
        for (j = i + 1; j &lt; 5; j++)
        {
            if (s[i].marks &lt; s[j].marks)
            {
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }

    printf("\\nStudents in descending order of marks:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        printf("%d  %s  %.2f\\n",
               s[i].roll,
               s[i].name,
               s[i].marks);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure variables can be exchanged just like ordinary variables.
    Here, the complete student structure is swapped to sort students
    according to marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Students in descending order of marks:</strong></p>
    <p>103 Priya 94.00</p>
    <p>102 Rahul 88.00</p>
    <p>105 Neha 84.00</p>
    <p>101 Amit 78.00</p>
    <p>104 Ravi 72.00</p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store details of 5 products and find the product
    having the highest price.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Product
{
    int id;
    char name[50];
    float price;
};

int main()
{
    struct Product p[5];
    int i;
    int highestIndex = 0;

    for (i = 0; i &lt; 5; i++)
    {
        printf("Enter product ID, name and price: ");

        scanf("%d %49s %f",
              &amp;p[i].id,
              p[i].name,
              &amp;p[i].price);
    }

    for (i = 1; i &lt; 5; i++)
    {
        if (p[i].price &gt; p[highestIndex].price)
        {
            highestIndex = i;
        }
    }

    printf("\\nProduct with highest price:\\n");
    printf("ID = %d\\n", p[highestIndex].id);
    printf("Name = %s\\n", p[highestIndex].name);
    printf("Price = %.2f\\n", p[highestIndex].price);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program compares the price of every product and stores the index
    of the product with the maximum price.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Product with highest price:</strong></p>
    <p>ID = 205</p>
    <p>Name = Laptop</p>
    <p>Price = 65000.00</p>
  </div>
  `,


  `
  <h2>Array of Structures — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a simple student record system using an
    array of structures. Store student details, display all records and
    calculate the highest marks.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s[5];
    int i;
    int highestIndex = 0;

    for (i = 0; i &lt; 5; i++)
    {
        printf("\\nEnter details of student %d\\n", i + 1);

        printf("Roll number: ");
        scanf("%d", &amp;s[i].roll);

        printf("Name: ");
        scanf("%49s", s[i].name);

        printf("Marks: ");
        scanf("%f", &amp;s[i].marks);
    }

    /* Find highest marks */
    for (i = 1; i &lt; 5; i++)
    {
        if (s[i].marks &gt; s[highestIndex].marks)
        {
            highestIndex = i;
        }
    }

    printf("\\n==============================\\n");
    printf("       STUDENT RECORDS\\n");
    printf("==============================\\n");

    for (i = 0; i &lt; 5; i++)
    {
        printf("Roll  : %d\\n", s[i].roll);
        printf("Name  : %s\\n", s[i].name);
        printf("Marks : %.2f\\n", s[i].marks);
        printf("------------------------------\\n");
    }

    printf("\\nTop Student\\n");
    printf("Name  : %s\\n", s[highestIndex].name);
    printf("Marks : %.2f\\n", s[highestIndex].marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines the main operations performed on an array of
    structures: storing records, displaying records, traversing the array
    and finding the student with the highest marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>==============================</strong></p>
    <p><strong>       STUDENT RECORDS</strong></p>
    <p><strong>==============================</strong></p>
    <p><strong>Roll : 101 | Name : Amit | Marks : 78.00</strong></p>
    <p><strong>Roll : 102 | Name : Rahul | Marks : 88.00</strong></p>
    <p><strong>Roll : 103 | Name : Priya | Marks : 94.00</strong></p>
    <p><strong>Roll : 104 | Name : Ravi | Marks : 72.00</strong></p>
    <p><strong>Roll : 105 | Name : Neha | Marks : 84.00</strong></p>
    <p><strong>Top Student</strong></p>
    <p><strong>Name : Priya</strong></p>
    <p><strong>Marks : 94.00</strong></p>
  </div>
  `

];
SOLUTIONS["s-m4-functions-structures"] = [

  `
  <h2>Functions and Structures — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a structure for a student and pass the
    structure to a function to display the student's details.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

void display(struct Student s)
{
    printf("Roll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);
}

int main()
{
    struct Student s;

    printf("Enter roll number, name and marks: ");
    scanf("%d %49s %f",
          &amp;s.roll,
          s.name,
          &amp;s.marks);

    // Pass structure to function
    display(s);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure variable can be passed to a function as an argument.
    Here, the complete student structure is passed to the
    <code>display()</code> function by value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number, name and marks: 101 Rahul 85</p>
    <p><strong>Roll = 101</strong></p>
    <p><strong>Name = Rahul</strong></p>
    <p><strong>Marks = 85.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass an employee structure to a function and
    calculate the employee's annual salary.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float monthlySalary;
};

float annualSalary(struct Employee e)
{
    return e.monthlySalary * 12;
}

int main()
{
    struct Employee e;
    float annual;

    printf("Enter employee ID, name and monthly salary: ");
    scanf("%d %49s %f",
          &amp;e.id,
          e.name,
          &amp;e.monthlySalary);

    annual = annualSalary(e);

    printf("\\nEmployee = %s\\n", e.name);
    printf("Annual Salary = %.2f\\n", annual);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A structure can be passed to a function that performs a calculation
    using its members. Here, the function receives the employee record
    and returns the annual salary.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID, name and monthly salary: 501 Amit 45000</p>
    <p><strong>Employee = Amit</strong></p>
    <p><strong>Annual Salary = 540000.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program in which a function receives a student structure
    and returns the total marks obtained in three subjects.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    int math;
    int cProgramming;
    int computer;
};

int totalMarks(struct Student s)
{
    return s.math + s.cProgramming + s.computer;
}

int main()
{
    struct Student s;
    int total;

    printf("Enter roll number and name: ");
    scanf("%d %49s", &amp;s.roll, s.name);

    printf("Enter marks in three subjects: ");
    scanf("%d %d %d",
          &amp;s.math,
          &amp;s.cProgramming,
          &amp;s.computer);

    total = totalMarks(s);

    printf("\\nStudent = %s\\n", s.name);
    printf("Total Marks = %d\\n", total);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The complete structure is passed to <code>totalMarks()</code>.
    The function accesses the subject members and calculates the total.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number and name: 101 Priya</p>
    <p>Enter marks in three subjects: 85 90 88</p>
    <p><strong>Student = Priya</strong></p>
    <p><strong>Total Marks = 263</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to pass a rectangle structure to a function and
    calculate its area.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Rectangle
{
    float length;
    float width;
};

float calculateArea(struct Rectangle r)
{
    return r.length * r.width;
}

int main()
{
    struct Rectangle r;
    float area;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;r.length, &amp;r.width);

    area = calculateArea(r);

    printf("Area = %.2f\\n", area);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The rectangle structure contains the dimensions of a rectangle.
    It is passed to a function which calculates and returns the area.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Area = 50.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use a function with a pointer to structure and
    increase an employee's salary by 10%.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Employee
{
    int id;
    char name[50];
    float salary;
};

void increaseSalary(struct Employee *e)
{
    e-&gt;salary = e-&gt;salary + (e-&gt;salary * 0.10);
}

int main()
{
    struct Employee e;

    printf("Enter employee ID, name and salary: ");
    scanf("%d %49s %f",
          &amp;e.id,
          e.name,
          &amp;e.salary);

    increaseSalary(&amp;e);

    printf("\\nName = %s\\n", e.name);
    printf("Updated Salary = %.2f\\n", e.salary);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer to a structure is passed to the function. The arrow operator
    <code>-&gt;</code> is used to access structure members through the pointer.
    Changes made inside the function affect the original structure.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID, name and salary: 501 Amit 40000</p>
    <p><strong>Name = Amit</strong></p>
    <p><strong>Updated Salary = 44000.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program in which a function returns a structure containing
    the details of a student.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

struct Student getStudent()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks: ");
    scanf("%f", &amp;s.marks);

    return s;
}

int main()
{
    struct Student s;

    s = getStudent();

    printf("\\nStudent Details\\n");
    printf("Roll = %d\\n", s.roll);
    printf("Name = %s\\n", s.name);
    printf("Marks = %.2f\\n", s.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A function can return a complete structure variable. In this example,
    <code>getStudent()</code> reads the student record and returns it to
    <code>main()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 102</p>
    <p>Enter name: Neha</p>
    <p>Enter marks: 92</p>
    <p><strong>Student Details</strong></p>
    <p><strong>Roll = 102</strong></p>
    <p><strong>Name = Neha</strong></p>
    <p><strong>Marks = 92.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to compare the marks of two students using a
    function that accepts two structure variables.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    float marks;
};

struct Student compareStudents(
    struct Student s1,
    struct Student s2)
{
    if (s1.marks &gt; s2.marks)
        return s1;
    else
        return s2;
}

int main()
{
    struct Student s1, s2, topper;

    printf("Enter first student's roll, name and marks: ");
    scanf("%d %49s %f",
          &amp;s1.roll,
          s1.name,
          &amp;s1.marks);

    printf("Enter second student's roll, name and marks: ");
    scanf("%d %49s %f",
          &amp;s2.roll,
          s2.name,
          &amp;s2.marks);

    topper = compareStudents(s1, s2);

    printf("\\nStudent with higher marks:\\n");
    printf("Roll = %d\\n", topper.roll);
    printf("Name = %s\\n", topper.name);
    printf("Marks = %.2f\\n", topper.marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple structure variables can be passed to the same function.
    The function compares their members and returns the structure having
    higher marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter first student's roll, name and marks: 101 Rahul 78</p>
    <p>Enter second student's roll, name and marks: 102 Priya 91</p>
    <p><strong>Student with higher marks:</strong></p>
    <p><strong>Roll = 102</strong></p>
    <p><strong>Name = Priya</strong></p>
    <p><strong>Marks = 91.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify the values of a rectangle structure by
    passing its address to a function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Rectangle
{
    float length;
    float width;
};

void modifyRectangle(struct Rectangle *r)
{
    r-&gt;length = r-&gt;length + 2;
    r-&gt;width = r-&gt;width + 3;
}

int main()
{
    struct Rectangle r;

    printf("Enter length and width: ");
    scanf("%f %f", &amp;r.length, &amp;r.width);

    modifyRectangle(&amp;r);

    printf("\\nUpdated Length = %.2f\\n", r.length);
    printf("Updated Width = %.2f\\n", r.width);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Passing the address of a structure allows a function to directly
    modify the original structure. The arrow operator is used for member
    access through the structure pointer.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter length and width: 10 5</p>
    <p><strong>Updated Length = 12.00</strong></p>
    <p><strong>Updated Width = 8.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the distance between two points using
    structures and a function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

struct Point
{
    float x;
    float y;
};

float distance(struct Point p1, struct Point p2)
{
    float dx = p2.x - p1.x;
    float dy = p2.y - p1.y;

    return sqrt(dx * dx + dy * dy);
}

int main()
{
    struct Point p1, p2;
    float result;

    printf("Enter coordinates of first point: ");
    scanf("%f %f", &amp;p1.x, &amp;p1.y);

    printf("Enter coordinates of second point: ");
    scanf("%f %f", &amp;p2.x, &amp;p2.y);

    result = distance(p1, p2);

    printf("Distance = %.2f\\n", result);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Two structure variables representing points are passed to the
    <code>distance()</code> function. The function uses their coordinates
    to calculate the distance.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter coordinates of first point: 0 0</p>
    <p>Enter coordinates of second point: 3 4</p>
    <p><strong>Distance = 5.00</strong></p>
  </div>
  `,


  `
  <h2>Functions and Structures — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a student result system using structures
    and functions. The program should calculate total, average and grade.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    char name[50];
    int math;
    int cProgramming;
    int computer;
};

int totalMarks(struct Student s)
{
    return s.math + s.cProgramming + s.computer;
}

char calculateGrade(float average)
{
    if (average &gt;= 90)
        return 'A';
    else if (average &gt;= 75)
        return 'B';
    else if (average &gt;= 60)
        return 'C';
    else if (average &gt;= 50)
        return 'D';
    else
        return 'F';
}

void displayResult(struct Student s)
{
    int total;
    float average;
    char grade;

    total = totalMarks(s);
    average = total / 3.0;
    grade = calculateGrade(average);

    printf("\\n=============================\\n");
    printf("       STUDENT RESULT\\n");
    printf("=============================\\n");
    printf("Roll     : %d\\n", s.roll);
    printf("Name     : %s\\n", s.name);
    printf("Total    : %d\\n", total);
    printf("Average  : %.2f\\n", average);
    printf("Grade    : %c\\n", grade);
    printf("=============================\\n");
}

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.roll);

    printf("Enter name: ");
    scanf("%49s", s.name);

    printf("Enter marks in Mathematics, C Programming and Computer: ");
    scanf("%d %d %d",
          &amp;s.math,
          &amp;s.cProgramming,
          &amp;s.computer);

    displayResult(s);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines several concepts: passing a structure to a
    function, returning a value from a function, using multiple functions,
    and processing structure members to generate a final result.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Priya</p>
    <p>Enter marks in Mathematics, C Programming and Computer: 92 88 95</p>
    <p><strong>=============================</strong></p>
    <p><strong>       STUDENT RESULT</strong></p>
    <p><strong>=============================</strong></p>
    <p><strong>Roll     : 101</strong></p>
    <p><strong>Name     : Priya</strong></p>
    <p><strong>Total    : 275</strong></p>
    <p><strong>Average  : 91.67</strong></p>
    <p><strong>Grade    : A</strong></p>
    <p><strong>=============================</strong></p>
  </div>
  `

];
SOLUTIONS["s-m4-unions"] = [

  `
  <h2>Unions — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a union containing an integer, a float and
    a character. Store and display one member at a time.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Data
{
    int number;
    float value;
    char letter;
};

int main()
{
    union Data d;

    d.number = 25;

    printf("Integer value = %d\\n", d.number);

    d.value = 12.50;

    printf("Float value = %.2f\\n", d.value);

    d.letter = 'A';

    printf("Character value = %c\\n", d.letter);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A union allows different members to share the same memory location.
    Therefore, only the member assigned most recently should be considered
    as the currently stored value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Integer value = 25</strong></p>
    <p><strong>Float value = 12.50</strong></p>
    <p><strong>Character value = A</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store and display an employee's ID using a union.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Employee
{
    int id;
    float salary;
    char grade;
};

int main()
{
    union Employee e;

    e.id = 501;

    printf("Employee ID = %d\\n", e.id);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The union contains three possible members, but this program uses only
    the <code>id</code> member at the current time.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Employee ID = 501</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate that different members of a union
    share the same memory location by displaying their addresses.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Data
{
    int number;
    float value;
    char letter;
};

int main()
{
    union Data d;

    printf("Address of number = %p\\n", (void *)&amp;d.number);
    printf("Address of value  = %p\\n", (void *)&amp;d.value);
    printf("Address of letter = %p\\n", (void *)&amp;d.letter);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    All members of a union begin at the same memory location. Therefore,
    their addresses are the same, although their data types are different.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Address of number = 0x7ffee...</strong></p>
    <p><strong>Address of value = 0x7ffee...</strong></p>
    <p><strong>Address of letter = 0x7ffee...</strong></p>
    <p>Exact memory addresses may differ from one system to another.</p>
  </div>
  `,


  `
  <h2>Unions — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate the difference between the memory
    occupied by a structure and a union containing the same members.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct DataStructure
{
    int number;
    float value;
    char letter;
};

union DataUnion
{
    int number;
    float value;
    char letter;
};

int main()
{
    struct DataStructure s;
    union DataUnion u;

    printf("Size of structure = %zu bytes\\n",
           sizeof(s));

    printf("Size of union = %zu bytes\\n",
           sizeof(u));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Structure members normally have separate storage, while union members
    share the same storage. Therefore, the total size of a union is based
    mainly on its largest member, subject to alignment and padding rules.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Size of structure = implementation-dependent</strong></p>
    <p><strong>Size of union = implementation-dependent</strong></p>
    <p>The exact values may vary depending on the compiler and system.</p>
  </div>
  `,


  `
  <h2>Unions — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to take an integer, float or character as selected
    by the user and store it in a union.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Data
{
    int number;
    float value;
    char letter;
};

int main()
{
    union Data d;
    int choice;

    printf("1. Integer\\n");
    printf("2. Float\\n");
    printf("3. Character\\n");

    printf("Enter your choice: ");
    scanf("%d", &amp;choice);

    switch (choice)
    {
        case 1:
            printf("Enter integer: ");
            scanf("%d", &amp;d.number);
            printf("Stored integer = %d\\n", d.number);
            break;

        case 2:
            printf("Enter float: ");
            scanf("%f", &amp;d.value);
            printf("Stored float = %.2f\\n", d.value);
            break;

        case 3:
            printf("Enter character: ");
            scanf(" %c", &amp;d.letter);
            printf("Stored character = %c\\n", d.letter);
            break;

        default:
            printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A union is useful when only one of several possible data types needs to
    be stored at a time. The selected member determines the currently valid
    interpretation of the shared memory.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Integer</p>
    <p>2. Float</p>
    <p>3. Character</p>
    <p>Enter your choice: 2</p>
    <p>Enter float: 45.5</p>
    <p><strong>Stored float = 45.50</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store a product price and display it using a
    union.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Product
{
    int productId;
    float price;
    char code;
};

int main()
{
    union Product p;

    printf("Enter product price: ");
    scanf("%f", &amp;p.price);

    printf("Product Price = %.2f\\n", p.price);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The union contains different possible product-related values. In this
    example, the <code>price</code> member is used to store a floating-point
    value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter product price: 1250.75</p>
    <p><strong>Product Price = 1250.75</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to overwrite one union member with another and
    observe the change in the stored value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Data
{
    int number;
    char letter;
};

int main()
{
    union Data d;

    d.number = 65;

    printf("Integer value = %d\\n", d.number);

    d.letter = 'A';

    printf("Character value = %c\\n", d.letter);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Since union members share the same memory, assigning a new member
    overwrites the shared storage. After <code>d.letter = 'A'</code>, the
    character member is the value that should be used.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Integer value = 65</strong></p>
    <p><strong>Character value = A</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use a union inside a program that stores a value
    either as an integer or as a floating-point number according to the
    user's choice.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union Number
{
    int integerValue;
    float floatValue;
};

int main()
{
    union Number n;
    int choice;

    printf("1. Integer\\n");
    printf("2. Float\\n");
    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    if (choice == 1)
    {
        printf("Enter integer: ");
        scanf("%d", &amp;n.integerValue);

        printf("Value = %d\\n", n.integerValue);
    }
    else if (choice == 2)
    {
        printf("Enter float: ");
        scanf("%f", &amp;n.floatValue);

        printf("Value = %.2f\\n", n.floatValue);
    }
    else
    {
        printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The union provides one shared storage area for either an integer or a
    floating-point value. The program chooses which member to use at runtime.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Integer</p>
    <p>2. Float</p>
    <p>Enter choice: 1</p>
    <p>Enter integer: 250</p>
    <p><strong>Value = 250</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a union containing student roll number,
    marks and grade, and demonstrate storing each member one after another.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union StudentData
{
    int roll;
    float marks;
    char grade;
};

int main()
{
    union StudentData s;

    s.roll = 101;
    printf("Roll Number = %d\\n", s.roll);

    s.marks = 88.5;
    printf("Marks = %.2f\\n", s.marks);

    s.grade = 'A';
    printf("Grade = %c\\n", s.grade);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Only one member is treated as the active stored value at a time.
    Assigning another member uses the same shared memory and replaces
    the previous representation.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Roll Number = 101</strong></p>
    <p><strong>Marks = 88.50</strong></p>
    <p><strong>Grade = A</strong></p>
  </div>
  `,


  `
  <h2>Unions — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate a practical use of a union for
    storing different types of sensor readings where only one reading
    type is required at a time.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

union SensorReading
{
    int temperature;
    float voltage;
    float pressure;
};

int main()
{
    union SensorReading sensor;
    int choice;

    printf("1. Temperature\\n");
    printf("2. Voltage\\n");
    printf("3. Pressure\\n");

    printf("Enter reading type: ");
    scanf("%d", &amp;choice);

    switch (choice)
    {
        case 1:
            printf("Enter temperature: ");
            scanf("%d", &amp;sensor.temperature);

            printf("Temperature = %d C\\n",
                   sensor.temperature);
            break;

        case 2:
            printf("Enter voltage: ");
            scanf("%f", &amp;sensor.voltage);

            printf("Voltage = %.2f V\\n",
                   sensor.voltage);
            break;

        case 3:
            printf("Enter pressure: ");
            scanf("%f", &amp;sensor.pressure);

            printf("Pressure = %.2f\\n",
                   sensor.pressure);
            break;

        default:
            printf("Invalid reading type.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A union can be useful when an application needs to store one of several
    alternative data types but does not need all of them simultaneously.
    This can reduce memory usage compared with storing all alternatives
    separately.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Temperature</p>
    <p>2. Voltage</p>
    <p>3. Pressure</p>
    <p>Enter reading type: 2</p>
    <p>Enter voltage: 230.5</p>
    <p><strong>Voltage = 230.50 V</strong></p>
  </div>
  `

];
SOLUTIONS["s-m4-bit-fields"] = [

  `
  <h2>Bit-fields — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a structure using bit-fields to store
    a person's gender and age using limited number of bits.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Person
{
    unsigned int age : 7;
    unsigned int gender : 1;
};

int main()
{
    struct Person p;

    p.age = 21;
    p.gender = 1;

    printf("Age = %u\\n", p.age);
    printf("Gender = %u\\n", p.gender);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A bit-field specifies the number of bits used by a structure member.
    Here, <code>age</code> uses 7 bits and <code>gender</code> uses 1 bit.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Age = 21</strong></p>
    <p><strong>Gender = 1</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create bit-fields for storing day, month and
    year components of a date.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Date
{
    unsigned int day : 5;
    unsigned int month : 4;
    unsigned int year : 12;
};

int main()
{
    struct Date d;

    d.day = 15;
    d.month = 8;
    d.year = 2026;

    printf("Date = %02u/%02u/%u\\n",
           d.day,
           d.month,
           d.year);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Bit-fields can be used when values have known ranges. A day needs
    only enough bits for values from 1 to 31, while a month needs enough
    bits for values from 1 to 12.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Date = 15/08/2026</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use bit-fields for storing the status of three
    devices using one-bit flags.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct DeviceStatus
{
    unsigned int wifi : 1;
    unsigned int bluetooth : 1;
    unsigned int gps : 1;
};

int main()
{
    struct DeviceStatus status;

    status.wifi = 1;
    status.bluetooth = 0;
    status.gps = 1;

    printf("WiFi = %u\\n", status.wifi);
    printf("Bluetooth = %u\\n", status.bluetooth);
    printf("GPS = %u\\n", status.gps);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A one-bit field is suitable for values that have only two states,
    such as ON/OFF or enabled/disabled. Each member can store 0 or 1.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>WiFi = 1</strong></p>
    <p><strong>Bluetooth = 0</strong></p>
    <p><strong>GPS = 1</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store a student's class year and section using
    bit-fields and display the values.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Student
{
    unsigned int year : 2;
    unsigned int section : 2;
};

int main()
{
    struct Student s;

    s.year = 2;
    s.section = 1;

    printf("Year = %u\\n", s.year);
    printf("Section = %u\\n", s.section);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The width after the colon specifies how many bits are allocated.
    A 2-bit unsigned field can represent values from 0 to 3.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Year = 2</strong></p>
    <p><strong>Section = 1</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to take user input for three ON/OFF device flags
    stored using bit-fields.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Device
{
    unsigned int fan : 1;
    unsigned int light : 1;
    unsigned int ac : 1;
};

int main()
{
    struct Device d;

    printf("Enter fan status (0/1): ");
    scanf("%u", &amp;d.fan);

    printf("Enter light status (0/1): ");
    scanf("%u", &amp;d.light);

    printf("Enter AC status (0/1): ");
    scanf("%u", &amp;d.ac);

    printf("\\nFan = %u\\n", d.fan);
    printf("Light = %u\\n", d.light);
    printf("AC = %u\\n", d.ac);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each device status requires only one bit because the value is either
    0 or 1. Bit-fields allow these small values to be represented compactly.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter fan status (0/1): 1</p>
    <p>Enter light status (0/1): 0</p>
    <p>Enter AC status (0/1): 1</p>
    <p><strong>Fan = 1</strong></p>
    <p><strong>Light = 0</strong></p>
    <p><strong>AC = 1</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate a bit-field used for storing a
    small numeric value such as a priority level from 0 to 7.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Task
{
    unsigned int priority : 3;
};

int main()
{
    struct Task t;

    t.priority = 5;

    printf("Task Priority = %u\\n",
           t.priority);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A 3-bit unsigned field can represent values from 0 through 7.
    Therefore, it is appropriate for a small priority value in this example.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Task Priority = 5</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a user account status using bit-fields
    for active, verified and administrator flags.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Account
{
    unsigned int active : 1;
    unsigned int verified : 1;
    unsigned int administrator : 1;
};

int main()
{
    struct Account user;

    user.active = 1;
    user.verified = 1;
    user.administrator = 0;

    printf("Active = %u\\n", user.active);
    printf("Verified = %u\\n", user.verified);
    printf("Administrator = %u\\n",
           user.administrator);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Bit-fields are useful for storing multiple Boolean flags. Each flag
    can occupy one bit and represent a true or false state.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Active = 1</strong></p>
    <p><strong>Verified = 1</strong></p>
    <p><strong>Administrator = 0</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify individual status flags in a structure
    using bit-fields.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Status
{
    unsigned int power : 1;
    unsigned int online : 1;
    unsigned int error : 1;
};

int main()
{
    struct Status s;

    s.power = 1;
    s.online = 0;
    s.error = 0;

    printf("Initial Status\\n");
    printf("Power = %u\\n", s.power);
    printf("Online = %u\\n", s.online);
    printf("Error = %u\\n", s.error);

    /* Change individual flags */
    s.online = 1;
    s.error = 1;

    printf("\\nUpdated Status\\n");
    printf("Power = %u\\n", s.power);
    printf("Online = %u\\n", s.online);
    printf("Error = %u\\n", s.error);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Individual bit-field members can be assigned new values just like
    ordinary structure members. Only the specified field is modified.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Initial Status</strong></p>
    <p>Power = 1</p>
    <p>Online = 0</p>
    <p>Error = 0</p>

    <p><strong>Updated Status</strong></p>
    <p>Power = 1</p>
    <p>Online = 1</p>
    <p>Error = 1</p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store a student's grade category and pass status
    using bit-fields.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct Result
{
    unsigned int grade : 3;
    unsigned int pass : 1;
};

int main()
{
    struct Result r;

    r.grade = 5;
    r.pass = 1;

    printf("Grade Code = %u\\n", r.grade);
    printf("Pass Status = %u\\n", r.pass);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>grade</code> field uses 3 bits for a small numeric grade code,
    while <code>pass</code> uses one bit because it has only two possible
    states.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Grade Code = 5</strong></p>
    <p><strong>Pass Status = 1</strong></p>
  </div>
  `,


  `
  <h2>Bit-fields — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a practical system-status record using
    multiple bit-fields and display all flags.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

struct SystemStatus
{
    unsigned int powerOn : 1;
    unsigned int network : 1;
    unsigned int batteryLow : 1;
    unsigned int error : 1;
    unsigned int mode : 2;
};

int main()
{
    struct SystemStatus system;

    system.powerOn = 1;
    system.network = 1;
    system.batteryLow = 0;
    system.error = 0;
    system.mode = 2;

    printf("============================\\n");
    printf("      SYSTEM STATUS\\n");
    printf("============================\\n");

    printf("Power On    : %u\\n",
           system.powerOn);

    printf("Network     : %u\\n",
           system.network);

    printf("Battery Low : %u\\n",
           system.batteryLow);

    printf("Error       : %u\\n",
           system.error);

    printf("Mode        : %u\\n",
           system.mode);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines several bit-fields in a single structure. One-bit
    fields represent Boolean status flags, while the 2-bit <code>mode</code>
    field can represent a small range of numeric values.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>============================</strong></p>
    <p><strong>      SYSTEM STATUS</strong></p>
    <p><strong>============================</strong></p>
    <p><strong>Power On    : 1</strong></p>
    <p><strong>Network     : 1</strong></p>
    <p><strong>Battery Low : 0</strong></p>
    <p><strong>Error       : 0</strong></p>
    <p><strong>Mode        : 2</strong></p>
  </div>
  `

];
SOLUTIONS["s-m4-enumerated"] = [

  `
  <h2>Enumerated Data Types — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for the days of the week
    and display a selected day.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

int main()
{
    enum Day today;

    today = WEDNESDAY;

    printf("Today is day number %d\\n", today);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An enumeration (<code>enum</code>) defines a set of named integer
    constants. By default, the first enumerator starts with value 0 and
    subsequent values increase by 1.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Today is day number 2</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for months and display
    the numeric value of a selected month.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Month
{
    JANUARY = 1,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER
};

int main()
{
    enum Month month;

    month = AUGUST;

    printf("Month number = %d\\n", month);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Enumeration values can also be assigned explicitly. Here,
    <code>JANUARY</code> is assigned 1, so the following months receive
    consecutive values.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Month number = 8</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for traffic signal colors
    and use a switch statement to display the signal meaning.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Signal
{
    RED,
    YELLOW,
    GREEN
};

int main()
{
    enum Signal signal;

    signal = GREEN;

    switch (signal)
    {
        case RED:
            printf("Stop\\n");
            break;

        case YELLOW:
            printf("Wait\\n");
            break;

        case GREEN:
            printf("Go\\n");
            break;
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An enum can make program logic easier to read by replacing numeric
    constants with meaningful names. These names can also be used with
    <code>switch</code> statements.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Go</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for student grades and
    display the grade selected in the program.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Grade
{
    FAIL,
    PASS,
    GOOD,
    VERY_GOOD,
    EXCELLENT
};

int main()
{
    enum Grade grade;

    grade = EXCELLENT;

    printf("Grade code = %d\\n", grade);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Enumeration constants provide meaningful names for integer values.
    In this example, <code>EXCELLENT</code> represents one of the defined
    grade categories.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Grade code = 4</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to take a numeric choice from the user and use an
    enumeration with a switch statement to display the selected operation.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Operation
{
    ADD = 1,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
};

int main()
{
    enum Operation op;
    int choice;

    printf("1. Add\\n");
    printf("2. Subtract\\n");
    printf("3. Multiply\\n");
    printf("4. Divide\\n");

    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    op = (enum Operation)choice;

    switch (op)
    {
        case ADD:
            printf("Addition selected.\\n");
            break;

        case SUBTRACT:
            printf("Subtraction selected.\\n");
            break;

        case MULTIPLY:
            printf("Multiplication selected.\\n");
            break;

        case DIVIDE:
            printf("Division selected.\\n");
            break;

        default:
            printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Enumeration constants can be used to make menu-driven programs easier
    to understand. The entered integer is converted to the enumeration type
    and then processed using <code>switch</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Add</p>
    <p>2. Subtract</p>
    <p>3. Multiply</p>
    <p>4. Divide</p>
    <p>Enter choice: 3</p>
    <p><strong>Multiplication selected.</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for account status and
    display an appropriate message using a switch statement.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum AccountStatus
{
    ACTIVE,
    INACTIVE,
    BLOCKED,
    CLOSED
};

int main()
{
    enum AccountStatus status;

    status = BLOCKED;

    switch (status)
    {
        case ACTIVE:
            printf("Account is active.\\n");
            break;

        case INACTIVE:
            printf("Account is inactive.\\n");
            break;

        case BLOCKED:
            printf("Account is blocked.\\n");
            break;

        case CLOSED:
            printf("Account is closed.\\n");
            break;
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Enums are especially useful when a variable can have one of a fixed
    set of states, such as active, inactive, blocked or closed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Account is blocked.</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for the four seasons and
    display the name of the selected season.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Season
{
    SPRING,
    SUMMER,
    AUTUMN,
    WINTER
};

int main()
{
    enum Season season;

    season = WINTER;

    switch (season)
    {
        case SPRING:
            printf("Spring season\\n");
            break;

        case SUMMER:
            printf("Summer season\\n");
            break;

        case AUTUMN:
            printf("Autumn season\\n");
            break;

        case WINTER:
            printf("Winter season\\n");
            break;
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    An enumeration is useful when a variable should represent one value
    from a predefined group. The named constants make the program easier
    to understand than using unexplained numbers.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Winter season</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for employee departments
    and display the selected department.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Department
{
    HR,
    SALES,
    IT,
    FINANCE
};

int main()
{
    enum Department department;

    department = IT;

    switch (department)
    {
        case HR:
            printf("Human Resources\\n");
            break;

        case SALES:
            printf("Sales Department\\n");
            break;

        case IT:
            printf("Information Technology\\n");
            break;

        case FINANCE:
            printf("Finance Department\\n");
            break;
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Enumeration constants can represent fixed categories such as company
    departments. The descriptive names make the code easier to read and maintain.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Information Technology</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create an enumeration for payment methods and
    display the selected payment method.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum PaymentMethod
{
    CASH = 1,
    CARD,
    UPI,
    NET_BANKING
};

int main()
{
    enum PaymentMethod payment;

    payment = UPI;

    switch (payment)
    {
        case CASH:
            printf("Payment Method: Cash\\n");
            break;

        case CARD:
            printf("Payment Method: Card\\n");
            break;

        case UPI:
            printf("Payment Method: UPI\\n");
            break;

        case NET_BANKING:
            printf("Payment Method: Net Banking\\n");
            break;
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Enums can represent a fixed set of options in real-world applications.
    Here, each payment method has a meaningful named constant.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Payment Method: UPI</strong></p>
  </div>
  `,


  `
  <h2>Enumerated Data Types — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a student attendance status using an
    enumeration and display whether the student is present, absent or on leave.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

enum Attendance
{
    PRESENT = 1,
    ABSENT,
    ON_LEAVE
};

void displayAttendance(enum Attendance status)
{
    switch (status)
    {
        case PRESENT:
            printf("Student is Present.\\n");
            break;

        case ABSENT:
            printf("Student is Absent.\\n");
            break;

        case ON_LEAVE:
            printf("Student is on Leave.\\n");
            break;

        default:
            printf("Invalid attendance status.\\n");
    }
}

int main()
{
    enum Attendance status;

    status = PRESENT;

    displayAttendance(status);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines an enumeration with a function and a
    <code>switch</code> statement. The enum clearly represents the limited
    set of attendance states.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Student is Present.</strong></p>
  </div>
  `

];

SOLUTIONS["s-m5-pointer-idea"] = [

  `
  <h2>Pointer: Idea of Pointers — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a pointer to an integer variable and
    display the value of the variable and its address.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 25;
    int *ptr;

    ptr = &amp;number;

    printf("Value = %d\\n", number);
    printf("Address = %p\\n", (void *)ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer stores the address of another variable. The address-of
    operator <code>&amp;</code> obtains the address of <code>number</code>,
    and that address is stored in <code>ptr</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value = 25</strong></p>
    <p><strong>Address = 0x7ff...</strong></p>
    <p>The exact address depends on the system.</p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to access the value of a variable using a pointer
    and the dereference operator <code>*</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 50;
    int *ptr;

    ptr = &amp;number;

    printf("Variable value = %d\\n", number);
    printf("Pointer value = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The dereference operator <code>*</code> accesses the value stored at
    the memory address held by the pointer. Therefore, <code>*ptr</code>
    gives the value of <code>number</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Variable value = 50</strong></p>
    <p><strong>Pointer value = 50</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to take an integer from the user and display its
    value using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number;
    int *ptr;

    printf("Enter a number: ");
    scanf("%d", &amp;number);

    ptr = &amp;number;

    printf("Value using pointer = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer <code>ptr</code> stores the address of the input variable.
    Dereferencing it with <code>*ptr</code> retrieves the variable's value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 75</p>
    <p><strong>Value using pointer = 75</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify the value of a variable using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 10;
    int *ptr;

    ptr = &amp;number;

    printf("Before modification = %d\\n", number);

    *ptr = 100;

    printf("After modification = %d\\n", number);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer can be used not only to read a variable but also to modify it.
    Assigning a new value to <code>*ptr</code> changes the original variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before modification = 10</strong></p>
    <p><strong>After modification = 100</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use pointers with two integer variables and
    calculate their sum.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a = 20;
    int b = 30;

    int *p1 = &amp;a;
    int *p2 = &amp;b;

    int sum;

    sum = *p1 + *p2;

    printf("First number = %d\\n", *p1);
    printf("Second number = %d\\n", *p2);
    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Two pointers are used to access the values of two integer variables.
    The dereferenced values are then added to calculate the sum.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>First number = 20</strong></p>
    <p><strong>Second number = 30</strong></p>
    <p><strong>Sum = 50</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the larger of two numbers using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b;
    int *p1, *p2;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    p1 = &amp;a;
    p2 = &amp;b;

    if (*p1 &gt; *p2)
        printf("Larger number = %d\\n", *p1);
    else if (*p2 &gt; *p1)
        printf("Larger number = %d\\n", *p2);
    else
        printf("Both numbers are equal.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointers provide access to the original variables, and their
    dereferenced values are compared using an <code>if-else</code> statement.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 45 72</p>
    <p><strong>Larger number = 72</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to swap two numbers using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void swap(int *x, int *y)
{
    int temp;

    temp = *x;
    *x = *y;
    *y = temp;
}

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&amp;a, &amp;b);

    printf("After swap: a = %d, b = %d\\n", a, b);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The addresses of <code>a</code> and <code>b</code> are passed to the
    function. Because the function receives pointers, it can modify the
    original variables directly.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before swap: a = 10, b = 20</strong></p>
    <p><strong>After swap: a = 20, b = 10</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use a pointer with a floating-point variable
    and display its value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float price = 99.50;
    float *ptr;

    ptr = &amp;price;

    printf("Price = %.2f\\n", price);
    printf("Price using pointer = %.2f\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Pointers are not limited to integers. A pointer can store the address
    of a variable of a compatible data type, such as <code>float</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Price = 99.50</strong></p>
    <p><strong>Price using pointer = 99.50</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate that a pointer stores the address
    of a variable and can be used to access that variable.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 100;
    int *ptr = &amp;number;

    printf("Value of number = %d\\n", number);
    printf("Address of number = %p\\n",
           (void *)&amp;number);
    printf("Address stored in ptr = %p\\n",
           (void *)ptr);
    printf("Value using ptr = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The address stored in <code>ptr</code> points to the same memory
    location as the address of <code>number</code>. Dereferencing the
    pointer gives the value stored at that location.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value of number = 100</strong></p>
    <p><strong>Address of number = 0x7ff...</strong></p>
    <p><strong>Address stored in ptr = 0x7ff...</strong></p>
    <p><strong>Value using ptr = 100</strong></p>
    <p>The exact address depends on the system.</p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate a simple real-world style use of
    pointers by updating a student's marks through a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks = 75;
    int *ptr;

    ptr = &amp;marks;

    printf("Original Marks = %d\\n", marks);

    // Update marks through pointer
    *ptr = *ptr + 10;

    printf("Updated Marks = %d\\n", marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer stores the address of the marks variable. By using
    <code>*ptr</code>, the program directly updates the original marks.
    This demonstrates why pointers are useful when a function or another
    part of a program needs to modify existing data.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Original Marks = 75</strong></p>
    <p><strong>Updated Marks = 85</strong></p>
  </div>
  `

];
SOLUTIONS["s-m5-defining-pointers"] = [

  `
  <h2>Defining Pointers — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to declare an integer pointer, store the address of
    an integer variable in it and display the value using the pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 25;
    int *ptr;

    ptr = &amp;number;

    printf("Value = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The declaration <code>int *ptr</code> defines a pointer that can store
    the address of an integer variable. The address of <code>number</code>
    is assigned using the address-of operator <code>&amp;</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value = 25</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define a pointer to a floating-point variable
    and display its value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float price = 125.50;
    float *ptr;

    ptr = &amp;price;

    printf("Price = %.2f\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer must be declared with a compatible data type. Here,
    <code>float *ptr</code> stores the address of the floating-point
    variable <code>price</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Price = 125.50</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define a character pointer and display the
    character stored in a variable.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    char grade = 'A';
    char *ptr;

    ptr = &amp;grade;

    printf("Grade = %c\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The declaration <code>char *ptr</code> creates a pointer suitable for
    storing the address of a character variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Grade = A</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to initialize a pointer at the time of declaration
    and display the value of the variable.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 100;
    int *ptr = &amp;number;

    printf("Number = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer can be initialized when it is declared. In this example,
    <code>ptr</code> immediately stores the address of <code>number</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Number = 100</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define two integer pointers and display the
    values of two variables through them.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a = 10;
    int b = 20;

    int *p1 = &amp;a;
    int *p2 = &amp;b;

    printf("First value = %d\\n", *p1);
    printf("Second value = %d\\n", *p2);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple pointers can be declared independently. Each pointer stores
    the address of its corresponding variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>First value = 10</strong></p>
    <p><strong>Second value = 20</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define a pointer and assign it the address of
    different variables one after another.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a = 15;
    int b = 30;

    int *ptr;

    ptr = &amp;a;
    printf("First value = %d\\n", *ptr);

    ptr = &amp;b;
    printf("Second value = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer variable can be reassigned to another variable of the same
    compatible type. After reassignment, dereferencing the pointer accesses
    the new variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>First value = 15</strong></p>
    <p><strong>Second value = 30</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define a pointer and initialize it with
    <code>NULL</code>. Check whether the pointer is NULL before using it.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int *ptr = NULL;

    if (ptr == NULL)
    {
        printf("Pointer is NULL.\\n");
    }
    else
    {
        printf("Pointer contains an address.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A <code>NULL</code> pointer does not point to a valid object for
    dereferencing. Checking a pointer before using it can help avoid
    invalid memory access.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Pointer is NULL.</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define an integer pointer and display both the
    address stored in the pointer and the value at that address.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 75;
    int *ptr = &amp;number;

    printf("Address stored in pointer = %p\\n",
           (void *)ptr);

    printf("Value at address = %d\\n",
           *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer stores the memory address of <code>number</code>.
    The dereference operator <code>*</code> accesses the value stored
    at that address.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Address stored in pointer = 0x7ff...</strong></p>
    <p><strong>Value at address = 75</strong></p>
    <p>The exact memory address depends on the system.</p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define pointers for integer, float and character
    variables and display their values.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 50;
    float price = 75.25;
    char grade = 'B';

    int *iptr = &amp;number;
    float *fptr = &amp;price;
    char *cptr = &amp;grade;

    printf("Integer = %d\\n", *iptr);
    printf("Float = %.2f\\n", *fptr);
    printf("Character = %c\\n", *cptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Pointer declarations use a data type corresponding to the type of
    object whose address they store. This example demonstrates
    <code>int *</code>, <code>float *</code> and <code>char *</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Integer = 50</strong></p>
    <p><strong>Float = 75.25</strong></p>
    <p><strong>Character = B</strong></p>
  </div>
  `,


  `
  <h2>Defining Pointers — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to define an integer pointer and use it to update
    a variable after initialization.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks = 70;
    int *ptr = &amp;marks;

    printf("Original marks = %d\\n", marks);

    *ptr = 85;

    printf("Updated marks = %d\\n", marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Once the pointer has been initialized with the variable's address,
    assigning a value to <code>*ptr</code> changes the original variable.
    This demonstrates the practical purpose of defining and initializing
    a pointer.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Original marks = 70</strong></p>
    <p><strong>Updated marks = 85</strong></p>
  </div>
  `

];

SOLUTIONS["s-m5-pointer-idea"] = [

  `
  <h2>Pointer: Idea of Pointers — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a pointer to an integer variable and
    display the value of the variable and its address.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 25;
    int *ptr;

    ptr = &amp;number;

    printf("Value = %d\\n", number);
    printf("Address = %p\\n", (void *)ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer stores the address of another variable. The address-of
    operator <code>&amp;</code> obtains the address of <code>number</code>,
    and that address is stored in <code>ptr</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value = 25</strong></p>
    <p><strong>Address = 0x7ff...</strong></p>
    <p>The exact address depends on the system.</p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to access the value of a variable using a pointer
    and the dereference operator <code>*</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 50;
    int *ptr;

    ptr = &amp;number;

    printf("Variable value = %d\\n", number);
    printf("Pointer value = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The dereference operator <code>*</code> accesses the value stored at
    the memory address held by the pointer. Therefore, <code>*ptr</code>
    gives the value of <code>number</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Variable value = 50</strong></p>
    <p><strong>Pointer value = 50</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to take an integer from the user and display its
    value using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number;
    int *ptr;

    printf("Enter a number: ");
    scanf("%d", &amp;number);

    ptr = &amp;number;

    printf("Value using pointer = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer <code>ptr</code> stores the address of the input variable.
    Dereferencing it with <code>*ptr</code> retrieves the variable's value.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 75</p>
    <p><strong>Value using pointer = 75</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify the value of a variable using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 10;
    int *ptr;

    ptr = &amp;number;

    printf("Before modification = %d\\n", number);

    *ptr = 100;

    printf("After modification = %d\\n", number);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    A pointer can be used not only to read a variable but also to modify it.
    Assigning a new value to <code>*ptr</code> changes the original variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Before modification = 10</strong></p>
    <p><strong>After modification = 100</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use pointers with two integer variables and
    calculate their sum.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a = 20;
    int b = 30;

    int *p1 = &amp;a;
    int *p2 = &amp;b;

    int sum;

    sum = *p1 + *p2;

    printf("First number = %d\\n", *p1);
    printf("Second number = %d\\n", *p2);
    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Two pointers are used to access the values of two integer variables.
    The dereferenced values are then added to calculate the sum.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>First number = 20</strong></p>
    <p><strong>Second number = 30</strong></p>
    <p><strong>Sum = 50</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the larger of two numbers using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b;
    int *p1, *p2;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    p1 = &amp;a;
    p2 = &amp;b;

    if (*p1 &gt; *p2)
        printf("Larger number = %d\\n", *p1);
    else if (*p2 &gt; *p1)
        printf("Larger number = %d\\n", *p2);
    else
        printf("Both numbers are equal.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointers provide access to the original variables, and their
    dereferenced values are compared using an <code>if-else</code> statement.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 45 72</p>
    <p><strong>Larger number = 72</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to swap two numbers using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void swap(int *x, int *y)
{
    int temp;

    temp = *x;
    *x = *y;
    *y = temp;
}

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&amp;a, &amp;b);

    printf("After swap: a = %d, b = %d\\n", a, b);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The addresses of <code>a</code> and <code>b</code> are passed to the
    function. Because the function receives pointers, it can modify the
    original variables directly.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before swap: a = 10, b = 20</strong></p>
    <p><strong>After swap: a = 20, b = 10</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use a pointer with a floating-point variable
    and display its value.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float price = 99.50;
    float *ptr;

    ptr = &amp;price;

    printf("Price = %.2f\\n", price);
    printf("Price using pointer = %.2f\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Pointers are not limited to integers. A pointer can store the address
    of a variable of a compatible data type, such as <code>float</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Price = 99.50</strong></p>
    <p><strong>Price using pointer = 99.50</strong></p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate that a pointer stores the address
    of a variable and can be used to access that variable.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number = 100;
    int *ptr = &amp;number;

    printf("Value of number = %d\\n", number);
    printf("Address of number = %p\\n",
           (void *)&amp;number);
    printf("Address stored in ptr = %p\\n",
           (void *)ptr);
    printf("Value using ptr = %d\\n", *ptr);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The address stored in <code>ptr</code> points to the same memory
    location as the address of <code>number</code>. Dereferencing the
    pointer gives the value stored at that location.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Value of number = 100</strong></p>
    <p><strong>Address of number = 0x7ff...</strong></p>
    <p><strong>Address stored in ptr = 0x7ff...</strong></p>
    <p><strong>Value using ptr = 100</strong></p>
    <p>The exact address depends on the system.</p>
  </div>
  `,


  `
  <h2>Pointer: Idea of Pointers — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate a simple real-world style use of
    pointers by updating a student's marks through a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int marks = 75;
    int *ptr;

    ptr = &amp;marks;

    printf("Original Marks = %d\\n", marks);

    // Update marks through pointer
    *ptr = *ptr + 10;

    printf("Updated Marks = %d\\n", marks);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer stores the address of the marks variable. By using
    <code>*ptr</code>, the program directly updates the original marks.
    This demonstrates why pointers are useful when a function or another
    part of a program needs to modify existing data.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Original Marks = 75</strong></p>
    <p><strong>Updated Marks = 85</strong></p>
  </div>
  `

];
SOLUTIONS["s-m5-use-pointers"] = [

  `
  <h2>Use of Pointers — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to modify the value of an integer variable using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number;
    int *ptr;

    printf("Enter a number: ");
    scanf("%d", &amp;number);

    ptr = &amp;number;

    printf("Original value = %d\\n", number);

    *ptr = *ptr + 20;

    printf("Updated value = %d\\n", number);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer stores the address of <code>number</code>. Using
    <code>*ptr</code>, the program can directly modify the original variable.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 30</p>
    <p><strong>Original value = 30</strong></p>
    <p><strong>Updated value = 50</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to swap two numbers using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&amp;a, &amp;b);

    printf("After swap: a = %d, b = %d\\n", a, b);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The addresses of the two variables are passed to <code>swap()</code>.
    The function changes the original values through the pointers.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 10 20</p>
    <p><strong>Before swap: a = 10, b = 20</strong></p>
    <p><strong>After swap: a = 20, b = 10</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the sum and difference of two numbers
    using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b;
    int *p1, *p2;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    p1 = &amp;a;
    p2 = &amp;b;

    printf("Sum = %d\\n", *p1 + *p2);
    printf("Difference = %d\\n", *p1 - *p2);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointers provide access to the values stored in <code>a</code>
    and <code>b</code>. The dereferenced values are used in arithmetic expressions.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter two numbers: 25 10</p>
    <p><strong>Sum = 35</strong></p>
    <p><strong>Difference = 15</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest of three numbers using pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int a, b, c;
    int *p1, *p2, *p3;
    int largest;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;a, &amp;b, &amp;c);

    p1 = &amp;a;
    p2 = &amp;b;
    p3 = &amp;c;

    largest = *p1;

    if (*p2 &gt; largest)
        largest = *p2;

    if (*p3 &gt; largest)
        largest = *p3;

    printf("Largest number = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Pointers are used to access the three input values. Their dereferenced
    values are compared to determine the largest number.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter three numbers: 45 92 67</p>
    <p><strong>Largest number = 92</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the square of a number using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int number;
    int *ptr;

    printf("Enter a number: ");
    scanf("%d", &amp;number);

    ptr = &amp;number;

    printf("Square = %d\\n", (*ptr) * (*ptr));

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The pointer is used to access the input value. The dereferenced value
    is multiplied by itself to calculate the square.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 12</p>
    <p><strong>Square = 144</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the sum of all elements of an integer array
    using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[5];
    int *ptr;
    int i;
    int sum = 0;

    printf("Enter 5 numbers:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    ptr = arr;

    for (i = 0; i &lt; 5; i++)
    {
        sum += *(ptr + i);
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The array name gives the address of its first element. Pointer arithmetic
    is then used to access each array element through <code>*(ptr + i)</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 5 numbers:</p>
    <p>10 20 30 40 50</p>
    <p><strong>Sum = 150</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest element in an array using a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[5];
    int *ptr;
    int i;
    int largest;

    printf("Enter 5 numbers:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    ptr = arr;
    largest = *ptr;

    for (i = 1; i &lt; 5; i++)
    {
        if (*(ptr + i) &gt; largest)
        {
            largest = *(ptr + i);
        }
    }

    printf("Largest element = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Pointer arithmetic allows the program to access each array element.
    The largest value is tracked while traversing the array.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 5 numbers:</p>
    <p>12 45 8 72 31</p>
    <p><strong>Largest element = 72</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the even and odd elements in an array using
    a pointer.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[6];
    int *ptr;
    int i;
    int even = 0;
    int odd = 0;

    printf("Enter 6 numbers:\\n");

    for (i = 0; i &lt; 6; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    ptr = arr;

    for (i = 0; i &lt; 6; i++)
    {
        if (*(ptr + i) % 2 == 0)
            even++;
        else
            odd++;
    }

    printf("Even numbers = %d\\n", even);
    printf("Odd numbers = %d\\n", odd);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each array element is accessed through pointer arithmetic. The modulo
    operator determines whether the value is even or odd.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 6 numbers:</p>
    <p>10 15 20 25 30 35</p>
    <p><strong>Even numbers = 3</strong></p>
    <p><strong>Odd numbers = 3</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to reverse an array using two pointers.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int arr[5];
    int *left;
    int *right;
    int temp;
    int i;

    printf("Enter 5 numbers:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    left = arr;
    right = arr + 4;

    while (left &lt; right)
    {
        temp = *left;
        *left = *right;
        *right = temp;

        left++;
        right--;
    }

    printf("Reversed array:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        printf("%d ", arr[i]);
    }

    printf("\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    One pointer starts at the first element and another at the last element.
    Their values are swapped while the pointers move toward each other.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 5 numbers:</p>
    <p>10 20 30 40 50</p>
    <p><strong>Reversed array:</strong></p>
    <p><strong>50 40 30 20 10</strong></p>
  </div>
  `,


  `
  <h2>Use of Pointers — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to calculate the average of array elements using
    a pointer and a function.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

float calculateAverage(int *ptr, int size)
{
    int i;
    int sum = 0;

    for (i = 0; i &lt; size; i++)
    {
        sum += *(ptr + i);
    }

    return (float)sum / size;
}

int main()
{
    int arr[5];
    int i;
    float average;

    printf("Enter 5 numbers:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    average = calculateAverage(arr, 5);

    printf("Average = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The array address is passed to the function through a pointer.
    The function uses pointer arithmetic to access every element and
    calculates the average.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 5 numbers:</p>
    <p>70 80 90 60 100</p>
    <p><strong>Average = 80.00</strong></p>
  </div>
  `

];
SOLUTIONS["s-m5-file-modes"] = [

  `
  <h2>File Handling: File Opening Modes — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a file and write text into it using the
    <code>w</code> mode.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    fp = fopen("student.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fprintf(fp, "BCA Study Portal\\n");

    fclose(fp);

    printf("File created and data written successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>w</code> mode opens a file for writing. If the file does not
    exist, it can be created. Existing contents are replaced when the file
    is opened for writing.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File created and data written successfully.</strong></p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to open an existing file in <code>r</code> mode and
    read its contents character by character.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;

    fp = fopen("student.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    printf("File contents:\\n");

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
    }

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>r</code> mode opens an existing file for reading.
    <code>fgetc()</code> reads one character at a time until
    <code>EOF</code> is reached.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File contents:</strong></p>
    <p>BCA Study Portal</p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to append new text to an existing file using the
    <code>a</code> mode.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    fp = fopen("student.txt", "a");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fprintf(fp, "C Programming Notes\\n");

    fclose(fp);

    printf("Data appended successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>a</code> mode opens a file for appending. New data is written
    at the end of the existing file instead of replacing its contents.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Data appended successfully.</strong></p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use the <code>r+</code> mode to read from and
    write to an existing file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;

    fp = fopen("student.txt", "r+");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    printf("Existing content:\\n");

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
    }

    fprintf(fp, "New Line\\n");

    fclose(fp);

    printf("\\nData processing completed.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>r+</code> mode allows both reading and writing on an existing
    file. The file must already exist. The exact effect of writing also
    depends on the current file position.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Existing content:</strong></p>
    <p>BCA Study Portal</p>
    <p><strong>Data processing completed.</strong></p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a new file for both reading and writing
    using the <code>w+</code> mode.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    char text[100];

    fp = fopen("data.txt", "w+");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fprintf(fp, "Welcome to File Handling.");

    rewind(fp);

    fgets(text, sizeof(text), fp);

    printf("File content = %s\\n", text);

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>w+</code> mode opens a file for both reading and writing.
    The file can be created if it does not exist, while existing contents
    are discarded when the file is opened.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File content = Welcome to File Handling.</strong></p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to use the <code>a+</code> mode to append data to a
    file and then read the file contents.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;

    fp = fopen("notes.txt", "a+");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fprintf(fp, "Pointers are important in C.\\n");

    rewind(fp);

    printf("File contents:\\n");

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
    }

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>a+</code> mode allows both reading and appending. New data
    is added at the end of the file, while reading can be performed after
    repositioning the file position as needed.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File contents:</strong></p>
    <p>Pointers are important in C.</p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to check whether a file can be opened using the
    <code>r</code> mode before reading it.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    fp = fopen("record.txt", "r");

    if (fp == NULL)
    {
        printf("File does not exist or cannot be opened.\\n");
    }
    else
    {
        printf("File opened successfully.\\n");
        fclose(fp);
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    <code>fopen()</code> returns <code>NULL</code> when the file cannot be
    opened successfully. Checking this result prevents the program from
    trying to use an invalid file pointer.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File opened successfully.</strong></p>
    <p>
      If the file does not exist, the program displays an appropriate
      error message instead.
    </p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to demonstrate the use of the <code>w</code> mode
    for storing student information in a file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int roll;
    char name[50];
    float marks;

    fp = fopen("student_record.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter roll number: ");
    scanf("%d", &amp;roll);

    printf("Enter name: ");
    scanf("%49s", name);

    printf("Enter marks: ");
    scanf("%f", &amp;marks);

    fprintf(fp,
            "Roll = %d\\nName = %s\\nMarks = %.2f\\n",
            roll,
            name,
            marks);

    fclose(fp);

    printf("\\nStudent record saved successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>w</code> mode is useful when a program needs to create a new
    file or replace the contents of an existing file with fresh data.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p>Enter marks: 88</p>
    <p><strong>Student record saved successfully.</strong></p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to append multiple student names to a file using
    the <code>a</code> mode.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    char name[50];
    int i;

    fp = fopen("students.txt", "a");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    for (i = 0; i &lt; 3; i++)
    {
        printf("Enter student name: ");
        scanf("%49s", name);

        fprintf(fp, "%s\\n", name);
    }

    fclose(fp);

    printf("Student names appended successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program opens the file in append mode so that newly entered names
    are added after the existing data. Existing contents are preserved.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter student name: Rahul</p>
    <p>Enter student name: Priya</p>
    <p>Enter student name: Amit</p>
    <p><strong>Student names appended successfully.</strong></p>
  </div>
  `,


  `
  <h2>File Handling: File Opening Modes — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program that demonstrates choosing a file opening mode
    using a menu and performs the corresponding file operation.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int choice;

    printf("1. Write file\\n");
    printf("2. Read file\\n");
    printf("3. Append file\\n");

    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    if (choice == 1)
    {
        fp = fopen("menu.txt", "w");

        if (fp == NULL)
        {
            printf("Unable to open file.\\n");
            return 1;
        }

        fprintf(fp, "Data written using w mode.\\n");

        fclose(fp);

        printf("Write operation completed.\\n");
    }
    else if (choice == 2)
    {
        int ch;

        fp = fopen("menu.txt", "r");

        if (fp == NULL)
        {
            printf("File could not be opened.\\n");
            return 1;
        }

        printf("File contents:\\n");

        while ((ch = fgetc(fp)) != EOF)
        {
            putchar(ch);
        }

        fclose(fp);
    }
    else if (choice == 3)
    {
        fp = fopen("menu.txt", "a");

        if (fp == NULL)
        {
            printf("Unable to open file.\\n");
            return 1;
        }

        fprintf(fp, "Data appended using a mode.\\n");

        fclose(fp);

        printf("Append operation completed.\\n");
    }
    else
    {
        printf("Invalid choice.\\n");
    }

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This example combines the commonly used text-file opening modes.
    The program selects <code>w</code>, <code>r</code> or <code>a</code>
    according to the user's choice and then performs the corresponding
    operation.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>1. Write file</p>
    <p>2. Read file</p>
    <p>3. Append file</p>
    <p>Enter choice: 1</p>
    <p><strong>Write operation completed.</strong></p>
  </div>
  `

];
SOLUTIONS["s-m5-reading-files"] = [

  `
  <h2>Reading from Files — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to open a text file in read mode and display its
    contents character by character using <code>fgetc()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;

    fp = fopen("data.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    printf("File contents:\\n");

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
    }

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>fgetc()</code> function reads one character at a time from
    the file. Reading continues until the end-of-file indicator
    <code>EOF</code> is reached.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File contents:</strong></p>
    <p>Welcome to C Programming.</p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to read a line from a text file using
    <code>fgets()</code> and display it.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    char line[100];

    fp = fopen("data.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    if (fgets(line, sizeof(line), fp) != NULL)
    {
        printf("First line:\\n");
        printf("%s", line);
    }

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>fgets()</code> function reads a line or a specified maximum
    number of characters from a file. It is useful for line-based text reading.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>First line:</strong></p>
    <p>Welcome to C Programming.</p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to read a file line by line using <code>fgets()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    char line[100];

    fp = fopen("notes.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    printf("File contents:\\n");

    while (fgets(line, sizeof(line), fp) != NULL)
    {
        printf("%s", line);
    }

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The loop repeatedly calls <code>fgets()</code> until it returns
    <code>NULL</code>, allowing the complete text file to be read one
    line at a time.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>File contents:</strong></p>
    <p>C Programming</p>
    <p>Pointers</p>
    <p>Structures</p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to read integer values from a text file using
    <code>fscanf()</code> and calculate their sum.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int number;
    int sum = 0;

    fp = fopen("numbers.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    while (fscanf(fp, "%d", &amp;number) == 1)
    {
        sum += number;
    }

    fclose(fp);

    printf("Sum = %d\\n", sum);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    <code>fscanf()</code> reads formatted data from a file. Here, each
    integer is read and added to <code>sum</code> until no more integers
    can be read.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>The file contains:</p>
    <p>10 20 30 40 50</p>
    <p><strong>Sum = 150</strong></p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the number of characters present in a text
    file using <code>fgetc()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;
    int count = 0;

    fp = fopen("data.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    while ((ch = fgetc(fp)) != EOF)
    {
        count++;
    }

    fclose(fp);

    printf("Number of characters = %d\\n", count);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Every successful call to <code>fgetc()</code> returns one character.
    The program increments a counter for each character until
    <code>EOF</code> is encountered.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>If the file contains:</p>
    <p>Hello</p>
    <p><strong>Number of characters = 5</strong></p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to count the number of lines in a text file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;
    int lines = 0;

    fp = fopen("notes.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    while ((ch = fgetc(fp)) != EOF)
    {
        if (ch == '\n')
        {
            lines++;
        }
    }

    fclose(fp);

    printf("Number of lines = %d\\n", lines);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each newline character represents the end of a line. The program counts
    newline characters while reading the file.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>If the file contains 4 lines,</p>
    <p><strong>Number of lines = 4</strong></p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to read student records containing roll number,
    name and marks from a file using <code>fscanf()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int roll;
    char name[50];
    float marks;

    fp = fopen("students.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    printf("Student Records:\\n");

    while (fscanf(fp, "%d %49s %f",
                  &amp;roll,
                  name,
                  &amp;marks) == 3)
    {
        printf("Roll = %d\\n", roll);
        printf("Name = %s\\n", name);
        printf("Marks = %.2f\\n", marks);
        printf("------------------\\n");
    }

    fclose(fp);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Formatted records can be read from a text file using
    <code>fscanf()</code>. The loop continues only when all three expected
    values are successfully read.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Student Records:</strong></p>
    <p>Roll = 101</p>
    <p>Name = Rahul</p>
    <p>Marks = 88.00</p>
    <p>------------------</p>
    <p>Roll = 102</p>
    <p>Name = Priya</p>
    <p>Marks = 92.00</p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to search for a particular word in a text file
    using line-by-line reading.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main()
{
    FILE *fp;
    char line[200];
    char word[50];
    int found = 0;

    fp = fopen("notes.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    printf("Enter word to search: ");
    scanf("%49s", word);

    while (fgets(line, sizeof(line), fp) != NULL)
    {
        if (strstr(line, word) != NULL)
        {
            found = 1;
            break;
        }
    }

    fclose(fp);

    if (found)
        printf("Word found in file.\\n");
    else
        printf("Word not found.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The file is read line by line and <code>strstr()</code> checks whether
    the searched word occurs within the current line.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter word to search: pointer</p>
    <p><strong>Word found in file.</strong></p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to find the largest integer stored in a text file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int number;
    int largest;

    fp = fopen("numbers.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    if (fscanf(fp, "%d", &amp;largest) != 1)
    {
        printf("No numbers found in file.\\n");
        fclose(fp);
        return 0;
    }

    while (fscanf(fp, "%d", &amp;number) == 1)
    {
        if (number &gt; largest)
        {
            largest = number;
        }
    }

    fclose(fp);

    printf("Largest number = %d\\n", largest);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The first number is used as the initial largest value. Every remaining
    number is then compared with it, and the largest value is updated when
    necessary.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>The file contains:</p>
    <p>25 80 15 92 47</p>
    <p><strong>Largest number = 92</strong></p>
  </div>
  `,


  `
  <h2>Reading from Files — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to read a student result file and calculate the
    average marks of all students stored in it.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int roll;
    char name[50];
    float marks;
    float total = 0;
    float average;
    int count = 0;

    fp = fopen("results.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened.\\n");
        return 1;
    }

    while (fscanf(fp, "%d %49s %f",
                  &amp;roll,
                  name,
                  &amp;marks) == 3)
    {
        total += marks;
        count++;
    }

    fclose(fp);

    if (count == 0)
    {
        printf("No records found.\\n");
        return 0;
    }

    average = total / count;

    printf("Number of students = %d\\n", count);
    printf("Average marks = %.2f\\n", average);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program reads each student record from the file, adds the marks
    to <code>total</code>, counts the records and finally calculates the
    average marks.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>If the file contains 3 student records with marks 80, 90 and 85:</p>
    <p><strong>Number of students = 3</strong></p>
    <p><strong>Average marks = 85.00</strong></p>
  </div>
  `

];
SOLUTIONS["s-m5-writing-files"] = [

  `
  <h2>Writing from Files — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a text file and write a simple message
    into it using <code>fprintf()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    fp = fopen("message.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fprintf(fp, "Welcome to BCA Study Portal.\\n");

    fclose(fp);

    printf("Data written successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The file is opened in <code>w</code> mode and <code>fprintf()</code>
    writes formatted text into it. Finally, <code>fclose()</code> closes
    the file.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Data written successfully.</strong></p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 2</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to take a student's name and roll number from the
    user and save the information into a file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int roll;
    char name[50];

    fp = fopen("student.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter roll number: ");
    scanf("%d", &amp;roll);

    printf("Enter name: ");
    scanf("%49s", name);

    fprintf(fp, "Roll Number: %d\\n", roll);
    fprintf(fp, "Name: %s\\n", name);

    fclose(fp);

    printf("Student record saved successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program accepts student details and uses <code>fprintf()</code>
    to write formatted information into the file.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Rahul</p>
    <p><strong>Student record saved successfully.</strong></p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 3</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to write multiple numbers into a file using a loop.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int i;

    fp = fopen("numbers.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    for (i = 1; i &lt;= 10; i++)
    {
        fprintf(fp, "%d\\n", i);
    }

    fclose(fp);

    printf("Numbers written successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The loop generates numbers from 1 to 10, and each number is written
    to a new line in the file using <code>fprintf()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Numbers written successfully.</strong></p>
    <p>File contains:</p>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>...</p>
    <p>10</p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 4</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store five integer values entered by the user
    into a file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int number;
    int i;

    fp = fopen("values.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter 5 numbers:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;number);
        fprintf(fp, "%d\\n", number);
    }

    fclose(fp);

    printf("Values stored successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Each input value is immediately written to the file. The loop repeats
    five times to store all five numbers.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter 5 numbers:</p>
    <p>10 20 30 40 50</p>
    <p><strong>Values stored successfully.</strong></p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 5</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the multiplication table of a number
    in a text file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int number;
    int i;

    fp = fopen("table.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter a number: ");
    scanf("%d", &amp;number);

    for (i = 1; i &lt;= 10; i++)
    {
        fprintf(fp,
                "%d x %d = %d\\n",
                number,
                i,
                number * i);
    }

    fclose(fp);

    printf("Multiplication table saved successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The program generates the multiplication table using a loop and writes
    each line into the file with <code>fprintf()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter a number: 5</p>
    <p><strong>Multiplication table saved successfully.</strong></p>
    <p>File contains:</p>
    <p>5 x 1 = 5</p>
    <p>5 x 2 = 10</p>
    <p>...</p>
    <p>5 x 10 = 50</p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 6</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to save employee details such as ID, name and
    salary into a file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int id;
    char name[50];
    float salary;

    fp = fopen("employee.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter employee ID: ");
    scanf("%d", &amp;id);

    printf("Enter name: ");
    scanf("%49s", name);

    printf("Enter salary: ");
    scanf("%f", &amp;salary);

    fprintf(fp, "Employee ID: %d\\n", id);
    fprintf(fp, "Name: %s\\n", name);
    fprintf(fp, "Salary: %.2f\\n", salary);

    fclose(fp);

    printf("Employee record saved successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Multiple data types can be written to a text file using formatted
    output. Each value is written with a suitable format specifier.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter employee ID: 501</p>
    <p>Enter name: Amit</p>
    <p>Enter salary: 45000</p>
    <p><strong>Employee record saved successfully.</strong></p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 7</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to write the first 10 even numbers into a file.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int i;

    fp = fopen("even.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    for (i = 1; i &lt;= 10; i++)
    {
        fprintf(fp, "%d\\n", i * 2);
    }

    fclose(fp);

    printf("Even numbers written successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The expression <code>i * 2</code> generates even numbers. Each result
    is written to a separate line in the file.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>Even numbers written successfully.</strong></p>
    <p>File contains:</p>
    <p>2 4 6 8 10 12 14 16 18 20</p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 8</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to append a new line of text to an existing file
    using <code>fputs()</code>.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    fp = fopen("notes.txt", "a");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    fputs("New C Programming topic added.\\n", fp);

    fclose(fp);

    printf("New data appended successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The <code>fputs()</code> function writes a string to a file.
    Opening the file with <code>a</code> mode places the new text at the
    end of the existing contents.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p><strong>New data appended successfully.</strong></p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 9</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to store the marks of five students in a file and
    calculate the total marks while writing them.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int marks;
    int total = 0;
    int i;

    fp = fopen("marks.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter marks of 5 students:\\n");

    for (i = 0; i &lt; 5; i++)
    {
        scanf("%d", &amp;marks);

        fprintf(fp, "%d\\n", marks);

        total += marks;
    }

    fclose(fp);

    printf("Marks saved successfully.\\n");
    printf("Total marks = %d\\n", total);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    Every entered mark is written to the file. At the same time, the
    program adds the values to calculate their total.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter marks of 5 students:</p>
    <p>80 75 90 85 70</p>
    <p><strong>Marks saved successfully.</strong></p>
    <p><strong>Total marks = 400</strong></p>
  </div>
  `,


  `
  <h2>Writing from Files — Exercise 10</h2>

  <h3>Problem</h3>

  <p>
    Write a C program to create a complete student result file containing
    roll number, name, marks, total and average for a student.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    int roll;
    char name[50];

    int math;
    int cProgramming;
    int computer;

    int total;
    float average;

    fp = fopen("result.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("Enter roll number: ");
    scanf("%d", &amp;roll);

    printf("Enter name: ");
    scanf("%49s", name);

    printf("Enter marks in Mathematics, C Programming and Computer: ");
    scanf("%d %d %d",
          &amp;math,
          &amp;cProgramming,
          &amp;computer);

    total = math + cProgramming + computer;
    average = total / 3.0;

    fprintf(fp, "=============================\\n");
    fprintf(fp, "        STUDENT RESULT\\n");
    fprintf(fp, "=============================\\n");

    fprintf(fp, "Roll     : %d\\n", roll);
    fprintf(fp, "Name     : %s\\n", name);

    fprintf(fp, "Math     : %d\\n", math);
    fprintf(fp, "C        : %d\\n", cProgramming);
    fprintf(fp, "Computer : %d\\n", computer);

    fprintf(fp, "Total    : %d\\n", total);
    fprintf(fp, "Average  : %.2f\\n", average);

    fclose(fp);

    printf("\\nStudent result saved successfully.\\n");

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    This final example combines user input, arithmetic operations and
    formatted file writing. The complete student result is stored in
    <code>result.txt</code> using <code>fprintf()</code>.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter roll number: 101</p>
    <p>Enter name: Priya</p>
    <p>Enter marks in Mathematics, C Programming and Computer: 90 88 92</p>
    <p><strong>Student result saved successfully.</strong></p>
    <p><strong>File contains:</strong></p>
    <p>=============================</p>
    <p>        STUDENT RESULT</p>
    <p>=============================</p>
    <p>Roll     : 101</p>
    <p>Name     : Priya</p>
    <p>Math     : 90</p>
    <p>C        : 88</p>
    <p>Computer : 92</p>
    <p>Total    : 270</p>
    <p>Average  : 90.00</p>
  </div>
  `

];