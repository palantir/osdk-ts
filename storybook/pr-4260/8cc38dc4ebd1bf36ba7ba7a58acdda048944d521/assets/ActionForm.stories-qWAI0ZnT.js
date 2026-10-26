import{j as t,g as n}from"./iframe-HJ0Gtc-x.js";import{A as r}from"./action-form-BNw0hk2v.js";import"./preload-helper-BOUoT_Gy.js";import"./DropdownField-hZtNo6MG.js";import"./debounce-B7uP-EKg.js";import"./useOsdkClient-CoXY6Vlt.js";import"./index-211_BqLo.js";import"./Input-BRC4lGnf.js";import"./useBaseUiId-CeZXZ9Z0.js";import"./useControlled-C74o2pv-.js";import"./index-CAQybw0C.js";import"./index-BPe5620H.js";import"./PopoverPopup-CCXUh3Ez.js";import"./InternalBackdrop-Ds4oR6Ed.js";import"./composite-CuUXCjDd.js";import"./index-BhSWDlLz.js";import"./getDisabledMountTransitionStyles-BazR3s1k.js";import"./ToolbarRootContext-Cec3nuK8.js";import"./tick-CYuRXF5J.js";import"./svgIconContainer-BOUC7MPM.js";import"./small-cross-Bhi2-tHH.js";import"./search-BjFqXd51.js";import"./cross-ChjkGLAA.js";import"./useValueChanged-l1kass9c.js";import"./getPseudoElementBounds-Cf3JM-Dw.js";import"./CompositeItem-CHrD2JLR.js";import"./makeExternalStore-AnzMBZSn.js";import"./BaseForm-D4orOaMR.js";import"./ActionButton-B88YLnLq.js";import"./Button-Cg7ItP1u.js";import"./SkeletonBar-BJ8asOzR.js";import"./Tooltip-D9CYaD7B.js";import"./info-sign-CCcpobgu.js";import"./chevron-up-CMNFkWrY.js";import"./chevron-down-Db91ZRmD.js";import"./useEventCallback-CBE-X_q_.js";import"./iconLoader-D4g9Rv59.js";import"./Switch-qo3qk90P.js";import"./CompositeRoot-BEn1KuXL.js";import"./TimePicker-B3TXzPJp.js";import"./CollapsiblePanel-B3ADmTiC.js";import"./error-BQ1AWTRy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DmM4mVY6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
