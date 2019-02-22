// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: BSD-3-Clause

import React, { PureComponent } from 'react';
import { Card } from 'fether-ui';

import RequireHealthOverlay from '../../../RequireHealthOverlay';

class AccountWarning extends PureComponent {
  handleNext = async () => {
    const {
      history,
      location: { pathname }
    } = this.props;

    const currentStep = pathname.split('/')[3];
    const shouldSkipRewrite = pathname.split('/')[4];

    if (shouldSkipRewrite) {
      history.push(`/accounts/new/${+currentStep + 2}`);
    } else {
      history.push(`/accounts/new/${+currentStep + 1}`);
    }
  };

  render () {
    const {
      history,
      location: { pathname }
    } = this.props;

    const currentStep = pathname.split('/')[3];

    return (
      <RequireHealthOverlay require='node'>
        <Card>
          <div className='text -space-around'>WARNING</div>
          <div className='text -tiny'>
            <ul className='-bulleted'>
              <li>
                {' '}
                We highly encourage you to copy down your recovery phrase
                somewhere secure in case you need to recover your account in the
                future. <b> Skipping this step is NOT recommended. </b>
              </li>
              <li>
                {' '}
                You can view and copy your recovery phrase later on by selecting
                "Backup Recovery Phrase" from your account.{' '}
                <b> Note that you need your account password to do so. </b>{' '}
              </li>
              <li>
                {' '}
                If you lose your recovery phrase and you did not perform a JSON
                Backup (select "Backup Account" from the account menu),{' '}
                <b> your wallet cannot be recovered </b>{' '}
              </li>
            </ul>
          </div>
        </Card>
        <nav className='form-nav -space-around'>
          {currentStep > 1 && (
            <button
              className='button -back'
              onClick={history.goBack}
              type='button'
            >
              Back
            </button>
          )}
          <button className='button' onClick={this.handleNext}>
            I Understand
          </button>
        </nav>
      </RequireHealthOverlay>
    );
  }
}

export default AccountWarning;