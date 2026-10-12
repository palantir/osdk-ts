import{j as t,g as n}from"./iframe-BpjAczHY.js";import{A as r}from"./action-form-D3lWVyhN.js";import"./preload-helper-n775iZGy.js";import"./DropdownField-BJglwOE0.js";import"./debounce-Ds0PQScg.js";import"./useOsdkClient-D0Eek7Y4.js";import"./index-B865hR58.js";import"./Input-BK2Nmyqv.js";import"./useBaseUiId-99hOwMJj.js";import"./useControlled-DGtH5z0Q.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./PopoverPopup-BxpA88JM.js";import"./InternalBackdrop-Nq7KwH4o.js";import"./composite-Dz8fJC5u.js";import"./index-DA4_2A10.js";import"./getDisabledMountTransitionStyles-BgiX7odw.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./tick-B4peCy1V.js";import"./svgIconContainer-C3jJhmpt.js";import"./small-cross-DupO9VP4.js";import"./search-NVe0lSCh.js";import"./cross-C6qTQWHW.js";import"./useValueChanged-CSF7lu2m.js";import"./getPseudoElementBounds-CCx4Tlrc.js";import"./CompositeItem-DG1i5uV0.js";import"./makeExternalStore-RoIlT1g0.js";import"./BaseForm-Dfl_esFM.js";import"./ActionButton-CRHWpJnS.js";import"./Button-Dj8yiv60.js";import"./SkeletonBar-BecfrY7r.js";import"./Tooltip-VrYqX_Lh.js";import"./info-sign-C37isdws.js";import"./chevron-up-B1R5UvP4.js";import"./chevron-down-_ycbe8m1.js";import"./useEventCallback-B6zcZW3p.js";import"./iconLoader-DpFXQiNM.js";import"./Switch-Bv43oBML.js";import"./CompositeRoot-BExAPuHl.js";import"./TimePicker-DLMvpIkT.js";import"./CollapsiblePanel-By7EAy8-.js";import"./error-Biwv1K3K.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6lIiCV7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
