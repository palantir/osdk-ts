import{j as t,g as n}from"./iframe-C8jWyiQL.js";import{A as r}from"./action-form-Bkds_VjP.js";import"./preload-helper-D3hrqtKI.js";import"./DropdownField-a018rFqR.js";import"./debounce-C49teRpi.js";import"./useOsdkClient-GeBqIj0g.js";import"./index-Ck3WMYCS.js";import"./Input-BJZD4UWc.js";import"./useBaseUiId-C0Hhh4zZ.js";import"./useControlled-HdEPNqxD.js";import"./index-Ch17Lfr0.js";import"./index-p54yret9.js";import"./PopoverPopup-BswZff0D.js";import"./InternalBackdrop-CiK-2PLb.js";import"./composite-VSkp61oJ.js";import"./index-Cd22zSOl.js";import"./getDisabledMountTransitionStyles-Rw7QHMBY.js";import"./ToolbarRootContext-CKRR356X.js";import"./tick-TxqdkZbh.js";import"./svgIconContainer-Cl0UVpcd.js";import"./small-cross-BwCr6L7P.js";import"./search-D-ei7hDs.js";import"./cross-Dl8HY39B.js";import"./useValueChanged-CoaMZ36h.js";import"./getPseudoElementBounds-B_4Hsk7I.js";import"./CompositeItem-DPPPi3Ly.js";import"./makeExternalStore-CTfzdsJg.js";import"./BaseForm-DH3vkbWj.js";import"./ActionButton-9g7J3G0y.js";import"./Button-3m2yzrh1.js";import"./SkeletonBar-Bfqg6xhZ.js";import"./Tooltip-CYCmH68_.js";import"./info-sign-DK_Ves_e.js";import"./chevron-up-CRrSBUVC.js";import"./chevron-down-DWvQrpRH.js";import"./useEventCallback-C0LDLFCe.js";import"./iconLoader-C9OiS24h.js";import"./Switch--snvUtWK.js";import"./CompositeRoot-M7l7lOLa.js";import"./TimePicker-l0js4cAC.js";import"./CollapsiblePanel-CwpNijKr.js";import"./error-DFAsAkKT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXVkLmYC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
