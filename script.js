const surnamePool = ["김", "이", "박", "최", "정", "강", "윤", "서", "한", "장"];

const namePool = {
  feminine: {
    modern: [
      { given: "지우", hanja: "智祐", meaning: "지혜롭게 주변을 돕는 사람", tags: ["clarity", "warmth", "growth"] },
      { given: "서윤", hanja: "瑞潤", meaning: "좋은 기운으로 주변을 윤택하게 하는 사람", tags: ["harmony", "creativity", "social"] },
      { given: "유나", hanja: "柔娜", meaning: "부드럽고 우아한 흐름을 가진 사람", tags: ["warmth", "freedom", "harmony"] },
      { given: "채원", hanja: "采媛", meaning: "재능을 바탕으로 조화를 만드는 사람", tags: ["growth", "social", "balance"] }
    ],
    traditional: [
      { given: "지현", hanja: "智賢", meaning: "지혜와 덕을 고루 갖춘 사람", tags: ["clarity", "principle", "trust"] },
      { given: "수진", hanja: "秀眞", meaning: "맑고 올곧은 품성을 지닌 사람", tags: ["stability", "principle", "balance"] },
      { given: "민정", hanja: "敏貞", meaning: "총명하고 바른 마음을 지닌 사람", tags: ["clarity", "order", "consistency"] },
      { given: "혜진", hanja: "慧珍", meaning: "총명함과 귀한 가치를 지닌 사람", tags: ["depth", "trust", "growth"] }
    ],
    soft: [
      { given: "소희", hanja: "昭熙", meaning: "밝은 빛처럼 따뜻함을 전하는 사람", tags: ["warmth", "harmony", "empathy"] },
      { given: "나연", hanja: "娜然", meaning: "자연스럽고 부드러운 매력을 지닌 사람", tags: ["calm", "harmony", "freedom"] },
      { given: "유리", hanja: "柔理", meaning: "유연함 속에서도 균형을 지키는 사람", tags: ["flexibility", "balance", "empathy"] },
      { given: "다솜", hanja: "多心", meaning: "사랑과 배려가 풍부한 사람", tags: ["warmth", "empathy", "social"] }
    ],
    strong: [
      { given: "서연", hanja: "書妍", meaning: "깊은 내면과 단단한 지성을 가진 사람", tags: ["leadership", "clarity", "depth"] },
      { given: "지안", hanja: "志安", meaning: "뜻을 세우고 안정적으로 이끄는 사람", tags: ["leadership", "order", "trust"] },
      { given: "가은", hanja: "佳恩", meaning: "좋은 영향력으로 사람을 품는 사람", tags: ["harmony", "social", "trust"] },
      { given: "유진", hanja: "有眞", meaning: "진심과 추진력을 함께 갖춘 사람", tags: ["principle", "energy", "consistency"] }
    ]
  },
  masculine: {
    modern: [
      { given: "민준", hanja: "敏俊", meaning: "민첩함과 뛰어난 역량을 가진 사람", tags: ["energy", "growth", "leadership"] },
      { given: "도윤", hanja: "道潤", meaning: "바른 길로 주변을 이롭게 하는 사람", tags: ["principle", "trust", "balance"] },
      { given: "시우", hanja: "時祐", meaning: "때를 읽고 사람을 돕는 사람", tags: ["clarity", "social", "flexibility"] },
      { given: "하준", hanja: "河俊", meaning: "크게 뻗어가는 실력과 추진력을 가진 사람", tags: ["energy", "vision", "growth"] }
    ],
    traditional: [
      { given: "영호", hanja: "榮浩", meaning: "넓은 그릇과 든든함을 가진 사람", tags: ["stability", "trust", "leadership"] },
      { given: "성민", hanja: "成敏", meaning: "꾸준함과 총명함으로 성과를 내는 사람", tags: ["consistency", "clarity", "order"] },
      { given: "준호", hanja: "俊昊", meaning: "큰 뜻을 품고 성장하는 사람", tags: ["vision", "growth", "principle"] },
      { given: "정우", hanja: "正祐", meaning: "바른 기준으로 주변을 돕는 사람", tags: ["principle", "trust", "harmony"] }
    ],
    soft: [
      { given: "지훈", hanja: "智勳", meaning: "지혜롭게 사람을 이끄는 사람", tags: ["depth", "empathy", "leadership"] },
      { given: "민재", hanja: "敏宰", meaning: "섬세한 판단으로 균형을 잡는 사람", tags: ["clarity", "balance", "calm"] },
      { given: "은우", hanja: "恩宇", meaning: "따뜻한 배려와 넓은 시야를 가진 사람", tags: ["warmth", "harmony", "vision"] },
      { given: "준서", hanja: "俊瑞", meaning: "단정한 품격과 좋은 기운을 지닌 사람", tags: ["trust", "calm", "stability"] }
    ],
    strong: [
      { given: "건우", hanja: "健祐", meaning: "강인함으로 주변을 지키는 사람", tags: ["energy", "leadership", "trust"] },
      { given: "태현", hanja: "泰賢", meaning: "큰 그릇과 현명함을 갖춘 사람", tags: ["vision", "depth", "principle"] },
      { given: "주원", hanja: "柱元", meaning: "중심을 잡고 팀을 떠받치는 사람", tags: ["order", "consistency", "leadership"] },
      { given: "승현", hanja: "承賢", meaning: "책임감 있게 성장을 이끄는 사람", tags: ["consistency", "growth", "clarity"] }
    ]
  },
  any: {
    modern: [
      { given: "하늘", hanja: "夏昊", meaning: "넓은 가능성과 개방성을 지닌 사람", tags: ["freedom", "vision", "creativity"] },
      { given: "지민", hanja: "智旻", meaning: "지혜와 세심함을 고루 갖춘 사람", tags: ["clarity", "balance", "depth"] },
      { given: "수아", hanja: "秀雅", meaning: "맑고 우아한 감각을 가진 사람", tags: ["harmony", "creativity", "warmth"] },
      { given: "서우", hanja: "瑞祐", meaning: "좋은 흐름을 만들어 돕는 사람", tags: ["trust", "social", "growth"] }
    ],
    traditional: [
      { given: "정민", hanja: "正敏", meaning: "바르고 민첩한 판단을 하는 사람", tags: ["principle", "clarity", "order"] },
      { given: "현진", hanja: "賢珍", meaning: "현명함과 진중함을 갖춘 사람", tags: ["depth", "stability", "trust"] },
      { given: "성윤", hanja: "成潤", meaning: "성장과 포용을 함께 이끄는 사람", tags: ["growth", "harmony", "consistency"] },
      { given: "민수", hanja: "敏秀", meaning: "실용성과 역량이 뛰어난 사람", tags: ["practical", "clarity", "energy"] }
    ],
    soft: [
      { given: "해온", hanja: "海溫", meaning: "넓고 따뜻한 마음을 가진 사람", tags: ["warmth", "calm", "harmony"] },
      { given: "온유", hanja: "溫柔", meaning: "온화하고 유연한 성품을 가진 사람", tags: ["empathy", "flexibility", "balance"] },
      { given: "아린", hanja: "雅潾", meaning: "맑고 세련된 감성을 지닌 사람", tags: ["creativity", "depth", "calm"] },
      { given: "라온", hanja: "樂溫", meaning: "즐겁고 편안한 에너지를 주는 사람", tags: ["social", "warmth", "freedom"] }
    ],
    strong: [
      { given: "태양", hanja: "太陽", meaning: "강한 빛으로 방향을 제시하는 사람", tags: ["leadership", "energy", "vision"] },
      { given: "강윤", hanja: "剛潤", meaning: "강인함과 배려를 함께 지닌 사람", tags: ["principle", "trust", "harmony"] },
      { given: "주한", hanja: "柱翰", meaning: "중심을 세우고 목표를 추진하는 사람", tags: ["order", "growth", "leadership"] },
      { given: "지환", hanja: "志煥", meaning: "뜻을 밝게 펼쳐내는 사람", tags: ["vision", "energy", "consistency"] }
    ]
  }
};

