import{j as t,g as n}from"./iframe-B2s0ilwM.js";import{A as r}from"./action-form-Dxg6n6vy.js";import"./preload-helper-MMy8iX7M.js";import"./DropdownField-95SM7q8x.js";import"./debounce-CmkkVxIz.js";import"./useOsdkClient-leyOYd9w.js";import"./index-DUMP_Qp6.js";import"./Input-CjCyxjsG.js";import"./useBaseUiId-BVH4GIbN.js";import"./useControlled-C3oDg3XB.js";import"./index-mYTbhKt1.js";import"./index-DdqPMtaM.js";import"./PopoverPopup-CCpYUP6e.js";import"./InternalBackdrop-B-Ja5_xj.js";import"./composite-DFa6zY9f.js";import"./index-D509LBW8.js";import"./getDisabledMountTransitionStyles-Dmi_83d2.js";import"./ToolbarRootContext-DDaNMj4N.js";import"./tick-Bjc9CW2e.js";import"./svgIconContainer-DRCF-NHW.js";import"./small-cross-DUrl-Gxm.js";import"./search-De6MFVaz.js";import"./cross-DZSba9zk.js";import"./useValueChanged-B7ZJE4yn.js";import"./getPseudoElementBounds-DXFFzy9T.js";import"./CompositeItem-DNqREtRU.js";import"./makeExternalStore-D_KS_COu.js";import"./BaseForm-Dx0IoKxH.js";import"./ActionButton-COeBFnf1.js";import"./Button-Bnx37qOJ.js";import"./SkeletonBar-DIroCERZ.js";import"./Tooltip-CntzDWe4.js";import"./info-sign-DsfEmuh5.js";import"./chevron-up-B8XrsyrL.js";import"./chevron-down-CW4_yRhZ.js";import"./useEventCallback-CUt-4jCY.js";import"./iconLoader-Dsmgwbmh.js";import"./CompositeRoot-DAKn7CQy.js";import"./Switch-CQHaV5Nd.js";import"./TimePicker-CHr0thF2.js";import"./CollapsiblePanel-D6thvhNc.js";import"./error-DeXC2vVV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_SFwrj7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
