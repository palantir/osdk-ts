import{j as t,g as n}from"./iframe-DRt3Isqi.js";import{A as r}from"./action-form-BxcAbeT4.js";import"./preload-helper-P_ieVj0_.js";import"./DropdownField-DukSAwck.js";import"./debounce-D5V8bM6L.js";import"./useOsdkClient-B72RjCJ-.js";import"./index-VZHhRlUf.js";import"./Input-_E04yI64.js";import"./useBaseUiId-CztA3AVu.js";import"./useControlled-DZ1rHDeJ.js";import"./index-BQPVtwuZ.js";import"./index-CrOP_FhY.js";import"./isObject-DRxxfzO8.js";import"./InternalBackdrop-EjSNiGN3.js";import"./composite-D3E114vb.js";import"./index-VXwizB6q.js";import"./getDisabledMountTransitionStyles-B9hx_YPP.js";import"./ToolbarRootContext-ChcKGMcF.js";import"./tick-C84Ma0-E.js";import"./svgIconContainer-BmwptnE7.js";import"./small-cross-COsO8y4M.js";import"./search-CWVCG-ID.js";import"./cross-DLSleMt0.js";import"./useValueChanged-BriOV7QZ.js";import"./getPseudoElementBounds-Dk-P-RRg.js";import"./CompositeItem-1obZGpSi.js";import"./makeExternalStore-IMLrRmfN.js";import"./BaseForm-DUUgKrAg.js";import"./ActionButton-BmJ2vYOO.js";import"./Button-K9hISpnC.js";import"./SkeletonBar-BSkDtycC.js";import"./Tooltip-B5fG8wMR.js";import"./info-sign-DmuwB8mW.js";import"./chevron-up-BVh5TrIW.js";import"./chevron-down-BpTeELc3.js";import"./useEventCallback-BHN3JDT4.js";import"./iconLoader-COaVT8oE.js";import"./Switch-BXCzPbii.js";import"./CompositeRoot--jW9F6YR.js";import"./TimePicker-CtS38cbT.js";import"./CollapsiblePanel-CXb3tt2d.js";import"./error-WyHMdGFH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Drl0wAn6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
