import{j as t,g as n}from"./iframe-CpWBydph.js";import{A as r}from"./action-form-B81LjJom.js";import"./preload-helper-D2EqYees.js";import"./DropdownField-Cj_IdBfJ.js";import"./debounce-ClJ8DjPv.js";import"./useOsdkClient-OrClxpkO.js";import"./index-DvfucFad.js";import"./Input-CBPVcjqK.js";import"./useBaseUiId-COtj2_rS.js";import"./useControlled-BmS1IvVS.js";import"./index-DrBBVf0s.js";import"./index-BmfQPoOF.js";import"./PopoverPopup-9FwNVPH6.js";import"./InternalBackdrop-BSfinE2G.js";import"./composite-B-otFn75.js";import"./index-5xD2A4-R.js";import"./getDisabledMountTransitionStyles-BccbayF2.js";import"./ToolbarRootContext-DMifvP-V.js";import"./tick-1IBp_A8v.js";import"./svgIconContainer-DbE5PrYx.js";import"./small-cross-toPDb3Us.js";import"./search-CA9yp1JF.js";import"./cross-NuddkLO5.js";import"./useValueChanged-VjU-WqRp.js";import"./getPseudoElementBounds-D6k5ZcCj.js";import"./CompositeItem-nG423aGN.js";import"./makeExternalStore-C7U98bYJ.js";import"./BaseForm-DALob0lg.js";import"./ActionButton-CSVHMrTJ.js";import"./Button-CVph9TxQ.js";import"./SkeletonBar-XV3C3ne0.js";import"./Tooltip-BhubVngg.js";import"./info-sign-bQvWe6ep.js";import"./chevron-up-CPsynwKT.js";import"./chevron-down-D78fMNFz.js";import"./useEventCallback-BLTuArat.js";import"./iconLoader-duEeC2zc.js";import"./CompositeRoot-CWACIhri.js";import"./Switch-CgD2jrti.js";import"./TimePicker-CmlTBNGK.js";import"./CollapsiblePanel-CygfXvb2.js";import"./error-Due8my_O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CmC654Yj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
