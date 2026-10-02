import{j as t,g as n}from"./iframe-hU9JLApV.js";import{A as r}from"./action-form-DOj0yj_j.js";import"./preload-helper-AOIAtsF4.js";import"./DropdownField-DSjeR55H.js";import"./debounce-DmZrR2IV.js";import"./useOsdkClient-BPIKz5PZ.js";import"./index-hWpPzCns.js";import"./Input-BRXbodNm.js";import"./useBaseUiId-D4EPdJVo.js";import"./useControlled-Ee3F40Eh.js";import"./index-B1eIq1Hb.js";import"./index-DQGyJzH9.js";import"./PopoverPopup-DNRoc5pz.js";import"./InternalBackdrop-DvZB-fzK.js";import"./composite-CG9ZuuKA.js";import"./index-DbLRwfYB.js";import"./getDisabledMountTransitionStyles-WyR546rw.js";import"./ToolbarRootContext-CBnaAJo0.js";import"./tick-BovZGh7I.js";import"./svgIconContainer-C2qhBo7T.js";import"./small-cross-D-LS-vPt.js";import"./search-B_1m1rLM.js";import"./cross-B2QeVIfm.js";import"./useValueChanged-ChtPqi2-.js";import"./getPseudoElementBounds-DToXqBfP.js";import"./CompositeItem-D6B-PBPX.js";import"./makeExternalStore-DI5XEFVo.js";import"./BaseForm-gZddMWAY.js";import"./ActionButton-0n8OLKNq.js";import"./Button-DajEVgZJ.js";import"./SkeletonBar-WjiSPHnz.js";import"./Tooltip-CunLwW9k.js";import"./info-sign-CijM1I3_.js";import"./chevron-up-D0o9u8ZK.js";import"./chevron-down--KZfqGJl.js";import"./useEventCallback-XLlsNp-i.js";import"./iconLoader-DHwED747.js";import"./Switch-s2_bczc9.js";import"./CompositeRoot-BkcZDV_2.js";import"./TimePicker-Bt9RgwAN.js";import"./CollapsiblePanel-Bs_-I03G.js";import"./error-C7_JEIae.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D81YUmhb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
