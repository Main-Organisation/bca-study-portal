// ============================================================
// BCA STUDY PORTAL - NOTES
// ============================================================
// This file contains the notes content for each syllabus topic.
//
// IMPORTANT:
// - syllabus.js controls topic names and order.
// - app.js controls navigation.
// - This file only controls note content.
// ============================================================

const NOTES = {};

// ------------------------------------------------------------
// DEFAULT PLACEHOLDER
// ------------------------------------------------------------

function placeholder(topicTitle) {
  return `
    <div class="placeholder-note">
      <span class="placeholder-label">NOTES PLACEHOLDER</span>

      <h1>${topicTitle}</h1>

      <p>
        Notes for this topic will be added later.
      </p>
    </div>
  `;
}


// ------------------------------------------------------------
// CREATE PLACEHOLDERS FOR ALL SYLLABUS TOPICS
// ------------------------------------------------------------

SYLLABUS.forEach(module => {
  module.topics.forEach(topic => {
    NOTES[topic.id] = [
      placeholder(topic.title)
    ];
  });
});


// ============================================================
// MODULE 1
// TOPIC 1 — INTRODUCTION TO COMPUTER
// ============================================================

NOTES["m1-introduction-components"] = [
  `

  <h1>Introduction to Computer</h1>

  <p>
    A computer is a programmable electronic device that accepts raw data
    as input, processes it according to a set of stored instructions,
    produces useful information as output, and can store the results
    for future use.
  </p>


  <!-- In Simple Words -->

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A computer takes <strong>input</strong>, works on that data,
      gives us an <strong>output</strong>, and can store the result.
    </p>

  </div>


  <!-- What is a Computer? -->

  <h2>What is a Computer?</h2>

  <p>
    A computer is an electronic device used to process data.
    It works according to instructions given through a program.
    It can perform arithmetic and logical operations quickly and accurately.
  </p>

  <p>
    Modern computers are programmable and can be used for many different
    types of work. They are not limited to calculations; they can also
    store information, communicate with other devices, and run different
    applications.
  </p>


  <!-- Basic Working -->

  <h2>Basic Working of a Computer</h2>

<p>
  The basic working of a computer can be understood through four main stages:
  <strong>Input, Processing, Output, and Storage.</strong>
</p>

<div class="note-image">
  <img
    src="images/image2.png"
    alt="Basic Working of a Computer - Input, Processing, Output and Storage"
  >
</div>


  <h3>1. Input</h3>

  <p>
    Input is the data or instructions given to the computer.
    Devices such as a keyboard and mouse are commonly used to provide input.
  </p>


  <h3>2. Processing</h3>

  <p>
    After receiving the input, the computer processes the data according
    to the instructions provided by the program.
  </p>


  <h3>3. Output</h3>

  <p>
    The result obtained after processing is called output.
    The result may be displayed on a monitor, printed on paper,
    or produced through another output device.
  </p>


  <h3>4. Storage</h3>

  <p>
    Data, programs, and results can be stored so that they can be used later.
  </p>


  <div class="note-callout">
  <span class="note-callout-title">💡 In Simple Words</span>

  <p>
    A computer first receives data as <strong>Input</strong>,
    processes it, produces the <strong>Output</strong>, and
    stores the data or result for future use.
  </p>
</div>


  <!-- Characteristics -->

  <h2>Characteristics of Computers</h2>

  <p>
    Computers have several characteristics that make them useful for
    solving problems and performing different tasks.
  </p>


  <h3>Speed</h3>

  <p>
    A computer can perform a very large number of operations in a short
    period of time.
  </p>


  <h3>Accuracy</h3>

  <p>
    A computer can give highly accurate results when the input and program
    instructions are correct.
  </p>


  <h3>Diligence</h3>

  <p>
    A computer does not become tired or lose concentration.
    It can perform the same task repeatedly without getting tired.
  </p>


  <h3>Versatility</h3>

  <p>
    A computer can be used for many different activities such as
    calculations, programming, designing, communication, and data processing.
  </p>


  <h3>Storage Capacity</h3>

  <p>
    A computer can store a large amount of data and information for future use.
  </p>


  <h3>Automation</h3>

  <p>
    Once a program or task is started with the required instructions,
    the computer can perform the operations automatically.
  </p>


  <!-- Evolution -->

  <h2>Evolution of Computers</h2>

  <p>
    Computers have developed gradually from simple calculating devices
    into modern electronic and programmable machines.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Device / Development</th>
          <th>Important Point</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>
            <strong>Abacus</strong>
          </td>

          <td>
            An early manual calculating device.
          </td>
        </tr>


        <tr>
          <td>
            <strong>Pascaline</strong>
          </td>

          <td>
            A mechanical calculator developed by Blaise Pascal.
          </td>
        </tr>


        <tr>
          <td>
            <strong>Analytical Engine</strong>
          </td>

          <td>
            Charles Babbage's important general-purpose computer concept.
          </td>
        </tr>


        <tr>
          <td>
            <strong>ENIAC</strong>
          </td>

          <td>
            An early electronic general-purpose computer.
          </td>
        </tr>


        <tr>
          <td>
            <strong>Microprocessor</strong>
          </td>

          <td>
            Microprocessor-based systems helped in the development
            of modern personal computers.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <!-- Generations -->

  <h2>Generations of Computers</h2>

  <p>
    Computers are commonly divided into generations according to the
    major technology used in their development.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Generation</th>
          <th>Main Technology</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>
            <strong>First Generation</strong>
          </td>

          <td>
            Vacuum Tubes
          </td>

          <td>
            ENIAC, UNIVAC
          </td>
        </tr>


        <tr>
          <td>
            <strong>Second Generation</strong>
          </td>

          <td>
            Transistors
          </td>

          <td>
            IBM 1401
          </td>
        </tr>


        <tr>
          <td>
            <strong>Third Generation</strong>
          </td>

          <td>
            Integrated Circuits (ICs)
          </td>

          <td>
            IBM 360
          </td>
        </tr>


        <tr>
          <td>
            <strong>Fourth Generation</strong>
          </td>

          <td>
            Microprocessors
          </td>

          <td>
            Personal Computers
          </td>
        </tr>


        <tr>
          <td>
            <strong>Fifth Generation</strong>
          </td>

          <td>
            AI and advanced processing technologies
          </td>

          <td>
            AI and robotics-oriented systems
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <!-- Classification -->

  <h2>Classification of Computers</h2>

  <p>
    Computers can be classified in different ways depending on their
    size, purpose, and working principle.
  </p>


  <h3>According to Size</h3>

  <ul>
    <li>Microcomputers</li>
    <li>Minicomputers</li>
    <li>Mainframe Computers</li>
    <li>Supercomputers</li>
  </ul>


  <h3>According to Purpose</h3>

  <ul>
    <li>General-Purpose Computers</li>
    <li>Special-Purpose Computers</li>
  </ul>


  <h3>According to Working Principle</h3>

  <ul>
    <li>Analog Computers</li>
    <li>Digital Computers</li>
    <li>Hybrid Computers</li>
  </ul>


  <!-- Applications -->

  <h2>Applications of Computers</h2>

  <p>
    Computers are used in almost every field of modern life.
  </p>


  <ul>

    <li>
      <strong>Education:</strong>
      Online learning, digital libraries, virtual labs and examinations.
    </li>

    <li>
      <strong>Business:</strong>
      Accounting, payroll, inventory and data analysis.
    </li>

    <li>
      <strong>Banking:</strong>
      ATMs, online banking and digital payments.
    </li>

    <li>
      <strong>Healthcare:</strong>
      Medical imaging, digital records and computer-assisted systems.
    </li>

    <li>
      <strong>Communication:</strong>
      Email, messaging and video calls.
    </li>

    <li>
      <strong>Entertainment:</strong>
      Games, movies, animation and digital media.
    </li>

    <li>
      <strong>Science:</strong>
      Research, simulations and data analysis.
    </li>

  </ul>


  <!-- Advantages & Limitations -->

  <h2>Advantages and Limitations of Computers</h2>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Advantages</th>
          <th>Limitations</th>
        </tr>

      </thead>


      <tbody>

        <tr>
          <td>
            High speed
          </td>

          <td>
            No human-like intelligence
          </td>
        </tr>


        <tr>
          <td>
            High accuracy when input and instructions are correct
          </td>

          <td>
            Depends on programs and correct input
          </td>
        </tr>


        <tr>
          <td>
            Large storage capacity
          </td>

          <td>
            Requires electrical power
          </td>
        </tr>


        <tr>
          <td>
            Continuous working without fatigue
          </td>

          <td>
            Follows the GIGO principle
          </td>
        </tr>


        <tr>
          <td>
            Automation and versatility
          </td>

          <td>
            Improper use may create health and social concerns
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <!-- Role -->

  <h2>Role of Computers in Modern Society</h2>

  <p>
    Computers have become an important part of modern society.
    They are used in communication, healthcare, education, governance,
    entertainment, science, banking, and many other areas.
  </p>


  <p>
    Digital services, online education, communication platforms,
    medical systems, research, and many everyday activities depend
    on computer technology.
  </p>


  <!-- Emerging Trends -->

  <h2>Emerging Trends in Computing</h2>

  <p>
    Modern computing is developing rapidly. Important trends mentioned
    in the study material include:
  </p>


  <ul>
    <li>Artificial Intelligence (AI)</li>
    <li>Machine Learning (ML)</li>
    <li>Cloud Computing</li>
    <li>Internet of Things (IoT)</li>
    <li>Quantum Computing</li>
    <li>Blockchain</li>
    <li>5G and 6G technologies</li>
    <li>Edge Computing</li>
    <li>Augmented Reality</li>
  </ul>


  <!-- Problem Solving -->




<div class="note-image">
  <img
    src="images/image1.png"
    alt="Computer-Based Problem Solving Process"
  >
</div>

<div class="note-callout">
  <span class="note-callout-title">💡 In Simple Words</span>

  <p>
    Before writing a program, first understand the problem,
    decide the solution, write the code, test it, and improve it when required.
  </p>
</div>

  <ol>

    <li>
      <strong>Define:</strong>
      Understand the problem clearly.
    </li>

    <li>
      <strong>Analyze:</strong>
      Identify the required input, output, and processing.
    </li>

    <li>
      <strong>Design:</strong>
      Prepare the solution using an algorithm or flowchart.
    </li>

    <li>
      <strong>Code:</strong>
      Write the solution in a programming language.
    </li>

    <li>
      <strong>Test:</strong>
      Check the program using suitable test data.
    </li>

    <li>
      <strong>Maintain:</strong>
      Update or improve the solution when required.
    </li>

  </ol>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Before writing a program, first understand the problem,
      decide the solution, and then write and test the code.
    </p>

  </div>


  <!-- Exam Questions -->

  <h2>Important Exam Questions</h2>


  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a computer?</li>

    <li>What is the IPO cycle?</li>

    <li>Write any four characteristics of a computer.</li>

    <li>What is meant by GIGO?</li>

    <li>Write the basic stages of computer working.</li>

    <li>What are the different generations of computers?</li>

    <li>
      Write the classification of computers according to working principle.
    </li>

    <li>Write any four applications of computers.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the basic working of a computer with the help of the IPO cycle.
    </li>

    <li>
      Explain the important characteristics of computers.
    </li>

    <li>
      Explain the evolution and generations of computers.
    </li>

    <li>
      Explain the classification of computers with suitable examples.
    </li>

    <li>
      Discuss the advantages and limitations of computers.
    </li>

    <li>
      Explain the role and applications of computers in modern society.
    </li>

  </ol>


  <!-- ========================================================
       RESOURCE SECTION
       ======================================================== -->

  <div class="resource-section">


    <!-- Recommended Learning -->

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch an easy introductory lecture
        to strengthen your understanding.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=hkUdwl9Eb38"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Introduction to Computer — Easy Lecture
        </a>

      </p>

    </div>


    <!-- Handwritten Notes -->

    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for this topic
        will be provided here.
      </p>

    </div>


    <!-- Mind Map -->

    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision before class tests
        and examinations.
      </p>

    </div>


  </div>

    `,
  `
    <h1>Components of a Computer System</h1>

  <p>
    A computer system is made up of several important components that work
    together to accept data, process it, store it, and produce useful information.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 In Simple Words</span>
    <p>
      A computer system is not just a CPU. Input devices, CPU, memory,
      storage, and output devices all work together to complete a task.
    </p>
  </div>


  <!-- Computer Components Image -->

  <div class="note-image">
    <img
      src="images/Image2.png"
      alt="Components of a Computer System"
    >
  </div>


  <h2>Functional Components of a Computer System</h2>

  <p>
    A computer system has four main functional components:
    <strong>Input Unit, Central Processing Unit (CPU), Memory Unit,
    and Output Unit.</strong>
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Component</th>
          <th>Main Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Input Unit</strong></td>
          <td>
            Accepts data and instructions from the user.
          </td>
        </tr>

        <tr>
          <td><strong>CPU</strong></td>
          <td>
            Processes data and controls the operations of the computer.
          </td>
        </tr>

        <tr>
          <td><strong>Memory Unit</strong></td>
          <td>
            Stores data, instructions, and results.
          </td>
        </tr>

        <tr>
          <td><strong>Output Unit</strong></td>
          <td>
            Presents the processed information to the user.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Input Unit</h2>

  <p>
    The Input Unit is used to enter data and instructions into the computer.
    It receives information from the user and sends it to the computer
    for processing.
  </p>

  <p>
    Input devices convert user-provided information into a form that the
    computer system can process.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Input means <strong>giving data to the computer</strong>.
      For example, when you type your name using a keyboard,
      the keyboard provides input to the computer.
    </p>

  </div>


  <h3>Common Input Devices</h3>

  <ul>

    <li>
      <strong>Keyboard:</strong>
      Used for entering text, numbers, and commands.
    </li>

    <li>
      <strong>Mouse:</strong>
      Used for pointing, selecting, clicking, and interacting with
      graphical interfaces.
    </li>

    <li>
      <strong>Scanner:</strong>
      Converts printed documents and images into digital form.
    </li>

    <li>
      <strong>Microphone:</strong>
      Used to provide audio or voice input.
    </li>

    <li>
      <strong>Webcam:</strong>
      Used to provide video input.
    </li>

  </ul>


  <h3>Input Devices Table</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Device</th>
          <th>Input Type</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Keyboard</strong></td>
          <td>Text and commands</td>
          <td>Typing and coding</td>
        </tr>

        <tr>
          <td><strong>Mouse</strong></td>
          <td>Pointing</td>
          <td>GUI interaction</td>
        </tr>

        <tr>
          <td><strong>Scanner</strong></td>
          <td>Images and documents</td>
          <td>Digitization</td>
        </tr>

        <tr>
          <td><strong>Microphone</strong></td>
          <td>Audio</td>
          <td>Voice input</td>
        </tr>

        <tr>
          <td><strong>Webcam</strong></td>
          <td>Video</td>
          <td>Video calls and recording</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>2. Central Processing Unit (CPU)</h2>

  <p>
    The <strong>Central Processing Unit (CPU)</strong> is the main processing
    unit of a computer. It executes instructions and controls the operations
    of the computer system.
  </p>

  <p>
    The CPU fetches instructions from memory, decodes them, performs the
    required operation, and stores the result.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      The CPU is often called the <strong>brain of the computer</strong>
      because it performs processing and controls the main operations
      of the system.
    </p>

  </div>


  <h3>Main Parts of CPU</h3>

  <p>
    The CPU mainly consists of:
  </p>

  <ul>
    <li><strong>Arithmetic Logic Unit (ALU)</strong></li>
    <li><strong>Control Unit (CU)</strong></li>
    <li><strong>Registers</strong></li>
  </ul>


  <h2>3. Arithmetic Logic Unit (ALU)</h2>

  <p>
    The <strong>Arithmetic Logic Unit (ALU)</strong> is the part of the CPU
    responsible for arithmetic and logical operations.
  </p>

  <h3>Arithmetic Operations</h3>

  <ul>
    <li>Addition</li>
    <li>Subtraction</li>
    <li>Multiplication</li>
    <li>Division</li>
  </ul>

  <h3>Logical Operations</h3>

  <ul>
    <li>AND</li>
    <li>OR</li>
    <li>NOT</li>
    <li>XOR</li>
    <li>Comparison</li>
  </ul>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Type</th>
          <th>Operations</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Arithmetic</strong></td>
          <td>Addition, Subtraction, Multiplication, Division</td>
        </tr>

        <tr>
          <td><strong>Logical</strong></td>
          <td>AND, OR, NOT, XOR, Comparison</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      The ALU performs calculations and logical comparisons.
      For example, when the computer calculates
      <strong>5 + 7 = 12</strong>, the arithmetic operation is performed
      by the ALU.
    </p>

  </div>


  <h2>4. Control Unit (CU)</h2>

  <p>
    The <strong>Control Unit (CU)</strong> manages and coordinates the
    activities of the computer. It controls the flow of data and instructions
    between the CPU, memory, and input/output devices.
  </p>

  <p>
    The Control Unit fetches instructions from memory, decodes them,
    and generates the required control signals for their execution.
  </p>


  <h3>Main Functions of Control Unit</h3>

  <ol>

    <li>
      <strong>Fetch:</strong>
      Gets the required instruction from memory.
    </li>

    <li>
      <strong>Decode:</strong>
      Interprets the instruction.
    </li>

    <li>
      <strong>Execute:</strong>
      Sends appropriate control signals to the required units.
    </li>

  </ol>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      The Control Unit <strong>controls and coordinates</strong>
      computer operations. It does not perform the actual arithmetic
      calculations itself.
    </p>

  </div>


  <h2>5. Memory Unit</h2>

  <p>
    The Memory Unit stores data, instructions, and results required by
    the computer. It provides information to the CPU during processing
    and stores results when required.
  </p>

  <p>
    Computer memory is organized into different levels according to
    speed, size, and cost.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Memory is the computer's storage area for the data and instructions
      that are being used or saved.
    </p>

  </div>


  <h2>6. Primary Memory</h2>

  <p>
    Primary Memory, also called <strong>Main Memory</strong>, is directly
    accessed by the CPU. It stores programs and data that are currently
    being used by the computer.
  </p>

  <p>
    Important types of primary memory include <strong>RAM</strong>,
    <strong>ROM</strong>, and cache memory.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Type</th>
          <th>Volatile</th>
          <th>Main Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>RAM</strong></td>
          <td>Yes</td>
          <td>Stores currently running programs and data</td>
        </tr>

        <tr>
          <td><strong>ROM</strong></td>
          <td>No</td>
          <td>Stores firmware and boot-related instructions</td>
        </tr>

        <tr>
          <td><strong>Cache</strong></td>
          <td>Yes</td>
          <td>Provides faster access to frequently needed data</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h3>RAM — Random Access Memory</h3>

  <p>
    RAM is temporary, read/write memory used to store the data and programs
    currently required by the computer.
  </p>

  <p>
    RAM is <strong>volatile</strong>, which means the stored data is lost
    when the power is turned off.
  </p>


  <h3>ROM — Read Only Memory</h3>

  <p>
    ROM is non-volatile memory that retains its contents even when the
    computer is switched off. It is used for firmware and boot-related
    instructions.
  </p>


  <h3>Cache Memory</h3>

  <p>
    Cache is a high-speed memory located close to or inside the CPU.
    It helps reduce the time required to access frequently used data.
  </p>


  <h2>7. Secondary Storage</h2>

  <p>
    Secondary storage provides permanent, non-volatile storage for
    programs, data, and other files.
  </p>

  <p>
    Compared with primary memory, secondary storage generally provides
    larger capacity and is slower to access.
  </p>


  <h3>Examples of Secondary Storage</h3>

  <ul>
    <li>Hard Disk Drive (HDD)</li>
    <li>Solid State Drive (SSD)</li>
    <li>CD/DVD</li>
    <li>Pen Drive</li>
    <li>Cloud Storage</li>
  </ul>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Storage Device</th>
          <th>Type</th>
          <th>Important Point</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>HDD</strong></td>
          <td>Magnetic</td>
          <td>Large capacity, mechanical storage</td>
        </tr>

        <tr>
          <td><strong>SSD</strong></td>
          <td>Flash</td>
          <td>Faster storage with no moving mechanical parts</td>
        </tr>

        <tr>
          <td><strong>Pen Drive</strong></td>
          <td>Flash</td>
          <td>Portable storage device</td>
        </tr>

        <tr>
          <td><strong>CD/DVD</strong></td>
          <td>Optical</td>
          <td>Optical storage media</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>8. Registers</h2>

  <p>
    Registers are very small and very fast storage locations inside the CPU.
    They temporarily hold data, instructions, addresses, and intermediate
    results during processing.
  </p>


  <h3>Common Registers</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Register</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>PC — Program Counter</strong></td>
          <td>Holds the address of the next instruction.</td>
        </tr>

        <tr>
          <td><strong>IR — Instruction Register</strong></td>
          <td>Holds the current instruction.</td>
        </tr>

        <tr>
          <td><strong>ACC — Accumulator</strong></td>
          <td>Stores results produced by ALU operations.</td>
        </tr>

        <tr>
          <td><strong>MAR — Memory Address Register</strong></td>
          <td>Holds the memory address being accessed.</td>
        </tr>

        <tr>
          <td><strong>MDR — Memory Data Register</strong></td>
          <td>Holds data being transferred to or from memory.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      Registers are among the <strong>fastest storage locations</strong>
      in the computer and are located inside the CPU.
    </p>

  </div>


  <h2>9. Output Unit</h2>

  <p>
    The Output Unit presents the processed information to the user in
    a form that can be understood by humans.
  </p>


  <h3>Common Output Devices</h3>

  <ul>

    <li>
      <strong>Monitor:</strong>
      Displays text, graphics, and video.
    </li>

    <li>
      <strong>Printer:</strong>
      Produces printed output on paper.
    </li>

    <li>
      <strong>Speakers:</strong>
      Produce audio output.
    </li>

    <li>
      <strong>Projector:</strong>
      Displays computer output on a larger screen.
    </li>

  </ul>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Device</th>
          <th>Output</th>
          <th>Copy Type</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Monitor</strong></td>
          <td>Text, graphics, video</td>
          <td>Soft Copy</td>
        </tr>

        <tr>
          <td><strong>Printer</strong></td>
          <td>Text and images</td>
          <td>Hard Copy</td>
        </tr>

        <tr>
          <td><strong>Speakers</strong></td>
          <td>Sound and music</td>
          <td>Soft Copy</td>
        </tr>

        <tr>
          <td><strong>Projector</strong></td>
          <td>Large-screen display</td>
          <td>Soft Copy</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>10. Data Processing Cycle</h2>

  <p>
    The Data Processing Cycle describes the basic sequence followed by the
    CPU while processing an instruction.
  </p>


  <div class="note-flow">
FETCH
  ↓
DECODE
  ↓
EXECUTE
  ↓
STORE
  </div>


  <ol>

    <li>
      <strong>Fetch:</strong>
      The required instruction is obtained from memory.
    </li>

    <li>
      <strong>Decode:</strong>
      The Control Unit interprets the instruction.
    </li>

    <li>
      <strong>Execute:</strong>
      The required operation is performed.
    </li>

    <li>
      <strong>Store:</strong>
      The result is stored in a register or memory.
    </li>

  </ol>


  <h2>11. Input-Process-Output Model</h2>

  <p>
    The IPO model explains how a computer receives data, processes it,
    and produces useful information. Memory supports the processing
    by storing data and instructions.
  </p>


  <div class="note-flow">
INPUT
  ↓
PROCESS
  ↓
OUTPUT
  ↓
STORAGE
  </div>


  <h3>Example: Adding Two Numbers</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Stage</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>Enter 5 and 7 using the keyboard.</td>
        </tr>

        <tr>
          <td><strong>Process</strong></td>
          <td>CPU/ALU performs 5 + 7 = 12.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Display 12 on the monitor.</td>
        </tr>

        <tr>
          <td><strong>Storage</strong></td>
          <td>Data and result can be stored in memory.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>12. Hardware Organization</h2>

  <p>
    Hardware organization describes how the different hardware components
    of a computer are connected and communicate with each other.
  </p>

  <p>
    The main communication path between CPU, memory, and input/output
    devices is the <strong>system bus</strong>.
  </p>


  <h3>Types of System Bus</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Bus</th>
          <th>Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Data Bus</strong></td>
          <td>Carries data between computer components.</td>
        </tr>

        <tr>
          <td><strong>Address Bus</strong></td>
          <td>Carries memory or I/O addresses.</td>
        </tr>

        <tr>
          <td><strong>Control Bus</strong></td>
          <td>Carries control and timing signals.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Think of the system bus as a communication pathway that allows
      different parts of the computer to exchange information.
    </p>

  </div>


  <h2>13. Interaction Among Computer Components</h2>

  <p>
    The different components of a computer work together during processing.
    Input devices provide data, memory holds data and instructions,
    the CPU processes them, and output devices present the result.
  </p>


  <div class="note-flow">
INPUT DEVICE
      ↓
MEMORY
      ↓
CPU
(ALU + CU + REGISTERS)
      ↓
MEMORY
      ↓
OUTPUT DEVICE
  </div>


  <p>
    The Control Unit coordinates the flow of information between the
    different units. Buses carry data, addresses, and control signals.
  </p>


  <h2>14. Memory Hierarchy</h2>

  <p>
    Computer memory is organized according to speed, size, and cost.
    Faster memory is generally smaller and placed closer to the CPU.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Level</th>
          <th>Typical Characteristic</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Registers</strong></td>
          <td>Very fast and located inside the CPU.</td>
        </tr>

        <tr>
          <td><strong>Cache</strong></td>
          <td>Very fast memory used to reduce access time.</td>
        </tr>

        <tr>
          <td><strong>RAM</strong></td>
          <td>Main working memory for active programs and data.</td>
        </tr>

        <tr>
          <td><strong>SSD</strong></td>
          <td>Non-volatile secondary storage.</td>
        </tr>

        <tr>
          <td><strong>HDD</strong></td>
          <td>High-capacity magnetic secondary storage.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>15. System Performance Factors</h2>

  <p>
    The performance of a computer system depends on several hardware
    and software factors.
  </p>

  <ul>

    <li>
      <strong>CPU Clock Speed:</strong>
      Affects how quickly instructions can be processed.
    </li>

    <li>
      <strong>Number of CPU Cores:</strong>
      Multiple cores can support parallel processing.
    </li>

    <li>
      <strong>Cache:</strong>
      Faster access to frequently required data can improve performance.
    </li>

    <li>
      <strong>RAM:</strong>
      More memory allows more programs and data to remain available
      during processing.
    </li>

    <li>
      <strong>Storage:</strong>
      SSD storage generally provides faster access than traditional HDD storage.
    </li>

    <li>
      <strong>Bus Width:</strong>
      Affects how much information can be transferred through the bus.
    </li>

  </ul>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Component</th>
          <th>Remember This</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Input Unit</strong></td>
          <td>Accepts data and instructions.</td>
        </tr>

        <tr>
          <td><strong>CPU</strong></td>
          <td>Processes instructions and controls operations.</td>
        </tr>

        <tr>
          <td><strong>ALU</strong></td>
          <td>Performs arithmetic and logical operations.</td>
        </tr>

        <tr>
          <td><strong>Control Unit</strong></td>
          <td>Controls and coordinates operations.</td>
        </tr>

        <tr>
          <td><strong>Memory</strong></td>
          <td>Stores data, instructions, and results.</td>
        </tr>

        <tr>
          <td><strong>Registers</strong></td>
          <td>Very fast temporary storage inside CPU.</td>
        </tr>

        <tr>
          <td><strong>Output Unit</strong></td>
          <td>Presents processed information.</td>
        </tr>

        <tr>
          <td><strong>Storage</strong></td>
          <td>Provides long-term data storage.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Revision Trick
    </span>

    <p>
      Remember the basic flow:
      <strong>Input → Processing → Output</strong>,
      while <strong>Memory and Storage</strong> support the process.
    </p>

  </div>


  <!-- ========================================================
       IMPORTANT EXAM QUESTIONS
       ======================================================== -->

  <h2>Important Exam Questions</h2>


  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What are the main functional components of a computer system?</li>

    <li>What is an Input Unit?</li>

    <li>Write any five input devices.</li>

    <li>What is the CPU?</li>

    <li>What are the main parts of CPU?</li>

    <li>What is ALU?</li>

    <li>What is the function of the Control Unit?</li>

    <li>What is primary memory?</li>

    <li>What is the difference between RAM and ROM?</li>

    <li>What is secondary storage?</li>

    <li>What are registers?</li>

    <li>What is the IPO model?</li>

    <li>What is a system bus?</li>

    <li>Name the three types of system bus.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the functional components of a computer system with a suitable diagram.
    </li>

    <li>
      Explain the Input Unit and different input devices.
    </li>

    <li>
      Explain the CPU and its main components.
    </li>

    <li>
      Explain the functions of ALU and Control Unit.
    </li>

    <li>
      Explain primary memory and secondary storage with suitable examples.
    </li>

    <li>
      Explain different registers and their functions.
    </li>

    <li>
      Explain the Data Processing Cycle.
    </li>

    <li>
      Explain the Input-Process-Output model with an example.
    </li>

    <li>
      Explain the different types of system bus.
    </li>

    <li>
      Explain how the different components of a computer interact with one another.
    </li>

  </ol>


  <!-- ========================================================
       RESOURCE SECTION
       ======================================================== -->

  <div class="resource-section">


    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch this easy explanation of
        computer components, CPU, memory, input and output devices.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=l34xUV1uZiY"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Components / Architecture of Computer System — BCA
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering the major
        components of a computer system will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of Input Unit, CPU,
        Memory, Storage and Output Unit.
      </p>

    </div>


  </div>
  `
];

