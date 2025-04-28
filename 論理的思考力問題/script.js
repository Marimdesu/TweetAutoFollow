const questions = {
  beginner: [
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Cは正直者だ」",
        "B「Eは嘘をついている」",
        "C「Aは嘘をついている」",
        "D「Bは正直者だ」",
        "E「Dは嘘をついている」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「Cは嘘つきだ」",
        "C「Dは正直者だ」",
        "D「Eは嘘をついている」",
        "E「Aは嘘をついている」"
      ],
      answer: ["B", "E"],
      explanation: "BとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは1人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Cは正直者だ」",
        "C「Eは正直者だ」",
        "D「Bは嘘をついている」",
        "E「Aは正直者だ」"
      ],
      answer: ["D"],
      explanation: "Dだけが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは嘘をついている」",
        "B「Cは正直者だ」",
        "C「Dは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Eは正直者だ」",
        "B「Aは嘘つきだ」",
        "C「Bは嘘つきだ」",
        "D「Cは嘘つきだ」",
        "E「Dは正直者だ」"
      ],
      answer: ["B", "C"],
      explanation: "BとCが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは嘘つきだ」",
        "B「Eは正直者だ」",
        "C「Bは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["A", "C"],
      explanation: "AとCが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは1人いる",
      statements: [
        "A「Cは正直者だ」",
        "B「Dは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Aは正直者だ」",
        "E「Bは正直者だ」"
      ],
      answer: ["B"],
      explanation: "Bだけが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「Cは正直者だ」",
        "C「Dは嘘をついている」",
        "D「Eは正直者だ」",
        "E「Aは嘘をついている」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Aは嘘をついている」",
        "C「Bは正直者だ」",
        "D「Eは嘘つきだ」",
        "E「Cは嘘をついている」"
      ],
      answer: ["B", "E"],
      explanation: "BとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは1人いる",
      statements: [
        "A「Cは嘘をついている」",
        "B「Dは正直者だ」",
        "C「Aは嘘つきだ」",
        "D「Eは正直者だ」",
        "E「Bは嘘をついている」"
      ],
      answer: ["C"],
      explanation: "Cだけが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Eは嘘をついている」",
        "B「Dは嘘つきだ」",
        "C「Bは正直者だ」",
        "D「Cは嘘をついている」",
        "E「Aは正直者だ」"
      ],
      answer: ["B", "D"],
      explanation: "BとDが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは嘘つきだ」",
        "B「Cは正直者だ」",
        "C「Dは嘘つきだ」",
        "D「Eは正直者だ」",
        "E「Aは正直者だ」"
      ],
      answer: ["A", "C"],
      explanation: "AとCが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは1人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「Cは嘘をついている」",
        "C「Dは正直者だ」",
        "D「Eは正直者だ」",
        "E「Aは嘘をついている」"
      ],
      answer: ["E"],
      explanation: "Eだけが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは嘘をついている」",
        "B「Aは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Cは嘘つきだ」",
        "E「Bは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Cは正直者だ」",
        "B「Eは嘘つきだ」",
        "C「Dは嘘つきだ」",
        "D「Bは嘘つきだ」",
        "E「Aは正直者だ」"
      ],
      answer: ["C", "D"],
      explanation: "CとDが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは嘘をついている」",
        "B「Dは正直者だ」",
        "C「Eは嘘をついている」",
        "D「Aは正直者だ」",
        "E「Cは嘘をついている」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Eは正直者だ」",
        "B「Cは嘘をついている」",
        "C「Aは正直者だ」",
        "D「Bは正直者だ」",
        "E「Dは嘘をついている」"
      ],
      answer: ["B", "E"],
      explanation: "BとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Eは正直者だ」",
        "C「Aは嘘をついている」",
        "D「Bは嘘をついている」",
        "E「Cは正直者だ」"
      ],
      answer: ["C", "D"],
      explanation: "CとDが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは1人いる",
      statements: [
        "A「Eは嘘つきだ」",
        "B「Cは嘘つきだ」",
        "C「Dは正直者だ」",
        "D「Bは正直者だ」",
        "E「Aは正直者だ」"
      ],
      answer: ["B"],
      explanation: "Bだけが嘘つき。他は正直者になる。"
    }
  ],
  intermediate: [
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「BとCは同じタイプだ」",
        "B「Dは嘘つきだ」",
        "C「Eは正直者だ」",
        "D「Aは正直者だ」",
        "E「Bは正直者だ」"
      ],
      answer: ["B", "D"],
      explanation: "BとDが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「CとDは違うタイプだ」",
        "C「Aは嘘をついている」",
        "D「Eは嘘つきだ」",
        "E「Bは正直者だ」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Cは正直者だ」",
        "B「DとEは同じタイプだ」",
        "C「Bは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["A"],
      explanation: "Aだけが正直者。他は嘘つきになる。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「Cは嘘つきだ」",
        "C「Dは正直者だ」",
        "D「Eは嘘つきだ」",
        "E「Aは嘘つきだ」"
      ],
      answer: ["B", "D", "E"],
      explanation: "B,D,Eが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「CとEは同じタイプだ」",
        "B「Aは正直者だ」",
        "C「Dは嘘つきだ」",
        "D「Bは嘘をついている」",
        "E「Aは嘘をついている」"
      ],
      answer: ["D", "E"],
      explanation: "DとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Eは嘘つきだ」",
        "C「BとDは同じタイプだ」",
        "D「Cは嘘をついている」",
        "E「Aは正直者だ」"
      ],
      answer: ["B", "C"],
      explanation: "BとCが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Eは正直者だ」",
        "B「Aは嘘をついている」",
        "C「Bは正直者だ」",
        "D「Cは正直者だ」",
        "E「Dは嘘つきだ」"
      ],
      answer: ["A", "C", "E"],
      explanation: "A,C,Eが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「BとDは違うタイプだ」",
        "B「Cは正直者だ」",
        "C「Dは正直者だ」",
        "D「Aは嘘をついている」",
        "E「Cは正直者だ」"
      ],
      answer: ["B", "C"],
      explanation: "BとCが正直者。他は嘘つきになる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Cは嘘をついている」",
        "B「DとEは同じタイプだ」",
        "C「AとBは違うタイプだ」",
        "D「Eは正直者だ」",
        "E「Dは嘘つきだ」"
      ],
      answer: ["D", "E"],
      explanation: "DとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「Dは嘘つきだ」",
        "C「Bは嘘をついている」",
        "D「Cは正直者だ」",
        "E「Aは正直者だ」"
      ],
      answer: ["B", "C"],
      explanation: "BとCが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「AとCは同じタイプだ」",
        "C「Eは正直者だ」",
        "D「Bは嘘をついている」",
        "E「Cは嘘をついている」"
      ],
      answer: ["B", "E"],
      explanation: "BとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Bは嘘をついている」",
        "B「Dは正直者だ」",
        "C「AとEは違うタイプだ」",
        "D「Bは正直者だ」",
        "E「Cは嘘をついている」"
      ],
      answer: ["D", "E"],
      explanation: "DとEが正直者。他は嘘つきになる。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「BとCは違うタイプだ」",
        "B「Dは正直者だ」",
        "C「Eは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["B", "D", "E"],
      explanation: "B,D,Eが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「CとDは同じタイプだ」",
        "B「Eは正直者だ」",
        "C「Bは嘘をついている」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「BとEは違うタイプだ」",
        "B「Cは正直者だ」",
        "C「Dは正直者だ」",
        "D「Eは嘘つきだ」",
        "E「Aは正直者だ」"
      ],
      answer: ["D", "E"],
      explanation: "DとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Dは正直者だ」",
        "B「Cは嘘つきだ」",
        "C「Eは正直者だ」",
        "D「Bは正直者だ」",
        "E「Aは嘘をついている」"
      ],
      answer: ["D"],
      explanation: "Dだけが正直者。他は嘘つきになる。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「CとDは同じタイプだ」",
        "C「Eは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Bは嘘をついている」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者になる。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Bは嘘をついている」",
        "B「Dは正直者だ」",
        "C「AとEは同じタイプだ」",
        "D「Cは嘘をついている」",
        "E「Bは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが正直者。他は嘘つきになる。"
    }
  ],
  advanced: [
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「BとCは同じタイプだ」",
        "B「Dは嘘つきだ」",
        "C「Eは正直者だ」",
        "D「Aは嘘をついている」",
        "E「Bは正直者だ」"
      ],
      answer: ["A", "B", "D"],
      explanation: "A,B,Dが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「CとDは違うタイプだ」",
        "B「Aは嘘をついている」",
        "C「Eは正直者だ」",
        "D「BとEは同じタイプだ」",
        "E「Dは嘘をついている」"
      ],
      answer: ["B", "E"],
      explanation: "B,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Eは正直者だ」",
        "B「AとCは違うタイプだ」",
        "C「Bは嘘つきだ」",
        "D「Eは嘘をついている」",
        "E「Dは嘘つきだ」"
      ],
      answer: ["D", "E"],
      explanation: "D,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「BとDは同じタイプだ」",
        "B「Cは正直者だ」",
        "C「Eは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Bは正直者だ」"
      ],
      answer: ["C"],
      explanation: "Cだけが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Dは嘘つきだ」",
        "B「CとEは同じタイプだ」",
        "C「Aは正直者だ」",
        "D「Bは嘘つきだ」",
        "E「Cは嘘つきだ」"
      ],
      answer: ["B", "C", "E"],
      explanation: "B,C,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Cは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Bは嘘をついている」",
        "E「Aは嘘をついている」"
      ],
      answer: ["B", "E"],
      explanation: "B,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人だけいる",
      statements: [
        "A「Bは正直者だ」",
        "B「DとEは同じタイプだ」",
        "C「Aは嘘つきだ」",
        "D「Cは正直者だ」",
        "E「Dは嘘つきだ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Eは嘘つきだ」",
        "B「Aは嘘をついている」",
        "C「Bは正直者だ」",
        "D「Cは嘘つきだ」",
        "E「Dは正直者だ」"
      ],
      answer: ["A", "C", "E"],
      explanation: "A,C,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「DとEは同じタイプだ」",
        "B「Cは正直者だ」",
        "C「Aは嘘をついている」",
        "D「Bは嘘をついている」",
        "E「Aは正直者だ」"
      ],
      answer: ["A", "D", "E"],
      explanation: "A,D,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Bは嘘つきだ」",
        "B「Cは正直者だ」",
        "C「Dは嘘をついている」",
        "D「Eは正直者だ」",
        "E「Aは正直者だ」"
      ],
      answer: ["E"],
      explanation: "Eだけが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Cは嘘つきだ」",
        "B「Aは正直者だ」",
        "C「DとEは同じタイプだ」",
        "D「Bは嘘をついている」",
        "E「Dは正直者だ」"
      ],
      answer: ["C", "D", "E"],
      explanation: "C,D,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Eは嘘つきだ」",
        "B「AとBは同じタイプだ」",
        "C「Bは正直者だ」",
        "D「Cは嘘をついている」",
        "E「Dは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "A,Dが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Cは嘘をついている」",
        "C「BとEは同じタイプだ」",
        "D「Cは正直者だ」",
        "E「Aは嘘つきだ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「BとCは違うタイプだ」",
        "B「Dは正直者だ」",
        "C「Eは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["B", "D", "E"],
      explanation: "B,D,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「CとDは同じタイプだ」",
        "B「Eは正直者だ」",
        "C「Bは嘘をついている」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「BとEは違うタイプだ」",
        "B「Cは正直者だ」",
        "C「Dは正直者だ」",
        "D「Eは嘘つきだ」",
        "E「Aは正直者だ」"
      ],
      answer: ["D", "E"],
      explanation: "DとEが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Dは正直者だ」",
        "B「Cは嘘つきだ」",
        "C「Eは正直者だ」",
        "D「Bは正直者だ」",
        "E「Aは嘘をついている」"
      ],
      answer: ["D"],
      explanation: "Dだけが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「CとDは同じタイプだ」",
        "C「Eは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Bは嘘をついている」"
      ],
      answer: ["C", "E"],
      explanation: "CとEが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Bは嘘をついている」",
        "B「Dは正直者だ」",
        "C「AとEは同じタイプだ」",
        "D「Cは嘘をついている」",
        "E「Bは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが正直者。他は嘘つき。"
    }
  ],
  supreme: [

    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「BとCは同じタイプだ」",
        "B「Dは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Aは正直者だ」",
        "E「BとDは違うタイプだ」"
      ],
      answer: ["A", "B", "E"],
      explanation: "A,B,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「CとEは同じタイプだ」",
        "B「AとDは違うタイプだ」",
        "C「Bは嘘つきだ」",
        "D「Eは正直者だ」",
        "E「Dは嘘をついている」"
      ],
      answer: ["C", "D"],
      explanation: "CとDが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「BとEは同じタイプだ」",
        "B「Cは嘘をついている」",
        "C「Aは正直者だ」",
        "D「BとDは違うタイプだ」",
        "E「Dは正直者だ」"
      ],
      answer: ["B", "D"],
      explanation: "BとDが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Bは正直者だ」",
        "B「Cは嘘つきだ」",
        "C「Dは正直者だ」",
        "D「Eは嘘をついている」",
        "E「Aは正直者だ」"
      ],
      answer: ["E"],
      explanation: "Eだけが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Cは嘘をついている」",
        "B「AとEは同じタイプだ」",
        "C「Bは正直者だ」",
        "D「Eは嘘をついている」",
        "E「Dは正直者だ」"
      ],
      answer: ["A", "C", "D"],
      explanation: "A,C,Dが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「BとDは違うタイプだ」",
        "B「Eは正直者だ」",
        "C「Bは嘘をついている」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["B", "C"],
      explanation: "BとCが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Dは正直者だ」",
        "B「Aは嘘をついている」",
        "C「BとEは同じタイプだ」",
        "D「Cは嘘をついている」",
        "E「Dは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「CとDは同じタイプだ」",
        "B「Aは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Bは嘘つきだ」",
        "E「Cは正直者だ」"
      ],
      answer: ["A", "B", "D"],
      explanation: "A,B,Dが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Bは嘘つきだ」",
        "B「Cは正直者だ」",
        "C「Dは嘘つきだ」",
        "D「Eは正直者だ」",
        "E「Aは正直者だ」"
      ],
      answer: ["E"],
      explanation: "Eだけが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Dは嘘をついている」",
        "B「AとCは違うタイプだ」",
        "C「Bは正直者だ」",
        "D「Eは嘘をついている」",
        "E「Cは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「BとDは同じタイプだ」",
        "B「Cは正直者だ」",
        "C「Eは嘘をついている」",
        "D「Aは正直者だ」",
        "E「Dは嘘をついている」"
      ],
      answer: ["A", "C", "E"],
      explanation: "A,C,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「BとCは同じタイプだ」",
        "B「Dは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Aは正直者だ」",
        "E「BとDは同じタイプだ」"
      ],
      answer: ["D", "E"],
      explanation: "DとEが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「Cは正直者だ」",
        "B「DとEは同じタイプだ」",
        "C「Bは嘘をついている」",
        "D「AとCは同じタイプだ」",
        "E「Dは正直者だ」"
      ],
      answer: ["B", "D", "E"],
      explanation: "B,D,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Bは正直者だ」",
        "B「CとDは同じタイプだ」",
        "C「Eは正直者だ」",
        "D「Aは嘘をついている」",
        "E「Bは嘘つきだ」"
      ],
      answer: ["A", "C"],
      explanation: "AとCが正直者。他は嘘つき。"
    },
    {
      condition: "この中に嘘つきは2人いる",
      statements: [
        "A「Cは正直者だ」",
        "B「Dは嘘つきだ」",
        "C「Eは正直者だ」",
        "D「Aは嘘をついている」",
        "E「BとDは違うタイプだ」"
      ],
      answer: ["B", "D"],
      explanation: "BとDが嘘つき。他は正直者。"
    },
    {
      condition: "この中に嘘つきは3人いる",
      statements: [
        "A「BとCは違うタイプだ」",
        "B「Dは正直者だ」",
        "C「Eは嘘つきだ」",
        "D「Aは正直者だ」",
        "E「Cは正直者だ」"
      ],
      answer: ["B", "D", "E"],
      explanation: "B,D,Eが嘘つき。他は正直者。"
    },
    {
      condition: "この中に正直者は2人いる",
      statements: [
        "A「Bは嘘をついている」",
        "B「Dは正直者だ」",
        "C「AとEは同じタイプだ」",
        "D「Cは嘘をついている」",
        "E「Bは正直者だ」"
      ],
      answer: ["A", "D"],
      explanation: "AとDが正直者。他は嘘つき。"
    },
    {
      condition: "この中に正直者は1人だけいる",
      statements: [
        "A「Dは正直者だ」",
        "B「Cは嘘をついている」",
        "C「Eは正直者だ」",
        "D「Bは正直者だ」",
        "E「Aは嘘をついている」"
      ],
      answer: ["D"],
      explanation: "Dだけが正直者。他は嘘つき。"
    }
  ],
  shigoku: [
    {
      condition: "この中に嘘つきは4人いる",
      statements: [
        "A「B と C は同じタイプだ」",
        "B「D と E は違うタイプだ」",
        "C「A は嘘つきだ」",
        "D「B は正直者だ」",
        "E「C は嘘つきだ」"
      ],
      answer: ["C"],
      explanation: "Cだけ正直者。他は全員嘘つき。"
    },
    {
      condition: "正直者は1人だけ",
      statements: [
        "A「C は嘘つきだ」",
        "B「D と E は同じタイプだ」",
        "C「A は正直者だ」",
        "D「B は正直者だ」",
        "E「A と D は同じタイプだ」"
      ],
      answer: ["A"],
      explanation: "Aだけ正直者。他は嘘つき。"
    },
    {
      condition: "嘘つきは3人ちょうど",
      statements: [
        "A「D は正直者だ」",
        "B「A と E は同じタイプだ」",
        "C「B は嘘つきだ」",
        "D「E は正直者だ」",
        "E「C は嘘つきだ」"
      ],
      answer: ["A", "C", "E"],
      explanation: "A,C,Eが嘘つき。B,Dが正直者。"
    },
    {
      condition: "正直者は2人だけ",
      statements: [
        "A「B と C は同じタイプだ」",
        "B「D は嘘つきだ」",
        "C「E は正直者だ」",
        "D「A は嘘つきだ」",
        "E「B と D は違うタイプだ」"
      ],
      answer: ["B", "E"],
      explanation: "B,Eが正直者。他は嘘つき。"
    },
    {
      condition: "嘘つきは2人だけ",
      statements: [
        "A「B は正直者だ」",
        "B「C は嘘つきだ」",
        "C「D と E は同じタイプだ」",
        "D「A は嘘つきだ」",
        "E「C は正直者だ」"
      ],
      answer: ["C", "D"],
      explanation: "C,Dが嘘つき。他は正直者。"
    },
    {
      condition: "正直者は2人だけ",
      statements: [
        "A「E は嘘つきだ」",
        "B「A と C は違うタイプだ」",
        "C「B は正直者だ」",
        "D「C は嘘つきだ」",
        "E「D は正直者だ」"
      ],
      answer: ["B", "D"],
      explanation: "B,Dが正直者。他は嘘つき。"
    },
    {
      condition: "嘘つきは3人ちょうど",
      statements: [
        "A「C と D は同じタイプだ」",
        "B「A は嘘つきだ」",
        "C「E は正直者だ」",
        "D「B は嘘つきだ」",
        "E「D は正直者だ」"
      ],
      answer: ["A", "B", "E"],
      explanation: "A,B,Eが嘘つき。C,Dが正直者。"
    },
    {
      condition: "正直者は1人だけ",
      statements: [
        "A「B は嘘つきだ」",
        "B「C は正直者だ」",
        "C「D は嘘つきだ」",
        "D「E は正直者だ」",
        "E「A は正直者だ」"
      ],
      answer: ["E"],
      explanation: "Eだけが正直者。他は嘘つき。"
    },
    {
      condition: "嘘つきは2人だけ",
      statements: [
        "A「B と C は違うタイプだ」",
        "B「D は正直者だ」",
        "C「E は嘘つきだ」",
        "D「A は正直者だ」",
        "E「B は嘘つきだ」"
      ],
      answer: ["C", "E"],
      explanation: "C,Eが嘘つき。他は正直者。"
    },
    {
      condition: "正直者は2人だけ",
      statements: [
        "A「D は嘘つきだ」",
        "B「A と E は同じタイプだ」",
        "C「B と D は同じタイプだ」",
        "D「C は嘘をついている」",
        "E「B は正直者だ」"
      ],
      answer: ["A", "E"],
      explanation: "A,Eが正直者。他は嘘つき。"
    }
  ]
};

