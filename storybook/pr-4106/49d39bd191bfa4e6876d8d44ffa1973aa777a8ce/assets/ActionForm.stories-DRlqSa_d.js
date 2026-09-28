import{j as t,g as n}from"./iframe-xlXCZ1ws.js";import{A as r}from"./action-form-C_BqAf6A.js";import"./preload-helper-qqQQlHro.js";import"./DropdownField-DRz8c_L3.js";import"./debounce-CDE_4Xvo.js";import"./useOsdkClient-Bcj4c6xw.js";import"./index-0LV67TMp.js";import"./Input-BoJ1ruei.js";import"./useBaseUiId-BGTxIfXW.js";import"./useControlled-BnjR3wqV.js";import"./index-C9_hIpBS.js";import"./index-mu_ylgEd.js";import"./PopoverPopup-CcQbR00T.js";import"./InternalBackdrop-B_15Ngja.js";import"./composite-CRMLjWFi.js";import"./index-COgWwI6H.js";import"./getDisabledMountTransitionStyles-C6rGsGDU.js";import"./ToolbarRootContext-5Gfw3fcR.js";import"./tick-DX5clgfv.js";import"./svgIconContainer-CuvK47Ur.js";import"./small-cross-odVg3Ngs.js";import"./search-C6I7AzRf.js";import"./cross-CR59a-Oy.js";import"./useValueChanged-C6fdlLGU.js";import"./getPseudoElementBounds-DCb81mxx.js";import"./CompositeItem-BYik2Kor.js";import"./makeExternalStore-BkPioVOv.js";import"./BaseForm-DsX51LKh.js";import"./ActionButton-BCxwpleN.js";import"./Button-BsW3xUOI.js";import"./SkeletonBar-BnHpQoIH.js";import"./Tooltip-CVfnB-bd.js";import"./info-sign-B-iIcjvi.js";import"./chevron-up-DeJJ1UcY.js";import"./chevron-down-gZxsFq9N.js";import"./useEventCallback-C6MHTMfG.js";import"./iconLoader-DelqtzN4.js";import"./Switch-DcejVDpp.js";import"./CompositeRoot-C-huw0MW.js";import"./TimePicker-C_8ReFvW.js";import"./CollapsiblePanel-DQQNXkbu.js";import"./error-1_b5vZEY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cc_kPS0s.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
