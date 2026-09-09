import{j as t,g as n}from"./iframe-DIsuQOn3.js";import{A as r}from"./action-form-cy4XpOvw.js";import"./preload-helper-B4-DY1XA.js";import"./DropdownField-CPMOgCNE.js";import"./debounce--qe2URPh.js";import"./useOsdkClient-B5UtOc8b.js";import"./index-DDUWefxd.js";import"./Input-ChZNHuDE.js";import"./useBaseUiId-KXmclwOQ.js";import"./useControlled-CNU4MnWQ.js";import"./index-yKKDsrZW.js";import"./index-CHAIk4qd.js";import"./PopoverPopup-drv0vkbG.js";import"./InternalBackdrop-Z3WNzKgy.js";import"./composite-Cieee4Ac.js";import"./index-4qujKuhJ.js";import"./getDisabledMountTransitionStyles-Bveqp3mS.js";import"./ToolbarRootContext-DPQZSAuV.js";import"./tick-CM6bqr7p.js";import"./svgIconContainer-Dc19E04o.js";import"./small-cross-CTvIFdJF.js";import"./search-BXyxqXsb.js";import"./cross-tvYPvXsb.js";import"./useValueChanged--eVggWgx.js";import"./getPseudoElementBounds-DTH4TDRK.js";import"./CompositeItem-Dk6CpBJD.js";import"./makeExternalStore-2cK-X4a7.js";import"./BaseForm-BMi2IQky.js";import"./ActionButton-CEEeCIPZ.js";import"./Button-SgvkStmW.js";import"./SkeletonBar-CCfy-2Fl.js";import"./Tooltip-B5gVs8IO.js";import"./info-sign-Dpfq_GON.js";import"./chevron-up-BhJgkVxf.js";import"./chevron-down-C_9riItt.js";import"./useEventCallback-BReMLTyY.js";import"./iconLoader-C6SoNIMy.js";import"./CompositeRoot-DlzFGTx3.js";import"./Switch-B5Q9stl9.js";import"./TimePicker-DVUYmSZY.js";import"./CollapsiblePanel-D1ePGiZR.js";import"./error-DpfjWw-I.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DC7VgxYE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
