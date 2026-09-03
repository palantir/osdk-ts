import{j as t,g as n}from"./iframe-DfNFuvd8.js";import{A as r}from"./action-form-D5BRiXp9.js";import"./preload-helper-B2A7KixS.js";import"./DropdownField-Bzzr4tIT.js";import"./debounce-R5M_pHII.js";import"./useOsdkClient-DrnSR9t9.js";import"./index-hJ034l85.js";import"./Input-DQxNJVQ9.js";import"./useBaseUiId-Bo6GSES5.js";import"./useControlled-P4f8RlVJ.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./PopoverPopup-YOckH7SE.js";import"./InternalBackdrop-C_nhbKJU.js";import"./composite-D6AWaxnU.js";import"./index-DiD4EhSO.js";import"./getDisabledMountTransitionStyles-BIM2Nojc.js";import"./ToolbarRootContext-BppEIMJO.js";import"./tick-zr2mL_AY.js";import"./svgIconContainer-B6TYwpfX.js";import"./small-cross-BYYoKwWX.js";import"./search-C0uD-Uv6.js";import"./cross-CBZgOvDJ.js";import"./useValueChanged-wyGRNMGl.js";import"./getPseudoElementBounds-DNQ_Lyqg.js";import"./CompositeItem-C2W2AWaC.js";import"./makeExternalStore-DLzSgHee.js";import"./BaseForm-DWFLM0Um.js";import"./ActionButton-JQL18lz7.js";import"./Button-BqZDxH8m.js";import"./SkeletonBar-CegOdRAd.js";import"./Tooltip-CDXk7Z_Y.js";import"./info-sign-DFgs2Fv5.js";import"./chevron-up-DPk2RPjn.js";import"./chevron-down-C8YJ1kBl.js";import"./useEventCallback-RjnLJur2.js";import"./iconLoader-U-2V_v-o.js";import"./CompositeRoot-SfYs0Up-.js";import"./Switch-D_UQZ28a.js";import"./TimePicker-J4YY0Ytn.js";import"./CollapsiblePanel-DRB_PNPV.js";import"./error-ThwmBgve.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJRcI3lK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
