import{j as t,g as n}from"./iframe-BrTF0wQy.js";import{A as r}from"./action-form-DhsjVihI.js";import"./preload-helper-BrgL7riq.js";import"./DropdownField-BdwvDz8K.js";import"./debounce-DdMg5vR0.js";import"./useOsdkClient-CbbaCk5h.js";import"./index-CLIofpuq.js";import"./Input-BxbCwGL8.js";import"./useBaseUiId-paQZpqMq.js";import"./useControlled-DhGBxpYo.js";import"./index-D3SuSheR.js";import"./index-nFJUSH9O.js";import"./PopoverPopup-CXeUmeNO.js";import"./InternalBackdrop-DTqnKF8D.js";import"./composite-CeMPnKRZ.js";import"./index-BWpmmqhl.js";import"./getDisabledMountTransitionStyles-BNArIVjE.js";import"./ToolbarRootContext-vcL9onuR.js";import"./tick-Bd4yE76w.js";import"./svgIconContainer-_Twg2KpW.js";import"./small-cross-aXc1L9EQ.js";import"./search-CqSH1asp.js";import"./cross-Dlqc_1ZY.js";import"./useValueChanged-BughKinG.js";import"./getPseudoElementBounds-_r6Nu2cP.js";import"./CompositeItem-Cz4Nt1SP.js";import"./makeExternalStore-BDEao_Ea.js";import"./BaseForm-P1X2eJz2.js";import"./ActionButton-C44yj7_9.js";import"./Button-BnRJeVMr.js";import"./SkeletonBar-BHt2XqQp.js";import"./Tooltip-49_4-YPv.js";import"./info-sign-C3WAeekW.js";import"./chevron-up-Coyz-w1G.js";import"./chevron-down-K7i3qdrh.js";import"./useEventCallback-VkT7yqal.js";import"./iconLoader-DwrvgXr6.js";import"./Switch-DwOsFHVc.js";import"./CompositeRoot-C2jY-j5A.js";import"./TimePicker-2rju9nag.js";import"./CollapsiblePanel-D86cBPU8.js";import"./error-Csk-3gAP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXsXQf0j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
