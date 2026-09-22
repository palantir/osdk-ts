import{j as t,g as n}from"./iframe-qmzCXWN4.js";import{A as r}from"./action-form-ByQ2kuMx.js";import"./preload-helper-DfaqjKYe.js";import"./DropdownField-DZLyjXC2.js";import"./debounce-DcZ-cQ5_.js";import"./useOsdkClient-CBhT0OrD.js";import"./index-BHXsooho.js";import"./Input-CFsjF6HE.js";import"./useBaseUiId-BJvBYugX.js";import"./useControlled-BcZ-NiAO.js";import"./index-Cejy0gyw.js";import"./index-ChmUS2LB.js";import"./PopoverPopup-Bodc44xX.js";import"./InternalBackdrop-CgDKP17E.js";import"./composite-DL4bYzm9.js";import"./index-wI8QjcAS.js";import"./getDisabledMountTransitionStyles-C0YhA-Ys.js";import"./ToolbarRootContext-DGUkZWal.js";import"./tick-Dwo8b7et.js";import"./svgIconContainer-IgiOu0RR.js";import"./small-cross-Cf0sj-e3.js";import"./search-Diu7klqt.js";import"./cross-CQlGHY78.js";import"./useValueChanged-CqxUQgrJ.js";import"./getPseudoElementBounds-C3iFuC2O.js";import"./CompositeItem-Csvh_d0_.js";import"./makeExternalStore-BXxLBZ9K.js";import"./BaseForm-pNSHz0zd.js";import"./ActionButton-CU7TeyVP.js";import"./Button-DAis4ZgI.js";import"./SkeletonBar-CSPSdf3f.js";import"./Tooltip-CZjN0xGR.js";import"./info-sign-CId6HsbB.js";import"./chevron-up-BdO3YuUC.js";import"./chevron-down-Dwy6C3BH.js";import"./useEventCallback-8Q0F8-SM.js";import"./iconLoader-Q8JyUwbs.js";import"./CompositeRoot-BR-vXXxn.js";import"./Switch-Ch741qIu.js";import"./TimePicker-B4XkwAZi.js";import"./CollapsiblePanel-D_Wdr9Hn.js";import"./error-BLaFtDHL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D5CdmZxO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
