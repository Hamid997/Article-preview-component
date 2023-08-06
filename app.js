const share = document.getElementById('share');
let isClicked = false;


function handleClickShare() {
    const info = share.closest('.info');
    const personalInfo = info.firstElementChild;
    const socialsInfo = personalInfo.nextElementSibling

    function mobileSize() {
        if (isClicked) {
            isClicked = false;
            share.style.backgroundColor = 'var(--Light-Grayish-Blue)';
            info.style.backgroundColor = 'white';
            personalInfo.style.visibility = 'visible';
            socialsInfo.style.visibility = 'hidden';
        } else {
            isClicked = true;
            share.style.backgroundColor = 'var(--Grayish-Blue)';
            info.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            personalInfo.style.visibility = 'hidden';
            socialsInfo.style.visibility = 'visible';
        }
    }

    function desktopSize() {
        if (isClicked) {
            isClicked = false;
            share.style.backgroundColor = 'var(--Light-Grayish-Blue)';
            share.style.transition = 'all .6s'
            socialsInfo.style.visibility = 'hidden';
            socialsInfo.style.transition = 'all .3s';
        } else {
            isClicked = true;
            share.style.backgroundColor = 'var(--Grayish-Blue)';
            share.style.transition = 'all .6s';
            socialsInfo.style.visibility = 'visible';
            socialsInfo.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            socialsInfo.style.borderRadius = '10px';
            socialsInfo.style.transition = 'all .3s';
        }
    }

    function handleTransitionResize() {
        if (isClicked && window.innerWidth > 950) {
            info.style.backgroundColor = 'unset';
            personalInfo.style.visibility = 'visible';
            socialsInfo.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            socialsInfo.style.borderRadius = '10px';
        }
        if (isClicked && window.innerWidth < 950) {
            share.style.transition = 'none';
            info.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
            personalInfo.style.visibility = 'hidden';
            socialsInfo.style.transition = 'none';
        }
    }

    if (window.innerWidth < 950) {
        mobileSize();
    } else {
        desktopSize();
    }

    window.addEventListener('resize', handleTransitionResize);
}
share.addEventListener('click', handleClickShare)