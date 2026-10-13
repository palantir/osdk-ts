import{j as t,g as n}from"./iframe-DzqriYoa.js";import{A as r}from"./action-form-DU0R4hGc.js";import"./preload-helper-rEyizNUS.js";import"./DropdownField-BJzekVR1.js";import"./debounce-C4Oh_cfK.js";import"./useOsdkClient-BdwocmMk.js";import"./index-CbCX59S_.js";import"./Input-BkQ3tb2C.js";import"./useBaseUiId-Dl4SGLhQ.js";import"./useControlled-Y5VNoFPF.js";import"./index-DbWpjH26.js";import"./index-D2hymCML.js";import"./PopoverPopup-C_dYk9mI.js";import"./InternalBackdrop-CV9wiOw_.js";import"./composite-C_fUKfgf.js";import"./index-BeXGlMwj.js";import"./getDisabledMountTransitionStyles-WG_KSQgl.js";import"./ToolbarRootContext-T8dcHRUE.js";import"./tick-B24kLRH2.js";import"./svgIconContainer-DGWH6ifX.js";import"./small-cross-Ctj0EcuU.js";import"./search-CdGNOopx.js";import"./cross-BYH-2i8n.js";import"./useValueChanged-Bbm6hoIu.js";import"./getPseudoElementBounds-Bp5H42sl.js";import"./CompositeItem-jOjnmS3J.js";import"./makeExternalStore-C6hRU-73.js";import"./BaseForm-DCVBcjom.js";import"./ActionButton-wBjk7qIy.js";import"./Button-CORzZHVQ.js";import"./SkeletonBar-l_DEAtNb.js";import"./Tooltip-CpxT0FiY.js";import"./info-sign-DGGv1CkF.js";import"./chevron-up-FhM_U9vV.js";import"./chevron-down-Oou_YMqa.js";import"./useEventCallback--hGnFhfC.js";import"./iconLoader-DwHC9XGc.js";import"./Switch-8mUbWNLW.js";import"./CompositeRoot-CttpwrXf.js";import"./TimePicker-Dr3-KQnT.js";import"./CollapsiblePanel-j9A_r2A6.js";import"./error-Ofk1hxBS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8iePud0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
