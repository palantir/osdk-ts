import{j as t,g as n}from"./iframe-Bz3hVWPH.js";import{A as r}from"./action-form-Cvs1Xroi.js";import"./preload-helper-B5WDuSuX.js";import"./DropdownField-CQFrJZV4.js";import"./debounce-u07EyXLU.js";import"./useOsdkClient-C-ZEaw1j.js";import"./index-DByWOMtj.js";import"./Input-niPYTtX3.js";import"./useBaseUiId-dzLz4lPg.js";import"./useControlled-DOWqxCnV.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./PopoverPopup-CUtjr2xE.js";import"./InternalBackdrop-DSn-b-zD.js";import"./composite-CPnF2lA7.js";import"./index-BIjtRufh.js";import"./getDisabledMountTransitionStyles-BdHWZjt-.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./tick-UZyx2gLc.js";import"./svgIconContainer-_Jncan05.js";import"./small-cross-BzeHldsH.js";import"./search-Ctah0g8H.js";import"./cross-Fpn0tB3m.js";import"./useValueChanged-BISvWiN-.js";import"./getPseudoElementBounds-BC_aNtit.js";import"./CompositeItem-dA2LCxOZ.js";import"./makeExternalStore-BkTXcz9h.js";import"./BaseForm-BOiP4wjv.js";import"./ActionButton-OnzJnryN.js";import"./Button-CiU5aFV9.js";import"./SkeletonBar-B6lmbx_o.js";import"./Tooltip-DfHl7Xwe.js";import"./info-sign-BrD6eh68.js";import"./chevron-up-QuHlCrM5.js";import"./chevron-down-Bi16AFVJ.js";import"./useEventCallback-CT17wzJW.js";import"./iconLoader-CK84FC9D.js";import"./Switch-7gvcvvmR.js";import"./CompositeRoot-CvayAu2Y.js";import"./TimePicker-C2AxZuuo.js";import"./CollapsiblePanel-jHetj5wz.js";import"./error-CQxjkOW_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIZcYriA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
