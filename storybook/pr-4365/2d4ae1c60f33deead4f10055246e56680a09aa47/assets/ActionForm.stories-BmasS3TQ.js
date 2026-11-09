import{j as t,g as n}from"./iframe-CwoOGB90.js";import{A as r}from"./action-form-BpMEOnFp.js";import"./preload-helper-zjr9DTNv.js";import"./DropdownField-DvlmGHHn.js";import"./debounce-DjU0zQzn.js";import"./useOsdkClient-CX_eol9_.js";import"./index-CZrnOEge.js";import"./Input-Bfvllh0J.js";import"./useBaseUiId-CG_HMXOZ.js";import"./useControlled-CyV_xO7n.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./isObject-DBuDBkaL.js";import"./InternalBackdrop-2kZ8nvu1.js";import"./composite-CQ1lSzH1.js";import"./index-CIs6h9pu.js";import"./getDisabledMountTransitionStyles-CDwQ_97u.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./tick-B9GD-hKF.js";import"./svgIconContainer-vpSdtZHg.js";import"./small-cross-CdfSHMjX.js";import"./search-B4Rhn5WX.js";import"./cross-84LZ_c3o.js";import"./useValueChanged-d4U5lg5Y.js";import"./getPseudoElementBounds-CxBwOVu1.js";import"./CompositeItem-uLTqCAuJ.js";import"./makeExternalStore-BAl3wc3x.js";import"./BaseForm-BHfneYZq.js";import"./ActionButton-BdjYmFRu.js";import"./Button-CzS_tZvQ.js";import"./SkeletonBar-B3HWXV5p.js";import"./Tooltip-DoSGgxMu.js";import"./info-sign-CPi_TjlA.js";import"./chevron-up-CqANW7ml.js";import"./chevron-down-CzfXAkFG.js";import"./useEventCallback-ByWQ63Gl.js";import"./iconLoader-BiYZ0kZA.js";import"./Switch-CTrv8CB1.js";import"./CompositeRoot-B0xHKeUX.js";import"./TimePicker-BEjrqxl5.js";import"./CollapsiblePanel-CzzEpLdL.js";import"./error-D1I108xZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-IkpPb6vj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
