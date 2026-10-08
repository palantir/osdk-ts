import{j as t,g as n}from"./iframe-BdamuBSW.js";import{A as r}from"./action-form-D9n3eFe2.js";import"./preload-helper-DZ9xmEaG.js";import"./DropdownField-CK-WBLfS.js";import"./debounce-2PBdA7WY.js";import"./useOsdkClient-BwzpfxSK.js";import"./index-CzCGUNDu.js";import"./Input-vUwBhrLX.js";import"./useBaseUiId-CrCJEUlz.js";import"./useControlled-D5iM1jy5.js";import"./index-B5Cmbtjp.js";import"./index-BCh8Pu1q.js";import"./PopoverPopup-DhOu8Gke.js";import"./InternalBackdrop-CO4Xg4x0.js";import"./composite-Bvo9YAgy.js";import"./index-FY0Bg0-m.js";import"./getDisabledMountTransitionStyles-BFJq39Vl.js";import"./ToolbarRootContext-VKjIBJTb.js";import"./tick-BEUPv9hK.js";import"./svgIconContainer-CGhkkD0s.js";import"./small-cross-ZuHva1xM.js";import"./search-XGjCTgti.js";import"./cross-CLaBWSw6.js";import"./useValueChanged-DGZ0cM7F.js";import"./getPseudoElementBounds-CjHvqmd5.js";import"./CompositeItem-BuuNoifa.js";import"./makeExternalStore-DmdygOVW.js";import"./BaseForm-Bmo9WP1n.js";import"./ActionButton-CcP9PBD9.js";import"./Button-NcM8hPFP.js";import"./SkeletonBar-CWjKtAmo.js";import"./Tooltip-Cv_FqXfC.js";import"./info-sign-DB8CXyvw.js";import"./chevron-up-uP8S8emQ.js";import"./chevron-down-BM9a4BBi.js";import"./useEventCallback-CECLtwpw.js";import"./iconLoader-Doh4hvYV.js";import"./Switch-D9CE6fzR.js";import"./CompositeRoot-D_N-KuvT.js";import"./TimePicker-CEg4IeAF.js";import"./CollapsiblePanel-pxD-JLDi.js";import"./error-DKUZpZvu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSNwlJ-x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
