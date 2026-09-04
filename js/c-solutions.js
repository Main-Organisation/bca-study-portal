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
    Write a C program to check whether a number is even or odd.
  </p>

  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    int num;

    printf("Enter an integer: ");
    scanf("%d", &amp;num);

    // remainder 0 means the number is even
    if (num % 2 == 0)
        printf("%d is Even.\\n", num);
    else
        printf("%d is Odd.\\n", num);

    return 0;
}
  </div>

  <h3>Explanation</h3>

  <p>
    The modulus operator <code>%</code> gives the remainder after
    division by 2. If the remainder is 0, the number is even;
    otherwise it is odd.
  </p>

  <h3>Expected Output</h3>

  <div class="note-callout">
    <p>Enter an integer: 15</p>
    <p><strong>15 is Odd.</strong></p>
  </div>
  `

];


// ==========================================================
// PLACEHOLDER SECTIONS FOR FUTURE TOPICS
// ==========================================================

SOLUTIONS["s-m2-nested-if"] = [];
SOLUTIONS["s-m2-switch-case"] = [];
SOLUTIONS["s-m2-while"] = [];
SOLUTIONS["s-m2-do-while"] = [];
SOLUTIONS["s-m2-for"] = [];
SOLUTIONS["s-m2-break"] = [];
SOLUTIONS["s-m2-continue"] = [];

SOLUTIONS["s-m3-arrays-1d"] = [];
SOLUTIONS["s-m3-arrays-2d"] = [];
SOLUTIONS["s-m3-character-arrays-strings"] = [];
SOLUTIONS["s-m3-function-types"] = [];
SOLUTIONS["s-m3-formal-actual"] = [];
SOLUTIONS["s-m3-parameter-passing"] = [];
SOLUTIONS["s-m3-call-by-value"] = [];
SOLUTIONS["s-m3-call-by-reference"] = [];
SOLUTIONS["s-m3-passing-arrays"] = [];
SOLUTIONS["s-m3-nested-functions"] = [];
SOLUTIONS["s-m3-recursion"] = [];

SOLUTIONS["s-m4-introduction"] = [];
SOLUTIONS["s-m4-storage-classes"] = [];
SOLUTIONS["s-m4-structures"] = [];
SOLUTIONS["s-m4-advantages"] = [];
SOLUTIONS["s-m4-accessing-elements"] = [];
SOLUTIONS["s-m4-nested-structures"] = [];
SOLUTIONS["s-m4-array-structures"] = [];
SOLUTIONS["s-m4-functions-structures"] = [];
SOLUTIONS["s-m4-unions"] = [];
SOLUTIONS["s-m4-bit-fields"] = [];
SOLUTIONS["s-m4-enumerated"] = [];

SOLUTIONS["s-m5-pointer-idea"] = [];
SOLUTIONS["s-m5-defining-pointers"] = [];
SOLUTIONS["s-m5-use-pointers"] = [];
SOLUTIONS["s-m5-file-modes"] = [];
SOLUTIONS["s-m5-reading-files"] = [];
SOLUTIONS["s-m5-writing-files"] = [];