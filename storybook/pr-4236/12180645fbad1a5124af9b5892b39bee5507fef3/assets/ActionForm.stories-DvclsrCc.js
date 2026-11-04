import{j as t,g as n}from"./iframe-C-_1TazU.js";import{A as r}from"./action-form-BArQnOWy.js";import"./preload-helper-CkKF1Buf.js";import"./DropdownField-C3zSIjmP.js";import"./debounce-BZOoCBd7.js";import"./useOsdkClient-cVvbHq8H.js";import"./index-Bpncd7pQ.js";import"./Input-CRdjsgvE.js";import"./useBaseUiId-_AW1QpO6.js";import"./useControlled-B0TcQP9p.js";import"./index-BubkWFVt.js";import"./index-CMC--zdt.js";import"./PopoverPopup-BRmr0_XW.js";import"./InternalBackdrop-C5_BMHIb.js";import"./composite-Dz3hbzMM.js";import"./index-90cPmaM8.js";import"./getDisabledMountTransitionStyles-Drv-bm06.js";import"./ToolbarRootContext-DKRIHX6q.js";import"./tick-qWt9TM4D.js";import"./svgIconContainer-CMraZsuF.js";import"./small-cross-CJnmFJ9d.js";import"./search-Brf_HBSH.js";import"./cross-C4V96JZV.js";import"./useValueChanged-APgIOvq6.js";import"./getPseudoElementBounds-B3bHIS4L.js";import"./CompositeItem-CUiyh8KX.js";import"./makeExternalStore-Bt0DPf8S.js";import"./BaseForm-CdY71ICF.js";import"./ActionButton-4JN5WqHj.js";import"./Button-3Z_BNFpX.js";import"./SkeletonBar-BNfm8GyJ.js";import"./Tooltip-CC5f6fsc.js";import"./info-sign-Dwe9N-PW.js";import"./chevron-up-BY-Dd_yL.js";import"./chevron-down-C9eSOQPA.js";import"./useEventCallback-D70YOU97.js";import"./iconLoader-PjcgA_q3.js";import"./Switch-DXb--Ex1.js";import"./CompositeRoot-k6cvQfJg.js";import"./TimePicker-Cg99ciPZ.js";import"./CollapsiblePanel-BH9UnnpL.js";import"./error-Bm-o3dV9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DfOFosKa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
