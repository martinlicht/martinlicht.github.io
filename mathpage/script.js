function showSection(sectionId) {

    // the groups of the different articles 

    let groups = {
        'start' : 'intro',
        'home' : 'intro',
        'whatnot' : 'intro',
        'what' : 'intro',
        'science' : 'intro',
        'whymath' : 'intro',
        
        'branches' : 'areas',
        'analysis' : 'areas',
        'algebra' : 'areas',
        'complexanalysis' : 'areas',
        'diffeq' : 'areas',
        'numerics' : 'areas',
        'probability' : 'areas',
        'topology' : 'areas',
        'numbertheory' : 'areas',
        'logic' : 'areas',
        'discrete' : 'areas',
        'tcs' : 'areas',
        
        'summary' : 'outro',
        'about' : 'outro'
    };

    groupName = groups[sectionId];
    
    // get the main content container 
    
    const containers = document.querySelectorAll('.mycontainer');
    const container = containers[0];
    
    // set the visibility of the different sections 

    const sections = document.querySelectorAll('.mysection');
    
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
    
            var container = document.getElementById('articlecontainer');
            var absoluteChild = document.getElementById(sectionId);

            var requiredHeight = absoluteChild.offsetTop + absoluteChild.offsetHeight;
            container.style.height = requiredHeight + 'px';
            
            
        } else {
            section.classList.remove('active');
        }
    });

    // adjust background based on group 

    body = document.getElementsByTagName('body')[0];

    if( groupName == 'intro'){
        // container.style.backgroundColor = "aquamarine";
        body.style.backgroundImage="url(bonn1.jpg)"
    }
    if( groupName == 'areas'){
        body.style.backgroundImage="url(canyon.jpg)"
    }
    if( groupName == 'outro'){
        body.style.backgroundImage="url(bonn2.jpg)"
    }
    
    // adjust anchors based on section id 

    const anchors = document.getElementsByTagName('a');
    const anchor = document.getElementById('a_' + sectionId);
    for( var a of anchors ) {
        a.style.fontWeight = 'normal';
    };
    anchor.style.fontWeight = 900;

}
