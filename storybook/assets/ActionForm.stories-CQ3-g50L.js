import{j as t,g as n}from"./iframe-CwHoXHUu.js";import{A as r}from"./action-form-C5nCGen-.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-D6wICRIR.js";import"./debounce-BaLd07FW.js";import"./useOsdkClient-Cq22Qxjo.js";import"./index-CZaeEK6I.js";import"./Input-D4zseZIs.js";import"./useBaseUiId-BPVfLfjX.js";import"./useControlled-Hry_0x1f.js";import"./index-Cd6vbhvO.js";import"./index-CfA2Hd3H.js";import"./isObject-7iDi-x5O.js";import"./InternalBackdrop-Dp6bA82H.js";import"./composite-DnjWTUQ2.js";import"./index-UD_bptXF.js";import"./getDisabledMountTransitionStyles-zi3Kz6H3.js";import"./ToolbarRootContext-Dnc8VcDU.js";import"./tick-_yHnD8nP.js";import"./svgIconContainer-CCqCSEPy.js";import"./small-cross-hTe5W9lf.js";import"./search-DFG6yLeC.js";import"./cross-CbSe3IA2.js";import"./useValueChanged-Bts0Uq_N.js";import"./getPseudoElementBounds-BZ16Xjo9.js";import"./CompositeItem-D5ZABXe5.js";import"./makeExternalStore-BVBAkPec.js";import"./BaseForm-CWmDY6j2.js";import"./ActionButton-o9bSj-37.js";import"./Button-h45Z6oL5.js";import"./SkeletonBar-BPg1Fkjv.js";import"./Tooltip-CbRVkG8d.js";import"./info-sign-C_sVAngy.js";import"./chevron-up-CbYH3cwH.js";import"./chevron-down-CJ7ExT0D.js";import"./useEventCallback-ANOYlLcV.js";import"./iconLoader-9iIHxJPz.js";import"./Switch-B7xCQW3i.js";import"./CompositeRoot-BGFrm1ka.js";import"./TimePicker-Dzw6423C.js";import"./CollapsiblePanel-BF_hIS1Q.js";import"./error-fdiT2-40.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3UK9v4M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
