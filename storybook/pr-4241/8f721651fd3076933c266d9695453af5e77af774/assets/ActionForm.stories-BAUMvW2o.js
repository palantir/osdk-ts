import{j as t,g as n}from"./iframe-Czm_u8Ar.js";import{A as r}from"./action-form-BmE19knd.js";import"./preload-helper-BuAj_jN-.js";import"./DropdownField-ByNhlw8y.js";import"./debounce-D6HpQvGw.js";import"./useOsdkClient-D-g2OSKy.js";import"./index-XKqF3n2I.js";import"./Input-C4CruWhv.js";import"./useBaseUiId-Me4okoRq.js";import"./useControlled-Bgi6lmRr.js";import"./index-C3TofrwO.js";import"./index-D17LzocE.js";import"./PopoverPopup-DGUEg27x.js";import"./InternalBackdrop-CSYiZwEF.js";import"./composite-C_KD_tny.js";import"./index-DqRB57_4.js";import"./getDisabledMountTransitionStyles-De4xDMuu.js";import"./ToolbarRootContext-CxE6VRH9.js";import"./tick-Dq-bnKtS.js";import"./svgIconContainer-CgTn6RWL.js";import"./small-cross-CFLQZxWq.js";import"./search-DY6wtpjt.js";import"./cross-BlHijBJ4.js";import"./useValueChanged-BSuWxBvq.js";import"./getPseudoElementBounds-DfVhyAPU.js";import"./CompositeItem-y1T0uWu2.js";import"./makeExternalStore-DKjvIENS.js";import"./BaseForm-CiKixcW_.js";import"./ActionButton-CUg5ARhM.js";import"./Button-DycfsGl1.js";import"./SkeletonBar-BvQmf4En.js";import"./Tooltip-BhsvKrtc.js";import"./info-sign-DIhe3QU3.js";import"./chevron-up-Cm_QjhT8.js";import"./chevron-down-CPUKsW46.js";import"./useEventCallback-CQUNaXho.js";import"./iconLoader-CM7tvdLO.js";import"./Switch-RBBzG6hX.js";import"./CompositeRoot-CXMGTMXm.js";import"./TimePicker-_1GihjiW.js";import"./CollapsiblePanel-B3l-zgfo.js";import"./error-DU7bFYdf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BQzxgqT1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
