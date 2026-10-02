import{j as t,g as n}from"./iframe-CBBfontH.js";import{A as r}from"./action-form-CyB59ByP.js";import"./preload-helper-C9XLNiex.js";import"./DropdownField-BFYkkAFZ.js";import"./debounce-BRaC803f.js";import"./useOsdkClient-CKOOY0Rx.js";import"./index-BK79uKA4.js";import"./Input-CnWoOgAt.js";import"./useBaseUiId-D3hM4v_U.js";import"./useControlled-DaI-bqFd.js";import"./index-C2T6QgIM.js";import"./index-CD1w3ijm.js";import"./PopoverPopup-Bx6Q7Dee.js";import"./InternalBackdrop-Bhw3AVLQ.js";import"./composite-B8aA5vzU.js";import"./index-BVDezsvr.js";import"./getDisabledMountTransitionStyles-DCBtf9ru.js";import"./ToolbarRootContext-DlEp5yGp.js";import"./tick-B05HzIpP.js";import"./svgIconContainer-DticknVs.js";import"./small-cross-B2CUI9TY.js";import"./search-l34gwdLO.js";import"./cross-FHMV1Mb9.js";import"./useValueChanged-BW_ZWeBx.js";import"./getPseudoElementBounds-Dewf_zh7.js";import"./CompositeItem-DvZr4Fnk.js";import"./makeExternalStore-D8kr4lHx.js";import"./BaseForm-tuPHOlSW.js";import"./ActionButton-X94BlYS6.js";import"./Button-BzMH9WPr.js";import"./SkeletonBar-CleAdRcI.js";import"./Tooltip-kEuvMNv7.js";import"./info-sign-DO0zX-75.js";import"./chevron-up-C7T5rmza.js";import"./chevron-down-BeGAiI5e.js";import"./useEventCallback-BwO2T9OZ.js";import"./iconLoader-DCF9HFiy.js";import"./Switch-B4qdtO4e.js";import"./CompositeRoot-BcmeOzZk.js";import"./TimePicker-Dz4-N6SR.js";import"./CollapsiblePanel-PXa-ow1L.js";import"./error-BFkl_rh_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-vNqbOsIn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
