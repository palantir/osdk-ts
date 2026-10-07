import{j as t,g as n}from"./iframe-Dn-9qR05.js";import{A as r}from"./action-form-da74DBM7.js";import"./preload-helper-CEUgRBGl.js";import"./DropdownField-DC36O3p8.js";import"./debounce-Bvt0kX1y.js";import"./useOsdkClient-D1GnjUl5.js";import"./index-CShzoPuj.js";import"./Input-Ckj63NR0.js";import"./useBaseUiId-DlYLGnbC.js";import"./useControlled-CX6Xi137.js";import"./index-siGyqdKv.js";import"./index-Cm5JEtld.js";import"./PopoverPopup-B_2-3pgb.js";import"./InternalBackdrop-CSP9tAeZ.js";import"./composite-Dam7p1Gi.js";import"./index-PmTUoQ6e.js";import"./getDisabledMountTransitionStyles-DhN5fa4D.js";import"./ToolbarRootContext-C6ldVUmb.js";import"./tick-CgK3j2VX.js";import"./svgIconContainer-DN7hY7wX.js";import"./small-cross-CfSIwwvk.js";import"./search-B9RszC_k.js";import"./cross-CFJY3pI7.js";import"./useValueChanged-B9A96Xzu.js";import"./getPseudoElementBounds-aQjcu0Ut.js";import"./CompositeItem-DUnPjw9m.js";import"./makeExternalStore-Dqgr7oFO.js";import"./BaseForm-BsPKls6r.js";import"./ActionButton-DJJlGWOS.js";import"./Button-CD6ruQEI.js";import"./SkeletonBar-g7tzeTNf.js";import"./Tooltip-CbEYBBXB.js";import"./info-sign-YvsfQXFH.js";import"./chevron-up-CNSvrdQH.js";import"./chevron-down-fpE-PXKH.js";import"./useEventCallback-yrBTKri_.js";import"./iconLoader-CPCzSRY4.js";import"./Switch-BXOC55N1.js";import"./CompositeRoot-ZIcBBMhy.js";import"./TimePicker-BrD0QUUl.js";import"./CollapsiblePanel-Banv_PU4.js";import"./error-Cuq16P9x.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BQNjNhlw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
