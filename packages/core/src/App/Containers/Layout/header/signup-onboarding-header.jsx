import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { DesktopWrapper, MobileWrapper, Icon } from '@deriv/components';
import { routes, isMobile, getDecimalPlaces, getPlatformInformation } from '@deriv/shared';
import { AccountActions, MenuLinks, PlatformSwitcher } from 'App/Components/Layout/Header';
import platform_config from 'App/Constants/platform-config';
import RealAccountSignup from 'App/Containers/RealAccountSignup';
import SetAccountCurrencyModal from 'App/Containers/SetAccountCurrencyModal';
import NewVersionNotification from 'App/Containers/new-version-notification.jsx';
import { connect } from 'Stores/connect';
import { clientNotifications } from 'Stores/Helpers/client-notifications';
import ToggleMenuDrawer from 'App/Components/Layout/Header/toggle-menu-drawer.jsx';
import { AccountsInfoLoader } from 'App/Components/Layout/Header/Components/Preloader';
import TempAppSettings from 'App/Containers/Layout/temp-app-settings.jsx';

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
    const toggle_menu_drawer_ref = React.useRef(null);
    const addUpdateNotification = () => addNotificationMessage(clientNotifications().new_version_available);
    const removeUpdateNotification = React.useCallback(
        () => removeNotificationMessage({ key: 'new_version_available' }),
        [removeNotificationMessage]
    );

    return (
        <header className={classNames('signup-onboarding-header')}>
            <DesktopWrapper>
                <div className={classNames('signup-onboarding-header__menu-center')}>
                    {/* <Icon
                        className='advertiser-page__header-verification-icon'
                        icon='IcBrandDerivText'
                        height={50}
                        width={150}
                            /> */}
                    <Icon
                        className='advertiser-page__header-verification-icon'
                        icon='IcBrandDerivText'
                        color={'brand'}
                        height={50}
                        width={150}
                    />
                    <Icon
                        className='advertiser-page__header-verification-icon'
                        icon='IcBrandGetStarted'
                        color={'brand'}
                        height={50}
                        width={150}
                    />
                </div>
            </DesktopWrapper>

            <MobileWrapper>gdgd</MobileWrapper>
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