/* ------------- ① 問題データ & ゲームロジック (元の script.js) ------------- */
/*   既存の日本語データはそのまま利用。最後にエクスポートしている           */
/* --------------------------------------------------------------------------- */

let currentDifficulty = "";
let currentQuestion   = null;

const el = {
  homeCard: document.getElementById("home-card"),
  gameCard: document.getElementById("game-card"),
  diffSel : document.getElementById("difficulty-selection"),
  question: document.getElementById("question-section"),
  result  : document.getElementById("result-section"),
  currentDiffTxt: document.getElementById("current-difficulty"),
  condition: document.getElementById("condition"),
  statements: document.getElementById("statements"),
  choicesBox: document.getElementById("choices"),
  resultMsg : document.getElementById("result-message"),
  correctAns: document.getElementById("correct-answer"),
  explanation: document.getElementById("explanation"),
  playBtn : document.getElementById("play-btn"),
  backBtn : document.getElementById("back-btn"),
  menuBtn : document.getElementById("menu-btn"),
  submitBtn: document.getElementById("submit-btn"),
  nextBtn  : document.getElementById("next-btn")
};

/* ------------------------------
   3. UTILITY FUNCTIONS
   ------------------------------ */
const fadeIn = sel => gsap.fromTo(sel, {opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:"power2.out"});

