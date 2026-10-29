import{j as t,g as n}from"./iframe-Bd5ScLvv.js";import{A as r}from"./action-form-hjPeLivZ.js";import"./preload-helper-Cto50-3e.js";import"./DropdownField-BbncKGJX.js";import"./debounce-CtExuu3_.js";import"./useOsdkClient-Bh2_dokv.js";import"./index-BInNCm2S.js";import"./Input-Dv_3n2Er.js";import"./useBaseUiId-BEsXvvg0.js";import"./useControlled-BVqmud31.js";import"./index-CcgPg9jD.js";import"./index-BTf-4xqO.js";import"./PopoverPopup-BKdaJUCJ.js";import"./InternalBackdrop-8MqvziLZ.js";import"./composite-Dw0b0MIh.js";import"./index-2Jb0O7pv.js";import"./getDisabledMountTransitionStyles-3dwnvMdU.js";import"./ToolbarRootContext-DGXau_lp.js";import"./tick-CxwVcA9i.js";import"./svgIconContainer-CyD9Prgp.js";import"./small-cross-Dn9mOG55.js";import"./search-DCnhWsbb.js";import"./cross-DFIYwfW7.js";import"./useValueChanged-DA681W-u.js";import"./getPseudoElementBounds-BL_bMsjQ.js";import"./CompositeItem-xycX-JTq.js";import"./makeExternalStore-8KpmsT2I.js";import"./BaseForm-BClMwIM0.js";import"./ActionButton-dOB8dnwG.js";import"./Button-DPVWeAkU.js";import"./SkeletonBar-DJbcp5BQ.js";import"./Tooltip-BmX3jL6b.js";import"./info-sign-tMfw-Q5V.js";import"./chevron-up-DZwD4-cI.js";import"./chevron-down-nJ2TmJoq.js";import"./useEventCallback-D1VXc7Cg.js";import"./iconLoader-BrTBoSV8.js";import"./Switch-ByLKJlgB.js";import"./CompositeRoot-DT7CGqNY.js";import"./TimePicker-BETx0Knw.js";import"./CollapsiblePanel-CU10Nd-t.js";import"./error-Dm9-R7dH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CO8xV1gc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
