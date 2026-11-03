import{j as t,g as n}from"./iframe-9A7AV9Cy.js";import{A as r}from"./action-form-CVmXbLOw.js";import"./preload-helper-CK_ZcGGF.js";import"./DropdownField-CNaJiffx.js";import"./debounce-ADxFBf6q.js";import"./useOsdkClient-C7At4pV9.js";import"./index-Bkgk7vsR.js";import"./Input-CCxEn7sH.js";import"./useBaseUiId-q7QIFNkg.js";import"./useControlled-DIFFKw6v.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./PopoverPopup-hsESB4RR.js";import"./InternalBackdrop-CQ3SkFUe.js";import"./composite-CEEJ0vWU.js";import"./index--u-sCo5n.js";import"./getDisabledMountTransitionStyles-_YA1Iepr.js";import"./ToolbarRootContext-DCS282rA.js";import"./tick-DlLbsS5l.js";import"./svgIconContainer-CR0pIEyo.js";import"./small-cross-1ULwRpx5.js";import"./search-BWRhS2Qj.js";import"./cross-B7t6TzDw.js";import"./useValueChanged-kZaWbmaa.js";import"./getPseudoElementBounds-Bq0sNDj9.js";import"./CompositeItem-DoPsMeEK.js";import"./makeExternalStore-UebcDacP.js";import"./BaseForm-wRGIYkji.js";import"./ActionButton-1V5zer9B.js";import"./Button-CKepLiXu.js";import"./SkeletonBar-TosXJUxL.js";import"./Tooltip-Dfs7CnEh.js";import"./info-sign-Bm87F1Uy.js";import"./chevron-up-DkUeqybM.js";import"./chevron-down-Bi1tvw_Y.js";import"./useEventCallback-DNZWa-fZ.js";import"./iconLoader-hc2uEN-l.js";import"./Switch-CiNdvh-0.js";import"./CompositeRoot-BMKjJp3f.js";import"./TimePicker-C2MHkG1S.js";import"./CollapsiblePanel-CKt0R28j.js";import"./error-C8bHM7uj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5obnKQC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
