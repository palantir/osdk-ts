import{j as t,g as n}from"./iframe-DIhyjTQM.js";import{A as r}from"./action-form-D4HMqtMm.js";import"./preload-helper-BITLElC1.js";import"./DropdownField-CNUfmwbR.js";import"./debounce-xNmml4RO.js";import"./useOsdkClient-ChFpCrqs.js";import"./index-C8ppAklG.js";import"./Input-BCY1gssj.js";import"./useBaseUiId-BRDIOgH7.js";import"./useControlled-vI7L-1v7.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./PopoverPopup-C4G8tLd2.js";import"./InternalBackdrop-BbR3bGoB.js";import"./composite-BkQZGQ9U.js";import"./getDisabledMountTransitionStyles-DDkkAoal.js";import"./ToolbarRootContext-DDTggrNs.js";import"./tick-xU5_Eoim.js";import"./svgIconContainer-BVwGEvqe.js";import"./small-cross-DVOzGHDB.js";import"./search-D7TMRqS5.js";import"./cross-BVmbGj7v.js";import"./useValueChanged-1EPjCJhD.js";import"./getPseudoElementBounds-CQrPr7lO.js";import"./CompositeItem-D7Gjn2M2.js";import"./makeExternalStore-DUGVOR6Q.js";import"./BaseForm-P6wFdnXb.js";import"./ActionButton-CSRmV5rV.js";import"./Button-BU0w-MK8.js";import"./SkeletonBar-C2TvSpMI.js";import"./Tooltip-Ce_ARAEV.js";import"./info-sign-N-QT_9Fs.js";import"./chevron-up-DKTrmeoY.js";import"./chevron-down-fg_D-X7z.js";import"./useEventCallback-DgKocnhe.js";import"./iconLoader-Bc6yoizS.js";import"./Switch-BnHCclEa.js";import"./CompositeRoot-DjhLx-rZ.js";import"./TimePicker-DglgYOVe.js";import"./CollapsiblePanel-B7QE2-21.js";import"./error-BcXd4Yso.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DKqvGaZy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const Z={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