const moodMeaning = {
  modern: "트렌디하고 밝은 분위기의 이름",
  traditional: "차분하고 클래식한 분위기의 이름",
  soft: "섬세하고 부드러운 인상의 이름",
  strong: "단단하고 주도적인 느낌의 이름"
};

const romanizationMap = {
  김: "Kim",
  이: "Lee",
  박: "Park",
  최: "Choi",
  정: "Jeong",
  강: "Kang",
  윤: "Yun",
  서: "Seo",
  한: "Han",
  장: "Jang"
};

const givenNameRomanization = {
  지우: "Ji-u",
  서윤: "Seo-yun",
  하린: "Ha-rin",
  다은: "Da-eun",
  유나: "Yu-na",
  채원: "Chae-won",
  지현: "Ji-hyeon",
  수진: "Su-jin",
  민정: "Min-jeong",
  은희: "Eun-hui",
  영숙: "Yeong-suk",
  혜진: "Hye-jin",
  소희: "So-hui",
  나연: "Na-yeon",
  아라: "A-ra",
  유리: "Yu-ri",
  보라: "Bo-ra",
  다솜: "Da-som",
  서연: "Seo-yeon",
  해린: "Hae-rin",
  지안: "Ji-an",
  가은: "Ga-eun",
  유진: "Yu-jin",
  현아: "Hyeon-a",
  민준: "Min-jun",
  도윤: "Do-yun",
  시우: "Si-u",
  하준: "Ha-jun",
  이준: "I-jun",
  현우: "Hyeon-u",
  영호: "Yeong-ho",
  철수: "Cheol-su",
  성민: "Seong-min",
  동현: "Dong-hyeon",
  준호: "Jun-ho",
  정우: "Jeong-u",
  지훈: "Ji-hun",
  민재: "Min-jae",
  유준: "Yu-jun",
  태윤: "Tae-yun",
  은우: "Eun-u",
  준서: "Jun-seo",
  건우: "Geon-u",
  태현: "Tae-hyeon",
  주원: "Ju-won",
  승현: "Seung-hyeon",
  도현: "Do-hyeon",
  강민: "Gang-min",
  하늘: "Ha-neul",
  지민: "Ji-min",
  수아: "Su-a",
  서우: "Seo-u",
  현진: "Hyeon-jin",
  성윤: "Seong-yun",
  미정: "Mi-jeong",
  영진: "Yeong-jin",
  민수: "Min-su",
  해온: "Hae-on",
  온유: "On-yu",
  다온: "Da-on",
  아린: "A-rin",
  시온: "Si-on",
  라온: "Ra-on",
  태양: "Tae-yang",
  강윤: "Gang-yun",
  시혁: "Si-hyeok",
  주한: "Ju-han",
  성우: "Seong-u",
  지환: "Ji-hwan",
  정민: "Jeong-min"
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sanitizeName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function romanizeGivenName(hangul) {
  return givenNameRomanization[hangul] || hangul;
}

function getVibeFromTraits(traits) {
  const score = {
    strong: 0,
    soft: 0,
    modern: 0,
    traditional: 0
  };

  if (traits.energy === "E") {
    score.strong += 2;
    score.modern += 1;
  } else {
    score.soft += 2;
    score.traditional += 1;
  }

  if (traits.info === "N") {
    score.modern += 2;
    score.soft += 1;
  } else {
    score.traditional += 2;
    score.strong += 1;
  }

  if (traits.decision === "T") {
    score.strong += 2;
    score.traditional += 1;
  } else {
    score.soft += 2;
    score.modern += 1;
  }

  if (traits.life === "J") {
    score.traditional += 2;
    score.strong += 1;
  } else {
    score.modern += 2;
    score.soft += 1;
  }

  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

const questionWeights = {
  qe1: 1.4,
  qe2: 1.0,
  qe3: 1.6,
  qi1: 1.4,
  qi2: 1.0,
  qi3: 1.5,
  qd1: 1.6,
  qd2: 1.1,
  qd3: 1.3,
  ql1: 1.5,
  ql2: 1.1,
  ql3: 1.4
};

const axisConfig = {
  energy: { positive: "E", negative: "I" },
  info: { positive: "S", negative: "N" },
  decision: { positive: "T", negative: "F" },
  life: { positive: "J", negative: "P" }
};

const mbtiTagMap = {
  E: ["social", "energy", "leadership"],
  I: ["calm", "depth", "consistency"],
  S: ["practical", "stability", "balance"],
  N: ["creativity", "vision", "growth"],
  T: ["clarity", "principle", "order"],
  F: ["warmth", "empathy", "harmony"],
  J: ["order", "trust", "consistency"],
  P: ["flexibility", "freedom", "creativity"]
};

function getTraitsFromAnswers(data) {
  const axisScores = {
    energy: 0,
    info: 0,
    decision: 0,
    life: 0
  };

  const entries = [
    ["energy", "qe1"],
    ["energy", "qe2"],
    ["energy", "qe3"],
    ["info", "qi1"],
    ["info", "qi2"],
    ["info", "qi3"],
    ["decision", "qd1"],
    ["decision", "qd2"],
    ["decision", "qd3"],
    ["life", "ql1"],
    ["life", "ql2"],
    ["life", "ql3"]
  ];

  entries.forEach(([axis, key]) => {
    const rawValue = Number.parseInt(data.get(key), 10);
    const value = Number.isNaN(rawValue) ? 3 : Math.min(5, Math.max(1, rawValue));
    const centered = value - 3;
    axisScores[axis] += centered * questionWeights[key];
  });

  return {
    energy: axisScores.energy >= 0 ? axisConfig.energy.positive : axisConfig.energy.negative,
    info: axisScores.info >= 0 ? axisConfig.info.positive : axisConfig.info.negative,
    decision: axisScores.decision >= 0 ? axisConfig.decision.positive : axisConfig.decision.negative,
    life: axisScores.life >= 0 ? axisConfig.life.positive : axisConfig.life.negative
  };
}

function getPreferenceTags(mbtiType) {
  return [...mbtiType].flatMap((char) => mbtiTagMap[char] || []);
}

function pickTopMatchedTags(candidateTags, prefTags) {
  return candidateTags.filter((tag) => prefTags.includes(tag)).slice(0, 2);
}

function scoreCandidate(candidate, prefTags) {
  const matches = candidate.tags.filter((tag) => prefTags.includes(tag)).length;
  return matches + Math.random() * 0.35;
}

function mbtiSummary(mbtiType) {
  const explain = {
    E: "외부 활동에서 에너지를 얻고",
    I: "내면의 몰입에서 에너지를 얻고",
    S: "현실성과 구체성을 중시하며",
    N: "가능성과 아이디어를 중시하며",
    T: "논리와 기준을 우선하고",
    F: "공감과 관계를 우선하며",
    J: "계획과 안정감을 선호합니다",
    P: "유연함과 즉흥성을 선호합니다"
  };
  return `${explain[mbtiType[0]]} ${explain[mbtiType[1]]} ${explain[mbtiType[2]]} ${explain[mbtiType[3]]}.`;
}

function generateRecommendations(options) {
  const prefTags = getPreferenceTags(options.mbtiType);
  const candidates = namePool[options.gender][options.vibe];

  const scored = candidates
    .map((candidate) => ({
      candidate,
      score: scoreCandidate(candidate, prefTags)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ candidate }) => {
      const surname = pickRandom(surnamePool);
      const matchedTags = pickTopMatchedTags(candidate.tags, prefTags);
      return {
        fullName: `${surname} ${candidate.given}`,
        romanized: `${romanizationMap[surname]} ${romanizeGivenName(candidate.given)}`,
        hanja: candidate.hanja,
        meaning: candidate.meaning,
        reason: matchedTags.length > 0 ? `${matchedTags.join(", ")} 성향과 잘 맞음` : "균형 잡힌 의미"
      };
    });

  return scored;
}

const form = document.getElementById("name-form");
const emptyState = document.getElementById("result-empty");
const card = document.getElementById("result-card");
const typeBadge = document.getElementById("type-badge");
const typeReason = document.getElementById("type-reason");
const meaning = document.getElementById("meaning");
const recommendations = document.getElementById("recommendations");
const regenerate = document.getElementById("regenerate");
const questionGroups = Array.from(document.querySelectorAll(".trait-group"));
const progressLabel = document.getElementById("question-progress");
const prevQuestionButton = document.getElementById("prev-question");
const nextQuestionButton = document.getElementById("next-question");
const submitButton = document.getElementById("submit-form");

let lastOptions = null;
let currentQuestionIndex = 0;

function renderQuestionStep() {
  questionGroups.forEach((group, index) => {
    group.classList.toggle("hidden", index !== currentQuestionIndex);
  });

  progressLabel.textContent = `질문 ${currentQuestionIndex + 1} / ${questionGroups.length}`;
  prevQuestionButton.classList.toggle("hidden", currentQuestionIndex === 0);
  nextQuestionButton.classList.toggle("hidden", currentQuestionIndex === questionGroups.length - 1);
  submitButton.classList.toggle("hidden", currentQuestionIndex !== questionGroups.length - 1);
}

function renderResult(options) {
  const list = generateRecommendations(options);
  typeBadge.textContent = `성향 타입: ${options.mbtiType}`;
  typeReason.textContent = mbtiSummary(options.mbtiType);
  meaning.textContent = `${moodMeaning[options.vibe]} · 한자 의미와 성향 태그를 함께 반영한 추천${options.sourceName ? ` · 입력 이름: ${options.sourceName}` : ""}`;

  recommendations.innerHTML = "";
  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.fullName}</strong> (${item.romanized})<br>한자: ${item.hanja} · 뜻: ${item.meaning}<br>추천 이유: ${item.reason}`;
    recommendations.appendChild(li);
  });

  emptyState.classList.add("hidden");
  card.classList.remove("hidden");
}

nextQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex >= questionGroups.length - 1) {
    return;
  }
  currentQuestionIndex += 1;
  renderQuestionStep();
});

prevQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex <= 0) {
    return;
  }
  currentQuestionIndex -= 1;
  renderQuestionStep();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const sourceName = sanitizeName(data.get("firstName") || "");

  const traits = getTraitsFromAnswers(data);

  const vibe = getVibeFromTraits(traits);
  const mbtiType = `${traits.energy}${traits.info}${traits.decision}${traits.life}`;

  lastOptions = {
    sourceName,
    gender: data.get("gender"),
    vibe,
    mbtiType
  };

  renderResult(lastOptions);
});

regenerate.addEventListener("click", () => {
  if (!lastOptions) {
    return;
  }
  renderResult(lastOptions);
});

renderQuestionStep();
