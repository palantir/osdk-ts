import{j as t,g as n}from"./iframe-lON5AZ3L.js";import{A as r}from"./action-form-B81VCfg_.js";import"./preload-helper-CII01xYb.js";import"./DropdownField-CDUsrETz.js";import"./debounce-BWiznTrv.js";import"./useOsdkClient-mvo5kAdP.js";import"./index-BbInquUP.js";import"./Input-BTUHBzsz.js";import"./useBaseUiId-COzPbt8W.js";import"./useControlled-Bg_lHZoo.js";import"./index-U5f43BN7.js";import"./index-CcwZGg1N.js";import"./isObject-DX3EuMyF.js";import"./InternalBackdrop-BUdtJ2mO.js";import"./composite-ChlDDG92.js";import"./index-D88RmGRP.js";import"./getDisabledMountTransitionStyles-Cfd1b-as.js";import"./ToolbarRootContext-Dh8fWcX2.js";import"./tick-DG2wS06_.js";import"./svgIconContainer-CX_rozDa.js";import"./small-cross-E0MhYcPt.js";import"./search-ZnUmH3zZ.js";import"./cross-CZfg3piu.js";import"./useValueChanged-DBAEDgpw.js";import"./getPseudoElementBounds-D_X7OILl.js";import"./CompositeItem-ppbsSdS6.js";import"./makeExternalStore-BPZMGY7I.js";import"./BaseForm-CccvpavX.js";import"./ActionButton-fF4x8pwf.js";import"./Button-NLlVT-nC.js";import"./SkeletonBar-BoIeke2n.js";import"./Tooltip-BEGKa3-T.js";import"./info-sign-CRUNIkpV.js";import"./chevron-up-Cc9oNnF9.js";import"./chevron-down-B6vOrraR.js";import"./useEventCallback-ChKmlvki.js";import"./iconLoader-BZsdBjPl.js";import"./Switch-B60YP14W.js";import"./CompositeRoot-DZseU9ir.js";import"./TimePicker-CcTi5dsO.js";import"./CollapsiblePanel-CLfLwLQM.js";import"./error-B77E7aT6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CXO0MkNI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
