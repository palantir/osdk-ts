import{j as t,g as n}from"./iframe-BM7Q-dMJ.js";import{A as r}from"./action-form-D3oYgLdW.js";import"./preload-helper-BWjcCog8.js";import"./DropdownField-DLHpxYXi.js";import"./debounce-CKCnpvnv.js";import"./useOsdkClient-C9TzfZod.js";import"./index-BybuAuux.js";import"./Input-DfRNBHCu.js";import"./useBaseUiId-CwUHdvwv.js";import"./useControlled-BQdmVz8X.js";import"./index-SuuHTDz0.js";import"./index-B_WLJNqi.js";import"./PopoverPopup-DLsBFnzx.js";import"./InternalBackdrop-FFPxO1CT.js";import"./composite-Lv4sNU4L.js";import"./index-Du6jQDOr.js";import"./getDisabledMountTransitionStyles-CFh0GbMr.js";import"./ToolbarRootContext-DKuunDH_.js";import"./tick-BbU13DjE.js";import"./svgIconContainer-Bht8VzUd.js";import"./small-cross-D_EyLeAZ.js";import"./search-Ddrt0Hct.js";import"./cross-1-TnP1TT.js";import"./useValueChanged-CXXrYUtJ.js";import"./getPseudoElementBounds-CBaa1JSS.js";import"./CompositeItem-DlNVx4-v.js";import"./makeExternalStore-6NEmzi49.js";import"./BaseForm-DHl6oZeB.js";import"./ActionButton-DKLtWYLa.js";import"./Button-DPCu3lFK.js";import"./SkeletonBar-BRy64cL1.js";import"./Tooltip-BfJ9ISA3.js";import"./info-sign-BjSO1-Nh.js";import"./chevron-up-bqyYW2L1.js";import"./chevron-down-DxXNwnvG.js";import"./useEventCallback-J2mmsqLg.js";import"./iconLoader-dve6IAv9.js";import"./CompositeRoot-z0py_T76.js";import"./Switch-Cr_767T2.js";import"./TimePicker-fwRc-IzY.js";import"./CollapsiblePanel-CohDmxSC.js";import"./error-o6sSvsT-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DNVP_GMx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
