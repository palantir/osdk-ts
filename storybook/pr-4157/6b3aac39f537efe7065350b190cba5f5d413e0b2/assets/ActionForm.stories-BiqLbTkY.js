import{j as t,g as n}from"./iframe-DfwKiHjh.js";import{A as r}from"./action-form-CVlehYZs.js";import"./preload-helper-5NrpNAmT.js";import"./DropdownField-BUzOTkFF.js";import"./debounce-Db1JwLM-.js";import"./useOsdkClient-DSSfPHx3.js";import"./index-DQCbDJi8.js";import"./Input-CijjM8i3.js";import"./useBaseUiId-SmhboENz.js";import"./useControlled-BVcUwOCR.js";import"./index-aXU9JM6g.js";import"./index-COIAanZc.js";import"./PopoverPopup-D8jrxLG3.js";import"./InternalBackdrop-BDXq5BSA.js";import"./composite-mjsmoQDf.js";import"./index-UDlVD7eQ.js";import"./getDisabledMountTransitionStyles-BcpIOTg3.js";import"./ToolbarRootContext-ywVZD9re.js";import"./tick-Cg1u7UqH.js";import"./svgIconContainer-BCMIhWa6.js";import"./small-cross-e1k1o1SZ.js";import"./search-Df49v7_E.js";import"./cross-BXl7NczM.js";import"./useValueChanged-DsumsiTQ.js";import"./getPseudoElementBounds-Qvyi7lGR.js";import"./CompositeItem-BRErCda5.js";import"./makeExternalStore-DBs5yW9O.js";import"./BaseForm-f_cXWTXt.js";import"./ActionButton-Du85Cev6.js";import"./Button-4g201-R3.js";import"./SkeletonBar-CpKRXo_I.js";import"./Tooltip-DCCHCGDN.js";import"./info-sign-tx1ONI2g.js";import"./chevron-up-yR-KySJL.js";import"./chevron-down-DeRPcryF.js";import"./useEventCallback-hQRC-YiH.js";import"./iconLoader-CyX2_yW4.js";import"./Switch-CIe2TAoe.js";import"./CompositeRoot-BF6TFUNT.js";import"./TimePicker-D4W2e5w4.js";import"./CollapsiblePanel-CHALF4sW.js";import"./error-GYK-h93n.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-x9zZJEiy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
