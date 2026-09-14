import{j as t,g as n}from"./iframe-CdsRGRZD.js";import{A as r}from"./action-form-C__sVq9I.js";import"./preload-helper-CGHORiIs.js";import"./DropdownField-C2AO5vc6.js";import"./debounce-C26q8tZz.js";import"./useOsdkClient-B3rsIMmP.js";import"./index-Fk1WgWoL.js";import"./Input-BrPBFCOf.js";import"./useBaseUiId-DiEHO-EU.js";import"./useControlled-CXpC8eD9.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./PopoverPopup-CExD3oNB.js";import"./InternalBackdrop-c4kOEo_j.js";import"./composite-DyS-Ch2i.js";import"./index-CfhQ_HhS.js";import"./getDisabledMountTransitionStyles-DXjYuHQ4.js";import"./ToolbarRootContext-DYboyT6t.js";import"./tick-slqArv83.js";import"./svgIconContainer-Cxkf-wd_.js";import"./small-cross-DD2bSDX4.js";import"./search-B-mt-Fpc.js";import"./cross-DAi95Y0X.js";import"./useValueChanged-hFU-JeNn.js";import"./getPseudoElementBounds-Cg-geDk4.js";import"./CompositeItem-CNBfRrGp.js";import"./makeExternalStore-8ZflOwQq.js";import"./BaseForm-PNw7uz0s.js";import"./ActionButton-B-ECTkAX.js";import"./Button-CMyVgQSr.js";import"./SkeletonBar-Dldmu3tt.js";import"./Tooltip-CHHDt5TJ.js";import"./info-sign-DGvwtc5v.js";import"./chevron-up-Ccvg19eS.js";import"./chevron-down-C7u5o2RL.js";import"./useEventCallback-DbOnN22T.js";import"./iconLoader-CkdspbeB.js";import"./CompositeRoot-D0yYNeXu.js";import"./Switch-PIPH9mpo.js";import"./TimePicker-C5UN41Ox.js";import"./CollapsiblePanel-BCipB-WW.js";import"./error-D2kK2TGa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DzKI7pdO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
