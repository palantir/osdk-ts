import{j as t,g as n}from"./iframe-9OpC_N8y.js";import{A as r}from"./action-form-jW-Ur5kO.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-D6KYcCTh.js";import"./debounce-CUmYTyYO.js";import"./useOsdkClient-nTvUHUDa.js";import"./index-DSxditmY.js";import"./Input-22pjcFCD.js";import"./useBaseUiId-DBqP-0QL.js";import"./useControlled-B9BwmRqN.js";import"./index-BYheStGz.js";import"./index-BWMAAzDl.js";import"./PopoverPopup-y0Wo_ssq.js";import"./InternalBackdrop-CpFIES9m.js";import"./composite-CrXso5kT.js";import"./index-OPaHrZDF.js";import"./getDisabledMountTransitionStyles-DmxHVaGO.js";import"./ToolbarRootContext-D8Su1VOS.js";import"./tick-CTciLGmY.js";import"./svgIconContainer-oJMft6mx.js";import"./small-cross-CDqdsFm-.js";import"./search-TnHR6DGv.js";import"./cross-BfZJOFYH.js";import"./useValueChanged-hzDLPvi0.js";import"./getPseudoElementBounds-DWUvgXva.js";import"./CompositeItem-BQvPBjhd.js";import"./makeExternalStore-Dcb2I-X9.js";import"./BaseForm-DFEqmQHa.js";import"./ActionButton-FY_WWuvt.js";import"./Button-CEDTBjQ9.js";import"./SkeletonBar-O0q8dBq8.js";import"./Tooltip-BSdinWV1.js";import"./info-sign-B_q2tqOr.js";import"./chevron-up-Bp1xpvGi.js";import"./chevron-down-DRK_INXA.js";import"./useEventCallback-CZw_6uow.js";import"./iconLoader-C3ZV9tnu.js";import"./CompositeRoot-48755dZU.js";import"./Switch-B_25FUTM.js";import"./TimePicker-C_ITMR3B.js";import"./CollapsiblePanel-ACU3l7Tu.js";import"./error-BFjtkE9z.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMtD0lPR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
