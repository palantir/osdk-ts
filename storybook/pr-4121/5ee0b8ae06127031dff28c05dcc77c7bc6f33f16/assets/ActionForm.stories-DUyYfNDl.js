import{j as t,g as n}from"./iframe-BLOGWzes.js";import{A as r}from"./action-form-DWZrAuSI.js";import"./preload-helper-DKYPYdJ1.js";import"./DropdownField-DOctIr4W.js";import"./debounce-R97o068-.js";import"./useOsdkClient-D9f4bCNA.js";import"./index-Dw_R0R3u.js";import"./Input-BWx5Xf6Z.js";import"./useBaseUiId-0dkTavyr.js";import"./useControlled-sfZuFzcU.js";import"./index-C_xx75lm.js";import"./index-CURDKWBa.js";import"./PopoverPopup-BqAXUtPT.js";import"./InternalBackdrop-C7ZwjG_B.js";import"./composite-BaecbUIv.js";import"./index-_ogkwLFC.js";import"./getDisabledMountTransitionStyles-DaPF4otG.js";import"./ToolbarRootContext-Y2iZ9Ujq.js";import"./tick-CtDA2FHx.js";import"./svgIconContainer-DOUGpiyN.js";import"./small-cross-BfNan5YN.js";import"./search-DLp12F_x.js";import"./cross-81MWidH4.js";import"./useValueChanged-BAxxlU-6.js";import"./getPseudoElementBounds-DOWThf3d.js";import"./CompositeItem-B6ZRSaDZ.js";import"./makeExternalStore-DETb4-Ws.js";import"./BaseForm-BxD9nMXm.js";import"./ActionButton-d0qDXU7F.js";import"./Button-BCMvPzPq.js";import"./SkeletonBar-CQnlCQ4P.js";import"./Tooltip-DPnWTDYN.js";import"./info-sign-B3bR_dFm.js";import"./chevron-up-DgAUgNiJ.js";import"./chevron-down-Eag7e6pI.js";import"./useEventCallback-DOR7ddeL.js";import"./iconLoader-CGGuIg61.js";import"./Switch-CPql_Ofn.js";import"./CompositeRoot-DOVCCxU2.js";import"./TimePicker-DnHevVA0.js";import"./CollapsiblePanel-C8EuAByc.js";import"./error-CiKKwT6x.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DrML1D1X.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
