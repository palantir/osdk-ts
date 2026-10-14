import{j as t,g as n}from"./iframe-Bd2YI4f_.js";import{A as r}from"./action-form-BmCdrZub.js";import"./preload-helper-BbK45qka.js";import"./DropdownField-B3fLG3Ni.js";import"./debounce-Be_hd9CS.js";import"./useOsdkClient-uOx8gnHF.js";import"./index-Bj2fqRcr.js";import"./Input-CxGxfdRH.js";import"./useBaseUiId-sg5e61RZ.js";import"./useControlled-CifkBIG0.js";import"./index-QyRfwHjS.js";import"./index-ByZnXX35.js";import"./PopoverPopup-BSkIYUdh.js";import"./InternalBackdrop-Ci_t8QuG.js";import"./composite-Do-T19t0.js";import"./index-kM3whwnL.js";import"./getDisabledMountTransitionStyles-eLA6B31k.js";import"./ToolbarRootContext-CcTA8tLc.js";import"./tick-yBx3a1H4.js";import"./svgIconContainer-CNqvkdfy.js";import"./small-cross-BFXkhpYi.js";import"./search-DvsXbyC6.js";import"./cross-CahcDK0M.js";import"./useValueChanged-qs76lLCO.js";import"./getPseudoElementBounds-CM5HIGOw.js";import"./CompositeItem-C1a6HzSc.js";import"./makeExternalStore-D_-udAfm.js";import"./BaseForm-BtIBuQ4o.js";import"./ActionButton-rIdfbPw7.js";import"./Button-4-CIF1W1.js";import"./SkeletonBar-CNiEEHDq.js";import"./Tooltip--me0TQ5w.js";import"./info-sign-komnXQ91.js";import"./chevron-up-B6bfNnH8.js";import"./chevron-down-D8kqf24B.js";import"./useEventCallback-CaosUMx5.js";import"./iconLoader-D2ulpdIt.js";import"./Switch-C0VtwdnE.js";import"./CompositeRoot-BftxbV3o.js";import"./TimePicker-DuJ_HHcR.js";import"./CollapsiblePanel-BAXIEU3S.js";import"./error-CA1VPVRX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CmXLVGag.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
