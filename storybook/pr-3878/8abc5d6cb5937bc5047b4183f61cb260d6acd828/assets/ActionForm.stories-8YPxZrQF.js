import{j as t,g as n}from"./iframe-BDguHbPD.js";import{A as r}from"./action-form-71x3WkpG.js";import"./preload-helper-7xLPbKmM.js";import"./DropdownField-CGRpLszH.js";import"./debounce-XLiTuY6-.js";import"./useOsdkClient-ZETqGTvY.js";import"./index-C_5MPolp.js";import"./Input-CXvy1-u2.js";import"./useBaseUiId-bwbz0VU7.js";import"./useControlled-B3aVNzWK.js";import"./index-BAF4Gh4w.js";import"./index-C7DI1YIp.js";import"./PopoverPopup-DbEiKLnC.js";import"./InternalBackdrop-CbyyzA6w.js";import"./composite-BsxX_L6c.js";import"./index-hw-WZAqz.js";import"./getDisabledMountTransitionStyles-Cs-VaHPm.js";import"./ToolbarRootContext-CALlmZI0.js";import"./tick-0fLMSfwX.js";import"./svgIconContainer-Z2Julm7W.js";import"./small-cross-Dj8IgHas.js";import"./search-B1yR-f_r.js";import"./cross-D4TeOGZ-.js";import"./useValueChanged-Djc2nTS9.js";import"./getPseudoElementBounds-_M_XCnOW.js";import"./CompositeItem-5MkrSg_6.js";import"./makeExternalStore-COwSJhBY.js";import"./BaseForm-SvJwZv1o.js";import"./ActionButton-BN4Q2839.js";import"./Button-D2v8_Tej.js";import"./SkeletonBar-CWFv9FmM.js";import"./Tooltip-B4VmxO0l.js";import"./info-sign-R7Cl4y5f.js";import"./chevron-up-pw_FndaE.js";import"./chevron-down-CHEXQxiW.js";import"./useEventCallback-C9A8Np9g.js";import"./iconLoader-BWc2T_jl.js";import"./Switch-C5CvCf62.js";import"./CompositeRoot-DpTk_RYC.js";import"./TimePicker-r60JDnsA.js";import"./CollapsiblePanel-DwibqjzF.js";import"./error-uqFmDj8x.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CLLpRdbv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
