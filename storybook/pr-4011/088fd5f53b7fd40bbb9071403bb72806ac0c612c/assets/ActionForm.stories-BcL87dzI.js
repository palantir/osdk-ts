import{j as t,g as n}from"./iframe-Cjq1ziW_.js";import{A as r}from"./action-form-C6wLe6Hy.js";import"./preload-helper-Bu64T0VB.js";import"./DropdownField-Bw_qvOxg.js";import"./debounce-CGyXk-2p.js";import"./useOsdkClient-D16wWo5-.js";import"./index-DYLMtBRZ.js";import"./Input-CltcJXck.js";import"./useBaseUiId-BOmEy4R4.js";import"./useControlled-B86_FVha.js";import"./index-jdj57Z6r.js";import"./index-BNrT0csI.js";import"./PopoverPopup-DmxPEDNt.js";import"./InternalBackdrop-DVWahY-J.js";import"./composite-DKerRgJC.js";import"./index-B4fNfQ4Q.js";import"./getDisabledMountTransitionStyles-Dcwh1Csu.js";import"./ToolbarRootContext-D9vPb_4g.js";import"./tick-B9mB2gxh.js";import"./svgIconContainer-eE0nci6v.js";import"./small-cross-DpmUsxoH.js";import"./search-CW8m2x0D.js";import"./cross-5C9tDAb9.js";import"./useValueChanged-Dp6WnvdX.js";import"./getPseudoElementBounds-DZitm35h.js";import"./CompositeItem-BkoI9BcF.js";import"./makeExternalStore-MDXzkZI-.js";import"./BaseForm-C6D_z3UB.js";import"./ActionButton-Bkt5pjan.js";import"./Button-Sk9sqn-x.js";import"./SkeletonBar-CxWNqWqz.js";import"./Tooltip-BbVYH3II.js";import"./info-sign-DBE4zYvA.js";import"./chevron-up-ClXPyH22.js";import"./chevron-down-BLZAfqaw.js";import"./useEventCallback-hAeTEmUL.js";import"./iconLoader-Cs2CmFFL.js";import"./CompositeRoot-j31OUz-s.js";import"./Switch-BJLFYFlt.js";import"./TimePicker-CDVyIyxY.js";import"./CollapsiblePanel-DZj9a81F.js";import"./error-BTbs61-N.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DX_450NL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
