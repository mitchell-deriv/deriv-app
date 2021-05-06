import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { DesktopWrapper, MobileWrapper, Icon, StaticUrl } from '@deriv/components';

const SignupOnboardingHeader = () => {
    const icons = [
        {
            id: 1,
            name: 'IcBrandDtrader',
            height: 50,
            width: 25,
        },
        {
            id: 2,
            name: 'IcBrandDerivText',
            height: 50,
            width: 150,
        },
        {
            id: 3,
            name: 'IcSeparator',
            height: 30,
            width: 2,
        },
        {
            id: 4,
            name: 'IcBrandGetStarted',
            height: 50,
            width: 150,
        },
    ];
    const Icons = ({ size = 0 }) => {
        return icons.map((icon, idx) => (
            <Icon
                key={idx}
                className='signup-onboarding-header__menu-center-icon'
                icon={icon.name}
                color={'brand'}
                height={icon.id !== 1 && icon.id !== 3 ? icon.height - size : icon.height}
                width={icon.id !== 1 && icon.id !== 3 ? icon.width - size : icon.width}
            />
        ));
    };
    return (
        <header className={classNames('signup-onboarding-header')}>
            <div className={classNames('signup-onboarding-header__menu-center')}>
                <StaticUrl href='/'>
                    <DesktopWrapper>
                        <Icons />
                    </DesktopWrapper>
                    <MobileWrapper>
                        <Icons size={20} />
                    </MobileWrapper>
                </StaticUrl>
            </div>
        </header>
    );
};

SignupOnboardingHeader.propTypes = {
    setDarkMode: PropTypes.func,
    is_dark_mode: PropTypes.bool,
};

export default SignupOnboardingHeader;
