import{j as t,g as n}from"./iframe-BpL6s-zg.js";import{A as r}from"./action-form-C9sZrMNf.js";import"./preload-helper-uTT7htns.js";import"./DropdownField-Cg0VCTB8.js";import"./debounce-h76tYODF.js";import"./useOsdkClient-Dn3QR38F.js";import"./index-6LlZ2BiN.js";import"./Input-CLHBBGaB.js";import"./useBaseUiId-1PhUK91a.js";import"./useControlled-CkduZeJ8.js";import"./index-BQedclYz.js";import"./index-D0tUKd5l.js";import"./PopoverPopup-CfyCkjev.js";import"./InternalBackdrop-D528jJZb.js";import"./composite-CCy_hQsH.js";import"./index-DZewdgmc.js";import"./getDisabledMountTransitionStyles-BUZvxxVE.js";import"./ToolbarRootContext-DExmINYo.js";import"./tick-D39791G3.js";import"./svgIconContainer-9i-2F4mS.js";import"./small-cross-DGh8lQQj.js";import"./search-RLZBnffN.js";import"./cross-B7Srqs_a.js";import"./useValueChanged-DcvOcb0S.js";import"./getPseudoElementBounds-dW4anVUY.js";import"./CompositeItem-Dr9l_3tm.js";import"./makeExternalStore-CYzPQh_a.js";import"./BaseForm-5G0GuNan.js";import"./ActionButton-B-kPuu4e.js";import"./Button-D6y5uRFv.js";import"./SkeletonBar-CxTajJtW.js";import"./Tooltip-NF3ObYaS.js";import"./info-sign-Bde4Fh-J.js";import"./chevron-up-CAGqmS9Y.js";import"./chevron-down-CE2IRiE6.js";import"./useEventCallback-ByzE1gWY.js";import"./iconLoader-BaaISsDQ.js";import"./Switch-Czn5P06V.js";import"./CompositeRoot-CAGNNEzQ.js";import"./TimePicker-CZ55D2EZ.js";import"./CollapsiblePanel-BjVwkesV.js";import"./error-DthClOU-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BI3kiEc3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
