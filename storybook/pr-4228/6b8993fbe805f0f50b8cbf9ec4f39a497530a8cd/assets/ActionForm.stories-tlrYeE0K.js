import{j as t,g as n}from"./iframe-SdQCyUgp.js";import{A as r}from"./action-form-DjE0Y4vC.js";import"./preload-helper-CW3K-5XG.js";import"./DropdownField-D5iAZq6S.js";import"./debounce-Co2H-TBC.js";import"./useOsdkClient-DlUfDwbC.js";import"./index-D3TvMuk-.js";import"./Input-Dx-qEMGm.js";import"./useBaseUiId-CBeYQDU3.js";import"./useControlled-B_XDx7ZC.js";import"./index-Bcc2WdCU.js";import"./index-D0j0DV3h.js";import"./PopoverPopup-33EHLoGi.js";import"./InternalBackdrop-C_eB-9md.js";import"./composite-DgbmPZb7.js";import"./index-DBcsmgnd.js";import"./getDisabledMountTransitionStyles-DSCIpTNj.js";import"./ToolbarRootContext-CFFUOJKL.js";import"./tick-BZ_N3aoo.js";import"./svgIconContainer-DRjj58Q8.js";import"./small-cross-NBpQZ1gf.js";import"./search-DC3bQpgx.js";import"./cross-5HR9Xmh-.js";import"./useValueChanged-DzBSmBuv.js";import"./getPseudoElementBounds-CWqSLITa.js";import"./CompositeItem-DAnhs0Iq.js";import"./makeExternalStore-BjNlV_-Y.js";import"./BaseForm-DAjwtkRk.js";import"./ActionButton-CwICYRG_.js";import"./Button-DVBp1SrV.js";import"./SkeletonBar-BqRHQ8dJ.js";import"./Tooltip-DmimMIVR.js";import"./info-sign-CaxDpEys.js";import"./chevron-up-DTKlfGVM.js";import"./chevron-down-Bqf_32Up.js";import"./useEventCallback-CkK2hdI-.js";import"./iconLoader-C3R9ncLm.js";import"./Switch-BM9XVGTz.js";import"./CompositeRoot-DW0GclMe.js";import"./TimePicker-B9hRpGKP.js";import"./CollapsiblePanel-DwwGp_PD.js";import"./error-CUc6sGqF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-WETF-eLM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
