import{j as t,g as n}from"./iframe-BOWU70X1.js";import{A as r}from"./action-form-DZLHojsb.js";import"./preload-helper-DsrGzdLY.js";import"./DropdownField-DmaOVCkJ.js";import"./debounce-C0cDACkJ.js";import"./useOsdkClient-D5uHxQat.js";import"./index-Dqy6Gfe7.js";import"./Input-Ba0NW75w.js";import"./useBaseUiId-8tGgV_0l.js";import"./useControlled-BdeVhzxt.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./PopoverPopup-CZm5dGxt.js";import"./InternalBackdrop-D2-B01xw.js";import"./composite-CSfG6ZaY.js";import"./index-BSYQw0Uy.js";import"./getDisabledMountTransitionStyles-DisM1mEX.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./tick-ByRVlpzT.js";import"./svgIconContainer-B9QIza-c.js";import"./small-cross-DKR3JJry.js";import"./search-Bm_8-FpL.js";import"./cross-CVkoRI6N.js";import"./useValueChanged-Cko8QSI4.js";import"./getPseudoElementBounds-Beh_f-hj.js";import"./CompositeItem-CIAYfkGT.js";import"./makeExternalStore-BS5Bz3Hp.js";import"./BaseForm-CsyYYF3a.js";import"./ActionButton-CK7KXvFI.js";import"./Button-BvbX1UI9.js";import"./SkeletonBar-xXHQ0iAC.js";import"./Tooltip-CWU8oDpl.js";import"./info-sign-DlXHXO86.js";import"./chevron-up-QziipCuR.js";import"./chevron-down-B1Z7ByUI.js";import"./useEventCallback-CoK8fJ8c.js";import"./iconLoader-q1c0CC6g.js";import"./Switch-C_bZ2gk9.js";import"./CompositeRoot-CnRbnYqx.js";import"./TimePicker-U_C97OJC.js";import"./CollapsiblePanel-IZqS99Hx.js";import"./error-BjTP1vhZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bjyc-H5X.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
