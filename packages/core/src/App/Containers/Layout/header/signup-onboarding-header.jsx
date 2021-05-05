import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { DesktopWrapper, MobileWrapper, Icon, StaticUrl } from '@deriv/components';
import { connect } from 'Stores/connect';

const SignupOnboardingHeader = ({
    acc_switcher_disabled_message,
    account_status,
    addNotificationMessage,
    should_allow_authentication,
    app_routing_history,
    balance,
    currency,
    disableApp,
    enableApp,
    header_extension,
    history,
    is_mf,
    is_acc_switcher_disabled,
    is_acc_switcher_on,
    is_app_disabled,
    is_dark_mode,
    is_logged_in,
    is_logging_in,
    is_mt5_allowed,
    is_notifications_visible,
    is_p2p_enabled,
    is_payment_agent_transfer_visible,
    is_onramp_tab_visible,
    is_payment_agent_visible,
    is_route_modal_on,
    is_virtual,
    location,
    logoutClient,
    menu_items,
    needs_financial_assessment,
    notifications_count,
    openRealAccountSignup,
    is_options_blocked,
    removeNotificationMessage,
    setDarkMode,
    toggleAccountsDialog,
    toggleNotifications,
}) => {
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
    acc_switcher_disabled_message: PropTypes.string,
    should_allow_authentication: PropTypes.bool,
    account_status: PropTypes.object,
    addNotificationMessage: PropTypes.func,
    app_routing_history: PropTypes.array,
    balance: PropTypes.string,
    currency: PropTypes.string,
    disableApp: PropTypes.func,
    enableApp: PropTypes.func,
    header_extension: PropTypes.any,
    is_acc_switcher_disabled: PropTypes.bool,
    is_acc_switcher_on: PropTypes.bool,
    is_app_disabled: PropTypes.bool,
    is_dark_mode: PropTypes.bool,
    is_loading: PropTypes.bool,
    is_logged_in: PropTypes.bool,
    is_logging_in: PropTypes.bool,
    is_mt5_allowed: PropTypes.bool,
    is_notifications_visible: PropTypes.bool,
    // is_p2p_enabled: PropTypes.bool,
    // is_payment_agent_transfer_visible: PropTypes.bool,
    // is_payment_agent_visible: PropTypes.bool,
    is_route_modal_on: PropTypes.bool,
    is_virtual: PropTypes.bool,
    logoutClient: PropTypes.func,
    needs_financial_assessment: PropTypes.bool,
    notifications_count: PropTypes.number,
    openRealAccountSignup: PropTypes.func,
    removeNotificationMessage: PropTypes.func,
    setDarkMode: PropTypes.func,
    toggleAccountsDialog: PropTypes.func,
    toggleNotifications: PropTypes.func,
};

export default connect(({ client, common, ui, menu, modules }) => ({
    acc_switcher_disabled_message: ui.account_switcher_disabled_message,
    account_status: client.account_status,
    should_allow_authentication: client.should_allow_authentication,
    addNotificationMessage: ui.addNotificationMessage,
    app_routing_history: common.app_routing_history,
    balance: client.balance,
    is_mf: client.landing_company_shortcode === 'maltainvest',
    currency: client.currency,
    disableApp: ui.disableApp,
    enableApp: ui.enableApp,
    header_extension: ui.header_extension,
    is_acc_switcher_disabled: ui.is_account_switcher_disabled,
    is_acc_switcher_on: !!ui.is_accounts_switcher_on,
    is_app_disabled: ui.is_app_disabled,
    is_dark_mode: ui.is_dark_mode_on,
    is_loading: ui.is_loading,
    is_logged_in: client.is_logged_in,
    is_logging_in: client.is_logging_in,
    is_mt5_allowed: client.is_mt5_allowed,
    is_notifications_visible: ui.is_notifications_visible,
    is_p2p_enabled: modules.cashier.is_p2p_enabled,
    is_payment_agent_transfer_visible: modules.cashier.is_payment_agent_transfer_visible,
    is_onramp_tab_visible: modules.cashier.onramp.is_onramp_tab_visible,
    is_payment_agent_visible: modules.cashier.is_payment_agent_visible,
    is_route_modal_on: ui.is_route_modal_on,
    is_virtual: client.is_virtual,
    logoutClient: client.logout,
    menu_items: menu.extensions,
    needs_financial_assessment: client.needs_financial_assessment,
    notifications_count: ui.filtered_notifications.length,
    openRealAccountSignup: ui.openRealAccountSignup,
    is_options_blocked: client.is_options_blocked,
    removeNotificationMessage: ui.removeNotificationMessage,
    setDarkMode: ui.setDarkMode,
    toggleAccountsDialog: ui.toggleAccountsDialog,
    toggleNotifications: ui.toggleNotificationsModal,
}))(withRouter(SignupOnboardingHeader));
