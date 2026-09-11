import{j as t,g as n}from"./iframe-BHMJk_pQ.js";import{A as r}from"./action-form-R9KiibKQ.js";import"./preload-helper-yZDhH5uY.js";import"./DropdownField-C0pXdzvg.js";import"./debounce-CB6HZpU1.js";import"./useOsdkClient-BikzBIxv.js";import"./index-CGIFCVjE.js";import"./Input-Bs3tYIFL.js";import"./useBaseUiId-q1ez9o9O.js";import"./useControlled-CoWycKh2.js";import"./index-DlggJEEa.js";import"./index-CzKMl-a_.js";import"./PopoverPopup-B7XXhvdV.js";import"./InternalBackdrop-BiA6TLUL.js";import"./composite-vsetCZGp.js";import"./index-CpCHJENW.js";import"./getDisabledMountTransitionStyles-D8ahXwaA.js";import"./ToolbarRootContext-eWmTNPN4.js";import"./tick-DGaeG0X3.js";import"./svgIconContainer-EnhuaKpb.js";import"./small-cross-_-iQX0fq.js";import"./search-BSgVHkt6.js";import"./cross-Ca7k_LyQ.js";import"./useValueChanged-DbGFjP29.js";import"./getPseudoElementBounds-CbcE4Eyu.js";import"./CompositeItem-C-ykAJ2x.js";import"./makeExternalStore-BvwVYkGq.js";import"./BaseForm-BWQ_8K98.js";import"./ActionButton-B-A1N2em.js";import"./Button-agVfxQZq.js";import"./SkeletonBar-CzOTj0Px.js";import"./Tooltip-8-o0FWqB.js";import"./info-sign-Ty66Hbsh.js";import"./chevron-up-Dab4RRO1.js";import"./chevron-down-DAwRR1Ih.js";import"./useEventCallback-xm841LUs.js";import"./iconLoader-BzsXRYt_.js";import"./CompositeRoot-DExkPkqU.js";import"./Switch-CJKQVa61.js";import"./TimePicker-CzttCqf2.js";import"./CollapsiblePanel-DfUPQ-ZF.js";import"./error-DwwBySlx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bfl9jveo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
