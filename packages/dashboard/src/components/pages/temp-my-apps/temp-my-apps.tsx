import * as React from 'react';
import { Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import { observer } from 'mobx-react-lite';
import { useStores } from 'Stores';
import AccountWizard from 'Components/elements/account-wizard';
import CFDPasswordModal from 'Components/modals/cfd-password-modal';
import GetWalletModal from 'Components/modals/get-wallet-modal';

// TODO: Temp component. This should be removed after linking my apps page with wallet creation flow.
const TempGetDMT5Wallet: React.FC = observer(() => {
    const { client_store, cfd_store, ui_store } = useStores();
    const { is_real_acc_signup_on } = ui_store;

    if (!client_store.is_logged_in) return null;
    return (
        <div className='dw-temp-my-apps'>
            <React.Fragment>
                {is_real_acc_signup_on && <AccountWizard />}
                {!is_real_acc_signup_on && (
                    <Button.Group>
                        <Button primary large onClick={cfd_store.enableCFDPasswordModal}>
                            Get Mt5
                        </Button>
                        <Button primary large onClick={ui_store.enableGetPasswordModal}>
                            Create wallet
                        </Button>
                    </Button.Group>
                )}
            </React.Fragment>
            <CFDPasswordModal />
            <GetWalletModal app_title={localize('DMT5 Synthetic')} app_icon={'IcBrandDmt5Synthetics'} />
        </div>
    );
});

export default TempGetDMT5Wallet;
