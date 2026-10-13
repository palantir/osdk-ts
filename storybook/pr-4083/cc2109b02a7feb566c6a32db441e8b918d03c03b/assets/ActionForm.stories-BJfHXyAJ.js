import{j as t,g as n}from"./iframe-CK-e_P5n.js";import{A as r}from"./action-form-DXs6xwQ8.js";import"./preload-helper-CdfmlsWT.js";import"./DropdownField-BncLboR3.js";import"./debounce-CnX0V1iA.js";import"./useOsdkClient-TQnWVOaJ.js";import"./index-D1NbsZsT.js";import"./Input-DGmd96_F.js";import"./useBaseUiId-B6Thtd3O.js";import"./useControlled-flZbgJml.js";import"./index-BmOKXyuk.js";import"./index-BAl9UwQ_.js";import"./PopoverPopup-DXgU2mtn.js";import"./InternalBackdrop--jYqCsuV.js";import"./composite-CF-uZGHD.js";import"./index-BI0nF061.js";import"./getDisabledMountTransitionStyles-GfO_uBTj.js";import"./ToolbarRootContext-BzLZyYhL.js";import"./tick-BVNELgej.js";import"./svgIconContainer-CUe9azR3.js";import"./small-cross-D6eJtQvT.js";import"./search-D8NL3mRl.js";import"./cross-DdB0B2DT.js";import"./useValueChanged-DBUoKfVc.js";import"./getPseudoElementBounds-9YvIcjPC.js";import"./CompositeItem-BRNQwarA.js";import"./makeExternalStore-Bf6pa7D3.js";import"./BaseForm-Buy1jwtG.js";import"./ActionButton-2BJhUFRZ.js";import"./Button-DnxkikPI.js";import"./SkeletonBar-CJ14_0Ym.js";import"./Tooltip-RRrzeJA8.js";import"./info-sign-CLsVqzRY.js";import"./chevron-up-Cfji1tGK.js";import"./chevron-down-D3RJwgIP.js";import"./useEventCallback-DLi0pkHc.js";import"./iconLoader-BFXBHzfo.js";import"./Switch-ChSSFzAe.js";import"./CompositeRoot-Bo0Sy2BX.js";import"./TimePicker-BRcv6OLb.js";import"./CollapsiblePanel-Be9_urdY.js";import"./error-BFAdc9Td.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DFjAQMzo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
