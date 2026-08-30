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

  // Exercise 1
  `
  <h2>Algorithm — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Write an algorithm to add two numbers.
  </p>

  <h3>Algorithm</h3>

  <ol>
    <li>Start</li>
    <li>Input two numbers A and B</li>
    <li>Calculate SUM = A + B</li>
    <li>Display SUM</li>
    <li>Stop</li>
  </ol>

  <h3>Explanation</h3>

  <p>
    The algorithm accepts two numbers, adds them, and displays the
    calculated sum.
  </p>

  <h3>Expected Result</h3>

  <div class="note-callout">
    <p>
      If A = 10 and B = 15
    </p>

    <p>
      <strong>SUM = 25</strong>
    </p>
  </div>
  `,


  // Exercise 2
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
    The algorithm compares the two input values and displays
    the greater number.
  </p>
  `

];


// ==========================================================
// MODULE 1 — FLOWCHART
// ==========================================================

SOLUTIONS["s-m1-flowchart"] = [

  `
  <h2>Flowchart — Exercise 1</h2>

  <h3>Problem</h3>

  <p>
    Draw a flowchart to add two numbers.
  </p>

  <div class="solution-image">
    <!-- Flowchart image will be inserted here -->
  </div>

  <h3>Explanation</h3>

  <p>
    The flowchart starts by accepting two numbers, performs the
    addition, displays the result, and then stops.
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