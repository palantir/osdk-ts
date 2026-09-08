import{j as t,g as n}from"./iframe-Ba48eLUQ.js";import{A as r}from"./action-form-DGvDaL7o.js";import"./preload-helper-BcQJohn9.js";import"./DropdownField-Bwr07i8-.js";import"./debounce-C6KffEiQ.js";import"./useOsdkClient-Bo-oAXnj.js";import"./index-Biav_Ly4.js";import"./Input-J_HicyGE.js";import"./useBaseUiId-BqKeDKog.js";import"./useControlled-Ci9ghEUN.js";import"./index-mue2Ao73.js";import"./index-D49E4xW3.js";import"./PopoverPopup-BneJBWwl.js";import"./InternalBackdrop-mjZPCf-I.js";import"./composite--55ShNCx.js";import"./index-Btzr8NAV.js";import"./getDisabledMountTransitionStyles-A33dEllz.js";import"./ToolbarRootContext-yUsbv0N5.js";import"./tick-fCO77waV.js";import"./svgIconContainer-Dsy6R3Hn.js";import"./small-cross-8kU3x62z.js";import"./search-6WIx7b7M.js";import"./cross-CZ3u7Zqk.js";import"./useValueChanged-CEkuFjgw.js";import"./getPseudoElementBounds-COwLqwqt.js";import"./CompositeItem-vF0jzrVV.js";import"./makeExternalStore-CTyMzwZg.js";import"./BaseForm-ByvYW0Zu.js";import"./ActionButton-DL_leNOj.js";import"./Button-DS_jYoZ2.js";import"./SkeletonBar-BU-AQLAZ.js";import"./Tooltip-lY5sugsw.js";import"./info-sign-DV0iJ2pH.js";import"./chevron-up-oFC622XZ.js";import"./chevron-down-Dcg5i-52.js";import"./useEventCallback-DAMcGMad.js";import"./iconLoader-DhFK3ThR.js";import"./CompositeRoot-Dz7XVg-w.js";import"./Switch-Cif8iA0L.js";import"./TimePicker-i6EAuDKa.js";import"./CollapsiblePanel-wpg_ooMH.js";import"./error-BM0l7F7K.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cul3xOyv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
