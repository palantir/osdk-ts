import{r as e,j as M}from"./iframe-Bvc3GqwO.js";import{c as h}from"./index-Xuw5gDJk.js";import{A as N}from"./ActionButton-C-u41pWh.js";import{I as oe}from"./info-sign-DFcGJVwP.js";import{T as ie}from"./tick-CnTf7B9g.js";import{W as le}from"./warning-sign-nrvoJa4g.js";import{E as ce}from"./error-Cmb39vju.js";import{I as me}from"./Input-rKjGz7ft.js";import{I as S,S as pe}from"./svgIconContainer-RvZuTijS.js";import"./preload-helper-B0t1EL9b.js";import"./Button-CE6JFCro.js";import"./useBaseUiId-sWVGNDSC.js";import"./useControlled-S-w7uv-V.js";import"./index-D0suL3J6.js";import"./index-if-pT0qq.js";const Z=e.forwardRef((t,a)=>{const n=(t.size??S.STANDARD)>=S.LARGE,c=`${-1*(n?S.LARGE:S.STANDARD)/.05/2}`,i={transformOrigin:"center"};return M.jsx(pe,{iconName:"chat",ref:a,...t,children:M.jsx("path",{d:n?"M380 400H140C129 400 120 391 120 380V180C120 169 129 160 140 160H251.8L326 85.8C329.4000000000001 82.2 334.4000000000001 80 340 80C351 80 360 89 360 100V160H380C391 160 400 169 400 180V380C400 391 391 400 380 400M140 140C118 140 100 158 100 180V320H20C9 320 0 311 0 300V100C0 89 9 80 20 80H40V20A20.06 20.06 0 0 1 74.2 5.8L148.2 80H260C271 80 280 89 280 100V103.4L243.4 140z":"M120 120C98 120 80 138 80 160V260H20C9 260 0 251 0 240V80C0 69 9 60 20 60V20A20.06 20.06 0 0 1 54.2 5.8L108.2 60H200C211 60 220 69 220 80V103.4L203.4 120zM300 320H120C109 320 100 311 100 300V160C100 149 109 140 120 140H211.8L266 85.8C269.4000000000001 82.2 274.4000000000001 80 280 80C291 80 300 89 300 100V140C311 140 320 149 320 160V300C320 311 311 320 300 320",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${c}, ${c})`,style:i})})});Z.displayName="Blueprint6.Icon.Chat";function X(t){let a="";for(const n of t.parts)n.type==="text"&&(a+=n.text);return a}const g={callout:"Callout-module__callout___PEHatWiu",error:"Callout-module__error___gdkTnMMF",warning:"Callout-module__warning___FCzE3yLY",success:"Callout-module__success___BrxxC--L",info:"Callout-module__info___RndUloNR",icon:"Callout-module__icon___aWpGkLJ4",body:"Callout-module__body___rXKoZz90",title:"Callout-module__title___gHJqYqpp",message:"Callout-module__message___UDTJQlUj",actions:"Callout-module__actions___K1dq8rp3"},ue={error:ce,warning:le,success:ie,info:oe},de={error:g.error,warning:g.warning,success:g.success,info:g.info},ge=e.memo(function({intent:t,title:a,children:n,actions:o,icon:c,className:i}){const s=c??ue[t];return e.createElement("div",{"aria-live":"polite",className:h(g.callout,de[t],i),role:"alert"},s!=null&&e.createElement("span",{className:g.icon},e.createElement(s,{size:16})),e.createElement("div",{className:g.body},a!=null&&e.createElement("div",{className:g.title},a),n!=null&&e.createElement("div",{className:g.message},n)),o!=null&&e.createElement("div",{className:g.actions},o))}),r={chat:"AipAgentChat-module__chat___8g7robE3",messageList:"AipAgentChat-module__messageList___EJT0wkUj",empty:"AipAgentChat-module__empty___U0ZZWxmq",emptyIcon:"AipAgentChat-module__emptyIcon___-xTDcCXC",emptyTitle:"AipAgentChat-module__emptyTitle___STng1--H",message:"AipAgentChat-module__message___n2npFl8B",userMessage:"AipAgentChat-module__userMessage___9gfztpI-",assistantMessage:"AipAgentChat-module__assistantMessage___Hd0kHNZz",systemMessage:"AipAgentChat-module__systemMessage___j1KBNC18",bubble:"AipAgentChat-module__bubble___ehxKR1xQ",userBubble:"AipAgentChat-module__userBubble___-LOIsBgf",assistantBubble:"AipAgentChat-module__assistantBubble___s-rbLzIp",systemBubble:"AipAgentChat-module__systemBubble___ujadzYgh",streamingPlaceholder:"AipAgentChat-module__streamingPlaceholder___Os6a8AJk",composer:"AipAgentChat-module__composer___Wh3s2x7e",inputWrapper:"AipAgentChat-module__inputWrapper___pRQ1RWF8",textarea:"AipAgentChat-module__textarea___ocjwiGty",inputActions:"AipAgentChat-module__inputActions___9WTDHiJb",composerFooterLeft:"AipAgentChat-module__composerFooterLeft___7INhMSpC",loader:"AipAgentChat-module__loader___m79mDMns",loaderDot:"AipAgentChat-module__loaderDot___8E42Iyvu"};function T(){return T=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},T.apply(null,arguments)}function _e({isInFlight:t,onSendMessage:a,onStop:n,placeholder:o,className:c,footerLeft:i}){const[s,m]=e.useState(""),d=!t&&s.trim().length>0,u=e.useCallback(()=>{const l=s.trim();if(l.length!==0){try{const v=a(l);v instanceof Promise&&v.catch(he)}catch{}m("")}},[s,a]),p=e.useCallback(l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),t||u())},[u,t]),A=e.useCallback(l=>e.createElement("textarea",T({},l,{onKeyDown:p,rows:3})),[p]);return e.createElement("div",{className:h(r.composer,c)},e.createElement("div",{className:r.inputWrapper},e.createElement(me,{"aria-label":"Message input",className:r.textarea,onValueChange:m,placeholder:o,value:s,render:A}),e.createElement("div",{className:r.inputActions},t&&n!=null?e.createElement(N,{onClick:n,type:"button"},"Stop"):e.createElement(N,{disabled:!d,onClick:u,type:"button",variant:"primary"},"Send"))),i!=null&&e.createElement("div",{className:r.composerFooterLeft},i))}function he(){}function Ae(t,a){const n=e.useRef(null),o=e.useRef(null),c=e.useRef(!0),i=e.useCallback(s=>{var d;if((d=o.current)==null||d.call(o),o.current=null,n.current=s,s==null)return;const m=()=>{const u=s.scrollHeight-s.scrollTop-s.clientHeight;c.current=u<=Ce};s.addEventListener("scroll",m,{passive:!0}),o.current=()=>s.removeEventListener("scroll",m)},[]);return e.useEffect(()=>{if(!a)return;const s=n.current;s==null||!c.current||(s.scrollTop=s.scrollHeight)},[t,a]),i}const Ce=32;function fe({className:t,label:a="Assistant is responding"}){return e.createElement("div",{"aria-label":a,"aria-live":"polite",className:h(r.loader,t),role:"status"},e.createElement("span",{"aria-hidden":"true",className:r.loaderDot}),e.createElement("span",{"aria-hidden":"true",className:r.loaderDot}),e.createElement("span",{"aria-hidden":"true",className:r.loaderDot}))}function be({message:t}){const a=X(t),n=t.role,o=ye[n];return e.createElement("div",{"aria-label":o.label,className:h(r.message,o.container),role:"group"},e.createElement("div",{className:h(r.bubble,o.bubble)},a.length>0?a:e.createElement("span",{className:r.streamingPlaceholder},"…")))}const ye={user:{container:r.userMessage,bubble:r.userBubble,label:"User message"},assistant:{container:r.assistantMessage,bubble:r.assistantBubble,label:"Assistant message"},system:{container:r.systemMessage,bubble:r.systemBubble,label:"System message"}},Ee=e.createElement(e.Fragment,null,e.createElement(Z,{className:r.emptyIcon,size:64}),e.createElement("div",{className:r.emptyTitle},"Start a conversation"),e.createElement("div",null,"Type a message below to chat with the assistant."));function xe({messages:t,isStreaming:a,enableAutoScroll:n,className:o,renderEmptyState:c,renderMessage:i}){const s=t.at(-1),m=s!=null?X(s).length:0,d=`${t.length}:${m}`,u=Ae(d,n),p=t.length===0&&!a,A=a&&(s==null?void 0:s.role)!=="assistant";return e.createElement("div",{"aria-live":p?void 0:"polite",className:h(r.messageList,p&&r.empty,o),ref:u,role:p?void 0:"log"},p?c!=null?c():Ee:e.createElement(e.Fragment,null,t.map(l=>e.createElement(e.Fragment,{key:l.id},i!=null?i(l):e.createElement(be,{message:l}))),A&&e.createElement("div",{className:h(r.message,r.assistantMessage)},e.createElement("div",{className:h(r.bubble,r.assistantBubble)},e.createElement(fe,null)))))}const Me=e.memo(function({messages:t,status:a,error:n,onSendMessage:o,onStop:c,onClearError:i,composerFooter:s,className:m,placeholder:d="Type a message...",enableAutoScroll:u=!0,renderEmptyState:p,renderMessage:A}){const l=a==="submitted"||a==="streaming";return e.createElement("div",{className:h(r.chat,m)},n!=null&&e.createElement(ge,{actions:e.createElement(N,{onClick:i,type:"button"},"Dismiss"),intent:"error",title:"Something went wrong"},n.message.length>0?n.message:"An unknown error occurred. Try again, or dismiss to keep the conversation."),e.createElement(xe,{enableAutoScroll:u,isStreaming:l,messages:t,renderEmptyState:p,renderMessage:A}),e.createElement(_e,{footerLeft:s,isInFlight:l,onSendMessage:o,onStop:c,placeholder:d}))});let ve=1;function Se(){return`msg-${ve++}`}function C(t,a){return{id:Se(),role:t,parts:[{type:"text",text:a}]}}const ee=[C("user","What can you help me with?"),C("assistant","I can assist you with a wide range of tasks! For example, I can help answer questions, analyze data, write content, brainstorm ideas, and more. What would you like to work on today?"),C("user","Can you summarize the latest sales report?"),C("assistant",`Based on the Q1 sales report:

- Total revenue: $2.4M (up 12% QoQ)
- New customers: 148 (up 23%)
- Average deal size: $16.2K
- Top performing region: Northeast

The main growth driver was enterprise expansion deals. Would you like me to dig into any specific area?`)];function L(t){const{initialMessages:a=[],simulateError:n=!1,...o}=t,[c,i]=e.useState(a),[s,m]=e.useState("ready"),[d,u]=e.useState(n?new Error("Connection timed out. Please try again."):void 0),p=e.useRef(!1),A=e.useCallback(async te=>{const ae=C("user",te);if(i(_=>[..._,ae]),m("submitted"),p.current=!1,await new Promise(_=>setTimeout(_,600)),p.current){m("ready");return}m("streaming");const se=C("assistant","");i(_=>[..._,se]);const w="Thanks for your message! This is a simulated response that streams in token by token to demonstrate the chat experience.".split(" ");for(let _=0;_<w.length&&!p.current;_++){await new Promise(k=>setTimeout(k,50));const ne=w.slice(0,_+1).join(" ");i(k=>{const f=[...k],re=f[f.length-1];return f[f.length-1]={...re,parts:[{type:"text",text:ne}]},f})}m("ready")},[]),l=e.useCallback(()=>{p.current=!0,m("ready")},[]),v=e.useCallback(()=>{u(void 0)},[]);return M.jsx(Me,{...o,error:d,messages:c,onClearError:v,onSendMessage:A,onStop:l,status:s})}const Fe={title:"Components/AipAgentChat",component:L,tags:["beta"],render:t=>M.jsx("div",{style:{height:"100vh"},children:M.jsx(L,{...t})}),parameters:{controls:{expanded:!0}}},b={parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { createPlatformClient } from "@osdk/client";

const client = createPlatformClient({ /* ... */ });

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
/>`}}}},y={args:{initialMessages:ee},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import type { UIMessage } from "@osdk/react-components/experimental/aip-agent-chat";

const initialMessages: UIMessage[] = [
  { id: "1", role: "user", parts: [{ type: "text", text: "..." }] },
  { id: "2", role: "assistant", parts: [{ type: "text", text: "..." }] },
];

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  initialMessages={initialMessages}
/>`}}}},E={args:{simulateError:!0,initialMessages:ee.slice(0,2)},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

// Errors from the underlying LMS stream surface via onError and render
// as a dismissible banner above the composer.
<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  onError={(error) => console.error(error)}
/>`}}}},x={args:{placeholder:"Ask me anything about your data..."},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  placeholder="Ask me anything about your data..."
/>`}}}};var I,R,D,H,P;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { createPlatformClient } from "@osdk/client";

const client = createPlatformClient({ /* ... */ });

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
/>\`
      }
    }
  }
}`,...(D=(R=b.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:"Empty chat with the default welcome state. Type a message to start a simulated conversation.",...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.description}}};var B,V,O,W,z;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    initialMessages: SAMPLE_CONVERSATION
  },
  parameters: {
    docs: {
      source: {
        code: \`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import type { UIMessage } from "@osdk/react-components/experimental/aip-agent-chat";

const initialMessages: UIMessage[] = [
  { id: "1", role: "user", parts: [{ type: "text", text: "..." }] },
  { id: "2", role: "assistant", parts: [{ type: "text", text: "..." }] },
];

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  initialMessages={initialMessages}
/>\`
      }
    }
  }
}`,...(O=(V=y.parameters)==null?void 0:V.docs)==null?void 0:O.source},description:{story:"Chat pre-populated with an existing conversation.",...(z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:z.description}}};var j,F,U,$,G;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    simulateError: true,
    initialMessages: SAMPLE_CONVERSATION.slice(0, 2)
  },
  parameters: {
    docs: {
      source: {
        code: \`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

// Errors from the underlying LMS stream surface via onError and render
// as a dismissible banner above the composer.
<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  onError={(error) => console.error(error)}
/>\`
      }
    }
  }
}`,...(U=(F=E.parameters)==null?void 0:F.docs)==null?void 0:U.source},description:{story:"Chat displaying an error banner with a dismiss button.",...(G=($=E.parameters)==null?void 0:$.docs)==null?void 0:G.description}}};var K,J,Q,Y,q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placeholder: "Ask me anything about your data..."
  },
  parameters: {
    docs: {
      source: {
        code: \`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  placeholder="Ask me anything about your data..."
/>\`
      }
    }
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Custom placeholder text in the composer.",...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};const Ue=["Default","WithConversation","WithError","CustomPlaceholder"];export{x as CustomPlaceholder,b as Default,y as WithConversation,E as WithError,Ue as __namedExportsOrder,Fe as default};
