import{j as t,g as n}from"./iframe-D4YDcgkV.js";import{A as r}from"./action-form-Drf1RMT4.js";import"./preload-helper-DCpW9ncL.js";import"./DropdownField-BQkaE1vz.js";import"./debounce-Dfrp39m8.js";import"./useOsdkClient-JcjdO1LI.js";import"./index-8cY8PtKc.js";import"./Input-Ddw8KtcR.js";import"./useBaseUiId-Ce1LHnbR.js";import"./useControlled-Bj0_koJm.js";import"./index-BDXEDFqG.js";import"./index-D59BFBqo.js";import"./PopoverPopup-IdL2xFMr.js";import"./InternalBackdrop-QtP5wFDT.js";import"./composite-B2mz0pd-.js";import"./index-D43eNy-E.js";import"./getDisabledMountTransitionStyles-8crufxW_.js";import"./ToolbarRootContext-BCQVnjEL.js";import"./tick-LVA-wE2q.js";import"./svgIconContainer-COB7RfBn.js";import"./small-cross-BbdSAPDn.js";import"./search-DK0Hi7mb.js";import"./cross-Behni1B5.js";import"./useValueChanged-CI55RSfr.js";import"./getPseudoElementBounds-B5M65vT3.js";import"./CompositeItem-CnYlQOQU.js";import"./makeExternalStore-CBSa4JL4.js";import"./BaseForm-vpWqqm0Y.js";import"./ActionButton-CvGZig-A.js";import"./Button--v4W1QZO.js";import"./SkeletonBar-CzsWUOUE.js";import"./Tooltip-mhyE4ARD.js";import"./info-sign-BYqVqojv.js";import"./chevron-up-ClZcIOpV.js";import"./chevron-down-BuYLfoea.js";import"./useEventCallback-BwE5rOmy.js";import"./iconLoader-C9H0qfFF.js";import"./Switch-B29-K0wH.js";import"./CompositeRoot-BeFBVw78.js";import"./TimePicker-Cjy13HeT.js";import"./CollapsiblePanel-CSS__w8o.js";import"./error-CiQk9egS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BfFmFbhV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
