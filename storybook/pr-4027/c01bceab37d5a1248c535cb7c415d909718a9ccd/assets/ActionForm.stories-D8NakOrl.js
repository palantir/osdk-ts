import{j as t,g as n}from"./iframe-C4E-g_Np.js";import{A as r}from"./action-form-C0Fo9hOj.js";import"./preload-helper-rW2p5jqX.js";import"./DropdownField-qBxkOplm.js";import"./debounce-B9bCgoy4.js";import"./useOsdkClient-DuIbV6Tk.js";import"./index-CzqkLMMI.js";import"./Input-BPR-03z-.js";import"./useBaseUiId-B-PzIYIN.js";import"./useControlled-CQT-2p8e.js";import"./index-D1JR9Ik6.js";import"./index-BMt0vC51.js";import"./PopoverPopup-UNHpzLqe.js";import"./InternalBackdrop-Cc3UyaVF.js";import"./composite-BnlE1__B.js";import"./index-1_U-6RN5.js";import"./getDisabledMountTransitionStyles-BXneaNn3.js";import"./ToolbarRootContext-DAbASYAb.js";import"./tick-CrIHxN3X.js";import"./svgIconContainer-i3Vzui20.js";import"./small-cross-ClQmt7Kl.js";import"./search-CfqJuXpO.js";import"./cross-6-c7L2_r.js";import"./useValueChanged-DvRoJUac.js";import"./getPseudoElementBounds-BqbtI_0K.js";import"./CompositeItem-DpdLDIC_.js";import"./makeExternalStore-o-ytUCUX.js";import"./BaseForm-Bq3xd7rm.js";import"./ActionButton-CiCsL3Oo.js";import"./Button-kJtgGGYx.js";import"./SkeletonBar-CISy7UuQ.js";import"./Tooltip-YL3zwoBF.js";import"./info-sign-CpHm5WIq.js";import"./chevron-up-BwfaiWeE.js";import"./chevron-down-CUSU7y7B.js";import"./useEventCallback-B_G8HNu3.js";import"./iconLoader-DUPAbH8F.js";import"./CompositeRoot-Cnqg15jt.js";import"./Switch-z-5Z7r97.js";import"./TimePicker-CHVUfOJE.js";import"./CollapsiblePanel-DIugTpM9.js";import"./error-2WKWP45F.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-IbzZIByL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
