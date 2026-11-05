import{j as t,g as n}from"./iframe-NpRIbPdx.js";import{A as r}from"./action-form-CtuvZkwj.js";import"./preload-helper-OSq5jQkX.js";import"./DropdownField-3vS_OVvb.js";import"./debounce-BHEHv-OY.js";import"./useOsdkClient-yMbsmr2e.js";import"./index-CY16uySw.js";import"./Input-geD0QmM7.js";import"./useBaseUiId-B58WCAya.js";import"./useControlled-C_x2TKVp.js";import"./index-BeW67UVI.js";import"./index-Bhk4lf9n.js";import"./PopoverPopup-pjnshs8Z.js";import"./InternalBackdrop-CyQ0qo1z.js";import"./composite-BuQ8bNLj.js";import"./index-Btpa_jjb.js";import"./getDisabledMountTransitionStyles-B_lO8q9e.js";import"./ToolbarRootContext-zUNFbjuY.js";import"./tick-DOsn7mMx.js";import"./svgIconContainer-D56q5fZV.js";import"./small-cross-DnJ4w8jW.js";import"./search-BQKjluR2.js";import"./cross-D_KA-OEe.js";import"./useValueChanged-Bju82j-V.js";import"./getPseudoElementBounds-Ix_nmD-p.js";import"./CompositeItem-9iq6yCgJ.js";import"./makeExternalStore-he_3GqFk.js";import"./BaseForm-Bx7sJAX7.js";import"./ActionButton-Dz0ucYQ4.js";import"./Button-B7hLTnAe.js";import"./SkeletonBar-fAm3YbtB.js";import"./Tooltip-DVLHEN3u.js";import"./info-sign-CTg4IWXt.js";import"./chevron-up-1QfVIQc_.js";import"./chevron-down-BnVBaJX5.js";import"./useEventCallback-BQn_UK38.js";import"./iconLoader-Dc5sb6vR.js";import"./Switch-DY7lGR6F.js";import"./CompositeRoot-Dyky4g3-.js";import"./TimePicker-eOwuokDj.js";import"./CollapsiblePanel-Uw9lqt-L.js";import"./error-B8p2hdA4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-RYSsSWu2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
