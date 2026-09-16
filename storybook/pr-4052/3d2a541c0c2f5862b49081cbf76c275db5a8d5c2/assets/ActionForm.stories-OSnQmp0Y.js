import{j as t,g as n}from"./iframe-Ca2h9Cb_.js";import{A as r}from"./action-form-TlA3CBY5.js";import"./preload-helper-DAf9eX-V.js";import"./DropdownField-X-AMgcUu.js";import"./debounce-D2v1avI_.js";import"./useOsdkClient-CVjLcUiq.js";import"./index-DWThxo2f.js";import"./Input-DJ7coF_2.js";import"./useBaseUiId-BeaWeUqC.js";import"./useControlled-DgBClk7b.js";import"./index-khJGmqWk.js";import"./index-BQgpEwzp.js";import"./PopoverPopup-Dbmji2sV.js";import"./InternalBackdrop-DFUqPzG4.js";import"./composite-BHDhYMvG.js";import"./index-DH2EreSc.js";import"./getDisabledMountTransitionStyles-DBV7Mlk2.js";import"./ToolbarRootContext-Dw75y5NP.js";import"./tick-Db6JqMoI.js";import"./svgIconContainer-Bn-48Fxt.js";import"./small-cross-CNAC6Gdk.js";import"./search-CuSTqVc7.js";import"./cross-kbTjrbem.js";import"./useValueChanged-ChMbBnhn.js";import"./getPseudoElementBounds-vkG9JlGu.js";import"./CompositeItem-Bm7sSUUb.js";import"./makeExternalStore-Toi8vQS6.js";import"./BaseForm-ZlK8lbTE.js";import"./ActionButton-DHMmr5VF.js";import"./Button-DuNKOwnz.js";import"./SkeletonBar-BXjaSTgH.js";import"./Tooltip-6EC7drX-.js";import"./info-sign-BcExwvq9.js";import"./chevron-up-oGk9h3X6.js";import"./chevron-down-BbQxi628.js";import"./useEventCallback-Cy_0PmmR.js";import"./iconLoader-BZvv9e7j.js";import"./Switch-Cb851kp1.js";import"./CompositeRoot-Cdk3lUd_.js";import"./TimePicker-BB6vrD7C.js";import"./CollapsiblePanel-XpP7JVfq.js";import"./error-JTYK1w6o.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BAX4qEws.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
