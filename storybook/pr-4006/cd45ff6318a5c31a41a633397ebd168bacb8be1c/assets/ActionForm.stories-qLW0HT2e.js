import{j as t,g as n}from"./iframe-BUTeW6Ke.js";import{A as r}from"./action-form-BB8zqz1H.js";import"./preload-helper-CQT66xGm.js";import"./DropdownField-Cm4jpBrK.js";import"./debounce-DejzhDtV.js";import"./useOsdkClient-DzVNAXf5.js";import"./index-D0KjrmAk.js";import"./Input-DMsfofkB.js";import"./useBaseUiId-DKH5yAyq.js";import"./useControlled-BR0Jp6X7.js";import"./index-BZYkF7jv.js";import"./index-CK156m23.js";import"./PopoverPopup-hdVmfLzZ.js";import"./InternalBackdrop-BJFIyjvY.js";import"./composite-By0Jq-F3.js";import"./index-I-Ka0MoY.js";import"./getDisabledMountTransitionStyles-LOuwySdb.js";import"./ToolbarRootContext-ByyEnW8P.js";import"./tick-CCKb6vG9.js";import"./svgIconContainer-B9NI5uFH.js";import"./small-cross-CujZxCc8.js";import"./search-B5UpA2gd.js";import"./cross-DBYUdge9.js";import"./useValueChanged-BcTLslwE.js";import"./getPseudoElementBounds-DDbKOR-k.js";import"./CompositeItem-g-Qz-xCN.js";import"./makeExternalStore-DsqUkO_T.js";import"./BaseForm-CBPXujeJ.js";import"./ActionButton-Bl9M4qvT.js";import"./Button-B9aFxizM.js";import"./SkeletonBar-C8ESHQO6.js";import"./Tooltip-DaEaPpGd.js";import"./info-sign-IQA5PqA0.js";import"./chevron-up-rKHD2hHk.js";import"./chevron-down-vn_j_zw5.js";import"./useEventCallback-BatYVPf8.js";import"./iconLoader-DYVjGcgc.js";import"./CompositeRoot-CFGeciRu.js";import"./Switch-BTpYKZsr.js";import"./TimePicker-DD-zECjq.js";import"./CollapsiblePanel-6SzXO-cz.js";import"./error-CJcI6CJg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dgk1QvO0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
