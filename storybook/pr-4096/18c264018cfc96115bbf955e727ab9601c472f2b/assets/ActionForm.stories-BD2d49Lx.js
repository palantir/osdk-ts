import{j as t,g as n}from"./iframe-Dtb1PIwC.js";import{A as r}from"./action-form-B8Bpr18Z.js";import"./preload-helper-CrZ439aZ.js";import"./DropdownField-BmlojZ_x.js";import"./debounce-Da9L3ttw.js";import"./useOsdkClient-too7NMkO.js";import"./index-CLrFOtS8.js";import"./Input-77thj6XN.js";import"./useBaseUiId-COzzw9eg.js";import"./useControlled-C9h-MgnN.js";import"./index-v7pWAnnW.js";import"./index-0o9LwOHv.js";import"./PopoverPopup-BxsY-gjv.js";import"./InternalBackdrop-B9T7uYNU.js";import"./composite-BY6IafNz.js";import"./index-Kclo__p-.js";import"./getDisabledMountTransitionStyles-Bo5uM1fX.js";import"./ToolbarRootContext-CVyIw6JT.js";import"./tick-sHGnIXkS.js";import"./svgIconContainer-DpSb0Wlf.js";import"./small-cross-BU1CI3Ri.js";import"./search-BvnVhgRx.js";import"./cross-CVJIQSJP.js";import"./useValueChanged-BlnwCZsu.js";import"./getPseudoElementBounds-C6ruZhMa.js";import"./CompositeItem-DJjbAwA2.js";import"./makeExternalStore-DJHAEnib.js";import"./BaseForm-BFQHA8y6.js";import"./ActionButton-BVFIiiEV.js";import"./Button-CLxSMUqH.js";import"./SkeletonBar-LfD4cjLN.js";import"./Tooltip-JVmLA6-U.js";import"./info-sign-2a035t9q.js";import"./chevron-up-BwMh7bxG.js";import"./chevron-down-CjmVxAZS.js";import"./useEventCallback-r4_5tZHq.js";import"./iconLoader-CdGrdWFF.js";import"./Switch-HPlq8wa_.js";import"./CompositeRoot-kBz1TnJC.js";import"./TimePicker-BenUzYI0.js";import"./CollapsiblePanel-C6l7NaqJ.js";import"./error-BTkWOlta.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_mXWVb4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
