// Copyright 2015-2019 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: BSD-3-Clause

import { DEFAULT_WS_PORT, IS_PROD, TRUSTED_LOOPBACK } from '../constants';
import cli from '../cli';

function setupGlobals () {
  // Globals for fether-react parityStore
  global.IS_PROD = IS_PROD;
  global.defaultWsInterface = TRUSTED_LOOPBACK;
  global.defaultWsPort = DEFAULT_WS_PORT;
  global.wsPort = cli.wsPort;
}

export default setupGlobals;
