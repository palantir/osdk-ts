import{j as t,g as n}from"./iframe-kyVM35Yw.js";import{A as r}from"./action-form-Bhe-GuyR.js";import"./preload-helper-BwEFl8vP.js";import"./DropdownField-CiuWLNC-.js";import"./debounce-DEN9d_8f.js";import"./useOsdkClient-DYm6JtiE.js";import"./index-C0Dea0yk.js";import"./Input-DdIUmJav.js";import"./useBaseUiId-DRkyghGt.js";import"./useControlled-Dv9OfWlo.js";import"./index-B5tuGXqc.js";import"./index-Cq4C7hwK.js";import"./isObject-DXUV5EWh.js";import"./InternalBackdrop-Dx6yt2XY.js";import"./composite-uhZO0Uyq.js";import"./index-DxlcEZaF.js";import"./getDisabledMountTransitionStyles-2PFrzZkZ.js";import"./ToolbarRootContext-hOfYlQDN.js";import"./tick-ZlXNtKJQ.js";import"./svgIconContainer-CLz_w4rV.js";import"./small-cross-DNKmjcOe.js";import"./search-BZ_r27kW.js";import"./cross-C0YFkToE.js";import"./useValueChanged-CAuHoBW5.js";import"./getPseudoElementBounds-BcX2UMFr.js";import"./CompositeItem-CcZT4jH0.js";import"./makeExternalStore-DOr5nas7.js";import"./BaseForm-BSk9YtTY.js";import"./ActionButton-B593_ubA.js";import"./Button-t3LDiAFT.js";import"./SkeletonBar-BjqkVB1N.js";import"./Tooltip-Dvd9Tqx6.js";import"./info-sign-CnQ6--lp.js";import"./chevron-up-BX9GcG-R.js";import"./chevron-down-CnIiSLCf.js";import"./useEventCallback-CIPRgi3m.js";import"./iconLoader-Lf-0gR7Z.js";import"./Switch-BwUjcy2E.js";import"./CompositeRoot-bJeP23sD.js";import"./TimePicker-BTeAK4AC.js";import"./CollapsiblePanel-D0Ogg_Z1.js";import"./error-C0jSc5Zw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B7MvmXC4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
