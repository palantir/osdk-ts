import{j as t,g as n}from"./iframe-BqwIL6HW.js";import{A as r}from"./action-form-tXtAHGGs.js";import"./preload-helper-C2aBQR0i.js";import"./DropdownField-DPc-zral.js";import"./debounce-CjNb2h4-.js";import"./useOsdkClient-D1PnuLrI.js";import"./index-Cae-eAYf.js";import"./Input-5dPcAYXy.js";import"./useBaseUiId-BrjtMHRo.js";import"./useControlled-Cn8olvRX.js";import"./index-B_ClGvof.js";import"./index-D80ub2hK.js";import"./PopoverPopup-Mlz_yO9l.js";import"./InternalBackdrop-CgHzff8o.js";import"./composite-ByfMjDoy.js";import"./index-CNDTMQ3q.js";import"./getDisabledMountTransitionStyles-Og5LYC2n.js";import"./ToolbarRootContext-DUNP2109.js";import"./tick-gHUj1QgS.js";import"./svgIconContainer-COFarK7B.js";import"./small-cross-CrN3j_m1.js";import"./search-B46OZpsx.js";import"./cross-BT2F3WaS.js";import"./useValueChanged-CQ0JMvBl.js";import"./getPseudoElementBounds-BNlxAt2r.js";import"./CompositeItem-CbgN92a5.js";import"./makeExternalStore-CWQKdOgP.js";import"./BaseForm-Cu7vhHKf.js";import"./ActionButton-D68kU6Ew.js";import"./Button-DY9YVtH3.js";import"./SkeletonBar-Cjqtl2vi.js";import"./Tooltip-BHtmGDUn.js";import"./info-sign-DOG6xSDw.js";import"./chevron-up-C3xvIoU0.js";import"./chevron-down-S5K5GEQg.js";import"./useEventCallback-DCC9o1g_.js";import"./iconLoader-Cm48ZAzH.js";import"./Switch-BuAIAFaK.js";import"./CompositeRoot-DW3Jh7ms.js";import"./TimePicker-DLL2U0-c.js";import"./CollapsiblePanel-C-zhrpZe.js";import"./error-rHIfSgQZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCVV0LnC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
