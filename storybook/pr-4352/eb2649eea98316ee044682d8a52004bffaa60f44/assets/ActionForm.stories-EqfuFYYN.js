import{j as t,g as n}from"./iframe-cQ3f48MB.js";import{A as r}from"./action-form-BBYQfUYl.js";import"./preload-helper-D6QOSXh4.js";import"./DropdownField-CLQWIPME.js";import"./debounce-Dl9ssa6I.js";import"./useOsdkClient-CamUyQ2y.js";import"./index-D1RuRedd.js";import"./Input-BuFeTP1U.js";import"./useBaseUiId-CMNXwzlb.js";import"./useControlled-ByZlI-u7.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./isObject-saTum3J5.js";import"./InternalBackdrop-DuDjQ0BZ.js";import"./composite-B6VOm6ZQ.js";import"./index-Bs-Z1Jgq.js";import"./getDisabledMountTransitionStyles-Bg1kr4yU.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./tick-nlg_x8OU.js";import"./svgIconContainer-CgizML4Q.js";import"./small-cross-BObFe73S.js";import"./search-iHipGmJb.js";import"./cross-DauAavmu.js";import"./useValueChanged-BQFlsv8-.js";import"./getPseudoElementBounds-DKU8Ia-1.js";import"./CompositeItem-684cCOtj.js";import"./makeExternalStore-DtAasX45.js";import"./BaseForm-s_aIy4sK.js";import"./ActionButton-k9CcFnZX.js";import"./Button-DZgLeZFj.js";import"./SkeletonBar-D4mUM1vS.js";import"./Tooltip-DsHuisIK.js";import"./info-sign-UdBUyH8B.js";import"./chevron-up-Datrgx7x.js";import"./chevron-down-CIrisS0y.js";import"./useEventCallback-Y2QBMo-H.js";import"./iconLoader-8NDhjtoG.js";import"./Switch-C4bkX3pg.js";import"./CompositeRoot-BxXBRLdZ.js";import"./TimePicker-Dvtq2Tdk.js";import"./CollapsiblePanel-BS0BxhJu.js";import"./error-CsayxGJU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D1uLGy1n.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
