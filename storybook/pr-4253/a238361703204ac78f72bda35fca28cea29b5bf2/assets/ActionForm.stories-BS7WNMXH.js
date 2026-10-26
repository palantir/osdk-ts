import{j as t,g as n}from"./iframe-ChS3imFp.js";import{A as r}from"./action-form-DgToPT8m.js";import"./preload-helper-CbLZMJZq.js";import"./DropdownField-DH0EEhyZ.js";import"./debounce-DDb-9VWg.js";import"./useOsdkClient-DGx74XLA.js";import"./index-BhUaDBrt.js";import"./Input-Ceo2lduN.js";import"./useBaseUiId-D54mwsVu.js";import"./useControlled-BRbOyxdk.js";import"./index-q2j62sEE.js";import"./index-jVTOKRrt.js";import"./PopoverPopup-C3wuDmxN.js";import"./InternalBackdrop-BxgcnVtt.js";import"./composite-BXiRclhX.js";import"./index-C5fCn2Oc.js";import"./getDisabledMountTransitionStyles-CDYtl7Ns.js";import"./ToolbarRootContext-Ciy-U0ts.js";import"./tick-X11Khcsu.js";import"./svgIconContainer-CrPK_Tf2.js";import"./small-cross-BvcSZeK5.js";import"./search-DsoYH40Z.js";import"./cross-B14JKiqa.js";import"./useValueChanged-BrvbqScR.js";import"./getPseudoElementBounds-j94sMqWn.js";import"./CompositeItem-Ciy3kTde.js";import"./makeExternalStore-vRVo58Vz.js";import"./BaseForm-CwiFMjHp.js";import"./ActionButton-5Bimgsql.js";import"./Button-DheVbQ5T.js";import"./SkeletonBar-Cj6_TZPS.js";import"./Tooltip-Dttn_b8B.js";import"./info-sign-B-Ds9Fuq.js";import"./chevron-up-BtexXqlJ.js";import"./chevron-down-CE8oNUyN.js";import"./useEventCallback-DkRfzjT3.js";import"./iconLoader-DzKLgmgH.js";import"./Switch-CBnmoEHM.js";import"./CompositeRoot-CR-SOxfB.js";import"./TimePicker-U7xhdsXo.js";import"./CollapsiblePanel-6nrQcjmf.js";import"./error-qSLqjDm7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-uF3PiR7H.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
