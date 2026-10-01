import{j as t,g as n}from"./iframe-BiMzIlPJ.js";import{A as r}from"./action-form-DpenZpVz.js";import"./preload-helper-dV0TeC0E.js";import"./DropdownField-CfGoTJuL.js";import"./debounce-BQsIlRkA.js";import"./useOsdkClient-Il2EhGQ7.js";import"./index-Dl3SZpx3.js";import"./Input-Cn6g7mcN.js";import"./useBaseUiId-W_-oecTL.js";import"./useControlled-545e9KB7.js";import"./index-BipBLK98.js";import"./index-e-n3pUpE.js";import"./PopoverPopup-BAf_TSo2.js";import"./InternalBackdrop-DhhF01_H.js";import"./composite-NMWOeRk3.js";import"./index-BOxfm3do.js";import"./getDisabledMountTransitionStyles-Co21QCNW.js";import"./ToolbarRootContext-DLbFMlLJ.js";import"./tick-Dv1m_Fkz.js";import"./svgIconContainer-CxWabZX-.js";import"./small-cross-CcTfhdj4.js";import"./search-BuVLYo6z.js";import"./cross-BJNvpKNm.js";import"./useValueChanged-BmyiQTkB.js";import"./getPseudoElementBounds-C_80eEsV.js";import"./CompositeItem-DZTQE9oi.js";import"./makeExternalStore-C_oT62wU.js";import"./BaseForm-lktrkO9G.js";import"./ActionButton-DphoRnh0.js";import"./Button-CQ2rKaZE.js";import"./SkeletonBar-GDzcd7dh.js";import"./Tooltip-DCHj2uG-.js";import"./info-sign-BS4FSGpS.js";import"./chevron-up-L8wD56y1.js";import"./chevron-down-Dj5P_Z4N.js";import"./useEventCallback-BZOG7Hba.js";import"./iconLoader-CZmPyLOW.js";import"./Switch-Voe8-Azf.js";import"./CompositeRoot-BRD39g9O.js";import"./TimePicker-Lxv3YigI.js";import"./CollapsiblePanel-vr5w6FoC.js";import"./error-BvyeXfc5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6MPIy_f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
