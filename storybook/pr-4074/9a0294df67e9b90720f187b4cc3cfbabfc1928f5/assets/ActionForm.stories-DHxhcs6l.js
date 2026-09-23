import{j as t,g as n}from"./iframe-BGhobRtu.js";import{A as r}from"./action-form-CYCYKbrY.js";import"./preload-helper-pGzP1r6a.js";import"./DropdownField-DMnr6Z_R.js";import"./debounce-ChAiSJEZ.js";import"./useOsdkClient-DzPyphix.js";import"./index-vtFPCgDX.js";import"./Input-C3PEeUtQ.js";import"./useBaseUiId-DQZ7iRRg.js";import"./useControlled-Dp1hI4GV.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./PopoverPopup-uv4NdOtP.js";import"./InternalBackdrop-BuZZp4vX.js";import"./composite-N1fMxm4N.js";import"./index-4ZAX8LQC.js";import"./getDisabledMountTransitionStyles-DUpLtIxq.js";import"./ToolbarRootContext-DV_dajLa.js";import"./tick-CgJs5kuo.js";import"./svgIconContainer-B7bAtHsS.js";import"./small-cross-sN4wSsnF.js";import"./search-CD-rabLl.js";import"./cross-CuYz6VCw.js";import"./useValueChanged-COn_Wnb4.js";import"./getPseudoElementBounds-D0oEP3_T.js";import"./CompositeItem-C8P235hg.js";import"./makeExternalStore-Imo5q4ya.js";import"./BaseForm-CobsNPT2.js";import"./ActionButton-CGHRv_-b.js";import"./Button-DAz_khhf.js";import"./SkeletonBar-is7FW6bL.js";import"./Tooltip-DUd70Gw0.js";import"./info-sign-BqEq1545.js";import"./chevron-up-CzjEd9u5.js";import"./chevron-down-DAtIJVst.js";import"./useEventCallback-IjK4E44x.js";import"./iconLoader-BzvCLjmL.js";import"./Switch-Blpk7OBI.js";import"./CompositeRoot--woMTd9b.js";import"./TimePicker-CTvP6uQa.js";import"./CollapsiblePanel-DLLULbui.js";import"./error-CFVPudD2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-qR-yFxPK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
