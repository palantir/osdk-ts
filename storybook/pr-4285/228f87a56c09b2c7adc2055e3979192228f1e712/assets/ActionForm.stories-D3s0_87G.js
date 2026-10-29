import{j as t,g as n}from"./iframe-BX7t1m7X.js";import{A as r}from"./action-form-BdN6-F_2.js";import"./preload-helper-vs1LH6RG.js";import"./DropdownField-CKrqI4rI.js";import"./debounce-BXIEVhi-.js";import"./useOsdkClient-hFqGetqy.js";import"./index-CWnEVrcD.js";import"./Input-ffGk1Cv0.js";import"./useBaseUiId-Bmd4FcfN.js";import"./useControlled-CIYqr8vl.js";import"./index-CKebcxwg.js";import"./index--sVV4r8-.js";import"./PopoverPopup-CV61Ww1T.js";import"./InternalBackdrop-Bqks8j8N.js";import"./composite-quGdXDs4.js";import"./index-4mN2Lpue.js";import"./getDisabledMountTransitionStyles-Bay-uwBq.js";import"./ToolbarRootContext-D-cnH9Zf.js";import"./tick--CMC8WAi.js";import"./svgIconContainer-B1_oouOg.js";import"./small-cross-DFcpXRfF.js";import"./search-BOoacuk7.js";import"./cross-DHmTrIXq.js";import"./useValueChanged-DBl2Xes2.js";import"./getPseudoElementBounds-BbiKJCQA.js";import"./CompositeItem-DzuKssIv.js";import"./makeExternalStore-NTXRhgR1.js";import"./BaseForm-BK692xk_.js";import"./ActionButton-BiSFjvED.js";import"./Button-HBtTsXNU.js";import"./SkeletonBar-DJLl5DO7.js";import"./Tooltip-DMMK12H2.js";import"./info-sign-9Bf6GnrB.js";import"./chevron-up-B_BYF8A4.js";import"./chevron-down-Bo5JkLwj.js";import"./useEventCallback-DRCoKqNP.js";import"./iconLoader-CrEStmmA.js";import"./Switch-Brv3wwBe.js";import"./CompositeRoot-zGI4VsJ4.js";import"./TimePicker-DSC9SHG_.js";import"./CollapsiblePanel-Cz6hvxrp.js";import"./error-CwXOiZUY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-XI_BAq5U.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
