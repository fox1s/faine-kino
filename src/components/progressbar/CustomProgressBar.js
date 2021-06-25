import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {easeQuadInOut} from "d3-ease";

export default function CustomProgressBar({valueEnd, widthCustom, strokeWidth, roundedValue = false, pathColor='red'}) {
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
                    <div style={{width: widthCustom}}>
                        <CircularProgressbar
                            value={value}
                            strokeWidth={strokeWidth}
                            // text={roundedValue &&`${roundedValue}%`}
                            text={roundedValue && '!'}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({
                                pathTransition: "none",
                                pathColor: pathColor,
                                textColor: "red",
                                textSize: "80px",

                            })}


                        />
                    </div>

                );
            }}
        </AnimatedProgressProvider>
    );
}
