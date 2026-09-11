import{j as t,g as n}from"./iframe-B4QogxC6.js";import{A as r}from"./action-form-0nYR5gRt.js";import"./preload-helper-C_5k-fFt.js";import"./DropdownField-D9HTL46H.js";import"./debounce-CeSijK1N.js";import"./useOsdkClient-Cl601DTN.js";import"./index-CQyvBzj_.js";import"./Input-DiRfBBOs.js";import"./useBaseUiId-DownjkF0.js";import"./useControlled-T3xesycb.js";import"./index-BKn8iF1n.js";import"./index-D0VjMeuF.js";import"./PopoverPopup-CWEZyT0m.js";import"./InternalBackdrop-DL90UTgk.js";import"./composite-Dqc63iLy.js";import"./index-ByT4MXlR.js";import"./getDisabledMountTransitionStyles-BtJrecyz.js";import"./ToolbarRootContext-De8fRc6j.js";import"./tick-9Irchz6P.js";import"./svgIconContainer-DdyooWte.js";import"./small-cross-Cjfa7jit.js";import"./search-BgJqBCXd.js";import"./cross-Dv490F0o.js";import"./useValueChanged-FjHY1o4Y.js";import"./getPseudoElementBounds-T2UYiBqB.js";import"./CompositeItem-BoXFiz_E.js";import"./makeExternalStore-BBdCQtVj.js";import"./BaseForm-DMmoYMgd.js";import"./ActionButton-DzObz5rl.js";import"./Button-CIw-2F8I.js";import"./SkeletonBar-B3VZ6hlb.js";import"./Tooltip-D-SzDxed.js";import"./info-sign-CvNsNuDh.js";import"./chevron-up-Ch3wPrX6.js";import"./chevron-down-BlCKOTL8.js";import"./useEventCallback-bHimiWWk.js";import"./iconLoader-D7gZ4YI8.js";import"./CompositeRoot-V6wo6pQE.js";import"./Switch-BU9ROw7J.js";import"./TimePicker--5a3hOBO.js";import"./CollapsiblePanel-B5tdGMg0.js";import"./error-rqdE4hRy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DDrBn77T.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
