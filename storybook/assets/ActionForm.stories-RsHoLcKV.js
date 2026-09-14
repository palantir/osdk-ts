import{j as t,g as n}from"./iframe-8JOFoP6w.js";import{A as r}from"./action-form-rRV0oZoi.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BGIt2m0K.js";import"./debounce-CYBn2EID.js";import"./useOsdkClient-D2545i5_.js";import"./index-DVXlafOG.js";import"./Input-B80vLCMJ.js";import"./useBaseUiId-DJOFV3yl.js";import"./useControlled-EfqR38x7.js";import"./index-DABUx9II.js";import"./index-DIPLjPoi.js";import"./PopoverPopup-fb6R-GhK.js";import"./InternalBackdrop-BC0u02pm.js";import"./composite-Dacbrp7D.js";import"./index-DydTQsmK.js";import"./getDisabledMountTransitionStyles-OPbP8IPW.js";import"./ToolbarRootContext-5xRdL1EJ.js";import"./tick-C65V9PGT.js";import"./svgIconContainer-Bc52btQW.js";import"./small-cross-_0ChGPYI.js";import"./search-ld6lzdhI.js";import"./cross-Ba_aocLO.js";import"./useValueChanged-6-LufgCy.js";import"./getPseudoElementBounds-CjsOipTW.js";import"./CompositeItem-DOhO0oM7.js";import"./makeExternalStore-ZHAkzHUN.js";import"./BaseForm-BrH4I2r4.js";import"./ActionButton-BBgXQWJV.js";import"./Button-BowFr5Gg.js";import"./SkeletonBar-DviTtz4R.js";import"./Tooltip-o0yaOQGv.js";import"./info-sign-BHm6l21E.js";import"./chevron-up-DljBenA-.js";import"./chevron-down-dUDP5SOr.js";import"./useEventCallback-RYf_Rpw0.js";import"./iconLoader-DTuFYRHX.js";import"./CompositeRoot-BzOoRJCF.js";import"./Switch-jc_MX9pr.js";import"./TimePicker-Tg8OGf58.js";import"./CollapsiblePanel-B36mIUJ8.js";import"./error-BLfUwIjQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DErVVM0k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
