import{j as t,g as n}from"./iframe-lKHX2RT0.js";import{A as r}from"./action-form-Cm3CSysK.js";import"./preload-helper-CPQlIB48.js";import"./DropdownField-dvCdI0vW.js";import"./debounce-CjBjqfvI.js";import"./useOsdkClient-BttjugBK.js";import"./index-DN0L_sQz.js";import"./Input-Bw27QJ9U.js";import"./useBaseUiId-BNpyRqoY.js";import"./useControlled-CuEFhIkH.js";import"./index-C5DiV1o7.js";import"./index-nDWqsS2b.js";import"./PopoverPopup-VlygiTLm.js";import"./InternalBackdrop-CN7gDkpU.js";import"./composite-Cid_avm0.js";import"./index-CIthZ6_f.js";import"./getDisabledMountTransitionStyles-BaPsLnpd.js";import"./ToolbarRootContext-DHnu7bP1.js";import"./tick-DFRjlTY6.js";import"./svgIconContainer-CI8K89aC.js";import"./small-cross-gLhT5iIM.js";import"./search-DYMiyHIs.js";import"./cross-BS8Ys0sh.js";import"./useValueChanged-CgAPPxks.js";import"./getPseudoElementBounds-CtuiofEl.js";import"./CompositeItem-YCGN9OAN.js";import"./makeExternalStore-BxeHtCAo.js";import"./BaseForm-D6JIaJUG.js";import"./ActionButton-5BHbkKfJ.js";import"./Button-BEKYhgY7.js";import"./SkeletonBar-CjbRBu-J.js";import"./Tooltip-CxNH616S.js";import"./info-sign-DFQ88cae.js";import"./chevron-up-DmMrt3XM.js";import"./chevron-down-5rT0_jwP.js";import"./useEventCallback-BiQpxw87.js";import"./iconLoader-CPP8QwDe.js";import"./Switch-rpXJVD_v.js";import"./CompositeRoot-JJYSjhdB.js";import"./TimePicker-DcdCnGde.js";import"./CollapsiblePanel-C2fgakez.js";import"./error-Zaa9-6nd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BcneEdmh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
