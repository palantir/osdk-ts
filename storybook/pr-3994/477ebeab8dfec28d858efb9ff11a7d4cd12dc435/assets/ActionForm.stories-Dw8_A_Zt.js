import{j as t,g as n}from"./iframe-CqpELHwS.js";import{A as r}from"./action-form-2Ihb144W.js";import"./preload-helper-DfJ58b8G.js";import"./DropdownField-D5sFpe7Y.js";import"./debounce-qnDwyFzV.js";import"./useOsdkClient-CHiIV34U.js";import"./index-BER4WQBS.js";import"./Input-B8oxxBH0.js";import"./useBaseUiId-CqI62Qpb.js";import"./useControlled-D7QaFiC3.js";import"./index-Cis59Sxl.js";import"./index-CcEEUUj6.js";import"./PopoverPopup-CJVmVuZk.js";import"./InternalBackdrop-K6p4ENHo.js";import"./composite-DOZwc2bc.js";import"./index-CKO26sQe.js";import"./getDisabledMountTransitionStyles-BuRkNMoJ.js";import"./ToolbarRootContext-uFYVc9Dk.js";import"./tick-DztBPc7i.js";import"./svgIconContainer-BTP1tkQ_.js";import"./small-cross-C-5iiC69.js";import"./search-D9m05WlM.js";import"./cross-u_0PEuYq.js";import"./useValueChanged-BLX9s3qf.js";import"./getPseudoElementBounds-B1CPQfJe.js";import"./CompositeItem-Du2CIA1V.js";import"./makeExternalStore-CUMLWxOP.js";import"./BaseForm-CbVrl0b0.js";import"./ActionButton-CLTSCNsY.js";import"./Button-DVcrv2BS.js";import"./SkeletonBar-Cm1tloZj.js";import"./Tooltip-A2o7ZLx2.js";import"./info-sign-BhHkx9ct.js";import"./chevron-up-5FHEdi_q.js";import"./chevron-down-CiPBsoDI.js";import"./useEventCallback-b_Kd5kWf.js";import"./iconLoader-CjbmhOmo.js";import"./CompositeRoot-Dszebl5m.js";import"./Switch-CZPR1mg5.js";import"./TimePicker-BFr5gIzc.js";import"./CollapsiblePanel-DPutPnXc.js";import"./error-jtHR9fDA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-lKot8ktS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
