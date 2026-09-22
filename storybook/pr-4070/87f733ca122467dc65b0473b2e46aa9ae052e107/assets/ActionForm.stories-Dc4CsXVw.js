import{j as t,g as n}from"./iframe-BlDiaW1h.js";import{A as r}from"./action-form-CqjNB9UV.js";import"./preload-helper-PtL6Kd_x.js";import"./DropdownField-RavzYQu_.js";import"./debounce-Byq2NX1_.js";import"./useOsdkClient-0OHPk9sh.js";import"./index-DfWhxneD.js";import"./Input-Bii20VeK.js";import"./useBaseUiId-CNzKZZyr.js";import"./useControlled-DBQ0gE6b.js";import"./index-CaosaIAK.js";import"./index-ClB2daRU.js";import"./PopoverPopup-CQXuiQcH.js";import"./InternalBackdrop-CknQDtg2.js";import"./composite-RC4cbmpt.js";import"./index-C44_u6Fw.js";import"./getDisabledMountTransitionStyles-Oq1-yxTZ.js";import"./ToolbarRootContext-B0Ir569T.js";import"./tick-a-bDbPLS.js";import"./svgIconContainer-kniEZwHz.js";import"./small-cross-1dCALZ0r.js";import"./search-BTwweTf6.js";import"./cross-e0aRrlM-.js";import"./useValueChanged-Ig3qxvFS.js";import"./getPseudoElementBounds-IJPs3uLW.js";import"./CompositeItem-OhI6t6UV.js";import"./makeExternalStore-BGsi_gFr.js";import"./BaseForm-Dg2CVMl3.js";import"./ActionButton-DCdCIlKP.js";import"./Button-BcWNCj5I.js";import"./SkeletonBar-CPfB3dvv.js";import"./Tooltip-Cay9QyIc.js";import"./info-sign-yTlw8XiY.js";import"./chevron-up-CyIxL4xy.js";import"./chevron-down-CQlGXejk.js";import"./useEventCallback-DsUQ3PVF.js";import"./iconLoader-_nSNN25j.js";import"./Switch-CprHIHyd.js";import"./CompositeRoot-Dhv_Dc0k.js";import"./TimePicker-CMhg0ZoS.js";import"./CollapsiblePanel-BeO6_bQ6.js";import"./error-DI0bgW6O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BxS0W9JC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
