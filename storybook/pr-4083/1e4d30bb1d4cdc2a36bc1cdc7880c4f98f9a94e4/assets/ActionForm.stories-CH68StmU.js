import{j as t,g as n}from"./iframe-Cuknj9ph.js";import{A as r}from"./action-form-CYaJxcMm.js";import"./preload-helper-DA49r888.js";import"./DropdownField-CJScNr2p.js";import"./debounce-BbAyHLdF.js";import"./useOsdkClient-CB7r24bA.js";import"./index-DUVMLmA5.js";import"./Input-BEJtrH8a.js";import"./useBaseUiId-ksC6H-yy.js";import"./useControlled-D1P2IuRq.js";import"./index-B7AWjemI.js";import"./index-BPGm0MAa.js";import"./PopoverPopup-ZZbgTqgr.js";import"./InternalBackdrop-CBDaXKFL.js";import"./composite-CUDt05Vv.js";import"./index-I722fGzW.js";import"./getDisabledMountTransitionStyles-BYU-ducs.js";import"./ToolbarRootContext-BMS0iTVE.js";import"./tick-D_CF6UIY.js";import"./svgIconContainer-Bxolnsq9.js";import"./small-cross-CInH2-yh.js";import"./search-BJhgCNFy.js";import"./cross-9NrnDCFm.js";import"./useValueChanged-BljXNw8x.js";import"./getPseudoElementBounds-BDhodCIt.js";import"./CompositeItem-CyTGoO_U.js";import"./makeExternalStore-VBmH-lGu.js";import"./BaseForm-C-XqyM0B.js";import"./ActionButton-DhNYUSlb.js";import"./Button-fi3zZM83.js";import"./SkeletonBar-BbxNu6H8.js";import"./Tooltip-DHjKu8cE.js";import"./info-sign-DWSvjAy2.js";import"./chevron-up-haUGpyQ4.js";import"./chevron-down-DYalT47P.js";import"./useEventCallback-BzkQL_AG.js";import"./iconLoader-DANMoRqD.js";import"./Switch-C6klZ7ez.js";import"./CompositeRoot-CBtXINXV.js";import"./TimePicker-DADxbIo6.js";import"./CollapsiblePanel-C2GTiw59.js";import"./error-CYI1ELi7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEbRkfCK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
