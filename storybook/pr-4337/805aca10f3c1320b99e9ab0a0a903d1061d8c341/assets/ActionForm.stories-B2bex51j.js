import{j as t,g as n}from"./iframe-B1dY-uMG.js";import{A as r}from"./action-form-C27av7lo.js";import"./preload-helper-CsaNr_BP.js";import"./DropdownField-BrITrwHx.js";import"./debounce-DLzjPmFs.js";import"./useOsdkClient-wEoel6XM.js";import"./index-J8POe0xc.js";import"./Input-Bow4iCTS.js";import"./useBaseUiId-BEMvDf4X.js";import"./useControlled-Q3FRIAaO.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./PopoverPopup-vg0eWmB0.js";import"./InternalBackdrop-kXRP9i2Q.js";import"./composite-DafZoXqK.js";import"./index-v0K9-PBP.js";import"./getDisabledMountTransitionStyles-DNBCt1sN.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./tick-C9npLudO.js";import"./svgIconContainer-Hqh_F8lK.js";import"./small-cross-DNXIHvDW.js";import"./search-NElMm_h6.js";import"./cross-CGzVaZsI.js";import"./useValueChanged-OMxVTtNE.js";import"./getPseudoElementBounds-C1qwlXI7.js";import"./CompositeItem-DJ7Q7uHL.js";import"./makeExternalStore-CS-gtHXP.js";import"./BaseForm-CNfP8aXJ.js";import"./ActionButton-evAWPmgm.js";import"./Button-WD0YpcbL.js";import"./SkeletonBar-DdytvZtY.js";import"./Tooltip-xVmFEZY1.js";import"./info-sign-B-jjcuzW.js";import"./chevron-up-CeiRgD-2.js";import"./chevron-down-DfdYdGBP.js";import"./useEventCallback-Bxw2h9-8.js";import"./iconLoader-BKSDtXCR.js";import"./Switch-DQzFSUTy.js";import"./CompositeRoot-Bi0nYZ5H.js";import"./TimePicker-3E5CryoT.js";import"./CollapsiblePanel-Dxik0TAh.js";import"./error-BzEZzAbM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DuwMRDrg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
