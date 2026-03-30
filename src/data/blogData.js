import img1 from '../app/assets/Blog1.png';
import img2 from '../app/assets/Card2 .jpg';
import img3 from '../app/assets/Card3 .jpg';

function calcReadTime(content) {
  const words = content.reduce((total, block) => {
    if (block.text) return total + block.text.split(/\s+/).length;
    if (block.items) return total + block.items.join(' ').split(/\s+/).length;
    return total;
  }, 0);
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export const blogPosts = [
  {
    title: "The Learning Index: The Productivity Tool You're Overlooking",
    slug: "map-before-you-march",
    date: "March 30, 2026",
    author: "Kiran ",
    excerpt: "Starting without a map is how smart people waste years going in circles. A learning index turns scattered effort into deliberate progress.",
    image: img1,
    get readTime() { return calcReadTime(this.content); },
    content: [
      {
        type: "paragraph",
        text: "A year from now, you'll wish you started today. But what they don't tell you is that starting without a map is how smart people waste years going in circles.",
      },
      {
        type: "paragraph",
        text: "You've been here before. You open a browser, type learn Kubernetes or master system design, and within 20 minutes you're six tabs deep into a rabbit hole. Three hours later, you've consumed a lot but absorbed little. You couldn't explain what you know or what you still don't.",
      },
      {
        type: "paragraph",
        text: "This isn't a motivation problem. It's a navigation problem.",
      },
      {
        type: "quote",
        text: "The difference between professionals who compound their skills and those who perpetually get started is rarely intelligence or work ethic. It's structural clarity before effort.",
      },
      {
        type: "heading",
        text: "The Problem is you're Learning in a Fog",
      },
      {
        type: "paragraph",
        text: "When you start learning something new without a map, you're operating with unknown unknowns. You don't know what you don't know, so you can't prioritize, sequence, or measure progress.",
      },
      {
        type: "list",
        variant: "unordered",
        items: [
          "//The Random Walk// - You follow links, recommendations, and curiosity without a thread connecting them. You learn things, but they don't form a coherent mental model.",
          "//The Depth Trap// - You go extremely deep on one concept early before you have the surrounding context to make sense of it. It doesn't stick.",
          "//The Completeness Illusion// - You mistake I've watched all the videos for I understand this domain. Without an index, you have no way to audit whether you've covered what matters.",
        ],
      },
      {
        type: "paragraph",
        text: "A learning index is the antidote to all three.",
      },
      {
        type: "heading",
        text: "What exactly is a Learning Index?",
      },
      {
        type: "paragraph",
        text: "A learning index is a structured map of a knowledge domain. Not a syllabus handed to you by someone else, but one you construct for yourself before you start filling it in.",
      },
      {
        type: "paragraph",
        text: "Think of it like the table of contents you write for a book before you write the chapters. Or a schema you design before inserting data into a database. It doesn't have to be perfect. It just has to exist.",
      },
      {
        type: "paragraph",
        text: "At minimum, a learning index answers four questions ",
      },
      {
        type: "list",
        variant: "ordered",
        items: [
          "1. What are the major areas of this domain?",
          "2. What are the dependencies between them? (What must I know to understand X?)",
          "3. What does done look like for each area?",
          "4. What's the 20% that gives 80% of the value?",
        ],
      },
      {
        type: "paragraph",
        text: "Here's a minimal example for someone learning distributed systems as a backend engineer ",
      },
      {
        type: "code",
        language: "markdown",
        text: "  Distributed Systems - Learning Index\n\n   1. Foundations\n-   Why distributed systems exist (trade-offs vs. monoliths)\n-   The CAP theorem - what it actually means in practice\n-   Consistency models (eventual, strong, causal)\n\n   2. Core Primitives\n-   Consensus algorithms (Raft, Paxos - at least conceptually)\n-   Leader election\n-   Replication strategies\n\n   3. Patterns\n-   Event sourcing & CQRS\n-   Saga pattern for distributed transactions\n-   Circuit breakers, bulkheads, retries\n\n   4. Systems to Understand\n-   Kafka (message queues, log compaction)\n-   Cassandra (wide-column, ring topology)\n-   Redis (single-threaded, eviction policies)\n\n   5. Practical Exercises\n-   Build a toy key-value store with replication\n-   Implement a distributed lock\n-   Trace a real incident from a public postmortem\n\n---\nDependencies: 1 -> 2 -> 3. Section 4 can run in parallel with 3.\nTarget: 8-10 weeks, 1.5 hrs/day",
      },
      {
        type: "paragraph",
        text: "Notice what this does, it exposes the shape of the domain. You can see what's big, what's small, and what has prerequisites. You can make tradeoffs based on time instead of guessing blindly.",
      },
      {
        type: "heading",
        text: "Why the Index Works | The Cognitive Science",
      },
      {
        type: "heading",
        text: "Schemas and Prior Structure",
      },
      {
        type: "paragraph",
        text: "Cognitive scientists use the word schema to describe organized mental structures that let us categorize and process new information. When you build a learning index, you're pre-building a schema. Every new piece of information you encounter has somewhere to land.",
      },
      {
        type: "paragraph",
        text: "Without a schema, the brain processes new concepts in isolation. With one, each concept slots into a network, reinforcing and being reinforced by adjacent knowledge. This is why experts learn new things in their domain faster than novices: they have more hooks.",
      },
      {
        type: "quote",
        text: "Think of your brain as a codebase. Learning without an index is like writing code with no modules, no file structure, and no type system. Building an index is like establishing the architecture before writing features.",
      },
      {
        type: "heading",
        text: "The Generation Effect",
      },
      {
        type: "paragraph",
        text: "There's a well-documented phenomenon in learning research called the generation effect: information that you generate yourself is retained better than information you passively receive.",
      },
      {
        type: "paragraph",
        text: "When you build your own index, even a rough one, you're forcing yourself to retrieve prior knowledge, identify gaps, and make explicit what's implicit. That effort itself is learning. The index-building process isn't overhead. It is part of learning.",
      },
      {
        type: "heading",
        text: "Metacognition and the Calibration Gap",
      },
      {
        type: "paragraph",
        text: "Professionals who learn effectively have strong metacognitive skills. They know what they know and what they don't. Expert learners spend more time planning and monitoring their learning than novices do.",
      },
      {
        type: "paragraph",
        text: "Building an index is a metacognitive act. You're stepping outside the content and asking: What is the structure of this thing I'm trying to learn? That question alone is more valuable than most of the answers you'll find.",
      },
      {
        type: "heading",
        text: "How to build a Learning Index",
      },
      {
        type: "heading",
        text: "Step 1 | Survey the Landscape",
      },
      {
        type: "paragraph",
        text: "Don't start learning yet. Start mapping. Open 5-7 high-quality sources and skim for topics, not content. You're looking for recurring vocabulary, section headers, and chapter names.",
      },
      
      {
        type: "heading",
        text: "Step 2 | Impose Structure",
      },
      {
        type: "paragraph",
        text: "Group topics into logical clusters. Look for natural hierarchies. At this stage, don't worry about being right. Worry about being explicit.",
      },
      {
        type: "list",
        variant: "unordered",
        items: [
          "Which topics are clearly foundational?",
          "Which are advanced applications of others?",
          "Which topics appear everywhere? Those are load-bearing, so don't skip them.",
          "Which feel optional or domain-specific?",
        ],
      },
      {
        type: "heading",
        text: "Step 3 | Map Dependencies ",
      },
      {
        type: "paragraph",
        text: "Draw an arrow from A to B when you need A to understand B. This reveals the critical path.",
      },
      {
        type: "code",
        language: "text",
        text: "Example dependency graph for ML Engineering:\n\nLinear Algebra --\\\n                 +--> Neural Networks --> Transformers --> Fine-tuning\nProbability -----/\n\nPython ----------------> NumPy/Pandas --> PyTorch --> Training loops",
      },
      {
        type: "paragraph",
        text: "Your dependency graph tells you in what order to learn things. This alone eliminates the Depth Trap failure mode.",
      },
      {
        type: "heading",
        text: "Step 4 | Assign Effort and Priority ",
      },
      {
        type: "list",
        variant: "unordered",
        items: [
          "Depth needed: conceptual only, working knowledge, or production-ready",
          "Relative effort: small, medium, or large",
          "Priority: core, nice-to-have, or optional",
        ],
      },
      {
        type: "paragraph",
        text: "This is how you build a roadmap you can actually follow under real constraints.",
      },
      {
        type: "heading",
        text: "Step 5 | Leave Blanks Intentionally",
      },
      {
        type: "paragraph",
        text: "Your index will have gaps. That's fine. Leave them as unchecked items or question marks. The gaps are honest signals that you know what you don't know.",
      },
      {
        type: "heading",
        text: "Common Mistakes",
      },
      {
        type: "heading",
        text: "Mistake 1 | Waiting for the Perfect Index",
      },
      {
        type: "paragraph",
        text: "The index is a living document. It will be wrong. Topics will move. You'll discover that something you thought was small is actually vast. That's fine. An imperfect map is infinitely better than no map.",
      },
      {
        type: "paragraph",
        text: "Update the index as you learn. Treat it like a codebase. Version it, refine it, and don't be precious about it.",
      },
      {
        type: "heading",
        text: "Mistake 2 | Copying Someone Else's Roadmap Verbatim",
      },
      {
        type: "paragraph",
        text: "Community-made roadmaps are useful starting points, but they're built for the average learner. You have specific prior knowledge, a specific job context, and specific goals. Use external roadmaps as input, then build your own.",
      },
      {
        type: "heading",
        text: "Mistake 3 | Confusing Topics with Resources",
      },
      {
        type: "paragraph",
        text: "Your index should list concepts and capabilities, not resources to consume.",
      },
      {
        type: "code",
        language: "markdown",
        text: "  Wrong - Resource Index\n-   Watch CS50 Lecture 3\n-   Read Chapter 4 of DDIA\n-   Finish the Udemy course\n\n  Right - Knowledge Index\n-   Understand hash collision strategies and their trade-offs\n-   Explain the difference between replication and partitioning\n-   Implement a basic LSM-tree",
      },
      {
        type: "paragraph",
        text: "When your index is resource-based, you measure completion by consumption. When it's knowledge-based, you measure completion by understanding, which is what actually matters.",
      },
      {
        type: "heading",
        text: "Mistake 4 | No Exit Criteria",
      },
      {
        type: "paragraph",
        text: "Every section in your index should have a rough definition of done. Otherwise you'll either move on too early or spend three weeks on one topic out of anxiety.",
      },
      {
        type: "list",
        variant: "unordered",
        items: [
          "I can explain X to a peer without looking it up.",
          "I can debug a real problem involving Y.",
          "I've built a working prototype of Z.",
        ],
      },
      {
        type: "heading",
        text: "The Broader Principle | Structure Enables Speed",
      },
      {
        type: "paragraph",
        text: "Before writing a large feature, senior engineers write a design doc. Before starting a project, PMs write a PRD. Before writing a thesis, academics write a literature review and an outline. These are structural investments that pay back with speed and coherence.",
      },
      {
        type: "paragraph",
        text: "The professionals who seem to pick things up fast have usually internalized this habit: map the territory before traversing it.",
      },
      {
        type: "list",
        variant: "unordered",
        items: [
          "Confidence - you know where you are at any point",
          "Speed - less time wasted on dead ends and rabbit holes",
          "Retention - information has a place to live",
          "Transferability - you can explain what you know because you can see its shape",
        ],
      },
      {
        type: "heading",
        text: " Learning Rust as a Go Engineer",
      },
      {
        type: "paragraph",
        text: "Imagine you're a Go engineer who needs to get productive in Rust within three months for a new project. Without an index, you'd likely start with The Book, get stuck on lifetimes, take a detour into Rustlings, lose the thread, and end up with scattered knowledge.",
      },
      {
        type: "paragraph",
        text: "With an index, your first session looks like this:",
      },
      {
        type: "code",
        language: "markdown",
        text: "  Rust - Learning Index (Go Engineer Background)\n\n   Prior Knowledge to Leverage\n- Goroutines <-> async/await (different model, similar intent)\n- Interfaces <-> Traits (close analog)\n- Garbage collection -> absent; that's the whole point\n\n   Critical Path (must learn in order)\n1.   Ownership model - the core mental model shift\n2.   Borrowing rules & lifetimes - the hardest part; time-box to 1.5 weeks\n3.   Traits and generics - familiar territory after Go interfaces\n4.   Error handling - Result<T, E> vs. Go's multiple returns\n5.   Concurrency - async vs. threads, no data races by construction\n\n   Secondary (learn after critical path)\n-   Macros (just enough to read them, not write them yet)\n-   Unsafe Rust (understand it exists; avoid it for now)\n-   The ecosystem: cargo, crates.io, clippy, rustfmt\n\n   Exit Criteria\n- Can write a small CLI tool in Rust from scratch\n- Can review Rust PRs and leave meaningful comments\n- Understand the error messages the borrow checker gives\n\n   Time Budget\n- 10 weeks x 5 hrs/week = 50 hours total\n- Critical path: 6 weeks. Secondary: 4 weeks.",
      },
      {
        type: "paragraph",
        text: "This index immediately tells you that lifetimes are time-boxed, async can wait, and your Go knowledge is a genuine asset in specific areas. You know where you are on day one.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Learning is work. Time is scarce. The instinct to just start feels efficient but usually isn't when you're learning something substantial.",
      },
      {
        type: "paragraph",
        text: "Building a learning index before you begin is the difference between wandering through a forest and navigating it with a map. The map doesn't remove the work. It makes the work count.",
      },
      {
        type: "paragraph",
        text: "The highest-leverage hour you'll spend on any new skill is the one before you start: stepping back, surveying the territory, and building your own index of what mastery actually looks like.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        variant: "unordered",
        items: [
          "Unknown unknowns kill progress. An index converts them into known unknowns, which you can then systematically eliminate.",
          "Map topics, not resources. Measure learning by understanding, not by consumption.",
          "Dependencies matter. Sequence your learning so each concept builds on solid ground.",
          "The index is a living document. Start rough and update constantly.",
          "Building the index is part of learning. The generation effect means you're already learning while you map.",
          "Define done. Every section needs exit criteria, or you'll never know when to move on.",
        ],
      },
      
      
      
    ]
  },
  {
    title: "Designing for Speed and Security",
    slug: "designing-for-speed-and-security",
    date: "March 22, 2026",
    author: "Alice W",
    excerpt: "A deep dive into the design principles that ensure Noder remains the fastest and most secure platform for your workflow.",
    image: img2,
    get readTime() { return calcReadTime(this.content); },
    content: [
      {
        type: "paragraph",
        text: "Speed and security are often framed as tradeoffs in software development. At Noder, we treat them as design partners.",
      },
      {
        type: "heading",
        text: "Optimizing the Edge",
      },
      {
        type: "paragraph",
        text: "Deploying compute resources closer to users reduces latency and improves responsiveness. That speed only matters if the system is trustworthy, which is why access controls and encryption need to be part of the architecture from the start.",
      },
      {
        type: "heading",
        text: "Built-in Compliance",
      },
      {
        type: "paragraph",
        text: "Security belongs in every layer of the stack, from the database to the API surface. The goal is to preserve performance without creating separate systems for governance and compliance.",
      },
    ]
  },
];