import{j as t,g as n}from"./iframe-BcjmHG5Y.js";import{A as r}from"./action-form-DvLqr7H7.js";import"./preload-helper-CevB4zUw.js";import"./DropdownField-Depe1xc5.js";import"./debounce-B2HXz_6i.js";import"./useOsdkClient-9RXKzpNA.js";import"./index-WgcqtCT6.js";import"./Input-e_01wq9D.js";import"./useBaseUiId-CYrtGdJE.js";import"./useControlled-6NYxLXP3.js";import"./index-CsMXJwKN.js";import"./index-DpV3ZQ0J.js";import"./PopoverPopup-D9ZDT7jF.js";import"./InternalBackdrop-Dy54GwQQ.js";import"./composite-D6B2PGWO.js";import"./index-DSYJPx0N.js";import"./getDisabledMountTransitionStyles-DOxn78aT.js";import"./ToolbarRootContext-DAX0lKDl.js";import"./tick-CSVnmAXo.js";import"./svgIconContainer-CoM5Z7Ve.js";import"./small-cross-BpYV_lGq.js";import"./search-jO8my80A.js";import"./cross-DoMlZBaZ.js";import"./useValueChanged-66Q9-4Wr.js";import"./getPseudoElementBounds-B6Q-orcE.js";import"./CompositeItem-DLw_ttOE.js";import"./makeExternalStore-qC0Amdtu.js";import"./BaseForm-CE7CyuDq.js";import"./ActionButton-U9wgeBuw.js";import"./Button-DJfJDABU.js";import"./SkeletonBar-Casjd6QM.js";import"./Tooltip-BL83qiDs.js";import"./info-sign-wePaiPR9.js";import"./chevron-up-CtIGJGzt.js";import"./chevron-down-yt_M0O0c.js";import"./useEventCallback-Du9FLIz2.js";import"./iconLoader-DWMOokBd.js";import"./CompositeRoot-C_bSEZIK.js";import"./Switch-DplIRpBa.js";import"./TimePicker-By2huuMd.js";import"./CollapsiblePanel-UzBakrGh.js";import"./error-CYyfg8wo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C3Z8dnVY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
