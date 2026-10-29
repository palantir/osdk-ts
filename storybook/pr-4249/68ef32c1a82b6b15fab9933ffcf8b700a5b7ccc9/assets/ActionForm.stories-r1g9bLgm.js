import{j as t,g as n}from"./iframe-CDOSHHrT.js";import{A as r}from"./action-form-DrV1tm9R.js";import"./preload-helper-C7s0GH2x.js";import"./DropdownField-fwqkmPCP.js";import"./debounce-BmMiYGXj.js";import"./useOsdkClient-B9tQWmKk.js";import"./index-B49rYjrW.js";import"./Input-BurDSqz5.js";import"./useBaseUiId-DTVz5o-p.js";import"./useControlled-C7Ep-7i8.js";import"./index-CMiNXGca.js";import"./index-DGmOJSLl.js";import"./PopoverPopup-SjgoRQ3b.js";import"./InternalBackdrop-Cz8GamC4.js";import"./composite-ClRcggKL.js";import"./getDisabledMountTransitionStyles-BS4YLUcj.js";import"./ToolbarRootContext-B8w6xXAv.js";import"./tick-DfF6ja2F.js";import"./svgIconContainer-De09oUFB.js";import"./small-cross-BhFa-iux.js";import"./search-CEcnnij_.js";import"./cross-BFylRGnd.js";import"./useValueChanged-DrhV6J-4.js";import"./getPseudoElementBounds-B_MpIFyK.js";import"./CompositeItem-CaCo0rwH.js";import"./makeExternalStore-D4uD5G65.js";import"./BaseForm-9L7qnlOt.js";import"./ActionButton-C99QTbiy.js";import"./Button-BvdBUf3P.js";import"./SkeletonBar-BbruRB1c.js";import"./Tooltip-C9jpQygb.js";import"./info-sign-9qOuTS1p.js";import"./chevron-up-lppoM-0Z.js";import"./chevron-down-BmuDMVTK.js";import"./useEventCallback-OCPQsthF.js";import"./iconLoader-B2oC1qIF.js";import"./Switch-BU7qbgyc.js";import"./CompositeRoot-Cr8XxINj.js";import"./TimePicker-QE3Z9TYL.js";import"./CollapsiblePanel-D6WRzd0y.js";import"./error-C4hjwR0B.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-RGxpItz-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const Z={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
