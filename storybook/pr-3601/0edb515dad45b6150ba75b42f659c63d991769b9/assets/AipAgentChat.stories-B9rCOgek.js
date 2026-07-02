import{r as e,j as b}from"./iframe-g5gKY9_O.js";import{c as u}from"./index-C40rUIxn.js";import{A as L}from"./ActionButton-C1jidlz5.js";import{I as re}from"./info-sign-Bfs8Gz7y.js";import{T as ie}from"./useValueChanged-K2NEwIRi.js";import{W as le}from"./warning-sign-DiXYOpRt.js";import{E as ce}from"./error-6eOYL3Dm.js";import{I as me}from"./Input-mkx3L3Pg.js";import{I as x,S as pe}from"./svgIconContainer-CCJJt3RP.js";import{D as ue}from"./DropdownField-Q3dwOs-y.js";import{C as de}from"./caret-down-Bqs0Pmcj.js";import"./preload-helper-vD_ADXE0.js";import"./Button-BmSo5q-L.js";import"./useBaseUiId-Cu9W3twr.js";import"./useControlled-C8OguibT.js";import"./index-CvH9dz38.js";import"./index-DJ73cS3V.js";import"./Combobox-B1npoE69.js";import"./cross-D1KqNeKH.js";import"./InternalBackdrop-DNedxnEH.js";import"./composite-Du8KNnA7.js";import"./index-DadRuR0G.js";import"./getDisabledMountTransitionStyles-SjYBpT_j.js";import"./ToolbarRootContext-BGBMNAEP.js";import"./getPseudoElementBounds-B_ULom34.js";import"./useCompositeListItem-BfgEgn4l.js";import"./small-cross-BWKgMqr5.js";const Y=e.forwardRef((t,n)=>{const o=(t.size??x.STANDARD)>=x.LARGE,i=`${-1*(o?x.LARGE:x.STANDARD)/.05/2}`,l={transformOrigin:"center"};return b.jsx(pe,{iconName:"chat",ref:n,...t,children:b.jsx("path",{d:o?"M380 400H140C129 400 120 391 120 380V180C120 169 129 160 140 160H251.8L326 85.8C329.4000000000001 82.2 334.4000000000001 80 340 80C351 80 360 89 360 100V160H380C391 160 400 169 400 180V380C400 391 391 400 380 400M140 140C118 140 100 158 100 180V320H20C9 320 0 311 0 300V100C0 89 9 80 20 80H40V20A20.06 20.06 0 0 1 74.2 5.8L148.2 80H260C271 80 280 89 280 100V103.4L243.4 140z":"M120 120C98 120 80 138 80 160V260H20C9 260 0 251 0 240V80C0 69 9 60 20 60V20A20.06 20.06 0 0 1 54.2 5.8L108.2 60H200C211 60 220 69 220 80V103.4L203.4 120zM300 320H120C109 320 100 311 100 300V160C100 149 109 140 120 140H211.8L266 85.8C269.4000000000001 82.2 274.4000000000001 80 280 80C291 80 300 89 300 100V140C311 140 320 149 320 160V300C320 311 311 320 300 320",fillRule:"evenodd",transform:`scale(0.05, -0.05) translate(${i}, ${i})`,style:l})})});Y.displayName="Blueprint6.Icon.Chat";function q(t){let n="";for(const o of t.parts)o.type==="text"&&(n+=o.text);return n}const h={callout:"Callout-module__callout___PEHatWiu",error:"Callout-module__error___gdkTnMMF",warning:"Callout-module__warning___FCzE3yLY",success:"Callout-module__success___BrxxC--L",info:"Callout-module__info___RndUloNR",icon:"Callout-module__icon___aWpGkLJ4",body:"Callout-module__body___rXKoZz90",title:"Callout-module__title___gHJqYqpp",message:"Callout-module__message___UDTJQlUj",actions:"Callout-module__actions___K1dq8rp3"},ge={error:ce,warning:le,success:ie,info:re},_e={error:h.error,warning:h.warning,success:h.success,info:h.info},he=e.memo(function({intent:t,title:n,children:o,actions:r,icon:i,className:l}){const s=i??ge[t];return e.createElement("div",{"aria-live":"polite",className:u(h.callout,_e[t],l),role:"alert"},s!=null&&e.createElement("span",{className:h.icon},e.createElement(s,{size:16})),e.createElement("div",{className:h.body},n!=null&&e.createElement("div",{className:h.title},n),o!=null&&e.createElement("div",{className:h.message},o)),r!=null&&e.createElement("div",{className:h.actions},r))}),a={chat:"AipAgentChat-module__chat___8g7robE3",messageList:"AipAgentChat-module__messageList___EJT0wkUj",empty:"AipAgentChat-module__empty___U0ZZWxmq",emptyIcon:"AipAgentChat-module__emptyIcon___-xTDcCXC",emptyTitle:"AipAgentChat-module__emptyTitle___STng1--H",message:"AipAgentChat-module__message___n2npFl8B",userMessage:"AipAgentChat-module__userMessage___9gfztpI-",assistantMessage:"AipAgentChat-module__assistantMessage___Hd0kHNZz",systemMessage:"AipAgentChat-module__systemMessage___j1KBNC18",bubble:"AipAgentChat-module__bubble___ehxKR1xQ",userBubble:"AipAgentChat-module__userBubble___-LOIsBgf",assistantBubble:"AipAgentChat-module__assistantBubble___s-rbLzIp",systemBubble:"AipAgentChat-module__systemBubble___ujadzYgh",streamingPlaceholder:"AipAgentChat-module__streamingPlaceholder___Os6a8AJk",composer:"AipAgentChat-module__composer___Wh3s2x7e",inputWrapper:"AipAgentChat-module__inputWrapper___pRQ1RWF8",textarea:"AipAgentChat-module__textarea___ocjwiGty",inputActions:"AipAgentChat-module__inputActions___9WTDHiJb",inputActionsLeft:"AipAgentChat-module__inputActionsLeft___JAjZzECI",inputActionsEnd:"AipAgentChat-module__inputActionsEnd___I-JBa5oy",belowComposer:"AipAgentChat-module__belowComposer___VGkvF6eh",modelPicker:"AipAgentChat-module__modelPicker___rXMvrOZh",modelPickerPrefix:"AipAgentChat-module__modelPickerPrefix___EVy1ijXz",modelPickerValue:"AipAgentChat-module__modelPickerValue___OB0F-aqs",modelPickerControl:"AipAgentChat-module__modelPickerControl___Xt6XLBCJ",modelPickerCaret:"AipAgentChat-module__modelPickerCaret___fZan-xXk",modelPickerNativeSelect:"AipAgentChat-module__modelPickerNativeSelect___L7o0NFFK",aboveComposer:"AipAgentChat-module__aboveComposer___E5tngZoh",contextPickerWrapper:"AipAgentChat-module__contextPickerWrapper___z49A6WY6",loader:"AipAgentChat-module__loader___m79mDMns",loaderDot:"AipAgentChat-module__loaderDot___8E42Iyvu"};function I(){return I=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},I.apply(null,arguments)}function Ce({isInFlight:t,onSendMessage:n,onStop:o,placeholder:r,className:i,actionsLeft:l,aboveComposer:s,belowComposer:m}){const[c,d]=e.useState(""),g=!t&&c.trim().length>0,C=e.useCallback(()=>{const p=c.trim();if(p.length!==0){try{const k=n(p);k instanceof Promise&&k.catch(Ae)}catch{}d("")}},[c,n]),_=e.useCallback(p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),t||C())},[C,t]),f=e.useCallback(p=>e.createElement("textarea",I({},p,{onKeyDown:_,rows:3})),[_]);return e.createElement("div",{className:u(a.composer,i)},s!=null&&e.createElement("div",{className:a.aboveComposer},s),e.createElement("div",{className:a.inputWrapper},e.createElement(me,{"aria-label":"Message input",className:a.textarea,onValueChange:d,placeholder:r,value:c,render:f}),e.createElement("div",{className:a.inputActions},l!=null&&e.createElement("div",{className:a.inputActionsLeft},l),e.createElement("div",{className:a.inputActionsEnd},t&&o!=null?e.createElement(L,{onClick:o,type:"button"},"Stop"):e.createElement(L,{disabled:!g,onClick:C,type:"button",variant:"primary"},"Send")))),m!=null&&e.createElement("div",{className:a.belowComposer},m))}function Ae(){}function fe(t,n){const o=e.useRef(null),r=e.useRef(null),i=e.useRef(!0),l=e.useCallback(s=>{var c;if((c=r.current)==null||c.call(r),r.current=null,o.current=s,s==null)return;const m=()=>{const d=s.scrollHeight-s.scrollTop-s.clientHeight;i.current=d<=be};s.addEventListener("scroll",m,{passive:!0}),r.current=()=>s.removeEventListener("scroll",m)},[]);return e.useEffect(()=>{if(!n)return;const s=o.current;s==null||!i.current||(s.scrollTop=s.scrollHeight)},[t,n]),l}const be=32;function Ee({className:t,label:n="Assistant is responding"}){return e.createElement("div",{"aria-label":n,"aria-live":"polite",className:u(a.loader,t),role:"status"},e.createElement("span",{"aria-hidden":"true",className:a.loaderDot}),e.createElement("span",{"aria-hidden":"true",className:a.loaderDot}),e.createElement("span",{"aria-hidden":"true",className:a.loaderDot}))}function ye({message:t}){const n=q(t),o=t.role,r=ke[o];return e.createElement("div",{"aria-label":r.label,className:u(a.message,r.container),role:"group"},e.createElement("div",{className:u(a.bubble,r.bubble)},n.length>0?n:e.createElement("span",{className:a.streamingPlaceholder},"…")))}const ke={user:{container:a.userMessage,bubble:a.userBubble,label:"User message"},assistant:{container:a.assistantMessage,bubble:a.assistantBubble,label:"Assistant message"},system:{container:a.systemMessage,bubble:a.systemBubble,label:"System message"}},xe=e.createElement(e.Fragment,null,e.createElement(Y,{className:a.emptyIcon,size:64}),e.createElement("div",{className:a.emptyTitle},"Start a conversation"),e.createElement("div",null,"Type a message below to chat with the assistant."));function ve({messages:t,isStreaming:n,enableAutoScroll:o,className:r,renderEmptyState:i,renderMessage:l}){const s=t.at(-1),m=s!=null?q(s).length:0,c=`${t.length}:${m}`,d=fe(c,o),g=t.length===0&&!n,C=n&&(s==null?void 0:s.role)!=="assistant";return e.createElement("div",{"aria-live":g?void 0:"polite",className:u(a.messageList,g&&a.empty,r),ref:d,role:g?void 0:"log"},g?i!=null?i():xe:e.createElement(e.Fragment,null,t.map(_=>e.createElement(e.Fragment,{key:_.id},l!=null?l(_):e.createElement(ye,{message:_}))),C&&e.createElement("div",{className:u(a.message,a.assistantMessage)},e.createElement("div",{className:u(a.bubble,a.assistantBubble)},e.createElement(Ee,null)))))}const Me=e.memo(function({messages:t,status:n,error:o,onSendMessage:r,onStop:i,onClearError:l,composerActions:s,aboveComposer:m,belowComposer:c,className:d,placeholder:g="Type a message...",enableAutoScroll:C=!0,renderEmptyState:_,renderMessage:f}){const p=n==="submitted"||n==="streaming";return e.createElement("div",{className:u(a.chat,d)},o!=null&&e.createElement(he,{actions:e.createElement(L,{onClick:l,type:"button"},"Dismiss"),intent:"error",title:"Something went wrong"},o.message.length>0?o.message:"An unknown error occurred. Try again, or dismiss to keep the conversation."),e.createElement(ve,{enableAutoScroll:C,isStreaming:p,messages:t,renderEmptyState:_,renderMessage:f}),e.createElement(Ce,{actionsLeft:s,aboveComposer:m,belowComposer:c,isInFlight:p,onSendMessage:r,onStop:i,placeholder:g}))}),Pe="+ Add context";function Se({contextItemIds:t,selected:n,onChange:o,disabled:r}){const i=e.useMemo(()=>[...t],[t]),l=e.useMemo(()=>[...n],[n]),s=e.useCallback(m=>{o(m??[])},[o]);return t.length===0?null:e.createElement("div",{className:a.contextPickerWrapper},e.createElement(ue,{items:i,value:l,onChange:s,isMultiple:!0,isSearchable:!0,placeholder:Pe,disabled:r}))}function Ne({models:t,activeModel:n,onModelChange:o,disabled:r,className:i}){const l=e.useCallback(s=>{o(s.target.value)},[o]);return t.length===0?null:t.length===1?e.createElement("span",{className:u(a.modelPicker,i)},e.createElement("span",{className:a.modelPickerPrefix},"Model:"),e.createElement("span",{className:a.modelPickerValue},n)):e.createElement("span",{className:u(a.modelPicker,i)},e.createElement("span",{className:a.modelPickerPrefix},"Model:"),e.createElement("span",{className:a.modelPickerControl},e.createElement("span",{className:a.modelPickerValue},n),e.createElement(de,{className:a.modelPickerCaret,size:14}),e.createElement("select",{"aria-label":"Active model",className:a.modelPickerNativeSelect,disabled:r,onChange:l,value:n},t.map(s=>e.createElement("option",{key:s,value:s},s)))))}let Te=1;function Le(){return`msg-${Te++}`}function E(t,n){return{id:Le(),role:t,parts:[{type:"text",text:n}]}}const Q=[E("user","What can you help me with?"),E("assistant","I can assist you with a wide range of tasks! For example, I can help answer questions, analyze data, write content, brainstorm ideas, and more. What would you like to work on today?"),E("user","Can you summarize the latest sales report?"),E("assistant",`Based on the Q1 sales report:

- Total revenue: $2.4M (up 12% QoQ)
- New customers: 148 (up 23%)
- Average deal size: $16.2K
- Top performing region: Northeast

The main growth driver was enterprise expansion deals. Would you like me to dig into any specific area?`)],Ie=["Employee","Office","Project"],w=["gpt-4o","gpt-4o-mini"];function je(){}function D({initialMessages:t=[],simulateError:n=!1,enableModelPicker:o=!0,enableContextPicker:r=!1,...i}){const[l,s]=e.useState(t),[m,c]=e.useState("ready"),[d,g]=e.useState(n?new Error("Connection timed out. Please try again."):void 0),[C,_]=e.useState([]),f=e.useRef(!1),p=e.useCallback(async te=>{const ae=E("user",te);if(s(A=>[...A,ae]),c("submitted"),f.current=!1,await new Promise(A=>setTimeout(A,600)),f.current){c("ready");return}c("streaming");const ne=E("assistant","");s(A=>[...A,ne]);const j="Thanks for your message! This is a simulated response that streams in token by token to demonstrate the chat experience.".split(" ");for(let A=0;A<j.length&&!f.current;A++){await new Promise(T=>setTimeout(T,50));const se=j.slice(0,A+1).join(" ");s(T=>{const y=[...T],oe=y[y.length-1];return y[y.length-1]={...oe,parts:[{type:"text",text:se}]},y})}c("ready")},[]),k=e.useCallback(()=>{f.current=!0,c("ready")},[]),ee=e.useCallback(()=>{g(void 0)},[]);return b.jsx(Me,{...i,belowComposer:o?b.jsx(Ne,{activeModel:w[0],models:w,onModelChange:je}):void 0,composerActions:r?b.jsx(Se,{contextItemIds:Ie,selected:C,onChange:_}):void 0,error:d,messages:l,onClearError:ee,onSendMessage:p,onStop:k,status:m})}const lt={title:"Components/AipAgentChat",component:D,tags:["beta"],render:t=>b.jsx("div",{style:{height:"100vh"},children:b.jsx(D,{...t})}),parameters:{controls:{expanded:!0}}},v={parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { createPlatformClient } from "@osdk/client";

const client = createPlatformClient({ /* ... */ });

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
/>`}}}},M={args:{initialMessages:Q},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import type { UIMessage } from "@osdk/react-components/experimental/aip-agent-chat";

const initialMessages: UIMessage[] = [
  { id: "1", role: "user", parts: [{ type: "text", text: "..." }] },
  { id: "2", role: "assistant", parts: [{ type: "text", text: "..." }] },
];

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  initialMessages={initialMessages}
/>`}}}},P={args:{simulateError:!0,initialMessages:Q.slice(0,2)},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

// Errors from the underlying LMS stream surface via onError and render
// as a dismissible banner above the composer.
<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  onError={(error) => console.error(error)}
/>`}}}},S={args:{placeholder:"Ask me anything about your data..."},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  placeholder="Ask me anything about your data..."
/>`}}}},N={args:{enableContextPicker:!0},parameters:{docs:{source:{code:`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { Employee, Office, Project } from "@my-app/osdk";

// Selecting an object type in the picker lazily loads its objects and
// appends a serialized snapshot to the system prompt.
<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  contextItems={[
    { type: "objectType", objectType: Employee },
    { type: "objectType", objectType: Office },
    { type: "objectType", objectType: Project },
  ]}
  onSelectedContextItemsChanged={(items) => {
    console.log("selected", items);
  }}
/>`}}}};var O,R,z;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(R=v.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var V,W,B;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(W=M.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var H,F,U;P.parameters={...P.parameters,docs:{...(H=P.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(F=P.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var $,G,J;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Z;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    enableContextPicker: true
  },
  parameters: {
    docs: {
      source: {
        code: \`import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { Employee, Office, Project } from "@my-app/osdk";

// Selecting an object type in the picker lazily loads its objects and
// appends a serialized snapshot to the system prompt.
<AipAgentChat
  client={client}
  availableModels={["gpt-4o", "gpt-4o-mini"]}
  contextItems={[
    { type: "objectType", objectType: Employee },
    { type: "objectType", objectType: Office },
    { type: "objectType", objectType: Project },
  ]}
  onSelectedContextItemsChanged={(items) => {
    console.log("selected", items);
  }}
/>\`
      }
    }
  }
}`,...(Z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ct=["Default","WithConversation","WithError","CustomPlaceholder","WithContextItems"];export{S as CustomPlaceholder,v as Default,N as WithContextItems,M as WithConversation,P as WithError,ct as __namedExportsOrder,lt as default};
