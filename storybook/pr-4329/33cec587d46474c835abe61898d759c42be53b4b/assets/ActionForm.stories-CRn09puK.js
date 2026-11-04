import{j as t,g as n}from"./iframe-B8HV8iQM.js";import{A as r}from"./action-form-BTPThGXh.js";import"./preload-helper-BJL_29SE.js";import"./DropdownField-CHI-_Y2P.js";import"./debounce-3SAgyzFW.js";import"./useOsdkClient-D7UMSCqS.js";import"./index-DfArBtGw.js";import"./Input-BDX0t5YK.js";import"./useBaseUiId-DIsSmRfw.js";import"./useControlled-Bmw28nji.js";import"./index-6KHmLmfs.js";import"./index-UkSWMlbC.js";import"./PopoverPopup-BOpxhme4.js";import"./InternalBackdrop-D8Lv6NUu.js";import"./composite-Csop57qo.js";import"./index-BdGJVPhn.js";import"./getDisabledMountTransitionStyles-C_SsSajC.js";import"./ToolbarRootContext-CMP0qHsY.js";import"./tick-CnJDPiGK.js";import"./svgIconContainer-CSeiJgb1.js";import"./small-cross-DIXE5x7P.js";import"./search-NJ19wZoC.js";import"./cross-BUomV37k.js";import"./useValueChanged-B-_ytn6c.js";import"./getPseudoElementBounds-tj4TkaA0.js";import"./CompositeItem-B4-eeroY.js";import"./makeExternalStore-D-MiCBSb.js";import"./BaseForm-CcwtSWzg.js";import"./ActionButton-Be-vXg2-.js";import"./Button-C9_cOvqp.js";import"./SkeletonBar-IYKBkIS2.js";import"./Tooltip-BdCeYLjB.js";import"./info-sign-lqmE0VLU.js";import"./chevron-up-BMFgUssv.js";import"./chevron-down-InHxZIxd.js";import"./useEventCallback-C4vCOB3Y.js";import"./iconLoader-BqXU5vbb.js";import"./Switch-BsWuSvtx.js";import"./CompositeRoot-wu9Ucg76.js";import"./TimePicker-ByjUs4MA.js";import"./CollapsiblePanel-SrwTh7HR.js";import"./error-B8hDXUgK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Qp2i-feo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
