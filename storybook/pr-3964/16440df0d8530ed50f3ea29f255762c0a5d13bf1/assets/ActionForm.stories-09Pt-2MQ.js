import{j as t,g as n}from"./iframe-BPFPjQfN.js";import{A as r}from"./action-form-D8GGpgS-.js";import"./preload-helper-BS5sFlIZ.js";import"./DropdownField-Bu6RRAh2.js";import"./debounce-CINcFD0i.js";import"./useOsdkClient-e-CK1Pug.js";import"./index-DLsuK50b.js";import"./Input-Cbr4DxDr.js";import"./useBaseUiId-XR0mowR0.js";import"./useControlled-DWmknCjz.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./PopoverPopup-Bn_qWbD4.js";import"./InternalBackdrop-Df1he87e.js";import"./composite--6cSo0WV.js";import"./index-Biydlrf3.js";import"./getDisabledMountTransitionStyles-BoepTDS0.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./tick-DSAjIfQR.js";import"./svgIconContainer-BCrLikms.js";import"./small-cross-yjorOgrv.js";import"./search-CZtJ4QjI.js";import"./cross-jacAbTr1.js";import"./useValueChanged-CuY1VjDq.js";import"./getPseudoElementBounds-CV-CmjZt.js";import"./CompositeItem-BU1kZ6Zk.js";import"./makeExternalStore-BJ259EIr.js";import"./BaseForm-Dn_tFozm.js";import"./ActionButton-CQmjB9pW.js";import"./Button-MukxU7Us.js";import"./SkeletonBar-CMuVE2LV.js";import"./Tooltip-3bmH_QUq.js";import"./info-sign-D5ubirw8.js";import"./chevron-up-Cy7f5Tfh.js";import"./chevron-down-U37QTCrW.js";import"./useEventCallback-DNQjSEKX.js";import"./iconLoader-BiTIJGIG.js";import"./CompositeRoot-CA970t9z.js";import"./Switch-CdtNxQpL.js";import"./TimePicker-xGrIL1a_.js";import"./CollapsiblePanel-DYgAn-VX.js";import"./error-DEs_Iieb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DyIxSijK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
