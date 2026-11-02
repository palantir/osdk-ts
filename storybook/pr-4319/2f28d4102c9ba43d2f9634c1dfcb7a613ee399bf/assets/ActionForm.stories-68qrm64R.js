import{j as t,g as n}from"./iframe-BrffKLyp.js";import{A as r}from"./action-form-C3vTDl2G.js";import"./preload-helper-BB6iUnWm.js";import"./DropdownField-DYCm_r7c.js";import"./debounce-CTTKbsgG.js";import"./useOsdkClient-VXDqhkKt.js";import"./index-DdTg6oKw.js";import"./Input-D50y4-4d.js";import"./useBaseUiId-OXag9z4A.js";import"./useControlled-ByoWnUuY.js";import"./index-BY-yZOS1.js";import"./index-BNYKUSid.js";import"./PopoverPopup-qvwA2CT4.js";import"./InternalBackdrop-CnkFNeAc.js";import"./composite-B19juyCu.js";import"./index-CKbA51qL.js";import"./getDisabledMountTransitionStyles-C9YJOWb9.js";import"./ToolbarRootContext-B5DfTbi7.js";import"./tick-D7AFc6ML.js";import"./svgIconContainer-dbsVi0_7.js";import"./small-cross-CpyGHN9N.js";import"./search-DpKU3GOV.js";import"./cross-Dp6LnhT2.js";import"./useValueChanged-CAUNudgK.js";import"./getPseudoElementBounds-vl7uyq45.js";import"./CompositeItem-BfleHTK8.js";import"./makeExternalStore-DG5GHaRJ.js";import"./BaseForm-Sov1DUMx.js";import"./ActionButton-C4PM5hyU.js";import"./Button-BBZWD59x.js";import"./SkeletonBar-BNhUv384.js";import"./Tooltip-Cnrxi8BQ.js";import"./info-sign-Dsr13ah0.js";import"./chevron-up-DXoCNCBM.js";import"./chevron-down-BEFoIyYv.js";import"./useEventCallback-KlENmr3-.js";import"./iconLoader-CdMc6S6W.js";import"./Switch-D10jvLRv.js";import"./CompositeRoot-D7UWMgY7.js";import"./TimePicker-Cq1vMqZv.js";import"./CollapsiblePanel-B88FbLvt.js";import"./error-y0lQ0i5v.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-rbdPxHeN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
