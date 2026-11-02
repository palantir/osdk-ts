import{j as t,g as n}from"./iframe-C-gRhmL7.js";import{A as r}from"./action-form-D2F3pply.js";import"./preload-helper-BRnBMuxX.js";import"./DropdownField-Br06tlrV.js";import"./debounce-DGWONp_t.js";import"./useOsdkClient-CVDU5GOE.js";import"./index-BomyFAOQ.js";import"./Input-D1XkMJrA.js";import"./useBaseUiId-Dr0jpy2a.js";import"./useControlled-BYigcnNh.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./PopoverPopup-BfjojjnZ.js";import"./InternalBackdrop-DAQFGGKN.js";import"./composite-abNLhxgk.js";import"./index-Bn78Igy-.js";import"./getDisabledMountTransitionStyles-BmL3-adz.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./tick-CwSemnZF.js";import"./svgIconContainer-D3HKLOfp.js";import"./small-cross-QE8L2S61.js";import"./search-BQdh6WXo.js";import"./cross-BgbLU6cP.js";import"./useValueChanged-DfaHdTkd.js";import"./getPseudoElementBounds-Cw9ZB0lo.js";import"./CompositeItem-Dc0cRnHM.js";import"./makeExternalStore-s0ePZNdW.js";import"./BaseForm-Dis6M8H2.js";import"./ActionButton-CtsB9LNj.js";import"./Button-CE8V4pbx.js";import"./SkeletonBar-BrXfWJ3s.js";import"./Tooltip-DQzNOf2f.js";import"./info-sign-ClCPdnK0.js";import"./chevron-up-DDwoi2Mj.js";import"./chevron-down-Cj7UC7sg.js";import"./useEventCallback-L7w5wNTM.js";import"./iconLoader-E4APobGw.js";import"./Switch-CcYflGgj.js";import"./CompositeRoot-V2nABwQW.js";import"./TimePicker-BKu0ICFb.js";import"./CollapsiblePanel-BKE8iGjK.js";import"./error-AkMr3-YU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dez2mISn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
