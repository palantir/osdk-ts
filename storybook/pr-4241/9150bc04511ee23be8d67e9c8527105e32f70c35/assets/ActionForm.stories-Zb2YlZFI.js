import{j as t,g as n}from"./iframe-81je18Ik.js";import{A as r}from"./action-form-BcEPXaoJ.js";import"./preload-helper-CRAEXExV.js";import"./DropdownField-_ZfRXRml.js";import"./debounce-C0dFA0mS.js";import"./useOsdkClient-DOUL53LR.js";import"./index-Ch4IN5aI.js";import"./Input-Dw0afNfi.js";import"./useBaseUiId-BZJB2Tlb.js";import"./useControlled-B3eKfZiB.js";import"./index-F2YzzidU.js";import"./index-CJX1bs1L.js";import"./PopoverPopup-CJ53N5Gn.js";import"./InternalBackdrop-C65WwkrS.js";import"./composite-B4jPeedW.js";import"./index-CbMHVh08.js";import"./getDisabledMountTransitionStyles-Baxpj6ZK.js";import"./ToolbarRootContext-Bevviuy2.js";import"./tick-C3zDCHaR.js";import"./svgIconContainer-CkaRT57i.js";import"./small-cross-Bkj0uCyB.js";import"./search-DL20J9IV.js";import"./cross-Cc4GvHBG.js";import"./useValueChanged-CSH2H_LU.js";import"./getPseudoElementBounds-CsA6tpz4.js";import"./CompositeItem-CGRjueKi.js";import"./makeExternalStore-C42KheMu.js";import"./BaseForm-BpAG1tKQ.js";import"./ActionButton-B6EeJUTi.js";import"./Button-DMrFAQQL.js";import"./SkeletonBar-Dw-ewOea.js";import"./Tooltip-ZUJ8p7GH.js";import"./info-sign-CTAFPnu1.js";import"./chevron-up-DC8tJt2z.js";import"./chevron-down-ea9DRGVa.js";import"./useEventCallback-DQ9am-6U.js";import"./iconLoader-DQ3KDMxt.js";import"./Switch-C2V_a8Or.js";import"./CompositeRoot-DxJSOp1F.js";import"./TimePicker-DqHg1d6S.js";import"./CollapsiblePanel-BZXNDPDr.js";import"./error-v2_eLjNd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DpvfaYrl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
