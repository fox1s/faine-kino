import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {easeQuadInOut} from "d3-ease";

export default function CustomProgressBar({valueEnd}) {
    return (
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={valueEnd * 10}
            duration={0.6}
            easingFunction={easeQuadInOut}
            // repeat
        >
            {value => {
                // const roundedValue = Math.round(value);
                return (
                    <div style={{width: 22, height: 22}}>
                        <CircularProgressbar
                            value={value}
                            strokeWidth={17}
                            // text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({
                                pathTransition: "none",
                                pathColor: 'red',

                            })}


                        />
                    </div>

                );
            }}
        </AnimatedProgressProvider>
    );
}