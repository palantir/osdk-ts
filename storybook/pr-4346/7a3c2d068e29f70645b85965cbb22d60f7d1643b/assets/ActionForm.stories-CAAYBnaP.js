import{j as t,g as n}from"./iframe-C0MgyNRE.js";import{A as r}from"./action-form-gQJ6DBoR.js";import"./preload-helper-DQoH0Nuo.js";import"./DropdownField-GlOSN0XT.js";import"./debounce-Bi1ZMfOq.js";import"./useOsdkClient-Ccq50_Dk.js";import"./index---acoC-r.js";import"./Input-BAC6a1Nu.js";import"./useBaseUiId-Q4ONINdB.js";import"./useControlled-BBrJL19c.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./isObject-BQeCy5y1.js";import"./InternalBackdrop-rlHdNk5g.js";import"./composite-BfZwON16.js";import"./index-DVx8jUCi.js";import"./getDisabledMountTransitionStyles-DOeog0sh.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./tick-8uJq1GYC.js";import"./svgIconContainer-BKLjPPf4.js";import"./small-cross-gL4Blcc6.js";import"./search-CnqYke8S.js";import"./cross-CDqB6Pmb.js";import"./useValueChanged-rqsds79W.js";import"./getPseudoElementBounds-f4HbG8Fm.js";import"./CompositeItem-4Z6N9TGd.js";import"./makeExternalStore-CJPI6JTX.js";import"./BaseForm-CADG7MQ2.js";import"./ActionButton-DcSbKUFA.js";import"./Button-DPYKSMTC.js";import"./SkeletonBar-CTwZ2QYa.js";import"./Tooltip-BhEegg2P.js";import"./info-sign-D9qXhMTy.js";import"./chevron-up-DTBULrqJ.js";import"./chevron-down-3JGU9uXG.js";import"./useEventCallback-D9l2Sgfp.js";import"./iconLoader-BUHcwIYX.js";import"./Switch-CxgjZrXn.js";import"./CompositeRoot-BMh3wcGq.js";import"./TimePicker-Cm-Qp1Va.js";import"./CollapsiblePanel-DBgZ58Ev.js";import"./error-DWVeEt8h.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DhnlLT_e.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
