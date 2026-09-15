import{j as t,g as n}from"./iframe-C-srjCzr.js";import{A as r}from"./action-form-BzZm8gZf.js";import"./preload-helper-CdgKYpfH.js";import"./DropdownField-DXvJF4Ed.js";import"./debounce-CXlyjIaG.js";import"./useOsdkClient-SS9mW4im.js";import"./index-Bzj5y-57.js";import"./Input-T5Kj4Vfz.js";import"./useBaseUiId-BU2Bdgfn.js";import"./useControlled-BtWeYBTy.js";import"./index-DoGeYTl3.js";import"./index-CvZ9Zy9b.js";import"./PopoverPopup-D5VRMR-g.js";import"./InternalBackdrop-xwbeFan6.js";import"./composite--DZGcVxK.js";import"./index-BIS8E4FK.js";import"./getDisabledMountTransitionStyles-Cy56mhfk.js";import"./ToolbarRootContext-8-BoPq-4.js";import"./tick-C_HCxzSH.js";import"./svgIconContainer-5LtXf4dR.js";import"./small-cross-Cdzum_ky.js";import"./search-CESWhMh6.js";import"./cross-CBTpZY1-.js";import"./useValueChanged-BrnwHF-c.js";import"./getPseudoElementBounds-_SRod_Ch.js";import"./CompositeItem-DAR9wsSJ.js";import"./makeExternalStore-I1nvn_9Q.js";import"./BaseForm-COhgFebl.js";import"./ActionButton-Bm441Snm.js";import"./Button-FlArcDop.js";import"./SkeletonBar-aX4U7JCD.js";import"./Tooltip-BNbpl33t.js";import"./info-sign-BociQczZ.js";import"./chevron-up-D2Sv500k.js";import"./chevron-down-BhL4Yc8G.js";import"./useEventCallback-rUtIJm9R.js";import"./iconLoader-Df54excc.js";import"./CompositeRoot-D6_jNRLS.js";import"./Switch-CH7fjWKg.js";import"./TimePicker-8VbvPQ_t.js";import"./CollapsiblePanel-DjeDSdHb.js";import"./error-D5X5TRqT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ReG1NqWw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
