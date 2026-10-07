import{j as t,g as n}from"./iframe-q2c2VLg1.js";import{A as r}from"./action-form-Dyt0waMi.js";import"./preload-helper-Dd4fXQyN.js";import"./DropdownField-Bthj7fif.js";import"./debounce-C-ob5Pqr.js";import"./useOsdkClient-hNGabp8J.js";import"./index-CRaifptZ.js";import"./Input-BRmugyzW.js";import"./useBaseUiId-omTFJ4IU.js";import"./useControlled-CAFIwmV7.js";import"./index-4j_oKqKk.js";import"./index-9q1QNwoC.js";import"./PopoverPopup--4kjghnN.js";import"./InternalBackdrop-CTJCbO8j.js";import"./composite-NSumfvPY.js";import"./index-Ch4BOwgF.js";import"./getDisabledMountTransitionStyles-CnTFITkJ.js";import"./ToolbarRootContext-gOhTdtut.js";import"./tick-Bb3qh1mv.js";import"./svgIconContainer-BlrvzrEz.js";import"./small-cross-BupKOZtI.js";import"./search-B-fHJPoD.js";import"./cross-CcrMbm-0.js";import"./useValueChanged-DKgjsggr.js";import"./getPseudoElementBounds-D7yijoXW.js";import"./CompositeItem-DvufjjXa.js";import"./makeExternalStore-BO8xauxU.js";import"./BaseForm-jp6EUrsz.js";import"./ActionButton-B33HwgcC.js";import"./Button-BsjIA1gg.js";import"./SkeletonBar-CmnjTk1p.js";import"./Tooltip-Di0qEmWK.js";import"./info-sign-BFTjhZMC.js";import"./chevron-up-XvGVS-mL.js";import"./chevron-down-BiLdY5Pu.js";import"./useEventCallback-BNjTdnVh.js";import"./iconLoader-D6_Odrz0.js";import"./Switch-vkZ4r07j.js";import"./CompositeRoot-34k3_Kr-.js";import"./TimePicker-CPWNr3dz.js";import"./CollapsiblePanel-Dpq-3A02.js";import"./error-D-r93luQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYLb2cmM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
