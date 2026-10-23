import{j as t,g as n}from"./iframe-DH1LfSqj.js";import{A as r}from"./action-form-MRhajlum.js";import"./preload-helper-BtNGdpdU.js";import"./DropdownField-C9gy_Wgf.js";import"./debounce-B4GI_Apd.js";import"./useOsdkClient-DN4s-WbE.js";import"./index-BwVz3K80.js";import"./Input-BbVzkVzZ.js";import"./useBaseUiId-CW3AoQkf.js";import"./useControlled-DAJs0K9A.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./PopoverPopup-C1WEOJ_A.js";import"./InternalBackdrop-DD_xzXOG.js";import"./composite-DB-jEcsY.js";import"./index-BQpuPn_O.js";import"./getDisabledMountTransitionStyles-Dwh5nb5R.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./tick-BIbnl7xY.js";import"./svgIconContainer-GysfdOnF.js";import"./small-cross-AKv-8hHD.js";import"./search-Cf7xLzNe.js";import"./cross-CVAZ1iFx.js";import"./useValueChanged-D1k7g2Vp.js";import"./getPseudoElementBounds-DTVu78U6.js";import"./CompositeItem-ty0jR14S.js";import"./makeExternalStore-fduFP-zO.js";import"./BaseForm-DFGYuWkG.js";import"./ActionButton-DAhEk0oH.js";import"./Button-CC_D7kUc.js";import"./SkeletonBar-Blb2KjQc.js";import"./Tooltip-CZY4h-1t.js";import"./info-sign-BrsrlP5d.js";import"./chevron-up-sEvUKmM2.js";import"./chevron-down-BcIj0xVN.js";import"./useEventCallback-B1T6-Dk0.js";import"./iconLoader-C5vTN7Pt.js";import"./Switch-DdZoQNnD.js";import"./CompositeRoot-wx-Cg1Fn.js";import"./TimePicker-nWDR6ZSX.js";import"./CollapsiblePanel-CGVC2bAM.js";import"./error-CvpqdC3I.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CkK0GNNa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
