import{j as t,g as n}from"./iframe-iH6aGZ-L.js";import{A as r}from"./action-form-DzC6otMi.js";import"./preload-helper-CJtpjaOC.js";import"./DropdownField-Dx9t1Lmw.js";import"./debounce-DZlmqeaB.js";import"./useOsdkClient-B8seCst5.js";import"./index-B4R4MaYX.js";import"./Input-D14Qdbql.js";import"./useBaseUiId-BSDhHAYa.js";import"./useControlled-Ciw2H6Dm.js";import"./index-DyyqAmyq.js";import"./index-2xFQTGFl.js";import"./PopoverPopup-BjYwELlB.js";import"./InternalBackdrop-CtbdD6NE.js";import"./composite-DeLDawp0.js";import"./index-CLkrj7OE.js";import"./getDisabledMountTransitionStyles-BgzHU7dJ.js";import"./ToolbarRootContext-BUYtkzjr.js";import"./tick-B6XK7voc.js";import"./svgIconContainer-BL1fQZ1j.js";import"./small-cross-BwgZyYIG.js";import"./search-2at2vqv1.js";import"./cross-CkFkh41g.js";import"./useValueChanged-CAss3vNn.js";import"./getPseudoElementBounds-CoVHCcVm.js";import"./CompositeItem-DWpKdWiQ.js";import"./makeExternalStore-DoAAt5DI.js";import"./BaseForm-DGkos01c.js";import"./ActionButton-CFvcoen5.js";import"./Button-7Khz_S_G.js";import"./SkeletonBar-DBSXSsw6.js";import"./Tooltip-y6ddxL_Q.js";import"./info-sign-t_2zImoZ.js";import"./chevron-up-DevHBhg2.js";import"./chevron-down-Uo9hPIsv.js";import"./useEventCallback-BK2MNF3p.js";import"./iconLoader-D6I57Uvp.js";import"./CompositeRoot-Dqfyq2-j.js";import"./Switch-6UGaCn2s.js";import"./TimePicker-JQpzL1QA.js";import"./CollapsiblePanel-DU6yeCre.js";import"./error-UygG0IL8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5j3Cgvy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
