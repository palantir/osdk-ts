import{j as t,g as n}from"./iframe-nukQkA9I.js";import{A as r}from"./action-form-CMHM3YCF.js";import"./preload-helper-SAYG1EIe.js";import"./DropdownField-DOfjncwG.js";import"./debounce-DVmJRHR5.js";import"./useOsdkClient-DiA-yxQE.js";import"./index-D-GlitYq.js";import"./Input-BpkcbvD3.js";import"./useBaseUiId-DDz0NCTS.js";import"./useControlled-CCaNPmgV.js";import"./index-C3FqsozF.js";import"./index-BNEnQN8B.js";import"./PopoverPopup-ZbVHJ-GH.js";import"./InternalBackdrop-a-wOXysB.js";import"./composite-C4ibImfR.js";import"./index-DB5tfdIB.js";import"./getDisabledMountTransitionStyles-DDgFSqxd.js";import"./ToolbarRootContext-fpQvlLhR.js";import"./tick-y2AICyxl.js";import"./svgIconContainer-BRLU7q7E.js";import"./small-cross-Djgqv-i1.js";import"./search-DU9QOFIa.js";import"./cross-AUKdXd6S.js";import"./useValueChanged-ChdRJ_58.js";import"./getPseudoElementBounds-m5PwG0QT.js";import"./CompositeItem-FfzK-6cQ.js";import"./makeExternalStore-BULRIBYo.js";import"./BaseForm-DvU27W5i.js";import"./ActionButton-CRB-SEkc.js";import"./Button-DH7_1I4V.js";import"./SkeletonBar-Bo4glzOY.js";import"./Tooltip-B7VRWvgf.js";import"./info-sign-F1eS_x9H.js";import"./chevron-up-7_oGliCJ.js";import"./chevron-down-A-s4tptO.js";import"./useEventCallback-D6wC1Sto.js";import"./iconLoader-DxgoXSbF.js";import"./Switch-D6t5wFpO.js";import"./CompositeRoot-DZYY8Zax.js";import"./TimePicker-BcOXU6Ej.js";import"./CollapsiblePanel-Cjaojbm_.js";import"./error-Btym7AAe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics--rpBEpu9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
