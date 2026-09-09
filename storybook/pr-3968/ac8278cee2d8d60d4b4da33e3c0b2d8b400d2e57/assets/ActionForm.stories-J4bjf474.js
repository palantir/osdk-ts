import{j as t,g as n}from"./iframe-Ca8QPFs7.js";import{A as r}from"./action-form-BA2q0UOj.js";import"./preload-helper-COsmiGlU.js";import"./DropdownField-BUiYJ1tm.js";import"./debounce-CPv0owLQ.js";import"./useOsdkClient-D4peXsmr.js";import"./index-TIjGnA-V.js";import"./Input-bPmf1b1D.js";import"./useBaseUiId-EAvVFtG3.js";import"./useControlled-D9cxw3en.js";import"./index-B7VCz-93.js";import"./index-4Pm78iQf.js";import"./PopoverPopup-D2QR_oJe.js";import"./InternalBackdrop-mNTf9SFF.js";import"./composite-TrXp-_T_.js";import"./index-Ce6raiTT.js";import"./getDisabledMountTransitionStyles-BOi8NXil.js";import"./ToolbarRootContext-vcNNCMZy.js";import"./tick-DO6aTuUx.js";import"./svgIconContainer-CTykICQ9.js";import"./small-cross-pwzIRu8R.js";import"./search-mtN4hQ3z.js";import"./cross-fEUgPw6t.js";import"./useValueChanged-8Z2upUib.js";import"./getPseudoElementBounds-C_xfi5-U.js";import"./CompositeItem-Blj-310R.js";import"./makeExternalStore-DFNzrn-Z.js";import"./BaseForm--5_ys_qB.js";import"./ActionButton-S14ncGS1.js";import"./Button-CDLpEtAu.js";import"./SkeletonBar-J8cR98yu.js";import"./Tooltip-DQadFgFZ.js";import"./info-sign-Bbe-fs9r.js";import"./chevron-up-BWF9M2on.js";import"./chevron-down-CLaQgAU8.js";import"./useEventCallback-DalbXHIL.js";import"./iconLoader-qUSRHCNP.js";import"./CompositeRoot-DKxqjok-.js";import"./Switch-DuOAClme.js";import"./TimePicker-Cz9huDZY.js";import"./CollapsiblePanel-DuCqlcCL.js";import"./error-iIOc5tuM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DWYY-gQH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
