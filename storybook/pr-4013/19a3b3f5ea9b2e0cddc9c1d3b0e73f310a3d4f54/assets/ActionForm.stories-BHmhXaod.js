import{j as t,g as n}from"./iframe-CBLGayoe.js";import{A as r}from"./action-form-Co5zTOO1.js";import"./preload-helper-iqQbXwPR.js";import"./DropdownField-BahT1QHv.js";import"./debounce-D5ZCw2WL.js";import"./useOsdkClient-C4j--X5m.js";import"./index-WWQs816-.js";import"./Input-B3gcQSCO.js";import"./useBaseUiId-1t0yXeWR.js";import"./useControlled-aG0yjyc1.js";import"./index-DRnkv5ky.js";import"./index-cNWLnacK.js";import"./PopoverPopup-B6LNoEH2.js";import"./InternalBackdrop-D-1bVe6k.js";import"./composite-B0OuyU4e.js";import"./index-CJYhDRX8.js";import"./getDisabledMountTransitionStyles-DjkeLEx-.js";import"./ToolbarRootContext-DXoHeFWe.js";import"./tick-CN0oe-d-.js";import"./svgIconContainer-C6h86pFp.js";import"./small-cross-1A3qDgIz.js";import"./search-fj4r3aII.js";import"./cross-BsTZCMZo.js";import"./useValueChanged-DUE2Yivj.js";import"./getPseudoElementBounds-O8sM1SFz.js";import"./CompositeItem-DM2eqzsD.js";import"./makeExternalStore-C4cF0z0U.js";import"./BaseForm-BeLx1JJp.js";import"./ActionButton-k24uyueG.js";import"./Button-CjUTiVzv.js";import"./SkeletonBar-BnJ1P5Dc.js";import"./Tooltip-D0gzo0UL.js";import"./info-sign-Doy9eM24.js";import"./chevron-up-BzOQoAV6.js";import"./chevron-down-fvU8e7Xa.js";import"./useEventCallback-Vi0Pn5Sv.js";import"./iconLoader-1N37U1iG.js";import"./CompositeRoot-CovLw-d6.js";import"./Switch-yeQgvPQ6.js";import"./TimePicker-BT0t8BWi.js";import"./CollapsiblePanel-NhOksXv9.js";import"./error-pMIF5hcF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BgHhPSx8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
