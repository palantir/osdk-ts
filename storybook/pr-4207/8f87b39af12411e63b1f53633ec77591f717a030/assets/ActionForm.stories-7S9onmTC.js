import{j as t,g as n}from"./iframe-DDCC62mw.js";import{A as r}from"./action-form-CXiq98hQ.js";import"./preload-helper-TbI6pun2.js";import"./DropdownField-Be49_OLB.js";import"./debounce-Dh0-cHXm.js";import"./useOsdkClient-B0m0YA5K.js";import"./index-z6zT66iy.js";import"./Input-L9q-qGHh.js";import"./useBaseUiId-Cx54uMSy.js";import"./useControlled-CHZ6ZiHg.js";import"./index-BtGfhpV-.js";import"./index-8Tq8e6Kq.js";import"./PopoverPopup-BChNR2Ib.js";import"./InternalBackdrop-DEeOk2qp.js";import"./composite-oUxuVDiC.js";import"./index-C68Nk8KR.js";import"./getDisabledMountTransitionStyles-BWc9hNjX.js";import"./ToolbarRootContext-B4LwY6SC.js";import"./tick-CQHTofux.js";import"./svgIconContainer-8NI9Pceg.js";import"./small-cross-ZcATWl5F.js";import"./search-BJP-HOO5.js";import"./cross-CFNkWks7.js";import"./useValueChanged-R_tn0UMM.js";import"./getPseudoElementBounds-BxYMv3LN.js";import"./CompositeItem-EdV_vQTm.js";import"./makeExternalStore-Bpmw5WPB.js";import"./BaseForm-Dowmunjq.js";import"./ActionButton-CCAWhnCb.js";import"./Button-DreRcsv2.js";import"./SkeletonBar-RZyiWmdj.js";import"./Tooltip-C5trv4L9.js";import"./info-sign-CuygY6On.js";import"./chevron-up-ekw48iP7.js";import"./chevron-down-CKdPMFgU.js";import"./useEventCallback-B5u_qSmP.js";import"./iconLoader-DqDeyiWX.js";import"./Switch-C3e3Kfbh.js";import"./CompositeRoot-kIU4WUa6.js";import"./TimePicker-yDF4taw2.js";import"./CollapsiblePanel-D0jWvycX.js";import"./error-B0SCddV6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3tZAXSEA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
