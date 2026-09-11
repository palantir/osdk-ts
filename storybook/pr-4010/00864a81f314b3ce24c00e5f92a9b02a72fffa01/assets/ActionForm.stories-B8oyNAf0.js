import{j as t,g as n}from"./iframe-CtRHQTYJ.js";import{A as r}from"./action-form-B-amt-S9.js";import"./preload-helper-fhfz86w0.js";import"./DropdownField-BRYcu045.js";import"./debounce-BYWJGvRn.js";import"./useOsdkClient-Ws-Fn5Vr.js";import"./index-riCZd5Ar.js";import"./Input-Civ7Ghzz.js";import"./useBaseUiId-qkDK2XTS.js";import"./useControlled-tah5fGcR.js";import"./index-Fr7QusuU.js";import"./index-pqaS_ebL.js";import"./PopoverPopup-DRdBjFn0.js";import"./InternalBackdrop-CWaOdvE-.js";import"./composite-DuXOIKmO.js";import"./index-yCAZ2DAg.js";import"./getDisabledMountTransitionStyles-fGFKvTKF.js";import"./ToolbarRootContext-BObKP8Zm.js";import"./tick-D4iao2Tc.js";import"./svgIconContainer-CnTR-ACc.js";import"./small-cross-BpXb6yiG.js";import"./search-BsaMQbW0.js";import"./cross-DEABcOeY.js";import"./useValueChanged-CKgwQ1DR.js";import"./getPseudoElementBounds-reWLTMCw.js";import"./CompositeItem-C6o3RrT-.js";import"./makeExternalStore-C5B573Wo.js";import"./BaseForm-BkFji2Hv.js";import"./ActionButton-C_VR3Nw4.js";import"./Button-BqinPFLf.js";import"./SkeletonBar-DvxbY3ok.js";import"./Tooltip-C_nFk_LA.js";import"./info-sign-SZVaUsRL.js";import"./chevron-up-Dhd4gFYv.js";import"./chevron-down-DdzT4R3d.js";import"./useEventCallback-BIhF7inU.js";import"./iconLoader-D3nnWTGh.js";import"./CompositeRoot-Botqy45p.js";import"./Switch-DZRA4C4U.js";import"./TimePicker-D-JIBfRn.js";import"./CollapsiblePanel-WOW1j6DY.js";import"./error-7X7jIqwN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6vvxMqe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
