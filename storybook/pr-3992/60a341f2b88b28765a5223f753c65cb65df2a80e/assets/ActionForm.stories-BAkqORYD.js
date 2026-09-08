import{j as t,g as n}from"./iframe-BOYcc0dJ.js";import{A as r}from"./action-form-2zj9ZQDX.js";import"./preload-helper-BnWf8j3v.js";import"./DropdownField-BBsngSoK.js";import"./debounce-BmvCkScQ.js";import"./useOsdkClient-ByhMOOB7.js";import"./index-Yg2EcgVZ.js";import"./Input-BJWiKc9C.js";import"./useBaseUiId-DX9ZiXGI.js";import"./useControlled-D-ZDbicW.js";import"./index-BkqK32VC.js";import"./index-CCBfJ9eW.js";import"./PopoverPopup-PDZ-29T5.js";import"./InternalBackdrop-BY0lRnfR.js";import"./composite-D8na-rSh.js";import"./index-C7Thu-2O.js";import"./getDisabledMountTransitionStyles-BbJt8_w5.js";import"./ToolbarRootContext-Do3BrLln.js";import"./tick-DMFuzZwx.js";import"./svgIconContainer-dI8qqoMC.js";import"./small-cross-CF-XSTuz.js";import"./search-BW9zSgLT.js";import"./cross-M1Qm_DTM.js";import"./useValueChanged-h230bsbd.js";import"./getPseudoElementBounds-DV4HYuIT.js";import"./CompositeItem-Bx5eT0s8.js";import"./makeExternalStore-Cl0TwftQ.js";import"./BaseForm-C0T7T43s.js";import"./ActionButton-BfTy6GeE.js";import"./Button-hF353HMT.js";import"./SkeletonBar-DqbjZsF-.js";import"./Tooltip-ERPEKtIR.js";import"./info-sign-BI0Si5VP.js";import"./chevron-up-Uw6izt2X.js";import"./chevron-down-DcL5hgyv.js";import"./useEventCallback-BVAeoTDg.js";import"./iconLoader-DnMrpRr1.js";import"./CompositeRoot-DFaADai_.js";import"./Switch-BVUwI9ZU.js";import"./TimePicker-B9fcYYpk.js";import"./CollapsiblePanel-Sxqk5N-n.js";import"./error-JJ7_ntNs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BIq6FQjv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
