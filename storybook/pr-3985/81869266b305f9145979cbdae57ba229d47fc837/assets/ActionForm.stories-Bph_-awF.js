import{j as t,g as n}from"./iframe-Bx31wN7l.js";import{A as r}from"./action-form-DKYKoeVJ.js";import"./preload-helper-fuKytI2J.js";import"./DropdownField-B0i5mi2Z.js";import"./debounce-BfkSYXdV.js";import"./useOsdkClient-D1EBd0jQ.js";import"./index-DZxERBQ8.js";import"./Input-CQoFLmc7.js";import"./useBaseUiId-BpE0KEfc.js";import"./useControlled-BUc-d8tN.js";import"./index-ec0TeVrD.js";import"./index-WQiMJ8U5.js";import"./PopoverPopup-DjXhzR73.js";import"./InternalBackdrop-CXzy1IR-.js";import"./composite-Bx5EuYDq.js";import"./index-eq9JihVj.js";import"./getDisabledMountTransitionStyles-I794iXBx.js";import"./ToolbarRootContext-BEc0iwyp.js";import"./tick-PN43AiNg.js";import"./svgIconContainer-CsmE7H8N.js";import"./small-cross-2gr1UHRE.js";import"./search-BkXPkxMB.js";import"./cross-ByPIg3cq.js";import"./useValueChanged-LXU-Rlru.js";import"./getPseudoElementBounds-Cxm3qVX_.js";import"./CompositeItem-CXKQZ3E9.js";import"./makeExternalStore-BiPnGhaA.js";import"./BaseForm-TX05Qo0x.js";import"./ActionButton-D3XLfflN.js";import"./Button-D8P70LO7.js";import"./SkeletonBar-CblG8V_N.js";import"./Tooltip-BHEJ_2jR.js";import"./info-sign-D1PLuO2x.js";import"./chevron-up-B3g37vVs.js";import"./chevron-down-Ca2LkDWe.js";import"./useEventCallback-BdwVQOgv.js";import"./iconLoader-IGhFqhhJ.js";import"./Switch-D5R0ziX7.js";import"./CompositeRoot-DgtyOefj.js";import"./TimePicker-DkRlTPqP.js";import"./CollapsiblePanel-C307MSn7.js";import"./error-BqlruEo6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DO2o0cgY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
