import{j as t,g as n}from"./iframe-C2ZZ3cOF.js";import{A as r}from"./action-form-BTq0hchV.js";import"./preload-helper-BJtcF0-s.js";import"./DropdownField-BLQjRzQd.js";import"./debounce-BLIS2g0T.js";import"./useOsdkClient-C074xW8m.js";import"./index-DsoOCFTI.js";import"./Input-Dmhhrwdm.js";import"./useBaseUiId-rOymOOAJ.js";import"./useControlled-OqQhu2z4.js";import"./index-CTwT6nYN.js";import"./index-DSVH0ev_.js";import"./PopoverPopup-BaZJt03D.js";import"./InternalBackdrop-DCDgroAI.js";import"./composite-Ddvv9IrU.js";import"./index-yDJJIzMt.js";import"./getDisabledMountTransitionStyles-Baz1yk5y.js";import"./ToolbarRootContext-B1pHyjdA.js";import"./tick-BQbrvSw2.js";import"./svgIconContainer-DGGhigwB.js";import"./small-cross-D1YvVRXB.js";import"./search-U62jo3I0.js";import"./cross--ibNnIEf.js";import"./useValueChanged-DCNsd_18.js";import"./getPseudoElementBounds-CKnr_cwE.js";import"./CompositeItem-DUancClF.js";import"./makeExternalStore-C0CUUcCC.js";import"./BaseForm-lXtbyqrX.js";import"./ActionButton-Behm8cD1.js";import"./Button-D9oV_2gB.js";import"./SkeletonBar-CuXnc-bL.js";import"./Tooltip-_hliLngy.js";import"./info-sign-CQg3vfgz.js";import"./chevron-up-DzDuYe7x.js";import"./chevron-down-Btxrg9J1.js";import"./useEventCallback-B3d5wrwR.js";import"./iconLoader-BTtyp-Bj.js";import"./CompositeRoot-Dd3fRhyE.js";import"./Switch-BqV_v2Sb.js";import"./TimePicker-BAVYSTDw.js";import"./CollapsiblePanel-omRA8Wab.js";import"./error-fD8lMeVM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-vMcZolIP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
