import{j as t,g as n}from"./iframe-C-ZowQax.js";import{A as r}from"./action-form-BUV0sI0J.js";import"./preload-helper-BwoiUuS0.js";import"./DropdownField-BFfdkSQG.js";import"./debounce-BAsjd_Of.js";import"./useOsdkClient-Cm53VtWi.js";import"./index-Be4hOd1B.js";import"./Input-DBndaIW5.js";import"./useBaseUiId-z3JC-8KB.js";import"./useControlled-BMJFbw6E.js";import"./index-Ds7XpPFE.js";import"./index-CLAxlO_0.js";import"./PopoverPopup-CG9CYd0u.js";import"./InternalBackdrop-Bq6YL1k4.js";import"./composite-DecXstOI.js";import"./index-CIH23t0R.js";import"./getDisabledMountTransitionStyles-DBO-O-Ga.js";import"./ToolbarRootContext-qpt4Azan.js";import"./tick-JKwuhKLh.js";import"./svgIconContainer-DOvH0cqq.js";import"./small-cross-Bk6KAhb2.js";import"./search-IKabI-9R.js";import"./cross-Eu5MsQSw.js";import"./useValueChanged-Dwc1SDE4.js";import"./getPseudoElementBounds-DmT2yiee.js";import"./CompositeItem-Boyopm8a.js";import"./makeExternalStore-D6lqxyG2.js";import"./BaseForm-CdWX0Vq0.js";import"./ActionButton-Dgf6XiQc.js";import"./Button-BvplgYnA.js";import"./SkeletonBar-Bzw4W5us.js";import"./Tooltip-BWTRoX0F.js";import"./info-sign-ChX0J70C.js";import"./chevron-up-BbViTdpj.js";import"./chevron-down-BB7K5vpo.js";import"./useEventCallback-rnlsmwi1.js";import"./iconLoader-ofPS66JV.js";import"./CompositeRoot-BxA4Kn0M.js";import"./Switch-B6oa48Gn.js";import"./TimePicker-CukoTaM6.js";import"./CollapsiblePanel-CgIdvyXZ.js";import"./error-DLiiLlwM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-nJkmP2WD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
