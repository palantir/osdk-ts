import{j as t,g as n}from"./iframe-C1SMXjUe.js";import{A as r}from"./action-form-BjflGETW.js";import"./preload-helper-O4cQ6S71.js";import"./DropdownField-DRlqW65z.js";import"./debounce-BU3TwIzE.js";import"./useOsdkClient-DQjFnF1a.js";import"./index-DN_SN9-G.js";import"./Input-57O56G_v.js";import"./useBaseUiId-BuIqgK5v.js";import"./useControlled-BZtQiYd3.js";import"./index-08DpGPSx.js";import"./index-19ONWP9f.js";import"./PopoverPopup-DWuA0PEL.js";import"./InternalBackdrop-CwUkjFDV.js";import"./composite-sNamXEmM.js";import"./index-Be0DvM55.js";import"./getDisabledMountTransitionStyles-B57QkLv0.js";import"./ToolbarRootContext-BEFeXo6R.js";import"./tick-C1BZKfVK.js";import"./svgIconContainer-BDoLcvXV.js";import"./small-cross-dpYlCU3i.js";import"./search-DnJjsxnU.js";import"./cross-D7uSPFjO.js";import"./useValueChanged-CTxxu7jt.js";import"./getPseudoElementBounds-DSbpx7o5.js";import"./CompositeItem-BJrPEqdr.js";import"./makeExternalStore-wdj16MKs.js";import"./BaseForm-B9VT-FRL.js";import"./ActionButton-CmH_f-Jn.js";import"./Button-Bfn1HbBL.js";import"./SkeletonBar-DxEb7MhI.js";import"./Tooltip-CqhWgQKj.js";import"./info-sign-DoOyrqbv.js";import"./chevron-up-B6MAmjy7.js";import"./chevron-down-BPj-14kw.js";import"./useEventCallback-BG06jL1K.js";import"./iconLoader-CL7iorV2.js";import"./Switch-D7baJkd_.js";import"./CompositeRoot-DI0Ox4Zb.js";import"./TimePicker-CYpfDZKQ.js";import"./CollapsiblePanel-DItfM1Rh.js";import"./error-Ck-1b3_a.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CARHbXxz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
