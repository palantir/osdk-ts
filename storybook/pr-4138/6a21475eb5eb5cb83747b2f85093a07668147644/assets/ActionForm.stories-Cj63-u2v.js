import{j as t,g as n}from"./iframe-DxhkFI2j.js";import{A as r}from"./action-form-BkLYrm9Q.js";import"./preload-helper--cN_jItM.js";import"./DropdownField-DwO_XOP0.js";import"./debounce-b65eNSpY.js";import"./useOsdkClient-85CPOR81.js";import"./index-DVJz8wW_.js";import"./Input-COHFDix-.js";import"./useBaseUiId-C54mcYTS.js";import"./useControlled-CrH9oqwV.js";import"./index-C1nkpuUA.js";import"./index-BpgIDDBL.js";import"./PopoverPopup-CWVn6OUK.js";import"./InternalBackdrop-aZ_35dbO.js";import"./composite-CohQOjSI.js";import"./index-D7092Ody.js";import"./getDisabledMountTransitionStyles-BV-oK1o7.js";import"./ToolbarRootContext-e2y-n1Yh.js";import"./tick-W6nypDvp.js";import"./svgIconContainer-DVO7NdYN.js";import"./small-cross-DhzKRe0M.js";import"./search-E8ja1e9g.js";import"./cross-BLpXMPe1.js";import"./useValueChanged-BpuEkHow.js";import"./getPseudoElementBounds-CRJR5h2h.js";import"./CompositeItem-Cf1SIU17.js";import"./makeExternalStore-CoWtabiz.js";import"./BaseForm-B72XqR4N.js";import"./ActionButton-BUSMwbnp.js";import"./Button-Cavox7D-.js";import"./SkeletonBar-CgnvwVJl.js";import"./Tooltip-CQ4YGG8B.js";import"./info-sign-CDGmLkoh.js";import"./chevron-up-hJ197JYd.js";import"./chevron-down-DTSGl_xB.js";import"./useEventCallback-MoMmp1Ig.js";import"./iconLoader-CXaiMObC.js";import"./Switch-D3RuCMk4.js";import"./CompositeRoot-yM2I9tSe.js";import"./TimePicker-DR2U-b2w.js";import"./CollapsiblePanel-Cuwr74Hw.js";import"./error-BmTcrgoE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMPSufl2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
