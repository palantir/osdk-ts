import{j as t,g as n}from"./iframe-n9hYnZ1k.js";import{A as r}from"./action-form-DtghuX6U.js";import"./preload-helper-BfllC993.js";import"./useDebouncedCallback-Cnujztnb.js";import"./useEventCallback-x8Kd3t-m.js";import"./isEqual-B8vYID_A.js";import"./_baseIsEqual-DZoBIkXn.js";import"./PopoverPopup-DZ28aU8u.js";import"./InternalBackdrop-CzoOD5Ge.js";import"./useBaseUiId--HQwG44S.js";import"./composite-BHMqnRJI.js";import"./index-CD83LihZ.js";import"./index-CsVpqo9H.js";import"./index-BwfYcv9A.js";import"./getDisabledMountTransitionStyles-C901m8ZM.js";import"./ToolbarRootContext-D77_KmSZ.js";import"./Select-F-RRM_58.js";import"./useOsdkClient-DB8tqHvc.js";import"./index-jFXEL4dj.js";import"./Input-D9iybl22.js";import"./useControlled-DVMhLBcM.js";import"./tick-Cw1T4_7H.js";import"./svgIconContainer-Ds9BUjSm.js";import"./small-cross-UgWxpI9F.js";import"./search-DNZ54Yxb.js";import"./cross-B2c8g5Vb.js";import"./useValueChanged-Bk8VifO3.js";import"./getPseudoElementBounds-BM01uxnJ.js";import"./CompositeItem-CR3Fp4HR.js";import"./DropdownField-DjHzjuSX.js";import"./makeExternalStore-C_HtZfof.js";import"./BaseForm-BJdm66B1.js";import"./ActionButton-CwGZb2W_.js";import"./Button-C1ReapeD.js";import"./SkeletonBar-BUxRGNdG.js";import"./Tooltip-Cz0yU5is.js";import"./info-sign-D0XTPzlA.js";import"./chevron-up-4s-c7Z0m.js";import"./chevron-down-0IZaGxOE.js";import"./iconLoader-opcnLq6n.js";import"./Switch-QqvsTvQs.js";import"./CompositeRoot-DQOCmPRb.js";import"./TimePicker-CFTbt09m.js";import"./CollapsiblePanel-DS7tzca4.js";import"./error-D9TzGXim.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3ldmX6a3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
