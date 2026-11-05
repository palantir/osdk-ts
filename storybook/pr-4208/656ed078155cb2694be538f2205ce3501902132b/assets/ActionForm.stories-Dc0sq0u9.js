import{j as t,g as n}from"./iframe-2J5FrKrg.js";import{A as r}from"./action-form-CDM4ZePr.js";import"./preload-helper-1KHcGwA2.js";import"./DropdownField-CV1IThhY.js";import"./debounce-CrX5_LDj.js";import"./useOsdkClient-dszr35NK.js";import"./index-DdQFZN0A.js";import"./Input-BEKgo6O6.js";import"./useBaseUiId-BvE4vbB0.js";import"./useControlled-BRuPwTnE.js";import"./index-CoGmcCzI.js";import"./index-bAdLuKNp.js";import"./PopoverPopup-CgQ4X2Ge.js";import"./InternalBackdrop-C54DBojs.js";import"./composite-BbUTZOvt.js";import"./index-BWJlDcPZ.js";import"./getDisabledMountTransitionStyles-BNeqbgtt.js";import"./ToolbarRootContext-CzvAPQX5.js";import"./tick-w61hFyp6.js";import"./svgIconContainer-C5u_HnP9.js";import"./small-cross-BBZdbk9L.js";import"./search-fHZBvfeM.js";import"./cross-C3qjpKNn.js";import"./useValueChanged-DXaGf5Gs.js";import"./getPseudoElementBounds-C-mj8-g1.js";import"./CompositeItem-yS3I_oZm.js";import"./makeExternalStore-B7uL5LnD.js";import"./BaseForm-BJ7Qf02E.js";import"./ActionButton-DWjB7yZw.js";import"./Button-CtoNW8MW.js";import"./SkeletonBar-BN0PV5wz.js";import"./Tooltip-C8NnOdy1.js";import"./info-sign-HF2HiWg_.js";import"./chevron-up-BU8kh7eR.js";import"./chevron-down-DfTNwrQT.js";import"./useEventCallback-LZLaGDRe.js";import"./iconLoader-C5X3zz-R.js";import"./Switch-A6c3Ub-S.js";import"./CompositeRoot-CMzz373t.js";import"./TimePicker-C5Kvc1NJ.js";import"./CollapsiblePanel-C-9b8GqA.js";import"./error-55u3yHQS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-4gfK0oWP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
