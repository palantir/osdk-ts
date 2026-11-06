import{j as t,g as n}from"./iframe-DalzUr1q.js";import{A as r}from"./action-form-B99nx4vl.js";import"./preload-helper-D_n2FxVD.js";import"./DropdownField-Bri-IXaO.js";import"./debounce-BZIGTgj-.js";import"./useOsdkClient-LHIhBz2N.js";import"./index-BFBpHzmv.js";import"./Input-D5Owm4cS.js";import"./useBaseUiId-C1YfiI_O.js";import"./useControlled-kzcpSzwV.js";import"./index-CyRUVzxf.js";import"./index-8qyP2Pih.js";import"./isObject-CZa9j52y.js";import"./InternalBackdrop-DXBWgB6P.js";import"./composite-ByIGP6v1.js";import"./index-6hqAlpZu.js";import"./getDisabledMountTransitionStyles-BC7pIBNq.js";import"./ToolbarRootContext-BCpC9w2q.js";import"./tick-BBITmVPh.js";import"./svgIconContainer-8scThZ5S.js";import"./small-cross-BSqUQSnp.js";import"./search-B4UxFsnj.js";import"./cross-SZYnhdqh.js";import"./useValueChanged-Bc2VNrg5.js";import"./getPseudoElementBounds-BzW4F44J.js";import"./CompositeItem-BA4-v1aY.js";import"./makeExternalStore-Ill0Kq_R.js";import"./BaseForm-DKRsR7-a.js";import"./ActionButton-BXGwgDtg.js";import"./Button-c1CthLqB.js";import"./SkeletonBar-BlqAJr93.js";import"./Tooltip-fxzvXvP9.js";import"./info-sign-CjqEe36b.js";import"./chevron-up-BuQVfXH0.js";import"./chevron-down-CPH5FDFQ.js";import"./useEventCallback-BAIllV_R.js";import"./iconLoader-C8jHo0Ba.js";import"./Switch-BeNM94q-.js";import"./CompositeRoot-CMKlH_Pk.js";import"./TimePicker-CPMhsf9L.js";import"./CollapsiblePanel-BcUy2Ne8.js";import"./error-3LJUbIdl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pz-JOP6f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
