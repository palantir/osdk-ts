import{j as t,g as n}from"./iframe-2MyeaUzD.js";import{A as r}from"./action-form-Cm_8J-sF.js";import"./preload-helper-DUn0LkVX.js";import"./DropdownField-DOIFNVft.js";import"./debounce-Y3DExDk1.js";import"./useOsdkClient-CYYcDDNv.js";import"./index-NZSVMLpP.js";import"./Input-DXMdlMds.js";import"./useBaseUiId-C0j-SKXM.js";import"./useControlled-DCne3Llm.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./PopoverPopup-DOf8tSzj.js";import"./InternalBackdrop-COkt2S-3.js";import"./composite-BVz7tfSY.js";import"./index-DkVuFE1I.js";import"./getDisabledMountTransitionStyles-DxjEMg4T.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./tick-ftcla-3R.js";import"./svgIconContainer-4EX1EfK4.js";import"./small-cross-Blk5AoHi.js";import"./search-CpIfmgVn.js";import"./cross-CXnhgyvc.js";import"./useValueChanged-B2kp3VOe.js";import"./getPseudoElementBounds-DpBykgdb.js";import"./CompositeItem-D8KecaIg.js";import"./makeExternalStore-VoU3rgtf.js";import"./BaseForm-Dk_c8wrk.js";import"./ActionButton-CMwQlm1r.js";import"./Button-3arTFTpt.js";import"./SkeletonBar-DIegnhq_.js";import"./Tooltip-BfB-ALwV.js";import"./info-sign-C9tYzT42.js";import"./chevron-up-T-aqkpq6.js";import"./chevron-down-4RG-YjeV.js";import"./useEventCallback-Dm3fVohy.js";import"./iconLoader-BtOf7ymt.js";import"./CompositeRoot-CTmjwQ-c.js";import"./Switch-8WJVM9Cs.js";import"./TimePicker-W7AYSizt.js";import"./CollapsiblePanel-_qMM1pI0.js";import"./error-CSdXVQDA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CFGA0PEe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
