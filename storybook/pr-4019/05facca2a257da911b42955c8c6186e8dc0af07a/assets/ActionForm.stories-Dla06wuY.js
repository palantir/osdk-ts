import{j as t,g as n}from"./iframe-fw03FCk5.js";import{A as r}from"./action-form-BKhvCyZ2.js";import"./preload-helper-P9E4Gy6I.js";import"./DropdownField-BI32TYx-.js";import"./debounce-Uta78yLR.js";import"./useOsdkClient-bVTcwCG3.js";import"./index-cLbCIlyy.js";import"./Input-Cr_VCQb2.js";import"./useBaseUiId-R4A3P2Wz.js";import"./useControlled-Bwl7RhM1.js";import"./index-DFgmoBbG.js";import"./index-DZcROz4y.js";import"./PopoverPopup-OHXCDTwv.js";import"./InternalBackdrop-B4CFFx_T.js";import"./composite-D_MYaedS.js";import"./index-C60tKhQE.js";import"./getDisabledMountTransitionStyles-Bz-DeKbz.js";import"./ToolbarRootContext-BkWOeIIg.js";import"./tick-R2G1Vx7E.js";import"./svgIconContainer-DTMIi6B0.js";import"./small-cross-BquVTguM.js";import"./search-6gQRaMIj.js";import"./cross-Cwm_6W5t.js";import"./useValueChanged-CG3lqo2r.js";import"./getPseudoElementBounds-D0KG0Y6V.js";import"./CompositeItem-BsCKjv-0.js";import"./makeExternalStore-Bmm8rP_V.js";import"./BaseForm-BdSG3UM7.js";import"./ActionButton-YSM36rBh.js";import"./Button-B6XGTdgm.js";import"./SkeletonBar-CLswlhKR.js";import"./Tooltip-CcSsRqls.js";import"./info-sign-DL3ltRnr.js";import"./chevron-up-DTJm_c-W.js";import"./chevron-down-CoqXE8sv.js";import"./useEventCallback-DP4IinGV.js";import"./iconLoader-Blm5MfLZ.js";import"./CompositeRoot-B_DyJufq.js";import"./Switch-ChH-_dU0.js";import"./TimePicker-CzhcPpfa.js";import"./CollapsiblePanel-BSUAw99t.js";import"./error-Dfv9QpfZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DxwGMBTH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
