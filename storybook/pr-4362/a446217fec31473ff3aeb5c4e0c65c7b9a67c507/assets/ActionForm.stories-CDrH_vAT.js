import{j as t,g as n}from"./iframe-D1PWQ8eg.js";import{A as r}from"./action-form-7m2Hww7E.js";import"./preload-helper-ChDiB21Q.js";import"./DropdownField-RNzF6eBl.js";import"./debounce-DKSfc2Jx.js";import"./useOsdkClient-BeJmH5-G.js";import"./index-BfN20Yol.js";import"./Input-DcHTO1Eg.js";import"./useBaseUiId-DQZDizk3.js";import"./useControlled-D21_fOEO.js";import"./index-C-gFUxtR.js";import"./index-k_FhLYlw.js";import"./isObject-Br-jS6Ya.js";import"./InternalBackdrop-Cd6fjHcd.js";import"./composite-Dz4PW6bE.js";import"./index-BC0Fj6cX.js";import"./getDisabledMountTransitionStyles-DTkXPwSS.js";import"./ToolbarRootContext-DVH0WoOd.js";import"./tick-C3zXPXqC.js";import"./svgIconContainer-BXQnyB7k.js";import"./small-cross-hiTnrqyw.js";import"./search-Bzfmr3Yu.js";import"./cross-DpDhreOD.js";import"./useValueChanged-C8diiUx6.js";import"./getPseudoElementBounds-DB6IKhjF.js";import"./CompositeItem-DoK1nl1V.js";import"./makeExternalStore-C-kCn6EW.js";import"./BaseForm-1MQfS00g.js";import"./ActionButton-BFBOVnYa.js";import"./Button-DGBWNQgJ.js";import"./SkeletonBar-B9-g2cwM.js";import"./Tooltip-Bgo0GtJm.js";import"./info-sign-CHrYtNOK.js";import"./chevron-up-BkjL9JfX.js";import"./chevron-down-h_s7BHqv.js";import"./useEventCallback-CaQTcD9p.js";import"./iconLoader-CRXO-zIm.js";import"./Switch-CZaUp8at.js";import"./CompositeRoot-Dmveyke6.js";import"./TimePicker-BzlLMcPt.js";import"./CollapsiblePanel-Bw_yq71x.js";import"./error-CawAj1Hu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DniPK0ul.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
