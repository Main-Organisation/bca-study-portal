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

  <table class="notes-table">
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
// END OF CURRENT NOTES
// ============================================================
//
// Next topic:
// "Components of a Computer System"
//
// Its notes will be added later without changing the
// navigation architecture.
// ============================================================