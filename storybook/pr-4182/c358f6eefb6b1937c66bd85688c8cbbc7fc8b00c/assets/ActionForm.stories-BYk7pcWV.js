import{j as t,g as n}from"./iframe-7g13v2jN.js";import{A as r}from"./action-form-D05WHamx.js";import"./preload-helper-CclsuuMH.js";import"./DropdownField-D0tQzFI8.js";import"./debounce-BEFTFyoa.js";import"./useOsdkClient-UG4YR_Hh.js";import"./index-BgJ1FFdq.js";import"./Input-CaqMv5Lb.js";import"./useBaseUiId-C7XxkQYq.js";import"./useControlled-B23KZW1l.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./PopoverPopup-BXniSYAa.js";import"./InternalBackdrop-DWiXKM0G.js";import"./composite-B2zIsJ0R.js";import"./index-SelFJin-.js";import"./getDisabledMountTransitionStyles-CW70_K2g.js";import"./ToolbarRootContext-CE2CALLi.js";import"./tick-CRrNOkiB.js";import"./svgIconContainer-DukTjdz5.js";import"./small-cross-DO2vuBir.js";import"./search-sAV5xLcY.js";import"./cross-OMCp2mi_.js";import"./useValueChanged-D9FXoZkK.js";import"./getPseudoElementBounds-CunRcIqO.js";import"./CompositeItem-B-yStqfF.js";import"./makeExternalStore-Bri8hEZ2.js";import"./BaseForm-Dugg0brG.js";import"./ActionButton-BIcuEm-R.js";import"./Button-Apw5WzKr.js";import"./SkeletonBar-DtbFqHqp.js";import"./Tooltip-Dnj9fxoM.js";import"./info-sign-B9pous_f.js";import"./chevron-up-D_QaO6YL.js";import"./chevron-down-CFQZfM99.js";import"./useEventCallback-5D6oIoIr.js";import"./iconLoader-rSu2P7vS.js";import"./Switch-DZiV0vG8.js";import"./CompositeRoot-8amK5kl9.js";import"./TimePicker-Cn7iq4lc.js";import"./CollapsiblePanel-DdzzFDVY.js";import"./error-D4UXhq88.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CxyFHZKX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
