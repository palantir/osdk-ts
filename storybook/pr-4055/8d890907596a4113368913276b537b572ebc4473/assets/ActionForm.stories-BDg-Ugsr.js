import{j as t,g as n}from"./iframe-D8ujQKLt.js";import{A as r}from"./action-form-CgXTwQjI.js";import"./preload-helper-DFSc6wRM.js";import"./DropdownField-BvV_qCDF.js";import"./debounce-Bq0XVY4d.js";import"./useOsdkClient-C0xSXgiQ.js";import"./index-9VE5Mn4e.js";import"./Input-BAcEpIh9.js";import"./useBaseUiId-DQIJbvft.js";import"./useControlled-CNmeKwYL.js";import"./index-Df4arEo8.js";import"./index-4dyiHwoW.js";import"./PopoverPopup-BoTh3yWt.js";import"./InternalBackdrop-DOlkcASB.js";import"./composite-CqKkE9Tf.js";import"./index-DcCMilJn.js";import"./getDisabledMountTransitionStyles-DmViJQ0X.js";import"./ToolbarRootContext-DDpleV8W.js";import"./tick-DqmzPeDQ.js";import"./svgIconContainer-CCFPJCSW.js";import"./small-cross-D2ydpxtR.js";import"./search-lCLNBJzK.js";import"./cross-DL4CxuoW.js";import"./useValueChanged-D9rrTa67.js";import"./getPseudoElementBounds-Bt81s7c9.js";import"./CompositeItem-D1_uZNYL.js";import"./makeExternalStore-BCYZ0dRc.js";import"./BaseForm-_iMHopJj.js";import"./ActionButton-mq8eWvOP.js";import"./Button-DP0uEAZL.js";import"./SkeletonBar-DGLHZxCg.js";import"./Tooltip-xRA7nyQ0.js";import"./info-sign-BXH-_xLs.js";import"./chevron-up-CxwWNom-.js";import"./chevron-down-Dy0uKQHu.js";import"./useEventCallback-LXYYJHZR.js";import"./iconLoader-Dz1LfzCt.js";import"./Switch-IqigdPwC.js";import"./CompositeRoot-MMwWMeoz.js";import"./TimePicker-C9kvfDB1.js";import"./CollapsiblePanel-CrroEgz8.js";import"./error-e8Ui46gA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CoHNSoOK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
