import{j as t,g as n}from"./iframe-DLHR6L4Z.js";import{A as r}from"./action-form-DuKGXuF2.js";import"./preload-helper-Dx-zoqBZ.js";import"./DropdownField-D6WaBAb7.js";import"./debounce-Cco9EZf3.js";import"./useOsdkClient-Ds4SzcYA.js";import"./index-Ci6l6bLg.js";import"./Input-DPBWJEz5.js";import"./useBaseUiId-1yQPi4Ok.js";import"./useControlled-CyfyjGCX.js";import"./index-Cty81kva.js";import"./index-qvggJvKY.js";import"./PopoverPopup-CUUPXvJN.js";import"./InternalBackdrop-B_WdIFN7.js";import"./composite-DufSPfDq.js";import"./index-BCQmOQno.js";import"./getDisabledMountTransitionStyles-C88-mCuq.js";import"./ToolbarRootContext-huk_G4xt.js";import"./tick-Dtw1ESRh.js";import"./svgIconContainer-OFY1tmQv.js";import"./small-cross-Coj1hZH_.js";import"./search-BKzV_clV.js";import"./cross-Dr9ey-no.js";import"./useValueChanged-BoDeFmnt.js";import"./getPseudoElementBounds-C4j2UgFA.js";import"./CompositeItem-Uc_jxWPR.js";import"./makeExternalStore-CGlrcfR1.js";import"./BaseForm-OrunldsQ.js";import"./ActionButton-JQl4ud6K.js";import"./Button-Bfsbp0Vn.js";import"./SkeletonBar-f-fkDeaw.js";import"./Tooltip-BYsQTzV_.js";import"./info-sign-DnYfRJl8.js";import"./chevron-up-CDsKfcLT.js";import"./chevron-down-CLyH651g.js";import"./useEventCallback-WBP10YPW.js";import"./iconLoader-C0uk1kLL.js";import"./CompositeRoot-BlNlniem.js";import"./Switch-CUVZrCt5.js";import"./TimePicker-DvR5Hw1w.js";import"./CollapsiblePanel-VYcA49X-.js";import"./error-CPzqX2rB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-s0w2F5xR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
