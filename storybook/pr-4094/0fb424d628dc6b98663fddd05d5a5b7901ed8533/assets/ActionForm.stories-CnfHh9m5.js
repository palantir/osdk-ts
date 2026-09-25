import{j as t,g as n}from"./iframe-DvmPM8XM.js";import{A as r}from"./action-form-DLREetmw.js";import"./preload-helper-CWXBbGOK.js";import"./DropdownField-siiIARW9.js";import"./debounce-B_vGr92p.js";import"./useOsdkClient-DYbXS0Lf.js";import"./index-Ckyxf5ES.js";import"./Input-DAJjBhoV.js";import"./useBaseUiId-BK6rm_vX.js";import"./useControlled-BlFMc0zn.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./PopoverPopup-BSlx7FSn.js";import"./InternalBackdrop-CDbm9lnE.js";import"./composite-BtMZy7bH.js";import"./index-CiLgD-FQ.js";import"./getDisabledMountTransitionStyles--bG59vx_.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./tick-BBkj7T5w.js";import"./svgIconContainer-CKvBglfs.js";import"./small-cross-COHScf5C.js";import"./search-TBI5J1QZ.js";import"./cross-CWK_3iX0.js";import"./useValueChanged-B2Byj99o.js";import"./getPseudoElementBounds-DIk-7fYl.js";import"./CompositeItem-kRLneeY3.js";import"./makeExternalStore-DPCzTg_N.js";import"./BaseForm-DJQTkP_P.js";import"./ActionButton-B0jn8mYL.js";import"./Button-CdgEMVNK.js";import"./SkeletonBar-CK3zDoai.js";import"./Tooltip-3Oq2VbSf.js";import"./info-sign-C9OOJr6k.js";import"./chevron-up-DdNMRTR2.js";import"./chevron-down-BE3Vkzfj.js";import"./useEventCallback-BHLH-nqa.js";import"./iconLoader-D-ZMaqp3.js";import"./Switch-DpAFiW-q.js";import"./CompositeRoot-C6lBSlqt.js";import"./TimePicker-C5yUmWuS.js";import"./CollapsiblePanel-Bu8C3hKI.js";import"./error-C_RDaNST.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C3HZbqv9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
