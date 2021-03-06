import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {StoryWrapper} from './../_lib/storyUtils.js';
import Label from './index.js';

storiesOf('Label', module)
    .addDecorator(withKnobs)
    .addWithInfo(
        'default',
        () => (
            <StoryWrapper>
                <Label htmlFor="test">{text('Label', 'Test label')}</Label>
            </StoryWrapper>
        ),
        {inline: true}
    );
