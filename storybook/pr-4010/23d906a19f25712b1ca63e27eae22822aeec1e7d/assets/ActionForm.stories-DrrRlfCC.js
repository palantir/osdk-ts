import{j as t,g as n}from"./iframe-4W_gqfri.js";import{A as r}from"./action-form-M72HcR-M.js";import"./preload-helper-iH2eX15p.js";import"./DropdownField-DY4lNhEH.js";import"./debounce-WcXDhRUO.js";import"./useOsdkClient-Dm3jcQQp.js";import"./index-BE7X2I8k.js";import"./Input-BayiWgWk.js";import"./useBaseUiId-CkmLLk3_.js";import"./useControlled-BKLbSuyG.js";import"./index-DIt5uu1h.js";import"./index-Xj4teAhO.js";import"./PopoverPopup-BtHZXFbP.js";import"./InternalBackdrop-CUPpQvP1.js";import"./composite-iwN2p37r.js";import"./index-DOVruLCM.js";import"./getDisabledMountTransitionStyles-tXQmkZ9Q.js";import"./ToolbarRootContext-DldxC3FJ.js";import"./tick-fx0AyRna.js";import"./svgIconContainer-DXl_IpNa.js";import"./small-cross-brVItmZZ.js";import"./search-BfzYHGGv.js";import"./cross-DPXC28es.js";import"./useValueChanged-7OtEnUZo.js";import"./getPseudoElementBounds-CAzCOJ3L.js";import"./CompositeItem-BflBgmdx.js";import"./makeExternalStore-DcNKv6Lc.js";import"./BaseForm-D2y-4PMP.js";import"./ActionButton-Qd3Ay8Ri.js";import"./Button-DmhydU5X.js";import"./SkeletonBar-Co4nSFIq.js";import"./Tooltip-D_C8QLsG.js";import"./info-sign-zweMgw5C.js";import"./chevron-up-9l4d2ngN.js";import"./chevron-down-DAwV2NNc.js";import"./useEventCallback-CfmYFYMZ.js";import"./iconLoader-Dr34fN_L.js";import"./CompositeRoot-DNJqPmS_.js";import"./Switch-D0ShhRGJ.js";import"./TimePicker-CI8MeIjJ.js";import"./CollapsiblePanel-CdkBP2mF.js";import"./error-DvgnJEpu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNNLqNUF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
