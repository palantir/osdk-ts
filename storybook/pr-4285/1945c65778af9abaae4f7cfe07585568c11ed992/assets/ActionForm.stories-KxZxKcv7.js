import{j as t,g as n}from"./iframe-BVAvsfQX.js";import{A as r}from"./action-form-pVhqzOIN.js";import"./preload-helper-BwI1TZkb.js";import"./DropdownField-C1-i9ZLz.js";import"./debounce-BC3Q5dHj.js";import"./useOsdkClient-DWFkG0k-.js";import"./index-NhX7SFCA.js";import"./Input-BfbcPKto.js";import"./useBaseUiId-DNCMaGc4.js";import"./useControlled-DefMg-iO.js";import"./index-Pg5rWMVo.js";import"./index-CZLwJ3bI.js";import"./PopoverPopup-Dz7DrwBi.js";import"./InternalBackdrop-g-81w1St.js";import"./composite-BKwa0sk2.js";import"./index-BJ2oEUUj.js";import"./getDisabledMountTransitionStyles-CdUsfYUG.js";import"./ToolbarRootContext-mIzgtd8o.js";import"./tick-BntO4w-h.js";import"./svgIconContainer-DA2Ye4kw.js";import"./small-cross-BrjbfiK5.js";import"./search-YL3_raLw.js";import"./cross-Blq0AAlZ.js";import"./useValueChanged-zCOkAJVd.js";import"./getPseudoElementBounds-Ck3Ae6Ob.js";import"./CompositeItem-D1GzGip_.js";import"./makeExternalStore-DKjKjidO.js";import"./BaseForm-DVsesdKf.js";import"./ActionButton-CMgl13ip.js";import"./Button-D9hGt4n3.js";import"./SkeletonBar-DYwulvoN.js";import"./Tooltip-BbaWMbEy.js";import"./info-sign-DT1jrQOM.js";import"./chevron-up-B7GAqbKU.js";import"./chevron-down-D9zeVubV.js";import"./useEventCallback-C4ornPn2.js";import"./iconLoader-Bu9M1UKb.js";import"./Switch-B1IeqNE9.js";import"./CompositeRoot-C0VK8q3G.js";import"./TimePicker-DR3OHvmY.js";import"./CollapsiblePanel-DwqNttW-.js";import"./error-CpL1Ts52.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DEQFwLuz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
