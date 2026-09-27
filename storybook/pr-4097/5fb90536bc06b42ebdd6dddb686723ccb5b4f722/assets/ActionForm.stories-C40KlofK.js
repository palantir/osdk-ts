import{j as t,g as n}from"./iframe-BLUQ5n2c.js";import{A as r}from"./action-form-To9HGfAM.js";import"./preload-helper-DMlP9NYW.js";import"./DropdownField-Bm51UKRg.js";import"./debounce-CALuRR5X.js";import"./useOsdkClient-vyzs8V6e.js";import"./index-CsLnk6pi.js";import"./Input-CJtdNhxn.js";import"./useBaseUiId-BeXNNW2Y.js";import"./useControlled-B201dL0t.js";import"./index-CRHr79L0.js";import"./index-3ijF1jpZ.js";import"./PopoverPopup-CZdF7XOC.js";import"./InternalBackdrop-CSoztZdj.js";import"./composite-DpCo7vDA.js";import"./index-Cu1ZahnW.js";import"./getDisabledMountTransitionStyles-Bhs6m7gR.js";import"./ToolbarRootContext-DgTgfzIH.js";import"./tick-DbzhA004.js";import"./svgIconContainer-Cp4hDvLL.js";import"./small-cross-PSmIAOl0.js";import"./search-BxVXVDMi.js";import"./cross-lsoPApi8.js";import"./useValueChanged-DRWNLZgS.js";import"./getPseudoElementBounds-BUU7Awzx.js";import"./CompositeItem-BFmGj5TY.js";import"./makeExternalStore-cNeOPsE8.js";import"./BaseForm-YpfcrgSU.js";import"./ActionButton-D86_SLzn.js";import"./Button-SHEnCOjG.js";import"./SkeletonBar-CkH9gL38.js";import"./Tooltip-DrCIXT4c.js";import"./info-sign-D14VhGx0.js";import"./chevron-up-BRN7Leh3.js";import"./chevron-down-5sopWHZC.js";import"./useEventCallback-Bj8tWb2p.js";import"./iconLoader-rOQkp6_i.js";import"./Switch-DQZOuOpZ.js";import"./CompositeRoot-wJ1jo6T8.js";import"./TimePicker-CGpUzXxz.js";import"./CollapsiblePanel-YVQttI65.js";import"./error-CimK2De2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-XVg1B84_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
