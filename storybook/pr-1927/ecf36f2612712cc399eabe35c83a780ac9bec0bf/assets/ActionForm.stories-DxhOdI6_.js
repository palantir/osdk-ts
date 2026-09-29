import{j as t,g as n}from"./iframe-B2Hbgk_7.js";import{A as r}from"./action-form-xHIkpDJt.js";import"./preload-helper-BIOghnjg.js";import"./DropdownField-DIFmpXyB.js";import"./debounce-Xb7mC0HA.js";import"./useOsdkClient--TStUSqZ.js";import"./index-DrosstMD.js";import"./Input-C7VTBgbc.js";import"./useBaseUiId-El1KPGB5.js";import"./useControlled-Y-hNBLuR.js";import"./index-BElQuRwB.js";import"./index-y9S8xmis.js";import"./PopoverPopup-Cp5uUE9r.js";import"./InternalBackdrop-ZJrbhxPy.js";import"./composite-C00UUeG4.js";import"./index-DRG_YeJ3.js";import"./getDisabledMountTransitionStyles-DrqZTZzZ.js";import"./ToolbarRootContext-deiGRCW1.js";import"./tick-7D0Lucc7.js";import"./svgIconContainer-kTH1S9JE.js";import"./small-cross-vAFwZtSV.js";import"./search-Dge6vq_P.js";import"./cross-CMOlEEKU.js";import"./useValueChanged-Dpnjqk8r.js";import"./getPseudoElementBounds-BgsAZpVp.js";import"./CompositeItem-CUZ4C8IA.js";import"./makeExternalStore-BIZDH2fs.js";import"./BaseForm-DQSy6L0L.js";import"./ActionButton-DLmadiS3.js";import"./Button-ChD0uv2M.js";import"./SkeletonBar-gVSZNwCd.js";import"./Tooltip-COASp5Bq.js";import"./info-sign-DDaL0fln.js";import"./chevron-up-DsndQemZ.js";import"./chevron-down-BIdOqTL3.js";import"./useEventCallback-DLOU8qGC.js";import"./iconLoader-CbaGI-v5.js";import"./Switch-odCak_QJ.js";import"./CompositeRoot-DHn6zOC7.js";import"./TimePicker-BABwVeHx.js";import"./CollapsiblePanel-pfoTWKHp.js";import"./error-CG38qSaD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cum7Zc0o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
