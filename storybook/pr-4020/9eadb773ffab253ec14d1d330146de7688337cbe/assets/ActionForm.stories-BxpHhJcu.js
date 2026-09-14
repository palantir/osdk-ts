import{j as t,g as n}from"./iframe-DwHN39Jj.js";import{A as r}from"./action-form-De1Dg8uZ.js";import"./preload-helper-TQIKMTBe.js";import"./DropdownField-DQTgwTYN.js";import"./debounce-B2i6LMnR.js";import"./useOsdkClient-C2Vmxc_K.js";import"./index-Bnvv13O1.js";import"./Input-C40ac1xS.js";import"./useBaseUiId-BuiLz8Kz.js";import"./useControlled-B5wlEGdC.js";import"./index-yATLLLgy.js";import"./index-DdofC8Tl.js";import"./PopoverPopup-Bogu5QY8.js";import"./InternalBackdrop-Ct27ouGs.js";import"./composite-BHUO4-On.js";import"./index-BCjzN-kH.js";import"./getDisabledMountTransitionStyles-BgNKG7FQ.js";import"./ToolbarRootContext-C0072MJ6.js";import"./tick-TwV86bBe.js";import"./svgIconContainer-D3xSNEvE.js";import"./small-cross-DyCNle2m.js";import"./search-60c5efTm.js";import"./cross-DiSoPuVQ.js";import"./useValueChanged-2oQS-uEU.js";import"./getPseudoElementBounds-D0-vuA8S.js";import"./CompositeItem-BQu1HqMn.js";import"./makeExternalStore-DbPOioRC.js";import"./BaseForm-Bw7le0Fm.js";import"./ActionButton-DjDKHZFu.js";import"./Button-BYP0P9Ib.js";import"./SkeletonBar-B2OK7PfD.js";import"./Tooltip-BQlEvxbG.js";import"./info-sign-CGGRzStg.js";import"./chevron-up-CgMDDgxn.js";import"./chevron-down-DzHcaasw.js";import"./useEventCallback-Dgfv8zRH.js";import"./iconLoader-CgsZ-Ixw.js";import"./CompositeRoot-DC5DveBS.js";import"./Switch-3S_xxdnq.js";import"./TimePicker-DXfx-LIu.js";import"./CollapsiblePanel-D9qMD8XV.js";import"./error-B0Y2Fvc9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CvR6KWeT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
