import{j as t,g as n}from"./iframe-D0tV0cI9.js";import{A as r}from"./action-form-BjyWx0t9.js";import"./preload-helper-BMejyDSI.js";import"./DropdownField-C2c-svQN.js";import"./debounce-CQ8ktfpw.js";import"./useOsdkClient-BHqJSoPG.js";import"./index--X-dIIbK.js";import"./Input-COsc6IX5.js";import"./useBaseUiId-DOX0bj2Y.js";import"./useControlled-LJkicshM.js";import"./index-PxTuLgQ7.js";import"./index--qRovy9Z.js";import"./PopoverPopup-CgzNWAqf.js";import"./InternalBackdrop-8s1L6ptE.js";import"./composite-eLTYJf7x.js";import"./index-B0E7m3m7.js";import"./getDisabledMountTransitionStyles-CU_JeY5i.js";import"./ToolbarRootContext-BrObQQEc.js";import"./tick-O8NB6F9G.js";import"./svgIconContainer-D4vQ8nMV.js";import"./small-cross-hHO5mdkn.js";import"./search-Cnl0jIoS.js";import"./cross-D1A4Ur2n.js";import"./useValueChanged-DUSHD8U9.js";import"./getPseudoElementBounds-B-8LJsE_.js";import"./CompositeItem-Ch1OySWF.js";import"./makeExternalStore-CczQoVJf.js";import"./BaseForm-B6PMWiSE.js";import"./ActionButton-nMCNHSER.js";import"./Button-DgOszdIa.js";import"./SkeletonBar-BXKY95YJ.js";import"./Tooltip-su0Z3mzC.js";import"./info-sign-D3LP_k7e.js";import"./chevron-up-C-76tjxf.js";import"./chevron-down-BYHSUQw3.js";import"./useEventCallback-BU2eLzaP.js";import"./iconLoader-KnRm0ulF.js";import"./Switch-u_28PkNm.js";import"./CompositeRoot-Tol4TLHR.js";import"./TimePicker-Bx6XMsfw.js";import"./CollapsiblePanel-C_dUzpsn.js";import"./error-BLp0q_TC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1pmSZXh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
