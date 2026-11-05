import{j as t,g as n}from"./iframe-C0wU5abY.js";import{A as r}from"./action-form-kZA_v1Gg.js";import"./preload-helper-DBF01-cG.js";import"./DropdownField-CDiu5HIy.js";import"./debounce-_3Ys135D.js";import"./useOsdkClient-pdCcjq0j.js";import"./index-BLQzpxSF.js";import"./Input-CuYpucpk.js";import"./useBaseUiId-D1MC7GbA.js";import"./useControlled-jkUj0hrw.js";import"./index-Ca4Lp3-b.js";import"./index-VDAEj1qs.js";import"./isObject-D89gReL0.js";import"./InternalBackdrop-BXvP6ib-.js";import"./composite-BoBrXPGo.js";import"./index-BwUmCcfv.js";import"./getDisabledMountTransitionStyles-JrYbFoOK.js";import"./ToolbarRootContext-CLHzdGXk.js";import"./tick-Cow3RRx-.js";import"./svgIconContainer-CMAKke71.js";import"./small-cross-Bvw5RS_6.js";import"./search-Kac11RBU.js";import"./cross-DjbVostP.js";import"./useValueChanged-1ACDE08l.js";import"./getPseudoElementBounds-DzWEJrnK.js";import"./CompositeItem-Bqkqz40D.js";import"./makeExternalStore-DkrbDLqh.js";import"./BaseForm-36LkUeao.js";import"./ActionButton-V_luHs6O.js";import"./Button-w-E8GgnT.js";import"./SkeletonBar-DtDAen1t.js";import"./Tooltip-BFq4U8nM.js";import"./info-sign-Bam2gPYA.js";import"./chevron-up-Y4azxcQ2.js";import"./chevron-down-BwqCCX_Z.js";import"./useEventCallback-eLcMhxZ3.js";import"./iconLoader-BN_jcjR_.js";import"./Switch-WwnQyWmG.js";import"./CompositeRoot-BqNQVx2b.js";import"./TimePicker-YxX7-5u9.js";import"./CollapsiblePanel-C7mj3pNQ.js";import"./error-B8Sv0Q4K.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CY3k4xQQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
