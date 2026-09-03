import{j as t,g as n}from"./iframe-C-b6oTOJ.js";import{A as r}from"./action-form-C0_j7ctH.js";import"./preload-helper-BeH59gqJ.js";import"./DropdownField-D6Tax7Nm.js";import"./debounce-CeZCgghX.js";import"./useOsdkClient-CHwnoSo5.js";import"./index-DE1s0YYF.js";import"./Input-BSxN1vwO.js";import"./useBaseUiId-CkMODpS3.js";import"./useControlled-g-pxj8O4.js";import"./index-0ZNUZbhg.js";import"./index-BVjVMQ97.js";import"./PopoverPopup-BNW8X69h.js";import"./InternalBackdrop-D6TYY50X.js";import"./composite-4UqYDIuK.js";import"./index-B6prnO72.js";import"./getDisabledMountTransitionStyles-ByMCPo6h.js";import"./ToolbarRootContext-D9YuleTy.js";import"./tick-C3AZ4-vL.js";import"./svgIconContainer-OHRV30Tv.js";import"./small-cross-D4a9Ho69.js";import"./search-JVftW7k-.js";import"./cross-CHQB6uFl.js";import"./useValueChanged-y611DxC1.js";import"./getPseudoElementBounds-YS_9JBeN.js";import"./CompositeItem-BEGPA2jt.js";import"./makeExternalStore-B_SxmnOK.js";import"./BaseForm-BX_-3GwC.js";import"./ActionButton-lKHVmnzU.js";import"./Button-CV_yYG-R.js";import"./SkeletonBar-CdIYyEwK.js";import"./Tooltip-DHzhDEF7.js";import"./info-sign-BrkIKzys.js";import"./chevron-up-BOSh8gY-.js";import"./chevron-down-D7cmGpd4.js";import"./useEventCallback-f02sUdqz.js";import"./iconLoader-CKTH78fZ.js";import"./CompositeRoot-By7QrvDw.js";import"./Switch-nywEflDl.js";import"./TimePicker-B2Sm76eo.js";import"./CollapsiblePanel-DFf461j6.js";import"./error-ByhaKTr1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BrJ-pBLm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
