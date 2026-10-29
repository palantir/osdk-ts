import{j as t,g as n}from"./iframe-C6LjohtU.js";import{A as r}from"./action-form-bAuvyPul.js";import"./preload-helper-GD_-jSvs.js";import"./DropdownField-CaiM83zQ.js";import"./debounce-DIQiziXj.js";import"./useOsdkClient-D02NaCPv.js";import"./index-Dl2NjNEw.js";import"./Input-B249MGbk.js";import"./useBaseUiId-Cap-PPpy.js";import"./useControlled-BmDrUstA.js";import"./index-cI1ynK4N.js";import"./index-CDYomSyo.js";import"./PopoverPopup-B0rRAlr0.js";import"./InternalBackdrop-BsVUWCWG.js";import"./composite-BaoR0w31.js";import"./index-B-dD1TvL.js";import"./getDisabledMountTransitionStyles-BwmyyjtU.js";import"./ToolbarRootContext-DXm6j23Z.js";import"./tick-AtbomG7h.js";import"./svgIconContainer-B8ItPc1M.js";import"./small-cross-BaK91MRB.js";import"./search-mbcTQJkq.js";import"./cross-DaW6OMzU.js";import"./useValueChanged-W2WuQ5wK.js";import"./getPseudoElementBounds-BQ5agBtb.js";import"./CompositeItem-DAAqOuWb.js";import"./makeExternalStore-BQYgEbL5.js";import"./BaseForm-CtzaYsrR.js";import"./ActionButton-DwbrhZUk.js";import"./Button-PZls5hRh.js";import"./SkeletonBar-BeY9dT73.js";import"./Tooltip-D1h-JVHm.js";import"./info-sign-CFAAK6a6.js";import"./chevron-up-DrY3AwAF.js";import"./chevron-down-7dkGHUAP.js";import"./useEventCallback-DxZxqDUd.js";import"./iconLoader-t6hs3iwy.js";import"./Switch-DrYMUf5x.js";import"./CompositeRoot-C4Oes3s2.js";import"./TimePicker-BILZ4fG-.js";import"./CollapsiblePanel-Cs_KG3mc.js";import"./error-DQ-bOeSn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DmxFMu7G.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
