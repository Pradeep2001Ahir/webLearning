/*
  WISHWOOD ACADEMY CONTENT ARCHITECTURE

  Academy
    └── Classes
         └── Subjects
              └── Chapters
                   └── Topics
                        └── Practice modes
                             ├── Serial
                             └── Random

  This file is the main content-management layer for the static React app.
  Add/edit classes, subjects, chapters and topics here. The UI is generated
  from this structure, so you usually do not need to create new pages.
*/

const topic = (id, name, description, items, emoji = "•") => ({
  id, name, description, emoji, items
});

const chapter = (id, name, description, topics, emoji = "📘") => ({
  id, name, description, emoji, topics
});

const subject = (id, name, nativeName, description, emoji, chapters) => ({
  id, name, nativeName, description, emoji, chapters
});

const classConfig = (id, name, shortName, stage, description, emoji, subjects) => ({
  id, name, shortName, stage, description, emoji, subjects
});

export const classes = [
  classConfig("nursery", "Nursery", "NUR", "Pre-Primary", "Play, speak, recognise and build first learning habits.", "🌱", [
    subject("hindi","Hindi","हिंदी","पहचान, बोलना और शुरुआती हिंदी अभ्यास","अ",[
      chapter("swar","स्वर","स्वरों की पहचान और उच्चारण",[
        topic("swar-serial","Serial Wise","एक-एक स्वर क्रम से सीखें",["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],"अ"),
        topic("swar-random","Random Practice","स्वरों का मजेदार random test",["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],"🎲")
      ]),
      chapter("vyanjan","व्यंजन","सरल व्यंजनों की पहचान",[
        topic("vyanjan-basic","Basic Vyanjan","क से ह तक शुरुआती अभ्यास",["क","ख","ग","घ","च","छ","ज","झ","ट","ठ","ड","ढ","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","ल","व","श","स","ह"],"क")
      ])
    ]),
    subject("english","English","English","Letters, sounds and early vocabulary","A",[
      chapter("letters","Letters","Capital and small letter recognition",[
        topic("capital","Capital Letters","A to Z uppercase letters","ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),"A"),
        topic("small","Small Letters","a to z lowercase letters","abcdefghijklmnopqrstuvwxyz".split(""),"a")
      ])
    ]),
    subject("maths","Maths","गणित","Numbers, counting and shapes","1",[
      chapter("numbers","Numbers","Recognise early numbers",[
        topic("1-10","Numbers 1–10","One number at a time",Array.from({length:10},(_,i)=>String(i+1)),"1")
      ]),
      chapter("shapes","Shapes","Recognise simple shapes",[
        topic("basic-shapes","Basic Shapes","Circle, square and triangle",["○   Circle","□ Square","△ Triangle"],"◯")
      ])
    ])
  ]),

  classConfig("lkg", "LKG", "LKG", "Pre-Primary", "Build confidence with letters, numbers, sounds and simple words.", "⭐", [
    subject("hindi","Hindi","हिंदी","स्वर, व्यंजन और मात्राओं की practice","अ",[
      chapter("swar","स्वर","स्वरों को serial और random दोनों तरीके से सीखें",[
        topic("swar","स्वर","एक-एक स्वर पहचानें",["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],"अ")
      ]),
      chapter("vyanjan","व्यंजन","व्यंजन पहचान और बोलने का अभ्यास",[
        topic("vyanjan","व्यंजन","व्यंजनों का अभ्यास",["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","ल","व","श","ष","स","ह"],"क")
      ]),
      chapter("matra","मात्राएँ","मात्राओं की शुरुआती पहचान",[
        topic("matra","मात्राएँ","आसान मात्रा cards",["ा","ि","ी","ु","ू","े","ै","ो","ौ","ं","ः"],"ा")
      ])
    ]),
    subject("english","English","English","Alphabet and phonics foundations","A",[
      chapter("alphabet","Alphabet","Capital and small letters",[
        topic("capital","Capital Letters","A to Z","ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),"A"),
        topic("small","Small Letters","a to z","abcdefghijklmnopqrstuvwxyz".split(""),"a")
      ]),
      chapter("phonics","Phonics","Simple letter sounds",[
        topic("first-sounds","First Sounds","Early sound practice",["A – Apple","B – Ball","C – Cat","D – Dog","E – Egg","F – Fish"],"Aa")
      ])
    ]),
    subject("maths","Maths","गणित","Counting, number recognition and shapes","1",[
      chapter("numbers","Numbers","Recognise numbers",[
        topic("1-20","Numbers 1–20","Number recognition",Array.from({length:20},(_,i)=>String(i+1)),"1")
      ]),
      chapter("counting","Counting","Count simple objects",[
        topic("objects","Object Counting","Count the dots",["●","●●","●●●","●●●●","●●●●●","●●●●●●","●●●●●●●","●●●●●●●●","●●●●●●●●●","●●●●●●●●●●"],"●")
      ])
    ])
  ]),

  classConfig("ukg", "UKG", "UKG", "Pre-Primary", "Prepare for primary school with reading, writing and number confidence.", "🎓", [
    subject("hindi","Hindi","हिंदी","Reading-ready Hindi practice","अ",[
      chapter("swar","स्वर","स्वर पहचान और reading practice",[
        topic("swar","स्वर","स्वरों को पढ़ें",["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],"अ")
      ]),
      chapter("matra","मात्राएँ","मात्राओं को अक्षरों के साथ समझें",[
        topic("basic-matra","Basic Matras","मात्रा पहचान",["का","कि","की","कु","कू","के","कै","को","कौ"],"का")
      ])
    ]),
    subject("english","English","English","Early reading and phonics","A",[
      chapter("letters","Letters","Alphabet mastery",[
        topic("capital","Capital Letters","A to Z","ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),"A"),
        topic("small","Small Letters","a to z","abcdefghijklmnopqrstuvwxyz".split(""),"a")
      ]),
      chapter("words","Words","Simple CVC words",[
        topic("cvc","Easy Words","Read simple words",["cat","bat","mat","sun","run","dog","log","pen","hen"],"Aa")
      ])
    ]),
    subject("maths","Maths","गणित","Number sense and early operations","1",[
      chapter("numbers","Numbers","Number recognition",[
        topic("1-50","Numbers 1–50","Numbers one by one",Array.from({length:50},(_,i)=>String(i+1)),"1")
      ]),
      chapter("addition","Addition","Very simple addition",[
        topic("single-digit","Single Digit Addition","Solve small sums",["1 + 1 = 2","2 + 1 = 3","2 + 2 = 4","3 + 1 = 4","3 + 2 = 5","4 + 1 = 5"],"+")
      ])
    ])
  ]),

  ...["1st","2nd","3rd"].map((name, i) => {
    const id = `${i+1}st` === "1st" ? "class-1" : `${i+1}class`;
    const grade = i + 1;
    return classConfig(id, name, name.toUpperCase(), "Primary", `Grade ${grade} foundation learning with structured subjects and chapters.`, "📚", [
      subject("hindi","Hindi","हिंदी","Reading, grammar and vocabulary","अ",[
        chapter("reading","Reading","Read age-appropriate Hindi",[
          topic("letters-words","Letters & Words","Practice letters and common words",["कमल","घर","जल","फल","नल","बस"],"अ")
        ]),
        chapter("matra","मात्राएँ","Matra reading practice",[
          topic("matra-words","Matra Words","Read words with matras",["माला","किताब","कुर्सी","केला","मोती","गौरी"],"ा")
        ])
      ]),
      subject("english","English","English","Reading, vocabulary and grammar","A",[
        chapter("reading","Reading","Simple reading practice",[
          topic("words","Words","Read common words",["apple","ball","cat","school","book","tree"],"A")
        ]),
        chapter("grammar","Grammar","Foundation grammar",[
          topic("nouns","Nouns","Identify naming words",["boy","girl","book","school","dog","tree"],"N")
        ])
      ]),
      subject("maths","Maths","गणित","Numbers and basic operations","1",[
        chapter("numbers","Numbers","Number practice",[
          topic("number-cards","Number Cards","Recognise numbers",Array.from({length:20},(_,x)=>String(x+1)),"1")
        ]),
        chapter("operations","Operations","Basic addition and subtraction",[
          topic("sums","Quick Sums","Solve simple sums",["2 + 1 = 3","4 + 2 = 6","5 - 2 = 3","7 - 3 = 4","3 + 4 = 7"],"+")
        ])
      ])
    ]);
  })
];

export function getClass(classId) {
  return classes.find((item) => item.id === classId);
}

export function getSubject(classId, subjectId) {
  return getClass(classId)?.subjects.find((item) => item.id === subjectId);
}

export function getChapter(classId, subjectId, chapterId) {
  return getSubject(classId, subjectId)?.chapters.find((item) => item.id === chapterId);
}

export function getTopic(classId, subjectId, chapterId, topicId) {
  return getChapter(classId, subjectId, chapterId)?.topics.find((item) => item.id === topicId);
}
