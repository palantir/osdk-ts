import{j as t,g as n}from"./iframe-bA068ynB.js";import{A as r}from"./action-form-C2n2KQTz.js";import"./preload-helper-C9VsmxhQ.js";import"./DropdownField-D4gWGmzj.js";import"./debounce-z6aUSNpd.js";import"./useOsdkClient-C4faDiEE.js";import"./index-DBROM1hX.js";import"./Input-Ca6oOOwx.js";import"./useBaseUiId-BMBSefl3.js";import"./useControlled-Cpl65TMC.js";import"./index-rNZjrxqa.js";import"./index-NJJaf9yA.js";import"./PopoverPopup-B2AfGcIN.js";import"./InternalBackdrop-CAp1E-tm.js";import"./composite-HNoPL5_Y.js";import"./index-B_XB1-MU.js";import"./getDisabledMountTransitionStyles-GSnN3fW6.js";import"./ToolbarRootContext-CUI-NHrb.js";import"./tick-wfH5aW9V.js";import"./svgIconContainer-ImDrBsfn.js";import"./small-cross-BNxAoOIY.js";import"./search-bHymEml7.js";import"./cross-Bkk1ngCc.js";import"./useValueChanged-g4lOY34t.js";import"./getPseudoElementBounds-kM-G-LqQ.js";import"./CompositeItem-yupHDpkm.js";import"./makeExternalStore-VPZ76tFl.js";import"./BaseForm-DuReY5Y9.js";import"./ActionButton-DZrngljD.js";import"./Button-Dqcog7jP.js";import"./SkeletonBar-CPuvZGqb.js";import"./Tooltip-KSItXnvL.js";import"./info-sign-CMPrC_XI.js";import"./chevron-up-DRbH-VOT.js";import"./chevron-down-C3KFPXv7.js";import"./useEventCallback-l7OAvfu_.js";import"./iconLoader-D3OKWOmP.js";import"./Switch-zwNNTui9.js";import"./CompositeRoot-D5PTxJI_.js";import"./TimePicker-C37y75ag.js";import"./CollapsiblePanel-DlBdk-qD.js";import"./error-BWkfH6c5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CtZfcEFb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
