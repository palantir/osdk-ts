import{j as t,g as n}from"./iframe-D0LlCScw.js";import{A as r}from"./action-form-DHZ9b3Vz.js";import"./preload-helper-BPYsHztA.js";import"./DropdownField-BsF9XJhY.js";import"./debounce-BWX6LBdf.js";import"./useOsdkClient-BbcMY0OU.js";import"./index-R-OWCfkC.js";import"./Input-DguSmqlF.js";import"./useBaseUiId-Cnf8WH7W.js";import"./useControlled-C-xRoLJo.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./PopoverPopup-DPim281m.js";import"./InternalBackdrop-DSzn_M6g.js";import"./composite-DawpNJ_k.js";import"./index-Dh6bu7y0.js";import"./getDisabledMountTransitionStyles-DtmNom5N.js";import"./ToolbarRootContext-DxaGXN87.js";import"./tick-DOJuYt0r.js";import"./svgIconContainer-CPd4FEGO.js";import"./small-cross-D12kpvdn.js";import"./search-Dy9Bh6oJ.js";import"./cross-BIKx7l1B.js";import"./useValueChanged-D4Cuolrk.js";import"./getPseudoElementBounds-lP1dSnSf.js";import"./CompositeItem-DSL5KLQJ.js";import"./makeExternalStore-G-t7fMHO.js";import"./BaseForm-EDNPdGJ3.js";import"./ActionButton-CCgA1PS9.js";import"./Button-Bfbc-efe.js";import"./SkeletonBar-BM6j1C1a.js";import"./Tooltip-ozF9P0sc.js";import"./info-sign-CruEFuxz.js";import"./chevron-up-0z63vdzI.js";import"./chevron-down-D3xB8NyO.js";import"./useEventCallback-BHhry2Ze.js";import"./iconLoader-BFCRncmk.js";import"./Switch-CPFqUtzW.js";import"./CompositeRoot-D4wknlLT.js";import"./TimePicker-BsyDg1Vd.js";import"./CollapsiblePanel-DGCQJ7r2.js";import"./error-g8Wu2PpH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bwsdr4IU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
