import{j as t,g as n}from"./iframe-I-ljmhXo.js";import{A as r}from"./action-form-yd4OTOe6.js";import"./preload-helper-M9MPg2Uh.js";import"./DropdownField-ptXdktt_.js";import"./debounce-4Bi6pw_i.js";import"./useOsdkClient-jS_u-k2J.js";import"./index-DHgdi-G8.js";import"./Input-DgDEYrB1.js";import"./useBaseUiId-63vNftzH.js";import"./useControlled-D9MNKFMV.js";import"./index-B-RGy6eE.js";import"./index-wV7cEBRP.js";import"./PopoverPopup-DL3StlvX.js";import"./InternalBackdrop-iSyfVaW5.js";import"./composite-BpdBkPyX.js";import"./index-CExgYXR8.js";import"./getDisabledMountTransitionStyles-qCmZAHN-.js";import"./ToolbarRootContext-Bgx3Oosy.js";import"./tick-V_8cWmaE.js";import"./svgIconContainer-DTF9Rr_D.js";import"./small-cross-DnRErzPc.js";import"./search-Xmbyz7ae.js";import"./cross--08b2Esz.js";import"./useValueChanged-DggnfScN.js";import"./getPseudoElementBounds-BwyOt2xx.js";import"./CompositeItem-BNvc3zNV.js";import"./makeExternalStore-BsQQuJAQ.js";import"./BaseForm-BUkVhSp2.js";import"./ActionButton-D7dlIpjS.js";import"./Button-BPW8BJKe.js";import"./SkeletonBar-Cd4HXeaq.js";import"./Tooltip-BCS8vY1S.js";import"./info-sign-CqsUk8R4.js";import"./chevron-up-DlHq8p3O.js";import"./chevron-down-C0rEk766.js";import"./useEventCallback-CKHe2jbt.js";import"./iconLoader-Dw1ouTBa.js";import"./Switch-D94j8qQ3.js";import"./CompositeRoot-Bp9PQYk4.js";import"./TimePicker-DNeO3yCN.js";import"./CollapsiblePanel-Bab9PcCA.js";import"./error-Dy0kv_06.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-COEHBIiY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
