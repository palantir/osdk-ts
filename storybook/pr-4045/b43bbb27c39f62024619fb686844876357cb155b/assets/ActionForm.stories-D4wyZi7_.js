import{j as t,g as n}from"./iframe-BjF7QLhH.js";import{A as r}from"./action-form-CP9j_FbC.js";import"./preload-helper-BjubRawJ.js";import"./DropdownField-BBcJxhdu.js";import"./debounce-ChQOuTiY.js";import"./useOsdkClient-Bbvx3WSo.js";import"./index-DjhpcMou.js";import"./Input-EpQSMSPb.js";import"./useBaseUiId-DsiyrTc5.js";import"./useControlled-k0Oisgsr.js";import"./index-dd7HiSC0.js";import"./index-D9CUEICi.js";import"./PopoverPopup-Pu1LSCLj.js";import"./InternalBackdrop-DjHac_o6.js";import"./composite-C3VIqVTD.js";import"./index-_Dhu50HX.js";import"./getDisabledMountTransitionStyles-CvnFYTQC.js";import"./ToolbarRootContext-160MLPLN.js";import"./tick-CryAE_DJ.js";import"./svgIconContainer-BOlpbv4R.js";import"./small-cross-aBFUVmSW.js";import"./search-CfhozSoV.js";import"./cross-H3gYztYg.js";import"./useValueChanged-WiC8WLMH.js";import"./getPseudoElementBounds-I8RQbwIa.js";import"./CompositeItem-CJJAstdN.js";import"./makeExternalStore--bKLbn6H.js";import"./BaseForm-DerEHlnA.js";import"./ActionButton-BYRhG-r1.js";import"./Button-BaubE4M6.js";import"./SkeletonBar-wv_LSLd9.js";import"./Tooltip-EUOwem5v.js";import"./info-sign-NL9D2Zw6.js";import"./chevron-up-CmrGbNCr.js";import"./chevron-down-qzCHSoFz.js";import"./useEventCallback-8NkDy3YU.js";import"./iconLoader-CwNvLpFs.js";import"./Switch-DlwXZKwr.js";import"./CompositeRoot-Di820AC1.js";import"./TimePicker-CG1poLUj.js";import"./CollapsiblePanel-CbQAA8YZ.js";import"./error-DEWhTW9J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BhtzFR1P.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
