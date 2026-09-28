import{j as t,g as n}from"./iframe-DWfJ7zGz.js";import{A as r}from"./action-form-CdGcTaze.js";import"./preload-helper-BLrTx2bV.js";import"./DropdownField-BX_-W0jL.js";import"./debounce-D-xnc5gC.js";import"./useOsdkClient-BrdUMoba.js";import"./index-gWYSOhKn.js";import"./Input-nyG97nhE.js";import"./useBaseUiId-R5Nwqwa3.js";import"./useControlled-x_cvzMnI.js";import"./index-CjmeahRK.js";import"./index-B26u0c0l.js";import"./PopoverPopup-DzxcpTZ2.js";import"./InternalBackdrop-D1mFfPjU.js";import"./composite-CRrOsq3D.js";import"./index-SCL8CoE2.js";import"./getDisabledMountTransitionStyles-Ckgs-zFo.js";import"./ToolbarRootContext-Dw2-n8FY.js";import"./tick-B7MxtGy7.js";import"./svgIconContainer-DSpgm6ur.js";import"./small-cross-D0wotoyp.js";import"./search-tI2FUc7S.js";import"./cross-osdHHFE1.js";import"./useValueChanged-6sg9t9oG.js";import"./getPseudoElementBounds-CH6esPuI.js";import"./CompositeItem-Db-3OHhb.js";import"./makeExternalStore-BbdjnJds.js";import"./BaseForm-g2I2kyoT.js";import"./ActionButton-dHwh91E3.js";import"./Button-D-n8pDY3.js";import"./SkeletonBar-C6g6-rvc.js";import"./Tooltip-D5kCXUrq.js";import"./info-sign-DPyeGe7r.js";import"./chevron-up-CBDb6XWY.js";import"./chevron-down-B0X1iKQC.js";import"./useEventCallback-Cb-N_Op1.js";import"./iconLoader-Cf2Ca0Qk.js";import"./Switch-CEPkwXmu.js";import"./CompositeRoot-if2jPn0_.js";import"./TimePicker-ClHg7Nu0.js";import"./CollapsiblePanel-DvipQVw5.js";import"./error-DqCKC8-V.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CuePKHJA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
