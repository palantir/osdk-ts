import{j as t,g as n}from"./iframe-DnOey83C.js";import{A as r}from"./action-form-DtZDc4eO.js";import"./preload-helper-CEV440E1.js";import"./DropdownField-DvwvHNKL.js";import"./debounce-D0CZLrXI.js";import"./useOsdkClient-B3Gk2B3w.js";import"./index-BIJ6fYvk.js";import"./Input-C3af8CQ0.js";import"./useBaseUiId-DYH1wxfF.js";import"./useControlled-CV8__y_P.js";import"./index-gVUj6237.js";import"./index-DPxA-l2q.js";import"./PopoverPopup-BmAbMe-q.js";import"./InternalBackdrop-Cg_GZXCO.js";import"./composite-uM8HrJm1.js";import"./index-Bhk79zz8.js";import"./getDisabledMountTransitionStyles-BiGSYddH.js";import"./ToolbarRootContext-BHnzj6Hz.js";import"./tick-Bj7rJCFA.js";import"./svgIconContainer-BX0rooyi.js";import"./small-cross-IwpXYFe-.js";import"./search-CqHVyKly.js";import"./cross-B4zEOr1u.js";import"./useValueChanged-CgfaezFM.js";import"./getPseudoElementBounds-GW5dp8q2.js";import"./CompositeItem-3RLloUvB.js";import"./makeExternalStore-DlRIBm2d.js";import"./BaseForm-DWAW5bDT.js";import"./ActionButton-C4u-6-5W.js";import"./Button-CQihg8uV.js";import"./SkeletonBar-DjGBiB-_.js";import"./Tooltip-DddAZoZH.js";import"./info-sign-CsxRWFbh.js";import"./chevron-up-BAg6sNM2.js";import"./chevron-down-D_dDeZyS.js";import"./useEventCallback-Bfvx_x8s.js";import"./iconLoader-CrMxPmn8.js";import"./Switch-CR05pNuZ.js";import"./CompositeRoot-DF0ihy5G.js";import"./TimePicker-1zL7EhGH.js";import"./CollapsiblePanel-DkmUI4kJ.js";import"./error-2pL8Nqzq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DLqBodbC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
