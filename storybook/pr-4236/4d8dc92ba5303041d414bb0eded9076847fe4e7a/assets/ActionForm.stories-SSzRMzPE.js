import{j as t,g as n}from"./iframe-sYP-l0_a.js";import{A as r}from"./action-form-DPIzZWgy.js";import"./preload-helper-IUxRucnJ.js";import"./DropdownField-YTr0JAyw.js";import"./debounce-DXz0GdeZ.js";import"./useOsdkClient-D0mwHTqt.js";import"./index-BQi0o8Ch.js";import"./Input-CSh4Ffdb.js";import"./useBaseUiId-Btvm4iEK.js";import"./useControlled-BPCLqxL9.js";import"./index-C0H-vXi6.js";import"./index-mlL1YxFR.js";import"./PopoverPopup-0_cMUPX-.js";import"./InternalBackdrop-DijQJX9k.js";import"./composite-C-aQf2ph.js";import"./index-xLQRXt-V.js";import"./getDisabledMountTransitionStyles-BeyRbu5X.js";import"./ToolbarRootContext-BoQIBGO1.js";import"./tick-X4dvwp5-.js";import"./svgIconContainer-BEJydEi7.js";import"./small-cross-BNetlOJK.js";import"./search-DLv6CrwK.js";import"./cross-Bm2pwBEc.js";import"./useValueChanged-g9YxF3UY.js";import"./getPseudoElementBounds-Bi5n7pX-.js";import"./CompositeItem-7yi4DVr9.js";import"./makeExternalStore-CFZXdEl0.js";import"./BaseForm-D0PmsH4u.js";import"./ActionButton-Df-gBOsA.js";import"./Button-B9jbca7B.js";import"./SkeletonBar-CVV4GeGn.js";import"./Tooltip-C6Jo1h3u.js";import"./info-sign-CIX-HI48.js";import"./chevron-up-BgSVvo7b.js";import"./chevron-down-BmV5GZMn.js";import"./useEventCallback-D6BPXVKE.js";import"./iconLoader-Bmiqcff2.js";import"./Switch-DtM-JCWB.js";import"./CompositeRoot-CLDatbQ_.js";import"./TimePicker-Jpgm3EiZ.js";import"./CollapsiblePanel-uVWOXX9u.js";import"./error-DO2C4OtK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-2D2ceNeO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
