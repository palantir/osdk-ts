import{j as t,g as n}from"./iframe-BW9rbZjN.js";import{A as r}from"./action-form-SnJ_C9an.js";import"./preload-helper-_oZNT5AE.js";import"./DropdownField-BoM_lVwS.js";import"./debounce-BijLWZBG.js";import"./useOsdkClient-CY_b6Lwm.js";import"./index-qZzwlkOA.js";import"./Input-DapIOR9y.js";import"./useBaseUiId-bQLFYp4J.js";import"./useControlled-C9bKjxUP.js";import"./index-C88Pj_Ew.js";import"./index-CRuyPTCE.js";import"./PopoverPopup-DZ1vqIll.js";import"./InternalBackdrop-CKd5MsCE.js";import"./composite-DIc49Li7.js";import"./index-DvSwkwzx.js";import"./getDisabledMountTransitionStyles-DuFqv9O7.js";import"./ToolbarRootContext-tp4wTZqh.js";import"./tick-qItvjZhi.js";import"./svgIconContainer-c8HYcTYH.js";import"./small-cross-DPXcetjy.js";import"./search-CKuArl9i.js";import"./cross-BMKp4c2D.js";import"./useValueChanged-5yWlHOsJ.js";import"./getPseudoElementBounds-cJb6hBmW.js";import"./CompositeItem-CfT9zTJr.js";import"./makeExternalStore-RW-A0j4x.js";import"./BaseForm-DWmwSiTZ.js";import"./ActionButton-Br5-QwIr.js";import"./Button-DXKWCxc8.js";import"./SkeletonBar-BlTcRZOI.js";import"./Tooltip-DARXcT77.js";import"./info-sign-CK9asO_W.js";import"./chevron-up-BSlkLdOJ.js";import"./chevron-down-DnA8hxYU.js";import"./useEventCallback-BwkPSbL2.js";import"./iconLoader-xiS2Xij5.js";import"./CompositeRoot-D409zc-C.js";import"./Switch-CmRawAUW.js";import"./TimePicker-N3YAhaTo.js";import"./CollapsiblePanel-BO030zQL.js";import"./error-DKZCTWAx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9bjwSD5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
