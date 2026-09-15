import{j as t,g as n}from"./iframe-oQpn4zur.js";import{A as r}from"./action-form-CvAWyFCG.js";import"./preload-helper-Cmjd7BI4.js";import"./DropdownField-DosPwAAS.js";import"./debounce-DH6i8tLU.js";import"./useOsdkClient-Dge9q3q2.js";import"./index-D2rifVxK.js";import"./Input-BTa_bWxE.js";import"./useBaseUiId-pVATQNHL.js";import"./useControlled-DKwwdhXV.js";import"./index-BgH4UIQM.js";import"./index--_6_irpc.js";import"./PopoverPopup-ChSQAsi2.js";import"./InternalBackdrop-BjzdZcIz.js";import"./composite-C_bfQ-PM.js";import"./index-wyLBv6ta.js";import"./getDisabledMountTransitionStyles-BNE85OYQ.js";import"./ToolbarRootContext-C0a0ALA7.js";import"./tick-yvYbXRUk.js";import"./svgIconContainer-CsxtAqM7.js";import"./small-cross-S_zs3rbw.js";import"./search-CwzMMbdj.js";import"./cross-xvCB5p22.js";import"./useValueChanged-fHbpa3Ve.js";import"./getPseudoElementBounds-DpQWAe0p.js";import"./CompositeItem-M0o16Fhw.js";import"./makeExternalStore-8N_JBzmB.js";import"./BaseForm-DHOx6gsr.js";import"./ActionButton-Dwc2giVA.js";import"./Button-DcQk0Vz0.js";import"./SkeletonBar-BNFrP5fb.js";import"./Tooltip-CnHU-6Zj.js";import"./info-sign-BDMwkSDQ.js";import"./chevron-up-BFObjuh_.js";import"./chevron-down-DhcH1mZx.js";import"./useEventCallback-DBs_uy7k.js";import"./iconLoader-BQazzEzB.js";import"./CompositeRoot-D5KFrtct.js";import"./Switch-DAZD6846.js";import"./TimePicker-DG-tDTvk.js";import"./CollapsiblePanel-BprHq_-m.js";import"./error-G32g_aWE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1JB2Ffo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
