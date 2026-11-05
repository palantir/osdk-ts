import{j as t,g as n}from"./iframe-fiDzxSac.js";import{A as r}from"./action-form-DzXHgS6m.js";import"./preload-helper-vUH8WtXv.js";import"./DropdownField-Pss_3XlK.js";import"./debounce-D-d1nhMU.js";import"./useOsdkClient-BTUTxBhe.js";import"./index-RsLmo9Ef.js";import"./Input-kfNjj_-b.js";import"./useBaseUiId-D5crqalZ.js";import"./useControlled-CY87ml-W.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./PopoverPopup-CoMFK958.js";import"./InternalBackdrop-CodZtGfP.js";import"./composite-BaurXFau.js";import"./index-BbKVh42F.js";import"./getDisabledMountTransitionStyles-Cl4MErAH.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./tick-_9QlYMSH.js";import"./svgIconContainer-DuFQRV6L.js";import"./small-cross-XpA8OmpU.js";import"./search-B0MLGd_Y.js";import"./cross-Dj0Tr1LR.js";import"./useValueChanged-DVEDmsGJ.js";import"./getPseudoElementBounds-Cz4hQZQV.js";import"./CompositeItem-CFHCXDOZ.js";import"./makeExternalStore-GIa5UA4P.js";import"./BaseForm-CfkW0UIk.js";import"./ActionButton-DJAwwkO8.js";import"./Button-BF-ip-LD.js";import"./SkeletonBar-Bv_L57OJ.js";import"./Tooltip-BmuBTOPC.js";import"./info-sign-C8x4_49n.js";import"./chevron-up-CdmodP9H.js";import"./chevron-down-BeNvA5Jp.js";import"./useEventCallback-CNobfbIA.js";import"./iconLoader-De1g7QuH.js";import"./Switch-BcwJ3Gcx.js";import"./CompositeRoot-DJUtzFK0.js";import"./TimePicker-TvLiyHxJ.js";import"./CollapsiblePanel-rOI86CBK.js";import"./error-DWaVmqt2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CGcDstXp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
