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


  

  

  
  
  

  

  


  <h2>Memoryyyyyy Organization</h2>

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
// MODULE 1 — TOPIC 5
// ASSEMBLER
// ============================================================

NOTES["m1-assembler"] = [
  `

  <h2>What is an Assembler?</h2>

  <p>
    An <strong>assembler</strong> is a language translator that converts
    a program written in <strong>assembly language</strong> into
    <strong>machine language</strong> or object code that the computer
    can use for execution.
  </p>

  <p>
    Assembly language uses symbolic instructions called
    <strong>mnemonics</strong>, such as <strong>MOV, ADD, SUB</strong>,
    instead of writing binary instructions directly.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      An assembler acts like a <strong>translator</strong>:
      it changes easy-to-read assembly instructions into
      machine-level instructions understood by the processor.
    </p>
  </div>


  <h2>Why is an Assembler Needed?</h2>

  <p>
    A computer processor directly executes machine-level instructions.
    Writing programs directly in binary is difficult for humans.
    Assembly language makes those instructions easier to write using
    symbolic names, and the assembler converts them into machine code.
  </p>

  <ul>

    <li>
      Makes low-level programming easier than writing binary code.
    </li>

    <li>
      Converts mnemonics into machine instructions.
    </li>

    <li>
      Handles symbols, labels and addresses.
    </li>

    <li>
      Produces object code for later linking and execution.
    </li>

  </ul>


  <h2>Input and Output of an Assembler</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>Assembly language source file, usually with an <code>.asm</code> extension.</td>
        </tr>

        <tr>
          <td><strong>Processing</strong></td>
          <td>Translates mnemonics, resolves symbols and addresses.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Object code, commonly stored in an <code>.obj</code> or <code>.o</code> file.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>How an Assembler Works</h2>

  <p>
    The assembler reads the assembly language program, identifies
    instructions and symbols, determines addresses, and produces
    machine or object code.
  </p>


  <div class="note-flow">
ASSEMBLY LANGUAGE
        ↓
     ASSEMBLER
        ↓
   OBJECT CODE
        ↓
      LINKER
        ↓
   EXECUTABLE
  </div>


  <h2>One-to-One Translation</h2>

  <p>
    Assembly language instructions generally have a
    <strong>one-to-one relationship</strong> with machine instructions.
    This means one assembly instruction corresponds closely to one
    machine instruction.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Assembly Instruction</th>
          <th>Machine Representation</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>MOV AX, 5</code></td>
          <td><code>B8 05 00</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">
    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      The assembler does not convert a whole high-level program like
      a compiler. Its main job is to translate
      <strong>assembly language into machine/object code</strong>.
    </p>
  </div>


  <h2>Two-Pass Assembler</h2>

  <p>
    A two-pass assembler processes the source program in
    <strong>two passes</strong>. This allows it to identify symbols
    and addresses before generating the final object code.
  </p>


  <div class="note-flow">
PASS 1
  ↓
Build Symbol Table
  ↓
PASS 2
  ↓
Generate Object Code
  </div>


  <h3>Pass 1 — Symbol Table Construction</h3>

  <p>
    In the first pass, the assembler scans the source program and
    identifies labels and symbols. It records their corresponding
    addresses in a <strong>symbol table</strong>.
  </p>

  <ul>

    <li>
      Reads the source program.
    </li>

    <li>
      Maintains addresses for instructions and data.
    </li>

    <li>
      Identifies labels and symbols.
    </li>

    <li>
      Builds the symbol table.
    </li>

  </ul>


  <h3>Pass 2 — Object Code Generation</h3>

  <p>
    In the second pass, the assembler uses the information collected
    during Pass 1 to generate the actual object or machine code.
  </p>

  <ul>

    <li>
      Reads the source program again.
    </li>

    <li>
      Replaces mnemonics with their machine opcodes.
    </li>

    <li>
      Resolves symbolic addresses.
    </li>

    <li>
      Generates object code.
    </li>

  </ul>


  <h2>Pass 1 vs Pass 2</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Pass 1</th>
          <th>Pass 2</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Scans the source program.</td>
          <td>Scans the source program again.</td>
        </tr>

        <tr>
          <td>Builds the symbol table.</td>
          <td>Generates object code.</td>
        </tr>

        <tr>
          <td>Assigns/records addresses.</td>
          <td>Resolves symbols and addresses.</td>
        </tr>

        <tr>
          <td>Prepares information required for code generation.</td>
          <td>Produces machine/object instructions.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Symbols and Labels</h2>

  <p>
    Assembly programs often use symbolic names, such as labels,
    instead of directly writing numeric memory addresses.
    The assembler keeps track of these names and their associated
    addresses.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A label is a <strong>name given to an instruction or memory
      location</strong>. The assembler later finds its actual address.
    </p>

  </div>


  <h2>Example of Assembly Code</h2>

  <div class="note-flow">
MOV AX, 5
ADD AX, 3
  </div>

  <p>
    The assembler translates these assembly instructions into their
    corresponding machine/object representation.
  </p>


  <h2>Examples of Assemblers</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Assembler</th>
          <th>Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>NASM</strong></td>
          <td>Assembler commonly used for x86 and x86-64 programming.</td>
        </tr>

        <tr>
          <td><strong>MASM</strong></td>
          <td>Microsoft Macro Assembler for x86-family assembly.</td>
        </tr>

        <tr>
          <td><strong>TASM</strong></td>
          <td>Borland Turbo Assembler.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Advantages of an Assembler</h2>

  <ul>

    <li>
      Provides a readable symbolic form of machine instructions.
    </li>

    <li>
      Allows close control over processor operations.
    </li>

    <li>
      Produces efficient low-level code.
    </li>

    <li>
      Useful for system programming and hardware-related programming.
    </li>

    <li>
      Allows use of labels and symbolic addresses.
    </li>

  </ul>


  <h2>Limitations of Assembly Language and Assembler-Based Programming</h2>

  <ul>

    <li>
      Assembly programs are harder to write than high-level programs.
    </li>

    <li>
      Assembly language is generally hardware dependent.
    </li>

    <li>
      Programs are less portable between processor architectures.
    </li>

    <li>
      Debugging and maintenance can be more difficult.
    </li>

  </ul>


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
          <td><strong>Assembler</strong></td>
          <td>Converts assembly language into machine/object code.</td>
        </tr>

        <tr>
          <td><strong>Input</strong></td>
          <td>Assembly source file, usually <code>.asm</code>.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Object code, usually <code>.obj</code> or <code>.o</code>.</td>
        </tr>

        <tr>
          <td><strong>Pass 1</strong></td>
          <td>Builds the symbol table and records addresses.</td>
        </tr>

        <tr>
          <td><strong>Pass 2</strong></td>
          <td>Generates object code and resolves symbols.</td>
        </tr>

        <tr>
          <td><strong>Translation</strong></td>
          <td>Assembly instruction → Machine/Object instruction.</td>
        </tr>

        <tr>
          <td><strong>Examples</strong></td>
          <td>NASM, MASM, TASM.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Revision Trick
    </span>

    <p>
      <strong>
        Pass 1 = Symbols & Addresses
        <br>
        Pass 2 = Machine/Object Code
      </strong>
    </p>

  </div>


  <h2>Important Exam Questions</h2>


  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an assembler?</li>

    <li>What is the main function of an assembler?</li>

    <li>What is the input of an assembler?</li>

    <li>What is the output of an assembler?</li>

    <li>What is a mnemonic in assembly language?</li>

    <li>What is a symbol or label?</li>

    <li>What is a two-pass assembler?</li>

    <li>What is performed during Pass 1?</li>

    <li>What is performed during Pass 2?</li>

    <li>What is a symbol table?</li>

    <li>Name any three assemblers.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define an assembler and explain its working.
    </li>

    <li>
      Explain the need for an assembler in computer programming.
    </li>

    <li>
      Explain the two-pass assembler with the functions of Pass 1 and Pass 2.
    </li>

    <li>
      Explain how symbols, labels and addresses are handled by an assembler.
    </li>

    <li>
      Differentiate between Pass 1 and Pass 2 of an assembler.
    </li>

    <li>
      Explain the input and output of an assembler with a suitable example.
    </li>

  </ol>


  <div class="resource-section">


    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch this Hindi explanation of the
        two-pass assembler and its working.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=oHczuY7dVIU"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: 2-Pass Assembler — Hindi Lecture
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering assembler,
        symbol tables, Pass 1 and Pass 2 will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of assembler working,
        two-pass processing, symbols and object-code generation.
      </p>

    </div>


  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 6
// COMPILER
// ============================================================

NOTES["m1-compiler"] = [
  `

  <h2>What is a Compiler?</h2>

  <p>
    A <strong>compiler</strong> is a language translator that converts
    a complete program written in a <strong>high-level programming language</strong>
    into machine code or executable code before the program is run.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A compiler takes the <strong>whole program</strong>,
      translates it, and prepares it for execution.
    </p>

  </div>


  <h2>Why is a Compiler Needed?</h2>

  <p>
    A computer's CPU executes machine-level instructions, while
    programmers usually write programs using high-level languages
    such as C. The compiler acts as a bridge between the two.
  </p>


  <div class="note-flow">

HIGH-LEVEL SOURCE PROGRAM
          ↓
       COMPILER
          ↓
    MACHINE / OBJECT CODE
          ↓
      EXECUTABLE PROGRAM

  </div>


  <h2>How a Compiler Works</h2>

  <p>
    A compiler processes the program and performs several stages before
    producing the final executable or object code.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Stage</th>
          <th>Main Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Preprocessing</strong></td>
          <td>Handles directives such as <code>#include</code> and <code>#define</code>.</td>
        </tr>

        <tr>
          <td><strong>Compilation</strong></td>
          <td>Translates source code into lower-level code such as assembly.</td>
        </tr>

        <tr>
          <td><strong>Assembly</strong></td>
          <td>Converts assembly code into object code.</td>
        </tr>

        <tr>
          <td><strong>Linking</strong></td>
          <td>Combines object code with required libraries to create the executable.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Features of a Compiler</h2>

  <ul>

    <li>
      Translates the <strong>whole program</strong> before execution.
    </li>

    <li>
      Checks syntax and other program-related errors during translation.
    </li>

    <li>
      Can optimize the generated code.
    </li>

    <li>
      Produces object or executable code.
    </li>

    <li>
      Once compiled, the executable can generally be run without
      recompiling the source each time, unless the source changes.
    </li>

  </ul>


  <h2>Example</h2>

  <div class="note-flow">
hello.c
  ↓
Preprocessing
  ↓
Compilation
  ↓
Assembly
  ↓
Object Code
  ↓
Linking
  ↓
Executable
  </div>


  <h2>Compiler Error Detection</h2>

  <p>
    During compilation, the compiler checks the program and reports
    errors that prevent successful translation. These may include
    syntax and semantic problems.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>Compiler = Translate the complete program first,
      then execute the generated program.</strong>
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>High-level source program</td>
        </tr>

        <tr>
          <td><strong>Translation</strong></td>
          <td>Whole program</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Object / executable code</td>
        </tr>

        <tr>
          <td><strong>Main Advantage</strong></td>
          <td>Fast execution after successful compilation</td>
        </tr>

        <tr>
          <td><strong>Example</strong></td>
          <td>GCC, Clang, MSVC</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a compiler?</li>

    <li>Why is a compiler needed?</li>

    <li>What is the input and output of a compiler?</li>

    <li>What is meant by compilation?</li>

    <li>Write the main phases of compilation.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define a compiler and explain its working.
    </li>

    <li>
      Explain the major phases of compilation.
    </li>

    <li>
      Explain the role of a compiler in converting a high-level program
      into executable code.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        After reading the topic, watch an easy explanation of compiler
        and the compilation process.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=compiler+in+C+programming+Hindi"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Compiler in C Programming — Hindi Explanation
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for Compiler
        and Compilation Process will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of Compiler,
        compilation phases and output.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 7
// INTERPRETER
// ============================================================

NOTES["m1-interpreter"] = [
  `

  <h2>What is an Interpreter?</h2>

  <p>
    An <strong>interpreter</strong> is a language translator that
    translates and executes a high-level program
    <strong>line by line</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      An interpreter reads one statement, translates it,
      executes it, and then moves to the next statement.
    </p>

  </div>


  <h2>How an Interpreter Works</h2>

  <div class="note-flow">
SOURCE PROGRAM
      ↓
  INTERPRETER
      ↓
READ ONE LINE
      ↓
TRANSLATE
      ↓
EXECUTE
      ↓
NEXT LINE
  </div>


  <h3>Example Process</h3>

  <ol>

    <li>Read the first statement.</li>

    <li>Translate the statement.</li>

    <li>Execute the statement.</li>

    <li>Move to the next statement.</li>

    <li>Continue until the program ends or an error occurs.</li>

  </ol>


  <h2>Important Characteristics</h2>

  <ul>

    <li>
      Translates and executes the program <strong>line by line</strong>.
    </li>

    <li>
      Generally does not create a separate executable file.
    </li>

    <li>
      If an error occurs, execution can stop at that point.
    </li>

    <li>
      Makes testing and debugging easier because errors can be identified
      during execution.
    </li>

    <li>
      Execution is generally slower than already compiled code.
    </li>

  </ul>


  <h2>Interpreter vs Compiler</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>Compiler</th>
          <th>Interpreter</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Translation</strong></td>
          <td>Whole program</td>
          <td>Line by line</td>
        </tr>

        <tr>
          <td><strong>Execution</strong></td>
          <td>After compilation</td>
          <td>During interpretation</td>
        </tr>

        <tr>
          <td><strong>Speed</strong></td>
          <td>Generally faster at runtime</td>
          <td>Generally slower</td>
        </tr>

        <tr>
          <td><strong>Error Handling</strong></td>
          <td>Reports errors during compilation</td>
          <td>Can stop when an error is encountered</td>
        </tr>

        <tr>
          <td><strong>Executable File</strong></td>
          <td>Generally produced</td>
          <td>Separate executable generally not produced</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>
        Compiler = Whole Program
        &nbsp;&nbsp;|&nbsp;&nbsp;
        Interpreter = Line by Line
      </strong>
    </p>

  </div>


  <h2>Examples</h2>

  <p>
    Interpreters are commonly associated with languages and environments
    such as <strong>Python, JavaScript, Ruby and PHP</strong>.
  </p>


  <h2>Advantages of an Interpreter</h2>

  <ul>

    <li>Easy to test and debug.</li>

    <li>Errors can be identified during execution.</li>

    <li>No separate executable file is generally required.</li>

  </ul>


  <h2>Limitations of an Interpreter</h2>

  <ul>

    <li>Generally slower execution than compiled code.</li>

    <li>The source program is interpreted during execution.</li>

  </ul>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>High-level source program</td>
        </tr>

        <tr>
          <td><strong>Method</strong></td>
          <td>Line-by-line translation and execution</td>
        </tr>

        <tr>
          <td><strong>Executable</strong></td>
          <td>Separate executable generally not produced</td>
        </tr>

        <tr>
          <td><strong>Error</strong></td>
          <td>Execution can stop when an error is encountered</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an interpreter?</li>

    <li>How does an interpreter work?</li>

    <li>What is line-by-line translation?</li>

    <li>Write any three characteristics of an interpreter.</li>

    <li>Give examples of languages commonly associated with interpreters.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define an interpreter and explain its working.
    </li>

    <li>
      Explain the characteristics, advantages and limitations of an interpreter.
    </li>

    <li>
      Differentiate between compiler and interpreter.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch an easy explanation of interpreter and its
        line-by-line execution process.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=interpreter+compiler+difference+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Compiler vs Interpreter — Hindi Explanation
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for Interpreter
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of interpreter
        working and compiler comparison.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 8
// LINKER
// ============================================================

NOTES["m1-linker"] = [
  `

  <h2>What is a Linker?</h2>

  <p>
    A <strong>linker</strong> is a system program that combines
    object files and required library files to create a
    <strong>single executable program</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      After a program is compiled and assembled, the linker
      <strong>joins the required pieces together</strong> and
      prepares the final executable program.
    </p>

  </div>


  <h2>Why is a Linker Needed?</h2>

  <p>
    A large program may be divided into multiple source files and may
    use functions from libraries. The linker combines these separate
    parts so that the complete program can be executed.
  </p>


  <div class="note-flow">
OBJECT FILES
      +
LIBRARY FILES
      ↓
    LINKER
      ↓
 EXECUTABLE FILE
  </div>


  <h2>Functions of a Linker</h2>

  <ul>

    <li>
      Combines multiple object files.
    </li>

    <li>
      Links required library files.
    </li>

    <li>
      Resolves references to functions and variables defined in
      other modules or libraries.
    </li>

    <li>
      Assigns or adjusts final memory addresses through relocation.
    </li>

    <li>
      Produces the final executable file.
    </li>

  </ul>


  <h2>Input and Output</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Item</th>
          <th>Description</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>Object files and required library files.</td>
        </tr>

        <tr>
          <td><strong>Processing</strong></td>
          <td>Combines modules and resolves external references.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>A single executable file.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Linking Process</h2>

  <div class="note-flow">
SOURCE CODE
      ↓
   COMPILER
      ↓
   ASSEMBLER
      ↓
  OBJECT FILES
      ↓
    LINKER
      +
  LIBRARIES
      ↓
 EXECUTABLE
  </div>


  <h2>Types of Linking</h2>

  <h3>1. Static Linking</h3>

  <p>
    In static linking, the required library code is included in the
    executable file during the linking process.
  </p>


  <h3>2. Dynamic Linking</h3>

  <p>
    In dynamic linking, some library code is linked at runtime using
    shared library files.
  </p>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Static Linking</th>
          <th>Dynamic Linking</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Library code is included in the executable.</td>
          <td>Shared library code is linked when required.</td>
        </tr>

        <tr>
          <td>Executable can be larger.</td>
          <td>Executable can be smaller.</td>
        </tr>

        <tr>
          <td>Less dependence on external libraries at runtime.</td>
          <td>Depends on required shared libraries being available.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Example</h2>

  <p>
    Suppose a C program uses a library function such as
    <code>printf()</code>. After compilation and assembly, the linker
    connects the required library information with the object code
    to create the final executable program.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>
        Linker = Combines object files + libraries → Executable
      </strong>
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>Object files + libraries</td>
        </tr>

        <tr>
          <td><strong>Main Job</strong></td>
          <td>Combines modules and resolves references</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Executable file</td>
        </tr>

        <tr>
          <td><strong>Types</strong></td>
          <td>Static linking and Dynamic linking</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a linker?</li>

    <li>Why is a linker needed?</li>

    <li>What are the inputs of a linker?</li>

    <li>What is the output of a linker?</li>

    <li>What is static linking?</li>

    <li>What is dynamic linking?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define a linker and explain its functions.
    </li>

    <li>
      Explain the linking process from object files to executable file.
    </li>

    <li>
      Differentiate between static linking and dynamic linking.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch an easy explanation of linker and the program
        translation process.
      </p>

      <p>

        <a
          href="https://youtube.com/shorts/WN_144noEmg?si=9LjJ3tmbR64K286x"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Linker in Compiler — Hindi Explanation
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for Linker
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of linker,
        object files, libraries and executable generation.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 9
// LOADER
// ============================================================

NOTES["m1-loader"] = [
  `

  <h2>What is a Loader?</h2>

  <p>
    A <strong>loader</strong> is a system program that loads an executable
    program from secondary storage into <strong>main memory (RAM)</strong>
    so that the CPU can execute it. It also prepares the required memory
    and addresses before execution begins.
  </p>


  <h2>Real World Example</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Real World Example
    </span>

    <p>
      Think about opening <strong>Microsoft Word</strong>.
      The program is stored on your computer's storage.
      When you click its icon, the operating system loads the required
      program into RAM so that the CPU can start running it.
    </p>

  </div>


  <h2>How Does a Loader Work?</h2>

  <div class="note-flow">
EXECUTABLE FILE
      ↓
    LOADER
      ↓
LOAD INTO RAM
      ↓
MEMORY SETUP
      ↓
CPU STARTS EXECUTION
  </div>


  <h3>Step 1 — Locate the Program</h3>

  <p>
    The loader finds the executable program stored on secondary storage
    such as an HDD or SSD.
  </p>


  <h3>Step 2 — Load into Main Memory</h3>

  <p>
    The executable program is copied from storage into the required
    locations in <strong>main memory (RAM)</strong>.
  </p>


  <h3>Step 3 — Memory and Address Setup</h3>

  <p>
    The loader prepares the memory layout and adjusts addresses when
    required so that the program can run correctly.
  </p>


  <h3>Step 4 — Transfer Control</h3>

  <p>
    After the program is ready in memory, control is transferred to
    the program's entry point and execution begins.
  </p>


  <h2>Main Functions of a Loader</h2>

  <ul>

    <li>
      Loads the executable program into main memory.
    </li>

    <li>
      Allocates the required memory.
    </li>

    <li>
      Performs address relocation when required.
    </li>

    <li>
      Helps prepare the runtime environment.
    </li>

    <li>
      Transfers control to the program's entry point.
    </li>

  </ul>


  <h2>Types of Loader</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Type</th>
          <th>Meaning</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Absolute Loader</strong></td>

          <td>
            Loads the program at a fixed memory address.
          </td>
        </tr>

        <tr>
          <td><strong>Relocating Loader</strong></td>

          <td>
            Can load the program at different memory locations
            by adjusting addresses.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Loader in Program Execution</h2>

  <div class="note-flow">
SOURCE PROGRAM
      ↓
   COMPILER
      ↓
  ASSEMBLER
      ↓
   LINKER
      ↓
 EXECUTABLE FILE
      ↓
    LOADER
      ↓
      RAM
      ↓
     CPU
      ↓
  PROGRAM EXECUTES
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>
<h2>What Happens When You Switch On a PC?</h2>

<p>
  The process of starting or resetting a computer is called
  <strong>Booting</strong>. It connects the initial hardware startup
  with loading the operating system into main memory so that the
  computer becomes ready for use.
</p>


<h3>1. Power On and Reset Vector</h3>

<p>
  When the power button is pressed, the power supply provides power
  to the motherboard. The CPU starts from a predefined location called
  the <strong>Reset Vector</strong>, which points to the system firmware
  such as <strong>BIOS or UEFI</strong>.
</p>


<h3>2. POST — Power-On Self-Test</h3>

<p>
  The BIOS or UEFI performs <strong>POST</strong> to check whether
  important hardware components are working properly.
</p>

<ul>

  <li><strong>RAM:</strong> Memory check</li>

  <li><strong>CPU:</strong> Basic processor operation</li>

  <li><strong>Graphics:</strong> Display initialization</li>

  <li><strong>Keyboard:</strong> Input-device check</li>

  <li><strong>Storage:</strong> Detection of available boot devices</li>

</ul>

<p>
  If a critical hardware problem is detected, the firmware may report
  the problem through error messages or diagnostic signals.
</p>


<h3>3. Locating a Bootable Device</h3>

<p>
  After POST, the firmware checks the configured
  <strong>boot order</strong> to find a bootable storage device such
  as an SSD, HDD, or USB drive.
</p>

<p>
  On traditional BIOS-based systems, boot information may involve the
  <strong>Master Boot Record (MBR)</strong>. Modern UEFI systems
  generally use the <strong>EFI System Partition (ESP)</strong>
  and a boot manager.
</p>


<h3>4. Loading the Bootloader</h3>

<p>
  The firmware starts the system's <strong>bootloader</strong>.
  Examples include <strong>Windows Boot Manager</strong> and
  <strong>GRUB</strong> for Linux systems.
</p>

<p>
  The bootloader prepares the next stage of the startup process
  and locates the operating system kernel.
</p>


<h3>5. Loading the Kernel</h3>

<p>
  The bootloader loads the <strong>OS Kernel</strong> into
  <strong>RAM</strong> and transfers control to it.
  The kernel then initializes the operating environment and starts
  the required system services and drivers.
</p>


<h3>6. Operating System Starts</h3>

<p>
  After the kernel and essential services are initialized,
  the operating system starts its user environment, such as a
  <strong>GUI or CLI</strong>, and the computer becomes ready for use.
</p>


<div class="note-flow">
POWER ON
   ↓
CPU RESET VECTOR
   ↓
BIOS / UEFI
   ↓
POST
   ↓
BOOTABLE DEVICE
   ↓
BOOTLOADER
   ↓
OS KERNEL
   ↓
OPERATING SYSTEM
   ↓
USER INTERFACE
</div>


<div class="note-callout">

  <span class="note-callout-title">
    💡 In Simple Words
  </span>

  <p>
    When you switch on a computer, the firmware first checks the hardware,
    finds a bootable device, starts the bootloader, and the bootloader
    loads the operating system kernel into RAM. The kernel then starts
    the operating system.
  </p>

</div>


<h2>Loader vs Bootloader</h2>

<div class="note-table-wrap">

  <table class="note-table">

    <thead>

      <tr>
        <th>Loader</th>
        <th>Bootloader</th>
      </tr>

    </thead>

    <tbody>

      <tr>

        <td>
          Loads an executable program into main memory for execution.
        </td>

        <td>
          Starts the operating system boot process and loads the OS kernel.
        </td>

      </tr>

      <tr>

        <td>
          Usually works with normal executable programs.
        </td>

        <td>
          Works during system startup.
        </td>

      </tr>

      <tr>

        <td>
          Prepares a program for CPU execution.
        </td>

        <td>
          Prepares and transfers control to the operating system.
        </td>

      </tr>

    </tbody>

  </table>

</div>


<div class="note-callout">

  <span class="note-callout-title">
    📌 Remember
  </span>

  <p>
    <strong>
      Loader → Loads a program into RAM
      <br>
      Bootloader → Loads/starts the operating system
    </strong>
  </p>

</div>
    <p>
      The <strong>linker creates the executable</strong>,
      while the <strong>loader puts that executable into RAM</strong>
      so the CPU can run it.
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>Executable file</td>
        </tr>

        <tr>
          <td><strong>Main Job</strong></td>
          <td>Load program into RAM for execution</td>
        </tr>

        <tr>
          <td><strong>Memory</strong></td>
          <td>Main Memory / RAM</td>
        </tr>

        <tr>
          <td><strong>Types</strong></td>
          <td>Absolute Loader, Relocating Loader</td>
        </tr>

        <tr>
          <td><strong>Final Action</strong></td>
          <td>Transfers control to the program</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a loader?</li>

    <li>What is the main function of a loader?</li>

    <li>Where does the loader load an executable program?</li>

    <li>What is an absolute loader?</li>

    <li>What is a relocating loader?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define a loader and explain its working.
    </li>

    <li>
      Explain the main functions of a loader.
    </li>

    <li>
      Explain the different types of loader.
    </li>

    <li>
      Explain the role of a loader in program execution.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a simple Hindi explanation of loader and the
        program execution process.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=loader+in+operating+system+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Loader in Operating System — Hindi Explanation
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for Loader
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of loader,
        memory loading and program execution.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 10
// ALGORITHM — DEFINITION
// ============================================================

NOTES["m1-algorithm-definition"] = [
  `

  <h2>What is an Algorithm?</h2>

  <p>
    An <strong>algorithm</strong> is a finite sequence of well-defined
    and unambiguous steps used to solve a problem or perform a task.
    It takes input, processes it step-by-step, and produces the required
    output.
  </p>


  <h2>Real-World Example</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Real World Example
    </span>

    <p>
      A <strong>recipe for making tea</strong> is similar to an algorithm.
      It gives instructions in a particular order, such as boiling water,
      adding tea leaves, adding milk and sugar, and finally serving the tea.
    </p>

  </div>


  <h2>Algorithm in Computer Problem Solving</h2>

  <p>
    Before writing a program, a programmer can first design an algorithm
    to describe the solution logically. The algorithm can then be converted
    into a program using a programming language such as C.
  </p>


  <div class="note-flow">
PROBLEM
   ↓
ALGORITHM
   ↓
PROGRAM
   ↓
OUTPUT
  </div>


  <h2>Example: Algorithm to Add Two Numbers</h2>

  <ol>

    <li><strong>Start</strong></li>

    <li>
      Input two numbers <strong>A</strong> and <strong>B</strong>.
    </li>

    <li>
      Calculate <strong>Sum = A + B</strong>.
    </li>

    <li>
      Display the value of <strong>Sum</strong>.
    </li>

    <li><strong>Stop</strong></li>

  </ol>


  <h3>Example in Simple Form</h3>

  <div class="note-flow">
START
  ↓
INPUT A, B
  ↓
SUM = A + B
  ↓
PRINT SUM
  ↓
STOP
  </div>


  <h2>Important Points About an Algorithm</h2>

  <ul>

    <li>
      It provides a <strong>step-by-step solution</strong>.
    </li>

    <li>
      Each step should be clear and understandable.
    </li>

    <li>
      The steps should eventually terminate.
    </li>

    <li>
      An algorithm is <strong>independent of a particular programming language</strong>.
    </li>

    <li>
      It can be represented using natural language, pseudocode,
      or a flowchart.
    </li>

  </ul>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      An algorithm is simply a
      <strong>step-by-step plan for solving a problem</strong>.
      First we decide the logic, and then we write the program.
    </p>

  </div>


  <h2>Algorithm vs Program</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Algorithm</th>
          <th>Program</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>A logical step-by-step solution.</td>
          <td>The solution written using a programming language.</td>
        </tr>

        <tr>
          <td>Language independent.</td>
          <td>Written in a specific programming language.</td>
        </tr>

        <tr>
          <td>Focuses on logic.</td>
          <td>Focuses on implementing the logic.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Meaning</strong></td>
          <td>Step-by-step procedure to solve a problem.</td>
        </tr>

        <tr>
          <td><strong>Nature</strong></td>
          <td>Logical and language independent.</td>
        </tr>

        <tr>
          <td><strong>Input</strong></td>
          <td>Data required to solve the problem.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Required result of the problem.</td>
        </tr>

        <tr>
          <td><strong>Representation</strong></td>
          <td>Natural language, pseudocode or flowchart.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an algorithm?</li>

    <li>Why is an algorithm used in problem solving?</li>

    <li>Write the important features of an algorithm.</li>

    <li>Is an algorithm dependent on a programming language?</li>

    <li>Write an algorithm to add two numbers.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define an algorithm and explain its role in computer problem solving.
    </li>

    <li>
      Write and explain an algorithm to add two numbers.
    </li>

    <li>
      Differentiate between an algorithm and a program.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a simple Hindi explanation of algorithms and
        basic problem solving.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=algorithm+definition+in+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Algorithm Definition & Examples — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for Algorithm
        Definition will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of algorithm,
        input, processing and output.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 11
// ALGORITHM — CHARACTERISTICS
// ============================================================

NOTES["m1-algorithm-characteristics"] = [
  `

  <h2>Characteristics of an Algorithm</h2>

  <p>
    A good algorithm must follow certain basic rules so that it can
    correctly and clearly solve a problem. The five essential
    characteristics are <strong>Input, Output, Definiteness,
    Finiteness, and Effectiveness</strong>.
  </p>


  <h2>Five Essential Characteristics</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Characteristic</th>
          <th>Meaning</th>
          <th>Simple Example</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>

          <td>
            An algorithm may take zero or more input values.
          </td>

          <td>
            Enter two numbers A and B.
          </td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>

          <td>
            An algorithm should produce at least one required result.
          </td>

          <td>
            Display the sum of A and B.
          </td>
        </tr>

        <tr>
          <td><strong>Definiteness</strong></td>

          <td>
            Every step must be clear, precise, and unambiguous.
          </td>

          <td>
            "Add A and B" is clear.
          </td>
        </tr>

        <tr>
          <td><strong>Finiteness</strong></td>

          <td>
            The algorithm must finish after a finite number of steps.
          </td>

          <td>
            Stop after producing the required result.
          </td>
        </tr>

        <tr>
          <td><strong>Effectiveness</strong></td>

          <td>
            Every step should be simple, practical, and possible to perform.
          </td>

          <td>
            "Add 5 to X" is an executable step.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Input</h2>

  <p>
    <strong>Input</strong> is the data given to an algorithm before
    processing starts. An algorithm may take zero or more input values,
    depending on the problem.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      To calculate the sum of two numbers, the inputs can be
      <strong>A = 5</strong> and <strong>B = 7</strong>.
    </p>

  </div>


  <h2>2. Output</h2>

  <p>
    <strong>Output</strong> is the result produced after processing
    the input. An algorithm should produce at least one required output.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      For A = 5 and B = 7, the output is
      <strong>12</strong>.
    </p>

  </div>


  <h2>3. Definiteness</h2>

  <p>
    <strong>Definiteness</strong> means that every step of an algorithm
    must be clearly defined. There should be no confusion about what
    a particular step means.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <strong>Clear:</strong> Add 5 to X.<br>
      <strong>Unclear:</strong> Do something with X.
    </p>

  </div>


  <h2>4. Finiteness</h2>

  <p>
    <strong>Finiteness</strong> means that an algorithm must terminate
    after a finite number of steps. It should not continue forever.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      An algorithm for finding the sum of two numbers should calculate
      the result and stop. It should not continue indefinitely.
    </p>

  </div>


  <h2>5. Effectiveness</h2>

  <p>
    <strong>Effectiveness</strong> means that every step of an algorithm
    must be basic enough to be performed practically and should lead
    toward solving the problem.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <strong>Effective:</strong> Add 5 to X.<br>
      <strong>Not Effective:</strong> Divide X by infinity.
    </p>

  </div>


  <h2>Example Showing All Characteristics</h2>

  <p>
    Consider an algorithm to calculate the sum of two numbers:
  </p>

  <div class="note-image">
  <img
    src="images/Image7.1.png"
    alt="Algorithm to Add Two Numbers"
  >
</div>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Characteristic</th>
          <th>In This Algorithm</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>A and B are entered.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>SUM is displayed.</td>
        </tr>

        <tr>
          <td><strong>Definiteness</strong></td>
          <td>Each instruction is clear.</td>
        </tr>

        <tr>
          <td><strong>Finiteness</strong></td>
          <td>The algorithm ends at STOP.</td>
        </tr>

        <tr>
          <td><strong>Effectiveness</strong></td>
          <td>Each operation can actually be performed.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Revision Trick
    </span>

    <p>
      Remember the five characteristics as:
      <strong>IODFE</strong>
    </p>

    <p>
      <strong>
        I → Input
        &nbsp; O → Output
        &nbsp; D → Definiteness
        &nbsp; F → Finiteness
        &nbsp; E → Effectiveness
      </strong>
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Term</th>
          <th>One-Line Meaning</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Input</strong></td>
          <td>Data given to the algorithm.</td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>Result produced by the algorithm.</td>
        </tr>

        <tr>
          <td><strong>Definiteness</strong></td>
          <td>Every step must be clear and unambiguous.</td>
        </tr>

        <tr>
          <td><strong>Finiteness</strong></td>
          <td>Algorithm must terminate after finite steps.</td>
        </tr>

        <tr>
          <td><strong>Effectiveness</strong></td>
          <td>Every step must be practical and executable.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What are the characteristics of an algorithm?</li>

    <li>What is meant by input and output in an algorithm?</li>

    <li>What is definiteness?</li>

    <li>What is finiteness?</li>

    <li>What is effectiveness?</li>

    <li>Why should an algorithm be finite?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the five essential characteristics of an algorithm.
    </li>

    <li>
      Explain Input, Output, Definiteness, Finiteness and Effectiveness
      with suitable examples.
    </li>

    <li>
      Write an algorithm to add two numbers and explain how it satisfies
      the characteristics of an algorithm.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a simple explanation of the characteristics of an algorithm
        with examples.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=characteristics+of+algorithm+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Characteristics of Algorithm — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering the five
        characteristics of an algorithm will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of Input, Output,
        Definiteness, Finiteness and Effectiveness.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 12
// COMPLEXITY NOTATIONS
// ============================================================

NOTES["m1-complexity-notations"] = [
  `

  <h2>What is Complexity Analysis?</h2>

  <p>
    <strong>Complexity analysis</strong> is used to measure how much
    time and memory an algorithm requires as the size of its input
    increases. It helps us compare algorithms and understand their
    efficiency.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Complexity tells us how an algorithm's
      <strong>work and memory requirement grow</strong>
      when the amount of data becomes larger.
    </p>

  </div>


  <h2>Why Do We Need Complexity?</h2>

  <ul>

    <li>
      To compare different algorithms.
    </li>

    <li>
      To understand how an algorithm behaves for large input.
    </li>

    <li>
      To choose a more efficient solution.
    </li>

    <li>
      To study time and memory requirements.
    </li>

  </ul>


  <h2>Types of Complexity</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Type</th>
          <th>Measures</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Time Complexity</strong></td>

          <td>
            How the number of operations grows with input size.
          </td>
        </tr>

        <tr>
          <td><strong>Space Complexity</strong></td>

          <td>
            How the memory requirement grows with input size.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Time Complexity</h2>

  <p>
    <strong>Time complexity</strong> describes how the number of
    operations performed by an algorithm grows as the input size
    <strong>n</strong> increases.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Important
    </span>

    <p>
      Time complexity usually talks about the
      <strong>number of steps or operations</strong>,
      not the actual time in seconds.
    </p>

  </div>


  <h3>Example</h3>

  <div class="note-flow">
FOR i = 1 TO n
      ↓
Perform one operation
      ↓
Total operations ≈ n
      ↓
Time Complexity = O(n)
  </div>


  <h2>Space Complexity</h2>

  <p>
    <strong>Space complexity</strong> describes how much memory an
    algorithm requires as the input size increases. It includes the
    memory needed for the input and the extra memory used by the algorithm.
  </p>


  <h3>Example</h3>

  <p>
    If an algorithm uses only a fixed number of extra variables,
    its extra space remains constant even when <strong>n</strong>
    becomes larger.
  </p>

  <div class="note-flow">
Fixed Extra Memory
      ↓
Does not grow with n
      ↓
Space Complexity = O(1)
  </div>


  <h2>Asymptotic Analysis</h2>

  <p>
    <strong>Asymptotic analysis</strong> studies the growth of an
    algorithm for very large input sizes. It focuses on the growth rate
    and normally ignores constants and lower-order terms.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <strong>3n</strong> and <strong>5n</strong> both have linear growth,
      so both are represented as <strong>O(n)</strong>.
    </p>

  </div>


  <h2>Common Growth Rates</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Notation</th>
          <th>Name</th>
          <th>Example</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>O(1)</strong></td>
          <td>Constant</td>
          <td>Accessing an array element</td>
        </tr>

        <tr>
          <td><strong>O(log n)</strong></td>
          <td>Logarithmic</td>
          <td>Binary search</td>
        </tr>

        <tr>
          <td><strong>O(n)</strong></td>
          <td>Linear</td>
          <td>Linear search</td>
        </tr>

        <tr>
          <td><strong>O(n log n)</strong></td>
          <td>Linearithmic</td>
          <td>Merge sort</td>
        </tr>

        <tr>
          <td><strong>O(n²)</strong></td>
          <td>Quadratic</td>
          <td>Bubble sort</td>
        </tr>

        <tr>
          <td><strong>O(2ⁿ)</strong></td>
          <td>Exponential</td>
          <td>Some subset-generation problems</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Big-O Notation — O(g(n))</h2>

  <p>
    <strong>Big-O notation</strong> represents an asymptotic
    <strong>upper bound</strong> on an algorithm's growth.
    It is commonly used to describe worst-case time complexity.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Big-O tells us how much an algorithm can grow at most,
      especially in the <strong>worst case</strong>.
    </p>

  </div>


  <h3>Example</h3>

  <div class="note-flow">
for i = 0 to n
      ↓
Runs about n times
      ↓
O(n)
  </div>


  <h2>Big-Ω (Omega) Notation — Ω(g(n))</h2>

  <p>
    <strong>Omega notation</strong> represents an asymptotic
    <strong>lower bound</strong>. It describes the minimum amount of
    growth or work required by an algorithm.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Omega tells us the <strong>minimum growth</strong> of an algorithm.
      It is commonly associated with the best-case situation.
    </p>

  </div>


  <h3>Example</h3>

  <p>
    In a linear search, if the required element is found at the
    first position, only one comparison may be required.
  </p>

  <div class="note-flow">
Best Case
   ↓
Minimum Work
   ↓
Ω(1)
  </div>


  <h2>Big-Θ (Theta) Notation — Θ(g(n))</h2>

  <p>
    <strong>Theta notation</strong> represents a
    <strong>tight asymptotic bound</strong>. It is used when the
    upper and lower bounds have the same growth rate.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Theta tells us the <strong>exact growth order</strong> of an
      algorithm within constant factors when the upper and lower
      bounds match.
    </p>

  </div>


  <h3>Example</h3>

  <div class="note-flow">
n Operations in Best Case
          ↓
n Operations in Worst Case
          ↓
Θ(n)
  </div>


  <h2>Big-O, Big-Ω and Big-Θ</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Notation</th>
          <th>Meaning</th>
          <th>Simple Idea</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>O(g(n))</strong></td>
          <td>Upper bound</td>
          <td>Maximum / worst-case growth</td>
        </tr>

        <tr>
          <td><strong>Ω(g(n))</strong></td>
          <td>Lower bound</td>
          <td>Minimum / best-case growth</td>
        </tr>

        <tr>
          <td><strong>Θ(g(n))</strong></td>
          <td>Tight bound</td>
          <td>Matching upper and lower growth</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Comparison of Growth Rates</h2>

  <div class="note-flow">
O(1)
  ↓
O(log n)
  ↓
O(n)
  ↓
O(n log n)
  ↓
O(n²)
  ↓
O(2ⁿ)
  </div>

  <p>
    In general, a slower-growing complexity is preferred when working
    with large input sizes.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Quick Memory Trick
    </span>

    <p>
      <strong>
        O → Upper Bound
        &nbsp;&nbsp; | &nbsp;&nbsp;
        Ω → Lower Bound
        &nbsp;&nbsp; | &nbsp;&nbsp;
        Θ → Tight Bound
      </strong>
    </p>

  </div>


  <h2>Simple Example: Finding a Number</h2>

  <p>
    Suppose we search for a number in an unsorted array containing
    <strong>n</strong> elements.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Case</th>
          <th>Situation</th>
          <th>Complexity</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Best Case</strong></td>
          <td>Element is found at the first position.</td>
          <td>Ω(1)</td>
        </tr>

        <tr>
          <td><strong>Worst Case</strong></td>
          <td>Element is at the last position or absent.</td>
          <td>O(n)</td>
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
          <th>Remember</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Time Complexity</strong></td>
          <td>Growth in number of operations.</td>
        </tr>

        <tr>
          <td><strong>Space Complexity</strong></td>
          <td>Growth in memory requirement.</td>
        </tr>

        <tr>
          <td><strong>Big-O</strong></td>
          <td>Upper bound / commonly used for worst case.</td>
        </tr>

        <tr>
          <td><strong>Big-Ω</strong></td>
          <td>Lower bound / commonly associated with best case.</td>
        </tr>

        <tr>
          <td><strong>Big-Θ</strong></td>
          <td>Tight bound.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is complexity analysis?</li>

    <li>What is time complexity?</li>

    <li>What is space complexity?</li>

    <li>What is asymptotic analysis?</li>

    <li>What is Big-O notation?</li>

    <li>What is Big-Ω notation?</li>

    <li>What is Big-Θ notation?</li>

    <li>Write the common growth rates of algorithms.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain time complexity and space complexity with suitable examples.
    </li>

    <li>
      Explain Big-O, Big-Ω and Big-Θ notations.
    </li>

    <li>
      Explain asymptotic analysis and its importance in algorithm analysis.
    </li>

    <li>
      Explain different common growth rates with examples.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of time complexity,
        space complexity and Big-O notation.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=time+complexity+Big+O+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Time Complexity & Big-O — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for complexity
        notations will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of time complexity,
        space complexity and asymptotic notations.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 13
// FLOWCHART — DEFINITION
// ============================================================

NOTES["m1-flowchart-definition"] = [
  `

  <h2>What is a Flowchart?</h2>

  <p>
    A <strong>flowchart</strong> is a graphical representation of an
    algorithm or process. It uses standard symbols and arrows to show
    the sequence of steps used to solve a problem.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A flowchart shows the <strong>steps of a solution visually</strong>
      so that the logic of a problem is easier to understand.
    </p>

  </div>


  <h2>Real-World Example</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Real World Example
    </span>

    <p>
      Think about the process of getting ready for college:
      wake up → get ready → have breakfast → go to college.
      When these steps are shown using symbols and arrows,
      they form a simple flowchart.
    </p>

  </div>


  <h2>Why is a Flowchart Used?</h2>

  <ul>

    <li>
      Makes the logic of a problem easier to understand.
    </li>

    <li>
      Shows the sequence of steps clearly.
    </li>

    <li>
      Helps in planning a program before coding.
    </li>

    <li>
      Makes errors or missing steps easier to identify.
    </li>

    <li>
      Helps explain a solution to others.
    </li>

  </ul>


  <h2>Flowchart in Problem Solving</h2>

  <p>
    A programmer can first develop an algorithm and then represent
    the same logic graphically using a flowchart.
  </p>

  <div class="note-flow">
PROBLEM
   ↓
ALGORITHM
   ↓
FLOWCHART
   ↓
PROGRAM
   ↓
OUTPUT
  </div>


  <h2>Simple Flowchart Example</h2>

  <p>
    The following example represents the logic for adding two numbers.
  </p>

  <div class="note-flow">
START
   ↓
INPUT A, B
   ↓
SUM = A + B
   ↓
PRINT SUM
   ↓
STOP
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      An <strong>algorithm</strong> describes a solution using steps,
      while a <strong>flowchart</strong> represents those steps
      graphically.
    </p>

  </div>


  <h2>Flowchart vs Algorithm</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Algorithm</th>
          <th>Flowchart</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Written step-by-step instructions.</td>
          <td>Graphical representation of the steps.</td>
        </tr>

        <tr>
          <td>Focuses on logical instructions.</td>
          <td>Focuses on visual flow of the solution.</td>
        </tr>

        <tr>
          <td>Can be written in simple language or pseudocode.</td>
          <td>Uses standard symbols and arrows.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Advantages of a Flowchart</h2>

  <ul>

    <li>Easy to understand and explain.</li>

    <li>Provides a clear visual view of the solution.</li>

    <li>Helps in program planning.</li>

    <li>Useful for finding logical mistakes.</li>

  </ul>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Definition</strong></td>
          <td>Graphical representation of an algorithm or process.</td>
        </tr>

        <tr>
          <td><strong>Purpose</strong></td>
          <td>Shows the sequence and logic of steps visually.</td>
        </tr>

        <tr>
          <td><strong>Uses</strong></td>
          <td>Planning, understanding and explaining solutions.</td>
        </tr>

        <tr>
          <td><strong>Main Elements</strong></td>
          <td>Symbols and arrows/flow lines.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a flowchart?</li>

    <li>Why is a flowchart used?</li>

    <li>Write any three advantages of a flowchart.</li>

    <li>What is the difference between an algorithm and a flowchart?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define a flowchart and explain its importance in problem solving.
    </li>

    <li>
      Differentiate between an algorithm and a flowchart.
    </li>

    <li>
      Explain the advantages of using flowcharts in program development.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a simple explanation of flowcharts and their use
        in problem solving.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=flowchart+definition+in+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Flowchart Definition & Examples — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for Flowchart
        Definition will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of flowchart,
        algorithm and problem-solving steps.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 1 — TOPIC 14
// SYMBOLS USED IN WRITING THE FLOWCHART
// ============================================================

NOTES["m1-flowchart-symbols"] = [
  `

  <h2>Symbols Used in a Flowchart</h2>

<p>
  A flowchart uses standard symbols to represent different types of
  steps in a process. These symbols make the logic easy to read and
  understand.
</p>

<div class="note-image">
  <img
    src="images/Image8.png"
    alt="Main Flowchart Symbols"
  >
</div>

<h2>Main Flowchart Symbols</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Oval</strong></td>
          <td>Start / End</td>
          <td>Shows the beginning or end of a flowchart.</td>
          <td>START, STOP</td>
        </tr>

        <tr>
          <td><strong>Rectangle</strong></td>
          <td>Process</td>
          <td>Represents a calculation or processing step.</td>
          <td>SUM = A + B</td>
        </tr>

        <tr>
          <td><strong>Parallelogram</strong></td>
          <td>Input / Output</td>
          <td>Represents data input or displayed output.</td>
          <td>INPUT A, B</td>
        </tr>

        <tr>
          <td><strong>Diamond</strong></td>
          <td>Decision</td>
          <td>Represents a condition with different possible paths.</td>
          <td>A > B?</td>
        </tr>

        <tr>
          <td><strong>Arrow</strong></td>
          <td>Flow Line</td>
          <td>Shows the direction of flow from one step to another.</td>
          <td>↓</td>
        </tr>

        <tr>
          <td><strong>Circle</strong></td>
          <td>Connector</td>
          <td>Connects different parts of a flowchart.</td>
          <td>A, B</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Start / End Symbol</h2>

  <p>
    The <strong>Start / End</strong> symbol is used to show where a
    flowchart begins and where it finishes. It is commonly represented
    by an <strong>oval</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <strong>START</strong> marks the beginning and
      <strong>STOP</strong> marks the end.
    </p>

  </div>


  <h2>2. Process Symbol</h2>

  <p>
    The <strong>Process</strong> symbol represents an operation,
    calculation, assignment, or processing step. It is generally
    represented by a <strong>rectangle</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <strong>SUM = A + B</strong>
    </p>

  </div>


  <h2>3. Input / Output Symbol</h2>

  <p>
    The <strong>Input / Output</strong> symbol is used when data is
    entered into the system or when information is displayed as output.
    It is generally represented by a <strong>parallelogram</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Examples
    </span>

    <p>
      <strong>INPUT A, B</strong><br>
      <strong>PRINT SUM</strong>
    </p>

  </div>


  <h2>4. Decision Symbol</h2>

  <p>
    The <strong>Decision</strong> symbol is used when a condition must
    be checked. It is represented by a <strong>diamond</strong> and
    normally provides two or more possible paths.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <strong>A &gt; B?</strong>
    </p>

    <p>
      The result may be <strong>Yes</strong> or <strong>No</strong>.
    </p>

  </div>


  <div class="note-flow">
       A > B?
       /   \
    YES     NO
     ↓       ↓
  STEP A   STEP B
  </div>


  <h2>5. Flow Line</h2>

  <p>
    A <strong>flow line</strong> is represented by an arrow. It shows
    the direction in which the flowchart moves from one step to the next.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>Arrow = Direction of Flow</strong>
    </p>

  </div>


  <h2>6. Connector Symbol</h2>

  <p>
    A <strong>connector</strong> is used to connect different parts of
    a flowchart, especially when the flowchart becomes large.
    A small circle is commonly used as a connector.
  </p>

  <p>
    Connectors may contain labels such as <strong>A</strong> or
    <strong>B</strong> to show where the flow continues.
  </p>


  <h2>Simple Flowchart Using Basic Symbols</h2>

  <p>
    The following example shows how the basic symbols work together
    in an algorithm for adding two numbers.
  </p>

  <div class="note-flow">
START
  ↓
INPUT A, B
  ↓
SUM = A + B
  ↓
PRINT SUM
  ↓
STOP
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Way to Remember
    </span>

    <p>
      <strong>
        Oval → Start / End
        <br>
        Rectangle → Process
        <br>
        Parallelogram → Input / Output
        <br>
        Diamond → Decision
        <br>
        Arrow → Flow
        <br>
        Circle → Connector
      </strong>
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Symbol</th>
          <th>Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Oval</strong></td>
          <td>Start or End</td>
        </tr>

        <tr>
          <td><strong>Rectangle</strong></td>
          <td>Process / Calculation</td>
        </tr>

        <tr>
          <td><strong>Parallelogram</strong></td>
          <td>Input / Output</td>
        </tr>

        <tr>
          <td><strong>Diamond</strong></td>
          <td>Decision / Condition</td>
        </tr>

        <tr>
          <td><strong>Arrow</strong></td>
          <td>Direction of flow</td>
        </tr>

        <tr>
          <td><strong>Circle</strong></td>
          <td>Connector</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a flowchart symbol?</li>

    <li>Which symbol is used for Start and End?</li>

    <li>Which symbol is used for processing?</li>

    <li>Which symbol is used for Input and Output?</li>

    <li>Which symbol is used for decision making?</li>

    <li>What is the purpose of a flow line?</li>

    <li>What is a connector?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the standard symbols used in a flowchart with their purposes.
    </li>

    <li>
      Draw and explain the basic flowchart symbols used in programming.
    </li>

    <li>
      Explain the use of Process, Input/Output and Decision symbols
      with suitable examples.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a simple Hindi explanation of standard flowchart symbols.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=flowchart+symbols+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Flowchart Symbols — Hindi Explanation
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet of the main
        flowchart symbols will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of flowchart symbols
        and their purposes.
      </p>

    </div>

  </div>

  `
];

// ============================================================
// MODULE 1 — TOPIC 15
// WRITING ALGORITHMS AND FLOW-CHARTS OF SIMPLE PROBLEMS
// ============================================================

NOTES["m1-simple-problems"] = [
  `

  <h2>Writing Algorithms and Flowcharts of Simple Problems</h2>

  <p>
    After understanding algorithms and flowcharts, we can use them to
    solve simple computer problems. First, we write the solution as
    clear step-by-step instructions and then represent the same logic
    graphically using a flowchart.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 Basic Approach
    </span>

    <p>
      <strong>
        Understand the Problem → Identify Input and Output →
        Write Algorithm → Draw Flowchart
      </strong>
    </p>

  </div>


  <h2>Example 1: Find the Area of a Circle</h2>

  <p>
    This is a simple <strong>arithmetic problem</strong>. We take the
    radius as input, apply the formula, and display the area.
  </p>


  <h3>Problem</h3>

  <p>
    Write an algorithm and flowchart to calculate the area of a circle.
  </p>


  <h3>Formula</h3>

  <div class="note-callout">

    <p>
      <strong>Area = π × r × r</strong>
    </p>

  </div>


  <h3>Algorithm</h3>

  <ol>

    <li><strong>Start</strong></li>

    <li>Input the radius <strong>R</strong>.</li>

    <li>Calculate <strong>AREA = π × R × R</strong>.</li>

    <li>Display <strong>AREA</strong>.</li>

    <li><strong>Stop</strong></li>

  </ol>


  <h3>Flowchart</h3>

  <div class="note-flow">
START
  ↓
INPUT RADIUS
  ↓
AREA = π × R × R
  ↓
PRINT AREA
  ↓
STOP
  </div>


  <h3>Example</h3>

  <p>
    If <strong>R = 5</strong> and π = 3.14:
  </p>

  <div class="note-flow">
AREA = 3.14 × 5 × 5
     = 78.5
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Type of Flowchart
    </span>

    <p>
      This is a <strong>linear arithmetic flowchart</strong>.
      It does not require a decision or loop.
    </p>

  </div>


  <h2>Example 2: Find the Largest of Two Numbers</h2>

  <p>
    This is a <strong>decision-based problem</strong> because a condition
    must be checked before deciding which number is larger.
  </p>


  <h3>Problem</h3>

  <p>
    Write an algorithm and flowchart to find the largest of two numbers.
  </p>


  <h3>Algorithm</h3>

  <ol>

    <li><strong>Start</strong></li>

    <li>Input two numbers <strong>A</strong> and <strong>B</strong>.</li>

    <li>Check whether <strong>A &gt; B</strong>.</li>

    <li>
      If the condition is true, display <strong>A</strong>.
    </li>

    <li>
      Otherwise, display <strong>B</strong>.
    </li>

    <li><strong>Stop</strong></li>

  </ol>


  <h3>Flowchart Logic</h3>

  <div class="note-flow">
START
  ↓
INPUT A, B
  ↓
A > B ?
 ↙     ↘
YES     NO
 ↓       ↓
PRINT A  PRINT B
   ↘     ↙
      ↓
    STOP
  </div>


  <h3>Example</h3>

  <p>
    Let <strong>A = 25</strong> and <strong>B = 18</strong>.
    Since <strong>25 &gt; 18</strong>, the output will be:
  </p>

  <div class="note-callout">

    <p>
      <strong>Largest = 25</strong>
    </p>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Type of Flowchart
    </span>

    <p>
      This is a <strong>decision-based flowchart</strong>.
      The decision symbol is used to create Yes/No paths.
    </p>

  </div>


  <h2>Example 3: Print Numbers from 1 to N</h2>

  <p>
    This is an <strong>iterative problem</strong> because the same
    operation is repeated until a condition becomes false.
  </p>


  <h3>Problem</h3>

  <p>
    Write an algorithm and flowchart to print numbers from
    <strong>1 to N</strong>.
  </p>


  <h3>Algorithm</h3>

  <ol>

    <li><strong>Start</strong></li>

    <li>Input <strong>N</strong>.</li>

    <li>Set <strong>I = 1</strong>.</li>

    <li>Check whether <strong>I ≤ N</strong>.</li>

    <li>
      If true, print <strong>I</strong>.
    </li>

    <li>
      Increase <strong>I</strong> by 1.
    </li>

    <li>
      Repeat the condition check.
    </li>

    <li>
      If the condition is false, <strong>Stop</strong>.
    </li>

  </ol>


  <h3>Flowchart Logic</h3>

  <div class="note-flow">
START
  ↓
INPUT N
  ↓
I = 1
  ↓
I ≤ N ?
 ↙       ↘
YES       NO
 ↓         ↓
PRINT I   STOP
 ↓
I = I + 1
 ↓
↺ Back to condition
  </div>


  <h3>Example</h3>

  <p>
    If <strong>N = 5</strong>, the output will be:
  </p>

  <div class="note-flow">
1  2  3  4  5
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Type of Flowchart
    </span>

    <p>
      This is an <strong>iterative flowchart</strong> because the
      flow returns to the condition and repeats the steps.
    </p>

  </div>


  <h2>Three Common Types of Simple Problems</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Type</th>
          <th>Main Idea</th>
          <th>Example</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Arithmetic</strong></td>
          <td>Uses formulas and calculations.</td>
          <td>Area of a circle</td>
        </tr>

        <tr>
          <td><strong>Decision-Based</strong></td>
          <td>Checks a condition and chooses a path.</td>
          <td>Largest of two numbers</td>
        </tr>

        <tr>
          <td><strong>Iterative</strong></td>
          <td>Repeats steps until a condition becomes false.</td>
          <td>Print 1 to N</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>How to Convert an Algorithm into a Flowchart</h2>

  <ol>

    <li>
      Identify the <strong>Start</strong> and <strong>Stop</strong>.
    </li>

    <li>
      Identify input and output steps.
    </li>

    <li>
      Represent calculations using the Process symbol.
    </li>

    <li>
      Represent conditions using the Decision symbol.
    </li>

    <li>
      Connect the symbols using flow lines in the correct order.
    </li>

    <li>
      Check the flow using suitable test data.
    </li>

  </ol>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Exam Approach
    </span>

    <p>
      Whenever a question asks you to write an algorithm and flowchart,
      first identify:
      <strong>Input → Process → Decision (if required) → Output → Stop</strong>.
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>

        <tr>
          <th>Problem</th>
          <th>Important Point</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td><strong>Area of Circle</strong></td>
          <td>Input radius → Apply formula → Output area</td>
        </tr>

        <tr>
          <td><strong>Largest of Two</strong></td>
          <td>Input two numbers → Check condition → Output largest</td>
        </tr>

        <tr>
          <td><strong>Print 1 to N</strong></td>
          <td>Initialize → Check condition → Print → Update → Repeat</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Write an algorithm to find the area of a circle.
    </li>

    <li>
      Write an algorithm to find the largest of two numbers.
    </li>

    <li>
      Write an algorithm to print numbers from 1 to N.
    </li>

    <li>
      What is the difference between an arithmetic and decision-based flowchart?
    </li>

  </ol>


  <h3>Practical / Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Write an algorithm and draw a flowchart to calculate the area of a circle.
    </li>

    <li>
      Write an algorithm and flowchart to find the largest of two numbers.
    </li>

    <li>
      Write an algorithm and flowchart to print numbers from 1 to N.
    </li>

    <li>
      Explain the steps involved in converting an algorithm into a flowchart.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a simple Hindi explanation of algorithms and flowcharts
        with basic problem-solving examples.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=algorithm+and+flowchart+simple+problems+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Algorithms & Flowcharts — Simple Problems
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet containing important
        algorithms and flowcharts will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map to revise arithmetic, decision-based and
        iterative problem solving.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 1
// INTRODUCTION TO C
// ============================================================

NOTES["m2-introduction-c"] = [
  `

  <h2>Introduction to C</h2>

  <p>
    <strong>C</strong> is a general-purpose, procedural programming language
    used to write programs for solving different types of problems.
    It is a high-level language that also provides features for working
    closely with computer hardware.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      C is a programming language used to give instructions to a computer
      and develop programs in a clear and structured way.
    </p>

  </div>


  <h2>Features of C</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>Simple Explanation</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Simple</strong></td>
          <td>
            C has a relatively small set of keywords and a clear syntax.
          </td>
        </tr>

        <tr>
          <td><strong>Procedural</strong></td>
          <td>
            A program can be divided into functions and step-by-step procedures.
          </td>
        </tr>

        <tr>
          <td><strong>Portable</strong></td>
          <td>
            C programs can be moved to different systems with suitable
            changes or recompilation.
          </td>
        </tr>

        <tr>
          <td><strong>Fast and Efficient</strong></td>
          <td>
            C programs can execute efficiently and provide good control
            over system resources.
          </td>
        </tr>

        <tr>
          <td><strong>Structured</strong></td>
          <td>
            Programs can be organized into functions and logical blocks.
          </td>
        </tr>

        <tr>
          <td><strong>Middle-Level Features</strong></td>
          <td>
            C combines high-level programming features with low-level
            operations such as pointers and direct memory access.
          </td>
        </tr>

        <tr>
          <td><strong>Rich Operators</strong></td>
          <td>
            C provides operators for arithmetic, comparison, logic,
            assignment and other operations.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Basic C Program Structure</h2>

  <p>
    A basic C program contains different parts such as header files,
    the <code>main()</code> function, declarations or statements,
    and the <code>return</code> statement.
  </p>


  <div class="note-flow">
#include &lt;stdio.h&gt;

int main()
{
    // declarations and statements

    return 0;
}
  </div>


  <h3>1. Header File</h3>

  <p>
    Header files provide declarations for functions and other definitions
    used by a program. For example,
    <code>#include &lt;stdio.h&gt;</code> provides standard input and
    output functions such as <code>printf()</code> and <code>scanf()</code>.
  </p>


  <h3>2. main() Function</h3>

  <p>
    The <code>main()</code> function is the entry point of a normal C program.
    Program execution begins from <code>main()</code>.
  </p>


  <h3>3. Statements</h3>

  <p>
    Statements are the instructions that perform the required operations
    of the program.
  </p>


  <h3>4. return 0;</h3>

  <p>
    The <code>return 0;</code> statement indicates successful completion
    of the <code>main()</code> function.
  </p>


  <h2>Simple C Program Example</h2>

  <div class="note-flow">
#include &lt;stdio.h&gt;

int main()
{
    int a = 10;
    int b = 15;
    int sum = a + b;

    printf("Sum = %d", sum);

    return 0;
}
  </div>


  <h3>Output</h3>

  <div class="note-callout">

    <p>
      <strong>Sum = 25</strong>
    </p>

  </div>


  <h2>How the Program Works</h2>

  <ol>

    <li>
      <code>#include &lt;stdio.h&gt;</code> provides standard input/output
      functions.
    </li>

    <li>
      The program starts from <code>main()</code>.
    </li>

    <li>
      Variables <code>a</code> and <code>b</code> store the two numbers.
    </li>

    <li>
      <code>sum = a + b</code> calculates their sum.
    </li>

    <li>
      <code>printf()</code> displays the result.
    </li>

    <li>
      <code>return 0;</code> ends the program successfully.
    </li>

  </ol>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      The basic idea of a C program is:
      <strong>Header → main() → Statements → return 0</strong>
    </p>

  </div>


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
          <td><strong>C</strong></td>
          <td>General-purpose procedural programming language.</td>
        </tr>

        <tr>
          <td><strong>Portable</strong></td>
          <td>Can be adapted to different systems.</td>
        </tr>

        <tr>
          <td><strong>main()</strong></td>
          <td>Program execution starts here.</td>
        </tr>

        <tr>
          <td><strong>stdio.h</strong></td>
          <td>Provides standard input/output functions.</td>
        </tr>

        <tr>
          <td><strong>printf()</strong></td>
          <td>Used to display output.</td>
        </tr>

        <tr>
          <td><strong>return 0;</strong></td>
          <td>Indicates successful completion of main().</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is C?</li>

    <li>Write any four features of C.</li>

    <li>What is the purpose of the main() function?</li>

    <li>What is the use of <code>#include &lt;stdio.h&gt;</code>?</li>

    <li>What is the purpose of <code>return 0;</code>?</li>

    <li>Write the basic structure of a C program.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain C and its important features.
    </li>

    <li>
      Explain the basic structure of a C program with a suitable example.
    </li>

    <li>
      Write a simple C program to add two numbers and explain its structure.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly introduction to C programming,
        its features and basic program structure.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=introduction+to+C+programming+features+basic+structure+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Introduction to C Programming — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering C features
        and basic program structure will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of C, its features
        and basic program structure.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 2
// FEATURES OF C
// ============================================================

NOTES["m2-features-c"] = [
  `

  <h2>Features of C</h2>

  <p>
    C is a general-purpose programming language that is known for its
    simple syntax, structured programming approach, portability and
    efficient execution. It is also useful when a program needs
    closer control over computer resources.
  </p>


  <h2>Important Features of C</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>Simple Explanation</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Simple</strong></td>
          <td>
            C has a clear syntax and a relatively small set of keywords,
            making it easier to learn.
          </td>
        </tr>

        <tr>
          <td><strong>Procedural</strong></td>
          <td>
            A program can be divided into functions and executed through
            a logical sequence of steps.
          </td>
        </tr>

        <tr>
          <td><strong>Structured</strong></td>
          <td>
            Large programs can be organized into smaller functions and
            logical blocks.
          </td>
        </tr>

        <tr>
          <td><strong>Portable</strong></td>
          <td>
            C programs can be adapted and compiled on different
            computer systems.
          </td>
        </tr>

        <tr>
          <td><strong>Fast and Efficient</strong></td>
          <td>
            C provides efficient execution and can use system resources
            effectively.
          </td>
        </tr>

        <tr>
          <td><strong>Middle-Level Nature</strong></td>
          <td>
            C provides high-level programming features along with
            low-level features such as pointers and direct memory access.
          </td>
        </tr>

        <tr>
          <td><strong>Rich Operators</strong></td>
          <td>
            C provides operators for arithmetic, logical, relational,
            assignment and other operations.
          </td>
        </tr>

        <tr>
          <td><strong>Modular Programming</strong></td>
          <td>
            Functions allow a large program to be divided into smaller
            reusable parts.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Simple</h2>

  <p>
    C has a relatively simple syntax and a small set of keywords.
    This makes its basic programming concepts easier to understand
    and learn.
  </p>


  <h2>2. Procedural</h2>

  <p>
    C follows a <strong>procedural approach</strong>. A problem can be
    solved through a sequence of instructions and functions.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A program can contain separate functions for
      <strong>input, calculation and output</strong>.
    </p>

  </div>


  <h2>3. Structured</h2>

  <p>
    C supports structured programming, where a program is divided into
    smaller logical blocks or functions. This makes programs easier to
    understand, test and maintain.
  </p>


  <h2>4. Portable</h2>

  <p>
    A C program can generally be moved to another system and compiled
    again with suitable changes when required. This makes C more portable
    than machine-dependent languages.
  </p>


  <h2>5. Fast and Efficient</h2>

  <p>
    C is known for efficient execution and provides good control over
    system resources. This is one reason why C is widely used in
    system-level and performance-sensitive programming.
  </p>


  <h2>6. Middle-Level Nature</h2>

  <p>
    C is often described as a <strong>middle-level language</strong>
    because it combines high-level programming features with
    low-level capabilities.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      C supports normal high-level programming as well as pointers
      that allow direct work with memory addresses.
    </p>

  </div>


  <h2>7. Rich Operators</h2>

  <p>
    C provides a wide range of operators for performing different
    operations such as arithmetic, comparison, logical operations
    and assignment.
  </p>


  <h2>8. Modular Programming</h2>

  <p>
    C programs can be divided into functions. Each function can perform
    a specific task, making the program easier to manage and reuse.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Real-World Example
    </span>

    <p>
      Think of a large college application. Instead of putting all the
      code in one place, different functions can handle
      <strong>login, marks calculation, result display and file handling</strong>.
      This is an example of modular programming.
    </p>

  </div>


  <h2>Why is C Still Important?</h2>

  <p>
    C provides a balance between programming convenience and control
    over computer resources. It is therefore widely used for areas such
    as system software, embedded systems and other performance-sensitive
    applications.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>
        C = Simple + Procedural + Structured + Portable + Efficient
      </strong>
    </p>

    <p>
      It also provides low-level control through features such as
      <strong>pointers</strong>.
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>One-Line Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Simple</strong></td>
          <td>Clear syntax and relatively small set of keywords.</td>
        </tr>

        <tr>
          <td><strong>Procedural</strong></td>
          <td>Programs follow a sequence of procedures and functions.</td>
        </tr>

        <tr>
          <td><strong>Structured</strong></td>
          <td>Program can be divided into logical blocks.</td>
        </tr>

        <tr>
          <td><strong>Portable</strong></td>
          <td>Can be adapted and compiled on different systems.</td>
        </tr>

        <tr>
          <td><strong>Efficient</strong></td>
          <td>Provides fast and efficient execution.</td>
        </tr>

        <tr>
          <td><strong>Middle-Level</strong></td>
          <td>Combines high-level and low-level capabilities.</td>
        </tr>

        <tr>
          <td><strong>Rich Operators</strong></td>
          <td>Supports many types of operations.</td>
        </tr>

        <tr>
          <td><strong>Modular</strong></td>
          <td>Functions divide programs into manageable parts.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>Write any four features of C.</li>

    <li>Why is C called a procedural language?</li>

    <li>What is meant by portability in C?</li>

    <li>Why is C called a middle-level language?</li>

    <li>What is structured programming in C?</li>

    <li>What is modular programming?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the important features of C.
    </li>

    <li>
      Explain why C is called a middle-level and structured programming language.
    </li>

    <li>
      Explain the advantages of portability, efficiency and modularity in C.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the important features
        of C programming.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=features+of+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Features of C Programming — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet covering the important
        features of C will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of the major features of C.
      </p>

    </div>

  </div>

  `
];

// ============================================================
// MODULE 2 — TOPIC 3
// BASIC C PROGRAM STRUCTURE
// ============================================================

NOTES["m2-program-structure"] = [
  `

  <h2>Basic C Program Structure</h2>

  <p>
    A C program is written using a basic structure that contains
    header files, the <code>main()</code> function, declarations,
    statements, and a return statement. Program execution normally
    starts from the <code>main()</code> function.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A C program is like a small set of instructions:
      <strong>include required files → start main() → perform work → return</strong>.
    </p>

  </div>


  <h2>Basic Structure of a C Program</h2>

  <div class="note-flow">
#include &lt;stdio.h&gt;

int main()
{
    // declarations

    // statements

    return 0;
}
  </div>


  <h2>Parts of a C Program</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Part</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Header File</strong></td>
          <td>
            Provides declarations for standard functions used by the program.
          </td>
          <td><code>#include &lt;stdio.h&gt;</code></td>
        </tr>

        <tr>
          <td><strong>main()</strong></td>
          <td>
            Main function from where program execution begins.
          </td>
          <td><code>int main()</code></td>
        </tr>

        <tr>
          <td><strong>Declarations</strong></td>
          <td>
            Define variables required by the program.
          </td>
          <td><code>int a, b;</code></td>
        </tr>

        <tr>
          <td><strong>Statements</strong></td>
          <td>
            Perform the required operations of the program.
          </td>
          <td><code>sum = a + b;</code></td>
        </tr>

        <tr>
          <td><strong>Output</strong></td>
          <td>
            Displays the result to the user.
          </td>
          <td><code>printf()</code></td>
        </tr>

        <tr>
          <td><strong>return 0;</strong></td>
          <td>
            Indicates successful completion of the main function.
          </td>
          <td><code>return 0;</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Example: Add Two Numbers</h2>

  <div class="note-flow">
#include &lt;stdio.h&gt;

int main()
{
    int a = 10;
    int b = 15;
    int sum = a + b;

    printf("Sum = %d", sum);

    return 0;
}
  </div>


  <h2>Understanding the Program</h2>

  <h3>1. #include &lt;stdio.h&gt;</h3>

  <p>
    This line includes the standard input/output header file.
    It provides functions such as <code>printf()</code> used for
    displaying output.
  </p>


  <h3>2. int main()</h3>

  <p>
    The <code>main()</code> function is the main entry point of the
    program. Execution begins from this function.
  </p>


  <h3>3. int a = 10; and int b = 15;</h3>

  <p>
    These statements declare two integer variables and initialize
    them with values.
  </p>


  <h3>4. int sum = a + b;</h3>

  <p>
    This statement calculates the sum of the two numbers and stores
    the result in the variable <code>sum</code>.
  </p>


  <h3>5. printf("Sum = %d", sum);</h3>

  <p>
    The <code>printf()</code> function displays the calculated result
    on the screen.
  </p>


  <h3>6. return 0;</h3>

  <p>
    This statement ends the <code>main()</code> function and indicates
    successful completion of the program.
  </p>


  <h2>Program Flow</h2>

  <div class="note-flow">
Header File
    ↓
main()
    ↓
Variable Declarations
    ↓
Processing / Statements
    ↓
Output
    ↓
return 0
    ↓
Program Ends
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      The most important part to remember is:
      <strong>Program execution starts from main().</strong>
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Part</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>#include</strong></td>
          <td>Includes required header files.</td>
        </tr>

        <tr>
          <td><strong>main()</strong></td>
          <td>Starting point of program execution.</td>
        </tr>

        <tr>
          <td><strong>Declaration</strong></td>
          <td>Defines required variables.</td>
        </tr>

        <tr>
          <td><strong>Statements</strong></td>
          <td>Perform the required operations.</td>
        </tr>

        <tr>
          <td><strong>printf()</strong></td>
          <td>Displays output.</td>
        </tr>

        <tr>
          <td><strong>return 0;</strong></td>
          <td>Ends main() successfully.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is the basic structure of a C program?</li>

    <li>What is the purpose of the <code>main()</code> function?</li>

    <li>What is the use of <code>#include &lt;stdio.h&gt;</code>?</li>

    <li>What is the purpose of <code>printf()</code>?</li>

    <li>What is the use of <code>return 0;</code>?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the basic structure of a C program with a suitable example.
    </li>

    <li>
      Write a C program to add two numbers and explain each part of the program.
    </li>

    <li>
      Explain the role of header files, main(), statements and return
      statement in a C program.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the basic structure
        of a C program.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=basic+structure+of+C+program+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Basic C Program Structure — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the basic
        C program structure will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of the main parts
        of a C program.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — C TOKENS
// ============================================================

NOTES["m2-tokens"] = [
  `

  <h2>C Tokens</h2>

  <p>
    A <strong>token</strong> is the smallest meaningful unit of a C program
    recognized by the compiler. A C program is made up of different types
    of tokens such as keywords, identifiers, constants, strings, operators
    and special symbols.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Tokens are the <strong>basic building blocks of a C program</strong>.
      Just as words and punctuation form a sentence, tokens form a C program.
    </p>

  </div>


  <h2>Example</h2>

  <div class="note-flow">
int sum = a + b;
  </div>

  <p>
    In the above statement:
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Token</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>int</code></td>
          <td>Keyword</td>
        </tr>

        <tr>
          <td><code>sum</code></td>
          <td>Identifier</td>
        </tr>

        <tr>
          <td><code>=</code></td>
          <td>Operator</td>
        </tr>

        <tr>
          <td><code>a</code></td>
          <td>Identifier</td>
        </tr>

        <tr>
          <td><code>+</code></td>
          <td>Operator</td>
        </tr>

        <tr>
          <td><code>b</code></td>
          <td>Identifier</td>
        </tr>

        <tr>
          <td><code>;</code></td>
          <td>Special Symbol / Punctuator</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Types of C Tokens</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Type</th>
          <th>Meaning</th>
          <th>Examples</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Keywords</strong></td>
          <td>Reserved words with a fixed meaning in C.</td>
          <td><code>int</code>, <code>if</code>, <code>return</code></td>
        </tr>

        <tr>
          <td><strong>Identifiers</strong></td>
          <td>Names given to variables, functions and other program elements.</td>
          <td><code>sum</code>, <code>main</code>, <code>count</code></td>
        </tr>

        <tr>
          <td><strong>Constants</strong></td>
          <td>Fixed values that do not change during program execution.</td>
          <td><code>10</code>, <code>3.14</code>, <code>'A'</code></td>
        </tr>

        <tr>
          <td><strong>Strings</strong></td>
          <td>Sequence of characters written inside double quotes.</td>
          <td><code>"Hello"</code>, <code>"BCA"</code></td>
        </tr>

        <tr>
          <td><strong>Operators</strong></td>
          <td>Symbols used to perform operations.</td>
          <td><code>+</code>, <code>-</code>, <code>=</code></td>
        </tr>

        <tr>
          <td><strong>Special Symbols</strong></td>
          <td>Symbols used to structure and separate parts of a program.</td>
          <td><code>;</code>, <code>{}</code>, <code>()</code>, <code>[]</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Keywords</h2>

  <p>
    <strong>Keywords</strong> are reserved words of the C language that
    have predefined meanings. They cannot normally be used as names of
    variables or functions.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Examples
    </span>

    <p>
      <code>int</code>, <code>if</code>, <code>else</code>,
      <code>while</code>, <code>return</code>, <code>for</code>
    </p>

  </div>


  <h2>2. Identifiers</h2>

  <p>
    <strong>Identifiers</strong> are names used to identify program
    elements such as variables, functions and arrays.
  </p>


  <h3>Rules for Identifiers</h3>

  <ul>

    <li>
      An identifier can contain letters, digits and underscore.
    </li>

    <li>
      It should not begin with a digit.
    </li>

    <li>
      Keywords cannot be used as identifiers.
    </li>

    <li>
      C identifiers are case-sensitive.
    </li>

  </ul>


  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Valid</th>
          <th>Invalid</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>total</code></td>
          <td><code>2total</code></td>
        </tr>

        <tr>
          <td><code>student_name</code></td>
          <td><code>student-name</code></td>
        </tr>

        <tr>
          <td><code>marks1</code></td>
          <td><code>int</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>3. Constants</h2>

  <p>
    <strong>Constants</strong> are fixed values used in a program.
    Their value remains unchanged while the program is running.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Examples
    </span>

    <p>
      Integer: <code>25</code><br>
      Decimal: <code>3.14</code><br>
      Character: <code>'A'</code>
    </p>

  </div>


  <h2>4. Strings</h2>

  <p>
    A <strong>string</strong> is a sequence of characters enclosed in
    double quotation marks.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Examples
    </span>

    <p>
      <code>"Hello"</code><br>
      <code>"BCA Study Portal"</code>
    </p>

  </div>


  <h2>5. Operators</h2>

  <p>
    <strong>Operators</strong> are symbols used to perform operations
    on values or variables.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Example</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>+</code></td>
          <td><code>a + b</code></td>
          <td>Addition</td>
        </tr>

        <tr>
          <td><code>-</code></td>
          <td><code>a - b</code></td>
          <td>Subtraction</td>
        </tr>

        <tr>
          <td><code>*</code></td>
          <td><code>a * b</code></td>
          <td>Multiplication</td>
        </tr>

        <tr>
          <td><code>/</code></td>
          <td><code>a / b</code></td>
          <td>Division</td>
        </tr>

        <tr>
          <td><code>=</code></td>
          <td><code>a = 10</code></td>
          <td>Assignment</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>6. Special Symbols</h2>

  <p>
    <strong>Special symbols</strong> help define the structure and
    separation of statements and blocks in a C program.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Symbol</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>;</code></td>
          <td>Ends a statement.</td>
        </tr>

        <tr>
          <td><code>()</code></td>
          <td>Used with functions and expressions.</td>
        </tr>

        <tr>
          <td><code>{}</code></td>
          <td>Defines a block of statements.</td>
        </tr>

        <tr>
          <td><code>[]</code></td>
          <td>Used for arrays.</td>
        </tr>

        <tr>
          <td><code>,</code></td>
          <td>Separates items such as variables or function arguments.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Token Type</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Keyword</strong></td>
          <td>Reserved word</td>
        </tr>

        <tr>
          <td><strong>Identifier</strong></td>
          <td>Name given by programmer</td>
        </tr>

        <tr>
          <td><strong>Constant</strong></td>
          <td>Fixed value</td>
        </tr>

        <tr>
          <td><strong>String</strong></td>
          <td>Characters inside double quotes</td>
        </tr>

        <tr>
          <td><strong>Operator</strong></td>
          <td>Performs an operation</td>
        </tr>

        <tr>
          <td><strong>Special Symbol</strong></td>
          <td>Helps structure the program</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What are tokens in C?</li>

    <li>Write the different types of C tokens.</li>

    <li>What are keywords?</li>

    <li>What are identifiers?</li>

    <li>What are constants?</li>

    <li>What are operators?</li>

    <li>What are special symbols in C?</li>

    <li>Write any four rules for naming identifiers.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define C tokens and explain their different types with examples.
    </li>

    <li>
      Explain keywords, identifiers, constants, strings, operators
      and special symbols with suitable examples.
    </li>

    <li>
      Explain the rules for naming identifiers in C.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of C tokens and their
        different types.
      </p>

      <p>

        <a
          href="https://www.youtube.com/watch?v=GkQ8diSwWnY"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: C Tokens — Keywords, Identifiers, Constants & Operators
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for C Tokens
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of the six types
        of C tokens.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 5
// DATA TYPES
// ============================================================

NOTES["m2-data-types"] = [
  `

  <h2>Data Types in C</h2>

  <p>
    A <strong>data type</strong> tells the compiler what kind of data a
    variable can store. It also determines the type of value that can be
    stored and the operations that can be performed on it.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      A data type tells C whether a variable will store a
      <strong>number, character, decimal value,</strong> or another
      type of data.
    </p>

  </div>


  <h2>Real-World Example</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Example
    </span>

    <p>
      Think about a student record:
      <strong>Age</strong> can be an integer,
      <strong>Percentage</strong> can contain decimal values,
      and <strong>Grade</strong> can be a character.
      Different types of data need different data types.
    </p>

  </div>


  <h2>Basic Data Types in C</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Data Type</th>
          <th>Used For</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>int</strong></td>
          <td>Integer numbers</td>
          <td><code>25</code>, <code>-10</code></td>
        </tr>

        <tr>
          <td><strong>char</strong></td>
          <td>A single character</td>
          <td><code>'A'</code>, <code>'5'</code></td>
        </tr>

        <tr>
          <td><strong>float</strong></td>
          <td>Decimal numbers</td>
          <td><code>3.14</code></td>
        </tr>

        <tr>
          <td><strong>double</strong></td>
          <td>Decimal numbers with higher precision</td>
          <td><code>12.345678</code></td>
        </tr>

        <tr>
          <td><strong>void</strong></td>
          <td>Indicates no value or no return value</td>
          <td><code>void function()</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. int</h2>

  <p>
    The <strong>int</strong> data type is used to store whole numbers
    without a fractional part.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>int age = 20;</code>
    </p>

  </div>


  <h2>2. char</h2>

  <p>
    The <strong>char</strong> data type is used to store a single
    character. Character values are written inside single quotation marks.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>char grade = 'A';</code>
    </p>

  </div>


  <h2>3. float</h2>

  <p>
    The <strong>float</strong> data type is used to store numbers that
    contain a decimal or fractional part.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>float percentage = 82.5;</code>
    </p>

  </div>


  <h2>4. double</h2>

  <p>
    The <strong>double</strong> data type is used for floating-point
    values when more precision is required than a typical
    <code>float</code>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>double pi = 3.1415926535;</code>
    </p>

  </div>


  <h2>5. void</h2>

  <p>
    The <strong>void</strong> type represents the absence of a value.
    It is commonly used with functions that do not return a value.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>void display()</code>
    </p>

  </div>


  <h2>Example: Using Different Data Types</h2>

  <div class="note-flow">
int age = 20;
char grade = 'A';
float percentage = 82.5;
double pi = 3.1415926535;
  </div>


  <h2>Why Are Data Types Important?</h2>

  <ul>

    <li>
      They tell the compiler what kind of data a variable stores.
    </li>

    <li>
      They help the compiler allocate suitable memory for data.
    </li>

    <li>
      They determine which operations are appropriate for the data.
    </li>

    <li>
      They help prevent incorrect use of values.
    </li>

  </ul>


  <h2>Data Type and Variable</h2>

  <p>
    A variable is declared by writing its <strong>data type</strong>
    followed by the variable name.
  </p>

  <div class="note-flow">
DATA TYPE + VARIABLE NAME + VALUE
          ↓
       int age = 20;
  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Type</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>int</strong></td>
          <td>Whole numbers</td>
        </tr>

        <tr>
          <td><strong>char</strong></td>
          <td>Single character</td>
        </tr>

        <tr>
          <td><strong>float</strong></td>
          <td>Decimal values</td>
        </tr>

        <tr>
          <td><strong>double</strong></td>
          <td>Decimal values with higher precision</td>
        </tr>

        <tr>
          <td><strong>void</strong></td>
          <td>No value / no return value</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a data type in C?</li>

    <li>Why are data types used in C?</li>

    <li>What is the use of <code>int</code>?</li>

    <li>What is the use of <code>char</code>?</li>

    <li>What is the difference between <code>float</code> and <code>double</code>?</li>

    <li>What is the use of <code>void</code>?</li>

    <li>Write any five basic data types in C.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Define data types and explain the basic data types in C with examples.
    </li>

    <li>
      Explain int, char, float, double and void with suitable examples.
    </li>

    <li>
      Explain why data types are important in C programming.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of basic data types in C.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=data+types+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Data Types in C — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for C data types
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of basic C data types.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 6
// C OPERATORS AND PRECEDENCE
// ============================================================

NOTES["m2-operators-precedence"] = [
  `

  <h2>C Operators</h2>

  <p>
    An <strong>operator</strong> is a symbol used to perform an operation
    on one or more values or variables. Operators are an important part
    of expressions in C.
  </p>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 In Simple Words
    </span>

    <p>
      Operators tell the computer <strong>what operation to perform</strong>,
      such as add, subtract, compare, assign, or check a condition.
    </p>

  </div>


  <h2>Example</h2>

  <div class="note-flow">
int sum = a + b;
  </div>

  <p>
    Here <code>+</code> is an operator used to add <code>a</code> and
    <code>b</code>, while <code>=</code> is the assignment operator.
  </p>


  <h2>Types of Operators in C</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Type</th>
          <th>Operators</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Arithmetic</strong></td>
          <td><code>+ - * / %</code></td>
          <td>Mathematical calculations</td>
        </tr>

        <tr>
          <td><strong>Relational</strong></td>
          <td><code>== != &gt; &lt; &gt;= &lt;=</code></td>
          <td>Compare two values</td>
        </tr>

        <tr>
          <td><strong>Logical</strong></td>
          <td><code>&amp;&amp; || !</code></td>
          <td>Combine or reverse conditions</td>
        </tr>

        <tr>
          <td><strong>Assignment</strong></td>
          <td><code>= += -= *= /= %=</code></td>
          <td>Assign values to variables</td>
        </tr>

        <tr>
          <td><strong>Increment / Decrement</strong></td>
          <td><code>++ --</code></td>
          <td>Increase or decrease a value by 1</td>
        </tr>

        <tr>
          <td><strong>Bitwise</strong></td>
          <td><code>&amp; | ^ ~ &lt;&lt; &gt;&gt;</code></td>
          <td>Operate on individual bits</td>
        </tr>

        <tr>
          <td><strong>Conditional</strong></td>
          <td><code>?:</code></td>
          <td>Short form of a simple if-else expression</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>1. Arithmetic Operators</h2>

  <p>
    Arithmetic operators are used to perform mathematical calculations.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Operation</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>+</code></td>
          <td>Addition</td>
          <td><code>10 + 5 = 15</code></td>
        </tr>

        <tr>
          <td><code>-</code></td>
          <td>Subtraction</td>
          <td><code>10 - 5 = 5</code></td>
        </tr>

        <tr>
          <td><code>*</code></td>
          <td>Multiplication</td>
          <td><code>10 * 5 = 50</code></td>
        </tr>

        <tr>
          <td><code>/</code></td>
          <td>Division</td>
          <td><code>10 / 5 = 2</code></td>
        </tr>

        <tr>
          <td><code>%</code></td>
          <td>Remainder</td>
          <td><code>10 % 3 = 1</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>2. Relational Operators</h2>

  <p>
    Relational operators compare two values. The result is used as a
    logical condition.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>==</code></td>
          <td>Equal to</td>
          <td><code>a == b</code></td>
        </tr>

        <tr>
          <td><code>!=</code></td>
          <td>Not equal to</td>
          <td><code>a != b</code></td>
        </tr>

        <tr>
          <td><code>&gt;</code></td>
          <td>Greater than</td>
          <td><code>a &gt; b</code></td>
        </tr>

        <tr>
          <td><code>&lt;</code></td>
          <td>Less than</td>
          <td><code>a &lt; b</code></td>
        </tr>

        <tr>
          <td><code>&gt;=</code></td>
          <td>Greater than or equal to</td>
          <td><code>a &gt;= b</code></td>
        </tr>

        <tr>
          <td><code>&lt;=</code></td>
          <td>Less than or equal to</td>
          <td><code>a &lt;= b</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>3. Logical Operators</h2>

  <p>
    Logical operators are used to combine or reverse conditions.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>&amp;&amp;</code></td>
          <td>Logical AND</td>
          <td><code>a &gt; 5 &amp;&amp; b &lt; 10</code></td>
        </tr>

        <tr>
          <td><code>||</code></td>
          <td>Logical OR</td>
          <td><code>a &gt; 5 || b &lt; 10</code></td>
        </tr>

        <tr>
          <td><code>!</code></td>
          <td>Logical NOT</td>
          <td><code>!(a &gt; 5)</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>4. Assignment Operators</h2>

  <p>
    Assignment operators are used to assign or update values stored
    in variables.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Example</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>=</code></td>
          <td><code>a = 10</code></td>
          <td>Assign 10 to a</td>
        </tr>

        <tr>
          <td><code>+=</code></td>
          <td><code>a += 5</code></td>
          <td><code>a = a + 5</code></td>
        </tr>

        <tr>
          <td><code>-=</code></td>
          <td><code>a -= 5</code></td>
          <td><code>a = a - 5</code></td>
        </tr>

        <tr>
          <td><code>*=</code></td>
          <td><code>a *= 5</code></td>
          <td><code>a = a * 5</code></td>
        </tr>

        <tr>
          <td><code>/=</code></td>
          <td><code>a /= 5</code></td>
          <td><code>a = a / 5</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>5. Increment and Decrement Operators</h2>

  <p>
    The <code>++</code> operator increases a value by 1, while the
    <code>--</code> operator decreases a value by 1.
  </p>

  <div class="note-flow">
int a = 5;

a++;
→ a becomes 6

a--;
→ a becomes 5
  </div>


  <h3>Pre-Increment and Post-Increment</h3>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Form</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>++a</code></td>
          <td>Increase first, then use the value.</td>
        </tr>

        <tr>
          <td><code>a++</code></td>
          <td>Use the value first, then increase it.</td>
        </tr>

        <tr>
          <td><code>--a</code></td>
          <td>Decrease first, then use the value.</td>
        </tr>

        <tr>
          <td><code>a--</code></td>
          <td>Use the value first, then decrease it.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>6. Bitwise Operators</h2>

  <p>
    Bitwise operators work on the individual bits of integer values.
    They are mainly useful when low-level or bit-level operations are required.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>&amp;</code></td>
          <td>Bitwise AND</td>
        </tr>

        <tr>
          <td><code>|</code></td>
          <td>Bitwise OR</td>
        </tr>

        <tr>
          <td><code>^</code></td>
          <td>Bitwise XOR</td>
        </tr>

        <tr>
          <td><code>~</code></td>
          <td>Bitwise NOT</td>
        </tr>

        <tr>
          <td><code>&lt;&lt;</code></td>
          <td>Left Shift</td>
        </tr>

        <tr>
          <td><code>&gt;&gt;</code></td>
          <td>Right Shift</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>7. Conditional Operator</h2>

  <p>
    The <strong>conditional operator</strong> <code>?:</code> is a
    short form for selecting one of two expressions based on a condition.
  </p>

  <div class="note-flow">
condition ? expression1 : expression2
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>max = (a &gt; b) ? a : b;</code>
    </p>

    <p>
      If <code>a &gt; b</code> is true, <code>a</code> is assigned;
      otherwise <code>b</code> is assigned.
    </p>

  </div>


  <h2>Operator Precedence</h2>

  <p>
    <strong>Operator precedence</strong> determines which operator is
    evaluated first when an expression contains multiple operators.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Consider:
      <strong>2 + 3 * 4</strong>
    </p>

    <p>
      Multiplication has higher precedence than addition, so:
      <strong>3 * 4 = 12</strong> is evaluated first.
    </p>

    <p>
      Final result:
      <strong>2 + 12 = 14</strong>
    </p>

  </div>


  <h2>Basic Precedence Order</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Priority</th>
          <th>Operators</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>1 — Highest</strong></td>
          <td><code>()</code></td>
          <td><code>(a + b)</code></td>
        </tr>

        <tr>
          <td><strong>2</strong></td>
          <td><code>++ --</code></td>
          <td><code>++a</code></td>
        </tr>

        <tr>
          <td><strong>3</strong></td>
          <td><code>* / %</code></td>
          <td><code>a * b</code></td>
        </tr>

        <tr>
          <td><strong>4</strong></td>
          <td><code>+ -</code></td>
          <td><code>a + b</code></td>
        </tr>

        <tr>
          <td><strong>5</strong></td>
          <td><code>&lt; &lt;= &gt; &gt;=</code></td>
          <td><code>a &lt; b</code></td>
        </tr>

        <tr>
          <td><strong>6</strong></td>
          <td><code>== !=</code></td>
          <td><code>a == b</code></td>
        </tr>

        <tr>
          <td><strong>7</strong></td>
          <td><code>&amp;&amp;</code></td>
          <td><code>a &amp;&amp; b</code></td>
        </tr>

        <tr>
          <td><strong>8</strong></td>
          <td><code>||</code></td>
          <td><code>a || b</code></td>
        </tr>

        <tr>
          <td><strong>9</strong></td>
          <td><code>?:</code></td>
          <td><code>a ? b : c</code></td>
        </tr>

        <tr>
          <td><strong>10</strong></td>
          <td>Assignment operators</td>
          <td><code>a = b</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Associativity</h2>

  <p>
    When two operators have the same precedence, <strong>associativity</strong>
    determines the direction in which they are evaluated.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Multiplication and division have the same precedence and are generally
      evaluated from <strong>left to right</strong>.
    </p>

    <p>
      <strong>20 / 5 * 2</strong>
      → first <strong>20 / 5 = 4</strong>
      → then <strong>4 * 2 = 8</strong>
    </p>

  </div>


  <h2>Using Parentheses</h2>

  <p>
    Parentheses can be used to explicitly control the order of evaluation
    in an expression.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Expression</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>2 + 3 * 4</code></td>
          <td><strong>14</strong></td>
        </tr>

        <tr>
          <td><code>(2 + 3) * 4</code></td>
          <td><strong>20</strong></td>
        </tr>

      </tbody>

    </table>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      🧠 Easy Rule to Remember
    </span>

    <p>
      <strong>
        Parentheses → Increment/Decrement → Multiplication/Division →
        Addition/Subtraction → Relational → Logical → Conditional →
        Assignment
      </strong>
    </p>

  </div>


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
          <td><strong>Arithmetic</strong></td>
          <td>Performs mathematical calculations.</td>
        </tr>

        <tr>
          <td><strong>Relational</strong></td>
          <td>Compares values.</td>
        </tr>

        <tr>
          <td><strong>Logical</strong></td>
          <td>Combines conditions.</td>
        </tr>

        <tr>
          <td><strong>Assignment</strong></td>
          <td>Assigns or updates values.</td>
        </tr>

        <tr>
          <td><strong>++ / --</strong></td>
          <td>Increase or decrease by 1.</td>
        </tr>

        <tr>
          <td><strong>Conditional</strong></td>
          <td>Short form of simple if-else selection.</td>
        </tr>

        <tr>
          <td><strong>Precedence</strong></td>
          <td>Determines which operator is evaluated first.</td>
        </tr>

        <tr>
          <td><strong>Associativity</strong></td>
          <td>Determines evaluation direction for equal precedence.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an operator in C?</li>

    <li>Write the different types of operators in C.</li>

    <li>What are arithmetic operators?</li>

    <li>What are relational operators?</li>

    <li>What are logical operators?</li>

    <li>What is the use of the assignment operator?</li>

    <li>What are increment and decrement operators?</li>

    <li>What is operator precedence?</li>

    <li>What is associativity?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the different types of operators in C with suitable examples.
    </li>

    <li>
      Explain operator precedence and associativity with suitable examples.
    </li>

    <li>
      Evaluate suitable C expressions using the rules of operator precedence.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of C operators,
        precedence and associativity.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=C+operators+precedence+associativity+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: C Operators & Precedence — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for C operators
        and precedence will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of C operator categories
        and precedence.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 7
// TYPE CONVERSION
// ============================================================

NOTES["m2-type-conversion"] = [
  `

  <h2>Type Conversion</h2>

  <p>
    <strong>Type conversion</strong> is the process of converting a value
    from one data type to another data type. It is useful when different
    data types are used together in an expression.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      An integer value can be converted into a floating-point value:
      <code>int a = 10;</code> → <code>10.0</code>
    </p>

  </div>


  <h2>Types of Type Conversion</h2>

  <p>
    Type conversion in C is commonly understood in two ways:
    <strong>Implicit Type Conversion</strong> and
    <strong>Explicit Type Conversion</strong>.
  </p>


  <h2>1. Implicit Type Conversion</h2>

  <p>
    <strong>Implicit type conversion</strong> happens automatically by
    the compiler when values of different data types are used together.
    The programmer does not explicitly specify the conversion.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int a = 10;
float b = 2.5;

float result = a + b;
    </div>

    <p>
      Here, <code>a</code> is automatically converted to a floating-point
      value before the addition, so the result can be stored in
      <code>float</code>.
    </p>

  </div>


  <h2>2. Explicit Type Conversion (Type Casting)</h2>

  <p>
    <strong>Explicit type conversion</strong> is performed when the
    programmer deliberately converts a value into another data type
    using a type cast.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int a = 5;
int b = 2;

float result = (float)a / b;
    </div>

    <p>
      Here, <code>(float)a</code> explicitly converts <code>a</code>
      into a floating-point value, so the division produces
      <code>2.5</code>.
    </p>

  </div>


  <h2>Type Casting Syntax</h2>

  <p>
    The basic syntax for explicit type casting is:
  </p>

  <div class="note-flow">
(data_type) expression
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>float x = (float)10;</code>
    </p>

    <p>
      The integer value <code>10</code> is explicitly converted to
      <code>float</code>.
    </p>

  </div>


  <h2>Why is Type Conversion Needed?</h2>

  <p>
    Type conversion is needed when different types of values must be
    used together or when the result is required in a particular data type.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int total = 5;
int count = 2;

float average = (float)total / count;
    </div>

    <p>
      Type casting is used here so that the average is calculated as
      <code>2.5</code> instead of integer division giving <code>2</code>.
    </p>

  </div>


  <h2>Implicit vs Explicit Conversion</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>Implicit</th>
          <th>Explicit</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Performed by</strong></td>
          <td>Compiler</td>
          <td>Programmer</td>
        </tr>

        <tr>
          <td><strong>Specified by programmer?</strong></td>
          <td>No</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td><strong>Syntax</strong></td>
          <td>No special syntax required</td>
          <td><code>(data_type)</code></td>
        </tr>

        <tr>
          <td><strong>Example</strong></td>
          <td><code>float x = 10;</code></td>
          <td><code>float x = (float)10;</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Example: Integer Division</h2>

  <p>
    When two integer operands are divided using <code>/</code>,
    the result is an integer. The fractional part is not retained.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int a = 5;
int b = 2;

int result = a / b;
    </div>

    <p>
      Output:
      <strong>2</strong>
    </p>

  </div>


  <h2>Using Type Casting in Division</h2>

  <p>
    To obtain a decimal result, one operand can be explicitly converted
    to <code>float</code>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int a = 5;
int b = 2;

float result = (float)a / b;
    </div>

    <p>
      Output:
      <strong>2.5</strong>
    </p>

  </div>


  <h2>Possible Loss of Data</h2>

  <p>
    When a value is converted from a data type that can represent more
    information to one that can represent less information, some data
    may be lost.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
float x = 10.75;
int y = (int)x;
    </div>

    <p>
      The fractional part is not retained, so <code>y</code> becomes
      <strong>10</strong>.
    </p>

  </div>


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
          <td><strong>Type Conversion</strong></td>
          <td>Changing a value from one data type to another.</td>
        </tr>

        <tr>
          <td><strong>Implicit</strong></td>
          <td>Conversion performed automatically.</td>
        </tr>

        <tr>
          <td><strong>Explicit</strong></td>
          <td>Conversion performed by the programmer.</td>
        </tr>

        <tr>
          <td><strong>Type Casting</strong></td>
          <td>Explicit conversion using <code>(data_type)</code>.</td>
        </tr>

        <tr>
          <td><strong>Integer Division</strong></td>
          <td>Integer ÷ Integer gives an integer result.</td>
        </tr>

        <tr>
          <td><strong>Data Loss</strong></td>
          <td>Can occur when converting to a less precise type.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is type conversion in C?</li>

    <li>What is implicit type conversion?</li>

    <li>What is explicit type conversion?</li>

    <li>What is type casting?</li>

    <li>Write the syntax of type casting in C.</li>

    <li>What is the difference between implicit and explicit conversion?</li>

    <li>Why is type casting useful in integer division?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain implicit and explicit type conversion with suitable examples.
    </li>

    <li>
      Explain type casting in C with suitable examples.
    </li>

    <li>
      Explain integer division and show how type casting can be used
      to obtain a decimal result.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of implicit and explicit
        type conversion in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=type+conversion+type+casting+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Type Conversion in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for type conversion
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of implicit and explicit
        type conversion.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 8
// CONTROL STRUCTURES: if
// ============================================================

NOTES["m2-if"] = [
  `

  <h2>Control Structure: if</h2>

  <p>
    The <strong>if statement</strong> is a decision-making control
    structure in C. It executes a block of statements only when the
    given condition is true.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int age = 20;

if (age >= 18)
    printf("Eligible");
    </div>

    <p>
      Here, the message is displayed because the condition
      <code>age &gt;= 18</code> is true.
    </p>

  </div>


  <h2>Syntax of if Statement</h2>

  <div class="note-flow">
if (condition)
{
    statement;
}
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Key Point
    </span>

    <p>
      If the condition is <strong>true</strong>, the statements inside
      the <code>if</code> block execute. If the condition is false,
      the block is skipped.
    </p>

  </div>


  <h2>How if Works</h2>

  <div class="note-flow">
Condition
    ↓
TRUE  →  Execute if block
    ↓
Continue program

FALSE → Skip if block
    ↓
Continue program
  </div>


  <h2>Real-World Example</h2>

  <p>
    A system may check a condition before performing an action.
    For example, a college portal can display a message when a
    student's attendance is at least 75%.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>if (attendance &gt;= 75)</code> → display
      <strong>"Eligible for exam"</strong>.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that accepts a student's attendance percentage
    and displays a message if the attendance is 75% or above.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the basic use of the <code>if</code> statement.</li>

    <li>Use a relational operator in a condition.</li>

    <li>Execute a statement only when the condition is true.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Check whether the attendance is greater than or equal to 75
    using the <code>&gt;=</code> operator.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>if</code> statement evaluates a condition and executes
    its block only when the condition is true. If the condition is
    false, the program skips the block and continues with the next
    statement.
  </p>


  <h3>Program</h3>

  <div class="program-code notranslate">
#include &lt;stdio.h&gt;

int main()
{
    float attendance;

    printf("Enter attendance percentage: ");
    scanf("%f", &amp;attendance);

    // check whether attendance meets the required percentage
    if (attendance &gt;= 75)
        printf("Eligible for exam.\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter attendance percentage: 82
    </p>

    <p>
      Eligible for exam.
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The <code>if</code> statement does not provide an alternative block
    when the condition is false. If an alternative action is required,
    the <code>if-else</code> statement is used.
  </p>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an if statement in C?</li>

    <li>Write the syntax of the if statement.</li>

    <li>What happens when the condition of an if statement is false?</li>

    <li>Which operators can be used in an if condition?</li>

    <li>Write a simple example of an if statement.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the if statement in C with syntax and example.
    </li>

    <li>
      Write a C program using if to check whether a student is eligible
      for an examination based on attendance.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the if statement
        in C programming.
      </p>

      <p>

        <a
          href="https://www.youtube.com/results?search_query=if+statement+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: if Statement in C — Hindi
        </a>

      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the if statement
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of the if statement,
        condition and execution flow.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 9
// CONTROL STRUCTURES: if-else
// ============================================================

NOTES["m2-if-else"] = [
  `

  <h2>Control Structure: if-else</h2>

  <p>
    The <strong>if-else statement</strong> is a decision-making control
    structure in C. It executes one block of statements when a condition
    is true and another block when the condition is false.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
if (marks >= 40)
    printf("Pass");
else
    printf("Fail");
    </div>

    <p>
      If <code>marks</code> are 40 or more, the program displays
      <strong>Pass</strong>; otherwise, it displays <strong>Fail</strong>.
    </p>

  </div>


  <h2>Syntax of if-else</h2>

  <div class="note-flow">
if (condition)
{
    statement;
}
else
{
    statement;
}
  </div>


  <h2>How if-else Works</h2>

  <div class="note-flow">
Condition
    ↓
TRUE  →  Execute if block
    ↓
Continue

FALSE →  Execute else block
    ↓
Continue
  </div>


  <h2>Real-World Example</h2>

  <p>
    A college result system can check whether a student has passed or failed
    based on the marks obtained.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>marks &gt;= 40</code> → <strong>Pass</strong>
    </p>

    <p>
      Otherwise → <strong>Fail</strong>
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that accepts a student's marks and displays
    whether the student has passed or failed. A student is considered
    passed if the marks are 40 or above.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the working of the if-else statement.</li>

    <li>Use a relational operator to create a condition.</li>

    <li>Handle two mutually exclusive outcomes.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Use <code>marks &gt;= 40</code> as the condition.
    Display <strong>Pass</strong> when it is true and
    <strong>Fail</strong> otherwise.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>if-else</code> statement provides two possible execution
    paths. If the condition is true, the <code>if</code> block executes;
    otherwise, the <code>else</code> block executes.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    // check whether the student has passed
    if (marks &gt;= 40)
        printf("Pass.\n");
    else
        printf("Fail.\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter marks: 72
    </p>

    <p>
      Pass.
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The <code>else</code> block executes only when the condition in the
    <code>if</code> statement is false. The two branches provide
    alternative outcomes for the same condition.
  </p>


  <h2>Difference Between if and if-else</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>if</th>
          <th>if-else</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Provides one decision path.</td>
          <td>Provides two alternative paths.</td>
        </tr>

        <tr>
          <td>Executes a block only when condition is true.</td>
          <td>Executes one of the two blocks.</td>
        </tr>

        <tr>
          <td>No alternative block is required.</td>
          <td>Contains an <code>else</code> block.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>if → condition true</strong>
    </p>

    <p>
      <strong>if-else → condition true OR condition false</strong>
    </p>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an if-else statement in C?</li>

    <li>Write the syntax of if-else.</li>

    <li>What happens when the if condition is false?</li>

    <li>What is the purpose of the else block?</li>

    <li>Write one example of an if-else statement.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the if-else statement with syntax and suitable example.
    </li>

    <li>
      Write a C program to check whether a student has passed or failed
      using if-else.
    </li>

    <li>
      Differentiate between if and if-else statements.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the if-else statement
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=if+else+statement+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: if-else in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for if-else
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of condition,
        if branch and else branch.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 9
// CONTROL STRUCTURES: if-else
// ============================================================

NOTES["m2-if-else"] = [
  `

  <h2>Control Structure: if-else</h2>

  <p>
    The <strong>if-else statement</strong> is a decision-making control
    structure in C. It executes one block of statements when a condition
    is true and another block when the condition is false.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
if (marks >= 40)
    printf("Pass");
else
    printf("Fail");
    </div>

    <p>
      If <code>marks</code> are 40 or more, the program displays
      <strong>Pass</strong>; otherwise, it displays <strong>Fail</strong>.
    </p>

  </div>


  <h2>Syntax of if-else</h2>

  <div class="note-flow">
if (condition)
{
    statement;
}
else
{
    statement;
}
  </div>


  <h2>How if-else Works</h2>

  <div class="note-flow">
Condition
    ↓
TRUE  →  Execute if block
    ↓
Continue

FALSE →  Execute else block
    ↓
Continue
  </div>


  <h2>Real-World Example</h2>

  <p>
    A college result system can check whether a student has passed or failed
    based on the marks obtained.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>marks &gt;= 40</code> → <strong>Pass</strong>
    </p>

    <p>
      Otherwise → <strong>Fail</strong>
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that accepts a student's marks and displays
    whether the student has passed or failed. A student is considered
    passed if the marks are 40 or above.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the working of the if-else statement.</li>

    <li>Use a relational operator to create a condition.</li>

    <li>Handle two mutually exclusive outcomes.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Use <code>marks &gt;= 40</code> as the condition.
    Display <strong>Pass</strong> when it is true and
    <strong>Fail</strong> otherwise.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>if-else</code> statement provides two possible execution
    paths. If the condition is true, the <code>if</code> block executes;
    otherwise, the <code>else</code> block executes.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    // check whether the student has passed
    if (marks &gt;= 40)
        printf("Pass.\n");
    else
        printf("Fail.\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter marks: 72
    </p>

    <p>
      Pass.
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The <code>else</code> block executes only when the condition in the
    <code>if</code> statement is false. The two branches provide
    alternative outcomes for the same condition.
  </p>


  <h2>Difference Between if and if-else</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>if</th>
          <th>if-else</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Provides one decision path.</td>
          <td>Provides two alternative paths.</td>
        </tr>

        <tr>
          <td>Executes a block only when condition is true.</td>
          <td>Executes one of the two blocks.</td>
        </tr>

        <tr>
          <td>No alternative block is required.</td>
          <td>Contains an <code>else</code> block.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>if → condition true</strong>
    </p>

    <p>
      <strong>if-else → condition true OR condition false</strong>
    </p>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an if-else statement in C?</li>

    <li>Write the syntax of if-else.</li>

    <li>What happens when the if condition is false?</li>

    <li>What is the purpose of the else block?</li>

    <li>Write one example of an if-else statement.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the if-else statement with syntax and suitable example.
    </li>

    <li>
      Write a C program to check whether a student has passed or failed
      using if-else.
    </li>

    <li>
      Differentiate between if and if-else statements.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the if-else statement
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=if+else+statement+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: if-else in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for if-else
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of condition,
        if branch and else branch.
      </p>

    </div>

  </div>

  `
];
NOTES["m2-nested-if"] = [
  `
  <h2>Nested if Statement in C</h2>

  <p>
    <strong>Definition:</strong> A nested <strong>if</strong> statement is
    an <strong>if statement placed inside another if statement</strong>.
    It is used when a second condition needs to be checked only after the
    first condition is true.
  </p>

  <div class="simple-box">
    💡 <strong>In simple words:</strong>
    First, C checks the outer <strong>if</strong> condition. If it is true,
    the inner <strong>if</strong> condition is checked.
  </div>

  <h3>Syntax</h3>

  <pre class="program-code"><code>if (condition1)
{
    if (condition2)
    {
        // statements
    }
}</code></pre>

  <h3>How Nested if Works</h3>

  <p>
    In a nested <strong>if</strong>, one condition is placed inside another
    condition. The inner condition is checked only when the outer condition
    is true.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    Suppose we want to check whether a student has passed and then check
    whether the student has scored more than 75 marks.
  </div>

  <h3>Example</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int marks = 80;

    if (marks &gt;= 40)
    {
        if (marks &gt;= 75)
        {
            printf("Student passed with distinction.");
        }
    }

    return 0;
}</code></pre>

  <h3>Output</h3>

  <pre class="output-box">Student passed with distinction.</pre>

  <h3>Nested if for Multiple Conditions</h3>

  <p>
    Nested <strong>if</strong> statements can be used when more than one
    condition must be checked step by step.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    To find the largest among three numbers, first compare the first two
    numbers. Then compare the larger number with the third number.
  </div>

  <h3>Practical Example — Largest of Three Numbers</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int a, b, c, largest;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &amp;a, &amp;b, &amp;c);

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

    printf("Largest number = %d", largest);

    return 0;
}</code></pre>

  <h3>Output</h3>

  <pre class="output-box">Enter three numbers: 25 40 15
Largest number = 40</pre>
  `,

  `
  <h2>Important Points — Nested if</h2>

  <ul>
    <li>A nested <strong>if</strong> means an <strong>if statement inside another if statement</strong>.</li>
    <li>The inner <strong>if</strong> is checked only when the outer condition is true.</li>
    <li>Nested <strong>if</strong> is useful for checking conditions in a step-by-step manner.</li>
    <li>Multiple levels of nested <strong>if</strong> statements can be used when required.</li>
    <li>Proper indentation should be used to make nested conditions easy to understand.</li>
  </ul>

  <h3>Nested if vs if-else</h3>

<div class="note-table-wrap">

  <table class="note-table">

    <thead>
      <tr>
        <th>Nested if</th>
        <th>if-else</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>An if statement is placed inside another if statement.</td>
        <td>Provides two alternative paths based on a condition.</td>
      </tr>

      <tr>
        <td>Useful for dependent or step-by-step conditions.</td>
        <td>Useful when one of two alternatives must be selected.</td>
      </tr>

      <tr>
        <td>Inner condition depends on the outer condition.</td>
        <td>The else block executes when the if condition is false.</td>
      </tr>

    </tbody>

  </table>

</div>

  <h3>Exam Tip</h3>

  <div class="simple-box">
    🎯 <strong>Remember:</strong>
    In nested <strong>if</strong>, the inner condition does not execute
    independently. The program reaches the inner <strong>if</strong> only
    when the outer <strong>if</strong> condition is satisfied.
  </div>

  <h3>Quick Revision</h3>

  <p>
    <strong>Nested if → Outer condition → Inner condition → Statement</strong>
  </p>
  `
];
// ============================================================
// MODULE 2 — TOPIC 11
// CONTROL STRUCTURES: SWITCH-CASE
// ============================================================

NOTES["m2-switch-case"] = [
  `
  <h2>Control Structure: switch-case</h2>

  <p>
    <strong>Definition:</strong> The <code>switch-case</code> statement
    is a decision-making control structure used to select one block of
    statements from multiple possible choices based on the value of an
    expression.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A program can use <code>switch-case</code> to display a day name
    based on a number from <strong>1 to 7</strong>.
  </div>

  <h3>Syntax</h3>

  <pre class="program-code"><code>switch (expression)
{
    case value1:
        statement;
        break;

    case value2:
        statement;
        break;

    default:
        statement;
}</code></pre>


  <h3>Important Parts</h3>

  <p>
    <strong>case:</strong> Defines one possible value to compare with
    the switch expression.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>case 1:</code> can represent Monday when the input is 1.
  </div>

  <p>
    <strong>break:</strong> Ends the current case and prevents execution
    from continuing into the next case.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    After displaying Monday, <code>break;</code> stops the switch
    from executing the next case.
  </div>

  <p>
    <strong>default:</strong> Executes when none of the specified case
    values match the expression.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    An input such as <strong>9</strong> does not match cases 1 to 7,
    so the <code>default</code> block executes.
  </div>


  <h3>How switch-case Works</h3>

  <div class="note-flow">
Expression
    ↓
Compare with case values
    ↓
Matching case executes
    ↓
break
    ↓
Switch ends
  </div>


  <h2>Real-World Example</h2>

  <p>
    A menu-driven application can use <code>switch-case</code> when
    the user has to choose one option from a fixed list of choices.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <strong>1 → Add</strong>,
    <strong>2 → Subtract</strong>,
    <strong>3 → Multiply</strong>.
  </div>


  <h2>Practical Example — Displaying the Day of the Week</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that accepts a number from 1 to 7 and displays
    the corresponding day of the week using <code>switch-case</code>.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use the <code>switch-case</code> construct to select among several fixed outcomes.</li>
    <li>Understand the use of the <code>break</code> statement.</li>
    <li>Use <code>default</code> to handle invalid input.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Map <strong>1 to Monday</strong>, <strong>2 to Tuesday</strong>,
    and so on up to <strong>7 to Sunday</strong>. Use
    <code>default</code> for values outside this range.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>switch</code> statement compares one expression with a
    list of constant case values and executes the matching case.
    The <code>break</code> statement ends the case, while
    <code>default</code> handles values that do not match any case.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int day;

    printf("Enter a number (1-7): ");
    scanf("%d", &amp;day);

    // match the input number to the corresponding day
    switch (day)
    {
        case 1:
            printf("Monday\n");
            break;

        case 2:
            printf("Tuesday\n");
            break;

        case 3:
            printf("Wednesday\n");
            break;

        case 4:
            printf("Thursday\n");
            break;

        case 5:
            printf("Friday\n");
            break;

        case 6:
            printf("Saturday\n");
            break;

        case 7:
            printf("Sunday\n");
            break;

        default:
            printf("Invalid input\n");
    }

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter a number (1-7): 3
Wednesday</pre>


  <h3>Note</h3>

  <p>
    Forgetting <code>break</code> can cause <strong>fall-through</strong>,
    where execution continues into the next case. The
    <code>default</code> case is useful for handling invalid input.
  </p>


  <h2>switch-case vs if-else</h2>

  <table class="notes-table">
    <thead>
      <tr>
        <th>switch-case</th>
        <th>if-else</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Useful when one expression is compared with fixed values.</td>
        <td>Useful for conditions and ranges.</td>
      </tr>

      <tr>
        <td>Uses <code>case</code>, <code>break</code> and <code>default</code>.</td>
        <td>Uses <code>if</code>, <code>else if</code> and <code>else</code>.</td>
      </tr>

      <tr>
        <td>Good for menu-driven choices.</td>
        <td>Good for relational and logical conditions.</td>
      </tr>
    </tbody>
  </table>


  <h2>Quick Revision</h2>

  <div class="simple-box">
    🎯 <strong>Remember:</strong><br><br>
    <strong>switch</strong> → checks the expression<br>
    <strong>case</strong> → represents a possible value<br>
    <strong>break</strong> → exits the current case<br>
    <strong>default</strong> → handles unmatched values
  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a switch-case statement in C?</li>
    <li>Write the syntax of switch-case.</li>
    <li>What is the purpose of the case statement?</li>
    <li>What is the use of break in switch-case?</li>
    <li>What is the purpose of default?</li>
    <li>What is fall-through in switch-case?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain the switch-case statement with syntax and suitable example.
    </li>

    <li>
      Write a C program using switch-case to display the day of the week.
    </li>

    <li>
      Explain the role of case, break and default in switch-case.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of switch-case in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=switch+case+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: switch-case in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for switch-case
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of switch, case, break
        and default.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 12
// CONTROL STRUCTURES: WHILE LOOP
// ============================================================

NOTES["m2-while"] = [
  `
  <h2>While Loop in C</h2>

  <p>
    <strong>Definition:</strong> The <code>while</code> loop is an
    <strong>entry-controlled loop</strong> that repeatedly executes a
    block of statements as long as the given condition remains true.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>i &lt;= 5</code>, the loop can print the numbers from
    1 to 5. The condition is checked before every iteration.
  </div>


  <h3>Syntax</h3>

  <pre class="program-code"><code>while (condition)
{
    statements;
}</code></pre>


  <h3>How while Loop Works</h3>

  <div class="note-flow">
Initialize variable
        ↓
Check condition
        ↓
Condition TRUE?
   ↓              ↓
  Yes             No
   ↓              ↓
Execute body    Exit loop
   ↓
Update variable
   ↓
Check condition again
  </div>


  <h3>Example</h3>

  <p>
    To print numbers from 1 to 5, initialize <code>i</code> to 1 and
    continue the loop while <code>i &lt;= 5</code>.
  </p>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    while (i &lt;= 5)
    {
        printf("%d ", i);
        i++;                // move to the next number
    }

    return 0;
}</code></pre>


  <h3>Output</h3>

  <pre class="output-box">1 2 3 4 5</pre>


  <h2>Why is while Called an Entry-Controlled Loop?</h2>

  <p>
    A <code>while</code> loop checks its condition <strong>before</strong>
    executing the loop body. Therefore, if the condition is false at the
    beginning, the loop body will not execute.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>i = 10</code> and the condition is
    <code>i &lt;= 5</code>, the condition is false initially, so nothing
    inside the loop is executed.
  </div>


  <h2>Real-World Example</h2>

  <p>
    A program may continue asking for information while a particular
    condition is true. For example, a system can keep processing items
    while items are still available.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <strong>While balance is greater than 0 → continue processing.</strong>
  </div>


  <h2>Practical Example — Printing Numbers from 1 to N</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to print all integers from <strong>1 to N</strong>
    using a <code>while</code> loop.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the use of the <code>while</code> loop.</li>
    <li>Initialize and update a loop counter correctly.</li>
    <li>Understand entry-controlled loop execution.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Initialize the counter to <code>1</code>, print it, and increment it
    until it becomes greater than <code>N</code>.
  </p>


  <h3>Theory</h3>

  <p>
    A <code>while</code> loop checks its condition before each iteration.
    If the condition is true, the loop body executes; otherwise, the loop
    ends.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, i = 1;          // i is the loop counter, starting at 1

    printf("Enter N: ");
    scanf("%d", &amp;n);

    while (i &lt;= n)       // repeat while i has not exceeded n
    {
        printf("%d ", i);
        i++;               // move to the next number
    }

    printf("\n");

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter N: 10
1 2 3 4 5 6 7 8 9 10</pre>


  <h3>Note</h3>

  <p>
    A common mistake is forgetting to update the loop variable.
    For example, forgetting <code>i++</code> can create an
    <strong>infinite loop</strong> because the condition may never become
    false.
  </p>


  <h2>while Loop vs if Statement</h2>
  <div class="note-table-wrap">

  <table class="note-table">

  
    <thead>
      <tr>
        <th>while</th>
        <th>if</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Used for repeated execution.</td>
        <td>Used for decision making.</td>
      </tr>

      <tr>
        <td>May execute many times.</td>
        <td>Normally executes at most once.</td>
      </tr>

      <tr>
        <td>Condition is checked before every iteration.</td>
        <td>Condition is checked once when the statement is reached.</td>
      </tr>
    </tbody>
  </table>


  <h2>Important Points for Exam</h2>

  <ul>
    <li><code>while</code> is an entry-controlled loop.</li>
    <li>The condition is checked before the loop body executes.</li>
    <li>The loop may execute zero or more times.</li>
    <li>The loop variable should be updated properly.</li>
    <li>Forgetting the update can cause an infinite loop.</li>
  </ul>


  <h2>Quick Revision</h2>

  <div class="simple-box">
    🎯 <strong>Remember:</strong><br><br>
    <strong>Initialize → Check → Execute → Update → Repeat</strong>
  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a while loop in C?</li>
    <li>Why is while called an entry-controlled loop?</li>
    <li>Write the syntax of a while loop.</li>
    <li>What happens if the while condition is false initially?</li>
    <li>What is an infinite loop?</li>
    <li>Write one example of a while loop.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain the while loop with syntax and suitable example.
    </li>

    <li>
      Write a C program to print numbers from 1 to N using a while loop.
    </li>

    <li>
      Explain how an entry-controlled loop works with the help of a
      while loop.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the while loop in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=while+loop+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: while Loop in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the while loop
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of initialization,
        condition, execution and update.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 13
// CONTROL STRUCTURES: DO-WHILE LOOP
// ============================================================

NOTES["m2-do-while"] = [
  `
  <h2>do-while Loop in C</h2>

  <p>
    <strong>Definition:</strong> The <code>do-while</code> loop is an
    <strong>exit-controlled loop</strong> in which the loop body executes
    first and the condition is checked afterward.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A program can ask the user to enter a number and continue asking
    until the user enters <strong>0</strong>.
  </div>


  <h3>Syntax</h3>

  <pre class="program-code"><code>do
{
    statements;
}
while (condition);</code></pre>


  <h3>How do-while Works</h3>

  <div class="note-flow">
Execute loop body
        ↓
Check condition
        ↓
Condition TRUE?
   ↓              ↓
  Yes             No
   ↓              ↓
Repeat          Exit loop
  </div>


  <h3>Example</h3>

  <p>
    The following program prints the value of <code>i</code> and increases
    it until <code>i</code> becomes greater than 5.
  </p>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    do
    {
        printf("%d ", i);
        i++;                // move to the next number
    }
    while (i &lt;= 5);

    return 0;
}</code></pre>


  <h3>Output</h3>

  <pre class="output-box">1 2 3 4 5</pre>


  <h2>Why is do-while Called an Exit-Controlled Loop?</h2>

  <p>
    The condition of a <code>do-while</code> loop is checked
    <strong>after</strong> the loop body executes. Therefore, the
    body always executes at least once.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    Even if the condition is initially false, the statements inside
    the <code>do</code> block are executed once before the condition
    is checked.
  </div>


  <h2>Real-World Example</h2>

  <p>
    A menu-driven program often needs to display the menu at least once
    before asking whether the user wants to continue.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <strong>Show menu → take choice → perform task → ask again.</strong>
  </div>


  <h2>Practical Example — Input Until Zero</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that repeatedly accepts numbers from the user
    and displays the entered number until the user enters
    <strong>0</strong>.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the working of the <code>do-while</code> loop.</li>
    <li>Use a sentinel value to terminate repeated input.</li>
    <li>Understand the difference between entry-controlled and
        exit-controlled loops.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Read a number inside the loop, display it when it is not zero,
    and continue while the number is not <code>0</code>.
  </p>


  <h3>Theory</h3>

  <p>
    A <code>do-while</code> loop executes its body first and checks
    the condition afterward. Therefore, the loop body is guaranteed
    to execute at least once.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int num;

    do
    {
        printf("Enter a number (0 to stop): ");
        scanf("%d", &amp;num);

        if (num != 0)              // 0 is the sentinel, so skip printing it
            printf("You entered: %d\n", num);

    } while (num != 0);             // condition is checked after the body

    printf("Loop terminated.\n");

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter a number (0 to stop): 5
You entered: 5
Enter a number (0 to stop): 8
You entered: 8
Enter a number (0 to stop): 0
Loop terminated.</pre>


  <h3>Note</h3>

  <p>
    Unlike a <code>while</code> loop, a <code>do-while</code> loop
    always executes its body at least once because the condition is
    checked after the body.
  </p>


  <h2>while vs do-while</h2>
  <div class="note-table-wrap">
  <table class="note-table">
    <thead>
      <tr>
        <th>while</th>
        <th>do-while</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Entry-controlled loop.</td>
        <td>Exit-controlled loop.</td>
      </tr>

      <tr>
        <td>Condition is checked before the body.</td>
        <td>Condition is checked after the body.</td>
      </tr>

      <tr>
        <td>May execute zero times.</td>
        <td>Executes at least once.</td>
      </tr>

      <tr>
        <td>Syntax starts with <code>while</code>.</td>
        <td>Syntax starts with <code>do</code> and ends with <code>while</code>.</td>
      </tr>
    </tbody>
  </table>
  </div>

  <h2>Important Points for Exam</h2>

  <ul>
    <li><code>do-while</code> is an exit-controlled loop.</li>
    <li>The loop body executes before the condition is checked.</li>
    <li>The body executes at least once.</li>
    <li>A semicolon is required after the <code>while(condition)</code>.</li>
    <li>It is useful for menus and input-driven programs.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>do → Execute First → Check Condition → Repeat or Exit</strong>
  </div>


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
        <td><strong>do-while</strong></td>
        <td>Exit-controlled loop.</td>
      </tr>

      <tr>
        <td><strong>First step</strong></td>
        <td>Execute the loop body.</td>
      </tr>

      <tr>
        <td><strong>Second step</strong></td>
        <td>Check the condition.</td>
      </tr>

      <tr>
        <td><strong>Minimum execution</strong></td>
        <td>At least once.</td>
      </tr>
    </tbody>
  </table>
  </div>

  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a do-while loop in C?</li>
    <li>Why is do-while called an exit-controlled loop?</li>
    <li>Write the syntax of a do-while loop.</li>
    <li>How is do-while different from while?</li>
    <li>Why does a do-while loop execute at least once?</li>
    <li>What is a sentinel value?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain the do-while loop with syntax and suitable example.
    </li>

    <li>
      Write a C program using do-while to accept numbers until
      the user enters 0.
    </li>

    <li>
      Differentiate between while and do-while loops.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the do-while loop in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=do+while+loop+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: do-while Loop in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the do-while loop
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of do, condition,
        repetition and exit.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 14
// CONTROL STRUCTURES: FOR LOOP
// ============================================================

NOTES["m2-for"] = [
  `
  <h2>For Loop in C</h2>

  <p>
    <strong>Definition:</strong> The <code>for</code> loop is a
    repetition control structure used to execute a block of statements
    repeatedly. It is especially useful when the number of iterations
    or the loop range is known in advance.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A <code>for</code> loop can be used to print numbers from
    <strong>1 to 5</strong>.
  </div>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 5; i++)
        printf("%d ", i);

    return 0;
}</code></pre>

  <h3>Output</h3>

  <pre class="output-box">1 2 3 4 5</pre>


  <h2>Syntax of for Loop</h2>

  <p>
    The <code>for</code> loop contains three important parts:
    <strong>initialization, condition and update</strong>.
  </p>

  <pre class="program-code"><code>for (initialization; condition; update)
{
    statements;
}</code></pre>


  <h3>Example</h3>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>for (i = 1; i &lt;= 5; i++)</code>:
    <br><br>
    <strong>Initialization:</strong> <code>i = 1</code><br>
    <strong>Condition:</strong> <code>i &lt;= 5</code><br>
    <strong>Update:</strong> <code>i++</code>
  </div>


  <h2>How for Loop Works</h2>

  <div class="note-flow">
Initialization
      ↓
Check Condition
      ↓
Condition TRUE?
   ↓          ↓
  Yes         No
   ↓           ↓
Execute Body  Exit Loop
   ↓
Update
   ↓
Check Condition Again
  </div>


  <h2>Real-World Example</h2>

  <p>
    A college application may need to process the records of a fixed
    number of students. A <code>for</code> loop can repeat the same
    operation for each student.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <strong>Process student 1 → student 2 → student 3 → ...</strong>
  </div>


  <h2>Practical Example — Sum of Natural Numbers</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to calculate the sum of natural numbers from
    <strong>1 to N</strong> using a <code>for</code> loop.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the use of a <code>for</code> loop.</li>
    <li>Use initialization, condition and update in one loop statement.</li>
    <li>Calculate a running total using a loop.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Initialize <code>sum</code> to 0 and use a <code>for</code> loop
    from <code>1</code> to <code>N</code>. Add each value to
    <code>sum</code>.
  </p>


  <h3>Theory</h3>

  <p>
    A <code>for</code> loop combines initialization, condition checking
    and updating in a compact structure. It is commonly used when the
    number of iterations is known or follows a fixed range.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int n, sum = 0;          // sum stores the running total

    printf("Enter N: ");
    scanf("%d", &amp;n);

    for (int i = 1; i &lt;= n; i++)   // i runs from 1 to n
        sum += i;                   // add the current value to sum

    printf("Sum of first %d natural numbers = %d\n", n, sum);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter N: 10
Sum of first 10 natural numbers = 55</pre>


  <h3>Note</h3>

  <p>
    A common mistake is using the wrong loop condition or forgetting
    the update expression. Make sure the loop variable moves toward
    the stopping condition.
  </p>


  <h2>for Loop vs while Loop</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>for</th>
          <th>while</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Initialization, condition and update are written together.</td>
          <td>Initialization and update are usually written separately.</td>
        </tr>

        <tr>
          <td>Useful when the loop range is known.</td>
          <td>Useful when repetition depends mainly on a condition.</td>
        </tr>

        <tr>
          <td>Compact loop structure.</td>
          <td>More flexible when the update logic is complex.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>The <code>for</code> loop is used for repeated execution.</li>
    <li>It contains initialization, condition and update.</li>
    <li>The condition is checked before each iteration.</li>
    <li>If the condition is false initially, the loop body does not execute.</li>
    <li>The update expression changes the loop variable after each iteration.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>Initialize → Check → Execute → Update → Repeat</strong>
  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><strong>Initialization</strong></td>
          <td>Sets the starting value.</td>
        </tr>

        <tr>
          <td><strong>Condition</strong></td>
          <td>Determines whether the loop continues.</td>
        </tr>

        <tr>
          <td><strong>Update</strong></td>
          <td>Changes the loop variable.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a for loop in C?</li>
    <li>Write the syntax of a for loop.</li>
    <li>What are the three parts of a for loop?</li>
    <li>What is the purpose of initialization?</li>
    <li>What is the purpose of the update expression?</li>
    <li>What happens if the condition is false initially?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain the for loop with syntax and suitable example.
    </li>

    <li>
      Write a C program to calculate the sum of natural numbers from
      1 to N using a for loop.
    </li>

    <li>
      Explain the three parts of a for loop with an example.
    </li>

    <li>
      Differentiate between for and while loops.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the for loop in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=for+loop+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: for Loop in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the for loop
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of initialization,
        condition, execution and update.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 15
// UNCONDITIONAL CONTROL STATEMENT: break
// ============================================================

NOTES["m2-break"] = [
  `
  <h2>break Statement in C</h2>

  <p>
    <strong>Definition:</strong> The <code>break</code> statement is used
    to immediately terminate the nearest loop or <code>switch-case</code>
    statement. Program execution continues with the statement that follows
    the terminated loop or switch.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If a loop contains <code>break</code> when <code>i == 5</code>,
    the loop stops immediately at 5 and does not continue further.
  </div>


  <h3>Syntax</h3>

  <pre class="program-code"><code>break;</code></pre>


  <h3>How break Works</h3>

  <div class="note-flow">
Loop starts
    ↓
Condition checked
    ↓
Statement executes
    ↓
break encountered?
   ↓          ↓
  Yes         No
   ↓           ↓
Exit loop    Continue loop
    ↓
Next statement
  </div>


  <h3>Example</h3>

  <p>
    In the following example, the loop is stopped when the value of
    <code>i</code> becomes 3.
  </p>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 5; i++)
    {
        if (i == 3)
            break;              // stop the loop when i becomes 3

        printf("%d ", i);
    }

    return 0;
}</code></pre>


  <h3>Output</h3>

  <pre class="output-box">1 2</pre>


  <h2>Why is break Used?</h2>

  <p>
    The <code>break</code> statement is used when the program needs to stop
    a loop immediately after a particular condition is satisfied.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    While searching for a student's roll number in a list, the search can
    stop as soon as the required roll number is found.
  </div>


  <h2>break with for Loop</h2>

  <p>
    When <code>break</code> is used inside a <code>for</code> loop,
    the loop terminates immediately. The remaining iterations are skipped.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If a loop is set to run from 1 to 10 but <code>break</code> executes
    at 6, values 6 to 10 are not processed.
  </div>


  <h2>break with while Loop</h2>

  <p>
    The <code>break</code> statement can also terminate a
    <code>while</code> loop when a required condition is met.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A program can keep reading numbers until it receives a particular
    value, then use <code>break</code> to stop the loop.
  </div>


  <h2>break with switch-case</h2>

  <p>
    In a <code>switch-case</code> statement, <code>break</code> is commonly
    used to terminate the current case and prevent execution from falling
    into the next case.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    After executing <code>case 1</code>, <code>break</code> exits the
    switch instead of continuing to <code>case 2</code>.
  </div>


  <h2>Practical Example — Stop When Number is Found</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to search for the number <strong>7</strong> from
    1 to 10. Stop the loop when the number 7 is reached using
    the <code>break</code> statement.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the purpose of the <code>break</code> statement.</li>
    <li>Terminate a loop before its normal condition becomes false.</li>
    <li>Use <code>break</code> with a conditional statement inside a loop.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Use a <code>for</code> loop from 1 to 10. When <code>i == 7</code>,
    use <code>break</code> to terminate the loop.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>break</code> statement immediately terminates the nearest
    loop when it is executed. Control then moves to the statement after
    the loop.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 10; i++)
    {
        if (i == 7)             // stop when 7 is reached
            break;

        printf("%d ", i);
    }

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">1 2 3 4 5 6</pre>


  <h3>Note</h3>

  <p>
    <code>break</code> terminates only the <strong>nearest loop or
    switch</strong> in which it appears. It does not simply skip the
    current iteration; it completely exits the loop.
  </p>


  <h2>break vs continue</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>break</th>
          <th>continue</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Terminates the loop completely.</td>
          <td>Skips the current iteration.</td>
        </tr>

        <tr>
          <td>Control moves outside the loop.</td>
          <td>Control moves to the next iteration.</td>
        </tr>

        <tr>
          <td>Used when no further repetition is required.</td>
          <td>Used when one particular iteration should be skipped.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li><code>break</code> immediately terminates the nearest loop or switch.</li>
    <li>It can be used inside <code>for</code>, <code>while</code> and <code>do-while</code> loops.</li>
    <li>It is also commonly used with <code>switch-case</code>.</li>
    <li>After <code>break</code>, control moves to the statement after the loop or switch.</li>
    <li><code>break</code> is different from <code>continue</code>.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>break = Stop the loop completely</strong>
  </div>


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
          <td><strong>Purpose</strong></td>
          <td>Terminate the nearest loop or switch.</td>
        </tr>

        <tr>
          <td><strong>Syntax</strong></td>
          <td><code>break;</code></td>
        </tr>

        <tr>
          <td><strong>Loops</strong></td>
          <td>for, while, do-while</td>
        </tr>

        <tr>
          <td><strong>switch-case</strong></td>
          <td>Prevents fall-through between cases.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a break statement in C?</li>
    <li>Write the syntax of break.</li>
    <li>What happens when break is executed inside a loop?</li>
    <li>Where can the break statement be used?</li>
    <li>What is the use of break in switch-case?</li>
    <li>Differentiate between break and continue.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain the break statement with syntax and suitable example.
    </li>

    <li>
      Write a C program that uses break to terminate a loop when
      a particular value is reached.
    </li>

    <li>
      Explain the use of break in loops and switch-case.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the break statement
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=break+statement+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: break Statement in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the break statement
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of break, loop termination
        and switch-case.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 2 — TOPIC 16
// UNCONDITIONAL CONTROL STATEMENT: continue
// ============================================================

NOTES["m2-continue"] = [
  `
  <h2>continue Statement in C</h2>

  <p>
    <strong>Definition:</strong> The <code>continue</code> statement is
    used to skip the remaining statements of the current iteration
    of a loop and move directly to the next iteration.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If a loop is printing numbers from 1 to 5 and <code>continue</code>
    is used when <code>i == 3</code>, the number 3 is skipped but
    the loop continues with 4 and 5.
  </div>


  <h3>Syntax</h3>

  <pre class="program-code"><code>continue;</code></pre>


  <h3>How continue Works</h3>

  <div class="note-flow">
Loop starts
    ↓
Condition checked
    ↓
Execute statements
    ↓
continue encountered?
   ↓          ↓
  Yes         No
   ↓           ↓
Skip remaining
statements
   ↓
Next iteration
  </div>


  <h3>Example</h3>

  <p>
    In the following program, the value 3 is skipped using the
    <code>continue</code> statement.
  </p>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 5; i++)
    {
        if (i == 3)
            continue;           // skip the current iteration

        printf("%d ", i);
    }

    return 0;
}</code></pre>


  <h3>Output</h3>

  <pre class="output-box">1 2 4 5</pre>


  <h2>Why is continue Used?</h2>

  <p>
    The <code>continue</code> statement is used when a particular
    iteration should be skipped but the loop should continue executing
    the remaining iterations.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    While processing student records, a program may skip a record
    that does not satisfy a particular condition and continue with
    the next student.
  </div>


  <h2>continue with for Loop</h2>

  <p>
    When <code>continue</code> is used inside a <code>for</code> loop,
    the remaining statements of the current iteration are skipped.
    Control then moves to the update expression before the next
    condition check.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In a loop from 1 to 10, if <code>continue</code> is executed
    when <code>i == 5</code>, the statements after <code>continue</code>
    are skipped for 5, but the loop continues with 6.
  </div>


  <h2>continue with while Loop</h2>

  <p>
    The <code>continue</code> statement can also be used inside a
    <code>while</code> loop to skip the current iteration and proceed
    with the next condition check.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A program reading several values can skip unwanted values and
    continue processing the remaining input.
  </div>


  <h2>Practical Example — Skip Even Numbers</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to print numbers from 1 to 10 while skipping
    all even numbers using the <code>continue</code> statement.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand the purpose of the <code>continue</code> statement.</li>
    <li>Skip a particular iteration without terminating the loop.</li>
    <li>Use <code>continue</code> with a conditional statement.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Use a <code>for</code> loop from 1 to 10. If the number is divisible
    by 2, use <code>continue</code> to skip that iteration.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>continue</code> statement skips the remaining statements
    of the current loop iteration. Unlike <code>break</code>, it does
    not terminate the loop.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int i;

    for (i = 1; i &lt;= 10; i++)
    {
        if (i % 2 == 0)          // check for even number
            continue;             // skip even numbers

        printf("%d ", i);
    }

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">1 3 5 7 9</pre>


  <h3>Note</h3>

  <p>
    The <code>continue</code> statement does not exit the loop.
    It only skips the current iteration. The loop continues with
    the next iteration.
  </p>


  <h2>break vs continue</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>break</th>
          <th>continue</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Terminates the loop completely.</td>
          <td>Skips only the current iteration.</td>
        </tr>

        <tr>
          <td>Control moves outside the loop.</td>
          <td>Control moves to the next iteration.</td>
        </tr>

        <tr>
          <td>Remaining iterations are not executed.</td>
          <td>Remaining iterations continue normally.</td>
        </tr>

        <tr>
          <td>Used when the loop must stop.</td>
          <td>Used when one iteration must be skipped.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li><code>continue</code> skips the current iteration.</li>
    <li>It does not terminate the loop completely.</li>
    <li>It can be used inside <code>for</code>, <code>while</code> and
        <code>do-while</code> loops.</li>
    <li>In a <code>for</code> loop, control moves to the update expression
        after <code>continue</code>.</li>
    <li><code>continue</code> is different from <code>break</code>.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>continue = Skip this iteration, continue the loop</strong>
  </div>


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
          <td><strong>Purpose</strong></td>
          <td>Skip the current iteration.</td>
        </tr>

        <tr>
          <td><strong>Syntax</strong></td>
          <td><code>continue;</code></td>
        </tr>

        <tr>
          <td><strong>Loop status</strong></td>
          <td>Loop continues.</td>
        </tr>

        <tr>
          <td><strong>Difference from break</strong></td>
          <td>break exits; continue skips.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a continue statement in C?</li>
    <li>Write the syntax of continue.</li>
    <li>What happens when continue is executed inside a loop?</li>
    <li>Does continue terminate a loop?</li>
    <li>Where can the continue statement be used?</li>
    <li>Differentiate between break and continue.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain the continue statement with syntax and suitable example.
    </li>

    <li>
      Write a C program to print numbers from 1 to 10 while skipping
      even numbers using continue.
    </li>

    <li>
      Explain the difference between break and continue with examples.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the continue statement
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=continue+statement+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: continue Statement in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the continue
        statement will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of continue, skipped
        iterations and loop continuation.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 1
// ARRAYS (1-D)
// ============================================================

NOTES["m3-arrays-1d"] = [
  `
  <h2>Arrays (1-D)</h2>

  <p>
    <strong>Definition:</strong> An array is a collection of elements
    of the <strong>same data type</strong> stored in
    <strong>contiguous memory locations</strong>. Each element is
    identified using an index.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int marks[5];</code>
    creates an array named <code>marks</code> that can store
    5 integer values.
  </div>


  <h2>Why Do We Need an Array?</h2>

  <p>
    Suppose we need to store the marks of five students. Without an
    array, we would need five separate variables.
  </p>

  <pre class="program-code"><code>int mark1 = 78;
int mark2 = 65;
int mark3 = 91;
int mark4 = 54;
int mark5 = 82;</code></pre>

  <p>
    An array allows us to store all these values using one variable name.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int marks[5];</code>
    can store all five marks using the single name <code>marks</code>.
  </div>


  <h2>What is a One-Dimensional Array?</h2>

  <p>
    <strong>Definition:</strong> A one-dimensional array is a linear
    collection of elements arranged in a single sequence. Each element
    is accessed using one index.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int marks[5] = {78, 65, 91, 54, 82};</code>
    stores five integer values in one-dimensional form.
  </div>


  <h2>Characteristics of an Array</h2>

  <ul>
    <li>All elements have the <strong>same data type</strong>.</li>
    <li>Elements are stored in a continuous sequence of memory locations.</li>
    <li>Each element is accessed using an <strong>index</strong>.</li>
    <li>Array indexing in C starts from <strong>0</strong>.</li>
    <li>The size of a normally declared fixed-size array is determined at declaration.</li>
  </ul>


  <h2>Array Declaration</h2>

  <p>
    <strong>Definition:</strong> Array declaration tells the compiler
    the data type, name and number of elements of the array.
  </p>

  <pre class="program-code"><code>data_type array_name[size];</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int marks[5];</code>
    declares an integer array named <code>marks</code> with 5 elements.
  </div>


  <h2>Array Initialization</h2>

  <p>
    <strong>Definition:</strong> Array initialization means assigning
    initial values to the array elements.
  </p>

  <pre class="program-code"><code>int marks[5] = {78, 65, 91, 54, 82};</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    Here the five elements are initialized with
    <strong>78, 65, 91, 54 and 82</strong>.
  </div>


  <h2>Declaration vs Initialization</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Declaration</th>
          <th>Initialization</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Creates/defines the array.</td>
          <td>Assigns initial values.</td>
        </tr>

        <tr>
          <td><code>int marks[5];</code></td>
          <td><code>int marks[5] = {78,65,91,54,82};</code></td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Array Size</h2>

  <p>
    <strong>Definition:</strong> The size of an array is the total number
    of elements it can store.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>int marks[5];</code>, the array size is
    <strong>5</strong>.
  </div>

  <p>
    Remember that <strong>array size and last index are different</strong>.
    For an array of size 5, the last valid index is 4.
  </p>


  <h2>Indexing in an Array</h2>

  <p>
    <strong>Definition:</strong> Indexing is the method of identifying
    and accessing individual elements of an array using their position.
    In C, array indexing starts from <strong>0</strong>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For <code>int marks[5]</code>, the valid indexes are
    <strong>0, 1, 2, 3 and 4</strong>.
  </div>


  <h2>Array with Indexes</h2>

  <pre class="program-code"><code>Array:    marks

Index:      0    1    2    3    4
            ↓    ↓    ↓    ↓    ↓

Value:     78   65   91   54   82</code></pre>

  <div class="simple-box">
    📌 <strong>Important:</strong>
    If an array contains <code>n</code> elements, its valid indexes are
    <strong>0 to n-1</strong>.
  </div>


  <h2>First and Last Index</h2>

  <p>
    <strong>Definition:</strong> In a one-dimensional array, the first
    element is always at index <code>0</code> and the last element is
    at index <code>size - 1</code>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For <code>int marks[5]</code>:<br><br>
    First index = <strong>0</strong><br>
    Last index = <strong>4</strong>
  </div>


  <h2>Accessing Array Elements</h2>

  <p>
    <strong>Definition:</strong> An individual array element is accessed
    by writing the array name followed by its index inside square brackets.
  </p>

  <pre class="program-code"><code>marks[0]
marks[1]
marks[2]</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>marks[0] = 78</code>, then <code>marks[0]</code>
    returns the first element, which is <strong>78</strong>.
  </div>


  <h2>Modifying an Array Element</h2>

  <p>
    <strong>Definition:</strong> An array element can be changed by
    assigning a new value to its index.
  </p>

  <pre class="program-code"><code>marks[2] = 95;</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If the third element was 91, the statement
    <code>marks[2] = 95;</code> changes it to <strong>95</strong>.
  </div>


  <h2>Traversing an Array</h2>

  <p>
    <strong>Definition:</strong> Traversing an array means visiting
    each element of the array one by one.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A <code>for</code> loop can be used to visit every element from
    index 0 to the last index.
  </div>

  <pre class="program-code"><code>for (int i = 0; i &lt; 5; i++)
{
    printf("%d ", marks[i]);
}</code></pre>


  <h2>Taking Array Input</h2>

  <p>
    <strong>Definition:</strong> Array elements can be read from the user
    one by one using a loop and <code>scanf()</code>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>scanf("%d", &amp;marks[i]);</code>
    stores the entered value at the current index.
  </div>


  <h2>Displaying Array Elements</h2>

  <p>
    <strong>Definition:</strong> Array elements can be displayed by
    accessing each index, usually with the help of a loop.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>printf("%d ", marks[i]);</code>
    displays the current array element.
  </div>


  <h2>Array and Memory</h2>

  <p>
    <strong>Definition:</strong> Array elements are stored in consecutive
    memory locations, which makes sequential access efficient.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If the first element is stored at one memory location, the next
    element is stored in the next appropriate memory location for that
    data type.
  </div>


  <h2>Array Initialization with Fewer Values</h2>

  <p>
    <strong>Definition:</strong> An array can be initialized with fewer
    values than its declared size. The remaining elements are initialized
    to zero when the array has static initialization in a declaration
    such as this.
  </p>

  <pre class="program-code"><code>int marks[5] = {78, 65};</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    The first two elements receive 78 and 65, while the remaining
    elements are initialized to <strong>0</strong> in this declaration.
  </div>


  <h2>Initializing All Elements with Zero</h2>

  <p>
    A simple way to initialize all elements of an array to zero is
    to provide the first element as zero and let the remaining elements
    be initialized to zero.
  </p>

  <pre class="program-code"><code>int marks[5] = {0};</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    The resulting array values are:
    <strong>0, 0, 0, 0, 0</strong>.
  </div>


  <h2>Array and Loop</h2>

  <p>
    Arrays and loops are commonly used together because a loop can
    process every element using its index.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    To print all five elements, the loop can run from
    <code>i = 0</code> to <code>i &lt; 5</code>.
  </div>


  <h2>Practical Example — Read and Display Array Elements</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept 5 integers from the user and display
    all the elements of the one-dimensional array.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Declare and initialize a one-dimensional array.</li>
    <li>Use a loop to accept array elements.</li>
    <li>Use indexes to access and display array elements.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Use an integer array of size 5. Use one <code>for</code> loop to
    read the elements and another loop to display them.
  </p>


  <h3>Theory</h3>

  <p>
    Array elements are accessed using indexes starting from 0.
    A loop provides a convenient way to process each element in sequence.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int marks[5];
    int i;

    printf("Enter 5 integers: ");

    // read each array element
    for (i = 0; i &lt; 5; i++)
        scanf("%d", &amp;marks[i]);

    printf("Array elements: ");

    // display each array element
    for (i = 0; i &lt; 5; i++)
        printf("%d ", marks[i]);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter 5 integers: 78 65 91 54 82
Array elements: 78 65 91 54 82</pre>


  <h3>Note</h3>

  <p>
    Remember that for an array of size 5, the indexes are only
    <code>0</code> through <code>4</code>. Accessing
    <code>marks[5]</code> is outside the valid range.
  </p>


  <h2>Array Index Out of Bounds</h2>

  <p>
    <strong>Definition:</strong> An out-of-bounds access occurs when a
    program tries to access an index outside the valid range of the array.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For <code>int marks[5]</code>, <code>marks[5]</code> is invalid
    because the last valid element is <code>marks[4]</code>.
  </div>


  <h2>Common Mistakes in Arrays</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Mistake</th>
          <th>Correct Understanding</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Starting index from 1</td>
          <td>C arrays start from index 0.</td>
        </tr>

        <tr>
          <td>Using size as last index</td>
          <td>Last valid index is size - 1.</td>
        </tr>

        <tr>
          <td>Using different data types in one array</td>
          <td>All elements normally have the same data type.</td>
        </tr>

        <tr>
          <td>Using an invalid index</td>
          <td>Use only valid indexes from 0 to size - 1.</td>
        </tr>

        <tr>
          <td>Wrong loop limit</td>
          <td>For size 5, use indexes 0 to 4.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Finding Sum of Array Elements</h2>

  <p>
    <strong>Definition:</strong> The sum of an array is obtained by adding
    all its elements together.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For <code>{10, 20, 30}</code>,
    sum = <strong>10 + 20 + 30 = 60</strong>.
  </div>

  <pre class="program-code"><code>int sum = 0;

for (int i = 0; i &lt; 3; i++)
    sum += arr[i];</code></pre>


  <h2>Finding Average of Array Elements</h2>

  <p>
    <strong>Definition:</strong> The average of array elements is the
    sum of all elements divided by the number of elements.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For <code>{10, 20, 30}</code>,
    average = <strong>60 / 3 = 20</strong>.
  </div>


  <h2>Finding Largest Element</h2>

  <p>
    <strong>Definition:</strong> The largest element is the element
    having the greatest value among all array elements.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>{12, 45, 23, 67}</code>, the largest element is
    <strong>67</strong>.
  </div>


  <h2>Finding Smallest Element</h2>

  <p>
    <strong>Definition:</strong> The smallest element is the element
    having the lowest value among all array elements.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>{12, 45, 23, 67}</code>, the smallest element is
    <strong>12</strong>.
  </div>


  <h2>Searching an Element</h2>

  <p>
    <strong>Definition:</strong> Searching an array means checking its
    elements to determine whether a particular value is present.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>{10, 25, 30, 45}</code>, searching for
    <strong>30</strong> finds the value at index <strong>2</strong>.
  </div>


  <h2>Practical Example — Find Sum and Average</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept 5 numbers in a one-dimensional array
    and calculate their sum and average.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Store multiple values in a one-dimensional array.</li>
    <li>Traverse an array using a loop.</li>
    <li>Calculate sum and average from array elements.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Initialize <code>sum</code> to 0. Add every array element to
    <code>sum</code>, then divide the sum by 5.0.
  </p>


  <h3>Theory</h3>

  <p>
    The sum of array elements can be calculated by traversing the array
    and adding each element to a running total. The average is obtained
    by dividing the total by the number of elements.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int arr[5];
    int i, sum = 0;
    float average;

    printf("Enter 5 numbers: ");

    // read array elements
    for (i = 0; i &lt; 5; i++)
        scanf("%d", &amp;arr[i]);

    // calculate the sum
    for (i = 0; i &lt; 5; i++)
        sum += arr[i];

    average = sum / 5.0;     // use 5.0 for floating-point division

    printf("Sum = %d\n", sum);
    printf("Average = %.2f\n", average);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter 5 numbers: 10 20 30 40 50
Sum = 150
Average = 30.00</pre>


  <h3>Note</h3>

  <p>
    When a fractional average is required, use a floating-point divisor
    such as <code>5.0</code> instead of <code>5</code> to avoid
    unintended integer division.
  </p>


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
          <td><strong>Array</strong></td>
          <td>Collection of same-type elements.</td>
        </tr>

        <tr>
          <td><strong>1-D Array</strong></td>
          <td>Linear collection using one index.</td>
        </tr>

        <tr>
          <td><strong>Indexing</strong></td>
          <td>Starts from 0 in C.</td>
        </tr>

        <tr>
          <td><strong>Last Index</strong></td>
          <td>size - 1</td>
        </tr>

        <tr>
          <td><strong>Access</strong></td>
          <td><code>array[index]</code></td>
        </tr>

        <tr>
          <td><strong>Traversal</strong></td>
          <td>Visit every element one by one.</td>
        </tr>

        <tr>
          <td><strong>Common Tool</strong></td>
          <td>Loops are commonly used with arrays.</td>
        </tr>

        <tr>
          <td><strong>Invalid Access</strong></td>
          <td>Index outside 0 to size - 1 is invalid.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is an array?</li>
    <li>What is a one-dimensional array?</li>
    <li>Why are arrays used in C?</li>
    <li>Write the syntax for declaring an array.</li>
    <li>What is array indexing?</li>
    <li>Why does array indexing start from 0 in C?</li>
    <li>What is the last valid index of an array of size 10?</li>
    <li>What is array traversal?</li>
    <li>What is an out-of-bounds array access?</li>
    <li>How are array elements accessed?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Define an array and explain one-dimensional arrays with examples.
    </li>

    <li>
      Explain array declaration, initialization and indexing in C.
    </li>

    <li>
      Explain how to access, modify and traverse a one-dimensional array.
    </li>

    <li>
      Write a C program to read and display elements of a one-dimensional array.
    </li>

    <li>
      Write a C program to find the sum and average of array elements.
    </li>

    <li>
      Explain common mistakes while working with one-dimensional arrays.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of one-dimensional arrays,
        indexing and traversal in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=1D+array+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: 1-D Arrays in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for one-dimensional
        arrays and indexing will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of declaration,
        initialization, indexing, traversal and basic array operations.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 2
// ARRAYS (2-D)
// ============================================================

NOTES["m3-arrays-2d"] = [
  `
  <h2>Two-Dimensional Arrays (2-D)</h2>

  <p>
    <strong>Definition:</strong> A two-dimensional array is an array
    arranged in the form of <strong>rows and columns</strong>.
    It is commonly used to represent tables and matrices.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int marks[3][4];</code>
    creates a 2-D integer array with <strong>3 rows</strong> and
    <strong>4 columns</strong>.
  </div>


  <h2>Real-World Example</h2>

  <p>
    A classroom marks table can be represented using a 2-D array,
    where rows represent students and columns represent subjects.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong><br><br>
    Row → Student<br>
    Column → Subject<br>
    Each cell → Marks of one student in one subject
  </div>


  <h2>2-D Array Representation</h2>

  <pre class="program-code"><code>        Column
          0    1    2
       ┌────┬────┬────┐
Row 0  │ 10 │ 20 │ 30 │
       ├────┼────┼────┤
Row 1  │ 40 │ 50 │ 60 │
       ├────┼────┼────┤
Row 2  │ 70 │ 80 │ 90 │
       └────┴────┴────┘</code></pre>

  <div class="simple-box">
    📌 <strong>Important:</strong>
    Like 1-D arrays, 2-D array indexes in C start from
    <strong>0</strong>.
  </div>


  <h2>Rows and Columns</h2>

  <p>
    <strong>Rows</strong> represent the horizontal entries of the array,
    while <strong>columns</strong> represent the vertical entries.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>int matrix[3][4]</code>:<br><br>
    Number of rows = <strong>3</strong><br>
    Number of columns = <strong>4</strong><br>
    Total elements = <strong>3 × 4 = 12</strong>
  </div>


  <h2>Declaration of 2-D Array</h2>

  <p>
    <strong>Definition:</strong> A 2-D array is declared by specifying
    the data type, array name, number of rows and number of columns.
  </p>

  <pre class="program-code"><code>data_type array_name[rows][columns];</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int matrix[2][3];</code>
    declares an integer array with 2 rows and 3 columns.
  </div>


  <h2>Initialization of 2-D Array</h2>

  <p>
    <strong>Definition:</strong> Initialization means assigning values
    to the elements of a 2-D array when it is declared.
  </p>

  <pre class="program-code"><code>int matrix[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    The first row contains <strong>10, 20, 30</strong> and the second
    row contains <strong>40, 50, 60</strong>.
  </div>


  <h2>Accessing 2-D Array Elements</h2>

  <p>
    <strong>Definition:</strong> An element of a 2-D array is accessed
    using two indexes: one for the row and one for the column.
  </p>

  <pre class="program-code"><code>array_name[row][column]</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For
    <code>int matrix[2][3] = {{10,20,30},{40,50,60}};</code><br><br>

    <code>matrix[0][0]</code> → <strong>10</strong><br>
    <code>matrix[0][2]</code> → <strong>30</strong><br>
    <code>matrix[1][1]</code> → <strong>50</strong>
  </div>


  <h2>2-D Array Indexing</h2>

  <pre class="program-code"><code>        Column Index
           0    1    2
        ┌────┬────┬────┐
Row 0   │ 10 │ 20 │ 30 │
        ├────┼────┼────┤
Row 1   │ 40 │ 50 │ 60 │
        └────┴────┴────┘

matrix[0][0] = 10
matrix[0][1] = 20
matrix[0][2] = 30

matrix[1][0] = 40
matrix[1][1] = 50
matrix[1][2] = 60</code></pre>


  <h2>Nested Loops and 2-D Arrays</h2>

  <p>
    A 2-D array is commonly processed using <strong>nested loops</strong>.
    The outer loop controls rows and the inner loop controls columns.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong><br><br>
    Outer loop → rows<br>
    Inner loop → columns
  </div>

  <pre class="program-code"><code>for (int i = 0; i &lt; rows; i++)
{
    for (int j = 0; j &lt; columns; j++)
    {
        printf("%d ", matrix[i][j]);
    }
}</code></pre>


  <h2>Taking Input in a 2-D Array</h2>

  <p>
    <strong>Definition:</strong> Input for a 2-D array can be taken
    element by element using nested loops.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>scanf("%d", &amp;matrix[i][j]);</code>
    stores the entered value at row <code>i</code> and column
    <code>j</code>.
  </div>


  <h2>Displaying a 2-D Array</h2>

  <p>
    <strong>Definition:</strong> A 2-D array can be displayed row by row
    by using nested loops.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    After printing each row, <code>printf("\n");</code> moves to the
    next row.
  </div>


  <h2>Practical Example — Read and Display a Matrix</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept a <strong>2 × 3 matrix</strong> from
    the user and display the matrix in row and column form.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Declare and use a two-dimensional array.</li>
    <li>Use nested loops to read matrix elements.</li>
    <li>Use row and column indexes to access array elements.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Use two nested loops. The outer loop should handle rows and the
    inner loop should handle columns.
  </p>


  <h3>Theory</h3>

  <p>
    A 2-D array stores data in rows and columns. Nested loops provide
    a convenient way to process every element of the matrix.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int matrix[2][3];
    int i, j;

    printf("Enter 6 elements: ");

    // read matrix elements row by row
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 3; j++)
            scanf("%d", &amp;matrix[i][j]);
    }

    printf("Matrix:\n");

    // display matrix row by row
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 3; j++)
            printf("%d ", matrix[i][j]);

        printf("\n");
    }

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter 6 elements: 10 20 30 40 50 60
Matrix:
10 20 30
40 50 60</pre>


  <h2>Modifying an Element</h2>

  <p>
    <strong>Definition:</strong> A particular element of a 2-D array
    can be changed by assigning a new value to its row and column index.
  </p>

  <pre class="program-code"><code>matrix[1][2] = 100;</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>matrix[1][2]</code> originally contains 60, the above
    statement changes it to <strong>100</strong>.
  </div>


  <h2>Traversing a 2-D Array</h2>

  <p>
    <strong>Definition:</strong> Traversing a 2-D array means visiting
    every element row by row and column by column.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For a 2 × 3 matrix, traversal visits:
    <strong>[0][0] → [0][1] → [0][2] → [1][0] → [1][1] → [1][2]</strong>
  </div>


  <h2>Matrix Addition</h2>

  <p>
    <strong>Definition:</strong> Matrix addition is performed by adding
    corresponding elements of two matrices having the same dimensions.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong><br><br>

    A = 1  2<br>
    &nbsp;&nbsp;&nbsp;&nbsp;3  4<br><br>

    B = 5  6<br>
    &nbsp;&nbsp;&nbsp;&nbsp;7  8<br><br>

    Result = 6  8<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 12
  </div>


  <h2>Practical Example — Addition of Two Matrices</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept two <strong>2 × 2 matrices</strong>
    and calculate their sum.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use two-dimensional arrays to represent matrices.</li>
    <li>Traverse matrices using nested loops.</li>
    <li>Add corresponding elements of two matrices.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Read both matrices using nested loops. Add corresponding elements
    and store the result in a third matrix.
  </p>


  <h3>Theory</h3>

  <p>
    Two matrices can be added when they have the same number of rows
    and columns. Each element of the first matrix is added to the
    element at the same position in the second matrix.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    int a[2][2], b[2][2], sum[2][2];
    int i, j;

    printf("Enter elements of first matrix: ");

    // read first matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
            scanf("%d", &amp;a[i][j]);
    }

    printf("Enter elements of second matrix: ");

    // read second matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
            scanf("%d", &amp;b[i][j]);
    }

    // add corresponding elements
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
            sum[i][j] = a[i][j] + b[i][j];
    }

    printf("Sum of matrices:\n");

    // display the result matrix
    for (i = 0; i &lt; 2; i++)
    {
        for (j = 0; j &lt; 2; j++)
            printf("%d ", sum[i][j]);

        printf("\n");
    }

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter elements of first matrix: 1 2 3 4
Enter elements of second matrix: 5 6 7 8
Sum of matrices:
6 8
10 12</pre>


  <h2>1-D Array vs 2-D Array</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>1-D Array</th>
          <th>2-D Array</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Uses one index.</td>
          <td>Uses two indexes.</td>
        </tr>

        <tr>
          <td>Usually represents a linear list.</td>
          <td>Usually represents rows and columns.</td>
        </tr>

        <tr>
          <td>Example: <code>int a[5];</code></td>
          <td>Example: <code>int a[3][4];</code></td>
        </tr>

        <tr>
          <td>Processed using one loop.</td>
          <td>Usually processed using nested loops.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Common Mistakes in 2-D Arrays</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Mistake</th>
          <th>Correct Understanding</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Starting indexes from 1</td>
          <td>Both row and column indexes start from 0.</td>
        </tr>

        <tr>
          <td>Using wrong row/column limit</td>
          <td>For <code>[3][4]</code>, rows are 0–2 and columns are 0–3.</td>
        </tr>

        <tr>
          <td>Using one loop only</td>
          <td>Nested loops are normally used for complete traversal.</td>
        </tr>

        <tr>
          <td>Confusing <code>matrix[i][j]</code></td>
          <td>First index represents row, second represents column.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>A 2-D array stores data in rows and columns.</li>
    <li>Two indexes are used to access an element.</li>
    <li>Both indexes start from 0 in C.</li>
    <li>Nested loops are commonly used to process a 2-D array.</li>
    <li>Matrix addition requires matrices of the same dimensions.</li>
    <li>For <code>matrix[rows][columns]</code>, valid row indexes are
        <code>0</code> to <code>rows - 1</code> and column indexes are
        <code>0</code> to <code>columns - 1</code>.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>Outer loop → Row</strong><br>
    <strong>Inner loop → Column</strong><br>
    <strong>matrix[row][column]</strong>
  </div>


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
          <td><strong>2-D Array</strong></td>
          <td>Data arranged in rows and columns.</td>
        </tr>

        <tr>
          <td><strong>Declaration</strong></td>
          <td><code>data_type name[rows][columns];</code></td>
        </tr>

        <tr>
          <td><strong>Access</strong></td>
          <td><code>array[row][column]</code></td>
        </tr>

        <tr>
          <td><strong>Indexing</strong></td>
          <td>Starts from 0 for both dimensions.</td>
        </tr>

        <tr>
          <td><strong>Traversal</strong></td>
          <td>Usually done with nested loops.</td>
        </tr>

        <tr>
          <td><strong>Matrix Addition</strong></td>
          <td>Add corresponding elements.</td>
        </tr>
      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a two-dimensional array?</li>
    <li>Write the syntax for declaring a 2-D array.</li>
    <li>How are elements of a 2-D array accessed?</li>
    <li>What are rows and columns in a 2-D array?</li>
    <li>Why are nested loops used with 2-D arrays?</li>
    <li>What is the last valid row index of an array declared as <code>int a[3][4]</code>?</li>
    <li>What is the last valid column index of an array declared as <code>int a[3][4]</code>?</li>
    <li>What is matrix addition?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Define a two-dimensional array and explain its declaration,
      initialization and indexing with examples.
    </li>

    <li>
      Explain how nested loops are used to input and display a 2-D array.
    </li>

    <li>
      Write a C program to read and display a 2 × 3 matrix.
    </li>

    <li>
      Write a C program to add two matrices.
    </li>

    <li>
      Differentiate between one-dimensional and two-dimensional arrays.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of 2-D arrays,
        rows, columns and matrix operations in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=2D+array+matrix+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: 2-D Arrays in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for 2-D arrays,
        indexing and matrix operations will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of rows, columns,
        indexing, traversal and matrix addition.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 3
// CHARACTER ARRAYS AND STRINGS
// ============================================================

NOTES["m3-character-arrays-strings"] = [
  `
  <h2>Character Arrays and Strings</h2>

  <p>
    <strong>Definition:</strong> A character array is an array whose
    elements are of type <code>char</code>. It can store individual
    characters and can also be used to store a string.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>char letters[5] = {'A', 'B', 'C', 'D', 'E'};</code>
    stores five characters in a character array.
  </div>


  <h2>What is a String?</h2>

  <p>
    <strong>Definition:</strong> A string in C is a sequence of characters
    terminated by a special character called the
    <strong>null character <code>\\0</code></strong>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    The string <strong>"HELLO"</strong> is stored as:
    <br><br>
    <code>'H' 'E' 'L' 'L' 'O' '\\0'</code>
  </div>


  <h2>Character Array vs String</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Character Array</th>
          <th>String</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Array of characters.</td>
          <td>Character sequence terminated by <code>\\0</code>.</td>
        </tr>

        <tr>
          <td>Need not contain <code>\\0</code>.</td>
          <td>Must end with <code>\\0</code> to be a C string.</td>
        </tr>

        <tr>
          <td>Example: <code>{'A','B','C'}</code></td>
          <td>Example: <code>"ABC"</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Null Character (\\0)</h2>

  <p>
    <strong>Definition:</strong> The null character <code>\\0</code>
    marks the end of a string in C. It is automatically added when a
    string literal is used to initialize a character array with enough
    space.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>char name[] = "RAM";</code> is stored as:
    <br><br>
    <code>'R' 'A' 'M' '\\0'</code>
    <br><br>
    Therefore, the array requires space for <strong>4 characters</strong>.
  </div>


  <h2>Declaring a Character Array</h2>

  <p>
    <strong>Definition:</strong> A character array is declared using
    the <code>char</code> data type followed by the array name and size.
  </p>

  <pre class="program-code"><code>char name[20];</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>char name[20];</code> can hold a string of up to
    <strong>19 characters</strong> plus the null character.
  </div>


  <h2>Initializing a String</h2>

  <p>
    A string can be initialized using a string literal enclosed in
    double quotation marks.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>char name[] = "Amit";</code>
  </div>

  <pre class="program-code"><code>char name[] = "Amit";</code></pre>


  <h2>String Indexing</h2>

  <p>
    <strong>Definition:</strong> Each character in a string is accessed
    using its index. Like other C arrays, string indexing starts from
    <strong>0</strong>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    For <code>char name[] = "HELLO";</code>:
    <br><br>
    <code>name[0]</code> → <strong>H</strong><br>
    <code>name[1]</code> → <strong>E</strong><br>
    <code>name[4]</code> → <strong>O</strong>
  </div>


  <pre class="program-code"><code>String:   H   E   L   L   O   \\0
Index:    0   1   2   3   4    5</code></pre>


  <h2>Accessing a Character</h2>

  <p>
    An individual character of a string can be accessed by using the
    string name and its index.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>name[0]</code> gives the first character of the string.
  </div>


  <h2>Modifying a Character</h2>

  <p>
    An individual character in a character array can be changed by
    assigning a new character to its index.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>name[0] = 'R';</code>, the first character changes to
    <strong>R</strong>.
  </div>


  <h2>String Traversal</h2>

  <p>
    <strong>Definition:</strong> String traversal means visiting each
    character one by one until the null character <code>\\0</code> is reached.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A loop can continue while <code>name[i] != '\\0'</code>.
  </div>

  <pre class="program-code"><code>for (int i = 0; name[i] != '\\0'; i++)
{
    printf("%c ", name[i]);
}</code></pre>


  <h2>Input of a String</h2>

  <p>
    A string can be read from the user using functions such as
    <code>scanf()</code> or <code>fgets()</code>. For a simple
    space-free word, <code>scanf("%s", name)</code> can be used.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>scanf("%s", name);</code>
    reads a word such as <strong>Rahul</strong>.
  </div>


  <h2>Output of a String</h2>

  <p>
    A string can be displayed using <code>printf()</code> with the
    <code>%s</code> format specifier.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>printf("%s", name);</code>
    displays the complete string stored in <code>name</code>.
  </div>


  <h2>String Length</h2>

  <p>
    <strong>Definition:</strong> String length is the number of characters
    present in the string, excluding the terminating null character
    <code>\\0</code>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    The length of <strong>"HELLO"</strong> is <strong>5</strong>,
    not 6. The sixth position contains <code>\\0</code>.
  </div>


  <h2>String Library Functions</h2>

  <p>
    C provides commonly used string functions through the
    <code>string.h</code> header file.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>strlen()</strong></td>
          <td>Finds the length of a string.</td>
          <td><code>strlen(name)</code></td>
        </tr>

        <tr>
          <td><strong>strcpy()</strong></td>
          <td>Copies one string into another.</td>
          <td><code>strcpy(b, a)</code></td>
        </tr>

        <tr>
          <td><strong>strcat()</strong></td>
          <td>Joins two strings.</td>
          <td><code>strcat(a, b)</code></td>
        </tr>

        <tr>
          <td><strong>strcmp()</strong></td>
          <td>Compares two strings.</td>
          <td><code>strcmp(a, b)</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Practical Example — Read and Display a String</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept a student's name and display the name
    using a character array.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Declare and use a character array.</li>
    <li>Accept a string from the user.</li>
    <li>Display a string using <code>printf()</code>.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Declare a character array and use <code>scanf("%s", name)</code>
    to read a simple name without spaces.
  </p>


  <h3>Theory</h3>

  <p>
    A C string is stored in a character array and ends with the
    null character <code>\\0</code>. The <code>%s</code> format
    specifier is used with <code>printf()</code> to display a string.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int main()
{
    char name[30];

    printf("Enter your name: ");
    scanf("%29s", name);

    // display the entered string
    printf("Name = %s\n", name);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter your name: Rahul
Name = Rahul</pre>


  <h3>Note</h3>

  <p>
    <code>scanf("%s", name)</code> reads a word until whitespace.
    For input containing spaces, functions such as <code>fgets()</code>
    are more suitable.
  </p>


  <h2>Practical Example — Find String Length</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept a string and find its length using
    <code>strlen()</code>.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Use the <code>string.h</code> header file.</li>
    <li>Use the <code>strlen()</code> function.</li>
    <li>Understand that the null character is not counted in string length.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Include <code>string.h</code> and pass the string to
    <code>strlen()</code>.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>strlen()</code> function returns the number of characters
    in a string before the terminating null character.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main()
{
    char name[30];
    int length;

    printf("Enter a word: ");
    scanf("%29s", name);

    length = strlen(name);       // find the number of characters

    printf("Length = %d\n", length);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter a word: COMPUTER
Length = 8</pre>


  <h3>Note</h3>

  <p>
    <code>strlen()</code> counts the characters in the string but
    does not count the terminating <code>\\0</code>.
  </p>


  <h2>Common Mistakes</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Mistake</th>
          <th>Correct Understanding</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Forgetting <code>\\0</code></td>
          <td>A C string must be null-terminated.</td>
        </tr>

        <tr>
          <td>Starting index from 1</td>
          <td>String indexing starts from 0.</td>
        </tr>

        <tr>
          <td>Using <code>%d</code> for a string</td>
          <td>Use <code>%s</code> for a string.</td>
        </tr>

        <tr>
          <td>Array too small</td>
          <td>Leave space for the null character.</td>
        </tr>

        <tr>
          <td>Expecting <code>scanf("%s")</code> to read spaces</td>
          <td>Use <code>fgets()</code> for input containing spaces.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>A character array stores elements of type <code>char</code>.</li>
    <li>A C string is a character sequence terminated by <code>\\0</code>.</li>
    <li>String indexing starts from 0.</li>
    <li><code>%s</code> is commonly used to read or display strings.</li>
    <li><code>strlen()</code> returns the string length excluding <code>\\0</code>.</li>
    <li>The <code>string.h</code> header provides common string functions.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>String = Characters + \\0</strong>
  </div>


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
          <td><strong>Character Array</strong></td>
          <td>Array of char elements.</td>
        </tr>

        <tr>
          <td><strong>String</strong></td>
          <td>Character sequence ending with \\0.</td>
        </tr>

        <tr>
          <td><strong>Index</strong></td>
          <td>Starts from 0.</td>
        </tr>

        <tr>
          <td><strong>%s</strong></td>
          <td>String input/output format specifier.</td>
        </tr>

        <tr>
          <td><strong>strlen()</strong></td>
          <td>Returns string length excluding \\0.</td>
        </tr>

        <tr>
          <td><strong>string.h</strong></td>
          <td>Header file for common string functions.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a character array?</li>
    <li>What is a string in C?</li>
    <li>What is the null character <code>\\0</code>?</li>
    <li>Why does a string require an extra position for <code>\\0</code>?</li>
    <li>How are characters of a string accessed?</li>
    <li>What is the use of <code>strlen()</code>?</li>
    <li>What is the purpose of <code>string.h</code>?</li>
    <li>Differentiate between a character array and a string.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Define character arrays and strings. Explain their declaration,
      initialization and indexing with examples.
    </li>

    <li>
      Explain the role of the null character in C strings.
    </li>

    <li>
      Explain common string functions such as strlen(), strcpy(),
      strcat() and strcmp().
    </li>

    <li>
      Write a C program to read and display a string.
    </li>

    <li>
      Write a C program to find the length of a string.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of character arrays,
        strings and the null character in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=character+array+strings+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Character Arrays & Strings in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for character arrays,
        strings and string functions will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of character arrays,
        null character, indexing and string functions.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 4
// FUNCTIONS: TYPES OF FUNCTIONS
// ============================================================

NOTES["m3-function-types"] = [
  `
  <h2>Functions in C</h2>

  <p>
    <strong>Definition:</strong> A function is a named block of statements
    designed to perform a specific task. A program can call the function
    whenever that task is required.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A function named <code>add()</code> can perform the task of adding
    two numbers.
  </div>


  <h2>Why Do We Use Functions?</h2>

  <p>
    Functions divide a large program into smaller, manageable parts.
    This makes programs easier to understand, test, reuse and maintain.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A student result program can have separate functions such as
    <code>inputMarks()</code>, <code>calculateTotal()</code> and
    <code>displayResult()</code>.
  </div>


  <h2>Basic Parts of a Function</h2>

  <p>
    A function generally involves a <strong>declaration/prototype</strong>,
    a <strong>definition</strong>, and a <strong>function call</strong>.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Function Declaration</strong></td>
          <td>Tells the compiler about the function.</td>
          <td><code>int add(int, int);</code></td>
        </tr>

        <tr>
          <td><strong>Function Definition</strong></td>
          <td>Contains the actual statements of the function.</td>
          <td><code>int add(int a, int b) { ... }</code></td>
        </tr>

        <tr>
          <td><strong>Function Call</strong></td>
          <td>Requests execution of the function.</td>
          <td><code>add(10, 20);</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Function Declaration</h2>

  <p>
    <strong>Definition:</strong> A function declaration, also called a
    function prototype, tells the compiler the function's name,
    return type and parameters before the function is used.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int add(int, int);</code>
    declares a function named <code>add</code> that returns an
    integer and accepts two integer parameters.
  </div>


  <h2>Function Definition</h2>

  <p>
    <strong>Definition:</strong> A function definition contains the
    statements that specify what the function actually does.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
  </div>

  <pre class="program-code"><code>int add(int a, int b)
{
    return a + b;
}</code></pre>


  <h2>Function Call</h2>

  <p>
    <strong>Definition:</strong> A function call is an expression used
    to execute the function and perform its task.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>result = add(10, 20);</code>
  </div>


  <h2>General Function Syntax</h2>

  <pre class="program-code"><code>return_type function_name(parameter_list)
{
    // statements
    return value;
}</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int square(int n)</code> means the function
    <code>square</code> accepts an integer and returns an integer.
  </div>


  <h2>Types of Functions in C</h2>

  <p>
    Functions can be classified based on whether they take arguments
    and whether they return a value.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Arguments</th>
          <th>Return Value</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>No arguments, no return value</strong></td>
          <td>No</td>
          <td>No</td>
        </tr>

        <tr>
          <td><strong>Arguments, no return value</strong></td>
          <td>Yes</td>
          <td>No</td>
        </tr>

        <tr>
          <td><strong>No arguments, returns a value</strong></td>
          <td>No</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td><strong>Arguments, returns a value</strong></td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>1. No Arguments and No Return Value</h2>

  <p>
    <strong>Definition:</strong> This type of function does not receive
    any values from the calling function and does not return a value.
    It simply performs a specific task.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A function can simply display a welcome message.
  </div>

  <pre class="program-code"><code>void welcome()
{
    printf("Welcome to C Programming!");
}</code></pre>


  <h2>2. Arguments and No Return Value</h2>

  <p>
    <strong>Definition:</strong> This type of function receives values
    as arguments but does not return a value to the calling function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A function can receive two numbers and directly display their sum.
  </div>

  <pre class="program-code"><code>void add(int a, int b)
{
    printf("Sum = %d", a + b);
}</code></pre>


  <h2>3. No Arguments but Returns a Value</h2>

  <p>
    <strong>Definition:</strong> This type of function does not receive
    arguments but performs a task and returns a value to the caller.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A function can return a fixed integer value.
  </div>

  <pre class="program-code"><code>int getNumber()
{
    return 10;
}</code></pre>


  <h2>4. Arguments and Returns a Value</h2>

  <p>
    <strong>Definition:</strong> This type of function receives one or
    more arguments, performs a task and returns the result to the caller.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A function can receive two numbers and return their sum.
  </div>

  <pre class="program-code"><code>int add(int a, int b)
{
    return a + b;
}</code></pre>


  <h2>Most Common Type</h2>

  <p>
    The function type <strong>arguments + return value</strong> is very
    commonly used because data can be supplied to the function and the
    calculated result can be returned to the calling code.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int sum = add(10, 20);</code>
    passes two values and receives the calculated result.
  </div>


  <h2>Library Functions</h2>

  <p>
    <strong>Definition:</strong> Library functions are predefined
    functions provided by C libraries. A programmer can use them
    without writing their complete implementation.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>printf()</code> and <code>scanf()</code> are commonly used
    library functions provided through standard headers.
  </div>


  <h2>User-Defined Functions</h2>

  <p>
    <strong>Definition:</strong> User-defined functions are functions
    created by the programmer to perform a specific task required by
    the program.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A programmer can create <code>calculateAverage()</code> to calculate
    the average marks of a student.
  </div>


  <h2>Library Functions vs User-Defined Functions</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Library Functions</th>
          <th>User-Defined Functions</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Provided by C libraries.</td>
          <td>Created by the programmer.</td>
        </tr>

        <tr>
          <td>Already implemented.</td>
          <td>Implementation is written by the programmer.</td>
        </tr>

        <tr>
          <td>Example: <code>printf()</code></td>
          <td>Example: <code>add()</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Practical Example — Function to Add Two Numbers</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that uses a user-defined function to add two
    integers and return the result.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand function declaration, definition and function call.</li>
    <li>Pass arguments to a function.</li>
    <li>Return a calculated value from a function.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Create an <code>add()</code> function that accepts two integers
    and returns their sum.
  </p>


  <h3>Theory</h3>

  <p>
    A function can receive data through parameters and return a result
    to the calling function. This helps divide a program into smaller
    reusable tasks.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int add(int a, int b);             // function declaration

int main()
{
    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    result = add(x, y);            // function call

    printf("Sum = %d\n", result);

    return 0;
}

int add(int a, int b)
{
    return a + b;                  // return the calculated sum
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter two numbers: 10 15
Sum = 25</pre>


  <h3>Note</h3>

  <p>
    The function <code>add()</code> receives two arguments and returns
    the result. The returned value is stored in <code>result</code>
    inside <code>main()</code>.
  </p>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>A function performs a specific task.</li>
    <li>Functions help divide a large program into smaller parts.</li>
    <li>A function may accept arguments and may return a value.</li>
    <li>Function declaration tells the compiler about the function.</li>
    <li>Function definition contains the actual implementation.</li>
    <li>Function call executes the function.</li>
    <li>Library functions are predefined; user-defined functions are created by the programmer.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>Declaration → Definition → Call</strong>
  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Function Type</th>
          <th>Arguments</th>
          <th>Return</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>No arguments, no return</td>
          <td>No</td>
          <td>No</td>
        </tr>

        <tr>
          <td>Arguments, no return</td>
          <td>Yes</td>
          <td>No</td>
        </tr>

        <tr>
          <td>No arguments, return</td>
          <td>No</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td>Arguments, return</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is a function in C?</li>
    <li>Why are functions used in C?</li>
    <li>What is a function declaration?</li>
    <li>What is a function definition?</li>
    <li>What is a function call?</li>
    <li>What are library functions?</li>
    <li>What are user-defined functions?</li>
    <li>Write the four types of functions based on arguments and return value.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Define a function and explain its declaration, definition and call.
    </li>

    <li>
      Explain the different types of functions in C with suitable examples.
    </li>

    <li>
      Differentiate between library functions and user-defined functions.
    </li>

    <li>
      Write a C program using a user-defined function to add two numbers.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of functions and their
        types in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=functions+types+of+functions+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Functions in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for function types
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of declaration,
        definition, call and the four function types.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 5
// FORMAL AND ACTUAL ARGUMENTS
// ============================================================

NOTES["m3-formal-actual"] = [
  `
  <h2>Formal and Actual Arguments</h2>

  <p>
    <strong>Definition:</strong> Arguments are values or variables used
    to pass information to a function. In C, arguments used in the
    function definition are called <strong>formal parameters</strong>,
    while the values or variables supplied during the function call
    are called <strong>actual arguments</strong>.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>add(x, y)</code>, <code>x</code> and <code>y</code> used
    in the function call are actual arguments. In
    <code>int add(int a, int b)</code>, <code>a</code> and <code>b</code>
    are formal parameters.
  </div>


  <h2>Formal Parameters</h2>

  <p>
    <strong>Definition:</strong> Formal parameters are variables written
    in the function definition that receive values from the function call.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>int add(int a, int b)</code>, <code>a</code> and
    <code>b</code> are formal parameters.
  </div>

  <pre class="program-code"><code>int add(int a, int b)
{
    return a + b;
}</code></pre>


  <h2>Actual Arguments</h2>

  <p>
    <strong>Definition:</strong> Actual arguments are the values or
    variables supplied when a function is called.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>add(10, 20)</code>, <code>10</code> and <code>20</code>
    are actual arguments.
  </div>

  <pre class="program-code"><code>int result = add(10, 20);</code></pre>


  <h2>Formal vs Actual Arguments</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Formal Parameters</th>
          <th>Actual Arguments</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Written in the function definition.</td>
          <td>Written in the function call.</td>
        </tr>

        <tr>
          <td>Receive the values passed to the function.</td>
          <td>Provide values to the function.</td>
        </tr>

        <tr>
          <td>Example: <code>a, b</code></td>
          <td>Example: <code>10, 20</code></td>
        </tr>

        <tr>
          <td>They are variables.</td>
          <td>They can be constants, variables or expressions.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>How Arguments Are Matched</h2>

  <p>
    <strong>Definition:</strong> During a function call, actual arguments
    are matched with the corresponding formal parameters according to
    their position.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>add(10, 20)</code>, <code>10</code> is passed to
    <code>a</code> and <code>20</code> is passed to <code>b</code>.
  </div>

  <pre class="program-code"><code>int add(int a, int b)
{
    return a + b;
}

add(10, 20);</code></pre>


  <h2>Order of Arguments</h2>

  <p>
    The order of actual arguments is important because each argument
    corresponds to the formal parameter in the same position.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>subtract(10, 5)</code> is different from
    <code>subtract(5, 10)</code> because the values are passed in
    a different order.
  </div>


  <h2>Number of Arguments</h2>

  <p>
    The number of supplied arguments should correspond to the parameters
    expected by the function call, subject to the function's declaration
    and language rules.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If a function is declared as
    <code>int add(int a, int b)</code>, it expects two integer arguments,
    such as <code>add(10, 20)</code>.
  </div>


  <h2>Arguments Can Be Variables</h2>

  <p>
    Actual arguments do not have to be fixed numbers. Variables can also
    be passed to a function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>add(x, y)</code> passes the current values of
    <code>x</code> and <code>y</code>.
  </div>


  <h2>Arguments Can Be Expressions</h2>

  <p>
    An expression can also be supplied as an actual argument. The
    expression is evaluated and its resulting value is passed to the
    function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>add(x + 5, y * 2)</code>, the two expressions are evaluated
    and their values are passed to the function.
  </div>


  <h2>Simple Example</h2>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int multiply(int a, int b)       // a and b are formal parameters
{
    return a * b;
}

int main()
{
    int x = 5;
    int y = 4;

    int result = multiply(x, y); // x and y are actual arguments

    printf("Result = %d\n", result);

    return 0;
}</code></pre>

  <h3>Output</h3>

  <pre class="output-box">Result = 20</pre>


  <h2>Practical Example — Add Two Numbers Using Arguments</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that accepts two integers and passes them to a
    user-defined function to calculate their sum.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand formal parameters and actual arguments.</li>
    <li>Pass variables to a user-defined function.</li>
    <li>Observe how values are matched with function parameters.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Create an <code>add()</code> function with two formal parameters.
    Pass two variables from <code>main()</code> as actual arguments.
  </p>


  <h3>Theory</h3>

  <p>
    Formal parameters appear in the function definition and receive
    values from the corresponding actual arguments supplied during
    the function call.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int add(int a, int b);             // a and b are formal parameters

int main()
{
    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    result = add(x, y);            // x and y are actual arguments

    printf("Sum = %d\n", result);

    return 0;
}

int add(int a, int b)
{
    return a + b;                  // calculate and return the sum
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter two numbers: 10 25
Sum = 35</pre>


  <h3>Note</h3>

  <p>
    Here, <code>x</code> and <code>y</code> are actual arguments in the
    function call, while <code>a</code> and <code>b</code> are formal
    parameters in the function definition.
  </p>


  <h2>Easy Way to Remember</h2>

  <div class="simple-box">
    🎯 <strong>Actual → Gives the value</strong><br><br>
    <strong>Formal → Receives the value</strong>
  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>Formal parameters are written in the function definition.</li>
    <li>Actual arguments are supplied in the function call.</li>
    <li>Actual arguments provide values to formal parameters.</li>
    <li>Arguments are matched according to their position.</li>
    <li>Actual arguments may be constants, variables or expressions.</li>
    <li>Formal parameters are local to the function in which they are defined.</li>
  </ul>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Remember</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Formal Parameter</strong></td>
          <td>Receives the value.</td>
          <td><code>a, b</code></td>
        </tr>

        <tr>
          <td><strong>Actual Argument</strong></td>
          <td>Provides the value.</td>
          <td><code>10, 20</code></td>
        </tr>

        <tr>
          <td><strong>Function Definition</strong></td>
          <td>Contains formal parameters.</td>
          <td><code>add(int a, int b)</code></td>
        </tr>

        <tr>
          <td><strong>Function Call</strong></td>
          <td>Contains actual arguments.</td>
          <td><code>add(10, 20)</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What are formal parameters?</li>
    <li>What are actual arguments?</li>
    <li>Where are formal parameters written?</li>
    <li>Where are actual arguments written?</li>
    <li>How are actual arguments matched with formal parameters?</li>
    <li>Can variables be used as actual arguments?</li>
    <li>Differentiate between formal parameters and actual arguments.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain formal parameters and actual arguments with suitable examples.
    </li>

    <li>
      Differentiate between formal and actual arguments in C.
    </li>

    <li>
      Write a C program to add two numbers using a function and explain
      its formal parameters and actual arguments.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of formal and actual
        arguments in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=formal+and+actual+arguments+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Formal &amp; Actual Arguments — Hindi
        </a>
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for formal and actual
        arguments will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of function calls,
        formal parameters and actual arguments.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 6
// PARAMETER PASSING IN FUNCTIONS
// ============================================================

NOTES["m3-parameter-passing"] = [
  `
  <h2>Parameter Passing in Functions</h2>

  <p>
    <strong>Definition:</strong> Parameter passing is the process of
    providing data from the calling function to the parameters of the
    called function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>add(x, y)</code>, the values of <code>x</code> and
    <code>y</code> are passed to the corresponding parameters of
    the <code>add()</code> function.
  </div>


  <h2>Why is Parameter Passing Needed?</h2>

  <p>
    Functions often need data from the calling program to perform their
    task. Parameter passing provides that data to the function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A function that calculates the square of a number needs the number
    to be passed to it.
  </div>


  <h2>Basic Parameter Passing</h2>

  <p>
    A function can receive one or more parameters and use them inside
    its body.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>square(int n)</code>, <code>n</code> is the parameter that
    receives the value supplied during the function call.
  </div>

  <pre class="program-code"><code>int square(int n)
{
    return n * n;
}</code></pre>


  <h2>Parameter Passing Flow</h2>

  <div class="note-flow">
Calling Function
       ↓
Actual Arguments
       ↓
Function Call
       ↓
Formal Parameters
       ↓
Function Executes
       ↓
Result / Action
  </div>


  <h2>Example</h2>

  <p>
    In the following example, the values of <code>x</code> and
    <code>y</code> are passed to <code>a</code> and <code>b</code>.
  </p>

  <pre class="program-code"><code>int add(int a, int b)
{
    return a + b;
}

int result = add(x, y);</code></pre>

  <div class="simple-box">
    💡 <strong>Mapping:</strong><br><br>
    <code>x</code> → <code>a</code><br>
    <code>y</code> → <code>b</code>
  </div>


  <h2>Ways of Passing Parameters</h2>

  <p>
    In C programming, parameter passing is commonly discussed in terms
    of <strong>passing values</strong> and <strong>using addresses</strong>
    to allow a function to work with the caller's data.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>What is Passed?</th>
          <th>Effect on Original Variable</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Call by Value</strong></td>
          <td>Value of the variable</td>
          <td>Changes inside function do not change the original variable.</td>
        </tr>

        <tr>
          <td><strong>Address-based passing</strong></td>
          <td>Address of the variable</td>
          <td>Function can modify the original variable.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <div class="simple-box">
    📌 <strong>Important:</strong>
    Detailed <strong>Call by Value</strong> and
    <strong>Call by Reference</strong> concepts are covered separately
    in the next two topics.
  </div>


  <h2>Parameter Passing and Data Flow</h2>

  <p>
    The direction of data flow depends on how the function is called
    and how its parameters are used.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A value can be supplied to a function, processed there, and the
    result can be returned to the calling function.
  </div>


  <h2>Returning a Value</h2>

  <p>
    A function may return a calculated value to the calling function.
    This allows the calling code to use the result after the function
    completes.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>result = add(10, 20);</code> stores the value returned by
    <code>add()</code> in <code>result</code>.
  </div>


  <h2>Practical Example — Passing Parameters to a Function</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program that accepts two numbers, passes them to a
    user-defined function, and displays their product.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand how parameters are passed to a function.</li>
    <li>Pass actual arguments to formal parameters.</li>
    <li>Return the calculated result to the calling function.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Create a function <code>multiply()</code> with two integer parameters.
    Pass the two input variables during the function call.
  </p>


  <h3>Theory</h3>

  <p>
    When a function is called, the arguments supplied by the caller are
    associated with the parameters defined by the called function.
    The function then uses those parameters to perform its task.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int multiply(int a, int b);       // function declaration

int main()
{
    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    result = multiply(x, y);      // pass actual arguments

    printf("Product = %d\n", result);

    return 0;
}

int multiply(int a, int b)
{
    return a * b;                 // calculate and return product
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter two numbers: 6 8
Product = 48</pre>


  <h3>Note</h3>

  <p>
    Here, <code>x</code> and <code>y</code> are the actual arguments,
    while <code>a</code> and <code>b</code> are the formal parameters.
    The function receives the data, performs the multiplication and
    returns the result.
  </p>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>Parameter passing transfers data to a called function.</li>
    <li>Actual arguments are supplied during the function call.</li>
    <li>Formal parameters receive the supplied data inside the function.</li>
    <li>Arguments are matched with parameters according to their position.</li>
    <li>A function may process the parameters and return a result.</li>
    <li>Call by Value and Call by Reference are studied separately.</li>
  </ul>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Parameter Passing</strong></td>
          <td>Providing data to a function.</td>
        </tr>

        <tr>
          <td><strong>Actual Argument</strong></td>
          <td>Value or variable supplied in function call.</td>
        </tr>

        <tr>
          <td><strong>Formal Parameter</strong></td>
          <td>Variable that receives the supplied data.</td>
        </tr>

        <tr>
          <td><strong>Return Value</strong></td>
          <td>Result sent back to the calling function.</td>
        </tr>

      </tbody>
    </table>
  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is parameter passing in functions?</li>
    <li>Why are parameters passed to a function?</li>
    <li>What is the difference between an actual argument and a formal parameter?</li>
    <li>How are arguments associated with parameters?</li>
    <li>What is the role of a return value?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain parameter passing in functions with a suitable example.
    </li>

    <li>
      Explain the relationship between actual arguments and formal
      parameters during a function call.
    </li>

    <li>
      Write a C program to pass two values to a function and return
      the calculated result.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">
      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of parameter passing
        in C functions.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=parameter+passing+in+C+functions+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Parameter Passing in C — Hindi
        </a>
      </p>
    </div>


    <div class="resource-card">
      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for parameter passing
        will be provided here.
      </p>
    </div>


    <div class="resource-card">
      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of actual arguments,
        formal parameters and return values.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 7
// CALL BY VALUE
// ============================================================

NOTES["m3-call-by-value"] = [
  `
  <h2>Call by Value</h2>

  <p>
    <strong>Definition:</strong> In call by value, a copy of the actual
    argument's value is passed to the function. The function works on
    this separate copy.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>x = 10</code> is passed to a function, the function receives
    a copy of the value <strong>10</strong>. Changing the parameter inside
    the function does not change the original <code>x</code>.
  </div>


  <h2>How Call by Value Works</h2>

  <p>
    The value of the actual argument is copied into the formal parameter.
    Both variables therefore hold separate values.
  </p>

  <div class="note-flow">
Original Variable
      ↓
Copy of Value
      ↓
Formal Parameter
      ↓
Function Works on Copy
      ↓
Original Variable Unchanged
  </div>


  <h3>Example</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

void change(int a)
{
    a = 20;                 // change only the local copy
}

int main()
{
    int x = 10;

    change(x);              // pass value of x

    printf("x = %d\n", x);

    return 0;
}</code></pre>


  <h3>Output</h3>

  <pre class="output-box">x = 10</pre>

  <div class="simple-box">
    📌 <strong>Why?</strong>
    The function changed its own parameter <code>a</code>, not the
    original variable <code>x</code>.
  </div>


  <h2>Memory Idea</h2>

  <p>
    In call by value, the formal parameter gets a separate copy of the
    value supplied by the caller.
  </p>

  <pre class="program-code"><code>Before function call:

x = 10


After calling change(x):

Original variable       Function parameter
     x = 10                  a = 10

     ↓ copy of value ↓

Changing a to 20:

x = 10                  a = 20</code></pre>


  <h2>Important Characteristics</h2>

  <ul>
    <li>A copy of the value is passed to the function.</li>
    <li>The formal parameter is separate from the original variable.</li>
    <li>Changes to the parameter do not affect the original variable.</li>
    <li>It is useful when the function only needs to use a value.</li>
  </ul>


  <h2>Real-World Example</h2>

  <p>
    Imagine giving someone a photocopy of a document. They can write on
    the copy, but the original document remains unchanged.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    Original document = original variable<br>
    Photocopy = copied value passed to the function
  </div>


  <h2>Practical Example — Swap Using Call by Value</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to demonstrate that swapping two values inside a
    function using call by value does not change the original values
    in the calling function.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand how values are copied into function parameters.</li>
    <li>Observe that changes to formal parameters do not affect originals.</li>
    <li>Differentiate between local parameter changes and caller variables.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Pass two integer variables to a function and swap the received
    parameters using a temporary variable.
  </p>


  <h3>Theory</h3>

  <p>
    In call by value, the function receives copies of the arguments.
    Therefore, swapping the formal parameters changes only those copies
    and the original variables remain unchanged.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

void swap(int a, int b)
{
    int temp;

    temp = a;               // store a temporarily
    a = b;
    b = temp;               // swap the copied values
}

int main()
{
    int x = 10, y = 20;

    printf("Before function call: x = %d, y = %d\n", x, y);

    swap(x, y);             // pass values of x and y

    printf("After function call: x = %d, y = %d\n", x, y);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Before function call: x = 10, y = 20
After function call: x = 10, y = 20</pre>


  <h3>Note</h3>

  <p>
    The swap occurs only inside the function because <code>a</code> and
    <code>b</code> are copies. The original <code>x</code> and
    <code>y</code> remain unchanged.
  </p>


  <h2>Call by Value vs Original Variables</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Inside Function</th>
          <th>Calling Function</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Works with formal parameter.</td>
          <td>Contains original variable.</td>
        </tr>

        <tr>
          <td>Parameter contains a copy of the value.</td>
          <td>Original value remains unchanged by parameter assignment.</td>
        </tr>

        <tr>
          <td>Example: <code>a = 20</code></td>
          <td>Original <code>x</code> can remain <code>10</code>.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Call by Value vs Call by Reference</h2>

  <p>
    <strong>Definition:</strong> Call by value passes a value to a
    function, while the commonly used "call by reference" technique in C
    passes an address using a pointer so the function can work with the
    caller's original variable.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong><br><br>
    Call by Value → <code>change(x)</code><br>
    Address-based modification → <code>change(&amp;x)</code>
  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>Call by value passes a copy of the argument's value.</li>
    <li>The function works on its own parameter.</li>
    <li>Changing the parameter does not change the original variable.</li>
    <li>It is simple and safe when the original data should remain unchanged.</li>
    <li>To modify the caller's variable in C, an address/pointer technique is used.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>Call by Value = Copy goes to the function</strong><br>
    <strong>Change in copy ≠ Change in original</strong>
  </div>


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
          <td><strong>What is passed?</strong></td>
          <td>Copy of the value.</td>
        </tr>

        <tr>
          <td><strong>Parameter</strong></td>
          <td>Separate from original variable.</td>
        </tr>

        <tr>
          <td><strong>Original variable</strong></td>
          <td>Not changed by parameter assignment.</td>
        </tr>

        <tr>
          <td><strong>Typical example</strong></td>
          <td>Swap using ordinary parameters does not swap originals.</td>
        </tr>

      </tbody>
    </table>
  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is call by value?</li>
    <li>What is passed to a function in call by value?</li>
    <li>Does changing a formal parameter change the original variable?</li>
    <li>Why does the original variable remain unchanged?</li>
    <li>Write a simple example of call by value.</li>
    <li>What happens when two variables are swapped using call by value?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain call by value with syntax and suitable example.
    </li>

    <li>
      Write a C program to demonstrate call by value using a swap function.
    </li>

    <li>
      Explain why changes made to formal parameters do not affect the
      original variables in call by value.
    </li>

    <li>
      Differentiate between call by value and the address-based technique
      commonly called call by reference in C.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of call by value in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=call+by+value+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Call by Value in C — Hindi
        </a>
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for call by value
        will be provided here.
      </p>
    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of value copying,
        formal parameters and original variables.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 8
// CALL BY REFERENCE
// ============================================================

NOTES["m3-call-by-reference"] = [
  `
  

  <p>
    <strong>Definition:</strong> In C, the technique commonly called
    <strong>call by reference</strong> passes the <strong>address</strong>
    of a variable to a function using a pointer. The function can then
    access and modify the original variable through that address.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If the address of <code>x</code> is passed to a function, the function
    can use a pointer to change the actual value stored in <code>x</code>.
  </div>


  <h2>Why is Call by Reference Used?</h2>

  <p>
    <strong>Definition:</strong> Address-based parameter passing is used
    when a function needs to modify the original variable of the calling
    function or when working with large data without making a separate
    copy of the data.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    A <code>swap()</code> function can exchange the values of two original
    variables by receiving their addresses.
  </div>


  <h2>Pointers and Addresses</h2>

  <p>
    <strong>Definition:</strong> A pointer is a variable that stores the
    memory address of another variable.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    In <code>int *p;</code>, <code>p</code> is a pointer to an integer.
  </div>


  <h2>Address-of Operator (&amp;)</h2>

  <p>
    <strong>Definition:</strong> The <code>&amp;</code> operator returns
    the memory address of a variable.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>&amp;x</code> means the address of variable <code>x</code>.
  </div>


  <h2>Dereference Operator (*)</h2>

  <p>
    <strong>Definition:</strong> The <code>*</code> operator is used with
    a pointer to access the value stored at the address held by that pointer.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If <code>p</code> stores the address of <code>x</code>, then
    <code>*p</code> accesses the value of <code>x</code>.
  </div>


  <h2>How Call by Reference Works</h2>

  <div class="note-flow">
Original Variable
      ↓
Address of Variable
      ↓
Function receives Address
      ↓
Pointer Accesses Original Data
      ↓
Original Variable Can Change
  </div>


  <h2>Simple Example</h2>

  <p>
    The function receives the address of <code>x</code> and changes
    the value stored at that address.
  </p>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

void change(int *p)
{
    *p = 20;                // modify the original variable
}

int main()
{
    int x = 10;

    change(&amp;x);             // pass address of x

    printf("x = %d\n", x);

    return 0;
}</code></pre>


  <h3>Output</h3>

  <pre class="output-box">x = 20</pre>


  <div class="simple-box">
    📌 <strong>Why did x change?</strong>
    The function received the address of <code>x</code>. Using
    <code>*p</code>, it modified the value stored at that address.
  </div>


  <h2>Call by Value vs Call by Reference</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Call by Value</th>
          <th>Call by Reference (Address-Based)</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Value is passed.</td>
          <td>Address is passed.</td>
        </tr>

        <tr>
          <td>Function works with a copy.</td>
          <td>Function can access the original variable through a pointer.</td>
        </tr>

        <tr>
          <td>Original variable normally remains unchanged by parameter assignment.</td>
          <td>Original variable can be modified.</td>
        </tr>

        <tr>
          <td>Example: <code>change(x)</code></td>
          <td>Example: <code>change(&amp;x)</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Using Pointer Parameters</h2>

  <p>
    A pointer parameter is used when a function needs access to the
    caller's variable through its address.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>void change(int *p)</code> declares <code>p</code> as a
    pointer to an integer.
  </div>


  <h2>Practical Example — Swap Two Numbers</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to swap two numbers using a function and pointers.
    The original values in <code>main()</code> should be changed.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Understand address-based parameter passing.</li>
    <li>Use pointers as function parameters.</li>
    <li>Modify original variables from inside a function.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Pass the addresses of the two variables to <code>swap()</code>.
    Use pointer dereferencing and a temporary variable to exchange
    their values.
  </p>


  <h3>Theory</h3>

  <p>
    To modify the caller's variables, pass their addresses to the
    function. The pointer parameters can then access and update the
    original values.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

void swap(int *a, int *b)
{
    int temp;

    temp = *a;              // store the value at address a
    *a = *b;                // copy value at b into a
    *b = temp;              // place original a value into b
}

int main()
{
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;x, &amp;y);

    printf("Before swap: x = %d, y = %d\n", x, y);

    swap(&amp;x, &amp;y);         // pass addresses of x and y

    printf("After swap: x = %d, y = %d\n", x, y);

    return 0;
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter two numbers: 10 20
Before swap: x = 10, y = 20
After swap: x = 20, y = 10</pre>


  <h3>Note</h3>

  <p>
    The function receives the addresses of <code>x</code> and
    <code>y</code>. Therefore, changes made through <code>*a</code>
    and <code>*b</code> affect the original variables.
  </p>


  <h2>Key Symbols to Remember</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>&amp;</code></td>
          <td>Address of a variable</td>
          <td><code>&amp;x</code></td>
        </tr>

        <tr>
          <td><code>*</code></td>
          <td>Pointer declaration / dereference</td>
          <td><code>int *p</code>, <code>*p</code></td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>C uses pointers and addresses for the technique commonly called call by reference.</li>
    <li>The address of the variable is passed to the function.</li>
    <li>A pointer parameter receives that address.</li>
    <li>The dereference operator <code>*</code> accesses the original value.</li>
    <li>Changes through the pointer can modify the caller's variable.</li>
    <li>The <code>&amp;</code> operator is used to obtain a variable's address.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>&amp;x → address of x</strong><br>
    <strong>int *p → pointer that stores an address</strong><br>
    <strong>*p → value at that address</strong>
  </div>


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
          <td><strong>Common name</strong></td>
          <td>Call by reference / address-based passing.</td>
        </tr>

        <tr>
          <td><strong>What is passed?</strong></td>
          <td>Address of the variable.</td>
        </tr>

        <tr>
          <td><strong>Used with</strong></td>
          <td>Pointers.</td>
        </tr>

        <tr>
          <td><strong>Can original change?</strong></td>
          <td>Yes, through the pointer.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>What is call by reference?</li>
    <li>How is call by reference achieved in C?</li>
    <li>What is a pointer parameter?</li>
    <li>What is the use of the <code>&amp;</code> operator?</li>
    <li>What is the use of the <code>*</code> dereference operator?</li>
    <li>How can a function modify the original variable?</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain call by reference in C with a suitable example.
    </li>

    <li>
      Explain how pointers are used to modify original variables
      through a function.
    </li>

    <li>
      Write a C program to swap two numbers using pointers.
    </li>

    <li>
      Differentiate between call by value and call by reference.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">
      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of pointers and
        call by reference in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=call+by+reference+pointers+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Call by Reference in C — Hindi
        </a>
      </p>
    </div>


    <div class="resource-card">
      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for pointers and
        call by reference will be provided here.
      </p>
    </div>


    <div class="resource-card">
      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of address, pointer,
        dereference and original variable modification.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC 9
// PASSING ARRAYS TO FUNCTIONS
// ============================================================

NOTES["m3-passing-arrays"] = [
  `
  <h2>Passing Arrays to Functions</h2>

  <p>
    <strong>Definition:</strong> Passing an array to a function means
    providing the array to a function so that the function can access
    and process its elements.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    An array containing student marks can be passed to a function
    that calculates their total.
  </div>


  <h2>Why Pass an Array to a Function?</h2>

  <p>
    Arrays are often passed to functions when the same collection of
    values needs to be processed by a separate function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    One function can read the marks while another function calculates
    the sum of those marks.
  </div>


  <h2>Passing a One-Dimensional Array</h2>

  <p>
    <strong>Definition:</strong> A one-dimensional array is passed to a
    function by providing the array name in the function call.
    The function parameter is declared as an array or an equivalent
    pointer parameter.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>display(arr, 5);</code> passes the array <code>arr</code>
    along with its size to the function.
  </div>


  <h3>Basic Syntax</h3>

  <pre class="program-code"><code>function_name(array_name, size);</code></pre>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>sumArray(numbers, 5);</code>
    passes the array <code>numbers</code> and its size
    <code>5</code> to the function.
  </div>


  <h2>Array Parameter</h2>

  <p>
    A function can declare an array parameter to receive the array.
    The size is commonly supplied separately because the function does
    not automatically know the number of elements in the array.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>int sumArray(int arr[], int n)</code>
    accepts an integer array and its number of elements.
  </div>


  <pre class="program-code"><code>int sumArray(int arr[], int n)
{
    int sum = 0;

    for (int i = 0; i &lt; n; i++)
        sum += arr[i];

    return sum;
}</code></pre>


  <h2>Passing Array Size</h2>

  <p>
    <strong>Definition:</strong> When an array is passed to a function,
    the number of elements is usually passed separately so that the
    function knows how many elements it should process.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>sumArray(arr, 5);</code>
    tells the function that it should process 5 elements.
  </div>


  <h2>Accessing Elements Inside the Function</h2>

  <p>
    The function can access array elements using their indexes just as
    they are accessed in the calling function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>arr[i]</code> accesses the element at index <code>i</code>.
  </div>


  <h2>Important Point: Array Changes</h2>

  <p>
    <strong>Definition:</strong> In a normal function parameter, an array
    argument provides access to the same underlying array elements, so
    changes made to elements inside the function are visible to the
    calling function.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    If a function executes <code>arr[0] = 100;</code>, the first element
    of the original array is changed to <strong>100</strong>.
  </div>


  <h2>Simple Example</h2>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

void changeFirst(int arr[])
{
    arr[0] = 100;          // modify the first array element
}

int main()
{
    int numbers[3] = {10, 20, 30};

    changeFirst(numbers);  // pass the array

    printf("%d\n", numbers[0]);

    return 0;
}</code></pre>

  <h3>Output</h3>

  <pre class="output-box">100</pre>


  <div class="simple-box">
    📌 <strong>Remember:</strong>
    When an array is passed to a function in C, the function can access
    the original array elements through the parameter.
  </div>


  <h2>Passing Array with Size</h2>

  <p>
    A common function design is to pass both the array and the number
    of elements.
  </p>

  <div class="simple-box">
    💡 <strong>Example:</strong>
    <code>display(arr, 5);</code>
    tells the function exactly how many elements to display.
  </div>


  <h2>Practical Example — Find Sum of Array Elements Using a Function</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to accept 5 integers in an array and pass the
    array to a function that calculates and returns the sum.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>
    <li>Pass a one-dimensional array to a function.</li>
    <li>Pass the size of the array as a separate parameter.</li>
    <li>Process array elements inside a function.</li>
    <li>Return the calculated result to the calling function.</li>
  </ul>


  <h3>Hint</h3>

  <p>
    Create a function <code>sumArray()</code> that accepts the array and
    its size. Use a loop inside the function to calculate the sum.
  </p>


  <h3>Theory</h3>

  <p>
    A one-dimensional array can be passed to a function by writing its
    name in the function call. The function can then access the array
    elements using indexes. The array size is usually passed separately.
  </p>


  <h3>Program</h3>

  <pre class="program-code"><code>#include &lt;stdio.h&gt;

int sumArray(int arr[], int n);       // function declaration

int main()
{
    int arr[5];
    int i, sum;

    printf("Enter 5 numbers: ");

    // read array elements
    for (i = 0; i &lt; 5; i++)
        scanf("%d", &amp;arr[i]);

    sum = sumArray(arr, 5);            // pass array and its size

    printf("Sum = %d\n", sum);

    return 0;
}

int sumArray(int arr[], int n)
{
    int sum = 0;

    // calculate the sum of all array elements
    for (int i = 0; i &lt; n; i++)
        sum += arr[i];

    return sum;                         // return the calculated sum
}</code></pre>


  <h3>Expected Output</h3>

  <pre class="output-box">Enter 5 numbers: 10 20 30 40 50
Sum = 150</pre>


  <h3>Note</h3>

  <p>
    The array itself is passed using its name, while <code>5</code>
    is passed separately to specify the number of elements to process.
  </p>


  <h2>Passing an Array to a Function: Flow</h2>

  <div class="note-flow">
Array created in main()
        ↓
Function call
        ↓
Pass array name + size
        ↓
Function accesses array elements
        ↓
Processing performed
        ↓
Result returned
  </div>


  <h2>Advantages of Passing Arrays to Functions</h2>

  <ul>
    <li>Large arrays can be processed by separate functions.</li>
    <li>Programs become more modular and easier to understand.</li>
    <li>The same function can be reused for different arrays.</li>
    <li>Array elements can be processed using loops inside the function.</li>
  </ul>


  <h2>Passing Array vs Passing Single Variable</h2>

  <div class="note-table-wrap">

    <table class="note-table">
      <thead>
        <tr>
          <th>Single Variable</th>
          <th>Array</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Passes one value.</td>
          <td>Provides access to multiple elements.</td>
        </tr>

        <tr>
          <td>Example: <code>square(x)</code></td>
          <td>Example: <code>sumArray(arr, 5)</code></td>
        </tr>

        <tr>
          <td>Usually processed as one value.</td>
          <td>Usually processed using a loop.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Points for Exam</h2>

  <ul>
    <li>An array can be passed to a function using its name.</li>
    <li>The array size is usually passed separately.</li>
    <li>The function can access elements using indexes.</li>
    <li>Changes made to array elements inside the function can affect the original array.</li>
    <li>Arrays are commonly processed inside functions using loops.</li>
    <li>Passing arrays to functions improves modularity and code reuse.</li>
  </ul>


  <div class="simple-box">
    🎯 <strong>Easy Rule:</strong><br><br>
    <strong>Pass Array Name + Size → Function Processes Elements</strong>
  </div>


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
          <td><strong>Array parameter</strong></td>
          <td><code>int arr[]</code></td>
        </tr>

        <tr>
          <td><strong>Function call</strong></td>
          <td><code>function(arr, n)</code></td>
        </tr>

        <tr>
          <td><strong>Array size</strong></td>
          <td>Usually passed separately.</td>
        </tr>

        <tr>
          <td><strong>Element access</strong></td>
          <td><code>arr[i]</code></td>
        </tr>

        <tr>
          <td><strong>Modification</strong></td>
          <td>Changes to elements can affect the original array.</td>
        </tr>

      </tbody>
    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">
    <li>How is a one-dimensional array passed to a function?</li>
    <li>Why is the array size commonly passed separately?</li>
    <li>How are array elements accessed inside a function?</li>
    <li>Can a function modify an array passed to it?</li>
    <li>Write the syntax for passing an array to a function.</li>
  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">
    <li>
      Explain how one-dimensional arrays are passed to functions with
      a suitable example.
    </li>

    <li>
      Write a C program to pass an array to a function and calculate
      the sum of its elements.
    </li>

    <li>
      Explain how a function can modify the elements of an array passed
      to it.
    </li>
  </ol>


  <div class="resource-section">

    <div class="resource-card">
      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of passing arrays to
        functions in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=passing+array+to+function+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Passing Arrays to Functions — Hindi
        </a>
      </p>
    </div>


    <div class="resource-card">
      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for passing arrays
        to functions will be provided here.
      </p>
    </div>


    <div class="resource-card">
      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of array parameters,
        array size, indexing and function processing.
      </p>
    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — TOPIC
// NESTED FUNCTIONS
// ============================================================

NOTES["m3-nested-functions"] = [
  `

  <h2>Nested Functions</h2>

  <p>
    In C programming, the term <strong>nested functions</strong> is often
    used to describe a function that is called from another function.
    This allows a program to divide a task into smaller functions.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
main()
  ↓
calculateSum()
  ↓
returns result
    </div>

    <p>
      Here, <code>main()</code> calls another function
      <code>calculateSum()</code> to perform the calculation.
    </p>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Technical Note
    </span>

    <p>
      Standard C does <strong>not</strong> allow a function definition
      inside another function. Functions are normally defined separately
      and can call one another.
    </p>

  </div>


  <h2>Why Use Functions?</h2>

  <p>
    Functions divide a large program into smaller and manageable parts.
    One function can call another function whenever a particular task
    needs to be performed.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student result program can use one function to calculate marks
      and another function to display the result.
    </p>

  </div>


  <h2>Simple Example</h2>

  <div class="program-code">
#include &lt;stdio.h&gt;

int calculateSum(int a, int b)
{
    // calculate and return the sum
    return a + b;
}

int main()
{
    int result;

    // main() calls another function
    result = calculateSum(10, 15);

    printf("Sum = %d\n", result);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Sum = 25
    </p>

  </div>


  <h2>How It Works</h2>

  <div class="note-flow">
main()
   ↓
calculateSum(10, 15)
   ↓
10 + 15
   ↓
25 returned to main()
   ↓
printf() displays 25
  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program in which the <code>main()</code> function calls
    another function to calculate the square of a number and displays
    the result.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand how one function can call another function.</li>

    <li>Pass a value to a function and receive a result.</li>

    <li>Divide a program into smaller functional parts.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create a function named <code>square()</code> that accepts one integer
    and returns its square. Call this function from <code>main()</code>.
  </p>


  <h3>Theory</h3>

  <p>
    A function can call another function to perform a specific task.
    The called function executes its statements and can return a value
    to the calling function.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int square(int n)
{
    // return the square of the given number
    return n * n;
}

int main()
{
    int num, result;

    printf("Enter a number: ");
    scanf("%d", &amp;num);

    // call square() from main()
    result = square(num);

    printf("Square = %d\n", result);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter a number: 7
    </p>

    <p>
      Square = 49
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The function <code>square()</code> is defined separately from
    <code>main()</code>. The <code>main()</code> function calls it,
    passes a value, and receives the returned result.
  </p>


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
          <td><strong>Function</strong></td>
          <td>A reusable block of code for a specific task.</td>
        </tr>

        <tr>
          <td><strong>Function Call</strong></td>
          <td>Used to execute another function.</td>
        </tr>

        <tr>
          <td><strong>Calling Function</strong></td>
          <td>The function that calls another function.</td>
        </tr>

        <tr>
          <td><strong>Called Function</strong></td>
          <td>The function that is called to perform a task.</td>
        </tr>

        <tr>
          <td><strong>Return Value</strong></td>
          <td>The result sent back by the called function.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is meant by nested functions in C?</li>

    <li>Can a function be defined inside another function in standard C?</li>

    <li>What is a function call?</li>

    <li>What is the difference between a calling function and a called function?</li>

    <li>How can one function call another function in C?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the concept of nested functions in C with a suitable example.
    </li>

    <li>
      Write a C program in which one function calls another function
      and explain its working.
    </li>

    <li>
      Explain why functions are defined separately in standard C.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of function calling
        and functions working together in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=nested+functions+function+calling+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Nested Functions / Function Calling in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for nested functions
        and function calling will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of calling function,
        called function and return value.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 3 — LAST TOPIC
// RECURSION
// ============================================================

NOTES["m3-recursion"] = [
  `

  <h2>Recursion</h2>

  <p>
    <strong>Recursion</strong> is a process in which a function calls
    itself to solve a problem by breaking it into smaller versions
    of the same problem.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A function <code>factorial()</code> can call itself to calculate
      the factorial of a smaller number.
    </p>

  </div>


  <h2>How Recursion Works</h2>

  <p>
    A recursive function normally has two important parts:
    a <strong>base case</strong> and a <strong>recursive case</strong>.
  </p>


  <h3>1. Base Case</h3>

  <p>
    The <strong>base case</strong> is the condition that stops the
    recursive calls. Without a proper base case, recursion can continue
    indefinitely.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      In factorial, <code>factorial(0) = 1</code> can be used as the
      base case.
    </p>

  </div>


  <h3>2. Recursive Case</h3>

  <p>
    The <strong>recursive case</strong> is the part of the function
    where the function calls itself with a smaller or simpler value.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>factorial(n) = n * factorial(n - 1)</code>
    </p>

  </div>


  <h2>Simple Example of Recursion</h2>

  <div class="program-code">
#include &lt;stdio.h&gt;

int countDown(int n)
{
    if (n == 0)
        return 0;               // base case

    printf("%d ", n);

    return countDown(n - 1);     // recursive call
}

int main()
{
    countDown(5);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      5 4 3 2 1
    </p>

  </div>


  <h2>Real-World Idea</h2>

  <p>
    Recursion can be understood like solving a large task by repeatedly
    solving a smaller version of the same task until a simple stopping
    condition is reached.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Example
    </span>

    <p>
      A folder can contain subfolders, and each subfolder can contain
      more subfolders. A program can process them using the same logic
      repeatedly.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to find the factorial of a positive integer
    using recursion.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the concept of recursive function calls.</li>

    <li>Identify the base case and recursive case.</li>

    <li>Use recursion to calculate factorial.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Define a function <code>factorial()</code> that returns
    <code>1</code> when <code>n == 0</code>. Otherwise return
    <code>n * factorial(n - 1)</code>.
  </p>


  <h3>Theory</h3>

  <p>
    Factorial of a non-negative integer <code>n</code> is the product
    of all positive integers from <code>1</code> to <code>n</code>.
    Recursion calculates it by repeatedly reducing the value of
    <code>n</code> until the base case is reached.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>5! = 5 × 4 × 3 × 2 × 1 = 120</code>
    </p>

  </div>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int factorial(int n)
{
    if (n == 0)
        return 1;                // base case

    return n * factorial(n - 1); // recursive call
}

int main()
{
    int n, result;

    printf("Enter a positive integer: ");
    scanf("%d", &amp;n);

    // calculate factorial using recursion
    result = factorial(n);

    printf("Factorial of %d = %d\n", n, result);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter a positive integer: 5
    </p>

    <p>
      Factorial of 5 = 120
    </p>

  </div>


  <h3>Working of the Example</h3>

  <div class="note-flow">
factorial(5)
    ↓
5 × factorial(4)
    ↓
5 × 4 × factorial(3)
    ↓
5 × 4 × 3 × factorial(2)
    ↓
5 × 4 × 3 × 2 × factorial(1)
    ↓
5 × 4 × 3 × 2 × 1
    ↓
120
  </div>


  <h3>Note</h3>

  <p>
    Every recursive function must have a proper stopping condition.
    The base case prevents the function from calling itself forever.
  </p>


  <h2>Advantages of Recursion</h2>

  <p>
    Recursion can make some problems easier to express when the problem
    naturally consists of smaller versions of itself.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Problems involving factorial, Fibonacci series, tree structures
      and divide-and-conquer techniques can be expressed using recursion.
    </p>

  </div>


  <h2>Disadvantages of Recursion</h2>

  <p>
    Recursion can use additional memory because each function call remains
    active until the recursive calls return. Poorly designed recursion
    can also lead to excessive calls.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A recursive function without a correct base case may continue
      calling itself until the program runs out of available stack space.
    </p>

  </div>


  <h2>Recursion vs Iteration</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Recursion</th>
          <th>Iteration</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Function calls itself.</td>
          <td>Uses loops such as <code>for</code> or <code>while</code>.</td>
        </tr>

        <tr>
          <td>Requires a base case.</td>
          <td>Requires a loop condition.</td>
        </tr>

        <tr>
          <td>Uses function-call stack memory.</td>
          <td>Usually uses less additional stack memory.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Term</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Recursion</strong></td>
          <td>A function calling itself.</td>
        </tr>

        <tr>
          <td><strong>Base Case</strong></td>
          <td>Stops the recursive calls.</td>
        </tr>

        <tr>
          <td><strong>Recursive Case</strong></td>
          <td>Makes the function call itself again.</td>
        </tr>

        <tr>
          <td><strong>Factorial</strong></td>
          <td>A common example of recursion.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is recursion?</li>

    <li>What is a recursive function?</li>

    <li>What is a base case?</li>

    <li>What is a recursive case?</li>

    <li>Why is a base case necessary in recursion?</li>

    <li>Give one example of a problem that can be solved using recursion.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain recursion in C with a suitable example.
    </li>

    <li>
      Explain base case and recursive case with an example.
    </li>

    <li>
      Write a C program to calculate factorial using recursion.
    </li>

    <li>
      Differentiate between recursion and iteration.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of recursion and
        recursive functions in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=recursion+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Recursion in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for recursion
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of recursive call,
        base case and recursive case.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 1
// INTRODUCTION
// ============================================================

NOTES["m4-introduction"] = [
  `

  <h2>Introduction to Structure and Union</h2>

  <p>
    C provides special data types that allow a programmer to group
    related data and represent complex information in a program.
    The two important concepts covered in this module are
    <strong>structures</strong> and <strong>unions</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student record may contain a name, roll number and marks.
      These related values can be grouped together using a
      <strong>structure</strong>.
    </p>

  </div>


  <h2>Why Do We Need Structures?</h2>

  <p>
    A structure allows different types of related data to be stored
    together under one variable name. This makes a program easier to
    organize and represent real-world records.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student can have an integer roll number, a character grade,
      and a floating-point percentage. A structure can group all
      these values into one student record.
    </p>

  </div>


  <h2>Real-World Example</h2>

  <p>
    Consider a student database. Information such as
    <strong>Roll Number, Name, Course,</strong> and
    <strong>Percentage</strong> belongs to the same student.
    Treating them as one record makes the data easier to manage.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Example
    </span>

    <p>
      One student record can be represented as:
      <strong>Roll No. = 101, Name = Ravi, Percentage = 82.5</strong>.
    </p>

  </div>


  <h2>Structure</h2>

  <p>
    A <strong>structure</strong> is a user-defined data type that groups
    variables of different data types under one name.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student
{
    int rollNo;
    char grade;
    float percentage;
};
    </div>

    <p>
      Here, <code>Student</code> contains three related members:
      <code>rollNo</code>, <code>grade</code> and <code>percentage</code>.
    </p>

  </div>


  <h2>Union</h2>

  <p>
    A <strong>union</strong> is also a user-defined data type that groups
    different types of members under one name, but its members share
    the same memory location.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
union Data
{
    int number;
    float value;
    char grade;
};
    </div>

    <p>
      In a union, the members share memory, so only one member is normally
      used to hold a meaningful value at a time.
    </p>

  </div>


  <h2>Structure vs Union</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Structure</th>
          <th>Union</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Members have separate memory locations.</td>
          <td>Members share the same memory location.</td>
        </tr>

        <tr>
          <td>Multiple members can hold values at the same time.</td>
          <td>Generally, one member is used at a time.</td>
        </tr>

        <tr>
          <td>Useful for representing complete records.</td>
          <td>Useful when memory needs to be shared among alternatives.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Simple Structure Program</h2>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

int main()
{
    struct Student s;

    s.rollNo = 101;
    s.percentage = 82.5;

    // display student record
    printf("Roll Number = %d\n", s.rollNo);
    printf("Percentage = %.1f\n", s.percentage);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>Roll Number = 101</p>
    <p>Percentage = 82.5</p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to define a structure for a student and display
    the student's roll number and percentage.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the basic idea of a structure.</li>

    <li>Create a structure with members of different data types.</li>

    <li>Store and display values using a structure variable.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Define a structure named <code>Student</code> with an integer
    roll number and a floating-point percentage.
  </p>


  <h3>Theory</h3>

  <p>
    A structure groups related variables of different data types under
    one name. A structure variable is then used to store values for
    those members.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

int main()
{
    struct Student s;

    printf("Enter roll number: ");
    scanf("%d", &amp;s.rollNo);

    printf("Enter percentage: ");
    scanf("%f", &amp;s.percentage);

    // display the stored student information
    printf("Roll Number = %d\n", s.rollNo);
    printf("Percentage = %.1f\n", s.percentage);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number: 101
    </p>

    <p>
      Enter percentage: 82.5
    </p>

    <p>
      Roll Number = 101
    </p>

    <p>
      Percentage = 82.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    A structure is useful when several related values, possibly of
    different data types, need to be treated as one logical record.
  </p>


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
          <td><strong>Structure</strong></td>
          <td>Groups related variables of different data types.</td>
        </tr>

        <tr>
          <td><strong>Union</strong></td>
          <td>Groups members that share the same memory location.</td>
        </tr>

        <tr>
          <td><strong>Structure Member</strong></td>
          <td>A variable declared inside a structure.</td>
        </tr>

        <tr>
          <td><strong>Structure Variable</strong></td>
          <td>Variable used to store a structure record.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a structure in C?</li>

    <li>Why are structures used?</li>

    <li>What is a union in C?</li>

    <li>What is the main difference between a structure and a union?</li>

    <li>What is a structure member?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the concept of structures in C with a suitable example.
    </li>

    <li>
      Explain structures and unions and differentiate between them.
    </li>

    <li>
      Write a C program to store and display student information
      using a structure.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly introduction to structures and unions
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=structures+and+unions+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Structures & Unions in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for structures and
        unions will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of structure, union,
        members and memory sharing.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 2
// TYPES OF STORAGE CLASSES
// ============================================================

NOTES["m4-storage-classes"] = [
  `

  <h2>Storage Classes</h2>

  <p>
    A <strong>storage class</strong> in C specifies important properties
    of a variable such as its <strong>scope</strong>, <strong>lifetime</strong>,
    and how it is stored and accessed by the program.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A variable declared inside a function is normally used only within
      that function, while a global variable can be accessed from
      multiple functions.
    </p>

  </div>


  <h2>Types of Storage Classes</h2>

  <p>
    C provides four commonly studied storage classes:
    <strong>auto, register, static,</strong> and <strong>extern</strong>.
  </p>


  <h2>1. auto Storage Class</h2>

  <p>
    The <strong>auto</strong> storage class is the default storage class
    for local variables declared inside a function or block. The variable
    exists only while that function or block is executing.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
auto int age = 20;
    </div>

    <p>
      Here, <code>age</code> is a local variable with automatic storage
      duration. The keyword <code>auto</code> is normally omitted because
      local variables are automatic by default.
    </p>

  </div>


  <h2>2. register Storage Class</h2>

  <p>
    The <strong>register</strong> storage class requests that a variable
    be kept in a CPU register for faster access when possible. It is
    generally used for frequently accessed local variables.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
register int count = 0;
    </div>

    <p>
      Here, <code>count</code> is declared as a register variable.
      The compiler decides whether it can actually place the variable
      in a CPU register.
    </p>

  </div>


  <h2>3. static Storage Class</h2>

  <p>
    The <strong>static</strong> storage class allows a local variable
    to retain its value between function calls. A static local variable
    is initialized only once and continues to exist for the entire
    execution of the program.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
static int count = 0;
count++;
    </div>

    <p>
      Each time the function is called, <code>count</code> keeps its
      previous value instead of starting again from zero.
    </p>

  </div>


  <h2>4. extern Storage Class</h2>

  <p>
    The <strong>extern</strong> storage class is used to declare a
    variable that is defined elsewhere, usually as a global variable.
    It allows different parts of a program to refer to the same variable.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
extern int marks;
    </div>

    <p>
      Here, <code>marks</code> is declared as an external variable.
      Its actual definition is provided elsewhere in the program.
    </p>

  </div>


  <h2>Storage Classes at a Glance</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Storage Class</th>
          <th>Main Idea</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>auto</strong></td>
          <td>Default local variable.</td>
        </tr>

        <tr>
          <td><strong>register</strong></td>
          <td>Requests faster access through a CPU register.</td>
        </tr>

        <tr>
          <td><strong>static</strong></td>
          <td>Retains value between function calls.</td>
        </tr>

        <tr>
          <td><strong>extern</strong></td>
          <td>Refers to a variable defined elsewhere.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Scope and Lifetime</h2>

  <p>
    <strong>Scope</strong> tells where a variable can be accessed, while
    <strong>lifetime</strong> tells how long the variable exists during
    program execution.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A local <code>auto</code> variable is available only inside its
      block, while a <code>static</code> local variable continues to
      retain its value between calls to the function.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to demonstrate the use of a static variable by
    calling the same function multiple times and observing that the
    variable retains its previous value.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the purpose of the static storage class.</li>

    <li>Observe how a static variable retains its value.</li>

    <li>Understand the difference between repeated function calls
        and a newly created local variable.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Declare a local variable using <code>static</code>, increase its
    value on every function call, and call the function three times.
  </p>


  <h3>Theory</h3>

  <p>
    A static local variable is initialized only once and retains its
    value between function calls. Its scope remains local to the
    function, but its lifetime extends throughout the execution of
    the program.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

void counter()
{
    static int count = 0;

    // increase the retained value on each function call
    count++;

    printf("Count = %d\n", count);
}

int main()
{
    // call the same function three times
    counter();
    counter();
    counter();

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Count = 1
    </p>

    <p>
      Count = 2
    </p>

    <p>
      Count = 3
    </p>

  </div>


  <h3>Note</h3>

  <p>
    If <code>count</code> were an ordinary local variable instead of
    <code>static</code>, it would be initialized again whenever the
    function is called. The static variable retains its previous value.
  </p>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Storage Class</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>auto</strong></td>
          <td>Default for local variables.</td>
        </tr>

        <tr>
          <td><strong>register</strong></td>
          <td>Requests fast access through a CPU register.</td>
        </tr>

        <tr>
          <td><strong>static</strong></td>
          <td>Retains value between function calls.</td>
        </tr>

        <tr>
          <td><strong>extern</strong></td>
          <td>Refers to a variable defined elsewhere.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a storage class in C?</li>

    <li>Name the four storage classes in C.</li>

    <li>What is the auto storage class?</li>

    <li>What is the purpose of the register storage class?</li>

    <li>What is the use of the static storage class?</li>

    <li>What is the extern storage class?</li>

    <li>What is the difference between scope and lifetime?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the different storage classes in C with suitable examples.
    </li>

    <li>
      Explain the static storage class with a suitable program.
    </li>

    <li>
      Differentiate between auto, register, static and extern storage classes.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of storage classes
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=storage+classes+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Storage Classes in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for storage classes
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of auto, register,
        static and extern.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 3
// INTRODUCTION TO STRUCTURES
// ============================================================

NOTES["m4-structures"] = [
  `

  <h2>Introduction to Structures</h2>

  <p>
    A <strong>structure</strong> is a user-defined data type in C that
    allows related variables of different data types to be grouped
    together under one name.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student record may contain a roll number, name and percentage.
      These different values can be grouped into one structure called
      <code>Student</code>.
    </p>

  </div>


  <h2>Why Use a Structure?</h2>

  <p>
    Structures are used when different pieces of related information
    need to be treated as one logical record. They make related data
    easier to organize and manage.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student has a <strong>roll number</strong> (int),
      <strong>percentage</strong> (float), and
      <strong>grade</strong> (char). A structure can store all three
      as one student record.
    </p>

  </div>


  <h2>Syntax of Structure</h2>

  <div class="note-flow">
struct structure_name
{
    data_type member1;
    data_type member2;
    ...
};
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student
{
    int rollNo;
    float percentage;
    char grade;
};
    </div>

    <p>
      Here, <code>Student</code> is the structure name and
      <code>rollNo</code>, <code>percentage</code> and
      <code>grade</code> are its members.
    </p>

  </div>


  <h2>Structure Members</h2>

  <p>
    The variables declared inside a structure are called
    <strong>structure members</strong>. Different members can have
    different data types.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int rollNo;
float percentage;
char grade;
    </div>

    <p>
      Here, <code>rollNo</code>, <code>percentage</code> and
      <code>grade</code> are structure members.
    </p>

  </div>


  <h2>Declaring a Structure Variable</h2>

  <p>
    After defining a structure, a variable of that structure type can
    be declared to store a record.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student s1;
    </div>

    <p>
      Here, <code>s1</code> is a structure variable of type
      <code>struct Student</code>.
    </p>

  </div>


  <h2>Accessing Structure Members</h2>

  <p>
    The <strong>dot operator (.)</strong> is used to access the members
    of a structure variable.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
s1.rollNo = 101;
s1.percentage = 82.5;
    </div>

    <p>
      Here, the dot operator is used to access the
      <code>rollNo</code> and <code>percentage</code> members of
      the structure variable <code>s1</code>.
    </p>

  </div>


  <h2>Structure Initialization</h2>

  <p>
    A structure variable can be initialized when it is declared by
    providing values for its members in the same order in which they
    are declared.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student s1 = {101, 82.5, 'A'};
    </div>

    <p>
      The values are assigned to <code>rollNo</code>,
      <code>percentage</code> and <code>grade</code>, respectively.
    </p>

  </div>


  <h2>Simple Structure Program</h2>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

int main()
{
    struct Student s1 = {101, 82.5};

    // display structure members
    printf("Roll Number = %d\n", s1.rollNo);
    printf("Percentage = %.1f\n", s1.percentage);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Roll Number = 101
    </p>

    <p>
      Percentage = 82.5
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to define a structure named
    <code>Student</code>, accept a student's roll number and percentage,
    and display the stored information.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Define a structure with different data types.</li>

    <li>Declare a structure variable.</li>

    <li>Access structure members using the dot operator.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create a <code>Student</code> structure with
    <code>rollNo</code> and <code>percentage</code> members.
    Use the dot operator to access them.
  </p>


  <h3>Theory</h3>

  <p>
    A structure groups related data under one name. After declaring a
    structure variable, its individual members can be accessed using
    the dot operator.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

int main()
{
    struct Student s1;

    printf("Enter roll number: ");
    scanf("%d", &amp;s1.rollNo);

    printf("Enter percentage: ");
    scanf("%f", &amp;s1.percentage);

    // display the stored student information
    printf("Roll Number = %d\n", s1.rollNo);
    printf("Percentage = %.1f\n", s1.percentage);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number: 101
    </p>

    <p>
      Enter percentage: 82.5
    </p>

    <p>
      Roll Number = 101
    </p>

    <p>
      Percentage = 82.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    A structure is useful for representing a complete record containing
    related values of different data types. The dot operator is used to
    access individual members of a structure variable.
  </p>


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
          <td><strong>Structure</strong></td>
          <td>User-defined data type that groups related variables.</td>
        </tr>

        <tr>
          <td><strong>Member</strong></td>
          <td>Variable declared inside a structure.</td>
        </tr>

        <tr>
          <td><strong>Structure Variable</strong></td>
          <td>Variable used to store a structure record.</td>
        </tr>

        <tr>
          <td><strong>Dot Operator (.)</strong></td>
          <td>Used to access structure members.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a structure in C?</li>

    <li>Why are structures used?</li>

    <li>What are structure members?</li>

    <li>How is a structure variable declared?</li>

    <li>Which operator is used to access structure members?</li>

    <li>Write the syntax of a structure.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain structures in C with syntax and suitable example.
    </li>

    <li>
      Explain how structure variables and structure members are
      declared and accessed.
    </li>

    <li>
      Write a C program to store and display student information
      using a structure.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of structures in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=structure+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Structure in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for structures
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of structure definition,
        members, variables and member access.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 4
// ADVANTAGES OF STRUCTURES
// ============================================================

NOTES["m4-advantages"] = [
  `

  

  <p>
    Structures make it easier to organize and manage related data
    in a C program. They allow different types of data to be grouped
    together as one logical record.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student record can contain an integer roll number, a floating-point
      percentage and a character grade inside one structure.
    </p>

  </div>


  <h2>1. Groups Related Data</h2>

  <p>
    A structure groups related variables under one name, making the
    data easier to understand and manage.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student
{
    int rollNo;
    float percentage;
};
    </div>

    <p>
      Both <code>rollNo</code> and <code>percentage</code> belong to the
      same student record.
    </p>

  </div>


  <h2>2. Stores Different Data Types</h2>

  <p>
    A structure can contain members of different data types. This makes
    it suitable for representing real-world records.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student
{
    int rollNo;
    char grade;
    float percentage;
};
    </div>

    <p>
      Here, <code>int</code>, <code>char</code> and <code>float</code>
      members are grouped together.
    </p>

  </div>


  <h2>3. Represents Real-World Records</h2>

  <p>
    Structures are useful for representing real-world entities such as
    students, employees, books and products.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Example
    </span>

    <p>
      An employee record can contain employee ID, name and salary as
      members of one structure.
    </p>

  </div>


  <h2>4. Improves Program Organization</h2>

  <p>
    Grouping related information into a structure makes a program
    easier to read and organize.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Instead of managing separate variables such as
      <code>rollNo</code>, <code>percentage</code> and <code>grade</code>
      for many students, a structure can represent each student as
      one record.
    </p>

  </div>


  <h2>5. Makes Data Handling Easier</h2>

  <p>
    Structure variables can be passed to functions, returned from
    functions, and used to store multiple records.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A function can receive a <code>struct Student</code> variable
      and display or process its information.
    </p>

  </div>


  <h2>6. Useful for Multiple Records</h2>

  <p>
    An array of structures can be used when the same type of record
    is required for multiple items.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student students[50];
    </div>

    <p>
      This can store information for 50 students using the same
      structure type.
    </p>

  </div>


  <h2>Advantages at a Glance</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Advantage</th>
          <th>What It Provides</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Related Data</strong></td>
          <td>Groups related variables under one name.</td>
        </tr>

        <tr>
          <td><strong>Different Data Types</strong></td>
          <td>Allows different types of members in one record.</td>
        </tr>

        <tr>
          <td><strong>Real-World Representation</strong></td>
          <td>Represents entities such as students and employees.</td>
        </tr>

        <tr>
          <td><strong>Better Organization</strong></td>
          <td>Makes related information easier to manage.</td>
        </tr>

        <tr>
          <td><strong>Function Support</strong></td>
          <td>Structure data can be passed to functions.</td>
        </tr>

        <tr>
          <td><strong>Multiple Records</strong></td>
          <td>Arrays of structures can store many records.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program using a structure to store the details of a
    student and display the record.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand how structures organize related information.</li>

    <li>Store values of different data types in one record.</li>

    <li>Display a complete record using a structure variable.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create a structure named <code>Student</code> containing a roll
    number, grade and percentage.
  </p>


  <h3>Theory</h3>

  <p>
    Structures group related data into a single logical record.
    This is useful for storing information about real-world entities
    where different data types are required.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    char grade;
    float percentage;
};

int main()
{
    struct Student s1;

    printf("Enter roll number: ");
    scanf("%d", &amp;s1.rollNo);

    printf("Enter grade: ");
    scanf(" %c", &amp;s1.grade);

    printf("Enter percentage: ");
    scanf("%f", &amp;s1.percentage);

    // display all student information together
    printf("Roll Number = %d\n", s1.rollNo);
    printf("Grade = %c\n", s1.grade);
    printf("Percentage = %.1f\n", s1.percentage);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number: 101
    </p>

    <p>
      Enter grade: A
    </p>

    <p>
      Enter percentage: 82.5
    </p>

    <p>
      Roll Number = 101
    </p>

    <p>
      Grade = A
    </p>

    <p>
      Percentage = 82.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The main advantage shown in this program is that values of different
    data types are grouped together as one student record.
  </p>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Point</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Grouping</strong></td>
          <td>Related data can be grouped together.</td>
        </tr>

        <tr>
          <td><strong>Different Types</strong></td>
          <td>Different data types can be members of one structure.</td>
        </tr>

        <tr>
          <td><strong>Real-World Data</strong></td>
          <td>Useful for representing records.</td>
        </tr>

        <tr>
          <td><strong>Organization</strong></td>
          <td>Makes data easier to manage.</td>
        </tr>

        <tr>
          <td><strong>Multiple Records</strong></td>
          <td>Arrays of structures can store many records.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What are the advantages of structures in C?</li>

    <li>How do structures help in organizing data?</li>

    <li>Can a structure contain different data types?</li>

    <li>Why are structures useful for real-world records?</li>

    <li>How can multiple records be stored using structures?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the advantages of structures in C with suitable examples.
    </li>

    <li>
      Explain how structures help in organizing related data.
    </li>

    <li>
      Write a C program to store and display student details using
      a structure.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the advantages
        and uses of structures in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=advantages+of+structures+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Advantages of Structures in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for the advantages
        of structures will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of the major advantages
        of structures.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 5
// ACCESSING ELEMENTS OF A STRUCTURE
// ============================================================

NOTES["m4-accessing-elements"] = [
  `

 

  <p>
    The individual members of a structure variable are accessed using
    the <strong>dot operator (.)</strong>. The structure variable is
    written first, followed by a dot and the required member name.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
student.rollNo
student.percentage
    </div>

    <p>
      Here, <code>student</code> is the structure variable and
      <code>rollNo</code> and <code>percentage</code> are its members.
    </p>

  </div>


  <h2>Syntax</h2>

  <div class="note-flow">
structure_variable.member_name
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      <code>s1.rollNo</code> accesses the <code>rollNo</code> member
      of the structure variable <code>s1</code>.
    </p>

  </div>


  <h2>Reading a Structure Member</h2>

  <p>
    A structure member can be used to read its stored value just like
    an ordinary variable.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
printf("%d", s1.rollNo);
    </div>

    <p>
      The value stored in <code>rollNo</code> of <code>s1</code>
      is displayed.
    </p>

  </div>


  <h2>Updating a Structure Member</h2>

  <p>
    A structure member can also be assigned a new value using the
    dot operator.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
s1.rollNo = 105;
    </div>

    <p>
      The <code>rollNo</code> member of <code>s1</code> is changed to
      <code>105</code>.
    </p>

  </div>


  <h2>Accessing Different Members</h2>

  <p>
    Each member is accessed separately using the same structure
    variable followed by the dot operator.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
s1.rollNo
s1.name
s1.percentage
    </div>

    <p>
      Each statement accesses a different member of the same structure
      variable.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to define a structure for a student, accept
    the student's roll number and percentage, and then display these
    values by accessing the structure members.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Use the dot operator to access structure members.</li>

    <li>Read values into individual structure members.</li>

    <li>Display stored values using a structure variable.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create a structure named <code>Student</code> and use
    <code>s1.rollNo</code> and <code>s1.percentage</code> to access
    its members.
  </p>


  <h3>Theory</h3>

  <p>
    The dot operator is used with a structure variable to access its
    individual members. Each member can be read, assigned, or passed
    to a function separately.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

int main()
{
    struct Student s1;

    printf("Enter roll number: ");
    scanf("%d", &amp;s1.rollNo);

    printf("Enter percentage: ");
    scanf("%f", &amp;s1.percentage);

    // access and display individual structure members
    printf("Roll Number = %d\n", s1.rollNo);
    printf("Percentage = %.1f\n", s1.percentage);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number: 101
    </p>

    <p>
      Enter percentage: 82.5
    </p>

    <p>
      Roll Number = 101
    </p>

    <p>
      Percentage = 82.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The dot operator is used when a normal structure variable is used
    to access its members. Pointer-based structure access using
    <code>-&gt;</code> is a separate concept and is covered with pointers.
  </p>


  <h2>Common Mistake</h2>

  <p>
    Students often forget to write the structure variable before the
    dot operator. The member name alone is not enough to identify which
    structure record should be accessed.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Example
    </span>

    <p>
      <strong>Incorrect:</strong> <code>rollNo</code>
    </p>

    <p>
      <strong>Correct:</strong> <code>s1.rollNo</code>
    </p>

  </div>


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
          <td><strong>Dot Operator</strong></td>
          <td>Used to access members of a structure variable.</td>
        </tr>

        <tr>
          <td><strong>Syntax</strong></td>
          <td><code>structure_variable.member_name</code></td>
        </tr>

        <tr>
          <td><strong>Read Member</strong></td>
          <td>Use the member expression to obtain its value.</td>
        </tr>

        <tr>
          <td><strong>Update Member</strong></td>
          <td>Assign a new value using the member expression.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>Which operator is used to access a structure member?</li>

    <li>Write the syntax for accessing a structure member.</li>

    <li>How do you access the roll number of a student structure variable?</li>

    <li>How can a structure member be updated?</li>

    <li>What is the difference between a structure variable and a structure member?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain how structure members are accessed using the dot operator
      with suitable examples.
    </li>

    <li>
      Write a C program to accept and display student information using
      structure members.
    </li>

    <li>
      Explain how to read and modify individual members of a structure.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of accessing structure
        members in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=accessing+structure+members+dot+operator+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Accessing Structure Members in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for accessing
        structure members will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of structure variable,
        member and dot operator.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 6
// NESTED STRUCTURES
// ============================================================

NOTES["m4-nested-structures"] = [
  `

  

  <p>
    A <strong>nested structure</strong> is a structure that contains
    another structure as one of its members. It is useful when a record
    contains another related record.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A student record may contain personal information and an address.
      The address itself can be represented using another structure.
    </p>

  </div>


  <h2>Why Use Nested Structures?</h2>

  <p>
    Nested structures help organize complex information by dividing it
    into smaller related structures. This makes a large record easier
    to understand and manage.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A <code>Student</code> structure can contain an
      <code>Address</code> structure for storing city and PIN code.
    </p>

  </div>


  <h2>Simple Structure Inside Another Structure</h2>

  <div class="note-flow">
struct Address
{
    char city[30];
    int pinCode;
};

struct Student
{
    int rollNo;
    struct Address address;
};
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Here, <code>address</code> is a member of <code>Student</code>,
      and its type is <code>struct Address</code>.
    </p>

  </div>


  <h2>Accessing Nested Structure Members</h2>

  <p>
    A member inside the nested structure is accessed by using the dot
    operator twice: first for the outer structure member and then for
    the inner structure member.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
student.address.pinCode
student.address.city
    </div>

    <p>
      Here, <code>student</code> is the outer structure variable,
      <code>address</code> is its nested structure member, and
      <code>pinCode</code> and <code>city</code> are members of
      the nested structure.
    </p>

  </div>


  <h2>Real-World Example</h2>

  <p>
    A company employee record may contain employee details and a separate
    address record. The address can be stored as a nested structure
    inside the employee structure.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      🌍 Example
    </span>

    <p>
      Employee → Name, ID, Address → City, PIN Code.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program using nested structures to store a student's
    roll number, city and PIN code, and display all the information.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the concept of nested structures.</li>

    <li>Define one structure as a member of another structure.</li>

    <li>Access members of a nested structure using the dot operator.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    First create an <code>Address</code> structure. Then use
    <code>struct Address</code> as a member inside the
    <code>Student</code> structure.
  </p>


  <h3>Theory</h3>

  <p>
    In a nested structure, one structure is included as a member of
    another structure. The inner structure members are accessed through
    the outer structure variable using the dot operator.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Address
{
    char city[30];
    int pinCode;
};

struct Student
{
    int rollNo;
    struct Address address;
};

int main()
{
    struct Student s1;

    printf("Enter roll number: ");
    scanf("%d", &amp;s1.rollNo);

    printf("Enter city: ");
    scanf("%29s", s1.address.city);

    printf("Enter PIN code: ");
    scanf("%d", &amp;s1.address.pinCode);

    // display student and nested address information
    printf("Roll Number = %d\n", s1.rollNo);
    printf("City = %s\n", s1.address.city);
    printf("PIN Code = %d\n", s1.address.pinCode);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number: 101
    </p>

    <p>
      Enter city: Jaipur
    </p>

    <p>
      Enter PIN code: 302001
    </p>

    <p>
      Roll Number = 101
    </p>

    <p>
      City = Jaipur
    </p>

    <p>
      PIN Code = 302001
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The expression <code>s1.address.pinCode</code> first accesses the
    <code>address</code> member of <code>s1</code> and then accesses
    the <code>pinCode</code> member inside that nested structure.
  </p>


  <h2>Important Point</h2>

  <p>
    Nested structures are useful when a single record contains smaller
    records that have their own related data.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Example
    </span>

    <p>
      <code>Student → Address → City, PIN Code</code>
    </p>

  </div>


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
          <td><strong>Nested Structure</strong></td>
          <td>A structure used as a member of another structure.</td>
        </tr>

        <tr>
          <td><strong>Outer Structure</strong></td>
          <td>The structure containing another structure.</td>
        </tr>

        <tr>
          <td><strong>Inner Structure</strong></td>
          <td>The structure used as a member inside the outer structure.</td>
        </tr>

        <tr>
          <td><strong>Member Access</strong></td>
          <td>Use the dot operator through the outer structure member.</td>
        </tr>

        <tr>
          <td><strong>Example</strong></td>
          <td><code>student.address.city</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a nested structure?</li>

    <li>Why are nested structures used?</li>

    <li>How is one structure included inside another structure?</li>

    <li>How do you access a member of a nested structure?</li>

    <li>Write an example of a nested structure.</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain nested structures in C with syntax and suitable example.
    </li>

    <li>
      Write a C program using a nested structure to store student
      and address information.
    </li>

    <li>
      Explain how members of a nested structure are accessed.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of nested structures
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=nested+structures+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Nested Structures in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for nested structures
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of outer structure,
        inner structure and member access.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 7
// ARRAY OF STRUCTURES
// ============================================================

NOTES["m4-array-structures"] = [
  `

  <p>
    An <strong>array of structures</strong> is an array whose elements
    are structure variables of the same structure type. It is useful
    for storing multiple records of the same kind.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
struct Student students[50];
    </div>

    <p>
      Here, <code>students</code> can store records of 50 students.
    </p>
  </div>


  <h2>Why Use an Array of Structures?</h2>

  <p>
    A single structure variable stores one record, while an array of
    structures can store many similar records together. This is useful
    for student, employee, book, and product records.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <p>
      Instead of creating <code>s1</code>, <code>s2</code>, and
      <code>s3</code> separately, an array can store all three student
      records as <code>students[0]</code>, <code>students[1]</code>,
      and <code>students[2]</code>.
    </p>
  </div>


  <h2>Declaration</h2>

  <p>
    An array of structures is declared by placing the array name and
    size after the structure type.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
struct Student students[3];
    </div>

    <p>
      This creates an array that can store three
      <code>struct Student</code> records.
    </p>
  </div>


  <h2>Accessing Elements</h2>

  <p>
    An individual structure in the array is accessed using its index,
    and its member is then accessed using the dot operator.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
students[0].rollNo
students[1].percentage
    </div>

    <p>
      The index selects the required student record and the dot operator
      accesses its member.
    </p>
  </div>


  <h2>Using a Loop</h2>

  <p>
    A loop can be used to read or display all records in an array of
    structures. This avoids writing the same statements repeatedly.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
for (int i = 0; i < 3; i++)
    printf("%d", students[i].rollNo);
    </div>

    <p>
      The loop accesses the roll number of each student one by one.
    </p>
  </div>


  <h2>Real-World Example</h2>

  <p>
    A college system may need to store information for many students.
    An array of structures can keep all student records under one
    common structure type.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">🌍 Example</span>

    <p>
      <code>students[0]</code> → Student 1<br>
      <code>students[1]</code> → Student 2<br>
      <code>students[2]</code> → Student 3
    </p>
  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to store the roll number and percentage of three
    students using an array of structures and display all the records.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Declare an array of structures.</li>

    <li>Store multiple records using one structure type.</li>

    <li>Use a loop to access and display structure records.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create a <code>Student</code> structure and declare an array of
    three students. Use a <code>for</code> loop to read and display
    the values.
  </p>


  <h3>Theory</h3>

  <p>
    An array of structures combines the features of arrays and
    structures. Each array element is a complete structure record,
    and individual members are accessed using the index and dot operator.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

int main()
{
    struct Student students[3];
    int i;

    // read details of three students
    for (i = 0; i &lt; 3; i++)
    {
        printf("Enter roll number for student %d: ", i + 1);
        scanf("%d", &amp;students[i].rollNo);

        printf("Enter percentage: ");
        scanf("%f", &amp;students[i].percentage);
    }

    printf("\nStudent Records:\n");

    // display all student records
    for (i = 0; i &lt; 3; i++)
    {
        printf("Roll Number = %d, Percentage = %.1f\n",
               students[i].rollNo,
               students[i].percentage);
    }

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number for student 1: 101
    </p>

    <p>
      Enter percentage: 82.5
    </p>

    <p>
      Enter roll number for student 2: 102
    </p>

    <p>
      Enter percentage: 76.0
    </p>

    <p>
      Enter roll number for student 3: 103
    </p>

    <p>
      Enter percentage: 88.5
    </p>

    <p><strong>Student Records:</strong></p>

    <p>
      Roll Number = 101, Percentage = 82.5
    </p>

    <p>
      Roll Number = 102, Percentage = 76.0
    </p>

    <p>
      Roll Number = 103, Percentage = 88.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    Each element of the array is a complete structure record.
    For example, <code>students[1].rollNo</code> accesses the roll
    number of the second student.
  </p>


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
          <td><strong>Array of Structures</strong></td>
          <td>Stores multiple structure records of the same type.</td>
        </tr>

        <tr>
          <td><strong>Declaration</strong></td>
          <td><code>struct Student students[3];</code></td>
        </tr>

        <tr>
          <td><strong>Array Element</strong></td>
          <td>Each element is one complete structure record.</td>
        </tr>

        <tr>
          <td><strong>Member Access</strong></td>
          <td><code>students[i].rollNo</code></td>
        </tr>

        <tr>
          <td><strong>Loop</strong></td>
          <td>Useful for processing multiple records.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an array of structures?</li>

    <li>Why is an array of structures used?</li>

    <li>Write the syntax for declaring an array of structures.</li>

    <li>How do you access a structure member in an array?</li>

    <li>Why are loops useful with arrays of structures?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain an array of structures with declaration and suitable example.
    </li>

    <li>
      Write a C program to store and display multiple student records
      using an array of structures.
    </li>

    <li>
      Explain how structure members are accessed in an array of structures.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of arrays of structures
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=array+of+structures+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Array of Structures in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for arrays of
        structures will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of structure array,
        indexing, member access and loops.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 8
// FUNCTIONS AND STRUCTURES
// ============================================================

NOTES["m4-functions-structures"] = [
  `

  <p>
    Structures and functions can be used together to make a program
    more organized and reusable. A structure variable can be passed
    to a function so that the function can access or process the
    related data stored in the structure.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A <code>Student</code> structure can be passed to a function
      named <code>displayStudent()</code> to display the student's
      details.
    </p>

  </div>


  <h2>Passing a Structure to a Function</h2>

  <p>
    A structure variable can be passed to a function just like other
    variables. The called function receives a copy of the structure
    and can use its members.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
displayStudent(s1);
    </div>

    <p>
      Here, <code>s1</code> is a structure variable passed to the
      function <code>displayStudent()</code>.
    </p>

  </div>


  <h2>Function Parameter for a Structure</h2>

  <p>
    The parameter of a function can be declared using the structure
    type. This allows the function to receive a complete structure
    record.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
void displayStudent(struct Student s)
{
    printf("%d", s.rollNo);
}
    </div>

    <p>
      The function receives a <code>struct Student</code> variable
      as its parameter and accesses its member using the dot operator.
    </p>

  </div>


  <h2>Accessing Structure Members Inside a Function</h2>

  <p>
    Once a structure variable is available inside a function, its
    members can be accessed using the dot operator in the same way
    as in <code>main()</code>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
s.rollNo
s.percentage
    </div>

    <p>
      These expressions access individual members of the structure
      variable <code>s</code>.
    </p>

  </div>


  <h2>Why Use Structures with Functions?</h2>

  <p>
    Combining structures and functions helps divide a program into
    smaller tasks. One function can accept a record, process it, or
    display it, while other parts of the program remain unchanged.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      In a student management program, one function can read student
      details and another function can display those details.
    </p>

  </div>


  <h2>Structure and Function Flow</h2>

  <div class="note-flow">
Structure Variable
       ↓
Function Call
       ↓
Structure Parameter
       ↓
Process / Display Members
       ↓
Result
  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to create a student structure and pass a structure
    variable to a function that displays the student's roll number and
    percentage.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Pass a structure variable to a function.</li>

    <li>Define a function that accepts a structure as a parameter.</li>

    <li>Access structure members inside a function.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Define a <code>Student</code> structure, create a structure variable,
    and pass it to a function named <code>displayStudent()</code>.
  </p>


  <h3>Theory</h3>

  <p>
    A structure can be passed to a function as an argument. When a
    structure is passed by value, the function receives a copy of the
    structure and can access its members using the dot operator.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Student
{
    int rollNo;
    float percentage;
};

void displayStudent(struct Student s)
{
    // display the members received from the structure
    printf("Roll Number = %d\n", s.rollNo);
    printf("Percentage = %.1f\n", s.percentage);
}

int main()
{
    struct Student s1;

    printf("Enter roll number: ");
    scanf("%d", &amp;s1.rollNo);

    printf("Enter percentage: ");
    scanf("%f", &amp;s1.percentage);

    // pass the complete structure to the function
    displayStudent(s1);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Enter roll number: 101
    </p>

    <p>
      Enter percentage: 82.5
    </p>

    <p>
      Roll Number = 101
    </p>

    <p>
      Percentage = 82.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    In this program, <code>s1</code> is passed to
    <code>displayStudent()</code>. The function receives the structure
    and accesses its members using <code>s.rollNo</code> and
    <code>s.percentage</code>.
  </p>


  <h2>Returning a Structure from a Function</h2>

  <p>
    A function can also return a complete structure to the calling
    function. The return type of the function is declared as the
    corresponding structure type.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Student createStudent()
{
    struct Student s = {101, 82.5};
    return s;
}
    </div>

    <p>
      The function creates a <code>Student</code> structure and returns
      it to the calling function.
    </p>

  </div>


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
          <td><strong>Structure as Argument</strong></td>
          <td>A structure variable can be passed to a function.</td>
        </tr>

        <tr>
          <td><strong>Structure Parameter</strong></td>
          <td>Function parameter can be declared as a structure type.</td>
        </tr>

        <tr>
          <td><strong>Member Access</strong></td>
          <td>Use the dot operator inside the function.</td>
        </tr>

        <tr>
          <td><strong>Return Structure</strong></td>
          <td>A function can return a complete structure.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>How can a structure variable be passed to a function?</li>

    <li>How is a structure parameter declared?</li>

    <li>How are structure members accessed inside a function?</li>

    <li>Can a function return a structure?</li>

    <li>Why are structures used with functions?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain how structures can be passed to functions with a suitable
      example.
    </li>

    <li>
      Write a C program to pass a structure variable to a function and
      display its members.
    </li>

    <li>
      Explain how a function can return a structure.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of passing structures
        to functions in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=passing+structure+to+function+in+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Structures and Functions in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for structures
        and functions will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of structure arguments,
        parameters, member access and return values.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 9
// UNIONS
// ============================================================

NOTES["m4-unions"] = [
  `

  <p>
    A <strong>union</strong> is a user-defined data type in C that allows
    different members to share the same memory location. A union can
    contain members of different data types, but at a particular time,
    the same memory area is used by all its members.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
union Data
{
    int number;
    float value;
    char grade;
};
    </div>

    <p>
      Here, <code>number</code>, <code>value</code>, and
      <code>grade</code> share the same memory area.
    </p>

  </div>


  <h2>Syntax of a Union</h2>

  <p>
    A union is declared using the <code>union</code> keyword, followed
    by the union name and its members inside braces.
  </p>

  <div class="note-flow">
union union_name
{
    data_type member1;
    data_type member2;
    ...
};
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
union Data
{
    int number;
    float value;
};
    </div>

  </div>


  <h2>Declaring a Union Variable</h2>

  <p>
    After defining a union, a union variable is declared using the
    union type. The variable provides access to the members of the union.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
union Data d1;
    </div>

    <p>
      Here, <code>d1</code> is a variable of type
      <code>union Data</code>.
    </p>

  </div>


  <h2>Accessing Union Members</h2>

  <p>
    Union members are accessed using the <strong>dot operator (.)</strong>,
    just like members of a structure.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
d1.number
d1.value
    </div>

  </div>


  <h2>Important Feature of a Union</h2>

  <p>
    The most important feature of a union is that all its members share
    the same memory location. Therefore, assigning a value to one member
    can affect the value represented by another member.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Example
    </span>

    <div class="note-flow">
d1.number = 10;
d1.value = 25.5;
    </div>

    <p>
      After assigning <code>d1.value</code>, the same shared memory is
      being used for that member. Therefore, a union is normally used
      when only one of its alternative members needs to hold a meaningful
      value at a time.
    </p>

  </div>


  <h2>Memory Usage</h2>

  <p>
    The size of a union is determined by the size required for its
    largest member, subject to the compiler's alignment requirements.
    Since members share storage, a union can use less memory than a
    structure containing the same members.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      If a union contains an <code>int</code>, a <code>float</code>,
      and a <code>char</code>, its storage is large enough to hold
      the member requiring the largest amount of storage.
    </p>

  </div>


  <h2>Union vs Structure</h2>

  <p>
    Both structures and unions can contain members of different data
    types, but their memory arrangement is different. A structure
    gives separate storage to its members, whereas a union shares
    the same storage among its members.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Structure</th>
          <th>Union</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Each member has separate storage.</td>
          <td>All members share the same storage.</td>
        </tr>

        <tr>
          <td>Multiple members can hold meaningful values at the same time.</td>
          <td>Normally one member is used to hold the meaningful value at a time.</td>
        </tr>

        <tr>
          <td>Size is generally based on the total storage of its members and padding.</td>
          <td>Size is generally based on the largest member and alignment.</td>
        </tr>

        <tr>
          <td>Useful for complete records.</td>
          <td>Useful when alternative representations share storage.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>When is a Union Useful?</h2>

  <p>
    A union is useful when a program needs to store one of several
    possible types of information in the same memory area. It is
    especially useful when saving memory is important.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      A data item may sometimes need to store an integer and at another
      time a floating-point value. A union allows both alternatives
      to use the same storage.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to define a union containing an integer and a
    floating-point member. Store a value in each member one at a time
    and display the value after each assignment.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Define and declare a union.</li>

    <li>Access union members using the dot operator.</li>

    <li>Observe that union members share the same memory.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create a union named <code>Data</code> with members
    <code>number</code> and <code>value</code>. Assign a value to one
    member, display it, and then assign a value to the other member.
  </p>


  <h3>Theory</h3>

  <p>
    Unlike a structure, a union provides one shared memory area for all
    its members. When a value is assigned to one member, that member
    becomes the currently stored value in that shared area.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

union Data
{
    int number;
    float value;
};

int main()
{
    union Data d1;

    d1.number = 10;

    // display the integer value stored in the union
    printf("Integer value = %d\n", d1.number);

    d1.value = 25.5;

    // display the floating-point value stored in the union
    printf("Float value = %.1f\n", d1.value);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Integer value = 10
    </p>

    <p>
      Float value = 25.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The program stores one value and then uses the same shared memory
    for another member. Therefore, a union should be used when the
    members represent alternative forms of data rather than values
    that must all be stored simultaneously.
  </p>


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
          <td><strong>Union</strong></td>
          <td>User-defined type whose members share memory.</td>
        </tr>

        <tr>
          <td><strong>Keyword</strong></td>
          <td><code>union</code></td>
        </tr>

        <tr>
          <td><strong>Member Access</strong></td>
          <td>Use the dot operator.</td>
        </tr>

        <tr>
          <td><strong>Memory</strong></td>
          <td>Members use the same storage area.</td>
        </tr>

        <tr>
          <td><strong>Main Use</strong></td>
          <td>Useful for alternative data that can share storage.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a union in C?</li>

    <li>How is a union declared?</li>

    <li>How are union members accessed?</li>

    <li>How is a union different from a structure?</li>

    <li>Why do union members share memory?</li>

    <li>What determines the size of a union?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the concept of unions in C with syntax and suitable example.
    </li>

    <li>
      Differentiate between structures and unions.
    </li>

    <li>
      Write a C program to demonstrate the working of a union.
    </li>

    <li>
      Explain the memory allocation of a union.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of unions in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=union+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Union in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for unions
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of union, shared memory,
        member access and structure comparison.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 10
// BIT-FIELDS
// ============================================================

NOTES["m4-bit-fields"] = [
  `

  <p>
    A <strong>bit-field</strong> is a special feature of C structures
    that allows a member to use a specified number of bits instead of
    using the normal size of its data type. Bit-fields are useful when
    a variable needs to store only a small range of values.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
unsigned int gender : 1;
    </div>

    <p>
      A 1-bit field can represent two states, such as
      <code>0</code> and <code>1</code>.
    </p>

  </div>


  <h2>Why Are Bit-fields Used?</h2>

  <p>
    If a variable needs only a few possible values, using a complete
    integer for it may use more memory than necessary. Bit-fields allow
    the programmer to specify only the number of bits required for that
    particular member.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      If a variable can have only two values, <code>0</code> and
      <code>1</code>, one bit is sufficient to represent it.
    </p>

  </div>


  <h2>Number of Values and Required Bits</h2>

  <p>
    The number of bits determines how many different values can be
    represented. With <strong>n bits</strong>, up to
    <strong>2<sup>n</sup></strong> different combinations can be
    represented.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Bits</th>
          <th>Possible Values</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>1 bit</strong></td>
          <td>2 values</td>
        </tr>

        <tr>
          <td><strong>2 bits</strong></td>
          <td>4 values</td>
        </tr>

        <tr>
          <td><strong>3 bits</strong></td>
          <td>8 values</td>
        </tr>

        <tr>
          <td><strong>4 bits</strong></td>
          <td>16 values</td>
        </tr>

      </tbody>

    </table>

  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      If a value can range from <code>0</code> to <code>3</code>,
      four different values are possible, so <strong>2 bits</strong>
      are sufficient.
    </p>

  </div>


  <h2>Syntax of a Bit-field</h2>

  <p>
    A bit-field is declared inside a structure by writing the data type,
    member name, and the number of bits after a colon.
  </p>

  <div class="note-flow">
data_type member_name : number_of_bits;
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
unsigned int gender : 1;
unsigned int status : 2;
    </div>

  </div>


  <h2>Bit-fields Inside a Structure</h2>

  <p>
    Bit-fields are generally used as members of a structure. Different
    members can be assigned different numbers of bits according to the
    values they need to represent.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
struct Employee
{
    unsigned int gender : 1;
    unsigned int status : 2;
    unsigned int hobby : 3;
};
    </div>

    <p>
      Here, each member is given a specific number of bits according
      to the amount of information it needs to store.
    </p>

  </div>


  <h2>Important Points About Bit-fields</h2>

  <ul>

    <li>
      Bit-fields are declared inside a structure.
    </li>

    <li>
      The width of a bit-field is specified after a colon.
    </li>

    <li>
      The width indicates how many bits are allocated to that member.
    </li>

    <li>
      Bit-fields are useful when memory usage needs to be reduced.
    </li>

    <li>
      The values that can be represented depend on the number of bits
      assigned to the field.
    </li>

  </ul>


  <h2>Example from the Concept</h2>

  <p>
    Suppose an employee record needs to store whether the employee is
    male or female, the marital status, a hobby category, and a scheme
    number. These fields can be represented using different numbers of
    bits instead of using separate full-size integer members.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
unsigned int gender : 1;
unsigned int mar_status : 2;
unsigned int hobby : 3;
unsigned int scheme : 4;
    </div>

    <p>
      The number after <code>:</code> specifies the number of bits
      assigned to each member.
    </p>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program using bit-fields to store simple employee
    information such as gender, marital status and hobby, and display
    the stored values.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the purpose of bit-fields.</li>

    <li>Declare bit-fields inside a structure.</li>

    <li>Assign and access values stored in bit-fields.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Define an <code>Employee</code> structure with bit-fields for
    gender, marital status and hobby. Assign values and display them.
  </p>


  <h3>Theory</h3>

  <p>
    Bit-fields allow a structure member to occupy a specified number
    of bits. This is useful for data whose possible values are limited,
    because only the required number of bits needs to be allocated.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

struct Employee
{
    unsigned int gender : 1;
    unsigned int maritalStatus : 2;
    unsigned int hobby : 3;
};

int main()
{
    struct Employee e1;

    e1.gender = 1;
    e1.maritalStatus = 2;
    e1.hobby = 5;

    // display the values stored in bit-fields
    printf("Gender = %u\n", e1.gender);
    printf("Marital Status = %u\n", e1.maritalStatus);
    printf("Hobby = %u\n", e1.hobby);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Gender = 1
    </p>

    <p>
      Marital Status = 2
    </p>

    <p>
      Hobby = 5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    In the program, <code>gender</code> uses 1 bit,
    <code>maritalStatus</code> uses 2 bits, and <code>hobby</code>
    uses 3 bits. The bit-field width limits the range of values that
    can be stored in each member.
  </p>


  <h2>Advantages of Bit-fields</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Advantage</th>
          <th>Explanation</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Memory Efficiency</strong></td>
          <td>
            Only the specified number of bits is allocated to a field.
          </td>
        </tr>

        <tr>
          <td><strong>Compact Data</strong></td>
          <td>
            Useful for storing several small values together.
          </td>
        </tr>

        <tr>
          <td><strong>Useful for Flags</strong></td>
          <td>
            Suitable for values that represent ON/OFF or similar states.
          </td>
        </tr>

        <tr>
          <td><strong>Structured Representation</strong></td>
          <td>
            Related bit-level information can be grouped in a structure.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Limitations</h2>

  <p>
    Bit-fields are useful for compact data storage, but their exact
    memory layout and some implementation details can depend on the
    compiler. Therefore, they should be used carefully when a program
    must depend on a particular memory representation.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Remember
    </span>

    <p>
      Bit-fields are mainly useful when the range of possible values
      is known and small.
    </p>

  </div>


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
          <td><strong>Bit-field</strong></td>
          <td>
            Structure member with a specified number of bits.
          </td>
        </tr>

        <tr>
          <td><strong>Syntax</strong></td>
          <td>
            <code>type member : width;</code>
          </td>
        </tr>

        <tr>
          <td><strong>1 Bit</strong></td>
          <td>
            Can represent 2 possible combinations.
          </td>
        </tr>

        <tr>
          <td><strong>2 Bits</strong></td>
          <td>
            Can represent 4 possible combinations.
          </td>
        </tr>

        <tr>
          <td><strong>Use</strong></td>
          <td>
            Useful for compact storage of small-range values.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a bit-field in C?</li>

    <li>Why are bit-fields used?</li>

    <li>Write the syntax of a bit-field.</li>

    <li>How many different combinations can be represented using 3 bits?</li>

    <li>Where are bit-fields declared?</li>

    <li>What does the number after the colon represent?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain bit-fields in C with syntax and suitable example.
    </li>

    <li>
      Explain the advantages of using bit-fields in structures.
    </li>

    <li>
      Write a C program to demonstrate the use of bit-fields.
    </li>

    <li>
      Explain how the number of bits affects the values that can be
      stored in a bit-field.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of bit-fields in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=bit+fields+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Bit-fields in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for bit-fields
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of bit-field width,
        structure declaration and memory efficiency.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 4 — TOPIC 11
// ENUMERATED DATA TYPES
// ============================================================

NOTES["m4-enumerated"] = [
  `

  <p>
    An <strong>enumerated data type</strong>, or <strong>enum</strong>,
    is a user-defined data type in C that allows a programmer to create
    a set of named integer constants. Instead of using numbers directly,
    meaningful names can be used to represent related values.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
enum Status
{
    single,
    married,
    divorced,
    widowed
};
    </div>

    <p>
      Here, <code>single</code>, <code>married</code>,
      <code>divorced</code> and <code>widowed</code> are named
      enumeration constants.
    </p>

  </div>


  <h2>Why Use enum?</h2>

  <p>
    An enum makes a program easier to understand because meaningful
    names can be used instead of unexplained integer values. It is
    useful when a variable can have one value from a fixed set of
    related choices.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Instead of storing marital status as <code>0</code>,
      <code>1</code>, <code>2</code> and <code>3</code>, we can use
      <code>single</code>, <code>married</code>,
      <code>divorced</code> and <code>widowed</code>.
    </p>

  </div>


  <h2>Syntax of enum</h2>

  <p>
    The <code>enum</code> keyword is followed by the enumeration name
    and a list of named constants enclosed in braces.
  </p>

  <div class="note-flow">
enum enum_name
{
    constant1,
    constant2,
    constant3
};
  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
enum Day
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
};
    </div>

  </div>


  <h2>Declaring an enum Variable</h2>

  <p>
    After defining an enumeration type, a variable of that enum type
    can be declared. The variable can then store one of the defined
    enumeration values.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
enum Day today;
    </div>

    <p>
      Here, <code>today</code> is an enum variable of type
      <code>Day</code>.
    </p>

  </div>


  <h2>Assigning Values to enum Constants</h2>

  <p>
    By default, enumeration constants are assigned integer values
    starting from <code>0</code> and increasing by <code>1</code>.
    The programmer can also explicitly assign values when required.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
enum Status
{
    single = 100,
    married = 200,
    divorced = 300,
    widowed = 400
};
    </div>

    <p>
      Here, the enumeration constants are assigned explicit integer
      values instead of the default sequence.
    </p>

  </div>


  <h2>Using enum in a Program</h2>

  <p>
    An enum variable can be assigned one of the named constants.
    Using these names makes the purpose of the value clear to the
    reader of the program.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
enum Status status;

status = married;
    </div>

    <p>
      The variable <code>status</code> is assigned the enumeration
      constant <code>married</code>.
    </p>

  </div>


  <h2>Default Integer Values</h2>

  <p>
    When values are not explicitly specified, the first enumeration
    constant gets the value <code>0</code>, the next gets
    <code>1</code>, and so on. These are integer values internally,
    but the named constants make the program easier to read.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
enum Color
{
    Red,
    Green,
    Blue
};
    </div>

    <p>
      The constants are assigned values in sequence:
      <code>Red = 0</code>, <code>Green = 1</code> and
      <code>Blue = 2</code>.
    </p>

  </div>


  <h2>Advantages of enum</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Advantage</th>
          <th>Explanation</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Readability</strong></td>
          <td>
            Meaningful names are easier to understand than raw numbers.
          </td>
        </tr>

        <tr>
          <td><strong>Better Organization</strong></td>
          <td>
            Related constant values can be grouped together.
          </td>
        </tr>

        <tr>
          <td><strong>Fixed Set of Values</strong></td>
          <td>
            Useful when a variable should represent one choice from
            a known set.
          </td>
        </tr>

        <tr>
          <td><strong>Maintainability</strong></td>
          <td>
            Named constants make programs easier to read and maintain.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program using an enumerated data type to represent the
    status of an employee and display the selected status.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Define an enumerated data type.</li>

    <li>Declare and use an enum variable.</li>

    <li>Understand named integer constants.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Create an enum named <code>Status</code> containing
    <code>single</code>, <code>married</code>,
    <code>divorced</code> and <code>widowed</code>.
    Assign one of these values to an enum variable.
  </p>


  <h3>Theory</h3>

  <p>
    An enumeration provides names for a related set of integer
    constants. It is particularly useful when a variable can have
    one value from a small, predefined set of choices.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

enum Status
{
    single,
    married,
    divorced,
    widowed
};

int main()
{
    enum Status employeeStatus;

    employeeStatus = married;

    // display the selected employee status
    if (employeeStatus == married)
        printf("Employee Status = Married\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Employee Status = Married
    </p>

  </div>


  <h3>Note</h3>

  <p>
    In this program, <code>married</code> is one of the named constants
    defined inside the enumeration. Internally, enumeration constants
    are represented as integer values, but their names make the program
    easier to understand.
  </p>


  <h2>enum with switch</h2>

  <p>
    Enumeration values are particularly useful with a
    <code>switch</code> statement when different actions need to be
    performed for different named choices.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
switch (status)
{
    case single:
        printf("Single");
        break;

    case married:
        printf("Married");
        break;
}
    </div>

  </div>


  <h2>Common Mistake</h2>

  <p>
    Enumeration constants are names representing integer values. They
    should not be confused with strings such as <code>"married"</code>.
    The enum constant <code>married</code> is not a string.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Remember
    </span>

    <p>
      <code>married</code> → enumeration constant<br>
      <code>"married"</code> → string literal
    </p>

  </div>


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
          <td><strong>enum</strong></td>
          <td>
            User-defined type containing named integer constants.
          </td>
        </tr>

        <tr>
          <td><strong>Keyword</strong></td>
          <td>
            <code>enum</code>
          </td>
        </tr>

        <tr>
          <td><strong>Default Values</strong></td>
          <td>
            Start from 0 and increase by 1 unless explicitly assigned.
          </td>
        </tr>

        <tr>
          <td><strong>Use</strong></td>
          <td>
            Represents one choice from a fixed set of related values.
          </td>
        </tr>

        <tr>
          <td><strong>Example</strong></td>
          <td>
            <code>enum Status { single, married, divorced, widowed };</code>
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is an enumerated data type?</li>

    <li>What is the purpose of the <code>enum</code> keyword?</li>

    <li>What are enumeration constants?</li>

    <li>What values are assigned by default to enum constants?</li>

    <li>Can specific values be assigned to enumeration constants?</li>

    <li>Why is enum useful for program readability?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain enumerated data types in C with syntax and suitable example.
    </li>

    <li>
      Explain the advantages and uses of enumerated data types.
    </li>

    <li>
      Write a C program to demonstrate the use of an enum variable.
    </li>

    <li>
      Explain the default and user-defined values of enumeration
      constants.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of enumerated data types
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=enumerated+data+type+enum+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: enum in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for enumerated
        data types will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for quick revision of enum, constants,
        default values and practical uses.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 5 — TOPIC 1
// POINTERS: IDEA OF POINTERS
// ============================================================

NOTES["m5-pointer-idea"] = [
  `

  <p>
    A <strong>pointer</strong> is a variable that stores the address
    of another variable. Since every variable is stored at some memory
    location, a pointer can be used to keep the address of that
    location and access the value stored there.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int age = 20;
int *ptr;

ptr = &age;
    </div>

    <p>
      Here, <code>age</code> stores the value <code>20</code>, while
      <code>ptr</code> stores the address of <code>age</code>.
    </p>

  </div>


  <h2>Variable and Memory Address</h2>

  <p>
    Whenever a variable is declared, the computer allocates a memory
    location for it. The variable has a value, and that memory location
    has an address. The actual address may be different each time the
    program runs, so the important thing is the relationship between
    the variable and its address.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int marks = 75;
    </div>

    <p>
      The value <code>75</code> is stored somewhere in memory and that
      memory location has an address.
    </p>

  </div>


  <h2>Address of a Variable</h2>

  <p>
    The <strong>address of a variable</strong> is the memory location
    where its value is stored. In C, the address of a variable can be
    obtained using the <strong>address-of operator (&amp;)</strong>.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int marks = 75;

printf("%p", (void *)&amp;marks);
    </div>

    <p>
      The expression <code>&amp;marks</code> gives the address of the
      variable <code>marks</code>.
    </p>

  </div>


  <h2>Address-of Operator (&amp;)</h2>

  <p>
    The <strong>&amp;</strong> operator is called the
    <strong>address-of operator</strong>. It returns the memory address
    of the variable placed after it. This address can then be stored
    in a pointer variable of the appropriate type.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int number = 10;

&amp;number
    </div>

    <p>
      <code>&amp;number</code> represents the address of
      <code>number</code>, not the value <code>10</code>.
    </p>

  </div>


  <h2>Pointer Variable</h2>

  <p>
    A pointer variable is a variable specifically designed to store a
    memory address. The type of the pointer tells the compiler what
    kind of value is expected at the address stored in that pointer.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int *ptr;
    </div>

    <p>
      Here, <code>ptr</code> is a pointer to an integer. It can store
      the address of an <code>int</code> variable.
    </p>

  </div>


  <h2>Value-at-Address Operator (*)</h2>

  <p>
    The <strong>*</strong> operator can be used to obtain the value
    stored at the address contained in a pointer. It is called the
    <strong>value-at-address</strong> or <strong>indirection</strong>
    operator.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int number = 10;
int *ptr = &amp;number;

*ptr
    </div>

    <p>
      <code>*ptr</code> gives the value stored at the address held by
      <code>ptr</code>, which is <code>10</code>.
    </p>

  </div>


  <h2>Relationship Between Variable, Address and Pointer</h2>

  <p>
    A normal variable stores a value, while a pointer stores the
    address of that variable. Using the pointer with the
    <code>*</code> operator allows the program to reach the value
    stored at that address.
  </p>

  <div class="note-flow">
Variable
   ↓
Stores a value

&amp;Variable
   ↓
Gives its address

Pointer
   ↓
Stores that address

*Pointer
   ↓
Gives the value at that address
  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      📌 Example
    </span>

    <div class="note-flow">
int i = 3;
int *j;

j = &amp;i;

i    → value stored = 3
&amp;i   → address of i
j    → stores address of i
*j   → value stored at that address = 3
    </div>

  </div>


  <h2>Why Do We Need Pointers?</h2>

  <p>
    Pointers allow a program to work directly with memory addresses.
    They are useful when a program needs to access or modify data
    indirectly, pass addresses to functions, work with arrays and
    strings, or manage memory dynamically.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <p>
      Instead of passing the value of a variable to a function, a
      program can pass its address so that the function can work with
      the original variable.
    </p>

  </div>


  <h2>Important Difference Between &amp; and *</h2>

  <p>
    The <strong>&amp;</strong> operator is used to obtain an address,
    whereas the <strong>*</strong> operator is used to access the value
    stored at an address held by a pointer. Understanding this
    difference is the foundation of pointer programming.
  </p>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Expression</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>&amp;i</code></td>
          <td>Address of variable <code>i</code>.</td>
        </tr>

        <tr>
          <td><code>p</code></td>
          <td>Address stored in pointer <code>p</code>.</td>
        </tr>

        <tr>
          <td><code>*p</code></td>
          <td>Value stored at the address held by <code>p</code>.</td>
        </tr>

        <tr>
          <td><code>*( &amp;i )</code></td>
          <td>Value stored at the address of <code>i</code>.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to demonstrate the relationship between a variable,
    its address, a pointer, and the value stored at the pointer's
    address.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Understand the meaning of a memory address.</li>

    <li>Use the address-of operator <code>&amp;</code>.</li>

    <li>Declare and initialize a pointer.</li>

    <li>Use the indirection operator <code>*</code> to access a value.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Declare an integer variable, store its address in an integer
    pointer, and display the address and value through both the
    variable and the pointer.
  </p>


  <h3>Theory</h3>

  <p>
    A pointer stores the address of another variable. The address-of
    operator gives the address of a variable, while the indirection
    operator accesses the value stored at that address.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    int number = 25;
    int *ptr;

    // store the address of number in the pointer
    ptr = &amp;number;

    printf("Value of number = %d\n", number);
    printf("Address of number = %p\n", (void *)&amp;number);
    printf("Value stored in ptr = %p\n", (void *)ptr);
    printf("Value at address stored in ptr = %d\n", *ptr);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Value of number = 25
    </p>

    <p>
      Address of number = 0x7ffe12345678
    </p>

    <p>
      Value stored in ptr = 0x7ffe12345678
    </p>

    <p>
      Value at address stored in ptr = 25
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The address shown in the output is only an example. The actual
    address will normally be different each time the program runs.
    What remains important is that <code>ptr</code> contains the same
    address as <code>&amp;number</code>, and <code>*ptr</code> gives
    the value stored there.
  </p>


  <h2>Pointer Declaration Examples</h2>

  <p>
    The pointer type should correspond to the type of data whose address
    it is intended to store. This tells the compiler how the pointed-to
    data should be interpreted.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      💡 Example
    </span>

    <div class="note-flow">
int *p;
char *ch;
float *f;
    </div>

    <p>
      <code>p</code> points to an integer,
      <code>ch</code> points to a character, and
      <code>f</code> points to a floating-point value.
    </p>

  </div>


  <h2>Common Mistake</h2>

  <p>
    A pointer stores an address, not the ordinary data value itself.
    For example, assigning <code>number</code> directly to a pointer
    is not the correct way to make the pointer point to
    <code>number</code>. Its address should be assigned instead.
  </p>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Example
    </span>

    <p>
      <strong>Correct:</strong>
      <code>ptr = &amp;number;</code>
    </p>

    <p>
      <strong>Incorrect:</strong>
      <code>ptr = number;</code>
    </p>

  </div>


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
          <td><strong>Pointer</strong></td>
          <td>A variable that stores an address.</td>
        </tr>

        <tr>
          <td><strong>&amp;</strong></td>
          <td>Address-of operator.</td>
        </tr>

        <tr>
          <td><strong>*</strong></td>
          <td>Value-at-address / indirection operator.</td>
        </tr>

        <tr>
          <td><strong>int *p</strong></td>
          <td>Pointer to an integer.</td>
        </tr>

        <tr>
          <td><strong>p = &amp;i</strong></td>
          <td>Stores the address of <code>i</code> in <code>p</code>.</td>
        </tr>

        <tr>
          <td><strong>*p</strong></td>
          <td>Accesses the value at the address stored in <code>p</code>.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a pointer in C?</li>

    <li>What is the address-of operator?</li>

    <li>What is the value-at-address operator?</li>

    <li>What does <code>int *p</code> mean?</li>

    <li>How can the address of a variable be obtained?</li>

    <li>What does <code>*p</code> represent?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the concept of pointers in C with a suitable example.
    </li>

    <li>
      Explain the relationship between a variable, its address and
      a pointer.
    </li>

    <li>
      Explain the address-of and indirection operators with examples.
    </li>

    <li>
      Write a C program to demonstrate the use of a pointer variable.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of pointers in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=pointers+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Pointers in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for pointer basics
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for variable, address, pointer, &amp; and *
        relationships.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 5 — TOPIC 2
// DEFINING POINTERS
// ============================================================

NOTES["m5-defining-pointers"] = [
  `

  <p>
    A pointer variable must be declared before it is used. The
    declaration tells the compiler that the variable will store the
    address of a particular type of data. The <strong>*</strong> symbol
    in a pointer declaration indicates that the variable is a pointer.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int *ptr;
    </div>

    <p>
      Here, <code>ptr</code> is declared as a pointer to an integer.
      It is meant to store the address of an <code>int</code> variable.
    </p>
  </div>


  <h2>Basic Syntax</h2>

  <p>
    The general form of a pointer declaration is:
  </p>

  <div class="note-flow">
data_type *pointer_name;
  </div>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int *p;
char *ch;
float *f;
    </div>

    <p>
      Each declaration creates a pointer for a different data type.
    </p>
  </div>


  <h2>Integer Pointer</h2>

  <p>
    An integer pointer is used to store the address of an integer
    variable. Its declaration uses the <code>int</code> data type
    followed by <code>*</code> and the pointer name.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int number = 25;
int *ptr;

ptr = &amp;number;
    </div>

    <p>
      <code>ptr</code> stores the address of <code>number</code>.
    </p>
  </div>


  <h2>Character Pointer</h2>

  <p>
    A character pointer stores the address of a character variable.
    The pointer is declared using the <code>char</code> type.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
char grade = 'A';
char *ptr;

ptr = &amp;grade;
    </div>

    <p>
      Here, <code>ptr</code> stores the address of the character
      variable <code>grade</code>.
    </p>
  </div>


  <h2>Floating-Point Pointer</h2>

  <p>
    A floating-point pointer stores the address of a
    <code>float</code> variable. It is declared using the
    <code>float</code> type.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
float percentage = 82.5;
float *ptr;

ptr = &amp;percentage;
    </div>

    <p>
      Here, <code>ptr</code> stores the address of
      <code>percentage</code>.
    </p>
  </div>


  <h2>Pointer Initialization</h2>

  <p>
    Declaring a pointer only creates the pointer variable. Before using
    it to access a variable, it should be initialized with a valid
    address of a compatible variable.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int number = 10;
int *ptr = &amp;number;
    </div>

    <p>
      The pointer <code>ptr</code> is initialized with the address of
      <code>number</code>.
    </p>
  </div>


  <h2>Using the Same Pointer Type with the Same Data Type</h2>

  <p>
    A pointer should normally be used with the corresponding data type
    it is declared for. This allows the compiler to correctly interpret
    the value stored at the pointed-to address.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int number = 50;
int *ptr = &amp;number;
    </div>

    <p>
      Here, an <code>int *</code> pointer is used with an
      <code>int</code> variable.
    </p>
  </div>


  <h2>Multiple Pointer Declarations</h2>

  <p>
    More than one pointer can be declared in the same statement.
    Every variable that needs to be a pointer must have its own
    <strong>*</strong> symbol.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int *p, *q;
    </div>

    <p>
      Both <code>p</code> and <code>q</code> are pointers to integers.
    </p>
  </div>


  <h2>Pointer Declaration with a Normal Variable</h2>

  <p>
    A normal variable and a pointer variable can appear in the same
    declaration statement, but the <strong>*</strong> belongs only to
    the variable immediately associated with it.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">⚠️ Example</span>

    <div class="note-flow">
int number, *ptr;
    </div>

    <p>
      Here, <code>number</code> is an ordinary integer variable,
      whereas <code>ptr</code> is an integer pointer.
    </p>
  </div>


  <h2>Meaning of the Asterisk in Pointer Declaration</h2>

  <p>
    In a declaration such as <code>int *ptr</code>, the asterisk
    indicates that <code>ptr</code> is a pointer to an integer.
    It does not mean that <code>ptr</code> will store an ordinary
    integer value.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int *ptr;
    </div>

    <p>
      This means <code>ptr</code> is capable of storing the address
      of an integer value.
    </p>
  </div>


  <h2>Pointer Declaration and Meaning</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Declaration</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>int *p;</code></td>
          <td><code>p</code> is a pointer to an integer.</td>
        </tr>

        <tr>
          <td><code>char *p;</code></td>
          <td><code>p</code> is a pointer to a character.</td>
        </tr>

        <tr>
          <td><code>float *p;</code></td>
          <td><code>p</code> is a pointer to a floating-point value.</td>
        </tr>

        <tr>
          <td><code>double *p;</code></td>
          <td><code>p</code> is a pointer to a double value.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to declare an integer pointer, store the address
    of an integer variable in it, and display the original value and
    the value accessed through the pointer.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Declare an integer pointer.</li>

    <li>Initialize a pointer with the address of a variable.</li>

    <li>Access the value through the pointer.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Declare an integer variable and an integer pointer. Assign
    <code>&amp;number</code> to the pointer and use <code>*ptr</code>
    to access the stored value.
  </p>


  <h3>Theory</h3>

  <p>
    A pointer declaration specifies the type of value whose address
    the pointer is expected to store. After initialization, the pointer
    can be used with the indirection operator to access that value.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    int number = 50;
    int *ptr;

    // store the address of number in the pointer
    ptr = &amp;number;

    printf("Value of number = %d\n", number);
    printf("Value through pointer = %d\n", *ptr);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Value of number = 50
    </p>

    <p>
      Value through pointer = 50
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The pointer <code>ptr</code> does not contain the value
    <code>50</code> directly. It contains the address of
    <code>number</code>, and <code>*ptr</code> accesses the value
    stored at that address.
  </p>


  <h2>Common Mistakes</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 1
    </span>

    <p>
      Declaring a pointer and using it before giving it a valid address
      can lead to undefined behavior.
    </p>

  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 2
    </span>

    <p>
      Do not confuse <code>int *ptr</code> with
      <code>*ptr</code>. The first is a declaration, while the second
      is used to access the value at the stored address.
    </p>

  </div>


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
          <td><strong>Pointer Declaration</strong></td>
          <td>
            <code>data_type *pointer_name;</code>
          </td>
        </tr>

        <tr>
          <td><strong>Integer Pointer</strong></td>
          <td>
            <code>int *p;</code>
          </td>
        </tr>

        <tr>
          <td><strong>Character Pointer</strong></td>
          <td>
            <code>char *p;</code>
          </td>
        </tr>

        <tr>
          <td><strong>Initialization</strong></td>
          <td>
            Store a compatible variable's address in the pointer.
          </td>
        </tr>

        <tr>
          <td><strong>Address</strong></td>
          <td>
            Use the <code>&amp;</code> operator.
          </td>
        </tr>

        <tr>
          <td><strong>Value</strong></td>
          <td>
            Use the <code>*</code> operator with the pointer.
          </td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is a pointer declaration?</li>

    <li>What does <code>int *p</code> mean?</li>

    <li>What is an integer pointer?</li>

    <li>How is a pointer initialized?</li>

    <li>What is the meaning of <code>char *p</code>?</li>

    <li>Why must a pointer be initialized before it is used?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain pointer declaration and initialization with suitable examples.
    </li>

    <li>
      Explain different types of pointer declarations in C.
    </li>

    <li>
      Write a C program to declare, initialize and use an integer pointer.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of pointer declaration
        and initialization in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=defining+pointers+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Defining Pointers in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for pointer
        declarations will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for pointer declaration, initialization,
        address and indirection.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 5 — TOPIC 3
// USE OF POINTERS
// ============================================================

NOTES["m5-use-pointers"] = [
  `

  <p>
    Pointers are used when a program needs to work with the address of
    a variable instead of using only its value. Through a pointer, a
    program can access and modify the original variable, pass its
    address to a function, and work efficiently with arrays and other
    data structures.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int number = 10;
int *ptr = &amp;number;

*ptr = 20;
    </div>

    <p>
      The pointer accesses the original variable, so the value of
      <code>number</code> becomes <code>20</code>.
    </p>
  </div>


  <h2>1. Accessing a Variable Through a Pointer</h2>

  <p>
    A pointer can be used to access the value of the variable whose
    address it stores. The indirection operator <code>*</code> is used
    for this purpose.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int marks = 75;
int *ptr = &amp;marks;

printf("%d", *ptr);
    </div>

    <p>
      <code>*ptr</code> accesses the value stored in
      <code>marks</code>, so the output is <code>75</code>.
    </p>
  </div>


  <h2>2. Modifying a Variable Through a Pointer</h2>

  <p>
    A pointer does not only allow us to read a value. It can also be
    used to change the value of the original variable by assigning a
    new value through the indirection operator.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int number = 10;
int *ptr = &amp;number;

*ptr = 50;
    </div>

    <p>
      After <code>*ptr = 50</code>, the original variable
      <code>number</code> also contains <code>50</code>.
    </p>
  </div>


  <h2>3. Passing an Address to a Function</h2>

  <p>
    A pointer allows the address of a variable to be passed to a
    function. The function can then use that address to access the
    original variable instead of receiving only a separate copy of
    its value.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
void change(int *p)
{
    *p = 100;
}

change(&amp;number);
    </div>

    <p>
      The function receives the address of <code>number</code> and
      changes its original value through <code>*p</code>.
    </p>
  </div>


  <h2>4. Pointers and Call by Reference</h2>

  <p>
    In C, pointers are commonly used to achieve the effect of
    <strong>call by reference</strong>. Instead of passing a copy of
    the value, the address of the variable is passed to the function.
    The function can then modify the original variable.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
swap(&amp;a, &amp;b);
    </div>

    <p>
      The addresses of <code>a</code> and <code>b</code> are passed to
      the function so their original values can be exchanged.
    </p>
  </div>


  <h2>5. Using Pointers with Arrays</h2>

  <p>
    The address of an array element can be stored in a pointer.
    Pointers can then be used to access array elements. This becomes
    especially useful when processing an array using functions.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int marks[3] = {70, 80, 90};
int *ptr = marks;

printf("%d", *ptr);
    </div>

    <p>
      The pointer points to the first element of the array, so
      <code>*ptr</code> gives <code>70</code>.
    </p>
  </div>


  <h2>6. Pointer Arithmetic</h2>

  <p>
    Pointers can be incremented and decremented to move through
    consecutive elements of an array. When a pointer is increased by
    one, it moves to the next element of the type it points to.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int arr[3] = {10, 20, 30};
int *ptr = arr;

ptr++;
    </div>

    <p>
      After <code>ptr++</code>, the pointer points to the next integer
      element, which is <code>arr[1]</code>.
    </p>
  </div>


  <h2>Pointer Increment Depends on Data Type</h2>

  <p>
    Pointer arithmetic is based on the size of the data type to which
    the pointer points. Therefore, incrementing a pointer moves it to
    the next element rather than simply adding one byte to the address.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int *p;
char *c;
float *f;
    </div>

    <p>
      When these pointers are incremented, each one moves to the next
      element of its own data type.
    </p>
  </div>


  <h2>7. Comparing Pointer Values</h2>

  <p>
    Pointer variables can be compared when they point to compatible
    objects. Comparing pointers is useful when working with elements
    of the same array or when checking whether a pointer is
    <code>NULL</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
if (ptr == NULL)
{
    printf("Pointer is empty");
}
    </div>

    <p>
      This checks whether <code>ptr</code> contains a null pointer
      value.
    </p>
  </div>


  <h2>8. Using Pointers to Work Efficiently with Data</h2>

  <p>
    Pointers are useful when a function needs to work with the original
    data rather than making another copy of that data. They are therefore
    widely used with arrays, functions, structures and dynamic memory.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <p>
      An array can be processed by passing its address to a function,
      allowing the function to work with the array elements directly.
    </p>
  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to demonstrate how a pointer can be used to
    modify the value of an original variable.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Use a pointer to access a variable.</li>

    <li>Modify an original variable through a pointer.</li>

    <li>Understand the relationship between a pointer and its target variable.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Declare an integer variable, store its address in a pointer and
    assign a new value using the indirection operator.
  </p>


  <h3>Theory</h3>

  <p>
    When a pointer contains the address of a variable, the expression
    <code>*ptr</code> refers to the value stored at that address.
    Assigning a new value to <code>*ptr</code> therefore changes the
    original variable.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    int number = 25;
    int *ptr;

    // store the address of number in the pointer
    ptr = &amp;number;

    printf("Before modification = %d\n", number);

    // modify the original variable through the pointer
    *ptr = 50;

    printf("After modification = %d\n", number);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Before modification = 25
    </p>

    <p>
      After modification = 50
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The pointer <code>ptr</code> stores the address of
    <code>number</code>. Therefore, changing <code>*ptr</code>
    changes the original variable <code>number</code>.
  </p>


  <h2>Practical Example — Function and Pointer</h2>

  <p>
    One of the important uses of pointers is passing the address of a
    variable to a function so that the function can modify the original
    value.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
void changeValue(int *p)
{
    *p = 100;
}
    </div>

    <p>
      The pointer parameter <code>p</code> receives the address of the
      original variable.
    </p>
  </div>


  <h3>Problem Statement</h3>

  <p>
    Write a C program to pass the address of a variable to a function
    and change its value using a pointer.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

void changeValue(int *p)
{
    // change the original value using its address
    *p = 100;
}

int main()
{
    int number = 25;

    printf("Before function call = %d\n", number);

    // pass the address of number to the function
    changeValue(&amp;number);

    printf("After function call = %d\n", number);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Before function call = 25
    </p>

    <p>
      After function call = 100
    </p>

  </div>


  <h3>Note</h3>

  <p>
    The function receives the address of <code>number</code>, so
    changing <code>*p</code> changes the original variable. This is
    the basic idea behind using pointers for call by reference.
  </p>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Use</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>Access Value</strong></td>
          <td>Use <code>*ptr</code>.</td>
        </tr>

        <tr>
          <td><strong>Modify Value</strong></td>
          <td>Assign through <code>*ptr</code>.</td>
        </tr>

        <tr>
          <td><strong>Function</strong></td>
          <td>Pass an address using a pointer.</td>
        </tr>

        <tr>
          <td><strong>Arrays</strong></td>
          <td>Pointer can move through array elements.</td>
        </tr>

        <tr>
          <td><strong>Pointer Arithmetic</strong></td>
          <td>Increment moves to the next element of its type.</td>
        </tr>

        <tr>
          <td><strong>NULL</strong></td>
          <td>Can be used to represent a pointer that points to no valid object.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What are the main uses of pointers in C?</li>

    <li>How can a pointer modify the value of a variable?</li>

    <li>How are pointers used with functions?</li>

    <li>How are pointers related to arrays?</li>

    <li>What is pointer arithmetic?</li>

    <li>What is the purpose of a NULL pointer?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the different uses of pointers in C with suitable examples.
    </li>

    <li>
      Explain how pointers can be used to modify the value of an
      original variable.
    </li>

    <li>
      Explain the use of pointers in functions with a suitable program.
    </li>

    <li>
      Explain pointer arithmetic with a suitable example.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of the uses of pointers
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=uses+of+pointers+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Uses of Pointers in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for uses of pointers
        will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for value access, modification, functions,
        arrays and pointer arithmetic.
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 5 — TOPIC 4
// FILE HANDLING: DIFFERENT MODES OF OPENING A FILE IN C
// ============================================================

NOTES["m5-file-modes"] = [
  `

  <p>
    <strong>File handling</strong> in C is used to store data
    permanently in a file and to read or write that data whenever
    required. C provides file-handling functions through the
    <code>stdio.h</code> library.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
#include &lt;stdio.h&gt;

FILE *fp;
    </div>

    <p>
      Here, <code>fp</code> is a file pointer that is used to refer
      to a file opened by the program.
    </p>
  </div>


  <h2>File Pointer</h2>

  <p>
    A <strong>file pointer</strong> is a pointer of type
    <code>FILE</code> used by C's file-handling functions to keep
    track of an opened file. It is declared using <code>FILE *</code>
    and is passed to functions such as <code>fopen()</code> and
    <code>fclose()</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;
    </div>

    <p>
      <code>fp</code> will be used to refer to the file opened by
      the program.
    </p>
  </div>


  <h2>fopen() Function</h2>

  <p>
    The <strong>fopen()</strong> function is used to open a file.
    It takes the file name and the required opening mode as arguments
    and returns a file pointer when the file is opened successfully.
    If the file cannot be opened, it returns <code>NULL</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;

fp = fopen("data.txt", "r");
    </div>

    <p>
      The file <code>data.txt</code> is opened in read mode.
    </p>
  </div>


  <h2>Syntax of fopen()</h2>

  <div class="note-flow">
FILE *pointer_name;

pointer_name = fopen("file_name", "mode");
  </div>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;
fp = fopen("student.txt", "r");
    </div>

    <p>
      Here, <code>fp</code> refers to <code>student.txt</code>
      opened in read mode.
    </p>
  </div>


  <h2>Checking Whether a File Opened Successfully</h2>

  <p>
    A program should check the return value of <code>fopen()</code>.
    If the returned pointer is <code>NULL</code>, the file could not
    be opened successfully.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "r");

if (fp == NULL)
{
    printf("Cannot open file");
}
    </div>

    <p>
      The condition checks whether the file-opening operation failed.
    </p>
  </div>


  <h2>File Opening Modes</h2>

  <p>
    The second argument of <code>fopen()</code> specifies how the
    program wants to use the file. Different modes determine whether
    the file will be read, written, appended, or opened for both
    reading and writing.
  </p>


  <h2>1. "r" — Read Mode</h2>

  <p>
    The <strong>r</strong> mode opens an existing file for reading.
    The file must already exist. If the file cannot be opened,
    <code>fopen()</code> returns <code>NULL</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "r");
    </div>

    <p>
      The program can read the existing contents of
      <code>data.txt</code>.
    </p>
  </div>


  <h2>2. "w" — Write Mode</h2>

  <p>
    The <strong>w</strong> mode opens a file for writing. If the file
    already exists, its previous contents are overwritten. If the
    file does not exist, a new file is created.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "w");
    </div>

    <p>
      The program can write new contents to the file. Existing contents,
      if any, are discarded when the file is opened this way.
    </p>
  </div>


  <h2>3. "a" — Append Mode</h2>

  <p>
    The <strong>a</strong> mode opens a file for adding new content at
    the end. Existing contents are preserved. If the file does not
    exist, a new file is created.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "a");
    </div>

    <p>
      New data can be added without removing the existing contents.
    </p>
  </div>


  <h2>4. "r+" — Read and Write Mode</h2>

  <p>
    The <strong>r+</strong> mode opens an existing file for both
    reading and writing. The file must already exist; it does not
    create a new file if the file is absent.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "r+");
    </div>

    <p>
      The program can read existing contents and also write to the file.
    </p>
  </div>


  <h2>5. "w+" — Read and Write Mode</h2>

  <p>
    The <strong>w+</strong> mode opens a file for both reading and
    writing. If the file exists, its previous contents are overwritten.
    If it does not exist, a new file is created.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "w+");
    </div>

    <p>
      The program can write new contents and read them back, but the
      old contents are lost when an existing file is opened in this mode.
    </p>
  </div>


  <h2>6. "a+" — Append and Read Mode</h2>

  <p>
    The <strong>a+</strong> mode opens a file for reading and for
    adding new contents at the end. Existing contents are preserved.
    If the file does not exist, a new file is created.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "a+");
    </div>

    <p>
      Existing contents can be read and new contents can be added at
      the end of the file.
    </p>
  </div>


  <h2>Comparison of File Opening Modes</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Mode</th>
          <th>Purpose</th>
          <th>If File Does Not Exist</th>
          <th>Existing Contents</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>r</strong></td>
          <td>Read</td>
          <td>Cannot open</td>
          <td>Preserved</td>
        </tr>

        <tr>
          <td><strong>w</strong></td>
          <td>Write</td>
          <td>Creates file</td>
          <td>Overwritten</td>
        </tr>

        <tr>
          <td><strong>a</strong></td>
          <td>Append</td>
          <td>Creates file</td>
          <td>Preserved</td>
        </tr>

        <tr>
          <td><strong>r+</strong></td>
          <td>Read + Write</td>
          <td>Cannot open</td>
          <td>Preserved</td>
        </tr>

        <tr>
          <td><strong>w+</strong></td>
          <td>Read + Write</td>
          <td>Creates file</td>
          <td>Overwritten</td>
        </tr>

        <tr>
          <td><strong>a+</strong></td>
          <td>Read + Append</td>
          <td>Creates file</td>
          <td>Preserved</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>fclose() Function</h2>

  <p>
    After finishing the file operation, the file should be closed
    using <strong>fclose()</strong>. It takes the file pointer as
    its argument and closes the corresponding opened file.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fclose(fp);
    </div>

    <p>
      Here, <code>fp</code> is the file pointer used to refer to the
      file that needs to be closed.
    </p>
  </div>


  <h2>Basic File Handling Flow</h2>

  <div class="note-flow">
Declare FILE pointer
        ↓
Open file using fopen()
        ↓
Check for NULL
        ↓
Read / Write / Append
        ↓
Close file using fclose()
  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to create a file, write a message into it,
    close the file, and display a confirmation message.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Declare a file pointer.</li>

    <li>Open a file using <code>fopen()</code>.</li>

    <li>Use write mode to create and write to a file.</li>

    <li>Close a file using <code>fclose()</code>.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Open <code>student.txt</code> in <code>"w"</code> mode, write a
    short message, check whether the file was opened successfully,
    and close it after writing.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>"w"</code> mode opens a file for writing. If the file
    does not exist, it is created. If it already exists, its previous
    contents are overwritten.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    // open the file in write mode
    fp = fopen("student.txt", "w");

    // check whether the file was opened successfully
    if (fp == NULL)
    {
        printf("Cannot open file\n");
        return 1;
    }

    // write data into the file
    fprintf(fp, "BCA Study Portal - C Programming");

    // close the file
    fclose(fp);

    printf("Data written successfully\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Data written successfully
    </p>

  </div>


  <h3>File Content</h3>

  <div class="note-flow">
BCA Study Portal - C Programming
  </div>


  <h3>Note</h3>

  <p>
    The program uses <code>fopen()</code> to create/open the file,
    <code>fprintf()</code> to write data, and <code>fclose()</code>
    to close the file. Always check whether <code>fopen()</code>
    returned <code>NULL</code> before using the file pointer.
  </p>


  <h2>Important Exam Differences</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>r</strong> → Read existing file<br>
      <strong>w</strong> → Write; old contents are overwritten<br>
      <strong>a</strong> → Add data at the end<br>
      <strong>r+</strong> → Read + Write existing file<br>
      <strong>w+</strong> → Read + Write; old contents are overwritten<br>
      <strong>a+</strong> → Read + Append; existing contents are preserved
    </p>

  </div>


  <h2>Common Mistakes</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 1
    </span>

    <p>
      Forgetting to check <code>fp == NULL</code> can lead to using an
      invalid file pointer.
    </p>

  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 2
    </span>

    <p>
      Using <code>"w"</code> when you want to preserve existing
      contents can accidentally overwrite the file.
    </p>

  </div>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 3
    </span>

    <p>
      Forgetting <code>fclose()</code> after completing the file
      operation is bad file-handling practice.
    </p>

  </div>


  <h2>Quick Revision</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Function / Mode</th>
          <th>Remember</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>FILE *</strong></td>
          <td>Declares a file pointer.</td>
        </tr>

        <tr>
          <td><strong>fopen()</strong></td>
          <td>Opens a file using a specified mode.</td>
        </tr>

        <tr>
          <td><strong>r</strong></td>
          <td>Read existing file.</td>
        </tr>

        <tr>
          <td><strong>w</strong></td>
          <td>Write; existing contents are overwritten.</td>
        </tr>

        <tr>
          <td><strong>a</strong></td>
          <td>Append at the end.</td>
        </tr>

        <tr>
          <td><strong>r+</strong></td>
          <td>Read and write an existing file.</td>
        </tr>

        <tr>
          <td><strong>w+</strong></td>
          <td>Read and write; old contents are overwritten.</td>
        </tr>

        <tr>
          <td><strong>a+</strong></td>
          <td>Read and append.</td>
        </tr>

        <tr>
          <td><strong>fclose()</strong></td>
          <td>Closes the opened file.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is file handling in C?</li>

    <li>What is a file pointer?</li>

    <li>What is the purpose of <code>fopen()</code>?</li>

    <li>What happens when <code>fopen()</code> returns <code>NULL</code>?</li>

    <li>What is the difference between <code>"r"</code> and <code>"w"</code>?</li>

    <li>What is the use of append mode <code>"a"</code>?</li>

    <li>Differentiate between <code>"r+"</code> and <code>"w+"</code>.</li>

    <li>What is the purpose of <code>fclose()</code>?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain different modes of opening a file in C with suitable examples.
    </li>

    <li>
      Explain the use of <code>fopen()</code> and <code>fclose()</code>
      with a suitable program.
    </li>

    <li>
      Differentiate between <code>r</code>, <code>w</code>,
      <code>a</code>, <code>r+</code>, <code>w+</code> and
      <code>a+</code> modes.
    </li>

    <li>
      Write a C program to create a file and write data into it.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of file handling and
        file opening modes in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=file+handling+fopen+modes+in+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: File Handling in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for file-opening
        modes will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for FILE pointer, fopen(), file modes,
        NULL checking and fclose().
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 5 — TOPIC 5
// READING FROM FILES
// ============================================================

NOTES["m5-reading-files"] = [
  `

  <p>
    Reading from a file means retrieving data that has already been
    stored in a file. In C, a file is first opened in an appropriate
    mode and then functions such as <code>fgetc()</code>,
    <code>fgets()</code> or <code>fscanf()</code> can be used to
    read its contents.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;

fp = fopen("student.txt", "r");
    </div>

    <p>
      The file <code>student.txt</code> is opened in read mode so that
      its existing contents can be read.
    </p>
  </div>


  <h2>Reading Using a File Pointer</h2>

  <p>
    After a file is opened successfully, the program works with the
    file through its file pointer. The pointer keeps track of the
    current position from which the next data will be read.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;

fp = fopen("data.txt", "r");
    </div>

    <p>
      After opening the file, <code>fp</code> is used for subsequent
      reading operations.
    </p>
  </div>


  <h2>fgetc() Function</h2>

  <p>
    The <strong>fgetc()</strong> function reads one character from the
    current position of an opened file. After reading the character,
    the file position moves forward to the next character.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int ch;

ch = fgetc(fp);
    </div>

    <p>
      One character is read from the file referred to by
      <code>fp</code>.
    </p>
  </div>


  <h2>Reading Character by Character</h2>

  <p>
    A file can be read character by character by repeatedly calling
    <code>fgetc()</code>. The reading continues until the end of the
    file is reached.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
while ((ch = fgetc(fp)) != EOF)
{
    printf("%c", ch);
}
    </div>

    <p>
      Each character is read and displayed until
      <code>fgetc()</code> indicates that the end of the file has
      been reached.
    </p>
  </div>


  <h2>EOF — End of File</h2>

  <p>
    <strong>EOF</strong> is used to indicate that the end of the file
    has been reached during a reading operation. When <code>fgetc()</code>
    reaches the end of the file, it returns <code>EOF</code>, allowing
    the loop to stop.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
while ((ch = fgetc(fp)) != EOF)
{
    printf("%c", ch);
}
    </div>

    <p>
      The loop continues while the returned character is not
      <code>EOF</code>.
    </p>
  </div>


  <h2>Why Use int for fgetc() Result?</h2>

  <p>
    The value returned by <code>fgetc()</code> is commonly stored in
    an <code>int</code> variable because the function must be able to
    represent every possible character value as well as the special
    <code>EOF</code> value.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int ch;

ch = fgetc(fp);
    </div>

    <p>
      The <code>int</code> variable can hold both an input character
      value and <code>EOF</code>.
    </p>
  </div>


  <h2>fgets() Function</h2>

  <p>
    The <strong>fgets()</strong> function is used to read a string or
    line of text from a file. Unlike <code>fgetc()</code>, which reads
    one character at a time, <code>fgets()</code> can read multiple
    characters into a character array.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
char line[100];

fgets(line, sizeof(line), fp);
    </div>

    <p>
      A line of text is read from the file into the character array
      <code>line</code>.
    </p>
  </div>


  <h2>fscanf() Function</h2>

  <p>
    The <strong>fscanf()</strong> function is used to read formatted
    data from a file. It works similarly to <code>scanf()</code>, but
    the input is taken from a file through the file pointer.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fscanf(fp, "%s %d", name, &amp;age);
    </div>

    <p>
      Formatted values are read from the file represented by
      <code>fp</code>.
    </p>
  </div>


  <h2>Checking Whether the File Opened Successfully</h2>

  <p>
    Before reading a file, the program should verify that
    <code>fopen()</code> returned a valid file pointer. If the file
    cannot be opened, the function returns <code>NULL</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">⚠️ Example</span>

    <div class="note-flow">
fp = fopen("student.txt", "r");

if (fp == NULL)
{
    printf("Cannot open file\n");
    return 1;
}
    </div>

    <p>
      This prevents the program from attempting to read from an
      invalid file pointer.
    </p>
  </div>


  <h2>Closing the File</h2>

  <p>
    After all reading operations are finished, the file should be
    closed using <strong>fclose()</strong>. Closing the file releases
    the resources associated with the opened file.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fclose(fp);
    </div>

  </div>


  <h2>Basic Reading Flow</h2>

  <div class="note-flow">
Declare FILE pointer
        ↓
Open file using "r"
        ↓
Check for NULL
        ↓
Read file contents
        ↓
Check EOF when required
        ↓
Close file
  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to open an existing text file and display its
    contents character by character.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Open a text file in read mode.</li>

    <li>Read characters using <code>fgetc()</code>.</li>

    <li>Use <code>EOF</code> to detect the end of the file.</li>

    <li>Close the file after reading.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Open <code>student.txt</code> using <code>"r"</code> mode, use
    <code>fgetc()</code> inside a loop, and continue until
    <code>EOF</code> is returned.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>fgetc()</code> function reads one character at a time
    from the current file position. Every successful read advances
    the position to the next character. When the end of the file is
    reached, <code>fgetc()</code> returns <code>EOF</code>.
  </p>


  <h3>File Content</h3>

  <div class="note-flow">
Welcome to BCA Study Portal.
C Programming is easy with practice.
  </div>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    int ch;

    // open the file in read mode
    fp = fopen("student.txt", "r");

    // check whether the file was opened successfully
    if (fp == NULL)
    {
        printf("Cannot open file\n");
        return 1;
    }

    printf("File Contents:\n");

    // read and display the file character by character
    while ((ch = fgetc(fp)) != EOF)
    {
        printf("%c", ch);
    }

    // close the file after reading
    fclose(fp);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      File Contents:
    </p>

    <p>
      Welcome to BCA Study Portal.
    </p>

    <p>
      C Programming is easy with practice.
    </p>

  </div>


  <h3>Note</h3>

  <p>
    In this program, <code>fp</code> refers to the opened file and
    <code>fgetc()</code> reads one character at a time. The loop ends
    when <code>EOF</code> is returned.
  </p>


  <h2>Practical Example — Reading a Record</h2>

  <p>
    When a file contains structured records, formatted reading can be
    performed using <code>fscanf()</code>. This allows values such as
    names, ages, and marks to be read according to a specified format.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fscanf(fp, "%s %d %f", name, &amp;age, &amp;marks);
    </div>

    <p>
      The statement reads a string, an integer and a floating-point
      value from the file.
    </p>
  </div>


  <h3>Sample File</h3>

  <div class="note-flow">
Rahul 20 78.5
Priya 21 86.0
Aman 20 81.5
  </div>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    char name[30];
    int age;
    float marks;

    // open the record file for reading
    fp = fopen("students.txt", "r");

    // check whether the file was opened successfully
    if (fp == NULL)
    {
        printf("Cannot open file\n");
        return 1;
    }

    printf("Student Records:\n");

    // read records until the end of the file
    while (fscanf(fp, "%29s %d %f", name, &amp;age, &amp;marks) == 3)
    {
        printf("Name = %s, Age = %d, Marks = %.1f\n",
               name, age, marks);
    }

    fclose(fp);

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Student Records:
    </p>

    <p>
      Name = Rahul, Age = 20, Marks = 78.5
    </p>

    <p>
      Name = Priya, Age = 21, Marks = 86.0
    </p>

    <p>
      Name = Aman, Age = 20, Marks = 81.5
    </p>

  </div>


  <h3>Note</h3>

  <p>
    <code>fscanf()</code> is useful when the file contains data in a
    known format. The program checks whether all three expected values
    were successfully read before processing the record.
  </p>


  <h2>Reading Functions at a Glance</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Function</th>
          <th>Main Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>fgetc()</strong></td>
          <td>Reads one character from a file.</td>
        </tr>

        <tr>
          <td><strong>fgets()</strong></td>
          <td>Reads a line or string from a file.</td>
        </tr>

        <tr>
          <td><strong>fscanf()</strong></td>
          <td>Reads formatted data from a file.</td>
        </tr>

        <tr>
          <td><strong>feof()</strong></td>
          <td>Tests whether the end-of-file indicator is set.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Difference: fgetc() and fgets()</h2>

  <div class="note-callout">

    <span class="note-callout-title">📌 Remember</span>

    <p>
      <strong>fgetc()</strong> → reads one character at a time.
    </p>

    <p>
      <strong>fgets()</strong> → reads a string or line into a character array.
    </p>

  </div>


  <h2>Common Mistakes</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 1
    </span>

    <p>
      Trying to read from a file without checking whether
      <code>fopen()</code> returned <code>NULL</code>.
    </p>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 2
    </span>

    <p>
      Using a character variable for the result of <code>fgetc()</code>
      can make it impossible to distinguish every valid character value
      from <code>EOF</code>. Use an <code>int</code> variable when
      checking for <code>EOF</code>.
    </p>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 3
    </span>

    <p>
      Forgetting to close the file after completing the reading
      operation.
    </p>

  </div>


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
          <td><strong>Read Mode</strong></td>
          <td><code>"r"</code></td>
        </tr>

        <tr>
          <td><strong>File Pointer</strong></td>
          <td><code>FILE *fp</code></td>
        </tr>

        <tr>
          <td><strong>Single Character</strong></td>
          <td><code>fgetc(fp)</code></td>
        </tr>

        <tr>
          <td><strong>String / Line</strong></td>
          <td><code>fgets()</code></td>
        </tr>

        <tr>
          <td><strong>Formatted Data</strong></td>
          <td><code>fscanf()</code></td>
        </tr>

        <tr>
          <td><strong>End of File</strong></td>
          <td><code>EOF</code></td>
        </tr>

        <tr>
          <td><strong>Close File</strong></td>
          <td><code>fclose(fp)</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is meant by reading from a file?</li>

    <li>What is the use of <code>fgetc()</code>?</li>

    <li>What is EOF?</li>

    <li>Why is the result of <code>fgetc()</code> commonly stored in an <code>int</code> variable?</li>

    <li>What is the difference between <code>fgetc()</code> and <code>fgets()</code>?</li>

    <li>What is the purpose of <code>fscanf()</code>?</li>

    <li>Why should <code>fopen()</code> be checked for <code>NULL</code>?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the process of reading from a file in C with a suitable program.
    </li>

    <li>
      Explain the use of <code>fgetc()</code> and <code>EOF</code>
      with a suitable example.
    </li>

    <li>
      Differentiate between <code>fgetc()</code>,
      <code>fgets()</code> and <code>fscanf()</code>.
    </li>

    <li>
      Write a C program to read and display the contents of a text file.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of reading files in C.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=reading+from+files+fgetc+fgets+fscanf+C+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Reading Files in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for reading from
        files will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for file pointer, fgetc(), EOF, fgets(),
        fscanf() and fclose().
      </p>

    </div>

  </div>

  `
];
// ============================================================
// MODULE 5 — TOPIC 6
// WRITING FROM FILES
// ============================================================

NOTES["m5-writing-files"] = [
  `

  <p>
    <strong>Writing to a file</strong> means storing data from a C
    program into a file so that the information can be kept for later
    use. C provides functions such as <code>fputc()</code>,
    <code>fputs()</code>, and <code>fprintf()</code> for writing
    different types of data to a file.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;

fp = fopen("student.txt", "w");
    </div>

    <p>
      The file is opened in write mode so that data can be stored in it.
    </p>
  </div>


  <h2>Writing Through a File Pointer</h2>

  <p>
    Once a file has been opened successfully, writing operations are
    performed using the file pointer rather than the filename. The
    file pointer identifies the file on which the operation is being
    performed.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
FILE *fp;

fp = fopen("data.txt", "w");

fprintf(fp, "Hello C");
    </div>

    <p>
      Here, <code>fp</code> refers to the file and
      <code>fprintf()</code> writes the message into it.
    </p>
  </div>


  <h2>fputc() Function</h2>

  <p>
    The <strong>fputc()</strong> function writes a single character
    to a file. It is similar to a character-output function, but
    instead of displaying the character on the screen, it writes the
    character to the file represented by the file pointer.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fputc('A', fp);
    </div>

    <p>
      The character <code>A</code> is written to the file referred
      to by <code>fp</code>.
    </p>
  </div>


  <h2>fputs() Function</h2>

  <p>
    The <strong>fputs()</strong> function writes a string to a file.
    It is useful when an entire string needs to be stored instead of
    writing one character at a time.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fputs("Welcome to C Programming", fp);
    </div>

    <p>
      The complete string is written to the file.
    </p>
  </div>


  <h2>fprintf() Function</h2>

  <p>
    The <strong>fprintf()</strong> function writes formatted data to
    a file. It works in a similar way to <code>printf()</code>, but
    the output is directed to the file specified by the file pointer.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
int rollNo = 101;
float marks = 82.5;

fprintf(fp, "%d %.1f", rollNo, marks);
    </div>

    <p>
      The integer and floating-point values are written to the file
      according to the specified format.
    </p>
  </div>


  <h2>Opening a File for Writing</h2>

  <p>
    A file is normally opened using the <code>"w"</code> mode when new
    contents need to be written. If the file does not exist, it is
    created. If it already exists, its previous contents are replaced.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "w");
    </div>

    <p>
      The file is opened for writing.
    </p>
  </div>


  <h2>Checking the File Before Writing</h2>

  <p>
    Before performing a write operation, the return value of
    <code>fopen()</code> should be checked. If the file cannot be
    opened, <code>fopen()</code> returns <code>NULL</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">⚠️ Example</span>

    <div class="note-flow">
fp = fopen("data.txt", "w");

if (fp == NULL)
{
    printf("Cannot open file\n");
    return 1;
}
    </div>

    <p>
      This ensures that the program does not try to write using an
      invalid file pointer.
    </p>
  </div>


  <h2>Writing Character by Character</h2>

  <p>
    A string or sequence of characters can be written one character
    at a time using <code>fputc()</code>. This approach is useful when
    the program needs control over individual characters.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
char ch;

ch = 'H';
fputc(ch, fp);

ch = 'i';
fputc(ch, fp);
    </div>

    <p>
      The characters are written individually to the file.
    </p>
  </div>


  <h2>Writing a String</h2>

  <p>
    When the complete text is already available as a string,
    <code>fputs()</code> can be used to write it directly to the file.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
char message[] = "BCA Study Portal";

fputs(message, fp);
    </div>

    <p>
      The contents of <code>message</code> are written to the file.
    </p>
  </div>


  <h2>Writing Formatted Data</h2>

  <p>
    When multiple values such as names, integers and marks need to be
    stored in a particular format, <code>fprintf()</code> is useful.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fprintf(fp, "%s %d %.1f", name, rollNo, marks);
    </div>

    <p>
      The values are written to the file in the specified order and
      format.
    </p>
  </div>


  <h2>Closing the File After Writing</h2>

  <p>
    After completing all write operations, the file should be closed
    using <code>fclose()</code>. Closing the file completes the file
    operation and releases the resources associated with it.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fclose(fp);
    </div>
  </div>


  <h2>Basic Writing Flow</h2>

  <div class="note-flow">
Declare FILE pointer
        ↓
Open file using fopen()
        ↓
Check for NULL
        ↓
Write data
        ↓
Close file using fclose()
  </div>


  <h2>Writing Functions at a Glance</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Function</th>
          <th>Main Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>fputc()</strong></td>
          <td>Writes one character to a file.</td>
        </tr>

        <tr>
          <td><strong>fputs()</strong></td>
          <td>Writes a string to a file.</td>
        </tr>

        <tr>
          <td><strong>fprintf()</strong></td>
          <td>Writes formatted data to a file.</td>
        </tr>

        <tr>
          <td><strong>fclose()</strong></td>
          <td>Closes the opened file.</td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Practical Example</h2>

  <h3>Problem Statement</h3>

  <p>
    Write a C program to create a text file, write a message into the
    file using <code>fputs()</code>, and close the file.
  </p>


  <h3>Learning Outcomes</h3>

  <ul>

    <li>Create and open a file in write mode.</li>

    <li>Write a string to the file using <code>fputs()</code>.</li>

    <li>Check whether the file was opened successfully.</li>

    <li>Close the file after writing.</li>

  </ul>


  <h3>Hint</h3>

  <p>
    Open <code>message.txt</code> using <code>"w"</code> mode,
    write a string using <code>fputs()</code>, and then close the file.
  </p>


  <h3>Theory</h3>

  <p>
    The <code>fputs()</code> function writes a string to the file
    represented by the file pointer. The file must be opened before
    writing and should be closed after the operation is complete.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    // open the file in write mode
    fp = fopen("message.txt", "w");

    // check whether the file was opened successfully
    if (fp == NULL)
    {
        printf("Cannot open file\n");
        return 1;
    }

    // write a message into the file
    fputs("Welcome to BCA Study Portal.", fp);

    // close the file
    fclose(fp);

    printf("Data written successfully\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Data written successfully
    </p>

  </div>


  <h3>File Content</h3>

  <div class="note-flow">
Welcome to BCA Study Portal.
  </div>


  <h3>Note</h3>

  <p>
    The program creates <code>message.txt</code> if it does not already
    exist. The message is written using <code>fputs()</code> and the
    file is then closed using <code>fclose()</code>.
  </p>


  <h2>Practical Example — Character Writing</h2>

  <p>
    The <code>fputc()</code> function can be used when characters need
    to be written individually. This is the direct counterpart of
    reading individual characters using <code>fgetc()</code>.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fputc('A', fp);
fputc('B', fp);
fputc('C', fp);
    </div>

    <p>
      The characters <code>A</code>, <code>B</code> and
      <code>C</code> are written to the file one by one.
    </p>
  </div>


  <h3>Problem Statement</h3>

  <p>
    Write a C program to write three characters into a text file using
    <code>fputc()</code>.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    // open the file in write mode
    fp = fopen("letters.txt", "w");

    // check whether the file was opened successfully
    if (fp == NULL)
    {
        printf("Cannot open file\n");
        return 1;
    }

    // write characters one by one
    fputc('A', fp);
    fputc('B', fp);
    fputc('C', fp);

    fclose(fp);

    printf("Characters written successfully\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Characters written successfully
    </p>

  </div>


  <h3>File Content</h3>

  <div class="note-flow">
ABC
  </div>


  <h3>Note</h3>

  <p>
    <code>fputc()</code> writes one character at a time. Multiple calls
    can therefore be used to build a sequence of characters in a file.
  </p>


  <h2>Practical Example — Formatted Data</h2>

  <p>
    When a file needs to store values such as student name, roll number,
    and marks in a readable format, <code>fprintf()</code> can be used
    to write all the values together.
  </p>

  <div class="note-callout">
    <span class="note-callout-title">💡 Example</span>

    <div class="note-flow">
fprintf(fp, "%s %d %.1f", name, rollNo, marks);
    </div>

    <p>
      The values are written according to the specified format.
    </p>
  </div>


  <h3>Problem Statement</h3>

  <p>
    Write a C program to store a student's name, roll number, and
    percentage in a text file using <code>fprintf()</code>.
  </p>


  <h3>Program</h3>

  <div class="program-code">
#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;

    char name[] = "Rahul";
    int rollNo = 101;
    float percentage = 82.5;

    // open the file in write mode
    fp = fopen("student.txt", "w");

    // check whether the file was opened successfully
    if (fp == NULL)
    {
        printf("Cannot open file\n");
        return 1;
    }

    // write formatted student information
    fprintf(fp, "%s %d %.1f",
            name,
            rollNo,
            percentage);

    fclose(fp);

    printf("Student record written successfully\n");

    return 0;
}
  </div>


  <h3>Expected Output</h3>

  <div class="note-callout">

    <p>
      Student record written successfully
    </p>

  </div>


  <h3>File Content</h3>

  <div class="note-flow">
Rahul 101 82.5
  </div>


  <h3>Note</h3>

  <p>
    <code>fprintf()</code> is useful when different data types need to
    be written in a particular format. The same formatted data can
    later be read using a suitable file-reading function.
  </p>


  <h2>fputc(), fputs() and fprintf()</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Function</th>
          <th>What It Writes</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><strong>fputc()</strong></td>
          <td>One character</td>
          <td><code>fputc('A', fp);</code></td>
        </tr>

        <tr>
          <td><strong>fputs()</strong></td>
          <td>String</td>
          <td><code>fputs("Hello", fp);</code></td>
        </tr>

        <tr>
          <td><strong>fprintf()</strong></td>
          <td>Formatted data</td>
          <td><code>fprintf(fp, "%d", number);</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Writing vs Reading</h2>

  <div class="note-table-wrap">

    <table class="note-table">

      <thead>
        <tr>
          <th>Reading</th>
          <th>Writing</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td><code>fgetc()</code></td>
          <td><code>fputc()</code></td>
        </tr>

        <tr>
          <td><code>fgets()</code></td>
          <td><code>fputs()</code></td>
        </tr>

        <tr>
          <td><code>fscanf()</code></td>
          <td><code>fprintf()</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Points</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      📌 Remember
    </span>

    <p>
      <strong>fgetc()</strong> → reads one character.
    </p>

    <p>
      <strong>fputc()</strong> → writes one character.
    </p>

    <p>
      <strong>fgets()</strong> → reads a string or line.
    </p>

    <p>
      <strong>fputs()</strong> → writes a string.
    </p>

    <p>
      <strong>fscanf()</strong> → reads formatted data.
    </p>

    <p>
      <strong>fprintf()</strong> → writes formatted data.
    </p>

  </div>


  <h2>Common Mistakes</h2>

  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 1
    </span>

    <p>
      Opening a file in <code>"w"</code> mode without realizing that
      existing contents will be overwritten.
    </p>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 2
    </span>

    <p>
      Forgetting to check <code>fp == NULL</code> before writing.
    </p>

  </div>


  <div class="note-callout">

    <span class="note-callout-title">
      ⚠️ Mistake 3
    </span>

    <p>
      Forgetting to close the file after completing the write operation.
    </p>

  </div>


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
          <td><strong>Open for Writing</strong></td>
          <td><code>fopen("file.txt", "w")</code></td>
        </tr>

        <tr>
          <td><strong>Character</strong></td>
          <td><code>fputc()</code></td>
        </tr>

        <tr>
          <td><strong>String</strong></td>
          <td><code>fputs()</code></td>
        </tr>

        <tr>
          <td><strong>Formatted Data</strong></td>
          <td><code>fprintf()</code></td>
        </tr>

        <tr>
          <td><strong>Check Failure</strong></td>
          <td><code>fp == NULL</code></td>
        </tr>

        <tr>
          <td><strong>Close File</strong></td>
          <td><code>fclose(fp)</code></td>
        </tr>

      </tbody>

    </table>

  </div>


  <h2>Important Exam Questions</h2>

  <h3>Short Answer Questions</h3>

  <ol class="exam-list">

    <li>What is meant by writing to a file?</li>

    <li>What is the use of <code>fputc()</code>?</li>

    <li>What is the use of <code>fputs()</code>?</li>

    <li>What is the purpose of <code>fprintf()</code>?</li>

    <li>What is the difference between <code>fputc()</code> and <code>fputs()</code>?</li>

    <li>What happens when a file is opened using <code>"w"</code> mode?</li>

    <li>Why should <code>fopen()</code> be checked for <code>NULL</code>?</li>

    <li>Why should a file be closed after writing?</li>

  </ol>


  <h3>Long Answer Questions</h3>

  <ol class="exam-list">

    <li>
      Explain the process of writing data to a file in C with a suitable program.
    </li>

    <li>
      Explain <code>fputc()</code>, <code>fputs()</code> and
      <code>fprintf()</code> with suitable examples.
    </li>

    <li>
      Write a C program to create a file and write text into it.
    </li>

    <li>
      Write a C program to store formatted student information in a file.
    </li>

    <li>
      Differentiate between the reading and writing functions used in C file handling.
    </li>

  </ol>


  <div class="resource-section">

    <div class="resource-card">

      <div class="resource-title">
        🎥 Recommended Learning
      </div>

      <p>
        Watch a beginner-friendly explanation of writing to files
        in C programming.
      </p>

      <p>
        <a
          href="https://www.youtube.com/results?search_query=writing+to+files+fputc+fputs+fprintf+C+programming+Hindi+BCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch: Writing to Files in C — Hindi
        </a>
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        📝 Handwritten Notes
      </div>

      <p class="muted-resource">
        A short handwritten-style revision sheet for writing to
        files will be provided here.
      </p>

    </div>


    <div class="resource-card">

      <div class="resource-title">
        🧠 Mind Map
      </div>

      <p class="muted-resource">
        Use the mind map for fopen(), file pointer, fputc(),
        fputs(), fprintf() and fclose().
      </p>

    </div>

  </div>

  `
];
NOTES["case-study-semiconductor-processors"] = [
`
<h2>Semiconductor Journey — From Transistor to Modern AI Chips</h2>

<p>
The development of modern computers and processors is closely connected
with the evolution of semiconductor technology. From the invention of
the transistor to today's AI processors, semiconductor technology has
become an important part of computing, electronics, business and
national security.
</p>

<div class="note-callout">
  <span class="note-callout-title">🌍 Why Study This?</span>
  <p>
    A processor is not created only through programming. It depends on
    semiconductor technology, chip design and highly advanced
    manufacturing processes. Understanding this journey helps us see
    how software, hardware and modern computing are connected.
  </p>
</div>


<h2>1. 1947 — The Transistor</h2>

<p>
In 1947, scientists at Bell Labs developed the transistor. It became
one of the fundamental building blocks of modern electronics.
</p>

<p>
Earlier computers relied heavily on vacuum tubes, which were large,
generated considerable heat and were less reliable. Transistors made
electronic systems smaller, more efficient and more reliable.
</p>

<div class="note-callout">
  <span class="note-callout-title">💡 Key Idea</span>
  <p>
    <strong>Vacuum Tubes → Transistors → Smaller and More Reliable Electronics</strong>
  </p>
</div>


<h2>2. 1958–1959 — Integrated Circuit</h2>

<p>
The next challenge was that computers required a large number of
electronic components. Putting individual components together would
make systems increasingly complex.
</p>

<p>
Jack Kilby and Robert Noyce made important breakthroughs in the
development of the integrated circuit (IC).
</p>

<p>
An integrated circuit allowed multiple electronic components to be
placed together on a small semiconductor chip.
</p>

<div class="note-callout">
  <span class="note-callout-title">💡 Key Idea</span>
  <p>
    <strong>Many Electronic Components → One Small Chip</strong>
  </p>
</div>


<h2>3. 1960s — Silicon Valley</h2>

<p>
During the 1960s, semiconductor companies and technology companies
expanded rapidly in California. This ecosystem became widely associated
with Silicon Valley.
</p>

<p>
The region later became an important center for semiconductor and
technology innovation.
</p>

<div class="note-callout">
  <span class="note-callout-title">🚀 Technology Ecosystem</span>
  <p>
    Companies such as Intel, AMD, NVIDIA and Qualcomm became important
    names in the semiconductor and computing industry.
  </p>
</div>


<h2>4. 1971 — Intel 4004</h2>

<p>
In 1971, Intel introduced the Intel 4004, widely recognized as the first
commercially available microprocessor.
</p>

<p>
The microprocessor made it possible to place the central processing
function of a computer into a single chip.
</p>

<div class="note-callout">
  <span class="note-callout-title">🧠 Key Idea</span>
  <p>
    <strong>CPU Functions → Microprocessor → Computing on a Single Chip</strong>
  </p>
</div>


<h2>5. Moore's Law</h2>

<p>
As semiconductor technology developed, the number of transistors that
could be placed on a chip increased rapidly.
</p>

<p>
This trend is commonly associated with <strong>Moore's Law</strong>.
Increasing transistor density contributed to processors becoming more
powerful and capable over time.
</p>

<div class="note-callout">
  <span class="note-callout-title">📈 General Trend</span>
  <p>
    <strong>More Transistors → Greater Computing Capability</strong>
  </p>
</div>


<h2>6. Taiwan Enters the Semiconductor Industry</h2>

<p>
Taiwan developed semiconductor capabilities through government support,
technology transfer, training and research.
</p>

<p>
The Industrial Technology Research Institute (ITRI) played an important
role in developing Taiwan's semiconductor capabilities.
</p>

<p>
Taiwan's semiconductor ecosystem eventually became one of the most
important manufacturing centers in the world.
</p>


<h2>7. Morris Chang and a New Business Model</h2>

<p>
Morris Chang had extensive experience in the semiconductor industry,
including senior leadership experience at Texas Instruments.
</p>

<p>
He recognized that semiconductor companies did not necessarily need to
own their own manufacturing factories.
</p>

<div class="note-callout">
  <span class="note-callout-title">💡 Important Idea</span>
  <p>
    A company can focus on <strong>chip design</strong> while another
    specialized company focuses on <strong>chip manufacturing</strong>.
  </p>
</div>


<h2>8. 1987 — TSMC and the Foundry Model</h2>

<p>
In 1987, Taiwan Semiconductor Manufacturing Company (TSMC) was founded
under Morris Chang's leadership.
</p>

<p>
TSMC developed the <strong>pure-play foundry model</strong>, in which
the company focuses primarily on manufacturing semiconductor chips
designed by other companies.
</p>

<div class="note-flow">
Fabless Company
      ↓
Chip Design
      ↓
Foundry
      ↓
Chip Manufacturing
</div>


<h2>9. Fabless vs Foundry</h2>

<div class="note-table-wrap">

<table class="note-table">

<thead>
<tr>
  <th>Model</th>
  <th>Main Responsibility</th>
</tr>
</thead>

<tbody>

<tr>
  <td><strong>Fabless</strong></td>
  <td>Designs the chip but does not primarily manufacture it.</td>
</tr>

<tr>
  <td><strong>Foundry</strong></td>
  <td>Manufactures chips designed by other companies.</td>
</tr>

</tbody>

</table>

</div>

<div class="note-callout">
  <span class="note-callout-title">💡 Example</span>

  <p>
    A company such as NVIDIA can concentrate heavily on chip architecture
    and software, while a foundry such as TSMC manufactures the physical
    chips.
  </p>
</div>


<h2>10. Why the Foundry Model Was Important</h2>

<p>
Building an advanced semiconductor fabrication facility requires
extremely high capital investment, specialized equipment, advanced
manufacturing processes and highly skilled engineers.
</p>

<p>
The foundry model allowed companies to focus on chip design without
having to build and operate their own advanced fabrication facilities.
</p>

<div class="note-flow">
Chip Idea
      ↓
Chip Design
      ↓
Specialized Foundry
      ↓
Manufacturing
      ↓
Finished Processor / Chip
</div>


<h2>11. NVIDIA and the Rise of GPUs</h2>

<p>
NVIDIA focused strongly on GPU architecture and its software ecosystem.
Graphics processing later became increasingly important for data centers
and artificial intelligence.
</p>

<div class="note-callout">
  <span class="note-callout-title">🚀 Evolution</span>

  <p>
    <strong>Gaming → Data Centers → Artificial Intelligence</strong>
  </p>
</div>


<h2>12. Apple — Chip Design and Manufacturing</h2>

<p>
Apple developed its own processor designs for products such as iPhone
and Mac computers.
</p>

<p>
However, designing a processor and manufacturing that processor are
different activities. Apple can focus on chip design while specialized
manufacturing partners produce the physical chips.
</p>

<div class="note-flow">
Apple
  ↓
Chip Design
  ↓
Foundry Partner
  ↓
Manufacturing
  ↓
Apple Device
</div>


<h2>13. Intel — Design + Manufacturing</h2>

<p>
Intel historically operated with a vertically integrated model in
which it designed processors and manufactured many of them in its own
fabrication facilities.
</p>

<p>
As semiconductor manufacturing became increasingly complex, every new
generation required advanced lithography, equipment, materials,
investment and manufacturing expertise.
</p>

<p>
This created significant challenges for companies trying to maintain
leadership in both chip design and manufacturing.
</p>


<h2>14. The Changing Semiconductor Landscape</h2>

<p>
As semiconductor manufacturing became more specialized, the industry
increasingly involved separate companies focusing on design,
manufacturing and other parts of the semiconductor supply chain.
</p>

<div class="note-callout">
  <span class="note-callout-title">🔄 Industry Transformation</span>

  <p>
    <strong>Integrated Model → Specialized Design + Specialized Manufacturing</strong>
  </p>

</div>


<h2>15. China and Semiconductor Competition</h2>

<p>
Semiconductors are now important not only for commercial products but
also for artificial intelligence, data centers, communications,
satellites and modern defense systems.
</p>

<p>
As a result, countries including China have invested heavily in
developing semiconductor capabilities.
</p>


<h2>16. Why Taiwan Became Strategically Important</h2>

<p>
Advanced semiconductor manufacturing became highly concentrated in a
small number of locations. Taiwan, particularly through TSMC, became
one of the most important locations for advanced chip manufacturing.
</p>

<p>
This means that semiconductor manufacturing is connected not only with
business and technology but also with supply-chain security and
geopolitics.
</p>

<div class="note-callout">
  <span class="note-callout-title">🌐 Three Dimensions</span>

  <p>
    <strong>Technology + Economy + National Security</strong>
  </p>

</div>


<h2>17. United States and Semiconductor Manufacturing</h2>

<p>
The United States has major semiconductor design and technology
companies, while advanced manufacturing has become distributed across
different regions.
</p>

<p>
To increase domestic semiconductor manufacturing capacity and diversify
supply chains, the United States introduced semiconductor manufacturing
incentives and supported new fabrication facilities.
</p>

<p>
TSMC has also invested in semiconductor manufacturing facilities in
Arizona.
</p>


<h2>18. The Semiconductor Supply Chain</h2>

<div class="note-flow">
Research & Innovation
      ↓
Chip Architecture
      ↓
Chip Design
      ↓
EDA / Design Tools
      ↓
Semiconductor Manufacturing
      ↓
Packaging & Testing
      ↓
Finished Chip
      ↓
Computer / Smartphone / Server / AI System
</div>


<h2>19. The Big Picture</h2>

<div class="note-flow">
1947 — Transistor
      ↓
1958–59 — Integrated Circuit
      ↓
1960s — Semiconductor Ecosystem
      ↓
1971 — Intel 4004
      ↓
1970s — Taiwan Semiconductor Capability
      ↓
1987 — TSMC
      ↓
Fabless + Foundry Model
      ↓
GPU & Advanced Processor Revolution
      ↓
AI + Data Centers + Smartphones
      ↓
Global Semiconductor Supply Chain
      ↓
Technology + Economy + National Security
</div>


<h2>Quick Revision</h2>

<div class="note-callout">

  <span class="note-callout-title">🧠 Remember the Chain</span>

  <p>
    <strong>
      Transistor → IC → Microprocessor → Specialized Chip Design
      → Foundry Manufacturing → AI & Modern Computing
    </strong>
  </p>

</div>


<h2>Exam-Oriented Questions</h2>

<h3>Short Answer Questions</h3>

<ol class="exam-list">
  <li>What is a transistor?</li>
  <li>What is an integrated circuit?</li>
  <li>What is a microprocessor?</li>
  <li>What is Moore's Law?</li>
  <li>What is a semiconductor foundry?</li>
  <li>What is a fabless semiconductor company?</li>
  <li>What is the pure-play foundry model?</li>
</ol>

<h3>Long Answer Questions</h3>

<ol class="exam-list">
  <li>
    Explain the evolution of semiconductor technology from transistor
    to microprocessor.
  </li>

  <li>
    Explain the difference between a fabless semiconductor company
    and a semiconductor foundry.
  </li>

  <li>
    Explain how the foundry model changed the semiconductor industry.
  </li>

  <li>
    Why are semiconductors important for modern computing and
    national security?
  </li>
</ol>

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