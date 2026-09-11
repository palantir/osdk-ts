import{j as t,g as n}from"./iframe-DsKrzcRN.js";import{A as r}from"./action-form-CpgCZLx7.js";import"./preload-helper-XXW3l9t_.js";import"./DropdownField-CWYsNCev.js";import"./debounce-BCcTzWEM.js";import"./useOsdkClient-wqu6WPXo.js";import"./index-CsPIGNQb.js";import"./Input-C_GhTUPn.js";import"./useBaseUiId-BwjaGsvj.js";import"./useControlled-Bqn_3IUK.js";import"./index-CbFdJYZA.js";import"./index-v8oVnP18.js";import"./PopoverPopup-ZTUVQmKO.js";import"./InternalBackdrop-D3WUVm8B.js";import"./composite-4l0PTrfd.js";import"./index-hJuN63ng.js";import"./getDisabledMountTransitionStyles-BHlXwaEB.js";import"./ToolbarRootContext-DxArarjC.js";import"./tick-BcIHyu16.js";import"./svgIconContainer-BOG8o0Qp.js";import"./small-cross-4vbxp4Sf.js";import"./search-Dj7j7f4C.js";import"./cross-BW2NuQAF.js";import"./useValueChanged-B1kYQJI9.js";import"./getPseudoElementBounds-JpoScsw5.js";import"./CompositeItem-D26JRJU9.js";import"./makeExternalStore-lpe8zccP.js";import"./BaseForm-C-fTci80.js";import"./ActionButton-CvPzCsuM.js";import"./Button-BKP0-2mJ.js";import"./SkeletonBar-D_kDFvpB.js";import"./Tooltip-DsFZs_hy.js";import"./info-sign-DJ2ORPMM.js";import"./chevron-up-LJ_-hQRF.js";import"./chevron-down-DEsS9nYL.js";import"./useEventCallback-CLUwi7QW.js";import"./iconLoader-Bl8xr6l0.js";import"./CompositeRoot-DRk1ZgIV.js";import"./Switch-BrtknyGO.js";import"./TimePicker-BINMQmMl.js";import"./CollapsiblePanel-B3VJ_HAc.js";import"./error-CfVMT4Jh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DQcV-4YY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
