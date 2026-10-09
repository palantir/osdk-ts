import{j as t,g as n}from"./iframe-Cw3LH66c.js";import{A as r}from"./action-form-CqEzsuR2.js";import"./preload-helper-0zDabIei.js";import"./DropdownField-wBvRipXj.js";import"./debounce-DT5EOIQR.js";import"./useOsdkClient-C5QpN0d9.js";import"./index-BEERWgVy.js";import"./Input-CtFwY591.js";import"./useBaseUiId-BSwJaM6C.js";import"./useControlled-0OhiGPgb.js";import"./index-Dvk9IgkK.js";import"./index-Di_GE7Jl.js";import"./PopoverPopup-hu8WdUFW.js";import"./InternalBackdrop-dbVS_Lfc.js";import"./composite-DkWEa617.js";import"./index-DDiROJlP.js";import"./getDisabledMountTransitionStyles-Cqz6gGv9.js";import"./ToolbarRootContext-f4q0b_R5.js";import"./tick-CnMPIEfW.js";import"./svgIconContainer-By_Zx8bX.js";import"./small-cross-DMGeALz-.js";import"./search-CZ_uh4ZV.js";import"./cross-BxwRmAhN.js";import"./useValueChanged-C15eXzrn.js";import"./getPseudoElementBounds-B8OXb7F2.js";import"./CompositeItem-C2idg_k-.js";import"./makeExternalStore-Di2REqsM.js";import"./BaseForm-BN7lkmzy.js";import"./ActionButton-BN9H3toR.js";import"./Button-dLCYbHpS.js";import"./SkeletonBar-Dzu018il.js";import"./Tooltip-_tVxlKMX.js";import"./info-sign-Dwj6TIub.js";import"./chevron-up-B9HGNRu3.js";import"./chevron-down-DRmznTzQ.js";import"./useEventCallback-5AhjtGqt.js";import"./iconLoader-BZDPPPlK.js";import"./Switch-CT_fTBp1.js";import"./CompositeRoot-Df4xFFN1.js";import"./TimePicker-DRVY6Gk7.js";import"./CollapsiblePanel-BqpzO6p2.js";import"./error-CmY3qZ0u.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D2csPQg7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
