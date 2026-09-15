import{j as t,g as n}from"./iframe-DX9GTmTS.js";import{A as r}from"./action-form-Bd4R0FNl.js";import"./preload-helper-BJHRWIj0.js";import"./DropdownField-DaWEyCui.js";import"./debounce-BubrlkRY.js";import"./useOsdkClient-C1e-iWGi.js";import"./index-qD7KPbHv.js";import"./Input-D3jwcYVb.js";import"./useBaseUiId-LIEARN9F.js";import"./useControlled-Bbq2I_dd.js";import"./index-D6AHn8lU.js";import"./index-BFmznvox.js";import"./PopoverPopup-DtfiGPFv.js";import"./InternalBackdrop-DXzjiCbf.js";import"./composite-YtQb8O1c.js";import"./index-BI0-O9XB.js";import"./getDisabledMountTransitionStyles-aiGqPhBD.js";import"./ToolbarRootContext-HucsP966.js";import"./tick-BfAQ_n_q.js";import"./svgIconContainer-DiXmcE79.js";import"./small-cross-99puV05O.js";import"./search-CpS_oLmz.js";import"./cross-CnnW3pn0.js";import"./useValueChanged-xT7sW3-e.js";import"./getPseudoElementBounds-fJ1HXQTt.js";import"./CompositeItem-CDg-ghY6.js";import"./makeExternalStore-ChFrK0L7.js";import"./BaseForm-DfhtRlnW.js";import"./ActionButton-CUYGPjpl.js";import"./Button-B-xJiokr.js";import"./SkeletonBar-zzijKBDR.js";import"./Tooltip-Ba8TKTH9.js";import"./info-sign-By-nLsAD.js";import"./chevron-up-CHv3hu-4.js";import"./chevron-down-DasCvZc6.js";import"./useEventCallback-Dz7-lFnn.js";import"./iconLoader-CyXIUImv.js";import"./CompositeRoot-Bv91Ukc9.js";import"./Switch-BF2CwWYU.js";import"./TimePicker-C8tDbitc.js";import"./CollapsiblePanel-BILO_2dF.js";import"./error-BLx5cAN8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CVU4RfbR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
