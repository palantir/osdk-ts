import{j as t,g as n}from"./iframe-DXJ7n1Mt.js";import{A as r}from"./action-form-TxjMMTlG.js";import"./preload-helper-J-T-Ktwt.js";import"./DropdownField-oynydTCh.js";import"./debounce-BShPyhNf.js";import"./useOsdkClient-CbGeUOIk.js";import"./index-BI3hFpTv.js";import"./Input-Cdu0Ne1b.js";import"./useBaseUiId-CYKekcVM.js";import"./useControlled-DcXpzJX2.js";import"./index-q7aE4fUG.js";import"./index-_EiW5ygO.js";import"./PopoverPopup-PPlNSATF.js";import"./InternalBackdrop-DDjs_3_h.js";import"./composite-Br3qqN8V.js";import"./index-BfPkbabJ.js";import"./getDisabledMountTransitionStyles-DkNiKvvo.js";import"./ToolbarRootContext-CBBxIG3X.js";import"./tick-6IruXiCw.js";import"./svgIconContainer-Cy-yvyP2.js";import"./small-cross-Bj0C9Gd0.js";import"./search-CS5luSCI.js";import"./cross-DmSTTtGj.js";import"./useValueChanged-CziH8SsH.js";import"./getPseudoElementBounds-DRUex6O1.js";import"./CompositeItem-Btxqtw0m.js";import"./makeExternalStore-BQUk64un.js";import"./BaseForm-B3-DuE6D.js";import"./ActionButton--bYsYf66.js";import"./Button-B1cldSa1.js";import"./SkeletonBar-C2wmfKY_.js";import"./Tooltip-DjRrr2Ut.js";import"./info-sign-BX-Hrsss.js";import"./chevron-up-BbxW0_MZ.js";import"./chevron-down-zhZwP9mu.js";import"./useEventCallback-DE2r_0Dc.js";import"./iconLoader-rpw_ZB9j.js";import"./CompositeRoot--ANGT57v.js";import"./Switch-CjMsdiPX.js";import"./TimePicker-D1DvHaCV.js";import"./CollapsiblePanel-lE4KEPz7.js";import"./error-9QZoIHyb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-AS-zNNJp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
