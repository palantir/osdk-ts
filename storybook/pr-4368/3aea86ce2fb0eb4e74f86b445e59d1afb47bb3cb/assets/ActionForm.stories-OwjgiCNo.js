import{j as t,g as n}from"./iframe-DTR6D-RF.js";import{A as r}from"./action-form-BEx1g1Yv.js";import"./preload-helper-a_j-25GL.js";import"./DropdownField-pISV7PG6.js";import"./debounce-C9Yqr-CS.js";import"./useOsdkClient-s4ovKcdr.js";import"./index-D7jWhYyZ.js";import"./Input-BfVNpYWX.js";import"./useBaseUiId-CSnUW2G1.js";import"./useControlled-BQyYOX0S.js";import"./index-CIoynBUP.js";import"./index-CeaWSZor.js";import"./isObject-BdCdgIbL.js";import"./InternalBackdrop-CY4cyQPU.js";import"./composite-DubVH8wK.js";import"./index-DwZqbG9c.js";import"./getDisabledMountTransitionStyles-sZ7HosF-.js";import"./ToolbarRootContext-CUq0HOW2.js";import"./tick-MViIMcR9.js";import"./svgIconContainer-CTdZIA2H.js";import"./small-cross-_n8UDI8I.js";import"./search-CA4ezTkI.js";import"./cross-DUXytXdv.js";import"./useValueChanged-uq3nMm5M.js";import"./getPseudoElementBounds-Bk-aKJSe.js";import"./CompositeItem-DiX4k7Pe.js";import"./makeExternalStore-HP359Ggt.js";import"./BaseForm-BEtVEG_t.js";import"./ActionButton-odMXA6JR.js";import"./Button-B369yMXX.js";import"./SkeletonBar-DG2N76Ak.js";import"./Tooltip-M1ezUcrB.js";import"./info-sign-CMT0Kw12.js";import"./chevron-up-BSOZXgqp.js";import"./chevron-down-D061nHxl.js";import"./useEventCallback-CPGNRTIC.js";import"./iconLoader-DWx8s8un.js";import"./Switch-5rpmtKV4.js";import"./CompositeRoot-DxzKScEv.js";import"./TimePicker-Dw6mn4CX.js";import"./CollapsiblePanel-Cb8omPWi.js";import"./error-ComocNo0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BM7BKbHu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
