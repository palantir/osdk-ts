import{j as t,g as n}from"./iframe-uT48rLM_.js";import{A as r}from"./action-form-BTtl4juW.js";import"./preload-helper-yoQuylqU.js";import"./DropdownField-BTmtksts.js";import"./debounce-BNAPXfSi.js";import"./useOsdkClient-DFYM3hyp.js";import"./index-CSvzskdp.js";import"./Input-CQKdcBRU.js";import"./useBaseUiId-9T64UX1j.js";import"./useControlled-DuOdWxX8.js";import"./index-5wHFC5Fm.js";import"./index-BEQpnWE2.js";import"./PopoverPopup-_zY_9-mc.js";import"./InternalBackdrop-B72hZeRt.js";import"./composite-DezEwUvA.js";import"./index-B1GAZ9iL.js";import"./getDisabledMountTransitionStyles-CluzbFfS.js";import"./ToolbarRootContext-DjYPc8nU.js";import"./tick-CU7R8lm8.js";import"./svgIconContainer-p9hJC-XV.js";import"./small-cross-CisrNWlM.js";import"./search-DQlds2Tm.js";import"./cross-Bjaf7ehU.js";import"./useValueChanged-znQA4Tbz.js";import"./getPseudoElementBounds-C4USjkgg.js";import"./CompositeItem-BxuJPWc4.js";import"./makeExternalStore-DTuIZdzn.js";import"./BaseForm-COPAQjdo.js";import"./ActionButton-7h418o9p.js";import"./Button-C6gEU1e5.js";import"./SkeletonBar-oqZO1ZHs.js";import"./Tooltip-DQOQ2Q12.js";import"./info-sign-CrvK20x2.js";import"./chevron-up-BRo5l_MN.js";import"./chevron-down-DEgdTzUt.js";import"./useEventCallback-Df-FKJT2.js";import"./iconLoader-fIL3x3K0.js";import"./CompositeRoot-qzyXS7ra.js";import"./Switch-BxqSh5Bh.js";import"./TimePicker-CoKUFtj0.js";import"./CollapsiblePanel-CF6AHuns.js";import"./error-BQiQ2GDM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-zU8fQ91E.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
