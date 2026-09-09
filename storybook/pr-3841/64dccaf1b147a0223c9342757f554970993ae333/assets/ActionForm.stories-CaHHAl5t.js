import{j as t,g as n}from"./iframe-00do0GFe.js";import{A as r}from"./action-form-ZjcRbQyQ.js";import"./preload-helper-BybtXQP0.js";import"./DropdownField-f3ouS_Ve.js";import"./debounce-CxsjR9Qp.js";import"./useOsdkClient-0rxWFgg-.js";import"./index-BGd643c2.js";import"./Input-CRsXFG3m.js";import"./useBaseUiId-C50NdykD.js";import"./useControlled-DE2hx_aJ.js";import"./index-DK-iGYU_.js";import"./index-ClkWJhJu.js";import"./PopoverPopup-CgcJU5ml.js";import"./InternalBackdrop-XKvPUnKv.js";import"./composite-CGwb3jqo.js";import"./index-BF61uIwD.js";import"./getDisabledMountTransitionStyles-B8mp5Bgl.js";import"./ToolbarRootContext-Ck2kYzW4.js";import"./tick-ClP-zKk3.js";import"./svgIconContainer-CFcIosnA.js";import"./small-cross-kY3MxGtM.js";import"./search-DAKi-R5m.js";import"./cross-nwDujSFV.js";import"./useValueChanged-FfQ9ockF.js";import"./getPseudoElementBounds-DbGLAZdP.js";import"./CompositeItem-Ds6yjvWK.js";import"./makeExternalStore-DtGkD75o.js";import"./BaseForm-iqcb4tE7.js";import"./ActionButton-CJdA5_XP.js";import"./Button-yWAqZOyg.js";import"./SkeletonBar-DOhvYthq.js";import"./Tooltip-9gQx4epj.js";import"./info-sign-CklovQ5p.js";import"./chevron-up-B0uAC5qQ.js";import"./chevron-down-CuokWr8C.js";import"./useEventCallback-CGFFFkW3.js";import"./iconLoader--MRRTAO5.js";import"./CompositeRoot-12gA1A3B.js";import"./Switch-gAEEtlRp.js";import"./TimePicker-BGmVII0H.js";import"./CollapsiblePanel-Dp6K32AY.js";import"./error-7ouMyDWT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D58QOMrM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
