import{j as t,g as n}from"./iframe-CVTk1lj6.js";import{A as r}from"./action-form-Blc9UCFE.js";import"./preload-helper-Ch_NUblH.js";import"./DropdownField-WGqgGQOQ.js";import"./debounce-DgMBLlid.js";import"./useOsdkClient-BHkZYH7e.js";import"./index-Ca2wp4d3.js";import"./Input-DUWZnL0B.js";import"./useBaseUiId-ChhYdebi.js";import"./useControlled-7LT5KU92.js";import"./index-D-pc5yxy.js";import"./index-B2mOMAcR.js";import"./PopoverPopup-KhpH8XWr.js";import"./InternalBackdrop-Bx1r6uX2.js";import"./composite-CaJc-JUa.js";import"./index-DqbUxBef.js";import"./getDisabledMountTransitionStyles-CrlG27jh.js";import"./ToolbarRootContext-Bdz2jmkC.js";import"./tick-tvKtyq-H.js";import"./svgIconContainer-BlxLcGWd.js";import"./small-cross-q8kmKQY9.js";import"./search-Cr_k9lr1.js";import"./cross-Dl6Djxwv.js";import"./useValueChanged-D4uMe9lc.js";import"./getPseudoElementBounds-CexEIoIE.js";import"./CompositeItem-CwoHKheb.js";import"./makeExternalStore-BoZqRL7K.js";import"./BaseForm-ZfCO_76B.js";import"./ActionButton-D9pZWND8.js";import"./Button-B65aTlIJ.js";import"./SkeletonBar-9hrTtidV.js";import"./Tooltip-B6hZPcYj.js";import"./info-sign-BlHXDEbW.js";import"./chevron-up-B51_8lxD.js";import"./chevron-down-DNy2-Jwx.js";import"./useEventCallback-2fHMqE-X.js";import"./iconLoader-J7HfAcoQ.js";import"./Switch-BQVTmUXZ.js";import"./CompositeRoot-MbpE-R-k.js";import"./TimePicker-B1y9u3LC.js";import"./CollapsiblePanel-DLLCHJa6.js";import"./error-DD1GLIG6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-COaPxDqK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
