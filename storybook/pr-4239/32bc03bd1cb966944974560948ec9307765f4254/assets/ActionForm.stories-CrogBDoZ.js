import{j as t,g as n}from"./iframe-DexdKsaQ.js";import{A as r}from"./action-form-_68eM9fB.js";import"./preload-helper-C3HMhfxy.js";import"./DropdownField-BSrXQuo_.js";import"./debounce-B6TRsFCS.js";import"./useOsdkClient-mkKseWzk.js";import"./index-CbLEfBq5.js";import"./Input-BuDuHwVf.js";import"./useBaseUiId-sMlbFyJU.js";import"./useControlled-DJ_HdD9M.js";import"./index-BqerP4CK.js";import"./index-__d1p36X.js";import"./PopoverPopup-Bl0JUMbC.js";import"./InternalBackdrop-AGxJgsS7.js";import"./composite-BciPM06w.js";import"./index-DRMwbFJm.js";import"./getDisabledMountTransitionStyles-ux2ze1bo.js";import"./ToolbarRootContext-B4sm5nDg.js";import"./tick-D75lzxtW.js";import"./svgIconContainer-BRMcYWO4.js";import"./small-cross-CDaXIpxf.js";import"./search-DTk97rWq.js";import"./cross-D_rqjJ8K.js";import"./useValueChanged-CrQ7wcWr.js";import"./getPseudoElementBounds-B3DGHAsz.js";import"./CompositeItem-UFfjwpOD.js";import"./makeExternalStore-CGnJLW95.js";import"./BaseForm-CUdRF_eC.js";import"./ActionButton-5jPmd7jR.js";import"./Button-Cpyi3piv.js";import"./SkeletonBar-CTo2vf2l.js";import"./Tooltip-CXPRVM-4.js";import"./info-sign-BJHwsR2y.js";import"./chevron-up-D547l_N5.js";import"./chevron-down-CPG2b4DG.js";import"./useEventCallback-00FuE3yt.js";import"./iconLoader-DGX7oVmo.js";import"./Switch-DvDuaaa9.js";import"./CompositeRoot-uVOtHN8V.js";import"./TimePicker-BYP9EQU4.js";import"./CollapsiblePanel-gO76M-DU.js";import"./error-mWFE-E3g.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DPD_IOvo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
