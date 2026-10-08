import{j as t,g as n}from"./iframe-B5lqcjqD.js";import{A as r}from"./action-form-jbrmpZyq.js";import"./preload-helper-CRQgFnVN.js";import"./DropdownField-dMvSytG-.js";import"./debounce-BxC1HvQJ.js";import"./useOsdkClient-mF5eaEzP.js";import"./index-CRsh17Vx.js";import"./Input-CZpiyJ1w.js";import"./useBaseUiId-oknajK1z.js";import"./useControlled-Dh0gZz2O.js";import"./index-yNr1-X6F.js";import"./index-C8V2J7Cn.js";import"./PopoverPopup-cEQUdM63.js";import"./InternalBackdrop-BvHcPsAz.js";import"./composite-Cre9O_Y6.js";import"./index-ClLOYYyH.js";import"./getDisabledMountTransitionStyles-BOwpTiKH.js";import"./ToolbarRootContext-LzdOjhLO.js";import"./tick-Cz1YHSYQ.js";import"./svgIconContainer-D6KCVgJj.js";import"./small-cross-CYPA47ez.js";import"./search-Be9RJwWO.js";import"./cross-DHsl6guL.js";import"./useValueChanged-ah5CBoLN.js";import"./getPseudoElementBounds-TZ-hmbJ3.js";import"./CompositeItem-DEsHBn0r.js";import"./makeExternalStore-D04mQ5d-.js";import"./BaseForm-WjAG6CRH.js";import"./ActionButton-QVbQttp6.js";import"./Button-BS6My4W_.js";import"./SkeletonBar-DQfYLsyN.js";import"./Tooltip-DSNJDxmy.js";import"./info-sign-LyWuVL_R.js";import"./chevron-up-C2Wpo1Ad.js";import"./chevron-down-BAMUeMPH.js";import"./useEventCallback-C8huiUaV.js";import"./iconLoader-D5LtNObH.js";import"./Switch-dt64jL7O.js";import"./CompositeRoot-Tv6CN_cV.js";import"./TimePicker-I86bzPdQ.js";import"./CollapsiblePanel-rMdaxvYS.js";import"./error-hbt_Js5f.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-J94G_2em.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
