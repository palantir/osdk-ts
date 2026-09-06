import{j as t,g as n}from"./iframe-CPzX1uSk.js";import{A as r}from"./action-form-COXfSPyb.js";import"./preload-helper-BV_2dDRe.js";import"./DropdownField-CDKK8b_W.js";import"./debounce-DokDeayM.js";import"./useOsdkClient-C9BVIZ8E.js";import"./index-COJJFOT5.js";import"./Input-BcH8rlzt.js";import"./useBaseUiId-Dlz6RJMI.js";import"./useControlled-C6jvEykx.js";import"./index-bgG3RNaT.js";import"./index-Ce1oZCaV.js";import"./PopoverPopup-DsbqH6LM.js";import"./InternalBackdrop-ICDvYA-3.js";import"./composite-BpWI7eGy.js";import"./index-BFdAxWey.js";import"./getDisabledMountTransitionStyles-B_mC_X_B.js";import"./ToolbarRootContext-ddrpupWn.js";import"./tick-DiJrDoSw.js";import"./svgIconContainer-BUGQNNP_.js";import"./small-cross-7guhEJxW.js";import"./search-DbyDvw8l.js";import"./cross-CrQPe3Ah.js";import"./useValueChanged-BdmTJ_Td.js";import"./getPseudoElementBounds-Czhjand4.js";import"./CompositeItem-BddFvRMc.js";import"./makeExternalStore-DLgjxXB4.js";import"./BaseForm-B_ilGDuw.js";import"./ActionButton-ZZbDa446.js";import"./Button-Bp9aDI8N.js";import"./SkeletonBar-DscMDxVg.js";import"./Tooltip-DbjgG31A.js";import"./info-sign-QGpIHDR6.js";import"./chevron-up-D9jkfLmz.js";import"./chevron-down-C8Owk0H7.js";import"./useEventCallback-_Omzy9f1.js";import"./iconLoader-B20jXeFJ.js";import"./CompositeRoot-B3wdSVIR.js";import"./Switch-BvOaw401.js";import"./TimePicker-Buu8WXdV.js";import"./CollapsiblePanel-1OBlzHqi.js";import"./error-DwSWgrLn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-XJdj0BYd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
