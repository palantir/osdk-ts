import{j as t,g as n}from"./iframe-5SoalxB8.js";import{A as r}from"./action-form-DFsPtCMl.js";import"./preload-helper-B3AWIfbd.js";import"./DropdownField-B9xNR_1-.js";import"./debounce-Cow5gaxU.js";import"./useOsdkClient-Ct6jxELr.js";import"./index-Cez1kwXk.js";import"./Input-B7jz047V.js";import"./useBaseUiId-_hIxwWiU.js";import"./useControlled-WPjc1su4.js";import"./index-DT5Sidop.js";import"./index-OzD1TZjX.js";import"./PopoverPopup-CZVBhwLf.js";import"./InternalBackdrop-BNnaRKAX.js";import"./composite-SE2iQFWF.js";import"./index-DWklm5Nh.js";import"./getDisabledMountTransitionStyles-iftAt274.js";import"./ToolbarRootContext-BawR_l4w.js";import"./tick-b6pDkRL9.js";import"./svgIconContainer-ZIKM4LC1.js";import"./small-cross-BXQIwf9i.js";import"./search-7jKLWuvF.js";import"./cross-C6M2F8_v.js";import"./useValueChanged-BRgu9RH8.js";import"./getPseudoElementBounds-DeJjQFQA.js";import"./CompositeItem-vz-X2T1a.js";import"./makeExternalStore-DfAT07Vb.js";import"./BaseForm-msnphMwx.js";import"./ActionButton-vMTpem8c.js";import"./Button-C7yTVROs.js";import"./SkeletonBar-UdUH3l3g.js";import"./Tooltip-DyjzpvsB.js";import"./info-sign-C9SIuahy.js";import"./chevron-up-Cvdd8isK.js";import"./chevron-down-C4Jmkz2d.js";import"./useEventCallback-CoMxb96Z.js";import"./iconLoader-CbtrGlzA.js";import"./CompositeRoot-BPwqQLoB.js";import"./Switch-DeJ_KK3c.js";import"./TimePicker-CirTend1.js";import"./CollapsiblePanel-BPbFINDF.js";import"./error-_mgoiawP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BjqDzNow.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
