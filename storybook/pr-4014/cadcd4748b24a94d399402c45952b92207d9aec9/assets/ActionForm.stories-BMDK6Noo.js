import{j as t,g as n}from"./iframe-CUQ6pW6f.js";import{A as r}from"./action-form-CnuVtmq0.js";import"./preload-helper-R0VkCi4m.js";import"./DropdownField-OJ4m5ByP.js";import"./debounce-BSpE_UgL.js";import"./useOsdkClient-98hCJrJL.js";import"./index-h-DI9Lrm.js";import"./Input-BeRbTOIW.js";import"./useBaseUiId-io2D7EyL.js";import"./useControlled-zbqpEGsi.js";import"./index-sOt4flAH.js";import"./index-B1pgXqxk.js";import"./PopoverPopup-D70TLWQP.js";import"./InternalBackdrop-DeOAfNuf.js";import"./composite-DVURSZ_Q.js";import"./index-BwGZQTcg.js";import"./getDisabledMountTransitionStyles-CQIeX0Ub.js";import"./ToolbarRootContext-Bu39Qel7.js";import"./tick-Bde80KdX.js";import"./svgIconContainer-DgxjXUVD.js";import"./small-cross-IXjjZnoD.js";import"./search-NIM10vXd.js";import"./cross-DBScoIN6.js";import"./useValueChanged-DLbw96lb.js";import"./getPseudoElementBounds-Ei-zDx44.js";import"./CompositeItem-BFFGDsSt.js";import"./makeExternalStore-Bm8o0kSK.js";import"./BaseForm-D9P5SAgs.js";import"./ActionButton-fmMUa4gl.js";import"./Button-C1Q3ab7J.js";import"./SkeletonBar-BRdyWD8N.js";import"./Tooltip-Fo__1c0c.js";import"./info-sign-BnlGNyXh.js";import"./chevron-up-B1qykX4z.js";import"./chevron-down-s1tgkNuZ.js";import"./useEventCallback-CBHs8zKc.js";import"./iconLoader-CxhhlSgZ.js";import"./Switch-CLdHxLar.js";import"./CompositeRoot-GumS-HTn.js";import"./TimePicker-L7iBUwmW.js";import"./CollapsiblePanel-DptBjV9D.js";import"./error-hc0pOP7n.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6sVCQ7L.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
