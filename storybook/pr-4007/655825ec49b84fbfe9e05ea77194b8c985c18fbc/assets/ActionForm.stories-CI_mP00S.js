import{j as t,g as n}from"./iframe-B9P_guYe.js";import{A as r}from"./action-form-z9T4KBn3.js";import"./preload-helper-DZKvLzKM.js";import"./DropdownField-2HC-0Khs.js";import"./debounce-C8ZI9wGu.js";import"./useOsdkClient-BUXnWXUj.js";import"./index-BmU_yXsT.js";import"./Input-CexEAM7S.js";import"./useBaseUiId-4Ig60Xd8.js";import"./useControlled-CCs_p_PA.js";import"./index-3EbL4LBn.js";import"./index-CucgTNc9.js";import"./PopoverPopup-Cr6J1DLL.js";import"./InternalBackdrop-DymGob4l.js";import"./composite-0HTyS9cl.js";import"./index-BoCFIwDC.js";import"./getDisabledMountTransitionStyles-Bqo4m5rG.js";import"./ToolbarRootContext-CMDQJiC4.js";import"./tick-B8u-WlBN.js";import"./svgIconContainer-86dgqwTy.js";import"./small-cross-BEzF29wK.js";import"./search-_dMlLuUD.js";import"./cross-B0jMy4Xj.js";import"./useValueChanged-BD6-HJ6i.js";import"./getPseudoElementBounds-BJ2IJ4R6.js";import"./CompositeItem-G1VIkMjr.js";import"./makeExternalStore-B4SarOE2.js";import"./BaseForm-BRCKUQV6.js";import"./ActionButton-39cEgkXv.js";import"./Button-BKlQWyYX.js";import"./SkeletonBar-DQJfJoRc.js";import"./Tooltip-CyCLgWwQ.js";import"./info-sign-Bcrgb9jo.js";import"./chevron-up-BBiulZHL.js";import"./chevron-down-CL_Pf9bS.js";import"./useEventCallback-4v2rm6Uv.js";import"./iconLoader-Cykn9ORM.js";import"./CompositeRoot-DfQ8WP8h.js";import"./Switch-WyY1fwl_.js";import"./TimePicker-BA12itc7.js";import"./CollapsiblePanel-P4ySmzrR.js";import"./error-B_xrvVtR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2y3Ga9u.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
