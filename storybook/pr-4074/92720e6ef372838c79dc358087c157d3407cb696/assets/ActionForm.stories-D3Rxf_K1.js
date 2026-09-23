import{j as t,g as n}from"./iframe-Cav9-PmA.js";import{A as r}from"./action-form-C3BupikV.js";import"./preload-helper-C5qWD71s.js";import"./DropdownField-B1NLU9Rd.js";import"./debounce-Cq7GTWpW.js";import"./useOsdkClient-CyrMft84.js";import"./index-CL4yhLt9.js";import"./Input-BztqfZ4v.js";import"./useBaseUiId-FJrmMdaq.js";import"./useControlled-D_WTTjhN.js";import"./index-B3WsbxUl.js";import"./index-CB0DImnr.js";import"./PopoverPopup-Z0-leGqd.js";import"./InternalBackdrop-B6mZpXks.js";import"./composite-BhU6OEFZ.js";import"./index-BK2mdNIa.js";import"./getDisabledMountTransitionStyles-BN7EVmAM.js";import"./ToolbarRootContext-BTcyHQC1.js";import"./tick-UiUEGSqj.js";import"./svgIconContainer-DLGQs5zG.js";import"./small-cross-CLC5iKl2.js";import"./search-LZGc9ZDj.js";import"./cross-Clu4CbjC.js";import"./useValueChanged-LKsB26MY.js";import"./getPseudoElementBounds-Dlr5-0YW.js";import"./CompositeItem-COO8IGaX.js";import"./makeExternalStore-ZoA1Ll7J.js";import"./BaseForm-DH6U5JIQ.js";import"./ActionButton-DmiOjJKj.js";import"./Button-lsqLjeDU.js";import"./SkeletonBar-DYSwTtQ7.js";import"./Tooltip-DXJLfO__.js";import"./info-sign-BZhYIYC-.js";import"./chevron-up-DzozoERN.js";import"./chevron-down-8Euui_dn.js";import"./useEventCallback-DzYDdyjP.js";import"./iconLoader-DqIuqLN0.js";import"./Switch-DAgGMTIG.js";import"./CompositeRoot-IoKCuD4-.js";import"./TimePicker-CyO1u1Uo.js";import"./CollapsiblePanel-BlEs5D1u.js";import"./error-DdLyc_Py.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bmf3O0C1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
