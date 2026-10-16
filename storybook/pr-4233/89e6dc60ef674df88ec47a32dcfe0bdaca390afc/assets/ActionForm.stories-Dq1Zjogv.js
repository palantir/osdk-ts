import{j as t,g as n}from"./iframe-BgteeNK7.js";import{A as r}from"./action-form-BVhl9HXy.js";import"./preload-helper-D1QQRU4G.js";import"./DropdownField-N1dBIw-4.js";import"./debounce-DB2j4UjQ.js";import"./useOsdkClient-CV4JlL1O.js";import"./index-Dh7VeDie.js";import"./Input-BLKefb3k.js";import"./useBaseUiId-Du-nzkw5.js";import"./useControlled-DtLnayup.js";import"./index-D7D5AllY.js";import"./index-jEkUh6V5.js";import"./PopoverPopup-BdINBgGh.js";import"./InternalBackdrop-dEKlbFqb.js";import"./composite-Bw2x2Ls7.js";import"./index-BwP8hvLS.js";import"./getDisabledMountTransitionStyles-BGJEt7yH.js";import"./ToolbarRootContext-D9ylwIx5.js";import"./tick-Btid1QgJ.js";import"./svgIconContainer-DMbES6r9.js";import"./small-cross-CkykJveX.js";import"./search-DnqpkQaz.js";import"./cross-DvJO6axF.js";import"./useValueChanged-Dxi0cZCL.js";import"./getPseudoElementBounds-BUgENUZ_.js";import"./CompositeItem-DbN5tfcI.js";import"./makeExternalStore-D3iXBhr4.js";import"./BaseForm-t6Oxz2Hy.js";import"./ActionButton-D8GwUeFP.js";import"./Button-CTMGDM5U.js";import"./SkeletonBar-BQ-GEFTk.js";import"./Tooltip-BI_M7upB.js";import"./info-sign-C3fIACHt.js";import"./chevron-up-CG4XOjIZ.js";import"./chevron-down-BazaCq4r.js";import"./useEventCallback-D18102OR.js";import"./iconLoader-CZyMzOCD.js";import"./Switch-D6IPo_zU.js";import"./CompositeRoot-plqng5Am.js";import"./TimePicker-Bui9nPNt.js";import"./CollapsiblePanel-BVTc-BUt.js";import"./error-CHdhKpK1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BGKMncSr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
