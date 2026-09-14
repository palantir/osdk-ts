import{j as t,g as n}from"./iframe-C3h4Q1BU.js";import{A as r}from"./action-form-BTIbvS73.js";import"./preload-helper-CA8PdwhG.js";import"./DropdownField-TRgvUDZn.js";import"./debounce-CUSOW8NM.js";import"./useOsdkClient-BK_OZ78C.js";import"./index-CuMmyLu1.js";import"./Input-LpvjeHcx.js";import"./useBaseUiId-CW_7Ddvm.js";import"./useControlled-CJNnVZBn.js";import"./index-CLYARYT8.js";import"./index-Xgl-RbZw.js";import"./PopoverPopup-CiqE5a5D.js";import"./InternalBackdrop-Ba1aCLvg.js";import"./composite-CYiVeAjT.js";import"./index-P859LBRx.js";import"./getDisabledMountTransitionStyles-CAVDLyg8.js";import"./ToolbarRootContext-AG_e6eyt.js";import"./tick-C54w7HIP.js";import"./svgIconContainer-DnZbbW9L.js";import"./small-cross-hDACPWQm.js";import"./search-BrzFjKOS.js";import"./cross-B1EMHtko.js";import"./useValueChanged-CkdtL1Gi.js";import"./getPseudoElementBounds-Dbgyc2RJ.js";import"./CompositeItem-DI8BefCP.js";import"./makeExternalStore-Bit4WYt1.js";import"./BaseForm-WkM-ZMNI.js";import"./ActionButton-DJigEBZw.js";import"./Button-CgHUffbd.js";import"./SkeletonBar-DbGt7hsh.js";import"./Tooltip-QCUHwQU8.js";import"./info-sign-D7ntxk_D.js";import"./chevron-up-C5Kuivww.js";import"./chevron-down-BDOZijvO.js";import"./useEventCallback-BLQ3vTi3.js";import"./iconLoader-DKwBad7U.js";import"./CompositeRoot-BRvgbfd5.js";import"./Switch-BRwE-zhm.js";import"./TimePicker-DSezR6bC.js";import"./CollapsiblePanel-BsLzX-dh.js";import"./error-MSHCVYku.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bf4iaqB8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
