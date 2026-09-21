import{j as t,g as n}from"./iframe-Cfzzxn_n.js";import{A as r}from"./action-form-Dy4aOKti.js";import"./preload-helper-Dg7pGUOS.js";import"./DropdownField-DtNKMGKP.js";import"./debounce-Do79F5Rt.js";import"./useOsdkClient-Ba_ITXqU.js";import"./index-CMN6-XKQ.js";import"./Input-CnQ0L5k0.js";import"./useBaseUiId-jVad5k1_.js";import"./useControlled-CNmeQlt3.js";import"./index-CBbyaHPU.js";import"./index-CPjSGEwp.js";import"./PopoverPopup-DebGjI7p.js";import"./InternalBackdrop-DAR7W5Wj.js";import"./composite-CLlDBj0Z.js";import"./index-Cg0AkbTX.js";import"./getDisabledMountTransitionStyles-Hk1XRehz.js";import"./ToolbarRootContext-D5srvXY8.js";import"./tick-CRy55xU8.js";import"./svgIconContainer-BI8ujPzn.js";import"./small-cross-DyTVyiiv.js";import"./search-Dkia1gOi.js";import"./cross-DQq_Xwh6.js";import"./useValueChanged-BMGXXoQd.js";import"./getPseudoElementBounds-DUI2YNlh.js";import"./CompositeItem-CcHRWvUR.js";import"./makeExternalStore-D0DZxHLg.js";import"./BaseForm-CqoRv1PU.js";import"./ActionButton-AnBXq9dB.js";import"./Button-BI-1kn4u.js";import"./SkeletonBar-jkEtksym.js";import"./Tooltip-D6tPQUhI.js";import"./info-sign-CxfBemY1.js";import"./chevron-up-DtoJ31cQ.js";import"./chevron-down-DEBizV0j.js";import"./useEventCallback-B7JsYCH4.js";import"./iconLoader-BSnIk4Ag.js";import"./Switch-D2itMQGR.js";import"./CompositeRoot-BU75Zm5r.js";import"./TimePicker-K0AFzxUv.js";import"./CollapsiblePanel-Cu4Eaeg8.js";import"./error-Bx2UJ-jk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B7pLyp-k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
