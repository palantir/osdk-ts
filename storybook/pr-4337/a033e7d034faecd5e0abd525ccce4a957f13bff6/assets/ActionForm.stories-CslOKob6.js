import{j as t,g as n}from"./iframe-CSosjOmv.js";import{A as r}from"./action-form-BmWrBUBR.js";import"./preload-helper-C-gjDSXJ.js";import"./DropdownField-CLwVEV16.js";import"./debounce-BzCw0aaH.js";import"./useOsdkClient-p2uvl16R.js";import"./index-DzdecULf.js";import"./Input-BYDbWdB8.js";import"./useBaseUiId-B_aLw92E.js";import"./useControlled-DcuHztpz.js";import"./index-BvXFeSY8.js";import"./index-C7NVW3nO.js";import"./PopoverPopup-BSZvkPJG.js";import"./InternalBackdrop-BxW846uB.js";import"./composite-CFm1NNj3.js";import"./index-CfZcDCWD.js";import"./getDisabledMountTransitionStyles-DIK2usmu.js";import"./ToolbarRootContext-DYXzz-gp.js";import"./tick-DgeixQ7I.js";import"./svgIconContainer-C8vg2tag.js";import"./small-cross-DoPihXaf.js";import"./search-1vXjOjjG.js";import"./cross-CBsOArVe.js";import"./useValueChanged-DnGO4l1i.js";import"./getPseudoElementBounds-DlEj5IwE.js";import"./CompositeItem-CDrUmRrI.js";import"./makeExternalStore-C3SFvB3D.js";import"./BaseForm-DqzEKqmT.js";import"./ActionButton-C_1ovufb.js";import"./Button-CXkasH7A.js";import"./SkeletonBar-CbLIOtic.js";import"./Tooltip-BMDob29c.js";import"./info-sign-CMGv4syu.js";import"./chevron-up-CVLg-Wwv.js";import"./chevron-down-C05xfaFU.js";import"./useEventCallback-DOvtzK6I.js";import"./iconLoader-DN5VcG80.js";import"./Switch-Bx2sOstm.js";import"./CompositeRoot-D7F0oeRQ.js";import"./TimePicker-DSZssjEI.js";import"./CollapsiblePanel-CDB1SVVs.js";import"./error-C8uWSFuO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DObV_URP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
