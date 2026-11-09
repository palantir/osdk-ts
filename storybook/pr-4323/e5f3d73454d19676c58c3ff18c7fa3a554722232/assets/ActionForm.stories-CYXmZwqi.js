import{j as t,g as n}from"./iframe-DqApX63y.js";import{A as r}from"./action-form-Duu_FtWK.js";import"./preload-helper-Bec-Ia2T.js";import"./DropdownField-lulEEiGG.js";import"./debounce-B7mULt91.js";import"./useOsdkClient-C4IDXCsH.js";import"./index-CyvkUScE.js";import"./Input-DEWSCfWZ.js";import"./useBaseUiId-BKFVtTe-.js";import"./useControlled-dziTOMb-.js";import"./index-BOcOla9y.js";import"./index-DRbiLs21.js";import"./isObject-nTfM7xAK.js";import"./InternalBackdrop-Cd1LmBcA.js";import"./composite-CRmy7_bC.js";import"./index-BGUtfM2L.js";import"./getDisabledMountTransitionStyles-CD9PvG5g.js";import"./ToolbarRootContext-Dv213T19.js";import"./tick-cBZZmDLW.js";import"./svgIconContainer-6cRzMh8j.js";import"./small-cross-BEgcJVSc.js";import"./search-DWIX6Qtd.js";import"./cross-C5bmvSOT.js";import"./useValueChanged-wUg0BzA8.js";import"./getPseudoElementBounds-DusJxNbj.js";import"./CompositeItem-D1qVgSi4.js";import"./makeExternalStore-71T0xGUT.js";import"./BaseForm-CeHPsI0Q.js";import"./ActionButton-BzlJmtNl.js";import"./Button-ChF1ZUI_.js";import"./SkeletonBar-2kheKNw1.js";import"./Tooltip-DQ7QRGY9.js";import"./info-sign-BfvDhu7d.js";import"./chevron-up-CaNjSDpS.js";import"./chevron-down-DvNVUZis.js";import"./useEventCallback-C_EHeE0y.js";import"./iconLoader-CW_tpFm3.js";import"./Switch-BWTWyT2D.js";import"./CompositeRoot-BD9dbC-t.js";import"./TimePicker-mI6lLUhe.js";import"./CollapsiblePanel-C9_n_dCM.js";import"./error-D4Jl5yqC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-K4E-rs8a.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
