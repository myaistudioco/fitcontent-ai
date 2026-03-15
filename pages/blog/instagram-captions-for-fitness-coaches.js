import Link from "next/link";
import SEOHead from "../../components/SEOHead";

const captions = [
  {
    category: "Motivational",
    color: "#E1306C",
    items: [
      { number: 1, text: "The only bad workout is the one that didn't happen. Show up. Do the work. Trust the process. 💪\n\n#FitnessMotivation #WorkoutMotivation #FitnessCoach #HealthyLifestyle #GymLife" },
      { number: 2, text: "Progress over perfection. Every single rep, every single day adds up to something incredible. Keep going. 🔥\n\n#ProgressNotPerfection #FitnessJourney #WorkoutDaily #FitLife #PersonalTrainer" },
      { number: 3, text: "You didn't come this far to only come this far. Your best body is built one decision at a time. Make today count. ⚡\n\n#FitnessGoals #BodyTransformation #FitnessMindset #GymMotivation #FitnessCoach" },
      { number: 4, text: "Rest days are not lazy days. They are growth days. Your muscles don't grow in the gym — they grow when you recover. 😴\n\n#RecoveryDay #RestAndRecover #FitnessScience #TrainSmart #FitnessCoach" },
      { number: 5, text: "One year from now you'll wish you started today. The perfect time is right now. Not Monday. Not next month. NOW. 📅\n\n#StartToday #FitnessMotivation #NoExcuses #FitnessJourney #GetFit" },
      { number: 6, text: "The pain of discipline is temporary. The regret of not trying lasts forever. Choose discipline. Every. Single. Time. 💯\n\n#Discipline #FitnessLife #MindsetMatters #FitnessCoach #TrainHard" },
      { number: 7, text: "Your body hears everything your mind says. Speak strength. Speak progress. Speak possibility. 🧠\n\n#MindBodyConnection #FitnessMindset #PositiveVibes #FitnessCoach #MentalStrength" },
      { number: 8, text: "Consistency is the only shortcut. There is no magic programme. There is only showing up when you don't feel like it. 🏋️\n\n#Consistency #FitnessRoutine #GymLife #FitnessCoach #WorkoutEveryDay" },
      { number: 9, text: "You are one workout away from a better mood. Feeling stressed, anxious, low? Lace up. Move. Everything shifts. 🎯\n\n#WorkoutTherapy #FitnessForMentalHealth #ExerciseBenefits #FitnessCoach #MoveYourBody" },
      { number: 10, text: "Strong is not a size. It is a commitment. To yourself, your health, and the life you deserve to live. 💪\n\n#StrongNotSkinny #BodyPositive #FitnessForAll #FitnessCoach #HealthFirst" },
    ]
  },
  {
    category: "Educational",
    color: "#F59E0B",
    items: [
      { number: 11, text: "Why you're not losing weight (even though you're training hard) 👇\n\nIt's probably not your workouts. It's your recovery, sleep, and stress levels. Here's what to fix first:\n\n1. Sleep 7-9 hours\n2. Manage cortisol\n3. Eat enough protein\n4. Take rest days seriously\n\nSave this post. Tag a friend who needs to hear it. 📌\n\n#WeightLossTips #FitnessEducation #NutritionTips #FitnessCoach #HealthyLiving" },
      { number: 12, text: "The truth about cardio that nobody tells beginners 🏃\n\nMore cardio ≠ more fat loss.\n\nToo much cardio raises cortisol, breaks down muscle, and increases hunger.\n\nTry this instead:\n→ 2-3 strength sessions per week\n→ 2 low-intensity cardio sessions\n→ 8,000+ steps daily\n\nSmarter, not harder. 💡\n\n#CardioTips #FitnessAdvice #StrengthTraining #FitnessCoach #WorkoutTips" },
      { number: 13, text: "Protein 101 for fitness coaches clients 🥩\n\nMost people eat half the protein they need.\n\nTarget: 1.6-2.2g per kg of bodyweight daily\n\nBest sources:\n• Chicken breast\n• Greek yoghurt\n• Eggs\n• Cottage cheese\n• Protein shakes\n\nHit your protein. Build more muscle. Feel better. Simple.\n\n#ProteinIntake #NutritionTips #FitnessNutrition #FitnessCoach #EatRight" },
      { number: 14, text: "What actually happens to your body when you skip the gym for a week 📊\n\nDay 1-3: Nothing. Literally nothing bad happens.\nDay 4-7: Slight glycogen depletion. Mental freshness increases.\nWeek 2: Minor strength decrease (2-5%)\nWeek 3+: Noticeable detraining begins.\n\nOne week off = completely fine. Guilt not included.\n\n#DetrainingFacts #RestWeek #FitnessScience #FitnessCoach #WorkoutFacts" },
      { number: 15, text: "The 3 most overrated exercises (and what to do instead) 👇\n\n❌ Sit-ups → ✅ Dead bugs\n❌ Hip abductor machine → ✅ Lateral band walks\n❌ Behind-the-neck press → ✅ Landmine press\n\nTrain smarter. Protect your joints. Get better results.\n\n#ExerciseTips #WorkoutAdvice #FitnessCoach #SmartTraining #GymTips" },
      { number: 16, text: "How long does it actually take to see results? 📅\n\n2 weeks: Better sleep and mood\n4 weeks: You notice changes\n8 weeks: Others start to notice\n12 weeks: Visible transformation\n6 months: Life-changing results\n\nStop expecting 6-month results from 6-week effort. Trust the timeline.\n\n#FitnessTimeline #ResultsTakTime #FitnessJourney #FitnessCoach #Consistency" },
      { number: 17, text: "Why warming up is non-negotiable (especially after 30) 🔥\n\nA proper warm-up:\n→ Increases blood flow to muscles\n→ Improves range of motion\n→ Reduces injury risk by up to 50%\n→ Prepares your CNS for heavy lifting\n\n5 minutes of warm-up saves months of injury recovery.\n\n#WarmUpRoutine #InjuryPrevention #FitnessCoach #TrainSmart #WorkoutTips" },
      { number: 18, text: "The compound exercises every beginner needs to master 💪\n\n1. Squat\n2. Deadlift\n3. Bench Press\n4. Row\n5. Overhead Press\n\nMaster these 5 movements and you have 80% of what you need to build a strong, healthy body. Everything else is secondary.\n\n#CompoundMovements #BeginnerFitness #FitnessCoach #StrengthTraining #GymBasics" },
      { number: 19, text: "Signs your workout programme is actually working (that aren't the scale) ⚖️\n\n✅ You're sleeping better\n✅ Your mood has improved\n✅ You're lifting heavier\n✅ Everyday tasks feel easier\n✅ Your posture has improved\n✅ You feel more confident\n\nThe scale is one measure. Not the only one.\n\n#NonScaleVictory #FitnessProgress #FitnessCoach #HealthNotWeight #MindsetShift" },
      { number: 20, text: "The real reason most people quit their fitness programme 🧠\n\nIt's not lack of motivation.\nIt's unrealistic expectations.\n\nThey expect:\n• 10kg loss in 4 weeks\n• Visible abs by week 6\n• Zero bad days\n\nThe fix: Set process goals, not just outcome goals. Show up 3x per week. That's it. The results follow.\n\n#FitnessGoals #WhyPeopleQuit #FitnessCoach #MindsetMatters #Consistency" },
    ]
  },
  {
    category: "Personal Story",
    color: "#7C3AED",
    items: [
      { number: 21, text: "I almost quit personal training in my second year. 😔\n\nClients weren't getting results. I wasn't charging enough. I was burning out.\n\nThen one client lost 18kg in 6 months and sent me a voice note crying with gratitude.\n\nThat's why I do this.\n\nWhat keeps you going on the hard days? Drop it below 👇\n\n#PersonalTrainerLife #FitnessCoachStory #WhyIDoThis #FitnessJourney #PTLife" },
      { number: 22, text: "The client who changed how I coach forever 🙏\n\nShe came to me after 10 years of yo-yo dieting.\nShe didn't need a harder programme.\nShe needed someone to believe in her.\n\nWe focused on consistency, not perfection.\nShe lost 24kg over 18 months and kept it off.\n\nThat's sustainable fitness. That's the goal.\n\n#ClientTransformation #SustainableFitness #FitnessCoach #LongTermResults #FitnessStory" },
      { number: 23, text: "Honest post: my fitness journey is not perfect. 💬\n\nI have weeks where I miss sessions.\nI eat pizza on Fridays.\nI don't always feel motivated.\n\nAnd that's okay.\n\nPerfection is not the goal. Progress is.\nConsistency over months and years is what changes bodies.\n\nGive yourself grace. Keep going. 🙌\n\n#HonestFitnessPost #ImperfectJourney #FitnessCoach #RealTalk #ProgressNotPerfection" },
      { number: 24, text: "What nobody tells you about becoming a fitness coach 📣\n\nYou'll question yourself constantly.\nYou'll have clients who don't do the work.\nYou'll compare yourself to coaches with millions of followers.\n\nBut you'll also change lives in ways you never expected.\n\nStay the course. Your work matters. 💪\n\n#FitnessCoachLife #CoachingReality #PersonalTrainer #FitnessIndustry #KeepGoing" },
      { number: 25, text: "Three years ago I was working a desk job I hated. 💻➡️🏋️\n\nNow I help people transform their bodies and their confidence every single day.\n\nThe leap was terrifying. Worth every second.\n\nIf you're thinking about making a change — in your career, your health, your life — this is your sign.\n\n#CareerChange #FitnessCoach #FollowYourPassion #FitnessLife #Transformation" },
    ]
  },
  {
    category: "Promotional",
    color: "#10B981",
    items: [
      { number: 26, text: "🚨 3 spots left for my 12-week transformation programme.\n\nWhat you get:\n✅ Personalised training plan\n✅ Custom nutrition guide\n✅ Weekly check-ins\n✅ WhatsApp support\n✅ Proven results\n\n12 weeks from now you could be a completely different person.\n\nDM me 'TRANSFORM' to apply. Limited spots. 🔥\n\n#OnlineCoaching #FitnessCoach #12WeekTransformation #PersonalTrainer #FitnessResults" },
      { number: 27, text: "Free resource for my fitness community 🎁\n\nI've put together my complete 5-day beginner workout plan — absolutely free.\n\nIncludes:\n→ Full workout videos\n→ Exercise descriptions\n→ Warm-up and cool-down\n→ Nutrition basics guide\n\nComment 'BEGINNERS' below and I'll send it straight to your DMs. 📩\n\n#FreeWorkoutPlan #FitnessCoach #BeginnerWorkout #FreeResource #FitnessGiveaway" },
      { number: 28, text: "Results don't lie. 📊\n\nIn the last 6 months my online clients have:\n→ Lost an average of 8.5kg\n→ Improved strength by 40%\n→ Reported better sleep in 90% of cases\n→ Maintained results 12 months later\n\nThis isn't luck. It's a proven system.\n\nReady to be the next success story? Link in bio. 🔗\n\n#FitnessResults #OnlineCoaching #FitnessCoach #ProvenSystem #ClientResults" },
      { number: 29, text: "My online coaching programme is now open for January 🎉\n\n12 weeks. Personalised. Proven.\n\nPerfect for you if:\n• You've tried and failed before\n• You don't know where to start\n• You want accountability\n• You're ready to commit\n\nFirst 5 people to DM me 'READY' get £50 off.\n\nAre you ready? 💪\n\n#OnlineCoaching #JanuaryFitness #FitnessCoach #NewYearFitness #PersonalTrainer" },
      { number: 30, text: "Not sure if online coaching is right for you? Here's who it's perfect for 👇\n\n✅ Busy professionals with limited time\n✅ People who've tried fad diets and failed\n✅ Those who need accountability\n✅ Anyone who wants a plan that actually works\n✅ People ready to invest in themselves\n\nIf that's you — my DMs are open. Let's talk. 💬\n\n#OnlineCoachingForYou #FitnessCoach #IsOnlineCoachingRightForMe #PersonalTrainer #FitnessHelp" },
    ]
  },
  {
    category: "Engagement",
    color: "#0077B5",
    items: [
      { number: 31, text: "This or that — fitness edition! 🏋️\n\nComment your answers 👇\n\nMorning workout OR Evening workout?\nCardio OR Weights?\nGym OR Home workout?\nProtein shake OR Real food?\nRest day OR Active recovery?\n\nGo! ⬇️\n\n#FitnessThisOrThat #FitnessDebate #FitnessCoach #GymCommunity #WorkoutPoll" },
      { number: 32, text: "Drop your current workout split in the comments 👇\n\nMine: Push/Pull/Legs 3x per week + 2 cardio sessions\n\nAlways curious what's working for people right now. Let's share what's working! 💪\n\n#WorkoutSplit #FitnessRoutine #FitnessCoach #GymCommunity #ShareYourWorkout" },
      { number: 33, text: "The hardest part of getting fit is not the workouts. It's the _____.\n\nFill in the blank 👇\n\nFor me it's consistency during busy weeks. What's yours?\n\n#FitnessChallenge #FillInTheBlank #FitnessCoach #FitnessStruggle #RealTalk" },
      { number: 34, text: "Rate your current fitness routine out of 10 👇\n\n1-3: Just getting started\n4-6: Going okay but could be better\n7-8: Pretty consistent\n9-10: Absolutely crushing it\n\nWhere are you right now? No judgment — just honesty. 💬\n\n#FitnessCheck #HowAreYouDoing #FitnessCoach #FitnessCommunity #RateYourself" },
      { number: 35, text: "Unpopular fitness opinion: More is not better. 🔥\n\nAgree or disagree? 👇\n\nIn my experience: 3 focused sessions per week beats 6 mediocre sessions every time.\n\nQuality > Quantity. Always.\n\n#UnpopularOpinion #FitnessDebate #FitnessCoach #TrainSmart #QualityOverQuantity" },
    ]
  },
  {
    category: "Behind the Scenes",
    color: "#FF6B00",
    items: [
      { number: 36, text: "A day in my life as a fitness coach 📅\n\n5:30am — My own training session\n7:00am — First client of the day\n9:00am — Content creation and admin\n12:00pm — Online client check-ins\n2:00pm — Afternoon client sessions\n5:00pm — Programme writing\n7:00pm — Family time and recovery\n\nBusy? Yes. Fulfilling? Absolutely. 💪\n\n#DayInMyLife #FitnessCoachLife #PersonalTrainer #BehindTheScenes #FitnessRoutine" },
      { number: 37, text: "What my gym bag always has 🎒\n\n→ Resistance bands\n→ Lifting straps\n→ Protein bar\n→ Shaker bottle\n→ Notebook (old school)\n→ Wireless earbuds\n→ Extra hair ties (always)\n\nWhat's the one thing you never train without? Drop it below 👇\n\n#GymBag #GymEssentials #FitnessCoach #WorkoutGear #GymLife" },
      { number: 38, text: "Real talk: this is what burnout looks like for a fitness coach 😤\n\n• Dreading client sessions\n• Skipping your own workouts\n• Scrolling Instagram comparing yourself to others\n• Undercharging and overworking\n\nI've been there. Here's how I got out:\n\n→ Raised my prices\n→ Took a full week off\n→ Cut my client load by 30%\n→ Started saying no\n\nBoundaries are not selfish. They're necessary. 🙏\n\n#FitnessCoachBurnout #CoachingReality #PersonalTrainerLife #MentalHealthMatters #RealTalk" },
      { number: 39, text: "Before I became a coach, I thought I had to be perfect. 💭\n\nPerfect body. Perfect diet. Perfect workout every day.\n\nNow I know the best coaches are the ones who have struggled, failed, and come back stronger.\n\nImperfection is your greatest coaching asset. Own it. 💪\n\n#FitnessCoachJourney #ImperfectCoach #AuthenticCoaching #FitnessReality #CoachingTips" },
      { number: 40, text: "Setting up my home studio for online coaching sessions 🏠💻\n\nWhat I use:\n→ Ring light (game changer)\n→ Decent microphone\n→ Clean background\n→ Good wifi\n→ Zoom or Calendly for bookings\n\nYou don't need fancy equipment to start online coaching. You need consistency and results. 📱\n\n#OnlineCoachingSetup #FitnessCoach #HomeStudio #OnlinePersonalTrainer #CoachingTips" },
    ]
  },
  {
    category: "Seasonal & Trending",
    color: "#E1306C",
    items: [
      { number: 41, text: "New year, same you — but better. 🎉\n\nForget the dramatic overhaul. Pick ONE habit to build this January:\n\n• 3 workouts per week\n• 8,000 steps daily\n• 7 hours sleep\n• 2 litres of water\n\nOne habit. Master it. Everything else follows.\n\n#NewYearFitness #JanuaryFitness #FitnessGoals #FitnessCoach #OneHabit" },
      { number: 42, text: "Summer body season starts NOW. ☀️\n\nNot in April. Not in May. Now.\n\n12 weeks of consistent training = visible results by summer.\n\nThe clock is ticking. Are you starting today? 💪\n\n#SummerBody #SummerFitness #FitnessCoach #12Weeks #StartNow" },
      { number: 43, text: "Christmas party season survival guide 🎄\n\n→ Eat a protein-rich meal before the party\n→ Drink water between every alcoholic drink\n→ Don't skip your workouts — even 20 minutes counts\n→ Enjoy yourself guilt-free\n→ Get back on track the next day — not the next Monday\n\nBalance is part of a sustainable lifestyle. Enjoy December. 🥂\n\n#ChristmasFitness #HolidayFitness #FitnessCoach #BalancedLifestyle #FitnessTips" },
      { number: 44, text: "Mid-year check-in time 📊\n\nJanuary you set goals. How are they going?\n\n✅ Smashing it — keep going\n⚠️ Lost momentum — time to reset\n❌ Completely off track — no judgement, let's fix it\n\nWherever you are, the best time to reset is today. Not September. Today.\n\n#MidYearFitness #FitnessCheckIn #FitnessCoach #GoalReset #HalfYearReview" },
      { number: 45, text: "Black Friday fitness tip 🖤\n\nThe best investment you can make this weekend is not a gadget or a supplement.\n\nIt's a coach. Or a programme. Or a gym membership you'll actually use.\n\nInvest in your health. It pays dividends forever. 💪\n\n#BlackFridayFitness #InvestInYourHealth #FitnessCoach #FitnessInvestment #HealthFirst" },
    ]
  },
  {
    category: "Quick Tips",
    color: "#69C9D0",
    items: [
      { number: 46, text: "5 things to do today to feel better tomorrow 💡\n\n1. Drink 2L of water\n2. Walk 8,000 steps\n3. Eat 30g of protein at breakfast\n4. Sleep before midnight\n5. Do 10 minutes of stretching\n\nSave this. Do all 5. Report back. 📌\n\n#HealthTips #DailyHabits #FitnessCoach #FeelBetter #WellnessTips" },
      { number: 47, text: "The 2-minute rule for fitness consistency 🕐\n\nWhen you don't feel like working out, commit to just 2 minutes.\n\nPut on your trainers. Start the warm-up.\n\n90% of the time you'll finish the full session.\n\nGetting started is the hardest part. Make starting tiny. 💪\n\n#2MinuteRule #FitnessHack #Consistency #FitnessCoach #WorkoutMotivation" },
      { number: 48, text: "3 things your fitness tracker is lying to you about 📱\n\n1. Calories burned (usually 30-50% overestimated)\n2. Sleep quality (steps ≠ sleep depth)\n3. Heart rate during strength training (less accurate than cardio)\n\nUse trackers as motivation tools. Not gospel. 📊\n\n#FitnessTracker #FitnessFacts #FitnessCoach #SmartFitness #WearableTech" },
      { number: 49, text: "The cheapest fitness equipment that actually works 💰\n\n→ Resistance bands ($15) — replace 80% of gym machines\n→ Pull-up bar ($25) — upper body sorted\n→ Jump rope ($10) — best cardio tool ever\n→ Foam roller ($20) — recovery game changer\n\nTotal: $70. Zero excuses. 🏋️\n\n#HomeFitnessEquipment #BudgetFitness #FitnessCoach #HomeWorkout #FitnessOnABudget" },
      { number: 50, text: "One fitness habit that changed everything for my clients 🔄\n\nTracking workouts in a notebook.\n\nNot an app. A notebook.\n\nSeeing physical proof of your progress — weights, reps, dates — is one of the most powerful motivators in fitness.\n\nTry it for 30 days. Thank me later. 📓\n\n#WorkoutLog #TrackYourProgress #FitnessHabit #FitnessCoach #GymJournal" },
    ]
  },
];

