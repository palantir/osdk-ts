import{j as t,g as n}from"./iframe-tTpw548-.js";import{A as r}from"./action-form-CrQ04hqj.js";import"./preload-helper-BfLQzAkp.js";import"./DropdownField-9NgabMek.js";import"./debounce-DfLNQaQZ.js";import"./useOsdkClient-DSnXFag8.js";import"./index-CfoC8y9T.js";import"./Input-HFN8Ab80.js";import"./useBaseUiId-CAQFrlAe.js";import"./useControlled-C7x4-FQ_.js";import"./index-BP7y8sZT.js";import"./index-D2O-B8gB.js";import"./PopoverPopup-C-VSahmb.js";import"./InternalBackdrop-_xAR7iPe.js";import"./composite-CJkTEPcI.js";import"./index-C8camuNF.js";import"./getDisabledMountTransitionStyles-BbmWSW2i.js";import"./ToolbarRootContext-CJ6qVhPJ.js";import"./tick-D3aN5WCZ.js";import"./svgIconContainer-T3TG2U7K.js";import"./small-cross-DlwKfIY_.js";import"./search-DermPgDt.js";import"./cross-CLKnrtat.js";import"./useValueChanged-DAHI-SPm.js";import"./getPseudoElementBounds-Bmi-Rz86.js";import"./CompositeItem-CCzTqTt9.js";import"./makeExternalStore-0aQuonQe.js";import"./BaseForm-7LhQ26pB.js";import"./ActionButton-cg61E8o3.js";import"./Button-GJuyUH0v.js";import"./SkeletonBar-Ba6ZiQYs.js";import"./Tooltip-D0gUYvNC.js";import"./info-sign-0uOkd0Qs.js";import"./chevron-up-CyHxY_di.js";import"./chevron-down-EEhO5M0S.js";import"./useEventCallback-1ybuVTus.js";import"./iconLoader-DFb28jqT.js";import"./Switch-BFs_8nEQ.js";import"./CompositeRoot-CdUL1vQ-.js";import"./TimePicker-BYMgkBAQ.js";import"./CollapsiblePanel-C5C_WUGb.js";import"./error-DVgq5BdO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMDExHtI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
