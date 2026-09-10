import{j as t,g as n}from"./iframe-CNG5tC4E.js";import{A as r}from"./action-form-D6X1oYLr.js";import"./preload-helper-BwzygQFT.js";import"./DropdownField-CnbohUMi.js";import"./debounce-BIRiwTpe.js";import"./useOsdkClient-OgKnvKuq.js";import"./index-CSa6QMaP.js";import"./Input-60lh5u04.js";import"./useBaseUiId-UgguMUEz.js";import"./useControlled-BH2W_bUS.js";import"./index-D7WVWh6p.js";import"./index-CdYyMgNT.js";import"./PopoverPopup-D4G6ixdl.js";import"./InternalBackdrop-BMt6raWI.js";import"./composite-dppvJbki.js";import"./index-Bytqi1Vm.js";import"./getDisabledMountTransitionStyles-B54BYyIC.js";import"./ToolbarRootContext-DSeyjEFW.js";import"./tick-Cp6vA-dB.js";import"./svgIconContainer-fYOu3R0h.js";import"./small-cross-CIhqDCWy.js";import"./search-B5Nc1pS1.js";import"./cross-BUDfzWsm.js";import"./useValueChanged-FvlQ6ZaE.js";import"./getPseudoElementBounds-SWuPJwgN.js";import"./CompositeItem-xBsV_YGf.js";import"./makeExternalStore-BmYZSn43.js";import"./BaseForm-D9yi3jGF.js";import"./ActionButton-DVkCa7v6.js";import"./Button-DGS3jG4k.js";import"./SkeletonBar-BY6fJEjv.js";import"./Tooltip-5ba-iiu0.js";import"./info-sign-6AiRe5C1.js";import"./chevron-up-B-JXNK6W.js";import"./chevron-down-C5OyQZRE.js";import"./useEventCallback-Br9KnRIl.js";import"./iconLoader-Oy99aJ9d.js";import"./CompositeRoot-BCHPP4qG.js";import"./Switch-CqKOh0xx.js";import"./TimePicker-CZl8b8PW.js";import"./CollapsiblePanel-CU8OOO_g.js";import"./error-CwmCTB3X.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DclC6FPN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