// ============================================================
// MODULE 1 — TOPIC 2
// ARCHITECTURE
// ============================================================

NOTES["m1-architecture"] = [
  `

  

  <p>
    Computer Architecture refers to the design, structure, and organization
    of a computer system and the way its major components work together
    to execute programs.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 In Simple Words</span>

    <p>
      Computer architecture is like the <strong>blueprint of a computer</strong>.
      It tells us how the CPU, memory, input/output devices, and other
      components are organized and how they work together.
    </p>
  </div>


  <!-- Architecture Diagram -->

  <div class="note-image">
    <img
      src="images/Image3.png"
      alt="Computer Architecture Diagram"
    >
  </div>


  <h2>What is Computer Architecture?</h2>

  <p>
    Computer Architecture describes the design and functional behavior of
    a computer system. It explains how the CPU, memory, input/output devices,
    instructions, and data are organized and how they interact while
    executing a program.
  </p>

  <p>
    It provides the programmer's view of the computer system, including
    instruction formats, data types, registers, addressing methods,
    memory organization, and input/output mechanisms.
  </p>


  <div class="note-callout">
    <span class="note-callout-title">📌 Important Point</span>

    <p>
      <strong>Architecture tells us what the computer system does,
      while organization explains how the hardware implements it.</strong>
    </p>
  </div>


  <h2>Architecture vs Organization</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Computer Architecture</th>
          <th>Computer Organization</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>
            Describes the functional behavior and programmer-visible design.
          </td>

          <td>
            Describes how the hardware components are actually connected and implemented.
          </td>
        </tr>

        <tr>
          <td>
            Concerned with what the system does.
          </td>

          <td>
            Concerned with how the system does it.
          </td>
        </tr>

        <tr>
          <td>
            Includes instruction set, data formats, registers and addressing modes.
          </td>

          <td>
            Includes hardware connections, buses, control signals and physical implementation.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Instruction Set Architecture (ISA)</h2>

  <p>
    Instruction Set Architecture, commonly called <strong>ISA</strong>,
    is the interface between software and the processor hardware.
  </p>

  <p>
    It defines the instructions that a processor can understand, the
    available registers, data formats, memory addressing methods, and
    other programmer-visible features of the processor.
  </p>

  <p>
    Examples of instruction set architectures mentioned in the study
    material include <strong>x86, ARM, MIPS, and RISC-V</strong>.
  </p>


  <h2>Von Neumann Architecture</h2>

  <p>
    Von Neumann Architecture is based on the
    <strong>stored-program concept</strong>. In this architecture,
    program instructions and data are stored in the same memory.
  </p>

  <p>
    The CPU fetches instructions from memory, one after another,
    and executes them.
  </p>


  <div class="note-flow">

INPUT
   ↓
MEMORY
   ↕
CPU
(ALU + CU + REGISTERS)
   ↓
OUTPUT

All connected through the System Bus

  </div>


  <h3>Key Features of Von Neumann Architecture</h3>

  <ul>

    <li>
      A single memory is used for both programs and data.
    </li>

    <li>
      Instructions are fetched and executed sequentially.
    </li>

    <li>
      CPU, memory, and input/output devices communicate through buses.
    </li>

    <li>
      The Fetch–Decode–Execute cycle is used to process instructions.
    </li>

    <li>
      The shared path between CPU and memory can create a performance
      limitation known as the Von Neumann bottleneck.
    </li>

  </ul>


  <div class="note-callout">
    <span class="note-callout-title">💡 In Simple Words</span>

    <p>
      In Von Neumann architecture, <strong>program instructions and data
      use the same memory</strong>. The CPU takes an instruction from
      memory, understands it, executes it, and then moves to the next one.
    </p>
  </div>


  <h2>Functional Units of a Computer System</h2>

  <p>
    A computer system can be understood through five important functional
    units:
  </p>

  <ol>

    <li><strong>Input Unit</strong></li>

    <li><strong>Memory Unit</strong></li>

    <li><strong>Arithmetic Logic Unit (ALU)</strong></li>

    <li><strong>Control Unit (CU)</strong></li>

    <li><strong>Output Unit</strong></li>

  </ol>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Functional Unit</th>
          <th>Main Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Input Unit</strong></td>
          <td>Accepts data and instructions from the user.</td>
        </tr>

        <tr>
          <td><strong>Memory Unit</strong></td>
          <td>Stores data, instructions, and results.</td>
        </tr>

        <tr>
          <td><strong>ALU</strong></td>
          <td>Performs arithmetic and logical operations.</td>
        </tr>

        <tr>
          <td><strong>Control Unit</strong></td>
          <td>Controls and coordinates all operations.</td>
        </tr>

        <tr>
          <td><strong>Output Unit</strong></td>
          <td>Presents processed information to the user.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>CPU Organization</h2>

  <p>
    CPU organization describes the internal structure of the processor
    and the way its different units work together.
  </p>

  <p>
    The main components of CPU organization include:
  </p>

  <ul>

    <li>
      <strong>Arithmetic Logic Unit (ALU)</strong>
    </li>

    <li>
      <strong>Control Unit (CU)</strong>
    </li>

    <li>
      <strong>Registers</strong>
    </li>

    <li>
      <strong>Cache Memory</strong>
    </li>

    <li>
      <strong>Internal data paths and buses</strong>
    </li>

  </ul>


  <div class="note-callout">
    <span class="note-callout-title">💡 In Simple Words</span>

    <p>
      The CPU is made of several internal parts. The
      <strong>ALU calculates</strong>, the <strong>Control Unit controls</strong>,
      and <strong>registers temporarily hold data and instructions</strong>.
    </p>
  </div>


  <h2>Arithmetic Logic Unit (ALU)</h2>

  <p>
    The Arithmetic Logic Unit is responsible for performing arithmetic
    and logical operations inside the CPU.
  </p>


  <h3>Arithmetic Operations</h3>

  <ul>

    <li>Addition</li>
    <li>Subtraction</li>
    <li>Multiplication</li>
    <li>Division</li>
    <li>Increment</li>
    <li>Decrement</li>

  </ul>


  <h3>Logical Operations</h3>

  <ul>

    <li>AND</li>
    <li>OR</li>
    <li>NOT</li>
    <li>XOR</li>
    <li>Comparison</li>
    <li>Shift and Rotate operations</li>

  </ul>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operation Type</th>
          <th>Examples</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Arithmetic</strong></td>
          <td>+, −, ×, ÷, Increment, Decrement</td>
        </tr>

        <tr>
          <td><strong>Logical</strong></td>
          <td>AND, OR, NOT, XOR</td>
        </tr>

        <tr>
          <td><strong>Comparison</strong></td>
          <td>Equal, Greater than, Less than</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Control Unit (CU)</h2>

  <p>
    The Control Unit manages and coordinates the activities of the
    computer system. It controls the flow of instructions and data
    between the CPU, memory, and input/output devices.
  </p>


  <h3>Main Functions of Control Unit</h3>

  <ol>

    <li>
      <strong>Fetch:</strong>
      Gets the required instruction from memory.
    </li>

    <li>
      <strong>Decode:</strong>
      Interprets the instruction and identifies the operation to perform.
    </li>

    <li>
      <strong>Execute:</strong>
      Sends appropriate control signals to the required units.
    </li>

  </ol>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      The Control Unit <strong>controls and coordinates</strong>
      operations. It does not perform arithmetic calculations itself.
    </p>

  </div>


  <h2>Registers and Their Types</h2>

  <p>
    Registers are small, high-speed storage locations inside the CPU.
    They temporarily hold data, instructions, addresses, and intermediate
    results during instruction execution.
  </p>


  <h3>Common Registers</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Register</th>
          <th>Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>PC — Program Counter</strong></td>
          <td>Stores the address of the next instruction.</td>
        </tr>

        <tr>
          <td><strong>IR — Instruction Register</strong></td>
          <td>Stores the current instruction.</td>
        </tr>

        <tr>
          <td><strong>ACC — Accumulator</strong></td>
          <td>Stores results produced by ALU operations.</td>
        </tr>

        <tr>
          <td><strong>MAR — Memory Address Register</strong></td>
          <td>Stores the memory address being accessed.</td>
        </tr>

        <tr>
          <td><strong>MDR — Memory Data Register</strong></td>
          <td>Stores data being transferred to or from memory.</td>
        </tr>

        <tr>
          <td><strong>Flag / PSW Register</strong></td>
          <td>Stores status information such as zero, carry, and sign flags.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Memory Organization</h2>

  <p>
    Memory organization explains how computer memory is arranged and
    accessed according to speed, capacity, and cost.
  </p>

  <p>
    The memory hierarchy generally moves from small and very fast storage
    close to the CPU toward larger and slower storage.
  </p>


  <div class="note-flow">

REGISTERS
   ↓
CACHE
   ↓
RAM
   ↓
SSD / HDD

Fast → Slow
Small → Large

  </div>


  <h2>Cache Memory</h2>

  <p>
    Cache memory is a small and fast memory placed between the CPU and
    main memory. It stores frequently used data and instructions so that
    the CPU can access them more quickly.
  </p>


  <h3>Levels of Cache</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Level</th>
          <th>Typical Characteristic</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>L1 Cache</strong></td>
          <td>Smallest and fastest cache, located very close to the CPU core.</td>
        </tr>

        <tr>
          <td><strong>L2 Cache</strong></td>
          <td>Larger than L1 but generally slower.</td>
        </tr>

        <tr>
          <td><strong>L3 Cache</strong></td>
          <td>Larger cache that may be shared between CPU cores.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Cache works like a <strong>small fast storage area</strong>.
      It keeps frequently needed information close to the CPU so that
      the CPU does not always have to access slower RAM.
    </p>

  </div>


  <h2>Input/Output Organization</h2>

  <p>
    Input/Output organization deals with communication between the CPU
    and peripheral devices such as keyboards, displays, printers,
    storage devices, and other external devices.
  </p>

  <p>
    The study material describes different ways of transferring information
    between the CPU and I/O devices.
  </p>


  <h3>Programmed I/O</h3>

  <p>
    In programmed I/O, the CPU checks the device and waits for it to
    become ready. This can keep the CPU busy while waiting.
  </p>


  <h3>Interrupt-Driven I/O</h3>

  <p>
    In interrupt-driven I/O, the device sends an interrupt signal to the
    CPU when it requires attention or is ready for data transfer.
  </p>


  <h3>DMA — Direct Memory Access</h3>

  <p>
    DMA allows data to be transferred directly between an I/O device
    and memory with reduced involvement of the CPU.
  </p>


  <h2>System Bus</h2>

  <p>
    A system bus provides communication between the CPU, memory,
    and input/output devices.
  </p>

  <p>
    The system bus has three main parts:
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Bus</th>
          <th>Direction</th>
          <th>Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Data Bus</strong></td>
          <td>Bidirectional</td>
          <td>Carries actual data between CPU, memory and I/O devices.</td>
        </tr>

        <tr>
          <td><strong>Address Bus</strong></td>
          <td>Unidirectional</td>
          <td>Carries memory or I/O addresses.</td>
        </tr>

        <tr>
          <td><strong>Control Bus</strong></td>
          <td>Bidirectional</td>
          <td>Carries control and timing signals.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Think of buses as <strong>communication roads</strong> inside
      the computer. Data, addresses, and control signals travel through
      these roads between different components.
    </p>

  </div>


  <h2>Fetch–Decode–Execute Cycle</h2>

  <p>
    The CPU processes an instruction through a basic cycle called the
    <strong>Fetch–Decode–Execute cycle</strong>.
  </p>


  <div class="note-image">

    <img
      src="images/Image4.png"
      alt="Fetch Decode Execute Store Cycle"
    >

  </div>


  <h3>1. Fetch</h3>

  <p>
    The CPU obtains the required instruction from memory. The Program
    Counter (PC) helps identify the address of the next instruction.
  </p>


  <h3>2. Decode</h3>

  <p>
    The Control Unit interprets the instruction and determines what
    operation needs to be performed.
  </p>


  <h3>3. Execute</h3>

  <p>
    The required operation is performed. For an arithmetic or logical
    operation, the ALU may perform the actual calculation.
  </p>


  <h3>4. Store</h3>

  <p>
    The result is written back to a register or memory as required.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>Fetch → Decode → Execute → Store</strong>
    </p>

  </div>


  <h2>Instruction Preprocessing</h2>

  <p>
    Instruction processing involves several steps. The CPU fetches an
    instruction, decodes the operation and operands, obtains the required
    data, performs the operation, and stores the result.
  </p>


  <h3>Instruction Format</h3>

  <div class="note-flow">
OPCODE + OPERANDS
  </div>

  <p>
    The <strong>opcode</strong> identifies the operation to be performed,
    while the operand fields identify the data or location involved in
    the operation.
  </p>


  <h3>Common Addressing Modes</h3>

  <ul>

    <li><strong>Immediate:</strong> The operand value is given directly.</li>

    <li><strong>Direct:</strong> The address of the operand is specified.</li>

    <li><strong>Indirect:</strong> The specified location contains the address of the operand.</li>

    <li><strong>Register:</strong> The operand is stored in a CPU register.</li>

  </ul>


  <h2>Memory Hierarchy</h2>

  <p>
    Memory hierarchy arranges different types of storage according to
    speed, capacity, and cost.
  </p>


  <div class="note-flow">

REGISTERS
   ↓
L1 CACHE
   ↓
L2 CACHE
   ↓
L3 CACHE
   ↓
RAM
   ↓
SSD
   ↓
HDD

Fastest → Slowest
Smallest → Largest

  </div>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Memory Level</th>
          <th>General Characteristic</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Registers</strong></td>
          <td>Very small and extremely fast storage inside the CPU.</td>
        </tr>

        <tr>
          <td><strong>Cache</strong></td>
          <td>Very fast memory used to reduce CPU memory-access time.</td>
        </tr>

        <tr>
          <td><strong>RAM</strong></td>
          <td>Main working memory used by active programs and data.</td>
        </tr>

        <tr>
          <td><strong>SSD</strong></td>
          <td>Fast, non-volatile secondary storage.</td>
        </tr>

        <tr>
          <td><strong>HDD</strong></td>
          <td>Large-capacity magnetic secondary storage.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Importance of Computer Architecture</h2>

  <ul>

    <li>
      Helps us understand how computer components work together.
    </li>

    <li>
      Explains how instructions are processed by the CPU.
    </li>

    <li>
      Helps understand the relationship between software and hardware.
    </li>

    <li>
      Provides the foundation for understanding CPU, memory, and I/O systems.
    </li>

    <li>
      Helps programmers understand how their programs are executed by hardware.
    </li>

  </ul>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Concept</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Architecture</strong></td>
          <td>Design and functional behavior of the computer system.</td>
        </tr>

        <tr>
          <td><strong>Von Neumann</strong></td>
          <td>Same memory stores both program instructions and data.</td>
        </tr>

        <tr>
          <td><strong>ALU</strong></td>
          <td>Performs arithmetic and logical operations.</td>
        </tr>

        <tr>
          <td><strong>CU</strong></td>
          <td>Controls and coordinates operations.</td>
        </tr>

        <tr>
          <td><strong>Registers</strong></td>
          <td>Very fast temporary storage inside CPU.</td>
        </tr>

        <tr>
          <td><strong>Data Bus</strong></td>
          <td>Carries data.</td>
        </tr>

        <tr>
          <td><strong>Address Bus</strong></td>
          <td>Carries addresses.</td>
        </tr>

        <tr>
          <td><strong>Control Bus</strong></td>
          <td>Carries control signals.</td>
        </tr>

        <tr>
          <td><strong>Instruction Cycle</strong></td>
          <td>Fetch → Decode → Execute → Store.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is computer architecture?</li>

    <li>What is the difference between architecture and organization?</li>

    <li>What is ISA?</li>

    <li>What is Von Neumann Architecture?</li>

    <li>Write the main functional units of a computer system.</li>

    <li>What is CPU organization?</li>

    <li>What is ALU?</li>

    <li>What is the function of the Control Unit?</li>

    <li>What are registers?</li>

    <li>What is cache memory?</li>

    <li>What is a system bus?</li>

    <li>Name the three types of system bus.</li>

    <li>What is DMA?</li>

    <li>What is the Fetch–Decode–Execute cycle?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain computer architecture and its major functions.
    </li>

    <li>
      Explain the difference between computer architecture and computer organization.
    </li>

    <li>
      Explain Von Neumann Architecture with a suitable diagram.
    </li>

    <li>
      Explain the functional units of a computer system.
    </li>

    <li>
      Explain CPU organization and the functions of ALU and Control Unit.
    </li>

    <li>
      Explain registers and their important types.
    </li>

    <li>
      Explain memory organization and cache memory.
    </li>

    <li>
      Explain the Data Bus, Address Bus, and Control Bus.
    </li>

    <li>
      Explain the Fetch–Decode–Execute cycle in detail.
    </li>

    <li>
      Explain the memory hierarchy of a computer system.
    </li>

  </ol>


  <!-- ========================================================
       RESOURCE SECTION
       ======================================================== -->

  <div class="resource-section">


    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch this BCA-focused explanation
        of computer architecture and its major concepts.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=mYUfX6svBu0"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Computer Architecture for BCA — Complete Syllabus & Easy Explanation
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering Computer
        Architecture, Von Neumann Architecture, CPU, buses and memory
        hierarchy will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of Computer Architecture,
        CPU, memory, buses and instruction processing.
      </p>

    </div>


  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 2
// ARCHITECTURE
// ============================================================

NOTES["m1-architecture"] = [
  `

  

  <p>
    Computer Architecture refers to the design, structure, and organization
    of a computer system and the way its major components work together
    to execute programs.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Computer Architecture is like the
      <strong>blueprint of a computer</strong>.
      It explains how the CPU, memory, input/output devices,
      and other components are organized and how they work together.
    </p>
  </div>


  <!-- Architecture Diagram -->

  <div class="note-image">

    <img
      src="images/Image3.png"
      alt="Computer Architecture"
    >

  </div>


  <h2>What is Computer Architecture?</h2>

  <p>
    Computer Architecture describes the design and functional behavior
    of a computer system. It explains how the processor, memory,
    input/output devices, instructions, and data are organized and
    how they interact while a program is executed.
  </p>

  <p>
    It provides the programmer's view of a computer system and includes
    concepts such as instruction sets, data formats, registers,
    addressing methods, memory organization, and input/output mechanisms.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Important Point
    </span>

    <p>
      <strong>
        Architecture tells us what the system does,
        while organization explains how the hardware implements it.
      </strong>
    </p>

  </div>


  <h2>Architecture vs Computer Organization</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Computer Architecture</th>
          <th>Computer Organization</th>
        </tr>

      </thead>

      <tbody>

        <tr>

          <td>
            Describes the functional behavior and
            programmer-visible design of a computer.
          </td>

          <td>
            Describes how the hardware components are
            connected and implemented.
          </td>

        </tr>

        <tr>

          <td>
            Concerned with <strong>what</strong> the system does.
          </td>

          <td>
            Concerned with <strong>how</strong> the system does it.
          </td>

        </tr>

        <tr>

          <td>
            Includes instruction set, data formats,
            registers and addressing modes.
          </td>

          <td>
            Includes hardware connections, buses,
            control signals and implementation.
          </td>

        </tr>

      </tbody>

    </table>

  </div>


  <h2>Instruction Set Architecture (ISA)</h2>

  <p>
    Instruction Set Architecture, commonly called
    <strong>ISA</strong>, defines the instructions and
    programmer-visible features that a processor supports.
  </p>

  <p>
    It describes the instruction set, registers, data formats,
    addressing methods, and other features that software uses
    when communicating with the processor.
  </p>

  <p>
    Examples of architectures include
    <strong>x86, ARM, MIPS, and RISC-V</strong>.
  </p>


  <h2>Von Neumann Architecture</h2>

  <p>
    Von Neumann Architecture is based on the
    <strong>stored-program concept</strong>. In this architecture,
    program instructions and data are stored in the same memory.
  </p>

  <p>
    The CPU fetches instructions from memory one by one,
    decodes them, and executes them.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      In Von Neumann Architecture, <strong>both instructions and data
      use the same memory</strong>. The CPU takes an instruction from
      memory, understands it, executes it, and then moves to the next
      instruction.
    </p>

  </div>


  <h3>Characteristics of Von Neumann Architecture</h3>

  <ul>

    <li>
      A single memory stores both program instructions and data.
    </li>

    <li>
      Instructions are executed sequentially.
    </li>

    <li>
      CPU, memory and input/output devices communicate through the
      system bus.
    </li>

    <li>
      The Fetch–Decode–Execute cycle is used to process instructions.
    </li>

    <li>
      The shared memory and bus can create the
      <strong>Von Neumann bottleneck</strong>.
    </li>

  </ul>


  <h2>Functional Units of a Computer System</h2>

  <p>
    A computer system can be understood through five important
    functional units:
  </p>

  <ol>

    <li><strong>Input Unit</strong></li>

    <li><strong>Memory Unit</strong></li>

    <li><strong>Arithmetic Logic Unit (ALU)</strong></li>

    <li><strong>Control Unit (CU)</strong></li>

    <li><strong>Output Unit</strong></li>

  </ol>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Functional Unit</th>
          <th>Main Function</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input Unit</strong></td>
          <td>Accepts data and instructions from the user.</td>
        </tr>

        <tr>
          <td><strong>Memory Unit</strong></td>
          <td>Stores data, instructions and results.</td>
        </tr>

        <tr>
          <td><strong>ALU</strong></td>
          <td>Performs arithmetic and logical operations.</td>
        </tr>

        <tr>
          <td><strong>Control Unit</strong></td>
          <td>Controls and coordinates computer operations.</td>
        </tr>

        <tr>
          <td><strong>Output Unit</strong></td>
          <td>Presents processed information to the user.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>CPU Organization</h2>

  <p>
    CPU organization describes the internal structure of the processor
    and how its different parts work together during instruction
    processing.
  </p>

  <p>
    The major parts of CPU organization include:
  </p>

  <ul>

    <li><strong>Arithmetic Logic Unit (ALU)</strong></li>

    <li><strong>Control Unit (CU)</strong></li>

    <li><strong>Registers</strong></li>

    <li><strong>Cache Memory</strong></li>

    <li><strong>Internal data paths and buses</strong></li>

  </ul>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Inside the CPU, the <strong>ALU performs calculations</strong>,
      the <strong>Control Unit controls the operations</strong>,
      and <strong>registers temporarily hold important data and
      instructions</strong>.
    </p>

  </div>


  <h2>Arithmetic Logic Unit (ALU)</h2>

  <p>
    The Arithmetic Logic Unit is the part of the CPU responsible
    for performing arithmetic and logical operations.
  </p>


  <h3>Arithmetic Operations</h3>

  <ul>

    <li>Addition</li>
    <li>Subtraction</li>
    <li>Multiplication</li>
    <li>Division</li>
    <li>Increment</li>
    <li>Decrement</li>

  </ul>


  <h3>Logical Operations</h3>

  <ul>

    <li>AND</li>
    <li>OR</li>
    <li>NOT</li>
    <li>XOR</li>
    <li>Comparison</li>
    <li>Shift and Rotate operations</li>

  </ul>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Operation Type</th>
          <th>Examples</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Arithmetic</strong></td>
          <td>+, −, ×, ÷, Increment, Decrement</td>
        </tr>

        <tr>
          <td><strong>Logical</strong></td>
          <td>AND, OR, NOT, XOR</td>
        </tr>

        <tr>
          <td><strong>Comparison</strong></td>
          <td>Equal, Greater than, Less than</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Control Unit (CU)</h2>

  <p>
    The Control Unit manages and coordinates the activities of the
    computer system. It directs the flow of data and instructions
    between the CPU, memory and input/output devices.
  </p>


  <h3>Functions of Control Unit</h3>

  <ol>

    <li>
      <strong>Fetch:</strong>
      Gets the required instruction from memory.
    </li>

    <li>
      <strong>Decode:</strong>
      Interprets the instruction and identifies the required operation.
    </li>

    <li>
      <strong>Execute:</strong>
      Sends appropriate control signals to the required units.
    </li>

  </ol>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      The Control Unit <strong>controls and coordinates</strong>
      the operations of the computer. It does not perform the
      actual arithmetic calculations.
    </p>

  </div>


  `,

  // ==========================================================
  // ARCHITECTURE — PAGE 2
  // ==========================================================

  `

  


  <h2>Registers and Their Types</h2>

  <p>
    Registers are small, high-speed storage locations inside the CPU.
    They temporarily hold data, instructions, addresses, and
    intermediate results during instruction execution.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Register</th>
          <th>Function</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>PC — Program Counter</strong></td>
          <td>Stores the address of the next instruction.</td>
        </tr>

        <tr>
          <td><strong>IR — Instruction Register</strong></td>
          <td>Stores the current instruction.</td>
        </tr>

        <tr>
          <td><strong>ACC — Accumulator</strong></td>
          <td>Stores results produced by ALU operations.</td>
        </tr>

        <tr>
          <td><strong>MAR — Memory Address Register</strong></td>
          <td>Stores the memory address being accessed.</td>
        </tr>

        <tr>
          <td><strong>MDR — Memory Data Register</strong></td>
          <td>Stores data being transferred to or from memory.</td>
        </tr>

        <tr>
          <td><strong>Flag / PSW</strong></td>
          <td>Stores status information such as zero, carry and sign.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Memory Organization</h2>

  <p>
    Memory organization explains how memory is structured and accessed
    according to speed, capacity and cost.
  </p>

  <p>
    Faster memory is generally smaller and placed closer to the CPU,
    while slower storage provides larger capacity.
  </p>


  <div class="note-flow">

REGISTERS
   ↓
CACHE
   ↓
RAM
   ↓
SSD / HDD

Fast → Slow
Small → Large

  </div>


  <h2>Cache Memory</h2>

  <p>
    Cache memory is a small and fast memory located between the CPU
    and main memory. It stores frequently used data and instructions
    so that the CPU can access them more quickly.
  </p>


  <h3>Cache Levels</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Level</th>
          <th>General Characteristic</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>L1 Cache</strong></td>
          <td>Smallest and fastest cache, very close to the CPU core.</td>
        </tr>

        <tr>
          <td><strong>L2 Cache</strong></td>
          <td>Larger than L1 and generally slower than L1.</td>
        </tr>

        <tr>
          <td><strong>L3 Cache</strong></td>
          <td>Larger cache that may be shared among CPU cores.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Cache is like a <strong>small fast storage area</strong>
      kept close to the CPU so frequently needed information can
      be accessed quickly.
    </p>

  </div>


  <h2>Input/Output Organization</h2>

  <p>
    Input/Output organization deals with communication between the CPU
    and peripheral devices such as keyboards, displays, printers,
    storage devices and other external devices.
  </p>


  <h3>Programmed I/O</h3>

  <p>
    In programmed I/O, the CPU checks the device and waits for it
    to become ready. This can keep the CPU busy while waiting.
  </p>


  <h3>Interrupt-Driven I/O</h3>

  <p>
    In interrupt-driven I/O, the device sends an interrupt signal
    to the CPU when it requires attention or is ready for transfer.
  </p>


  <h3>DMA — Direct Memory Access</h3>

  <p>
    DMA allows data to be transferred directly between an I/O device
    and memory with reduced involvement of the CPU.
  </p>


  <h2>System Bus</h2>

  <p>
    A system bus provides the communication path between the CPU,
    memory and input/output devices.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Bus</th>
          <th>Direction</th>
          <th>Function</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Data Bus</strong></td>
          <td>Bidirectional</td>
          <td>Carries actual data between components.</td>
        </tr>

        <tr>
          <td><strong>Address Bus</strong></td>
          <td>Unidirectional</td>
          <td>Carries memory or I/O addresses.</td>
        </tr>

        <tr>
          <td><strong>Control Bus</strong></td>
          <td>Bidirectional</td>
          <td>Carries control and timing signals.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      You can think of buses as <strong>communication roads</strong>
      inside the computer. They carry data, addresses and control
      signals between different components.
    </p>

  </div>


  <h2>Fetch–Decode–Execute Cycle</h2>

  <p>
    The CPU processes an instruction through a basic cycle called the
    <strong>Fetch–Decode–Execute cycle</strong>.
  </p>


  <div class="note-image">

    <img
      src="images/Image4.png"
      alt="Fetch Decode Execute Store Cycle"
    >

  </div>


  <h3>1. Fetch</h3>

  <p>
    The CPU obtains the required instruction from memory.
    The Program Counter helps identify the address of the next instruction.
  </p>


  <h3>2. Decode</h3>

  <p>
    The Control Unit interprets the instruction and determines
    what operation needs to be performed.
  </p>


  <h3>3. Execute</h3>

  <p>
    The required operation is performed. For arithmetic and logical
    operations, the ALU performs the required calculation.
  </p>


  <h3>4. Store</h3>

  <p>
    The result is written back to a register or memory as required.
  </p>


  <h2>Instruction Processing</h2>

  <p>
    Instruction processing involves fetching an instruction, decoding
    the operation and operands, obtaining required data, executing the
    operation and storing the result.
  </p>


  <h3>Instruction Format</h3>

  <div class="note-flow">

OPCODE + OPERANDS

  </div>


  <p>
    The <strong>opcode</strong> identifies the operation to be performed,
    while the operand identifies the data or location involved.
  </p>


  <h3>Common Addressing Modes</h3>

  <ul>

    <li>
      <strong>Immediate:</strong>
      The operand value is given directly.
    </li>

    <li>
      <strong>Direct:</strong>
      The address of the operand is specified directly.
    </li>

    <li>
      <strong>Indirect:</strong>
      The specified location contains the address of the operand.
    </li>

    <li>
      <strong>Register:</strong>
      The operand is stored in a CPU register.
    </li>

  </ul>


  <h2>Memory Hierarchy</h2>

  <p>
    Memory hierarchy arranges storage according to speed, size and cost.
    Faster memory is generally smaller and more expensive, while
    larger storage is slower and cheaper per unit of capacity.
  </p>


 <div class="note-image">
  <img
    src="images/Image5.png"
    alt="Computer Memory Hierarchy"
  >
</div>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Memory Level</th>
          <th>General Characteristic</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Registers</strong></td>
          <td>Very small and extremely fast storage inside the CPU.</td>
        </tr>

        <tr>
          <td><strong>Cache</strong></td>
          <td>Very fast memory that reduces CPU access time.</td>
        </tr>

        <tr>
          <td><strong>RAM</strong></td>
          <td>Main working memory for active programs and data.</td>
        </tr>

        <tr>
          <td><strong>SSD</strong></td>
          <td>Fast, non-volatile secondary storage.</td>
        </tr>

        <tr>
          <td><strong>HDD</strong></td>
          <td>Large-capacity magnetic secondary storage.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Concept</th>
          <th>Remember This</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Computer Architecture</strong></td>
          <td>Design and functional behavior of a computer system.</td>
        </tr>

        <tr>
          <td><strong>Von Neumann</strong></td>
          <td>Program instructions and data share the same memory.</td>
        </tr>

        <tr>
          <td><strong>ALU</strong></td>
          <td>Performs arithmetic and logical operations.</td>
        </tr>

        <tr>
          <td><strong>Control Unit</strong></td>
          <td>Controls and coordinates operations.</td>
        </tr>

        <tr>
          <td><strong>Registers</strong></td>
          <td>Very fast temporary storage inside CPU.</td>
        </tr>

        <tr>
          <td><strong>System Bus</strong></td>
          <td>Data Bus + Address Bus + Control Bus.</td>
        </tr>

        <tr>
          <td><strong>Instruction Cycle</strong></td>
          <td>Fetch → Decode → Execute → Store.</td>
        </tr>

        <tr>
          <td><strong>Memory Hierarchy</strong></td>
          <td>Registers → Cache → RAM → SSD/HDD.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>


  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is computer architecture?</li>

    <li>What is the difference between architecture and organization?</li>

    <li>What is ISA?</li>

    <li>What is Von Neumann Architecture?</li>

    <li>Write the five functional units of a computer system.</li>

    <li>What is CPU organization?</li>

    <li>What is ALU?</li>

    <li>What is the function of the Control Unit?</li>

    <li>What are registers?</li>

    <li>What is cache memory?</li>

    <li>What is a system bus?</li>

    <li>Name the three types of system bus.</li>

    <li>What is DMA?</li>

    <li>What is the Fetch–Decode–Execute cycle?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain computer architecture and its major features.
    </li>

    <li>
      Explain the difference between computer architecture and
      computer organization.
    </li>

    <li>
      Explain Von Neumann Architecture with a suitable diagram.
    </li>

    <li>
      Explain the functional units of a computer system.
    </li>

    <li>
      Explain CPU organization and the functions of ALU and Control Unit.
    </li>

    <li>
      Explain registers and their important types.
    </li>

    <li>
      Explain memory organization and cache memory.
    </li>

    <li>
      Explain Data Bus, Address Bus and Control Bus.
    </li>

    <li>
      Explain the Fetch–Decode–Execute cycle in detail.
    </li>

    <li>
      Explain memory hierarchy and its importance.
    </li>

  </ol>


  <!-- ========================================================
       RESOURCE SECTION
       ======================================================== -->

  <div class="resource-section">


    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch this easy Hindi explanation
        of a major Computer Architecture concept.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=q5C9-AzRZBU"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Von Neumann Architecture in Computer Architecture — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering Computer
        Architecture, Von Neumann Architecture, CPU, buses and memory
        hierarchy will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of Computer Architecture,
        CPU, memory, buses and instruction processing.
      </p>

    </div>


  </div>

  `
];

// ============================================================
// MODULE 1 — TOPIC 3
// DEFINITION OF SOFTWARE AND HARDWARE
// ============================================================

NOTES["m1-software-hardware"] = [
  `

  

  <p>
    A computer system is made up of two major parts:
    <strong>Hardware</strong> and <strong>Software</strong>.
    Both work together to make a computer system useful.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      <strong>Hardware</strong> is the part of a computer that we can
      see and touch, while <strong>software</strong> is the set of
      instructions that tells the hardware what to do.
    </p>
  </div>


  <h2>What is Hardware?</h2>

  <p>
    Hardware refers to all the <strong>physical and tangible components</strong>
    of a computer system. These are the parts that can be seen and touched.
  </p>

  <p>
    Hardware may contain electronic or mechanical components that work
    together to perform different computer operations.
  </p>

  <h3>Examples of Hardware</h3>

  <ul>

    <li>CPU</li>

    <li>RAM</li>

    <li>Hard Disk Drive (HDD)</li>

    <li>Solid State Drive (SSD)</li>

    <li>Monitor</li>

    <li>Keyboard</li>

    <li>Mouse</li>

    <li>Printer</li>

    <li>Speakers</li>

  </ul>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>Hardware = Physical parts of the computer.</strong>
    </p>

  </div>


  <h2>What is Software?</h2>

  <p>
    Software refers to the <strong>intangible instructions, programs,
    and related data</strong> that tell computer hardware what to do
    and how to perform a particular task.
  </p>

  <p>
    Unlike hardware, software cannot be physically touched. It is a
    logical part of a computer system that controls and uses the
    hardware resources.
  </p>


  <h3>Examples of Software</h3>

  <ul>

    <li>Windows</li>

    <li>Linux</li>

    <li>Android</li>

    <li>Microsoft Word</li>

    <li>Google Chrome</li>

    <li>Photoshop</li>

    <li>Tally</li>

  </ul>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>Software = Programs and instructions used by the computer.</strong>
    </p>

  </div>


  <h2>Difference Between Hardware and Software</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Aspect</th>
          <th>Hardware</th>
          <th>Software</th>
        </tr>

      </thead>

      <tbody>

        <tr>

          <td><strong>Nature</strong></td>

          <td>
            Physical and tangible
          </td>

          <td>
            Logical and intangible
          </td>

        </tr>

        <tr>

          <td><strong>Can it be touched?</strong></td>

          <td>
            Yes
          </td>

          <td>
            No
          </td>

        </tr>

        <tr>

          <td><strong>Function</strong></td>

          <td>
            Performs physical operations
          </td>

          <td>
            Provides instructions to perform operations
          </td>

        </tr>

        <tr>

          <td><strong>Failure</strong></td>

          <td>
            Can fail due to physical wear or damage
          </td>

          <td>
            Can fail due to bugs or corruption
          </td>

        </tr>

        <tr>

          <td><strong>Replacement</strong></td>

          <td>
            Physical replacement is required
          </td>

          <td>
            Usually reinstalled or updated
          </td>

        </tr>

        <tr>

          <td><strong>Examples</strong></td>

          <td>
            CPU, RAM, HDD, Monitor
          </td>

          <td>
            Windows, MS Word, Chrome
          </td>

        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 Easy Example
    </span>

    <p>
      Think of a <strong>music player</strong>.
      The physical player is hardware, while the program that controls
      how it plays music is software.
    </p>

  </div>


  <h2>Categories of Hardware Devices</h2>

  <p>
    Hardware devices can be grouped according to the work they perform.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Category</th>
          <th>Purpose</th>
          <th>Examples</th>
        </tr>

      </thead>

      <tbody>

        <tr>

          <td><strong>Input Devices</strong></td>

          <td>
            Used to enter data and instructions.
          </td>

          <td>
            Keyboard, Mouse, Scanner, Microphone
          </td>

        </tr>

        <tr>

          <td><strong>Output Devices</strong></td>

          <td>
            Used to present processed information.
          </td>

          <td>
            Monitor, Printer, Speakers
          </td>

        </tr>

        <tr>

          <td><strong>Processing Devices</strong></td>

          <td>
            Execute instructions and process data.
          </td>

          <td>
            CPU, GPU
          </td>

        </tr>

        <tr>

          <td><strong>Storage Devices</strong></td>

          <td>
            Store data and programs.
          </td>

          <td>
            HDD, SSD, Pen Drive
          </td>

        </tr>

        <tr>

          <td><strong>Communication Devices</strong></td>

          <td>
            Help computers communicate over networks.
          </td>

          <td>
            Network Interface, Modem, Router
          </td>

        </tr>

      </tbody>

    </table>

  </div>


  <h2>How Hardware and Software Work Together</h2>

  <p>
    Hardware and software are <strong>interdependent</strong>.
    Hardware provides the physical platform, while software provides
    the instructions that use and control that hardware.
  </p>

  <div class="note-flow">
USER
      ↓
SOFTWARE
      ↓
HARDWARE
      ↓
OUTPUT
  </div>


  <p>
    For example, when a user opens a word-processing application and
    types a document, the application software gives instructions to
    the operating system and hardware. The keyboard provides input,
    the CPU processes the instructions, and the monitor displays the result.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      <strong>Software instructs; hardware performs.</strong>
      Neither is useful to the user by itself.
    </p>

  </div>

  `,
  
  `

  <h1>Types of Software</h1>

  <p>
    Software can be grouped according to the type of work it performs
    and the way it supports the computer system.
  </p>


  <h2>1. System Software</h2>

  <p>
    System software manages computer hardware and provides the platform
    on which application software runs.
  </p>

  <p>
    It acts as an interface between the user, application programs,
    and computer hardware.
  </p>


  <h3>Examples of System Software</h3>

  <ul>

    <li><strong>Operating Systems:</strong> Windows, Linux, macOS, Android</li>

    <li><strong>Device Drivers:</strong> Control specific hardware devices such as printers.</li>

    <li><strong>Utilities:</strong> Antivirus, disk cleanup and backup tools.</li>

    <li><strong>Language Processors:</strong> Compiler, Interpreter and Assembler.</li>

  </ul>


  <h2>2. Application Software</h2>

  <p>
    Application software is designed to perform specific tasks for
    the user.
  </p>

  <p>
    It runs on top of system software and uses the services provided
    by the operating system.
  </p>


  <h3>Examples</h3>

  <ul>

    <li>Microsoft Word</li>

    <li>Google Chrome</li>

    <li>Adobe Photoshop</li>

    <li>Tally</li>

    <li>Games and multimedia applications</li>

  </ul>


  <h2>3. Utility Software</h2>

  <p>
    Utility software helps maintain, protect, and manage a computer system.
  </p>

  <ul>

    <li>Antivirus software</li>

    <li>Disk cleanup tools</li>

    <li>Backup software</li>

    <li>File compression tools</li>

  </ul>


  <h2>Firmware</h2>

  <p>
    Firmware is specialized software that is permanently programmed
    into hardware devices. It provides low-level control for
    device-specific functions and helps hardware start and operate.
  </p>

  <p>
    Examples include BIOS or UEFI in a motherboard and firmware used
    in devices such as routers, printers, storage devices, and GPUs.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Firmware is software that is closely connected to the hardware
      and helps control the basic functions of the device.
    </p>

  </div>


  <h2>Open Source Software</h2>

  <p>
    Open source software is software whose source code is made available
    so that it can be studied, modified, and distributed according to
    its license.
  </p>


  <h2>Proprietary Software</h2>

  <p>
    Proprietary software is software controlled by an individual,
    organization, or company. Its source code is generally not openly
    available for modification.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Type</th>
          <th>Main Purpose</th>
          <th>Examples</th>
        </tr>

      </thead>

      <tbody>

        <tr>

          <td><strong>System Software</strong></td>

          <td>
            Manages hardware and provides a platform for applications.
          </td>

          <td>
            Windows, Linux, Device Drivers
          </td>

        </tr>

        <tr>

          <td><strong>Application Software</strong></td>

          <td>
            Performs user-oriented tasks.
          </td>

          <td>
            MS Word, Chrome, Tally
          </td>

        </tr>

        <tr>

          <td><strong>Utility Software</strong></td>

          <td>
            Maintains, protects and manages the system.
          </td>

          <td>
            Antivirus, Backup, Disk Cleanup
          </td>

        </tr>

        <tr>

          <td><strong>Firmware</strong></td>

          <td>
            Provides low-level control of specific hardware.
          </td>

          <td>
            BIOS/UEFI, Router Firmware
          </td>

        </tr>

      </tbody>

    </table>

  </div>


  <h2>Relationship Between Hardware and Software</h2>

  <p>
    Hardware and software depend on each other.
    Hardware provides the physical resources, while software provides
    the instructions needed to use those resources.
  </p>

  <ul>

    <li>
      Software instructs the hardware.
    </li>

    <li>
      Hardware executes the instructions provided by software.
    </li>

    <li>
      The operating system manages hardware resources.
    </li>

    <li>
      Device drivers allow software to communicate with specific hardware.
    </li>

    <li>
      Applications use operating-system services to perform user tasks.
    </li>

  </ul>


  <h2>Real-World Example</h2>

  <p>
    Suppose a student opens a word processor and types an assignment.
    The keyboard is the hardware used for input. The word-processing
    application is software. The CPU processes the instructions,
    memory temporarily holds data, and the monitor displays the document.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Quick Revision
    </span>

    <p>
      <strong>Hardware = What we can touch.</strong><br>
      <strong>Software = What tells the hardware what to do.</strong>
    </p>

  </div>


  <h2>Important Exam Questions</h2>


  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is hardware?</li>

    <li>What is software?</li>

    <li>Write any five examples of hardware.</li>

    <li>Write any five examples of software.</li>

    <li>Differentiate between hardware and software.</li>

    <li>What is system software?</li>

    <li>What is application software?</li>

    <li>What is utility software?</li>

    <li>What is firmware?</li>

    <li>What is the difference between open source and proprietary software?</li>

    <li>Why are hardware and software interdependent?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define hardware and software and explain their differences with suitable examples.
    </li>

    <li>
      Explain the major categories of hardware devices.
    </li>

    <li>
      Explain system software, application software and utility software.
    </li>

    <li>
      What is firmware? Explain its role with suitable examples.
    </li>

    <li>
      Explain the relationship between hardware and software.
    </li>

    <li>
      Explain open source and proprietary software.
    </li>

  </ol>


  <!-- ========================================================
       RESOURCE SECTION
       ======================================================== -->

  <div class="resource-section">


    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch this BCA-level Hindi explanation
        of hardware and software.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=5fUIBQ6QE3w"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: What is Hardware and Software? — BCA Hindi Lecture
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering hardware,
        software, system software, application software and firmware
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of Hardware,
        Software and their relationship.
      </p>

    </div>


  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 4
// TYPES OF PROGRAMMING LANGUAGES
// ============================================================

NOTES["m1-programming-languages"] = [
  `

 

  <p>
    A programming language is a formal way of writing instructions
    that a computer can process to perform a particular task or solve
    a problem.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A programming language is a way for humans to
      <strong>give instructions to a computer</strong>.
      It provides rules, keywords, and syntax for writing programs.
    </p>

  </div>


  <h2>Why Do We Need Programming Languages?</h2>

  <p>
    Computers understand machine-level instructions, but writing large
    programs directly in binary form is difficult for humans.
    Programming languages provide a structured way to express logic
    and solve problems.
  </p>

  <ul>

    <li>
      Help programmers write instructions for computers.
    </li>

    <li>
      Make problem solving systematic.
    </li>

    <li>
      Allow developers to create software and applications.
    </li>

    <li>
      Help control computer hardware and automate tasks.
    </li>

  </ul>


  <h2>Major Types of Programming Languages</h2>

  <p>
    Programming languages can broadly be divided into
    <strong>Low-Level Languages</strong> and
    <strong>High-Level Languages</strong>.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Category</th>
          <th>Main Types</th>
          <th>Main Characteristic</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Low-Level Languages</strong></td>
          <td>Machine Language, Assembly Language</td>
          <td>
            Close to hardware and machine dependent.
          </td>
        </tr>

        <tr>
          <td><strong>High-Level Languages</strong></td>
          <td>C, C++, Java, Python, JavaScript</td>
          <td>
            Easier for humans to understand and more portable.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Machine Language</h2>

  <p>
    Machine Language is the <strong>lowest-level programming language</strong>.
    It consists of binary codes, mainly <strong>0s and 1s</strong>,
    that are directly understood and executed by the CPU.
  </p>

  <p>
    Each processor has its own instruction set, so machine language is
    hardware-dependent.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Machine language is the language that the
      <strong>CPU directly understands</strong>.
      It uses binary instructions such as:
    </p>

    <div class="note-flow">
10110000 01100001
00000100 00000010
    </div>

  </div>


  <h3>Characteristics of Machine Language</h3>

  <ul>

    <li>Uses binary digits (0 and 1).</li>

    <li>Directly executed by the CPU.</li>

    <li>Machine dependent.</li>

    <li>Not portable between different processor architectures.</li>

    <li>Very difficult to write and debug.</li>

    <li>Provides very fast execution.</li>

  </ul>


  <h3>Advantages</h3>

  <ul>

    <li>Fast execution.</li>

    <li>No translator is required before execution.</li>

    <li>Direct access to processor instructions.</li>

  </ul>


  <h3>Limitations</h3>

  <ul>

    <li>Difficult to understand.</li>

    <li>Difficult to write and maintain.</li>

    <li>Highly error-prone.</li>

    <li>Machine dependent.</li>

  </ul>


  <h2>2. Assembly Language</h2>

  <p>
    Assembly Language is a low-level language that uses
    <strong>mnemonics</strong> instead of binary codes.
    Common mnemonics include <strong>MOV, ADD, SUB, and JMP</strong>.
  </p>

  <p>
    An <strong>assembler</strong> converts assembly language instructions
    into machine code.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Assembly language represents machine instructions using
      short symbolic words instead of only 0s and 1s.
    </p>

  </div>


  <h3>Characteristics of Assembly Language</h3>

  <ul>

    <li>Uses mnemonics such as MOV, ADD and SUB.</li>

    <li>Uses symbolic addresses and labels.</li>

    <li>Usually has a close relationship with machine instructions.</li>

    <li>Hardware dependent.</li>

    <li>Requires an assembler for translation.</li>

    <li>Used in system-level and embedded programming.</li>

  </ul>


  <h3>Example</h3>

  <div class="note-flow">
MOV AX, 5
ADD AX, 3
  </div>


  <h2>3. High-Level Languages</h2>

  <p>
    High-Level Languages use syntax that is easier for humans to understand.
    They often use English-like keywords and mathematical notation.
  </p>

  <p>
    Examples include <strong>C, C++, Java, Python, and JavaScript</strong>.
    High-level programs are generally translated using a compiler or
    interpreter before or during execution.
  </p>


  <h3>Characteristics of High-Level Languages</h3>

  <ul>

    <li>Easier to learn and write.</li>

    <li>More readable than low-level languages.</li>

    <li>Generally more portable between systems.</li>

    <li>Easier debugging and maintenance.</li>

    <li>Support structured programming and higher-level abstractions.</li>

    <li>Require translation before the processor can execute them.</li>

  </ul>


  <h3>Example in C</h3>

  <div class="note-flow">
int sum = a + b;
printf("Sum = %d", sum);
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Important
    </span>

    <p>
      C is a <strong>high-level programming language</strong>,
      although it also provides low-level features that allow
      close interaction with system hardware.
    </p>

  </div>


  <h2>Low-Level vs High-Level Languages</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>Low-Level</th>
          <th>High-Level</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Abstraction</strong></td>
          <td>Minimal</td>
          <td>High</td>
        </tr>

        <tr>
          <td><strong>Portability</strong></td>
          <td>Low / No</td>
          <td>High</td>
        </tr>

        <tr>
          <td><strong>Speed</strong></td>
          <td>Very fast</td>
          <td>Generally slower due to translation</td>
        </tr>

        <tr>
          <td><strong>Ease of Use</strong></td>
          <td>Difficult</td>
          <td>Easier</td>
        </tr>

        <tr>
          <td><strong>Examples</strong></td>
          <td>Machine, Assembly</td>
          <td>C, Python, Java</td>
        </tr>

      </tbody>

    </table>

  </div>


  `,

  // ==========================================================
  // TYPES OF PROGRAMMING LANGUAGES — PAGE 2
  // ==========================================================

  `

  


  <h2>Generations of Programming Languages</h2>

  <p>
    Programming languages evolved through different generations.
    Each generation increased the level of abstraction and made
    programming easier and more productive.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Generation</th>
          <th>Type</th>
          <th>Example</th>
          <th>Main Feature</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>1GL</strong></td>
          <td>Machine Language</td>
          <td>Binary</td>
          <td>Directly understood by hardware</td>
        </tr>

        <tr>
          <td><strong>2GL</strong></td>
          <td>Assembly Language</td>
          <td>MOV, ADD</td>
          <td>Uses mnemonics</td>
        </tr>

        <tr>
          <td><strong>3GL</strong></td>
          <td>Procedural High-Level Language</td>
          <td>C, Fortran, Pascal</td>
          <td>Uses logic and control structures</td>
        </tr>

        <tr>
          <td><strong>4GL</strong></td>
          <td>Non-Procedural Language</td>
          <td>SQL, R</td>
          <td>Focuses more on what is required</td>
        </tr>

        <tr>
          <td><strong>5GL</strong></td>
          <td>AI-Based Language</td>
          <td>Prolog, Mercury</td>
          <td>Problem solving using higher-level approaches</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Way to Remember
    </span>

    <p>
      <strong>
        1GL → Machine
        &nbsp; | &nbsp;
        2GL → Assembly
        &nbsp; | &nbsp;
        3GL → Procedural
        &nbsp; | &nbsp;
        4GL → Non-Procedural
        &nbsp; | &nbsp;
        5GL → AI-Based
      </strong>
    </p>

  </div>


  <h2>Features of a Good Programming Language</h2>

  <p>
    A good programming language should make programs easy to write,
    understand, test, maintain and execute.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>Meaning</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Readability</strong></td>
          <td>Code should be easy to understand.</td>
        </tr>

        <tr>
          <td><strong>Writability</strong></td>
          <td>Programs should be easy to write.</td>
        </tr>

        <tr>
          <td><strong>Reliability</strong></td>
          <td>Programs should produce dependable results.</td>
        </tr>

        <tr>
          <td><strong>Portability</strong></td>
          <td>Programs should work on different platforms with minimal changes.</td>
        </tr>

        <tr>
          <td><strong>Efficiency</strong></td>
          <td>Programs should use time and memory effectively.</td>
        </tr>

        <tr>
          <td><strong>Abstraction</strong></td>
          <td>Complex implementation details can be hidden.</td>
        </tr>

        <tr>
          <td><strong>Modularity</strong></td>
          <td>Large programs can be divided into smaller modules or functions.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Applications of Programming Languages</h2>

  <p>
    Different programming languages are used for different types of
    applications.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Language</th>
          <th>Common Applications</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>C / C++</strong></td>
          <td>System software, operating systems, embedded systems and games.</td>
        </tr>

        <tr>
          <td><strong>Python</strong></td>
          <td>AI, machine learning, data science and automation.</td>
        </tr>

        <tr>
          <td><strong>Java</strong></td>
          <td>Enterprise applications, Android and banking systems.</td>
        </tr>

        <tr>
          <td><strong>JavaScript</strong></td>
          <td>Web development and interactive web applications.</td>
        </tr>

        <tr>
          <td><strong>SQL</strong></td>
          <td>Database management and data querying.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Type / Generation</th>
          <th>Remember This</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Machine Language</strong></td>
          <td>Binary, lowest level, directly understood by CPU.</td>
        </tr>

        <tr>
          <td><strong>Assembly Language</strong></td>
          <td>Uses mnemonics and requires an assembler.</td>
        </tr>

        <tr>
          <td><strong>High-Level Language</strong></td>
          <td>Human-friendly, portable and easier to maintain.</td>
        </tr>

        <tr>
          <td><strong>1GL</strong></td>
          <td>Machine Language.</td>
        </tr>

        <tr>
          <td><strong>2GL</strong></td>
          <td>Assembly Language.</td>
        </tr>

        <tr>
          <td><strong>3GL</strong></td>
          <td>Procedural languages such as C.</td>
        </tr>

        <tr>
          <td><strong>4GL</strong></td>
          <td>Non-procedural languages such as SQL.</td>
        </tr>

        <tr>
          <td><strong>5GL</strong></td>
          <td>AI-based languages such as Prolog.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Exam Tip
    </span>

    <p>
      Remember the basic hierarchy:
      <strong>
        Machine → Assembly → High-Level
      </strong>.
      As the level increases, programming generally becomes easier
      for humans and the abstraction level increases.
    </p>

  </div>


  <h2>Important Exam Questions</h2>


  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a programming language?</li>

    <li>What is machine language?</li>

    <li>What is assembly language?</li>

    <li>What is a high-level programming language?</li>

    <li>Write any four characteristics of a high-level language.</li>

    <li>What is a low-level language?</li>

    <li>What is meant by 1GL and 2GL?</li>

    <li>What is 3GL?</li>

    <li>What is 4GL?</li>

    <li>What is 5GL?</li>

    <li>Write any five features of a good programming language.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the major types of programming languages with suitable examples.
    </li>

    <li>
      Explain machine language and assembly language in detail.
    </li>

    <li>
      Explain high-level languages and their characteristics.
    </li>

    <li>
      Differentiate between low-level and high-level programming languages.
    </li>

    <li>
      Explain the five generations of programming languages.
    </li>

    <li>
      Explain the important features of a good programming language.
    </li>

    <li>
      Explain the applications of different programming languages.
    </li>

  </ol>


  <!-- ========================================================
       RESOURCE SECTION
       ======================================================== -->

  <div class="resource-section">


    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch this Hindi lecture covering
        machine, assembly, low-level and high-level programming languages.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=3nLUHFk2SN4"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: High Level & Low Level Languages — Hindi Lecture
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering machine language,
        assembly language, high-level languages and language generations
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of low-level and high-level
        languages and their generations.
      </p>

    </div>


  </div>

  `
];
// ============================================================
// END OF CURRENT NOTES
// ============================================================
//
// Next topic:
// "Components of a Computer System"
//
// Its notes will be added later without changing the
// navigation architecture.
// ============================================================