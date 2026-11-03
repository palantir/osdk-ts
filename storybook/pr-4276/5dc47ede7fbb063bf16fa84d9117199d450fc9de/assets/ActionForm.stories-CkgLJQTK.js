import{j as t,g as n}from"./iframe-BPsV-cND.js";import{A as r}from"./action-form-Cbm-tAa8.js";import"./preload-helper-B1nX7WCL.js";import"./DropdownField-DFiIaddS.js";import"./debounce-DEe1oMkc.js";import"./useOsdkClient-CEOi39dU.js";import"./index-npdz9ccL.js";import"./Input-BkWiOI8x.js";import"./useBaseUiId-CFNxIaBI.js";import"./useControlled-DoUE8kJv.js";import"./index-g7oHnE4A.js";import"./index-DLTSwoUf.js";import"./isObject-CcXWBQ_P.js";import"./InternalBackdrop-BYQB8CTu.js";import"./composite-Cd7xAWbk.js";import"./index-Qjyvj9j-.js";import"./getDisabledMountTransitionStyles-CBO3vWZa.js";import"./ToolbarRootContext-B-c1meOe.js";import"./tick-RH3_NPL7.js";import"./svgIconContainer-CZZJ1Sam.js";import"./small-cross-DPwXBijp.js";import"./search-hkaYb7x5.js";import"./cross-e0Z9OM7S.js";import"./useValueChanged-DyOnhIxB.js";import"./getPseudoElementBounds-BtlBYKnw.js";import"./CompositeItem-HwzticEg.js";import"./makeExternalStore-CCTjlDRd.js";import"./BaseForm-DkU1dJRQ.js";import"./ActionButton-DM5XNJmd.js";import"./Button-DLrft56q.js";import"./SkeletonBar-Hu0BRFFS.js";import"./Tooltip-D6UWtj7x.js";import"./info-sign-DGpeiFgu.js";import"./chevron-up-CZhrZea4.js";import"./chevron-down-C-mS6li4.js";import"./useEventCallback-CQwery97.js";import"./iconLoader-KR7PIgaP.js";import"./Switch-D7xGFIIm.js";import"./CompositeRoot-DJK5ItIQ.js";import"./TimePicker-C_Vd1Y1Q.js";import"./CollapsiblePanel-CYve3QRN.js";import"./error-Cql48BE9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DzJKMlE9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
