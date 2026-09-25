import{j as t,g as n}from"./iframe-BcZul-5h.js";import{A as r}from"./action-form-DSMWxtEO.js";import"./preload-helper-CmDzzbHA.js";import"./DropdownField-DSLZwGzV.js";import"./debounce-DtvbDRTR.js";import"./useOsdkClient-tWgMlPel.js";import"./index-DzJXuXA1.js";import"./Input--zoqJ2tF.js";import"./useBaseUiId-BR4pV0Lr.js";import"./useControlled-eXBZEo_R.js";import"./index-CWco2ihj.js";import"./index-pZeQx-_G.js";import"./PopoverPopup-DLNnlymE.js";import"./InternalBackdrop-C0gIi10e.js";import"./composite-C_4CRh4u.js";import"./index-Dfw9WA6q.js";import"./getDisabledMountTransitionStyles-DGAUIi0f.js";import"./ToolbarRootContext-BozYkP2N.js";import"./tick-D_V44cYu.js";import"./svgIconContainer-RYnvKxQV.js";import"./small-cross-BBM4HGVx.js";import"./search-Bzu1qjP_.js";import"./cross-C_wTApPn.js";import"./useValueChanged-DndjiTPh.js";import"./getPseudoElementBounds-BxdRzYrq.js";import"./CompositeItem-DOpNxc2s.js";import"./makeExternalStore-BaDKsdYc.js";import"./BaseForm-BwN9IYf5.js";import"./ActionButton-Kn6WAFbI.js";import"./Button-soVXPdsa.js";import"./SkeletonBar-DggSgXIE.js";import"./Tooltip-8yNzGMPy.js";import"./info-sign-BG-OAAJ0.js";import"./chevron-up-CX8QcSNM.js";import"./chevron-down-BTve9A2e.js";import"./useEventCallback-DFzPAd8H.js";import"./iconLoader-BzefJPZN.js";import"./Switch-CDMzclVK.js";import"./CompositeRoot-B5Oq5aZK.js";import"./TimePicker-CftASHnW.js";import"./CollapsiblePanel-CpZxtz3Z.js";import"./error-BtC0qV1A.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C8vp2Jz9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
