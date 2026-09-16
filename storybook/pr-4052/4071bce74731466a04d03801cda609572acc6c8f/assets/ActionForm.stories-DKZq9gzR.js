import{j as t,g as n}from"./iframe-CWKtkIUB.js";import{A as r}from"./action-form-3OXCbVQ2.js";import"./preload-helper-ipGJxtLm.js";import"./DropdownField-KGWqFfVd.js";import"./debounce-D1aK-pGn.js";import"./useOsdkClient-u9q269DO.js";import"./index-DmJxPlh_.js";import"./Input-CX60mJQX.js";import"./useBaseUiId-B8eULTI6.js";import"./useControlled-BMMn65Nk.js";import"./index-Pd0hKwBH.js";import"./index-CDK29Ulj.js";import"./PopoverPopup-D7gPsbnN.js";import"./InternalBackdrop-DGmr5HTr.js";import"./composite-CLrQ0Pw0.js";import"./index-B7xDDX9i.js";import"./getDisabledMountTransitionStyles-B3rYUkCj.js";import"./ToolbarRootContext-DoNt8TAQ.js";import"./tick-c3wuZ6gm.js";import"./svgIconContainer-CNCTNhPA.js";import"./small-cross-BACObYvZ.js";import"./search-D674kfs0.js";import"./cross-DEu5gm-s.js";import"./useValueChanged-C5pU5icH.js";import"./getPseudoElementBounds-W7L9XS3F.js";import"./CompositeItem-C2bCi6DR.js";import"./makeExternalStore-Cwu6Hqp2.js";import"./BaseForm-CaZmDlmb.js";import"./ActionButton-BoSuUP-h.js";import"./Button-BfO_B2Gb.js";import"./SkeletonBar-loAgoXS5.js";import"./Tooltip-BPBtSQy6.js";import"./info-sign-DgYNAgGk.js";import"./chevron-up-CZyGwcyD.js";import"./chevron-down-lIwS08X8.js";import"./useEventCallback-CiKQuPHs.js";import"./iconLoader-BV2saQUI.js";import"./Switch-E6XoQMZV.js";import"./CompositeRoot-DRcrL8-B.js";import"./TimePicker-Dcer03zr.js";import"./CollapsiblePanel-wQjTDLAh.js";import"./error-y4GKwRxO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LG6-R3uz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
