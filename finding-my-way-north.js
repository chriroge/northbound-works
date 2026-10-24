(() => {
    'use strict';

    const stations = [
        {
            number: '01',
            scale: 'Project',
            title: 'Do the small things right',
            setting: 'Consulting · Early career',
            direction: 'Help the team make steady, dependable progress.',
            obstacle: 'Confidence and credibility had to be built through the work itself.',
            intervention: 'Learned by doing, took ownership of the details, followed through, and became a reliable teammate.',
            lesson: 'Large change begins with trust, and trust is earned through consistent execution.'
        },
        {
            number: '02',
            scale: 'Market',
            title: 'Add what the system is missing',
            setting: 'Cisco Finance and international tax · Business localization',
            direction: 'Make it possible for the company to operate effectively in a different local context.',
            obstacle: 'The team had deep functional expertise but needed stronger program management and better connections to the wider company.',
            intervention: 'Added structure, coordinated decisions, and bridged specialists with the people and processes around them.',
            lesson: 'You do not need to be the deepest subject-matter expert if you can add the capability that helps the experts succeed.'
        },
        {
            number: '03',
            scale: 'Enablement',
            title: 'Create the conditions for yes',
            setting: 'Cisco Finance and international work · Risk, regulation, and growth',
            direction: 'Find a responsible path forward rather than treating constraints as automatic stopping points.',
            obstacle: 'Uncertainty, functional requirements, and risk could produce a reflexive “no.”',
            intervention: 'Reframed the conversation around the requirements, safeguards, partners, and sequence needed to make “yes” possible.',
            lesson: 'Progress begins when constraints become design requirements.'
        },
        {
            number: '04',
            scale: 'Business model',
            title: 'Challenge the operating model',
            setting: 'Cisco Operations · Strategy, SaaS, and business-model transition',
            direction: 'Help the company move toward a new business model built for the future.',
            obstacle: 'Existing processes, measures, and habits were designed for the model already in place.',
            intervention: 'Challenged the status quo, invested ahead of certainty, and helped manage the transition between models.',
            lesson: 'A business model changes only when the operating model changes with it.'
        },
        {
            number: '05',
            scale: 'Transition',
            title: 'Show the future working',
            setting: 'Cisco Operations · Consequential transformation',
            direction: 'Build understanding and confidence in a different way of operating.',
            obstacle: 'Strategy alone could not overcome uncertainty or make the proposed future feel real.',
            intervention: 'Shifted from telling to showing—using concrete mechanisms, working examples, and early evidence.',
            lesson: 'People are more willing to move when they can see and experience the better model.'
        },
        {
            number: '06',
            scale: 'Organization',
            title: 'Build around product and customer',
            setting: 'Cisco Meraki Strategic Operations · Product, UX, journey, and integration',
            direction: 'Move the organization toward a more product-centric and customer-centered way of working.',
            obstacle: 'Fragmented work, internal handoffs, and competing priorities made it difficult to see or improve the whole experience.',
            intervention: 'Connected disciplines around the end-to-end customer journey, developed the team, and redesigned the operating model to produce more value with fewer resources.',
            lesson: 'Customer value is an organizational-design problem, not only a product feature.'
        },
        {
            number: '07',
            scale: 'AI-enabled GTM',
            title: 'Start with the right problem. Scale the impact.',
            setting: 'Accenture at Microsoft · Four AI agents for sales effectiveness',
            direction: 'Use better signals and AI to prioritize outreach faster, enable stronger customer conversations, and attain more revenue with the same—or a smaller—team.',
            obstacle: 'Seller capacity was finite, while the signals needed to focus effort and prepare for the right conversations were fragmented across the workflow.',
            intervention: 'Identify the highest-leverage problems first, then define and build four AI agents around prioritized outreach and better customer conversations—connecting strategy, sales workflows, data, product thinking, and adoption.',
            lesson: 'The goal was not to deploy AI agents. It was to identify where intelligence could improve decisions, outreach, and customer conversations—scaling impact without scaling headcount.'
        },
        {
            number: '08',
            scale: 'Consequential systems',
            title: 'Choose the wicked problems',
            setting: 'Northbound Works · Education, technology, work, and institutional change',
            direction: 'Apply the accumulated change playbook to problems that are messy, systemic, and consequential.',
            obstacle: 'Wicked problems cross organizational and disciplinary boundaries; no single role or area of expertise can resolve them alone.',
            intervention: 'Bring strategy, operations, product thinking, UX, and cross-functional orchestration together to frame, test, and advance practical responses.',
            lesson: 'The next chapter is a field of action rather than a job title: help people and institutions navigate consequential transitions.'
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
