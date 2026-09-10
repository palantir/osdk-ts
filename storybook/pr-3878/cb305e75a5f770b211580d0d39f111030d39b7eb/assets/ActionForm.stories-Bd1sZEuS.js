import{j as t,g as n}from"./iframe-BXJnohbt.js";import{A as r}from"./action-form-0redzxY1.js";import"./preload-helper-tvnGn4jg.js";import"./DropdownField--OTUJ18G.js";import"./debounce-DTy8dIIZ.js";import"./useOsdkClient-y2bMalZp.js";import"./index-DJBlipGi.js";import"./Input-DFgR57Ky.js";import"./useBaseUiId-sZ35m2bM.js";import"./useControlled--cyQ52Ku.js";import"./index-DbER6lkg.js";import"./index-DIxniVKs.js";import"./PopoverPopup-DzsPnqhc.js";import"./InternalBackdrop-vup632p4.js";import"./composite-DdNHLfsp.js";import"./index-BIEsfLi4.js";import"./getDisabledMountTransitionStyles-DbKz3mGY.js";import"./ToolbarRootContext-DWK2aFvr.js";import"./tick-1_WHGxzZ.js";import"./svgIconContainer-VhJmqTox.js";import"./small-cross-3Wkanwed.js";import"./search-Bwx9I6xK.js";import"./cross-Q-_g4ZFQ.js";import"./useValueChanged-CXlUDxOW.js";import"./getPseudoElementBounds-CjzqAflM.js";import"./CompositeItem-DxHmEQaB.js";import"./makeExternalStore-Nh0J-rEN.js";import"./BaseForm-Bjs3PS9W.js";import"./ActionButton-91Oje2JU.js";import"./Button-k1fX7wnM.js";import"./SkeletonBar-CDbdkFM2.js";import"./Tooltip-fNhv7nQW.js";import"./info-sign-sZAi1dnD.js";import"./chevron-up-C2Hylzc9.js";import"./chevron-down-CyQUuZQm.js";import"./useEventCallback-BvLSkLRP.js";import"./iconLoader-DIRvn8H1.js";import"./CompositeRoot-BeB5NSzA.js";import"./Switch-DBtnQ2o7.js";import"./TimePicker-aZ6YIK4E.js";import"./CollapsiblePanel-C0Dtz8qp.js";import"./error-Du-8Vb6N.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DBlk2yrx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
