import{j as t,g as n}from"./iframe-BYejxj2b.js";import{A as r}from"./action-form-BT3cYoPL.js";import"./preload-helper-C0rDQy5D.js";import"./DropdownField-B9F8HYeP.js";import"./debounce-B4fjUaL7.js";import"./useOsdkClient-v91fIKBr.js";import"./index-iipsf35Q.js";import"./Input-iw0NWTaR.js";import"./useBaseUiId-C9Oeigog.js";import"./useControlled-C0V-KMju.js";import"./index-CXPcvEZE.js";import"./index-CPmCN5n5.js";import"./PopoverPopup-DPn5xYgL.js";import"./InternalBackdrop-CpB9FOQ-.js";import"./composite-E5tzecJv.js";import"./index-mOzIY_Cu.js";import"./getDisabledMountTransitionStyles-CEv9PYlI.js";import"./ToolbarRootContext-BhZB42YH.js";import"./tick-xiLoJvOV.js";import"./svgIconContainer-BpdSUco1.js";import"./small-cross-Cu684_cF.js";import"./search-DoJ4TrKJ.js";import"./cross-C58IIDJt.js";import"./useValueChanged-CzPX0usT.js";import"./getPseudoElementBounds-Ch3KvVo0.js";import"./CompositeItem-Ze_igsRp.js";import"./makeExternalStore-BiJsDtWq.js";import"./BaseForm-DZYUTY17.js";import"./ActionButton-oGSx-SKD.js";import"./Button-CuqI5477.js";import"./SkeletonBar-Br2yrjJj.js";import"./Tooltip-Cz_WgPBn.js";import"./info-sign-DoZnnY_u.js";import"./chevron-up-DV43WvDG.js";import"./chevron-down-CRHNnKNO.js";import"./useEventCallback-Bqw3GNAH.js";import"./iconLoader-RLoqR1lv.js";import"./Switch-8Svdje84.js";import"./CompositeRoot-C8PLhlUL.js";import"./TimePicker-VpxIIYNr.js";import"./CollapsiblePanel-CMFkfvwx.js";import"./error-D3cs_59E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BsRlr_Wc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
