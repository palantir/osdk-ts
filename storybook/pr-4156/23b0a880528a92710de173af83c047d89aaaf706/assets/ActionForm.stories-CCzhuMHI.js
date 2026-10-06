import{j as t,g as n}from"./iframe-BJzSfC9S.js";import{A as r}from"./action-form-C29l549F.js";import"./preload-helper-C5ZXn0m1.js";import"./DropdownField-BKTfgTvj.js";import"./debounce-DNvbPKFV.js";import"./useOsdkClient-CQVwNPHy.js";import"./index-RBTsKrCd.js";import"./Input-DtZovt6p.js";import"./useBaseUiId-xJC8-ZJA.js";import"./useControlled-CHkHsIux.js";import"./index-XpV3If0y.js";import"./index-BJ-crEmJ.js";import"./PopoverPopup-X5gFNrqC.js";import"./InternalBackdrop-jeH2RH2w.js";import"./composite-CJkKobo9.js";import"./index-huqfVkjH.js";import"./getDisabledMountTransitionStyles-C9ZXU9C3.js";import"./ToolbarRootContext-BYj16EhM.js";import"./tick-C6e3lIMM.js";import"./svgIconContainer-CuAg_aag.js";import"./small-cross-CuZoKliA.js";import"./search-BtII_V1C.js";import"./cross-C1sOYIrW.js";import"./useValueChanged-3Zyk1ZQA.js";import"./getPseudoElementBounds-DGHyT3Ys.js";import"./CompositeItem-Dy9HP9ud.js";import"./makeExternalStore-BYmjIu_q.js";import"./BaseForm-CYJdhqIu.js";import"./ActionButton-LG9rRmUw.js";import"./Button-VqVSA-sW.js";import"./SkeletonBar-7o_3NyMD.js";import"./Tooltip-Bgn1Cxp6.js";import"./info-sign-CnY4Gj4T.js";import"./chevron-up-nezg5COO.js";import"./chevron-down-i7BRJyaV.js";import"./useEventCallback-w7WB5s1Y.js";import"./iconLoader-BF2ju0CZ.js";import"./Switch-DW5P_giV.js";import"./CompositeRoot-Cd9Omqiy.js";import"./TimePicker-D6UjYTge.js";import"./CollapsiblePanel-B8KUeZV_.js";import"./error-B8K_QQqb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dv0OE5bl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
