import{j as t,g as n}from"./iframe-Dd3-Yl6N.js";import{A as r}from"./action-form-BOQ5i_RX.js";import"./preload-helper-C9sTmRJF.js";import"./DropdownField-Dt4JM_pr.js";import"./debounce-DKDpCZ3V.js";import"./useOsdkClient-DZ1zIMqw.js";import"./index-BiUH_hpy.js";import"./Input-BFjIxR6L.js";import"./useBaseUiId-CtlPAw8O.js";import"./useControlled-tZuoOrAX.js";import"./index-Dk7mnZge.js";import"./index-CbNEs7cg.js";import"./isObject-kZj6fUWz.js";import"./InternalBackdrop-CmK4_yD0.js";import"./composite-B7_CRtOh.js";import"./index-lGfMNjwG.js";import"./getDisabledMountTransitionStyles-BXNmj0yT.js";import"./ToolbarRootContext-YQCd6tra.js";import"./tick-CH9Wrri9.js";import"./svgIconContainer-B7D9nEeV.js";import"./small-cross-CrGAYCsL.js";import"./search-uFxQauC9.js";import"./cross-Eqzrh4V_.js";import"./useValueChanged-XCnKvKXZ.js";import"./getPseudoElementBounds-DmW7W9n1.js";import"./CompositeItem-BLXgiCJ0.js";import"./makeExternalStore-C5CgSHDu.js";import"./BaseForm-D2Z7ZLiv.js";import"./ActionButton-4WW_Bvqo.js";import"./Button-DgI_B-BT.js";import"./SkeletonBar-C8vnuUpQ.js";import"./Tooltip-B41k5vGI.js";import"./info-sign-DpRh93UE.js";import"./chevron-up-D7jv6yNF.js";import"./chevron-down-COpzwsCU.js";import"./useEventCallback-USAjYtY7.js";import"./iconLoader-C5_FrXc3.js";import"./Switch-CZRv0PAw.js";import"./CompositeRoot-CYHaL44h.js";import"./TimePicker-DJdT5DeS.js";import"./CollapsiblePanel-BOoyEJPY.js";import"./error-OA8M66y2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CIN8qa0j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
