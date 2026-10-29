import{j as t,g as n}from"./iframe-DuvqzVxr.js";import{A as r}from"./action-form-DL7XkO0M.js";import"./preload-helper-B8Qd9CCZ.js";import"./DropdownField-CE0ndGls.js";import"./debounce-498a9Eyo.js";import"./useOsdkClient-Da4jyrei.js";import"./index-CAuUDW48.js";import"./Input-Wm8tLy-0.js";import"./useBaseUiId-CfATFv1v.js";import"./useControlled-DqFDREqa.js";import"./index-Bs6MnhUR.js";import"./index-BfNHcsKt.js";import"./PopoverPopup-B1BeyJb-.js";import"./InternalBackdrop-CLiFzfHC.js";import"./composite-CdnuQNOj.js";import"./index-CmRTjbwa.js";import"./getDisabledMountTransitionStyles-D5mHC2vC.js";import"./ToolbarRootContext-BTKqEH_P.js";import"./tick-CYXQ7A8e.js";import"./svgIconContainer-D3ZSKuHH.js";import"./small-cross-D2srWpyH.js";import"./search-BeCT36MA.js";import"./cross-D-jw0QJK.js";import"./useValueChanged-CIvJaurU.js";import"./getPseudoElementBounds-D85lzNV4.js";import"./CompositeItem-Dls_a94V.js";import"./makeExternalStore-pWtHUq0J.js";import"./BaseForm-BFc6Hz9Y.js";import"./ActionButton-DXzxj-c5.js";import"./Button-D-ya50CL.js";import"./SkeletonBar-BLNTNrn1.js";import"./Tooltip-DFnQGaCd.js";import"./info-sign-Do4YmiLe.js";import"./chevron-up-C71Omjwi.js";import"./chevron-down-DD8mUth2.js";import"./useEventCallback-Db_vpyOg.js";import"./iconLoader-D1sQLsZK.js";import"./Switch-B9t0AuUI.js";import"./CompositeRoot-PKxcOaKu.js";import"./TimePicker-Bv7Wzu6Y.js";import"./CollapsiblePanel-Bp6GY39F.js";import"./error-BIPDQryL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-39xkLVPI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
