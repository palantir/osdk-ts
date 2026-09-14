import{j as t,g as n}from"./iframe-DNB7pKwx.js";import{A as r}from"./action-form-DVe4lu8l.js";import"./preload-helper-zsyjqppt.js";import"./DropdownField-BbJfNZO2.js";import"./debounce-o7CNYw6i.js";import"./useOsdkClient-DLQVDV9-.js";import"./index-CO8W_kBY.js";import"./Input-D7pQEHrn.js";import"./useBaseUiId-CFk2utP-.js";import"./useControlled-CZirorca.js";import"./index-Cw7J0xRI.js";import"./index-BWzAq-lx.js";import"./PopoverPopup-CBmLhNWS.js";import"./InternalBackdrop-CIfMg3nl.js";import"./composite-Bsz5rAKx.js";import"./index-ByG_Kyzm.js";import"./getDisabledMountTransitionStyles-C1tq72oP.js";import"./ToolbarRootContext-Bsj6zD7P.js";import"./tick-avU0SFao.js";import"./svgIconContainer-C0yR1K-j.js";import"./small-cross-Cm5tY5N1.js";import"./search-B9wO7VDL.js";import"./cross-Z_Cymmuf.js";import"./useValueChanged-CqJ9Z422.js";import"./getPseudoElementBounds-C6kDNpun.js";import"./CompositeItem-DZ0O8IVJ.js";import"./makeExternalStore-rGxpfiad.js";import"./BaseForm-DH9uuZJL.js";import"./ActionButton-BDTx-Qbk.js";import"./Button-HIyOMk5a.js";import"./SkeletonBar-w-Qq4Ert.js";import"./Tooltip-CPCusgxO.js";import"./info-sign-BHGp8zxT.js";import"./chevron-up-BlSwyyPp.js";import"./chevron-down-DkSb3Fq2.js";import"./useEventCallback-TZn-4x3i.js";import"./iconLoader-CC-KxnEJ.js";import"./CompositeRoot-Bby4hQdF.js";import"./Switch-sYp2sDPU.js";import"./TimePicker-CGKD3hOy.js";import"./CollapsiblePanel-B-v-suKQ.js";import"./error-DTTI1i1g.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-aAvnjy0e.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
