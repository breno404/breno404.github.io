const buttons = $("[data-timeline-target]");
const targets = $("[data-timeline]");
let currentVal = 1;

function toggle(button, targets) {
  const val = $(button).attr("data-timeline-target");

  for (const target of targets) {
    const targetVal = $(target).attr("data-timeline");
    if (val == targetVal && val != currentVal) {
      const isHidden = $(target).attr("hidden");
      isHidden
        ? $(target).attr("hidden", false)
        : $(target).attr("hidden", true);
    } else if (val != targetVal) $(target).attr("hidden", true);
  }
  currentVal = val;
}

function activePreviousLines(button) {
  const previousLines = $(button).prevAll("[data-timeline-line]");
  if (previousLines && previousLines.length > 0) {
    previousLines.removeClass("bg-neutral-200 border-opacity-30");
    previousLines.addClass("bg-purple-700");
  }
}

function disableNextLines(button) {
  const nextLines = $(button).nextAll("[data-timeline-line]");
  if (nextLines && nextLines.length > 0) {
    nextLines.removeClass("bg-purple-700");
    nextLines.addClass("bg-neutral-200 border-opacity-30");
  }
}

function disableNextButtons(button) {
  const nextButtons = $(button).nextAll("[data-timeline-target]");

  $(nextButtons).removeClass("border-purple-700");
  $(nextButtons).children("span").removeClass("font-bold text-purple-700");

  $(nextButtons).addClass("border-neutral-200 border-opacity-30");
  $(nextButtons).children("span").addClass("font-extralight");
}

function activePreviousButtons(button) {
  const previousButtons = $(button).prevAll("[data-timeline-target]");

  $(previousButtons).removeClass("border-neutral-200 border-opacity-30");
  $(previousButtons).children("span").removeClass("font-extralight");

  $(previousButtons).addClass("border-purple-700");
  $(previousButtons).children("span").addClass("font-bold text-purple-700");
}

for (const button of buttons) {
  $(button).on("click", (event) => {
    const b = event.currentTarget;
    const isActived = $(b).hasClass("border-purple-700");
    const hasPrevious = $(b).prevAll("[data-timeline-target]").length > 0;

    activePreviousLines(b);
    activePreviousButtons(b);
    disableNextLines(b);
    disableNextButtons(b);

    if (isActived) {
      if (hasPrevious) {
        $(b).removeClass("border-neutral-200 border-opacity-30");
        $(b).children("span").removeClass("font-extralight");
        $(b).addClass("border-purple-700");
        $(b).children("span").addClass("font-bold text-purple-700");
      }
    } else {
      $(b).removeClass("border-neutral-200 border-opacity-30");
      $(b).children("span").removeClass("font-extralight");
      $(b).addClass("border-purple-700");
      $(b).children("span").addClass("font-bold text-purple-700");
    }

    toggle(b, targets);
  });
}
