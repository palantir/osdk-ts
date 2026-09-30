import{j as t,g as n}from"./iframe-DejlptTF.js";import{A as r}from"./action-form-CXqV57v4.js";import"./preload-helper-t1ZC-fSO.js";import"./DropdownField-BgflIuYE.js";import"./debounce-fU7KH6yO.js";import"./useOsdkClient-Be6GpiDW.js";import"./index-DeuG-BID.js";import"./Input-BNct-weu.js";import"./useBaseUiId-DNOeS8k3.js";import"./useControlled-u0rXshqK.js";import"./index-CbKeSWV-.js";import"./index-e8F5O9eW.js";import"./PopoverPopup-DUkO6HuE.js";import"./InternalBackdrop-BegRmqYV.js";import"./composite-CgiNKm-K.js";import"./index-DmUvwc9j.js";import"./getDisabledMountTransitionStyles-DARBSl-L.js";import"./ToolbarRootContext-hKTjuFFe.js";import"./tick-CSsKr-Cj.js";import"./svgIconContainer-Bd-w9OF2.js";import"./small-cross-BAi3Ugk-.js";import"./search-BB5SHFcx.js";import"./cross-DE57w2Hx.js";import"./useValueChanged-Co9qYG2g.js";import"./getPseudoElementBounds-B3xcbhps.js";import"./CompositeItem-C668gbIC.js";import"./makeExternalStore-DzmCjszS.js";import"./BaseForm-BFfxxba6.js";import"./ActionButton-D5ovP9h8.js";import"./Button-S0WXhUVU.js";import"./SkeletonBar-Jnqmj5L9.js";import"./Tooltip-D7gI9ZpI.js";import"./info-sign-DLCaCR3j.js";import"./chevron-up-D8pmYVnT.js";import"./chevron-down-R85fLGon.js";import"./useEventCallback-DySuSceI.js";import"./iconLoader-C69nKuK7.js";import"./Switch-DLq_fZ75.js";import"./CompositeRoot-NbUH6Bft.js";import"./TimePicker-Cy59xhd2.js";import"./CollapsiblePanel-whmM-HlO.js";import"./error-ClnW0JkG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CAm6PF-7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
