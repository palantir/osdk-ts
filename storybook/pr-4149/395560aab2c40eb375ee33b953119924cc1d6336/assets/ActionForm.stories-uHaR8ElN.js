import{j as t,g as n}from"./iframe-BOTLlUE6.js";import{A as r}from"./action-form-Z-5INkDy.js";import"./preload-helper-DEIZygRs.js";import"./DropdownField-CLSkteEy.js";import"./debounce-DYIbFqjP.js";import"./useOsdkClient-CPWrwkuC.js";import"./index-Cs-O_idR.js";import"./Input-D_iusRO5.js";import"./useBaseUiId-Dd9KpxnA.js";import"./useControlled-2lHvWmOj.js";import"./index-CWHl0m7K.js";import"./index-CcyNoJe8.js";import"./PopoverPopup-C5BaOSgy.js";import"./InternalBackdrop-IIlmsF_v.js";import"./composite-DGujq1fd.js";import"./index-C-efyImj.js";import"./getDisabledMountTransitionStyles-L5goK-63.js";import"./ToolbarRootContext-DuzuLF_7.js";import"./tick-HKjZmk2p.js";import"./svgIconContainer-Prc3KqJd.js";import"./small-cross-BXzGBX0-.js";import"./search-DlkeJy6k.js";import"./cross-Cy8vOx7n.js";import"./useValueChanged-BZ2Rr6kL.js";import"./getPseudoElementBounds-Cf68WDMb.js";import"./CompositeItem-CDnQJecr.js";import"./makeExternalStore-5sXqlo0x.js";import"./BaseForm-CWJPeyac.js";import"./ActionButton-C-8n6E4h.js";import"./Button-Dvgi56Dm.js";import"./SkeletonBar-BYB-xe6O.js";import"./Tooltip-Dis53iex.js";import"./info-sign-D14enLxA.js";import"./chevron-up-BL0wMHux.js";import"./chevron-down-QX4KjP4d.js";import"./useEventCallback-BajVHdte.js";import"./iconLoader-BU0TGXlp.js";import"./Switch-CHcA3Maj.js";import"./CompositeRoot-B36qmgKd.js";import"./TimePicker-B3xKA81_.js";import"./CollapsiblePanel-D8vxxxpH.js";import"./error-DjHdCw0S.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-VFTM94rP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
