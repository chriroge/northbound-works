(() => {
    'use strict';

    const stations = [
        {
            "number": "01",
            "scale": "Project",
            "title": "Earn trust through follow-through",
            "setting": "Consulting · Early career",
            "direction": "Help the team make steady, dependable progress.",
            "obstacle": "Confidence and credibility had to be built through the work itself.",
            "intervention": "Learned by doing, took ownership of the details, followed through, and became a reliable teammate.",
            "lesson": "Trust grows when people can count on you to follow through."
        },
        {
            "number": "02",
            "scale": "Market",
            "title": "Connect people and expertise",
            "setting": "Cisco Finance and international tax · Local operations",
            "direction": "Help the company operate effectively in new markets.",
            "obstacle": "Specialists had deep expertise but needed project coordination and stronger connections to the wider company.",
            "intervention": "Added structure, coordinated decisions, and connected specialists with the people and processes they needed.",
            "lesson": "You can help experts succeed by supplying the coordination and support their work needs."
        },
        {
            "number": "03",
            "scale": "Removing barriers",
            "title": "Find a responsible path forward",
            "setting": "Cisco Finance and international work · Risk, regulation, and growth",
            "direction": "Find a responsible way to proceed within business and regulatory requirements.",
            "obstacle": "Uncertainty, competing requirements, and risk could stop a proposal before the team explored its options.",
            "intervention": "Clarified the requirements, safeguards, partners, and sequence of work needed to move forward.",
            "lesson": "Understanding a constraint can reveal a practical way to work within it."
        },
        {
            "number": "04",
            "scale": "Business model",
            "title": "Change how the business works",
            "setting": "Cisco Operations · Strategy and software subscriptions",
            "direction": "Help the company move to a new business model.",
            "obstacle": "Existing processes, measures, and habits supported the previous way of doing business.",
            "intervention": "Questioned existing practices, invested before every outcome was certain, and helped teams manage the transition.",
            "lesson": "A new business model needs processes, responsibilities, and measures that support it."
        },
        {
            "number": "05",
            "scale": "Transition",
            "title": "Demonstrate a better way to work",
            "setting": "Cisco Operations · Business change",
            "direction": "Build understanding and confidence in a different way of working.",
            "obstacle": "A strategy document alone could not show people how a proposed change would work.",
            "intervention": "Used working examples and early evidence to help people see and assess the proposed approach.",
            "lesson": "People can evaluate a change more confidently when they can see it in practice."
        },
        {
            "number": "06",
            "scale": "Organization",
            "title": "Design around the customer",
            "setting": "Cisco Meraki Strategic Operations · Product, user experience, and systems",
            "direction": "Organize work around products and the customer’s experience.",
            "obstacle": "Disconnected teams, handoffs, and competing priorities made the whole customer experience difficult to improve.",
            "intervention": "Connected teams around the customer’s full experience, developed the team, and redesigned how work was organized to create more value with fewer resources.",
            "lesson": "Improving customer experience also means changing how teams work together."
        },
        {
            "number": "07",
            "scale": "AI in sales",
            "title": "Apply AI to the right problems",
            "setting": "Accenture at Microsoft · Four AI agents for sales effectiveness",
            "direction": "Help sales teams prioritize outreach and prepare better customer conversations, with the goal of growing revenue without increasing the team.",
            "obstacle": "Salespeople had limited time, and the information needed to focus their effort was scattered across their workflow.",
            "intervention": "Identified the most useful problems to address, then helped define and build four AI agents for outreach and customer conversations, connecting data, sales workflows, product design, and adoption.",
            "lesson": "Start with the decisions and tasks that need to improve, then decide where AI can help."
        },
        {
            "number": "08",
            "scale": "Shared challenges",
            "title": "Work on complex shared problems",
            "setting": "Northbound Works · Education, technology, work, and institutional change",
            "direction": "Apply these career lessons to education and explore opportunities in public good and health.",
            "obstacle": "These problems involve several organizations and fields of expertise; one team cannot solve them alone.",
            "intervention": "Bring strategy, operations, product thinking, user experience, and teamwork together to understand problems and test practical responses.",
            "lesson": "Connect the right people and test useful ideas on problems that matter to their lives."
        }
    ];

    const buttons = Array.from(document.querySelectorAll('.nbm-map-station button'));
    const panel = document.querySelector('#station-detail');
    const previousButton = document.querySelector('#previous-station');
    const nextButton = document.querySelector('#next-station');
    const fields = {
        number: document.querySelector('#detail-number'),
        scale: document.querySelector('#detail-scale'),
        progress: document.querySelector('#detail-progress'),
        title: document.querySelector('#detail-title'),
        setting: document.querySelector('#detail-setting'),
        direction: document.querySelector('#detail-direction'),
        obstacle: document.querySelector('#detail-obstacle'),
        intervention: document.querySelector('#detail-intervention'),
        lesson: document.querySelector('#detail-lesson')
    };

    let activeIndex = 0;

    function updateStation(index, options = {}) {
        const safeIndex = Math.max(0, Math.min(stations.length - 1, index));
        const station = stations[safeIndex];

        activeIndex = safeIndex;

        buttons.forEach((button, buttonIndex) => {
            const selected = buttonIndex === safeIndex;
            button.setAttribute('aria-expanded', String(selected));
            if (selected) {
                button.setAttribute('aria-current', 'step');
            } else {
                button.removeAttribute('aria-current');
            }
        });

        fields.number.textContent = `Station ${station.number}`;
        fields.scale.textContent = station.scale;
        fields.progress.textContent = `${safeIndex + 1} of ${stations.length}`;
        fields.title.textContent = station.title;
        fields.setting.textContent = station.setting;
        fields.direction.textContent = station.direction;
        fields.obstacle.textContent = station.obstacle;
        fields.intervention.textContent = station.intervention;
        fields.lesson.textContent = station.lesson;

        previousButton.disabled = safeIndex === 0;
        nextButton.disabled = safeIndex === stations.length - 1;

        const hash = `#station-${safeIndex + 1}`;
        if (window.location.hash !== hash) {
            window.history.replaceState(null, '', hash);
        }

        if (options.focusButton) {
            buttons[safeIndex].focus();
        }

        if (options.revealPanel && window.matchMedia('(max-width: 940px)').matches) {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            panel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => updateStation(index, { revealPanel: true }));
        button.addEventListener('keydown', (event) => {
            if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
                return;
            }

            event.preventDefault();

            if (event.key === 'Home') {
                updateStation(0, { focusButton: true });
            } else if (event.key === 'End') {
                updateStation(stations.length - 1, { focusButton: true });
            } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                updateStation((index + 1) % stations.length, { focusButton: true });
            } else {
                updateStation((index - 1 + stations.length) % stations.length, { focusButton: true });
            }
        });
    });

    previousButton.addEventListener('click', () => updateStation(activeIndex - 1, { focusButton: true }));
    nextButton.addEventListener('click', () => updateStation(activeIndex + 1, { focusButton: true }));

    const hashMatch = window.location.hash.match(/^#station-([1-8])$/);
    if (hashMatch) {
        updateStation(Number(hashMatch[1]) - 1);
    }
})();
