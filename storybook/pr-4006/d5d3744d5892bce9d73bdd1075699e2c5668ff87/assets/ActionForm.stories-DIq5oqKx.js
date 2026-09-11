import{j as t,g as n}from"./iframe-uvdRxhm4.js";import{A as r}from"./action-form-b3pnFZ9i.js";import"./preload-helper-ByxB1amM.js";import"./DropdownField-B9p3-g28.js";import"./debounce-CnVQWIJt.js";import"./useOsdkClient-Bnqq9tvc.js";import"./index-Co_pmQht.js";import"./Input-DsPKjuvY.js";import"./useBaseUiId-BxI9rYKQ.js";import"./useControlled-BumCnOkf.js";import"./index-lOYDDVZK.js";import"./index-3i2S2NsZ.js";import"./PopoverPopup-CYPwIDjx.js";import"./InternalBackdrop-C6QFY2GA.js";import"./composite-BG1x_r8M.js";import"./index-DTOiGnqw.js";import"./getDisabledMountTransitionStyles-CICtbxTC.js";import"./ToolbarRootContext-BdEFWnMH.js";import"./tick-Bt4QaKZ2.js";import"./svgIconContainer-BrEtjUlS.js";import"./small-cross-Ducb2njs.js";import"./search-C_3VgOnT.js";import"./cross-CVk2zvc8.js";import"./useValueChanged-VS0IrIAr.js";import"./getPseudoElementBounds-CN21HRRj.js";import"./CompositeItem-B-Ruk_4Z.js";import"./makeExternalStore-BamzP3ZM.js";import"./BaseForm-C-uERYHA.js";import"./ActionButton-C-rT9f5F.js";import"./Button-Bo9SA5iL.js";import"./SkeletonBar-BeFEtzbz.js";import"./Tooltip-BS__xmI7.js";import"./info-sign-BVsHY75M.js";import"./chevron-up-CgyNZWWy.js";import"./chevron-down-S5HS9Wt5.js";import"./useEventCallback-DXlTwTX-.js";import"./iconLoader-Cr3cVHWn.js";import"./CompositeRoot-BDL24NQf.js";import"./Switch-CA_1KTd_.js";import"./TimePicker-B10qYihd.js";import"./CollapsiblePanel-BnrWUQOr.js";import"./error-coR5DdC1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BYNBs9jS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
