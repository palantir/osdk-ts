import{j as t,g as n}from"./iframe-CCkfybyg.js";import{A as r}from"./action-form-2SYObmqF.js";import"./preload-helper-DsTZDItY.js";import"./DropdownField-DvWOBtdg.js";import"./debounce-tod5D_FM.js";import"./useOsdkClient-CkBZw2Yo.js";import"./index-CRuKazN2.js";import"./Input-fn0miJxb.js";import"./useBaseUiId-D3c2AYue.js";import"./useControlled-B0KHjJp9.js";import"./index-BjdCoA9s.js";import"./index-DK7vLZsC.js";import"./PopoverPopup-TyAfAF2x.js";import"./InternalBackdrop-CH7ryVyq.js";import"./composite-CvsgNL3g.js";import"./index-Do3A9MVL.js";import"./getDisabledMountTransitionStyles-YVJprRnT.js";import"./ToolbarRootContext-BENsoGE2.js";import"./tick-CwY60cin.js";import"./svgIconContainer-D9rYUMKl.js";import"./small-cross-u-20rzxu.js";import"./search-DY10Czwo.js";import"./cross-DztAW50z.js";import"./useValueChanged-CkOiuysc.js";import"./getPseudoElementBounds-DalpdOin.js";import"./CompositeItem-C3VXcNTq.js";import"./makeExternalStore-CGDWyW6x.js";import"./BaseForm-CHxsjukt.js";import"./ActionButton-D9UWUs4Y.js";import"./Button-Dk9snPZU.js";import"./SkeletonBar-BMsuO8JO.js";import"./Tooltip-CNLJ0cIh.js";import"./info-sign-DAv3CPCK.js";import"./chevron-up-CyrCC1nX.js";import"./chevron-down-BUd5pETS.js";import"./useEventCallback-BgAFC_QA.js";import"./iconLoader-DAe_uKIV.js";import"./CompositeRoot-CrBLpufM.js";import"./Switch-XWN-4_qM.js";import"./TimePicker-DL8dkGy5.js";import"./CollapsiblePanel-CznC1jF2.js";import"./error-aAb7DCQN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CC5JIT8j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
