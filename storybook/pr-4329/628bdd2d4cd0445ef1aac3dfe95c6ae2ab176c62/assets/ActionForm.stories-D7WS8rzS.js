import{j as t,g as n}from"./iframe-D7QeARop.js";import{A as r}from"./action-form-cAjOWVjb.js";import"./preload-helper-ByO2gGG-.js";import"./DropdownField-BWDbWE-R.js";import"./debounce-DVpewphV.js";import"./useOsdkClient-BkAvKGv3.js";import"./index-vZOnCZIt.js";import"./Input-CLM1j4JP.js";import"./useBaseUiId-Dh_4-Vt2.js";import"./useControlled-BpgKR5hH.js";import"./index-CJ9QavcY.js";import"./index-DjN3vWUU.js";import"./isObject-BqaZPqbQ.js";import"./InternalBackdrop-D0JalReK.js";import"./composite-CP3yMwV3.js";import"./index-DUe4tRvm.js";import"./getDisabledMountTransitionStyles-C7FpNIAD.js";import"./ToolbarRootContext-3MdV9Srh.js";import"./tick-BaJXP7zX.js";import"./svgIconContainer-CpkzxylD.js";import"./small-cross-BWFtiz88.js";import"./search-9NK7v0NO.js";import"./cross-CCN51Rj8.js";import"./useValueChanged-DkC8RVuc.js";import"./getPseudoElementBounds-Bl3pBLkv.js";import"./CompositeItem-BgFz1mHQ.js";import"./makeExternalStore-BcgbNS0d.js";import"./BaseForm-V1lC668N.js";import"./ActionButton-CXthtHCW.js";import"./Button-BlwuwcGr.js";import"./SkeletonBar-CUEddLCH.js";import"./Tooltip-CgVcfXoX.js";import"./info-sign-Dey15Au0.js";import"./chevron-up-CFRpdRrm.js";import"./chevron-down-YhKS7YTd.js";import"./useEventCallback-jsvHNSiR.js";import"./iconLoader-B7uNUDbV.js";import"./Switch-Cq5JaqhP.js";import"./CompositeRoot-DviRqeBr.js";import"./TimePicker-D8nYww4H.js";import"./CollapsiblePanel-DSHh3xiM.js";import"./error-CL_q_Pjq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CaR_BdPF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
