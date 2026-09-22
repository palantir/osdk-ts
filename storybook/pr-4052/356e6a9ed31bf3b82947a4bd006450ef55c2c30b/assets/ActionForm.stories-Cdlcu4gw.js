import{j as t,g as n}from"./iframe-BJw8xZnq.js";import{A as r}from"./action-form-DLO_6PK9.js";import"./preload-helper-C2M64jAW.js";import"./DropdownField-y9HzYpWx.js";import"./debounce-B2aA8tZ4.js";import"./useOsdkClient-5xfZ-Z4n.js";import"./index-OZdfTJJN.js";import"./Input-DNqdhRno.js";import"./useBaseUiId-DWHIjuQg.js";import"./useControlled-CmyWRfbd.js";import"./index-HEHrx6Vm.js";import"./index-CIQ7NXi0.js";import"./PopoverPopup-DyJ-hgtR.js";import"./InternalBackdrop-7aYdMSzr.js";import"./composite-BmKPsG7H.js";import"./index-DwCLziCf.js";import"./getDisabledMountTransitionStyles-CS4l_9WU.js";import"./ToolbarRootContext-CQeuoYdu.js";import"./tick-DNZxoz-8.js";import"./svgIconContainer-BD36YhX4.js";import"./small-cross-BczxdS3W.js";import"./search-DuV2mZJ_.js";import"./cross-ayN7c-y5.js";import"./useValueChanged-XcNypFDC.js";import"./getPseudoElementBounds-aUPqgKrY.js";import"./CompositeItem-DURcqFyw.js";import"./makeExternalStore-BEcA8UuC.js";import"./BaseForm-Bev8NFpV.js";import"./ActionButton-CPTKvkGq.js";import"./Button-DER1yH7e.js";import"./SkeletonBar-C_Mx4TPl.js";import"./Tooltip-Dm91FxLr.js";import"./info-sign-Dmzj_vtq.js";import"./chevron-up-CN2hfoB0.js";import"./chevron-down-DDWnpoJ_.js";import"./useEventCallback-BUxi4iJJ.js";import"./iconLoader-Cp6KBbXU.js";import"./Switch-DTahA6qN.js";import"./CompositeRoot-C59OJ5fp.js";import"./TimePicker-D4nbc-ae.js";import"./CollapsiblePanel-DCUNFkEE.js";import"./error-DreCvNNp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BnQETS83.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