const launchConfetti = () => {
  const end = Date.now() + 2000;
  (function frame(){
    confetti({particleCount:4,angle:60,spread:55,origin:{x:0}});
    confetti({particleCount:4,angle:120,spread:55,origin:{x:1}});
    if(Date.now() < end) requestAnimationFrame(frame);
  })();
};

/* ------------------------------
   4. NAVIGATION / GAME FLOW
   ------------------------------ */
function hideAllCards(){ document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden")); }

function gotoHome(){ location.reload(); }

function gotoDifficulty(){
  el.result.classList.add("hidden");
  el.question.classList.add("hidden");
  el.diffSel.classList.remove("hidden");
  el.currentDiffTxt.textContent = "難易度を選んでください";
}

function selectDifficulty(level){
  currentDifficulty = level;
  const names = { beginner:"難易度：初心者", intermediate:"難易度：中級者", advanced:"難易度：上級者", supreme:"難易度：至高", shigoku:"難易度：至極" };
  el.currentDiffTxt.textContent = names[level] || "";
  el.diffSel.classList.add("hidden");
  loadQuestion();
}

function loadQuestion(){
  const pool = questions[currentDifficulty] || [];
  if(!pool.length){ alert("問題がありません！"); return; }
  currentQuestion = pool[Math.floor(Math.random()*pool.length)];

  /* Populate UI */
  el.condition.textContent = currentQuestion.condition;
  el.statements.innerHTML = "";
  currentQuestion.statements.forEach(t=>{ const li=document.createElement("li"); li.textContent=t; el.statements.appendChild(li); });
  el.choicesBox.innerHTML = "";
  ["A","B","C","D","E"].forEach(label=>{ const w=document.createElement("label"); const cb=document.createElement("input"); cb.type="checkbox"; cb.value=label; w.appendChild(cb); w.append(" "+label); el.choicesBox.appendChild(w); });

  el.question.classList.remove("hidden"); el.result.classList.add("hidden");
  fadeIn(el.question);
}

function submitAnswer(){
  const selected = Array.from(document.querySelectorAll("#choices input:checked")).map(cb=>cb.value).sort();
  const correct  = [...currentQuestion.answer].sort();
  const ok = JSON.stringify(selected) === JSON.stringify(correct);

  el.resultMsg.textContent = ok ? "🎯 正解！" : "❌ 不正解…";
  if(ok) launchConfetti();

  el.correctAns.textContent = `正解は：${correct.join(", ")}`;
  el.explanation.textContent = currentQuestion.explanation;

  el.question.classList.add("hidden");
  el.result.classList.remove("hidden");
  fadeIn(el.result);
}

function nextQuestion(){ loadQuestion(); fadeIn(el.question); }

/* ------------------------------
   5. STARFIELD BACKGROUND
   ------------------------------ */
(function initStarfield(){
  const cvs=document.getElementById("starfield"); const ctx=cvs.getContext("2d"); let stars=[]; const N=120;
  const resize=()=>{ cvs.width=innerWidth; cvs.height=innerHeight; stars=[...Array(N)].map(()=>({x:Math.random()*cvs.width,y:Math.random()*cvs.height,r:Math.random()*1.2+.3,sp:Math.random()*.7+.2})); };
  const draw=()=>{ ctx.clearRect(0,0,cvs.width,cvs.height); ctx.fillStyle="#ffffffdd"; stars.forEach(s=>{ ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill(); s.y+=s.sp; if(s.y>cvs.height) s.y=0; }); requestAnimationFrame(draw); };
  resize(); addEventListener("resize",resize); draw();
})();

/* ------------------------------
   6. RIPPLES
   ------------------------------ */
document.addEventListener("click",e=>{ const btn=e.target.closest(".btn"); if(!btn) return; const circle=document.createElement("span"); const d=Math.max(btn.clientWidth,btn.clientHeight); const r=d/2; circle.style.width=circle.style.height=`${d}px`; circle.style.left=`${e.clientX-btn.getBoundingClientRect().left-r}px`; circle.style.top=`${e.clientY-btn.getBoundingClientRect().top-r}px`; circle.classList.add("ripple"); btn.querySelector(".ripple")?.remove(); btn.appendChild(circle); });

/* ------------------------------
   7. EVENT BINDINGS
   ------------------------------ */
el.playBtn.addEventListener("click",()=>{ el.homeCard.classList.add("hidden"); el.gameCard.classList.remove("hidden"); fadeIn(el.currentDiffTxt); fadeIn(el.diffSel); });

el.backBtn.addEventListener("click",gotoHome);
el.menuBtn.addEventListener("click",gotoDifficulty);

document.querySelectorAll("[data-level]").forEach(b=>b.addEventListener("click",()=>selectDifficulty(b.dataset.level)));
el.submitBtn.addEventListener("click",submitAnswer);
el.nextBtn.addEventListener("click",nextQuestion);

/* ------------------------------
   8. 3D TILT
   ------------------------------ */
VanillaTilt.init(document.querySelectorAll(".card"),{max:10,speed:400,glare:true,"max-glare":0.25});
