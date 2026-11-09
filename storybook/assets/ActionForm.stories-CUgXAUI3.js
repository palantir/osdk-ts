import{j as t,g as n}from"./iframe-YacpH74x.js";import{A as r}from"./action-form-CFpP7fZA.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-v0enRbIn.js";import"./debounce-B9DyVsKD.js";import"./useOsdkClient-BV0fBL9y.js";import"./index-BEoxUJoA.js";import"./Input-CU1bZoi8.js";import"./useBaseUiId-4SFOUSCG.js";import"./useControlled-CNlO3TEz.js";import"./index-C1Y9ReN9.js";import"./index-LgDXHTpd.js";import"./isObject-WXcao9eA.js";import"./InternalBackdrop-DDtJr629.js";import"./composite-DelgFzsG.js";import"./index-1dtThzIn.js";import"./getDisabledMountTransitionStyles-B7EUIZcg.js";import"./ToolbarRootContext-BntDugl_.js";import"./tick-GVLywL7s.js";import"./svgIconContainer-BUTn-dCB.js";import"./small-cross-REHTtvDB.js";import"./search-BkFAurUd.js";import"./cross-CMJXQf2R.js";import"./useValueChanged-BoESC3Qa.js";import"./getPseudoElementBounds-CG4o1vUb.js";import"./CompositeItem-T4MrQSqM.js";import"./makeExternalStore-wqA1Cewh.js";import"./BaseForm-OcDdCEus.js";import"./ActionButton-DUE8wiZa.js";import"./Button-CZyYceU0.js";import"./SkeletonBar-BBSYPOGa.js";import"./Tooltip-B6tb3JER.js";import"./info-sign-YqHk2HYl.js";import"./chevron-up-ld7cRskL.js";import"./chevron-down-Ce1omtAP.js";import"./useEventCallback-DDDkCV7z.js";import"./iconLoader-CNzFpUGK.js";import"./Switch-FnMNV4ri.js";import"./CompositeRoot-BQqms1PS.js";import"./TimePicker-CDxD_LlD.js";import"./CollapsiblePanel-DjUqTnvZ.js";import"./error-D9NpDKzr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-nLoJ6ux7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
