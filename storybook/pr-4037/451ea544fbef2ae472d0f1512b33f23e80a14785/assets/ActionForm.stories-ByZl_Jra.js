import{j as t,g as n}from"./iframe-BkUB1z-0.js";import{A as r}from"./action-form-E05U5Hf8.js";import"./preload-helper-BCudyj9Z.js";import"./DropdownField-0exMnQkH.js";import"./debounce-BLWM42lG.js";import"./useOsdkClient-BbELsNFg.js";import"./index-BCGsaIlh.js";import"./Input-C4TK9SWN.js";import"./useBaseUiId-B8T1UKcT.js";import"./useControlled-CUAQStBL.js";import"./index-BQjDuZGx.js";import"./index-D6in26WZ.js";import"./PopoverPopup-ozcNWDZ5.js";import"./InternalBackdrop-H5sSfb4n.js";import"./composite-DN3Oh5mU.js";import"./index-CvdNlkb_.js";import"./getDisabledMountTransitionStyles-DT8C5L09.js";import"./ToolbarRootContext-But4UFVK.js";import"./tick-C2mVcAcj.js";import"./svgIconContainer-CGIj3k_X.js";import"./small-cross-BAPz52fQ.js";import"./search-BtcHq1ld.js";import"./cross-CTUau5h8.js";import"./useValueChanged-BT-2a7nr.js";import"./getPseudoElementBounds-BRtlcmQu.js";import"./CompositeItem-Bq1Yg5Uc.js";import"./makeExternalStore-CT_-UtYV.js";import"./BaseForm-C27dx_vv.js";import"./ActionButton-9cqEoefe.js";import"./Button-DSZL0uVg.js";import"./SkeletonBar-CDJ42pSX.js";import"./Tooltip-B4XqSu-L.js";import"./info-sign-TrVDW0C5.js";import"./chevron-up-Cg2ncQwD.js";import"./chevron-down-C-Az15Kw.js";import"./useEventCallback-Cxr3bwfn.js";import"./iconLoader-jdTGr6UI.js";import"./CompositeRoot-RypsoVii.js";import"./Switch-DodXaDqT.js";import"./TimePicker-cP8sPHBd.js";import"./CollapsiblePanel-q_QI9iZH.js";import"./error-yvAwMgsa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-a2YFnMdP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
