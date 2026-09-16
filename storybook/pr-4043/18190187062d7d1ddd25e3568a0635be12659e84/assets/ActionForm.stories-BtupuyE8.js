import{j as t,g as n}from"./iframe-B7clUVHt.js";import{A as r}from"./action-form-CrNUbRem.js";import"./preload-helper-CUPfdM8_.js";import"./DropdownField-B6cnd6bN.js";import"./debounce-B63E3hZn.js";import"./useOsdkClient-DBK_pZWR.js";import"./index-BJuITS90.js";import"./Input-CT_I8RKH.js";import"./useBaseUiId-DVrDHycI.js";import"./useControlled-ccc4EKlt.js";import"./index-aq1Wm6Yn.js";import"./index-DD_iU2uX.js";import"./PopoverPopup-f3NfI19W.js";import"./InternalBackdrop-BrQ7JKiG.js";import"./composite-DyK7yBlQ.js";import"./index-BsCvtptR.js";import"./getDisabledMountTransitionStyles-2ly5ruH9.js";import"./ToolbarRootContext-CjbBLH2h.js";import"./tick-CUlYlvRp.js";import"./svgIconContainer-BJLnErPQ.js";import"./small-cross-BzBsHkLR.js";import"./search-D5J8qnAm.js";import"./cross-CmeT_My2.js";import"./useValueChanged-AsMuu_TV.js";import"./getPseudoElementBounds-DC3vRuQo.js";import"./CompositeItem-DVh6-70_.js";import"./makeExternalStore-B3i8xKry.js";import"./BaseForm-D4YxvP8n.js";import"./ActionButton-CExZP-4d.js";import"./Button-BsEC03FF.js";import"./SkeletonBar-BLBNPoWa.js";import"./Tooltip-CVdygfxv.js";import"./info-sign-DNqbDoHG.js";import"./chevron-up-CHEo39G-.js";import"./chevron-down-M1DCZVuw.js";import"./useEventCallback-F6nzKXN_.js";import"./iconLoader-BiYHR1-L.js";import"./Switch-Baq2dkKm.js";import"./CompositeRoot-o-Rz0IEc.js";import"./TimePicker-C0Q8e7ar.js";import"./CollapsiblePanel-DR3Y8xjv.js";import"./error-gkpqEfzK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Tq1KK3ST.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
