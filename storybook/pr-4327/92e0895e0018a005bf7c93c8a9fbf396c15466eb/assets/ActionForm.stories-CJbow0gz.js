import{j as t,g as n}from"./iframe-BJUxpguS.js";import{A as r}from"./action-form-B3I7KXsF.js";import"./preload-helper-CcPnSf_d.js";import"./DropdownField-C6X6tb8E.js";import"./debounce-BHhTV7Zm.js";import"./useOsdkClient-mJtFvI3C.js";import"./index-DaIWjini.js";import"./Input-JPeJu_Ok.js";import"./useBaseUiId-CUsRHIZ_.js";import"./useControlled-CV2ikSFn.js";import"./index-CRptwoO3.js";import"./index-CqveWGS6.js";import"./PopoverPopup-BETux0X9.js";import"./InternalBackdrop-D_jiv0BX.js";import"./composite-fRasBjEb.js";import"./index-DM_u1KSh.js";import"./getDisabledMountTransitionStyles-oGlN2umk.js";import"./ToolbarRootContext-96Mx370G.js";import"./tick-DBILgLMj.js";import"./svgIconContainer-DFZK57uZ.js";import"./small-cross-EomOHUA5.js";import"./search-82BfoOmm.js";import"./cross-CF3gkRQt.js";import"./useValueChanged-C99NUcrN.js";import"./getPseudoElementBounds-DSYHNq3I.js";import"./CompositeItem-DC6J7O9B.js";import"./makeExternalStore-CsEdzCsV.js";import"./BaseForm-CUej09l4.js";import"./ActionButton-DgVSwbQq.js";import"./Button-D6-FRmxX.js";import"./SkeletonBar-Dx6k6i1c.js";import"./Tooltip-B80-nJEh.js";import"./info-sign-CEViEhtE.js";import"./chevron-up-C8GjKNPF.js";import"./chevron-down-D_Er5Djl.js";import"./useEventCallback-BdXNRzTJ.js";import"./iconLoader-BlCHbFY0.js";import"./Switch-BuS-4PHZ.js";import"./CompositeRoot-ml5tECJQ.js";import"./TimePicker-CZ2nDYVB.js";import"./CollapsiblePanel-CqwlYKwl.js";import"./error-GeJDXztf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CmE_vyV8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
