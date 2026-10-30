import{j as t,g as n}from"./iframe-CNys6KBx.js";import{A as r}from"./action-form-D2zWz5ME.js";import"./preload-helper-DcEogYXL.js";import"./DropdownField-axtbgAiC.js";import"./debounce-BAsDe-b7.js";import"./useOsdkClient-D6IOk0So.js";import"./index-D7tprs46.js";import"./Input-DzrtDPnO.js";import"./useBaseUiId-B9-57ZNF.js";import"./useControlled-DuXB4b_p.js";import"./index-BtKHvXe7.js";import"./index-CWFx-0lx.js";import"./PopoverPopup-Bsmdq_sX.js";import"./InternalBackdrop-DaYZqJ6W.js";import"./composite-CNZDZ4o2.js";import"./index-BgT_i-PY.js";import"./getDisabledMountTransitionStyles-DksinVNb.js";import"./ToolbarRootContext-D9QBq8Lb.js";import"./tick-CFpktK17.js";import"./svgIconContainer-DGw65FKz.js";import"./small-cross-CBtWnDqE.js";import"./search-BE8RO1z_.js";import"./cross-DDF5avjH.js";import"./useValueChanged-BecJvcFH.js";import"./getPseudoElementBounds-D1zecXmj.js";import"./CompositeItem-CIQp4vV-.js";import"./makeExternalStore-T7wEnVBI.js";import"./BaseForm-pWnIqmdj.js";import"./ActionButton-B9ImGUQY.js";import"./Button-DP1rA9dA.js";import"./SkeletonBar-cVCCqAbl.js";import"./Tooltip-Cf_AS3a1.js";import"./info-sign-Bzl5Ucjx.js";import"./chevron-up-Bzzwelpr.js";import"./chevron-down-DpfNuwKR.js";import"./useEventCallback-4Kkat34w.js";import"./iconLoader-m-dqsMiw.js";import"./Switch-B0mIydPw.js";import"./CompositeRoot-BeU8pFdq.js";import"./TimePicker-WHdCXzL5.js";import"./CollapsiblePanel-l0zk2FsM.js";import"./error-DMVqHs2L.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics--pN-uRA4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
