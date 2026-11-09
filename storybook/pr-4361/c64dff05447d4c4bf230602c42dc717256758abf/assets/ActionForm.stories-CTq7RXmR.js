import{j as t,g as n}from"./iframe-D-NjJf8E.js";import{A as r}from"./action-form-CNSmCOEC.js";import"./preload-helper-CTOkYOfH.js";import"./DropdownField-B0llccFH.js";import"./debounce-6S1krlRt.js";import"./useOsdkClient-UvBflAyV.js";import"./index-BfNG9SBg.js";import"./Input-Djaz_ktk.js";import"./useBaseUiId-fJObIM_9.js";import"./useControlled-D1sspD4r.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./isObject-u4AYGR4g.js";import"./InternalBackdrop-Dr_1KZ7A.js";import"./composite-CYVlE3X-.js";import"./index-CQZ7ITuQ.js";import"./getDisabledMountTransitionStyles-9dZlZGXn.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./tick-C4vdjWJ1.js";import"./svgIconContainer-CGGP5dln.js";import"./small-cross-Bxoh9LLX.js";import"./search-CjsZbzMa.js";import"./cross-CeDP8iYL.js";import"./useValueChanged-BPlDHc58.js";import"./getPseudoElementBounds-CjUxBsGr.js";import"./CompositeItem-CnMema5w.js";import"./makeExternalStore-BW52Pv17.js";import"./BaseForm-4s-RstLW.js";import"./ActionButton-Ci63hB-4.js";import"./Button-B1_GO9AJ.js";import"./SkeletonBar-Bx9ZEMx9.js";import"./Tooltip-DvnHQmBq.js";import"./info-sign-DjmLoSSX.js";import"./chevron-up-BlCfNBDw.js";import"./chevron-down-C-c1FjW5.js";import"./useEventCallback-SSXm1pp5.js";import"./iconLoader-DB7ch0Pc.js";import"./Switch-HH92I2sP.js";import"./CompositeRoot-BRGD-0t1.js";import"./TimePicker-CQrt6EFL.js";import"./CollapsiblePanel-B43m-kWy.js";import"./error-BoBBM1re.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BLPi8trO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