export default function InstagramCaptionsForFitnessCoaches() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>
      <SEOHead
        title="50 Instagram Captions for Fitness Coaches That Get More Followers | FitContent AI"
        description="Copy these 50 proven Instagram captions for fitness coaches. Motivational, educational, promotional and engagement captions ready to use."
        url="https://www.fitcontentai.com/blog/instagram-captions-for-fitness-coaches"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .nav-link { color: #666; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .caption-card {
          background: rgba(255,255,255,0.02);
          border: 1.5px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 16px;
          transition: border-color 0.2s;
        }
        .caption-card:hover { border-color: rgba(255,107,0,0.2); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FITCONTENT AI</span>
        </Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/blog" className="nav-link">← Back to Blog</Link>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Try Free ⚡</Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px" }}>

        {/* Badge */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ background: "rgba(225,48,108,0.12)", color: "#E1306C", fontWeight: 700, fontSize: 11, padding: "4px 14px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            📸 Instagram
          </span>
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: 2, lineHeight: 1.1, marginBottom: 24, background: "linear-gradient(135deg, #fff 0%, #E1306C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          50 INSTAGRAM CAPTIONS FOR FITNESS COACHES THAT GET MORE FOLLOWERS
        </h1>

        {/* Intro */}
        <p style={{ fontSize: 18, lineHeight: 1.8, color: "#aaa", borderLeft: "3px solid #E1306C", paddingLeft: 20, marginBottom: 40 }}>
          Writing Instagram captions from scratch every day is exhausting. These 50 captions are ready to copy, personalise, and post — covering every content type a fitness coach needs, from motivational posts to promotional offers to behind-the-scenes content.
        </p>

        {/* Early CTA */}
        <div style={{ background: "rgba(225,48,108,0.05)", border: "1.5px solid rgba(225,48,108,0.2)", borderRadius: 16, padding: "28px 32px", marginBottom: 48, textAlign: "center" }}>
          <p style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>
            📸 Want unlimited Instagram captions generated automatically?
          </p>
          <p style={{ color: "#666", marginBottom: 20, fontSize: 15 }}>
            FitContent AI generates Instagram captions, TikTok hooks, emails and more from one piece of content — in 10 seconds.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, display: "inline-block", boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>
            Try FitContent AI Free
          </Link>
        </div>

        {/* How to use */}
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 2, color: "#fff", marginBottom: 16 }}>
          HOW TO USE THESE CAPTIONS
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "#aaa", marginBottom: 16 }}>
          These captions are templates — not finished posts. The best results come when you add your own story, your client's name, your specific results, or your unique voice. A caption that starts with a real experience always outperforms a generic one.
        </p>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 15, lineHeight: 2, color: "#aaa", margin: 0 }}>
            ✅ Copy the caption that fits your content for that day<br />
            ✅ Replace any generic details with your own specifics<br />
            ✅ Add your own photo or video that matches the caption<br />
            ✅ Post at your audience's peak engagement time<br />
            ✅ Reply to every comment in the first hour for maximum reach
          </p>
        </div>

        {/* Captions by category */}
        {captions.map((section) => (
          <div key={section.category} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 2, marginBottom: 20, color: section.color }}>
              {section.category.toUpperCase()} CAPTIONS
            </h2>
            {section.items.map((caption) => (
              <div key={caption.number} className="caption-card">
                <div style={{ fontSize: 11, fontWeight: 700, color: section.color, marginBottom: 10, letterSpacing: 1 }}>
                  CAPTION #{caption.number}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#aaa", margin: 0, whiteSpace: "pre-wrap" }}>
                  {caption.text}
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* Final CTA */}
        <div style={{ background: "rgba(255,107,0,0.05)", border: "1.5px solid rgba(255,107,0,0.3)", borderRadius: 20, padding: "48px 36px", marginTop: 64, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: 2, marginBottom: 12, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            GENERATE UNLIMITED CAPTIONS IN 10 SECONDS
          </h2>
          <p style={{ fontSize: 16, color: "#666", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            Stop copying and start creating. FitContent AI generates platform-native content for all 6 platforms from one piece of content — free to start.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "#fff", fontWeight: 800, padding: "16px 36px", borderRadius: 12, textDecoration: "none", fontSize: 17, display: "inline-block", boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>
            ⚡ Try FitContent AI Free
          </Link>
          <p style={{ fontSize: 13, color: "#444", marginTop: 16 }}>
            Free plan available · No credit card required
          </p>
        </div>

        {/* Back to blog */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/blog" style={{ color: "#FF6B00", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
            ← Back to Blog
          </Link>
        </div>

      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", margin: 0 }}>
          © 2026 FitContent AI · Built for fitness coaches
        </p>
      </footer>

    </div>
  );
}
