import{j as t,g as n}from"./iframe-B0Q7ew8Z.js";import{A as r}from"./action-form-_b9gn0Ir.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-CxXuqhZR.js";import"./debounce-CyMb4iRa.js";import"./useOsdkClient-BcJFc_0Y.js";import"./index-B3euQAxX.js";import"./Input-g4yPu6B6.js";import"./useBaseUiId-DTpiFHLl.js";import"./useControlled-BS_Eo8Jr.js";import"./index-LgXgW0tz.js";import"./index-DDwtoaNx.js";import"./PopoverPopup-BDARVRq8.js";import"./InternalBackdrop-C_e4Amrk.js";import"./composite-C38hBHQ1.js";import"./index-CdLLvF95.js";import"./getDisabledMountTransitionStyles-CW0hcLTx.js";import"./ToolbarRootContext-C1mulGkb.js";import"./tick-CnmVaPy0.js";import"./svgIconContainer-DHqtFPi_.js";import"./small-cross-DfX0mXVC.js";import"./search-ftQvRLI-.js";import"./cross-CuUHaT77.js";import"./useValueChanged-DtBaEsJ9.js";import"./getPseudoElementBounds-BqkVMi-w.js";import"./CompositeItem-CVqNqknj.js";import"./makeExternalStore-DfcRwF-H.js";import"./BaseForm-DHyPHTGx.js";import"./ActionButton-DGWgotCn.js";import"./Button-DJ9AZpJd.js";import"./SkeletonBar-8Z-HAmIt.js";import"./Tooltip-DwBPcoAB.js";import"./info-sign-BIOMJ_fG.js";import"./chevron-up-CMMGskT6.js";import"./chevron-down-CPWeMG22.js";import"./useEventCallback-CfEmFQFo.js";import"./iconLoader-BoEP8F9o.js";import"./Switch-CHa_I3Xp.js";import"./CompositeRoot-Bd3Sulp4.js";import"./TimePicker-gh0XSb3I.js";import"./CollapsiblePanel-CXKPpa6L.js";import"./error-DCkSicSK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-xWaVFLHz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
