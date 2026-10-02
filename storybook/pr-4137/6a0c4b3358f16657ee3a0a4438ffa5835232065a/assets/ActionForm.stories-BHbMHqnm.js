import{j as t,g as n}from"./iframe-BwtdJUQ8.js";import{A as r}from"./action-form-BwDzeYvG.js";import"./preload-helper-DJuGrF4Q.js";import"./DropdownField-DTj4mE1E.js";import"./debounce-DG4OIz6a.js";import"./useOsdkClient-BqxjQYKW.js";import"./index-ecbPEJsH.js";import"./Input-Ckc7B0k2.js";import"./useBaseUiId-DlvOV9lG.js";import"./useControlled-CTxNl2GG.js";import"./index-D-6QZGaS.js";import"./index-NBYYlFiK.js";import"./PopoverPopup-tHLORX91.js";import"./InternalBackdrop-CisMUyd7.js";import"./composite-DglRx_pb.js";import"./index-BwJhQ8nN.js";import"./getDisabledMountTransitionStyles-CQlZrmJ4.js";import"./ToolbarRootContext-B6jDfH-i.js";import"./tick-B5x4eMkK.js";import"./svgIconContainer-BpIR-cOm.js";import"./small-cross-I0t2HoBL.js";import"./search-BMvzDH_4.js";import"./cross-D5O7asJB.js";import"./useValueChanged-CCi2b_rF.js";import"./getPseudoElementBounds-Bh8KnJGz.js";import"./CompositeItem-gNAn1-ON.js";import"./makeExternalStore-BDYC9xXC.js";import"./BaseForm-B2ZPMZqC.js";import"./ActionButton-DqEhm5OJ.js";import"./Button-a-v4YEmM.js";import"./SkeletonBar-BlzetxzD.js";import"./Tooltip-j2N8aKD1.js";import"./info-sign-BKuaqzfE.js";import"./chevron-up-DmLmV1CY.js";import"./chevron-down-DAI8xIlK.js";import"./useEventCallback-MmoNwFiG.js";import"./iconLoader-8TL6Tb1K.js";import"./Switch-DDPkkGBh.js";import"./CompositeRoot-iqzsGS7W.js";import"./TimePicker-DW-kXzCe.js";import"./CollapsiblePanel-YpC4VMjy.js";import"./error-B3Glsuys.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DjmWzspB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
