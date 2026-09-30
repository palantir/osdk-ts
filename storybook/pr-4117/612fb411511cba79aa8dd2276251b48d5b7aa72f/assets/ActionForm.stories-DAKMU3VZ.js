import{j as t,g as n}from"./iframe-BarfOKYJ.js";import{A as r}from"./action-form-EMvCKu1c.js";import"./preload-helper-DhgTfoUj.js";import"./DropdownField-CsNv8iOU.js";import"./debounce-BerZfsn6.js";import"./useOsdkClient-Bup81mrr.js";import"./index-DdXQxkq9.js";import"./Input-BuDULjbT.js";import"./useBaseUiId-DPa9F6U_.js";import"./useControlled-Bj7AFHc7.js";import"./index-CylLJLDi.js";import"./index-BSz4BzcY.js";import"./PopoverPopup-CIFWoRMP.js";import"./InternalBackdrop-CzqI8c2A.js";import"./composite-C6iH7oZR.js";import"./index-8BqqJVP-.js";import"./getDisabledMountTransitionStyles-BKNuGRXS.js";import"./ToolbarRootContext-BuAvit0a.js";import"./tick-BdVYhETS.js";import"./svgIconContainer-CZ2JLaJP.js";import"./small-cross-BpfwKVxt.js";import"./search-C8DSNwE8.js";import"./cross-awiM4qkb.js";import"./useValueChanged-CeW4BP0G.js";import"./getPseudoElementBounds-CoZE2llY.js";import"./CompositeItem-DtdptPgn.js";import"./makeExternalStore-Ddoj9Y3j.js";import"./BaseForm-vuXZJIbk.js";import"./ActionButton-CLQTqINC.js";import"./Button-glJjOdf_.js";import"./SkeletonBar-DwtS4_5f.js";import"./Tooltip-BFgf2gEu.js";import"./info-sign-BOiA12Cu.js";import"./chevron-up-H5Hyk0Go.js";import"./chevron-down-CDrseuzZ.js";import"./useEventCallback-BM5lsma7.js";import"./iconLoader-CEKxau5N.js";import"./Switch-DBODwUzw.js";import"./CompositeRoot-Dw00YbZP.js";import"./TimePicker-D8ctFbQ0.js";import"./CollapsiblePanel-BLyrJB6N.js";import"./error-D3ss51fq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8r59qzx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
