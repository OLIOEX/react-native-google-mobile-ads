/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React, { createRef } from 'react';
import { BannerAdProps } from '../types/BannerAdProps';
import { BaseAd } from './BaseAd';
import GoogleMobileAdsBannerView, {
  Commands,
} from '../specs/components/GoogleMobileAdsBannerViewNativeComponent';

export class BannerAd extends React.Component<BannerAdProps> {
  private ref = createRef<React.ElementRef<typeof GoogleMobileAdsBannerView>>();

  load() {
    if (this.ref.current) {
      Commands.load(this.ref.current);
    }
  }

  render() {
    return <BaseAd ref={this.ref} sizes={[this.props.size]} {...this.props} />;
  }
}
