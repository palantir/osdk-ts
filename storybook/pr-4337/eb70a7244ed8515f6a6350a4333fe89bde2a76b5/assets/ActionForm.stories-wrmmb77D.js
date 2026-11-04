import{j as t,g as n}from"./iframe-CmxH_uLC.js";import{A as r}from"./action-form-CLICa4gO.js";import"./preload-helper-BeAOyUTZ.js";import"./DropdownField-FhNn2H0Y.js";import"./debounce-uG06-Bnl.js";import"./useOsdkClient-CKlsW0yh.js";import"./index-DJsCZSKi.js";import"./Input-BKp843TN.js";import"./useBaseUiId-C0ZMCIGl.js";import"./useControlled-Cmxg5Gb3.js";import"./index-xj8oWt_u.js";import"./index-YuGlXnUZ.js";import"./PopoverPopup-DJbVIXOK.js";import"./InternalBackdrop-CSQj2QiU.js";import"./composite-XJfPxJ_X.js";import"./index-DI_hkYt2.js";import"./getDisabledMountTransitionStyles-CMPEQ-kf.js";import"./ToolbarRootContext-D7pkAdai.js";import"./tick-BOd_PXKl.js";import"./svgIconContainer-B8tcX66C.js";import"./small-cross-CkLXIhPX.js";import"./search-TlKrCqYm.js";import"./cross-CyX8lMkj.js";import"./useValueChanged-CwV0eJfz.js";import"./getPseudoElementBounds-lcY7pLtV.js";import"./CompositeItem-tCxULoej.js";import"./makeExternalStore-BlDQytTU.js";import"./BaseForm-HYeFOGtW.js";import"./ActionButton-DCJnOZsI.js";import"./Button-LKCq4LKF.js";import"./SkeletonBar-C1mRvl1J.js";import"./Tooltip-Dgrr9UmS.js";import"./info-sign-fC5RZL8P.js";import"./chevron-up-D3QI24Rb.js";import"./chevron-down-CyKsjkJ5.js";import"./useEventCallback-UxifOB0d.js";import"./iconLoader-DQOVYOih.js";import"./Switch-CtL5-o_9.js";import"./CompositeRoot-D0jHQ4pR.js";import"./TimePicker-C0SrUNea.js";import"./CollapsiblePanel--w9tIzOo.js";import"./error-Dd4yTEqY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-087Wob4c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
