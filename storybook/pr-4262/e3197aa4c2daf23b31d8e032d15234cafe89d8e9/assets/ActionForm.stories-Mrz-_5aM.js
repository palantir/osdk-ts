import{j as t,g as n}from"./iframe-I-oDj4Zf.js";import{A as r}from"./action-form-Bab369i6.js";import"./preload-helper-DoR3GGZy.js";import"./DropdownField-I4HAtEDY.js";import"./debounce-D5e0wjoa.js";import"./useOsdkClient-CEoxI4QC.js";import"./index-QR0ynjTm.js";import"./Input-QRcBEz-L.js";import"./useBaseUiId-DbsMUGHz.js";import"./useControlled-CphiSNJu.js";import"./index-D2sLcc-K.js";import"./index-CPedUlI1.js";import"./PopoverPopup-D4Yb-OFT.js";import"./InternalBackdrop-CfSb4ma1.js";import"./composite-CVLqeN_f.js";import"./index-DpMDyn81.js";import"./getDisabledMountTransitionStyles-yOgeaO0s.js";import"./ToolbarRootContext-DOAo9bSD.js";import"./tick-BrOwqOvA.js";import"./svgIconContainer-BrWiwUny.js";import"./small-cross-D7PZgAK5.js";import"./search-CIYeg_xA.js";import"./cross-CX2gEjus.js";import"./useValueChanged-CiTYSghQ.js";import"./getPseudoElementBounds-Cs3Xa3sB.js";import"./CompositeItem-Bh0NB-Cc.js";import"./makeExternalStore-DSBRYZ6v.js";import"./BaseForm-C6XKftHY.js";import"./ActionButton-C-BKMT4N.js";import"./Button-DZTSIR38.js";import"./SkeletonBar-CGYOp5T6.js";import"./Tooltip-DkmWZB-H.js";import"./info-sign-CN_Adv5s.js";import"./chevron-up-C9-HH4Lo.js";import"./chevron-down-DsdifgPL.js";import"./useEventCallback-Bc6J5k71.js";import"./iconLoader-CjJ0bB9t.js";import"./Switch-CL-C_HO1.js";import"./CompositeRoot-BZSNJ_Vm.js";import"./TimePicker-GG6gHu0x.js";import"./CollapsiblePanel-BGlZd1qK.js";import"./error-DQf4Jva_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CzZMIy3-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
