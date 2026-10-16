import{j as t,g as n}from"./iframe-Dz-3bopY.js";import{A as r}from"./action-form-BSgi4XUV.js";import"./preload-helper-DyKBZj2x.js";import"./DropdownField-DM80qxvU.js";import"./debounce-D45X2sYK.js";import"./useOsdkClient-m_Y5l7qU.js";import"./index-DXk5AkRu.js";import"./Input-BShSfu0I.js";import"./useBaseUiId-DdDMVRT4.js";import"./useControlled-BicNl6JT.js";import"./index-Cd6ys6N0.js";import"./index-CESOHnLX.js";import"./PopoverPopup-B8lHwqHR.js";import"./InternalBackdrop-CMlwDkvu.js";import"./composite-CeOULy3_.js";import"./index-uA0pARUc.js";import"./getDisabledMountTransitionStyles-DMtKFpJM.js";import"./ToolbarRootContext-Bdn-bZ42.js";import"./tick-hX-gVzsC.js";import"./svgIconContainer-VUnqKTqj.js";import"./small-cross-DvfWpNC5.js";import"./search-C0Oo-5ck.js";import"./cross-BV1ilYHG.js";import"./useValueChanged-3FeBMYAh.js";import"./getPseudoElementBounds-D-oSHvkB.js";import"./CompositeItem-DkOqAvvV.js";import"./makeExternalStore-BqALFL7i.js";import"./BaseForm-BDBub_eA.js";import"./ActionButton-BK1pZ0GM.js";import"./Button-CYhmyUyk.js";import"./SkeletonBar-3PFmjfxg.js";import"./Tooltip-Bx-YTezY.js";import"./info-sign-DFbICvEm.js";import"./chevron-up-DOQZQn2y.js";import"./chevron-down-CtwdWDe5.js";import"./useEventCallback-D89So7L3.js";import"./iconLoader-CP6sBudc.js";import"./Switch-DYuym5nA.js";import"./CompositeRoot-Cn2oP6nd.js";import"./TimePicker-Dh1UCo3L.js";import"./CollapsiblePanel-xME6KYQT.js";import"./error-DDZrlFGO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CGeg0cBL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
