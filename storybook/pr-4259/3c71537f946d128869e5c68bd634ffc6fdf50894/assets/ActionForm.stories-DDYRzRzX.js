import{j as t,g as n}from"./iframe-C_udlJU4.js";import{A as r}from"./action-form-BEEoV9B7.js";import"./preload-helper-D7A5VPqB.js";import"./DropdownField-zTIV4KYc.js";import"./debounce-SX_bnHC2.js";import"./useOsdkClient-DEmnm4QT.js";import"./index-D5Td05wZ.js";import"./Input-DnhGyrNk.js";import"./useBaseUiId-D9eSz4SE.js";import"./useControlled-BScpaCoT.js";import"./index-kFWYrntg.js";import"./index-BIYZQ0cF.js";import"./PopoverPopup-InrtXQrT.js";import"./InternalBackdrop-wUvFwLWj.js";import"./composite-0__3ht0j.js";import"./index-Bt6VxweC.js";import"./getDisabledMountTransitionStyles-D8uTEEjX.js";import"./ToolbarRootContext-Cypj8NdZ.js";import"./tick-LuoIBRv5.js";import"./svgIconContainer-YTE10dOj.js";import"./small-cross-bAfYX1bR.js";import"./search-BeZJ_QRn.js";import"./cross-aLVt525v.js";import"./useValueChanged-D5Daoi2-.js";import"./getPseudoElementBounds-ADoHBIxL.js";import"./CompositeItem-D9nRDYX0.js";import"./makeExternalStore-DSU-MzRu.js";import"./BaseForm-Bzq-GN8h.js";import"./ActionButton-CCV1Er0F.js";import"./Button-DMGSDF9f.js";import"./SkeletonBar-DVvww04b.js";import"./Tooltip-B_PTRmKi.js";import"./info-sign-DZaQEWdR.js";import"./chevron-up-CxhBgQK8.js";import"./chevron-down-BaUNK2Yk.js";import"./useEventCallback-DZ1nXXaM.js";import"./iconLoader-BOyU5wIV.js";import"./Switch-BAYqNxSy.js";import"./CompositeRoot-MDMXsagZ.js";import"./TimePicker-B2tw20fQ.js";import"./CollapsiblePanel-ZDu1kmyl.js";import"./error-DvqmoNGN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bs3JzGD4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
