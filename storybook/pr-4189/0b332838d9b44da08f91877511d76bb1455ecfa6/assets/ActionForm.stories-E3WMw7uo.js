import{j as t,g as n}from"./iframe-D2-93i0D.js";import{A as r}from"./action-form-DZZCdR9d.js";import"./preload-helper-B5ioDAdF.js";import"./DropdownField-BCaiyljy.js";import"./debounce-DPYgmBq5.js";import"./useOsdkClient-D3LzfKgy.js";import"./index-ZkzuTgCa.js";import"./Input-BVsduhCe.js";import"./useBaseUiId-O9oPLbry.js";import"./useControlled-BJsQhtpL.js";import"./index-CouUEHg5.js";import"./index-C9V5vUYP.js";import"./PopoverPopup-DnrWzk-e.js";import"./InternalBackdrop-giWMz8bK.js";import"./composite-D2489evg.js";import"./index-CjjifVq9.js";import"./getDisabledMountTransitionStyles-Decrs7np.js";import"./ToolbarRootContext-CbCHGeOF.js";import"./tick-BlPreKBC.js";import"./svgIconContainer-C_WiUj7c.js";import"./small-cross-C99vIUVl.js";import"./search-e1zERwtP.js";import"./cross-XZbp8X1U.js";import"./useValueChanged-D3T-RyJH.js";import"./getPseudoElementBounds-Cn4hAtui.js";import"./CompositeItem-D9rSr-Un.js";import"./makeExternalStore-D-FYFBVJ.js";import"./BaseForm-8iwb0Mpp.js";import"./ActionButton-cXi4c_mc.js";import"./Button-BaohMVfV.js";import"./SkeletonBar-DVMts2Iv.js";import"./Tooltip-CZ0MFvfo.js";import"./info-sign-BpYw7q6r.js";import"./chevron-up-_6fn2oC3.js";import"./chevron-down-vlgCUq2z.js";import"./useEventCallback-CQR4vsZ1.js";import"./iconLoader-gCsNa3Ql.js";import"./Switch-eHl4hT0H.js";import"./CompositeRoot-DmGvMXWw.js";import"./TimePicker-8YXtkrQv.js";import"./CollapsiblePanel-4um4tHTf.js";import"./error-C7BXsrlL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-CCJubj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
