(() => {
    let aberation = document.createElement('div');
    aberation.className = 'chrometicAberation';
    aberation.innerHTML = `
    <svg width="0" height="0" style="position:absolute">
        <filter id="chromatic">
        
            <feFlood flood-color="#f00" result="red"/>
            <feFlood flood-color="#0f0" result="green"/>
            <feFlood flood-color="#00f" result="blue"/>

            <feComposite in="red"   in2="SourceGraphic" operator="in" result="r"/>
            <feComposite in="green" in2="SourceGraphic" operator="in" result="g"/>
            <feComposite in="blue"  in2="SourceGraphic" operator="in" result="b"/>

            <feOffset in="r" dx="2"  dy="0" result="r2"/>
            <feOffset in="g" dx="-2" dy="0" result="g2"/>
            <feOffset in="b" dx="0"  dy="1" result="b2"/>

            <feMerge>
                <feMergeNode in="r2"/>
                <feMergeNode in="g2"/>
                <feMergeNode in="b2"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
            
        </filter>
    </svg>
    
    <style> .chroma, .chromatic { filter: url(#chromatic); } </style>
    `

    document.body.prepend(aberation);
})()