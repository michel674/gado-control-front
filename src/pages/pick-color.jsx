import React, { useState } from 'react';
import { Grid } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import ColorPicker from 'react-pick-color';
import { Button } from '../atomic/atm.button';
import { Color, Radius } from '../components/constants';

export const PickColorPage = () => {
  const [color, setColor] = useState('#fff');

  const onClickButton = e => {
    console.log('color: ', color);
  };

  return (
    <div>
      <Grid>
        <Separator type="Medium" />
        <ColorPicker
          theme={{
            background: Color.Gray100,
            inputBackground: Color.Gray100,
            borderColor: Color.Gray300,
            borderRadius: Radius.Small,
            color: 'black',
            width: '320px',
          }}
          color={color}
          onChange={color => setColor(color.hex)}
          hideAlpha
          hideInputs
        />
        <Separator type="Medium" />
        <div onClick={onClickButton}>
          <Button>lecionar</Button>
        </div>
      </Grid>
    </div>
  );
};
