import{j as t,g as n}from"./iframe-UsJOy75R.js";import{A as r}from"./action-form-DTtXdr8N.js";import"./preload-helper-BMFhjcbd.js";import"./DropdownField-hxgGPfNJ.js";import"./debounce-C05jCoTa.js";import"./useOsdkClient-B4gpQY7o.js";import"./index-LJeXjTdh.js";import"./Input-CtUjoKBa.js";import"./useBaseUiId-BrB63-GA.js";import"./useControlled-CUgFibpX.js";import"./index-B6uoE1g4.js";import"./index-_ScyNYUM.js";import"./PopoverPopup-DEnJfeh4.js";import"./InternalBackdrop-BvLkiF1F.js";import"./composite-C9sM39C4.js";import"./index-BiyqCy7k.js";import"./getDisabledMountTransitionStyles-CVQ-Uwt_.js";import"./ToolbarRootContext-Ch0u-hZt.js";import"./tick-Bgtx0_Fg.js";import"./svgIconContainer-fImKWsr3.js";import"./small-cross-BOpZ-6OG.js";import"./search-Ch0geOF0.js";import"./cross-BFteWzwf.js";import"./useValueChanged-DElP9LhV.js";import"./getPseudoElementBounds-CEd1PQdU.js";import"./CompositeItem-CtPMwd_g.js";import"./makeExternalStore-CrvnmPw1.js";import"./BaseForm-BI2DYugl.js";import"./ActionButton-B_I8L5VG.js";import"./Button-D7E7FwX5.js";import"./SkeletonBar-6HxN9bQ-.js";import"./Tooltip-DfMLTWhn.js";import"./info-sign-CS1DAUN_.js";import"./chevron-up-KLppXXAa.js";import"./chevron-down-B8hI3iSa.js";import"./useEventCallback-4YDJMtg5.js";import"./iconLoader-C9ALZ3_W.js";import"./CompositeRoot-BuEGG0g8.js";import"./Switch-Cp--KieG.js";import"./TimePicker-JCyVaIUE.js";import"./CollapsiblePanel-BWwXPV-O.js";import"./error-DSrMae8G.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dxoj52t7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
