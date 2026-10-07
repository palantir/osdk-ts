import{j as t,g as n}from"./iframe-B4KZUNWb.js";import{A as r}from"./action-form-ByB4wbSB.js";import"./preload-helper-ui8H5KaA.js";import"./DropdownField-DqTCpZZ-.js";import"./debounce-DtJpUOtB.js";import"./useOsdkClient-DKvjyiDA.js";import"./index-DESZZjJb.js";import"./Input-d873acvu.js";import"./useBaseUiId-DqBZmwDf.js";import"./useControlled-DUnmiOhJ.js";import"./index-CRzCVguq.js";import"./index-BuRp3NOn.js";import"./PopoverPopup-Cqe_G0pW.js";import"./InternalBackdrop-Du74jqkg.js";import"./composite-kqMgXMmz.js";import"./index-U4wKfCVv.js";import"./getDisabledMountTransitionStyles-q8cXRota.js";import"./ToolbarRootContext-DvKJDRkf.js";import"./tick-Y60tUWqi.js";import"./svgIconContainer-CPLrBI81.js";import"./small-cross-3FFS-2BP.js";import"./search-B4kRZAFp.js";import"./cross-D6lNZtEd.js";import"./useValueChanged-w3RyUsx0.js";import"./getPseudoElementBounds-D5Mn0K7G.js";import"./CompositeItem-BeLkJ8RK.js";import"./makeExternalStore-FuGpKWwp.js";import"./BaseForm-D1NX41z6.js";import"./ActionButton-jQd9zIQY.js";import"./Button-B0sQZAH6.js";import"./SkeletonBar-CGSSVG4t.js";import"./Tooltip-Dlw9XQHv.js";import"./info-sign-B8kmKAmx.js";import"./chevron-up-BDysN2WP.js";import"./chevron-down-BqCbkmmJ.js";import"./useEventCallback-B7s_WPhy.js";import"./iconLoader-COWxNwID.js";import"./Switch-ssHlQ8_V.js";import"./CompositeRoot-Auxcedo_.js";import"./TimePicker-DGAdFd6e.js";import"./CollapsiblePanel-B6Kb1g9F.js";import"./error-D-IekXva.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DZhR0TNz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
