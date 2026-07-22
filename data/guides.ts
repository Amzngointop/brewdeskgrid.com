export interface Guide {
  slug: string;
  title: string;
  label: string;
  teaser: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

export const guides: Guide[] = [
  {
    slug: "coffee-to-water-ratio",
    title: "Coffee-to-Water Ratio, Explained",
    label: "Brewing basics",
    teaser: "The single number that matters more than your grinder, kettle, or bean origin combined.",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1730525798006-de37d3a496fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `## Why the Ratio Matters

Coffee is mostly water. Roughly 98 percent of what ends up in your cup started as plain H2O, and everything else is what gets pulled out of the grounds during brewing. The coffee-to-water ratio describes the relationship between how much dry coffee you use and how much water you brew it with. Get that relationship wrong and no amount of bean quality, grinder precision, or kettle design will save the cup. Too little coffee for the water and you get something thin and sour that tastes more like flavored water than coffee. Too much coffee and the brew turns bitter, heavy, and muddled, masking the character of the beans instead of showcasing it.

## The Golden Range

Most specialty coffee guidance, including recommendations echoed by organizations like the [Specialty Coffee Association](https://sca.coffee), lands somewhere between 1:15 and 1:17 by weight — that is, one gram of coffee for every 15 to 17 grams of water. A dependable starting point for pour-over and drip brewing is 1:16. French press tends to sit a little stronger, closer to 1:15, because the metal filter lets more oils and fine particles through, softening perceived strength. Moka pot and other concentrated methods run much richer, often near 1:10, since the result is meant to be diluted or sipped in small volumes.

## Measuring Without a Scale

A kitchen scale removes all the guesswork, but you can get close without one. A standard tablespoon holds about 5 to 6 grams of coffee, so a rough rule of thumb is two level tablespoons per 8 ounces (about 240 milliliters) of water for a medium-strength cup. Use a liquid measuring cup for the water rather than eyeballing it from the kettle, since pour speed and spout shape make visual estimates unreliable. If you brew the same mug or carafe every day, mark the fill line with tape once and reuse it.

## Adjusting for Strength

Ratio and strength are related but not identical to bitterness. If a cup tastes bitter, the fix is usually a coarser grind or shorter contact time, not less coffee. If a cup tastes weak or watery even though it looks dark, try nudging the ratio from 1:16 toward 1:15 rather than assuming the beans are stale. Small changes matter here — moving from 1:17 to 1:15 is a meaningful jump in a 12-ounce cup, so adjust in half-gram or single-tablespoon increments and taste between changes.

## Common Mistakes

- Eyeballing scoops instead of weighing or using a consistent measure, which makes every cup slightly different.
- Ignoring bloom water, the initial small pour that lets coffee degas, when calculating total water for pour-over methods.
- Assuming a stronger ratio fixes a sour, underextracted cup, when the real issue is usually water temperature or brew time.
- Using the same ratio across very different methods without accounting for how much water actually contacts the grounds.

Once the ratio is dialed in for your preferred method, it becomes the one variable you rarely have to think about again, freeing you up to fine-tune grind size and water temperature instead. For a deeper look at national brewing habits and standards, the [National Coffee Association](https://www.ncausa.org) publishes ongoing consumer research worth browsing.`,
  },
  {
    slug: "grind-size-chart",
    title: "Grind Size Chart: Matching Grind to Your Brew Method",
    label: "Brewing basics",
    teaser: "The number one reason a cup tastes off usually traces back to the grinder, not the beans.",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1629248989876-07129a68946d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `## Why Grind Size Is the First Thing to Check

When a cup of coffee tastes wrong, most people blame the beans. In practice, grind size is the more common culprit, and it is also the easiest variable to fix once you understand the relationship between particle size and extraction. Water pulls flavor compounds out of ground coffee at different rates depending on how much surface area is exposed. Finer grinds expose more surface area and extract faster; coarser grinds expose less and extract slower. Match the grind to the contact time of your brew method and you are most of the way to a balanced cup.

## The Grind Spectrum

- **Extra-coarse** — chunky, almost like breadcrumbs. Used for cold brew, where grounds steep in cold water for 12 to 24 hours. Anything finer turns cold brew muddy and over-extracted.
- **Coarse** — resembles coarse sea salt. This is the French press and cupping grind, suited to full immersion brewing with a metal filter and a 4-minute steep.
- **Medium** — closer to sand. This is the workhorse setting for standard drip machines, siphon brewers, and some flat-bottom pour-over cones.
- **Medium-fine** — slightly finer than table salt, used for cone-shaped pour-over drippers like a V60 or Chemex-style setup with a 3 to 4 minute total brew time.
- **Fine** — approaching powdered sugar in texture. This is the espresso and moka pot range, where water is forced or pressurized through the grounds in a very short window.

## Why Mismatched Grind Ruins a Cup

Brew a fine espresso grind in a French press and the metal mesh filter cannot hold back the fine particles, leaving sludgy sediment at the bottom and a muddy, over-extracted taste up top. Go the other direction and use a coarse grind in an espresso machine, and water rushes through too quickly, producing a thin, sour, underextracted shot with almost no crema. The same logic applies to every method in between: contact time and grind size have to move together.

## A Practical Table, in Words

As a quick reference: pour-over calls for medium-fine, French press calls for coarse, drip machines call for medium, moka pot and espresso call for fine, and cold brew calls for extra-coarse. When in doubt, start one notch coarser than you think you need — it's far easier to taste a slightly weak, underextracted cup and grind finer next time than to fix a bitter, over-extracted one after the fact.

## Burr vs. Blade

Burr grinders crush beans between two surfaces to a consistent, adjustable particle size, which is why nearly every brewing guide, including material published by the [Specialty Coffee Association](https://sca.coffee), recommends them over blade grinders. Blade grinders chop beans unevenly, producing a mix of fine dust and large chunks in the same batch, which extracts inconsistently no matter how carefully you time the brew. If you only upgrade one piece of gear, a decent burr grinder usually delivers the biggest jump in cup quality, bigger than switching beans or kettles.

## Dialing It In

Grind size is worth adjusting in small increments and tasting as you go. If a cup tastes sour or weak, grind finer. If it tastes bitter or harsh, grind coarser. Keep the rest of your process — ratio, water temperature, brew time — constant while you make grind adjustments, so you can actually tell what changed the flavor.`,
  },
  {
    slug: "water-temperature-guide",
    title: "Water Temperature Guide: Why 195–205°F Changes Everything",
    label: "Brewing basics",
    teaser: "Two cups, same beans, same grind, ten degrees apart — and they taste like different coffees.",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `## The Window That Matters

Most brewing guidance points to a water temperature window of 195 to 205°F (roughly 90 to 96°C) for coffee. That range is not arbitrary. Below it, water struggles to dissolve and carry out the full range of flavor compounds locked in the grounds. Above it, water starts pulling out compounds you generally don't want in the cup, including excess bitterness. The window exists because coffee extraction is a chemical process with a sweet spot, not a single ideal number.

## What Happens When Water Is Too Hot

Water at or near a rolling boil, around 212°F, scorches the grounds on contact. This accelerates extraction of bitter compounds faster than it draws out the sweeter, more balanced ones, producing a cup that tastes harsh, flat, or ashy. It also flattens aromatic complexity, since delicate volatile compounds break down at higher temperatures before they can reach your nose. This is why almost every brewing guide recommends letting boiled water rest briefly before pouring.

## What Happens When Water Is Too Cool

Water below roughly 195°F doesn't have enough energy to fully dissolve the flavor compounds in the grounds within a normal brew time. The result is underextraction: a thin, sour, sometimes salty-tasting cup that feels unbalanced even if the beans themselves are high quality. This is a common issue with kettles that shut off too early or with reheated water that has already lost heat by the time it reaches the grounds.

## Estimating Temperature Without a Thermometer

If your kettle doesn't have a built-in temperature setting, bring water to a full boil, then let it sit off the heat for 30 to 45 seconds before pouring over medium-roast coffee. That rest period typically drops boiling water into the 195 to 205°F range. Darker roasts, which are already more soluble, can tolerate the slightly cooler end of that resting window; lighter roasts often taste better closer to 205°F since they need more thermal energy to extract fully.

## Method-Specific Notes

Drip machines and pour-over setups both fall squarely in the 195 to 205°F range. French press benefits from water on the hotter end, since the grounds steep for several minutes and a cooler pour can leave the brew underextracted by the time you press. Moka pots are a special case: water heats on the stovetop and effectively reaches boiling as steam pressure pushes it through the grounds, which is part of why moka coffee tastes more intense and concentrated than filter coffee even at a similar grind.

## Why This Is Worth Getting Right

Water temperature is one of the few brewing variables that costs nothing to fix — no new equipment, just a different habit. Combined with a dialed-in [ratio](/guides/coffee-to-water-ratio) and the right [grind size](/guides/grind-size-chart), temperature control rounds out the three fundamentals that determine whether a cup tastes balanced or off. Resources like the [National Coffee Association](https://www.ncausa.org) cover the science behind extraction in more depth if you want to go further.`,
  },
  {
    slug: "descaling-guide",
    title: "How to Descale Your Kettle and Espresso Machine",
    label: "Maintenance",
    teaser: "White, chalky buildup isn't cosmetic — it changes how your water heats and how your coffee tastes.",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `## What Scale Actually Is

Scale is mineral buildup, mostly calcium and magnesium carbonate, left behind when hard water evaporates or heats repeatedly in the same vessel. It shows up as a white or chalky film on heating elements, kettle interiors, and the internal tubing of espresso machines. Beyond looking unpleasant, scale insulates heating elements, forcing them to work harder and less efficiently, and it can clog the narrow passages inside espresso machines and gooseneck kettles, changing water flow and, eventually, how your coffee tastes.

## How Often to Descale

Frequency depends heavily on your local water hardness. Homes with hard water may need to descale a kettle every 4 to 6 weeks, while soft-water areas can often stretch to every few months. Espresso machines used daily generally benefit from descaling every 1 to 3 months. If you're unsure how hard your water is, most municipal water suppliers publish hardness data, and the [EPA](https://www.epa.gov) maintains general background on drinking water quality standards that can help you understand what's actually in your tap water.

## Descaling a Kettle, Step by Step

1. Mix equal parts white vinegar and water, or dissolve a few tablespoons of citric acid in water, filling the kettle to its normal maximum line.
2. Bring the mixture to a boil, then let it sit, unplugged, for 30 to 60 minutes so the acid has time to dissolve mineral deposits.
3. Empty the kettle and rinse thoroughly with plain water, at least two full rinse cycles.
4. Boil a full kettle of plain water once more and discard it before using the kettle for tea or coffee, to clear any lingering vinegar taste.
5. For stubborn spots, a soft brush or cloth can help after the soak, but avoid abrasive scrubbers on stainless interiors.

## Descaling an Espresso Machine

Espresso machines are more complex, since scale builds up inside boilers and narrow tubing you can't easily reach by hand. Most manufacturers sell a dedicated descaling solution formulated to be gentler on internal seals and gaskets than straight vinegar, and many machines include a built-in descale cycle that runs the solution through the system automatically. Always check your specific machine's manual before improvising with vinegar or citric acid, since some internal components can be more sensitive than a simple kettle. After descaling, run at least two to three cycles of plain water through the group head and steam wand before pulling a shot you intend to drink.

## Vinegar and Citric Acid vs. Commercial Descalers

White vinegar and citric acid are inexpensive, widely available, and effective on basic kettles, but vinegar's strong smell can linger and citric acid is often gentler on rubber seals in more delicate machines. Commercial descaling solutions are formulated specifically for coffee equipment, tend to rinse more cleanly, and are usually the safer default for espresso machines with internal boilers and pumps. Either approach beats skipping the process altogether, since untreated scale buildup shortens the lifespan of heating elements and can eventually restrict water flow enough to affect both temperature and taste.

## Signs You're Overdue

A kettle that takes noticeably longer to boil, visible white flakes in your water, or an espresso machine losing pressure or running slower shots than usual are all signs that scale has built up past the point of being purely cosmetic. Catching it early is easier, cheaper, and gentler on your equipment than waiting until performance visibly suffers.`,
  },
  {
    slug: "gongfu-vs-western-tea",
    title: "Gongfu vs. Western Tea Brewing: A Beginner Comparison",
    label: "Tea brewing",
    teaser: "Two philosophies for the same leaves — one steep, or many short ones. Here's how to choose.",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `## Two Approaches, One Leaf

Western and gongfu brewing start from the same tea leaves but treat them very differently. Western-style brewing, the method most people grow up with, uses a relatively small amount of leaf steeped in a large pot or mug for several minutes, producing one full-strength serving before the leaves are discarded or reused once. Gongfu brewing, a traditional Chinese approach, flips that ratio: a much higher proportion of leaf to water, brewed in a small vessel, with many short steeps of 10 to 30 seconds each rather than one long one.

## Why Gongfu Uses So Much Leaf

Because each gongfu steep is so brief, the leaf-to-water ratio has to be high, often three to five times what you'd use in a Western mug, so enough flavor transfers in that short window. The tradeoff is that gongfu brewing yields many small pours instead of one large cup, and the flavor of each pour shifts slightly as the session continues, often opening up in the first two or three steeps and mellowing toward the end. It's less about efficiency and more about watching a single batch of leaves unfold over time, sip by sip.

## What You Actually Need

Western brewing needs almost nothing beyond a mug or teapot and a way to heat water — the same [electric kettle](/best/electric-kettles) used for coffee works fine. Gongfu brewing benefits from a small teapot or gaiwan (a lidded bowl-and-saucer set), a pitcher to even out the pour between small cups, and, importantly, a kettle with a controlled pour. This is where a gooseneck spout earns its keep: gongfu steeps are so short that an uneven, splashy pour changes how evenly the leaves saturate from one steep to the next, which throws off consistency across a session. A steady, aimable stream matters here in a way it simply doesn't for a five-minute Western steep.

## Flavor Differences

Western brewing tends to average out a tea's character into a single, consistent cup — good for a reliable daily routine. Gongfu brewing spreads that same character across several steeps, often revealing different notes as the session progresses: a brighter, more floral first pour giving way to deeper, more mineral or roasted notes later on. Neither approach is more "correct." Delicate green and white teas often do well Western-style if you're new to brewing, while oolongs and aged teas tend to reward the multiple-steep gongfu approach, since they have more layers to unfold.

## Getting Started

If you're curious about gongfu brewing but don't want to buy specialized gear right away, you can approximate it with any small teapot and a regular kettle: use more leaf than you normally would, steep for a fraction of your usual time, and repeat several times, tasting as you go. Organizations like the [Tea Association of the USA](https://www.teausa.com) publish general background on tea types and preparation if you want to explore beyond these two basic frameworks. Both methods reward experimentation more than strict rules, so treat any ratio or timing here as a starting point, not a fixed recipe.`,
  },
  {
    slug: "freshness-storage",
    title: "Bean and Leaf Freshness: Storage That Actually Works",
    label: "Maintenance",
    teaser: "The freezer myth, the clear glass jar myth, and what actually keeps coffee and tea fresh.",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1707734801604-bfcafcbb1444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `## The Freezer Myth

A common piece of advice is to store coffee beans in the freezer to "lock in" freshness. In practice, this usually backfires. Every time you open a freezer bag to scoop out beans, condensation forms as warm, humid air meets the cold surface, introducing moisture that accelerates staling and can affect flavor. Coffee also absorbs odors readily, and a freezer is rarely odor-neutral. If you buy in bulk and genuinely can't use beans within a few weeks, freezing a portion in a fully airtight, single-use container you won't reopen repeatedly is a reasonable exception — but freezing your everyday supply that you dip into daily usually does more harm than good.

## The Clear Jar Myth

Glass canisters look great on a counter, but light is one of the main enemies of both coffee and tea freshness. Ultraviolet and visible light break down aromatic oils over time, dulling flavor well before a clear-stored product would otherwise go stale. The same applies to tea leaves, which lose color and aroma faster under direct light. If you love the look of a glass jar, keep it in a cabinet rather than on a sunlit counter, or better, switch to an opaque canister with a tight seal for anything you're not brewing within a day or two.

## What Actually Works

The real enemies of freshness are air, light, heat, and moisture, in roughly that order of impact for most home storage. An airtight, opaque container kept in a cool, dark cabinet — away from the stove, oven, or a sunny window — is the simplest effective setup for both coffee and tea. Buying whole bean coffee and grinding just before brewing also matters more than almost any storage trick, since ground coffee has vastly more surface area exposed to air and stales within days rather than the weeks whole beans can hold up.

## Realistic Shelf Life

Whole bean coffee generally tastes best within two to four weeks of its roast date, and noticeably flatter after about six to eight weeks, even when stored well. Ground coffee stales much faster, often within a week or two. Tea varies more by type: green and white teas are the most delicate and are best used within six months to a year, while oolongs and black teas can hold their character for a year or more, and well-stored pu-erh can improve with age for years under the right conditions. None of these are hard cutoffs — they're guidelines for when flavor starts to noticeably fade, not when the product becomes unsafe to drink.

## A Simple Routine

Buy only as much coffee as you'll use in two to three weeks, store it in an opaque, airtight container away from heat and light, and grind just before brewing rather than in advance. For tea, keep leaves in a sealed tin or pouch, away from strong-smelling neighbors like spices, since tea absorbs odors even more readily than coffee. These habits cost nothing beyond a bit of planning, and they matter more for the cup in front of you than almost any piece of equipment.`,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getOtherGuides(slug: string): Guide[] {
  return guides.filter((g) => g.slug !== slug);
}
