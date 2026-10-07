import{j as t,g as n}from"./iframe-CUE_Kfqx.js";import{A as r}from"./action-form-DVYlY0Ad.js";import"./preload-helper-AIizN4Br.js";import"./DropdownField-DydXRFgV.js";import"./debounce-BqRNJlyF.js";import"./useOsdkClient-DXgSXyyY.js";import"./index-BiahB8So.js";import"./Input-Bbk2_em_.js";import"./useBaseUiId-DGLgADwu.js";import"./useControlled-DMcW3WuP.js";import"./index-Kj8T-xKz.js";import"./index-Dn1aYiaH.js";import"./PopoverPopup-Bdv4BgKZ.js";import"./InternalBackdrop-DEAHptJe.js";import"./composite-hPB6o8bz.js";import"./index-A749wJ93.js";import"./getDisabledMountTransitionStyles-DiWmDOBV.js";import"./ToolbarRootContext-_FDeKHlj.js";import"./tick-DpDkYcVx.js";import"./svgIconContainer-BHr2UOEv.js";import"./small-cross-Bx0oZmc_.js";import"./search-CrkbBBP3.js";import"./cross-x00S7IUW.js";import"./useValueChanged-CW7Ml1tR.js";import"./getPseudoElementBounds-DPetyz5J.js";import"./CompositeItem-B7RByGkr.js";import"./makeExternalStore-CCErHO8u.js";import"./BaseForm-CvUnSLsK.js";import"./ActionButton-efTfNcN1.js";import"./Button-Dhiaj79W.js";import"./SkeletonBar-DhtU-Zrt.js";import"./Tooltip-BWS__Wm3.js";import"./info-sign-CIiS9xHN.js";import"./chevron-up-DQrrkzRc.js";import"./chevron-down-DAAZF-qc.js";import"./useEventCallback-CkwTVSxb.js";import"./iconLoader-CooOlhYC.js";import"./Switch-Czvg8KQj.js";import"./CompositeRoot-CDSz4Y6J.js";import"./TimePicker-CiwvH-9o.js";import"./CollapsiblePanel-DdEPVr1s.js";import"./error-CgrtB7s8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Z4Ee0NlE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
