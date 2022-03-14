# react-tooltip-ts

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-tooltip-ts.svg)](https://www.npmjs.com/package/react-tooltip-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tooltip-ts
```

## Usage

```tsx
import React, { useRef } from 'react';

import { Tooltip } from 'react-tooltip-ts';
import 'react-tooltip-ts/dist/index.css';

//
const App = () => {
    //
    const ref_elm_for_tooltip = useRef<HTMLDivElement>(null);
    //
    return (
        <div style={{ padding: '50px' }}>
            <div style={{ display: 'flex' }}>
                <div ref={ref_elm_for_tooltip} style={{ cursor: 'pointer' }}>
                    Hover me!
                </div>

                <Tooltip ref_elm={ref_elm_for_tooltip}>
                    <div
                        style={{
                            padding: '8px 15px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            color: 'white',
                            fontWeight: '600'
                        }}
                    >
                        Tooltip
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

export default App;

```

## License

MIT © [vandat9xhn](https://github.com/vandat9xhn)
