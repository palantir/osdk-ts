import{j as t,g as n}from"./iframe-BZfq9wpL.js";import{A as r}from"./action-form-jzCASR4u.js";import"./preload-helper-AwKDT_jv.js";import"./DropdownField-B-E6juK1.js";import"./debounce-CRuMKiUh.js";import"./useOsdkClient-De89dM9U.js";import"./index-D9gasGy7.js";import"./Input-CYqif1zS.js";import"./useBaseUiId-CAA3ipMR.js";import"./useControlled-mhuNXue2.js";import"./index-DsxnygA5.js";import"./index-Bh2MExip.js";import"./PopoverPopup-CQlRUOAW.js";import"./InternalBackdrop-C2xaKMNu.js";import"./composite-bZwVCSrk.js";import"./index-C8SZO2gW.js";import"./getDisabledMountTransitionStyles-CXARh1iQ.js";import"./ToolbarRootContext-BAhtauIS.js";import"./tick-BFLAooRA.js";import"./svgIconContainer-DnXANREi.js";import"./small-cross-DtYxU9Mt.js";import"./search-CGtWdQTA.js";import"./cross-D_01sNtm.js";import"./useValueChanged-DXG9ZF3t.js";import"./getPseudoElementBounds-Nz_xFNM1.js";import"./CompositeItem-DdBNHL7r.js";import"./makeExternalStore-BV40BoeT.js";import"./BaseForm-Dlo0ZEmh.js";import"./ActionButton-BfVU8-_V.js";import"./Button-RoczPdix.js";import"./SkeletonBar-CG-4yXUZ.js";import"./Tooltip-DkzPkwJ6.js";import"./info-sign-fXjg7GcK.js";import"./chevron-up-q2NRA_TV.js";import"./chevron-down-BnbfleEH.js";import"./useEventCallback--L1JDqNv.js";import"./iconLoader-DAfkkKIZ.js";import"./Switch-BLfFs5qb.js";import"./CompositeRoot-DPNYxXz_.js";import"./TimePicker--f7BgvZT.js";import"./CollapsiblePanel-X8A3X9xp.js";import"./error-Dm15EuC9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BHMRNcoi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
