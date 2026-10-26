import{j as t,g as n}from"./iframe-B2PftgNv.js";import{A as r}from"./action-form-uxbptV6y.js";import"./preload-helper-CEJ8wrbo.js";import"./DropdownField-Dj__11WN.js";import"./debounce-Dy8J1v9c.js";import"./useOsdkClient-8mR2SN13.js";import"./index-DLh6R3k3.js";import"./Input-BtteuOYK.js";import"./useBaseUiId-Z6N9hVn8.js";import"./useControlled-CrpHgYxN.js";import"./index-CKDtR0br.js";import"./index-D5vOugya.js";import"./PopoverPopup-bHujGyHj.js";import"./InternalBackdrop-C_Gp7NJL.js";import"./composite-ClzGHvMl.js";import"./index-B_Dc_l-I.js";import"./getDisabledMountTransitionStyles-CIcAeq8K.js";import"./ToolbarRootContext-DSVVLYlD.js";import"./tick-BHo22fTJ.js";import"./svgIconContainer-BpxY4u4w.js";import"./small-cross-BrcFqK6e.js";import"./search-By7WOD0U.js";import"./cross-DUUoKIdp.js";import"./useValueChanged-C-aUTwRA.js";import"./getPseudoElementBounds-Bzb7fIgD.js";import"./CompositeItem-DXQI1LIg.js";import"./makeExternalStore-XDjeZ5H6.js";import"./BaseForm-Dtf4NskF.js";import"./ActionButton-B6gXvkdC.js";import"./Button-B8NZKNU8.js";import"./SkeletonBar-DTuV6I9E.js";import"./Tooltip-D-7EvLcH.js";import"./info-sign-C9MFyUBc.js";import"./chevron-up-Cgye0_GJ.js";import"./chevron-down-CZZTKstq.js";import"./useEventCallback-CQGtLwNK.js";import"./iconLoader-DMje3RiY.js";import"./Switch-yCelULAl.js";import"./CompositeRoot-CaO9yV7P.js";import"./TimePicker-DyQ-TZaY.js";import"./CollapsiblePanel-DYRFEvlw.js";import"./error-DLN9t7ZG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CoGkur03.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
