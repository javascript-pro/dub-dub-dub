import * as React from "react";
import { useTheme, SvgIcon, SvgIconProps } from "@mui/material";

export default function SafariIcon(props: SvgIconProps) {
  const theme = useTheme();
  const color1 = theme.palette.primary.main;
  return (
    <SvgIcon {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="SVG">
          <rect fill="nonoe" x="0" y="0" width="24" height="24"></rect>
          <g transform="translate(1, 0)" fill={color1} fillRule="nonzero">
            <path d="M10.9999231,1.41400983 C10.6052681,1.41400983 10.2084612,1.43489835 9.81534324,1.47622295 C9.94753543,1.26432132 9.99541655,1.02791147 9.94553707,0.798062292 C9.84216597,0.320718033 9.34659913,0 8.7123074,0 C8.58272838,0 8.45061311,0.0138 8.31918957,0.0410229508 C7.95135717,0.117790165 7.62848555,0.291157377 7.41021486,0.529301639 C7.17672663,0.784036063 7.08334674,1.08680655 7.14729085,1.38173442 C7.19747774,1.61392132 7.34281224,1.81270165 7.55654848,1.95386885 C5.46968036,2.63014426 3.60008385,3.93345246 2.25710393,5.65649183 C0.780548468,7.55078691 0,9.81602292 0,12.2070426 C0,18.1582361 4.93453275,23 10.9999231,23 C17.0653135,23 22,18.1582361 22,12.2070426 C22,6.25569834 17.0653135,1.41400983 10.9999231,1.41400983 Z M8.7123074,0.730419674 C8.99874936,0.730419674 9.19411707,0.841950817 9.21740437,0.94978688 C9.23039301,1.00996394 9.19534674,1.08786229 9.1250236,1.16297049 C8.94633362,1.07911475 8.74097465,1.05430492 8.54399301,1.09540327 C8.34924021,1.13604918 8.17339388,1.23936066 8.04389172,1.38625902 C7.95081923,1.34561312 7.88825851,1.28898033 7.8754236,1.22978361 C7.86082098,1.1622918 7.90585851,1.07172459 7.99585676,0.987642618 C8.11160175,0.879429509 8.2859109,0.79489508 8.47390041,0.755681966 C8.55429172,0.738940983 8.63452925,0.730419674 8.7123074,0.730419674 Z M13.3844541,19.7068525 L12.507221,18.3108655 C12.4647197,18.2431475 12.3832524,18.2087606 12.3038603,18.2254262 C12.2243144,18.2420165 12.1641362,18.3057377 12.1532996,18.3846918 L11.9311092,20.0073606 C11.6220716,20.0423508 11.3094986,20.0601475 10.9999231,20.0601475 C8.92097121,20.0601475 6.96314411,19.2877246 5.46660612,17.8811049 C5.48251527,17.8749213 5.49780961,17.8665508 5.51202797,17.855918 L9.85254144,14.6191017 C10.142903,14.7518983 10.4573205,14.8343213 10.7738131,14.8607147 L11.8751582,17.1286655 C11.9134323,17.2074688 12.0019702,17.2501508 12.0885869,17.2319771 C12.1755109,17.2138787 12.238379,17.1396 12.2406847,17.0524262 L12.3068576,14.5419574 C12.5492612,14.4118 12.7678393,14.2469541 12.9590568,14.0501345 L14.2593048,14.5023673 C14.3432314,14.5314754 14.436304,14.500482 14.4846463,14.4273345 C14.5331424,14.3541868 14.5241503,14.2580394 14.462896,14.1948459 L13.513034,13.2134623 C13.6185572,12.9615934 13.6832698,12.6984885 13.705635,12.4285967 L16.016,11.3481246 C16.0963144,11.3106459 16.1398149,11.2240754 16.1213695,11.1387115 C16.102924,11.0534229 16.027221,10.9917377 15.9383755,10.9894754 L13.575979,10.9296 L16.7575057,6.82210166 C16.7681887,6.80822623 16.7767197,6.79329509 16.7830219,6.77783606 C17.639965,7.65658691 18.2800978,8.71903611 18.6439336,9.86737708 L17.2211773,10.7281049 C17.1521607,10.769882 17.1171144,10.8498165 17.1340996,10.9277902 C17.150931,11.0056885 17.2158742,11.0648098 17.2963424,11.0753673 L18.9499738,11.2933771 C18.9858656,11.5977312 19.0038497,11.9044229 19.0038497,12.2070426 C19.0038497,14.3044918 18.1713467,16.2766098 16.6594376,17.7599967 C15.7405485,18.6615967 14.6108437,19.3326688 13.3844541,19.7068525 Z M4.86597728,13.4862951 C4.84906899,13.4083213 4.78412576,13.3492754 4.70365764,13.3386426 L3.0500262,13.1204066 C3.01421135,12.8160525 2.99615022,12.5094361 2.99615022,12.2069673 C2.99615022,10.1091409 3.82873014,8.13702292 5.34056245,6.65386229 C6.25945152,5.75233771 7.38915635,5.08111475 8.61539219,4.70670492 L9.49270216,6.102918 C9.53528031,6.17071148 9.61697815,6.20509834 9.69613969,6.18835737 C9.77560869,6.1717672 9.83578694,6.10797051 9.8466236,6.02909183 L10.0688908,4.40649835 C10.3776978,4.37143279 10.6901939,4.35371147 10.9999231,4.35371147 C13.078952,4.35371147 15.0368559,5.12613442 16.5333171,6.53275411 C16.5175615,6.53893771 16.502421,6.54730817 16.4881258,6.5578656 L12.1475354,9.794682 C11.8574044,9.66196063 11.5430638,9.57946229 11.2263406,9.5530688 L10.124765,7.28504263 C10.0864908,7.20631474 9.99787604,7.16355737 9.91141306,7.18173114 C9.8244891,7.19982949 9.76154411,7.27410817 9.75923846,7.361282 L9.69314237,9.87190171 C9.45081568,10.0019835 9.23216067,10.1667541 9.04086638,10.3635738 L7.74054149,9.91134092 C7.65669172,9.88223275 7.56354237,9.91330171 7.5152,9.98637382 C7.46678077,10.0595213 7.4757729,10.1556688 7.53702704,10.2188623 L8.4868891,11.2003213 C8.38151964,11.4522655 8.31696067,11.7153705 8.29444196,11.9852623 L5.98392314,13.0655835 C5.9036856,13.1031377 5.86018514,13.1897082 5.87863059,13.2749967 C5.89707599,13.3602853 5.97277902,13.4219705 6.06162447,13.4242327 L8.42425152,13.4841082 L5.24272489,17.5916066 C5.23188821,17.6055574 5.22335721,17.6205639 5.21705503,17.6360983 C4.36018865,16.7578 3.72013275,15.6952754 3.35606638,14.5463312 L4.77874586,13.6857541 C4.84791615,13.6441279 4.88280873,13.5641934 4.86597728,13.4862951 Z M12.0281014,13.8550492 C11.837345,13.9697475 11.6291424,14.0511902 11.4093344,14.0970394 C11.1964437,14.1415312 10.9783266,14.1514098 10.758365,14.125318 C10.7497572,14.1235835 10.7409956,14.1223771 10.7323109,14.1218492 C10.6749764,14.1141574 10.6177956,14.1039017 10.5609991,14.0910066 L11.880538,13.1067574 C11.8945258,13.0964262 11.9068227,13.0843606 11.917352,13.0707115 L12.9199371,11.7762262 C12.922166,11.7858033 12.9244716,11.7954558 12.9265467,11.8051082 C13.0993956,12.6048295 12.7385572,13.4286066 12.0281014,13.8550492 Z M10.5903582,10.3168197 C10.7268541,10.2883902 10.8654253,10.2740623 11.002152,10.2740623 C11.0824664,10.2740623 11.1641642,10.2791147 11.2450934,10.2890688 C11.2523179,10.2904262 11.2596192,10.2913312 11.2668437,10.2918591 C11.3246393,10.2996262 11.3821275,10.3099574 11.4391545,10.3228525 L10.1193851,11.3069508 C10.1055511,11.317282 10.0931773,11.3293475 10.082648,11.3429967 L9.07990915,12.6376327 C9.07768031,12.6279803 9.07545152,12.6183279 9.0733764,12.6086754 C8.84788118,11.5664361 9.52844021,10.5383738 10.5903582,10.3168197 Z"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
