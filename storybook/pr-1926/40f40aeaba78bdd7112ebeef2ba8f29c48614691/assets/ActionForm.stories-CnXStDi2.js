import{j as t,g as n}from"./iframe-CKrQ01Tw.js";import{A as r}from"./action-form-Kwb2saOG.js";import"./preload-helper-ChvNP4Pl.js";import"./DropdownField-CstOe1Ir.js";import"./debounce-BBFO8SUe.js";import"./useOsdkClient-Cx-PCDzm.js";import"./index-BIdRQM2S.js";import"./Input-Cq0Ol3YB.js";import"./useBaseUiId-B2KTelTM.js";import"./useControlled-BlU5vlUe.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./PopoverPopup-BoVZQgTK.js";import"./InternalBackdrop-DZCFtxK4.js";import"./composite-CgNTf1JJ.js";import"./index-CIIKdpni.js";import"./getDisabledMountTransitionStyles-Cj27Wpwi.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./tick-sRemk3LV.js";import"./svgIconContainer-BWrjI0N2.js";import"./small-cross-CZEI8mhu.js";import"./search-G6EfpRFi.js";import"./cross-Bj1Rnssl.js";import"./useValueChanged-I3JyBt64.js";import"./getPseudoElementBounds-Bcz462pH.js";import"./CompositeItem-Bisu6D-H.js";import"./makeExternalStore-DmTWPGlO.js";import"./BaseForm-BnsxHWZd.js";import"./ActionButton-BCIDvNWh.js";import"./Button-Cq8nZ_ey.js";import"./SkeletonBar-BoUHhX8q.js";import"./Tooltip-DNNmdmtX.js";import"./info-sign-CM2ITvLQ.js";import"./chevron-up-PQcG-fSL.js";import"./chevron-down-BWfpQhPj.js";import"./useEventCallback-CgTz_qfp.js";import"./iconLoader-DmrXA4uk.js";import"./Switch-s7orG7Hb.js";import"./CompositeRoot-BKrbmhMz.js";import"./TimePicker-BmuLxdD2.js";import"./CollapsiblePanel-Chcrgg3J.js";import"./error-BeLhzW1q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5P2QGy1j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
