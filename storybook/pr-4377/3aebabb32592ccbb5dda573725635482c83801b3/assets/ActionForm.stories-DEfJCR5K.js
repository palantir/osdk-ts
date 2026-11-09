import{j as t,g as n}from"./iframe-DgulMOaF.js";import{A as r}from"./action-form-BThiEYNA.js";import"./preload-helper-Dl5VLDEn.js";import"./DropdownField-D_qIBFAn.js";import"./debounce-C6yDT9Ro.js";import"./useOsdkClient-BO4WVOaj.js";import"./index-dtvh1Mr6.js";import"./Input-CtG2S7FH.js";import"./useBaseUiId-BS6Gc1dg.js";import"./useControlled-CvnKakZJ.js";import"./index-PgG1IVJP.js";import"./index-CNbeLsb0.js";import"./isObject-Beq8HikT.js";import"./InternalBackdrop-Ly5OJmUB.js";import"./composite-Cb3XgmrA.js";import"./index-JiBe7OC4.js";import"./getDisabledMountTransitionStyles-DCKwnIRA.js";import"./ToolbarRootContext-fgw45yYw.js";import"./tick-Dcu7xHQ4.js";import"./svgIconContainer-Ba3T_jNO.js";import"./small-cross-BGpqY9GM.js";import"./search-TtbfO7CA.js";import"./cross-y6EWAWli.js";import"./useValueChanged-RALpMVtl.js";import"./getPseudoElementBounds-Bs14F1Jl.js";import"./CompositeItem-D1z33XFc.js";import"./makeExternalStore-DI6My3xA.js";import"./BaseForm-TTmRLQOO.js";import"./ActionButton-swW5gfvP.js";import"./Button-DlQAkLGN.js";import"./SkeletonBar-C8sXh3Sa.js";import"./Tooltip-BMCI_jgq.js";import"./info-sign-CWM96mLy.js";import"./chevron-up-DhpaVvSH.js";import"./chevron-down-ClbU1eSU.js";import"./useEventCallback-DZy8oh12.js";import"./iconLoader-D7ZYRt43.js";import"./Switch-BNL6qNkf.js";import"./CompositeRoot-LQXea6L4.js";import"./TimePicker-tsfk_vVl.js";import"./CollapsiblePanel-d1WdyLj1.js";import"./error-ddwbLDxk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Baexeub2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
