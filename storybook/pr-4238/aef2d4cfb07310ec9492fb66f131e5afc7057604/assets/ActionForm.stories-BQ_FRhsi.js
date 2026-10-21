import{j as t,g as n}from"./iframe-CazyyGHD.js";import{A as r}from"./action-form-DCW0TSrn.js";import"./preload-helper-MgT8dc0X.js";import"./DropdownField-C5gHzoJd.js";import"./debounce-C5wZ6LH3.js";import"./useOsdkClient-D82r7lVV.js";import"./index-Bwh0Qzuq.js";import"./Input-BqWLM-qJ.js";import"./useBaseUiId-_VheOjS_.js";import"./useControlled-W6MY3ceN.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./PopoverPopup-Ctcy6mDh.js";import"./InternalBackdrop-B4za0H0s.js";import"./composite-eyAHIZy6.js";import"./index-B5m19dzZ.js";import"./getDisabledMountTransitionStyles-mlYUDhO6.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./tick-BlG7e-el.js";import"./svgIconContainer-D-fln-_9.js";import"./small-cross-DG5C9V4j.js";import"./search-CwjMn8PH.js";import"./cross-Cm-jIUuV.js";import"./useValueChanged-DBJ5aULu.js";import"./getPseudoElementBounds-9TC7yV4Y.js";import"./CompositeItem-rCpLyuDw.js";import"./makeExternalStore-CoBf-2QX.js";import"./BaseForm-bPX_-gP5.js";import"./ActionButton-CY0CRft6.js";import"./Button-ByiOliQr.js";import"./SkeletonBar-B_xaQIaw.js";import"./Tooltip-IDqRDs0x.js";import"./info-sign-KJ2bvM_H.js";import"./chevron-up-Dh6DsN47.js";import"./chevron-down-C2D_MUNL.js";import"./useEventCallback-UNd6PIzw.js";import"./iconLoader-CrxbPTZX.js";import"./Switch-dlRb8_Ze.js";import"./CompositeRoot-CXxN8NO7.js";import"./TimePicker-BZ4qlfTI.js";import"./CollapsiblePanel-Di7CgTfu.js";import"./error-0vET3H6E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C07As7Qh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
