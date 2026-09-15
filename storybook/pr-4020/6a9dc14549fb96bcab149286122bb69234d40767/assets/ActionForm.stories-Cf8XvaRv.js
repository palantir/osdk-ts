import{j as t,g as n}from"./iframe-C-CLTpsP.js";import{A as r}from"./action-form-B6OcEqU9.js";import"./preload-helper-DHm86PzE.js";import"./DropdownField-BvX-rLeM.js";import"./debounce-DnqzDTdJ.js";import"./useOsdkClient-ChzNHrxJ.js";import"./index-C_yrN8nJ.js";import"./Input-D24KUx_z.js";import"./useBaseUiId-CzMe2Dnq.js";import"./useControlled-BMK5_n_x.js";import"./index-D40VRMQn.js";import"./index-Cfu6rkCW.js";import"./PopoverPopup-DLPr24Ac.js";import"./InternalBackdrop-CO7iGp_c.js";import"./composite-DJh0mugt.js";import"./index-D_FrlNxB.js";import"./getDisabledMountTransitionStyles-D9D7SyXr.js";import"./ToolbarRootContext-BEcPVQJt.js";import"./tick-UvYb-w0t.js";import"./svgIconContainer-xNOrsz7C.js";import"./small-cross-CXyJ64HZ.js";import"./search-CpRfXCb8.js";import"./cross-Ku2F5rSb.js";import"./useValueChanged-CKIgQS7f.js";import"./getPseudoElementBounds-CwZa5orc.js";import"./CompositeItem-DUPoB7w7.js";import"./makeExternalStore-DOqfc4A2.js";import"./BaseForm-B1aDiAfd.js";import"./ActionButton-DHfHgPik.js";import"./Button-TBXiPdkd.js";import"./SkeletonBar-1j_7hiTq.js";import"./Tooltip-Uw4j1Mbj.js";import"./info-sign-CS0kzKna.js";import"./chevron-up-C0pmcL0Z.js";import"./chevron-down-Cj7uY9HA.js";import"./useEventCallback-oHg7GWTB.js";import"./iconLoader-Xac1nJyD.js";import"./CompositeRoot-oyH0EfPE.js";import"./Switch-BKvqJ7uH.js";import"./TimePicker-BbeW7YxP.js";import"./CollapsiblePanel-BUkEhtTj.js";import"./error-B9ihfIkN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ChVqngv_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
