import{j as t,g as n}from"./iframe-DMskF-Tm.js";import{A as r}from"./action-form-y5x__zh_.js";import"./preload-helper-zdHiINLH.js";import"./DropdownField-DAhq5OSj.js";import"./debounce-Dl0Z3g8R.js";import"./useOsdkClient-C_CyCy1E.js";import"./index-DLe4u5Oe.js";import"./Input-D-LAYNYb.js";import"./useBaseUiId-IzXs79SE.js";import"./useControlled-CLoeMU3z.js";import"./index-BQNk_jze.js";import"./index-1EVlbohU.js";import"./PopoverPopup-BtNKZ5QB.js";import"./InternalBackdrop-BbQxkn3u.js";import"./composite-bCuvd1w6.js";import"./index-BS55zaCl.js";import"./getDisabledMountTransitionStyles-CoA3FrXT.js";import"./ToolbarRootContext-Br2QKeOd.js";import"./tick-CEX6N7wE.js";import"./svgIconContainer-CNoR15u0.js";import"./small-cross-BYWrk9uQ.js";import"./search-CZUSf-yV.js";import"./cross-CwAqVkgp.js";import"./useValueChanged-BLXHgZ07.js";import"./getPseudoElementBounds-cZixjbuq.js";import"./CompositeItem-BdlugdAy.js";import"./makeExternalStore-TRQMkypD.js";import"./BaseForm-QE4CAsIe.js";import"./ActionButton-WEyIvEvK.js";import"./Button-BNzcwfr4.js";import"./SkeletonBar-BdaE-4d-.js";import"./Tooltip-kEiuDs1k.js";import"./info-sign-B3MaGO7p.js";import"./chevron-up-CGExkWMV.js";import"./chevron-down-D2q20rMp.js";import"./useEventCallback-DVDdrM3Z.js";import"./iconLoader-yN5ZqH29.js";import"./CompositeRoot-7Epe7SHf.js";import"./Switch-CDtVw-LG.js";import"./TimePicker-BUTkROV3.js";import"./CollapsiblePanel-DQIxvF0N.js";import"./error-pEWPvW42.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dwd24s1O.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
