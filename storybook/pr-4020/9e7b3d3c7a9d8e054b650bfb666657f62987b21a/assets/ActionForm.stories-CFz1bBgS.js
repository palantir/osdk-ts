import{j as t,g as n}from"./iframe-FtcUBUVc.js";import{A as r}from"./action-form-BJXSqlnT.js";import"./preload-helper-C1DqyS6M.js";import"./DropdownField-BOsCn1Qx.js";import"./debounce-CZPjIx0M.js";import"./useOsdkClient-BzBjGJN-.js";import"./index-BrOlmJ2Z.js";import"./Input-ByVchIyr.js";import"./useBaseUiId-CE5itc9W.js";import"./useControlled-DyZru4zO.js";import"./index-D40iZtqR.js";import"./index-DEH9dzt7.js";import"./PopoverPopup-mGK6D3QU.js";import"./InternalBackdrop-CIZ6_1M7.js";import"./composite-7rmuBxl6.js";import"./index-DoRBg5ik.js";import"./getDisabledMountTransitionStyles-o44LTai8.js";import"./ToolbarRootContext-C1QQQlr9.js";import"./tick-BVYtpY6h.js";import"./svgIconContainer-N_OtDM-z.js";import"./small-cross-BOnfyvVq.js";import"./search-dRD30Vx4.js";import"./cross-CzxFF0QG.js";import"./useValueChanged-B76qlGnm.js";import"./getPseudoElementBounds-Cn7KCI-8.js";import"./CompositeItem-CnrRuFeY.js";import"./makeExternalStore-_r-qOFy4.js";import"./BaseForm-DaARU24l.js";import"./ActionButton-DEqbbTdP.js";import"./Button-GQVi1do4.js";import"./SkeletonBar-U4JWfogU.js";import"./Tooltip-B0wu6hL7.js";import"./info-sign-ItoGw8g2.js";import"./chevron-up-Bng7o-Ha.js";import"./chevron-down-gXp7YXqe.js";import"./useEventCallback-BBlYjqsb.js";import"./iconLoader-xKcjWzzz.js";import"./CompositeRoot-Bfmv7Zuz.js";import"./Switch-Bd_Zf0NJ.js";import"./TimePicker-Bm_7lKp6.js";import"./CollapsiblePanel-BYu_oFbL.js";import"./error-DVkQT4u5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6QmSgDy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
