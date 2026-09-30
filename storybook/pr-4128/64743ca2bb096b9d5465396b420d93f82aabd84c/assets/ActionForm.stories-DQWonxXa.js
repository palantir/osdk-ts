import{j as t,g as n}from"./iframe-ClMgtSuk.js";import{A as r}from"./action-form-CIoyZI2H.js";import"./preload-helper-DTt1WWTr.js";import"./DropdownField-C5-pHjL8.js";import"./debounce-DNxed3Zp.js";import"./useOsdkClient-DebYYw8a.js";import"./index-CldZE-Fz.js";import"./Input-BtIh3kKl.js";import"./useBaseUiId-woEv5Hvl.js";import"./useControlled-8r5NxEZn.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./PopoverPopup-C7ZCNFox.js";import"./InternalBackdrop-lzq1-uho.js";import"./composite-AMpBTCaD.js";import"./index-Ct_fn0U-.js";import"./getDisabledMountTransitionStyles-DS7SGJ-f.js";import"./ToolbarRootContext-dH9njPoH.js";import"./tick-BVkIDnpf.js";import"./svgIconContainer-oOu9mbxW.js";import"./small-cross-CqFS18i-.js";import"./search-COwJRDi0.js";import"./cross-viQYDEND.js";import"./useValueChanged-BUHPg38E.js";import"./getPseudoElementBounds-DAVljBL_.js";import"./CompositeItem-DEoo3ITM.js";import"./makeExternalStore-v6XUl8OF.js";import"./BaseForm-D02r88n7.js";import"./ActionButton-DSjTpeTA.js";import"./Button-BCu1jtHq.js";import"./SkeletonBar-ClzuP6Go.js";import"./Tooltip-CsPWprPe.js";import"./info-sign-DNKcNvOu.js";import"./chevron-up-BerPpks5.js";import"./chevron-down-DRfUqPRw.js";import"./useEventCallback-Df1aTrS2.js";import"./iconLoader-CmRMHse3.js";import"./Switch-R12CK7d6.js";import"./CompositeRoot-DJv74Jyy.js";import"./TimePicker-CSu8mGdy.js";import"./CollapsiblePanel-CtkO9azS.js";import"./error-D3qiwtEy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-H7JHankc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
