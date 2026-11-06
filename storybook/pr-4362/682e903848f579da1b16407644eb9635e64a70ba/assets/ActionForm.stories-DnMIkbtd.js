import{j as t,g as n}from"./iframe-BNBZBstC.js";import{A as r}from"./action-form-iRy_iP7P.js";import"./preload-helper-CnYrZllf.js";import"./DropdownField-Dt-RrUgw.js";import"./debounce-yCFfzmLO.js";import"./useOsdkClient-BWShqPoN.js";import"./index-Cnm8VChd.js";import"./Input-CHUFXkF3.js";import"./useBaseUiId-DT3QZnc6.js";import"./useControlled-hyr-Ee75.js";import"./index-BH-plJ59.js";import"./index-CjrOmp5t.js";import"./isObject-C42gTfZZ.js";import"./InternalBackdrop-DtBSnFoc.js";import"./composite-HrpU287b.js";import"./index-CkDpN7v3.js";import"./getDisabledMountTransitionStyles-CnacvZJ_.js";import"./ToolbarRootContext-DAKa1svD.js";import"./tick-Bqx6qZZ9.js";import"./svgIconContainer-Dn93O-Mo.js";import"./small-cross-rhx74hoP.js";import"./search-DByY8x3h.js";import"./cross-BBwfk0Yp.js";import"./useValueChanged-a5BaAUtx.js";import"./getPseudoElementBounds-CboReYEL.js";import"./CompositeItem-CfUbW9s0.js";import"./makeExternalStore-Ba0UZiRg.js";import"./BaseForm-B1BrKrT3.js";import"./ActionButton-Bdd2VFqy.js";import"./Button-Dadxr29r.js";import"./SkeletonBar-FnJRED2m.js";import"./Tooltip-DPMltsX0.js";import"./info-sign-Djj8sVft.js";import"./chevron-up-C4jOfQGd.js";import"./chevron-down-BqKYZ2w5.js";import"./useEventCallback-CxEm-vEP.js";import"./iconLoader-D3EIFcb6.js";import"./Switch-GxAFYfuc.js";import"./CompositeRoot-CS96P_-f.js";import"./TimePicker-675pmRkH.js";import"./CollapsiblePanel-x-PqwnJ-.js";import"./error-HeD-UTCd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Db562hlY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
