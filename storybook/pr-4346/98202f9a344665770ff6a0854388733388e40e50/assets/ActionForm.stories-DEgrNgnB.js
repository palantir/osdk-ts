import{j as t,g as n}from"./iframe-Cr2bpw19.js";import{A as r}from"./action-form-DQ-GfQJY.js";import"./preload-helper-C_Wd2tIW.js";import"./DropdownField-BfaMBsWj.js";import"./debounce-B3GzHEdf.js";import"./useOsdkClient-ClyAxHlq.js";import"./index-HKSeYDtX.js";import"./Input-D8iQjGaO.js";import"./useBaseUiId-BsHSNQc2.js";import"./useControlled-CtsC-hEl.js";import"./index-tVKD-Epk.js";import"./index-BWlzJ_-u.js";import"./isObject-srhcKzzy.js";import"./InternalBackdrop-D4g3oYCc.js";import"./composite-Cktz544g.js";import"./index-Bk25D5KY.js";import"./getDisabledMountTransitionStyles-DZln-1Iq.js";import"./ToolbarRootContext-CivexTIu.js";import"./tick-BRyPHZ4_.js";import"./svgIconContainer-BdwTWCXC.js";import"./small-cross-d4ra4Um-.js";import"./search-aGII2Iab.js";import"./cross-DerUaPtE.js";import"./useValueChanged-D31dGWaR.js";import"./getPseudoElementBounds-BCxYLTqf.js";import"./CompositeItem-DiUvRjmE.js";import"./makeExternalStore-BO-peT-K.js";import"./BaseForm-BDSs_Tuk.js";import"./ActionButton-HPB4ADKq.js";import"./Button-wtCP8XMP.js";import"./SkeletonBar-CeIQhfQy.js";import"./Tooltip-VnOrH8hU.js";import"./info-sign-BHNyFVrj.js";import"./chevron-up-D0SyYcMY.js";import"./chevron-down-CPF_RvK3.js";import"./useEventCallback-0Un1rJGa.js";import"./iconLoader-BgFpwDnh.js";import"./Switch-jco1dvcs.js";import"./CompositeRoot-C0f0ZMNB.js";import"./TimePicker-Z0L3PQsT.js";import"./CollapsiblePanel-DNu3bG03.js";import"./error-s73FCl63.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ceo_vgdr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
