import{j as t,g as n}from"./iframe-D8wUjP5Q.js";import{A as r}from"./action-form-Bxwkz-eP.js";import"./preload-helper-C60jAzLY.js";import"./DropdownField-r2EybeYn.js";import"./debounce-CY5bsJow.js";import"./useOsdkClient-x6ND1sZF.js";import"./index-BIu9Kojc.js";import"./Input-DqsKhBeK.js";import"./useBaseUiId-BUaCAPTV.js";import"./useControlled-DRmCkPiT.js";import"./index-Urfc-aXa.js";import"./index-9bYJqJha.js";import"./PopoverPopup-D-3JSrTB.js";import"./InternalBackdrop-DVaKSQ1p.js";import"./composite-C2EdyOaO.js";import"./index-ce0ZDUPy.js";import"./getDisabledMountTransitionStyles-BmFHpdBq.js";import"./ToolbarRootContext-Cng6yUXD.js";import"./tick-BvcCbX7h.js";import"./svgIconContainer-DfD-bPJ9.js";import"./small-cross-DDqBCwa4.js";import"./search-CqoqcUsr.js";import"./cross-uw8rTCsg.js";import"./useValueChanged-D4VH-6l-.js";import"./getPseudoElementBounds-DWEBDegK.js";import"./CompositeItem-Df57X5b8.js";import"./makeExternalStore-CO9Wus6n.js";import"./BaseForm-A_RGtCB5.js";import"./ActionButton-DjdPFFrW.js";import"./Button-Db1yV2vy.js";import"./SkeletonBar-B6gmAwPT.js";import"./Tooltip-FI1a-GTF.js";import"./info-sign-COFWlx8z.js";import"./chevron-up-CzrTJ-Ex.js";import"./chevron-down-BCcrHoHV.js";import"./useEventCallback-dtUX6p5h.js";import"./iconLoader-niUuypJd.js";import"./Switch-D7Hf-Fba.js";import"./CompositeRoot-B38ob4_b.js";import"./TimePicker-BED5TCL2.js";import"./CollapsiblePanel-DLikBfTi.js";import"./error-CtMjuQbV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-cJOGTvbe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
