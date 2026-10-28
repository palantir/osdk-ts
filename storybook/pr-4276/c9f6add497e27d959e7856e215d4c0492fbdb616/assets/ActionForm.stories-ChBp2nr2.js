import{j as t,g as n}from"./iframe-C26fIjAq.js";import{A as r}from"./action-form-Cz_n3yCH.js";import"./preload-helper-CzokokTz.js";import"./DropdownField-D0Kss3Mm.js";import"./debounce-DStFzp8p.js";import"./useOsdkClient-D0uHWbqN.js";import"./index-DSezQFnS.js";import"./Input-CWfYIH6c.js";import"./useBaseUiId-CZznSoWJ.js";import"./useControlled-C5NYvmTr.js";import"./index-DKSyNOS5.js";import"./index-CvCOxJEM.js";import"./isObject-Clle__At.js";import"./InternalBackdrop-33GFEnuK.js";import"./composite-B7Vf-7yN.js";import"./index-Cwq9J0os.js";import"./getDisabledMountTransitionStyles-BbWUI2dB.js";import"./ToolbarRootContext-BQbj6f0-.js";import"./tick-CJNoyutt.js";import"./svgIconContainer-CKLh70Ds.js";import"./small-cross-CQktJtCa.js";import"./search-CILTwpty.js";import"./cross-DwdPD-y-.js";import"./useValueChanged-BXDVDv9P.js";import"./getPseudoElementBounds-DynJ88Gh.js";import"./CompositeItem-Upla8dz7.js";import"./makeExternalStore-BbYA9c-K.js";import"./BaseForm-B-hCiMkX.js";import"./ActionButton-5TW8yVIZ.js";import"./Button-DUEO4ppB.js";import"./SkeletonBar-DViOz3Wh.js";import"./Tooltip-CwaJelEY.js";import"./info-sign-fY62fpLn.js";import"./chevron-up-FxqG3Beq.js";import"./chevron-down-jqoCvdNC.js";import"./useEventCallback-DUQbs5oX.js";import"./iconLoader-DHZv1frB.js";import"./Switch-WFKGt0Rw.js";import"./CompositeRoot-dUgm-VLk.js";import"./TimePicker-Ch2OkdXx.js";import"./CollapsiblePanel-bkJ3PYEK.js";import"./error-W1WiOcUb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DlZr1eO5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
