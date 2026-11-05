import{j as t,g as n}from"./iframe-CCpQdKcM.js";import{A as r}from"./action-form-DHpMRYCn.js";import"./preload-helper-BcC5NClT.js";import"./DropdownField-BU_Oq5Hk.js";import"./debounce-Dbh2BnKn.js";import"./useOsdkClient-DPTADJgv.js";import"./index-D5kRSGTL.js";import"./Input-DqLoo56V.js";import"./useBaseUiId-wkrh1dan.js";import"./useControlled-D4_I-zYv.js";import"./index-vQ0gYfTZ.js";import"./index-Da9G4TOJ.js";import"./PopoverPopup-CVqq9jQl.js";import"./InternalBackdrop-0tCSKsfM.js";import"./composite-BPsF8oXT.js";import"./index-BmXZZFpC.js";import"./getDisabledMountTransitionStyles-DBiOGOcl.js";import"./ToolbarRootContext-Dxu4wH7j.js";import"./tick-D7yVxnRA.js";import"./svgIconContainer-D0YWtwPv.js";import"./small-cross-CAUesoy1.js";import"./search-Bo8XWJqp.js";import"./cross-BC47wddT.js";import"./useValueChanged-DJDOwxxY.js";import"./getPseudoElementBounds-BEDo5e11.js";import"./CompositeItem-BtN-TT4o.js";import"./makeExternalStore-CdAfQAQ3.js";import"./BaseForm-DLzX7eh8.js";import"./ActionButton-CHEJ8NBC.js";import"./Button-B4X_MUbo.js";import"./SkeletonBar-BkJLIidD.js";import"./Tooltip-VwjYwtbN.js";import"./info-sign-CETFpUsT.js";import"./chevron-up-Bo7oYQlf.js";import"./chevron-down-DF5kUyWB.js";import"./useEventCallback-CsPxOccP.js";import"./iconLoader-BwNI4tMt.js";import"./Switch-YSFGTXI-.js";import"./CompositeRoot-BWhClFhh.js";import"./TimePicker-igSfLWSZ.js";import"./CollapsiblePanel-wkRu-vQO.js";import"./error-CnylztP4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Kob29Pb2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
