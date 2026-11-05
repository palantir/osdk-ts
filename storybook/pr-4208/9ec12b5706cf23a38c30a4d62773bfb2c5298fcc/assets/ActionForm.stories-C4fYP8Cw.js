import{j as t,g as n}from"./iframe-RocwcLA1.js";import{A as r}from"./action-form-DTxvGk2P.js";import"./preload-helper-Bi11_lQh.js";import"./DropdownField-i887lUmw.js";import"./debounce-V1uFoEkK.js";import"./useOsdkClient-6Q8tx1W_.js";import"./index-CPYhK6Tm.js";import"./Input-CcAG7gXy.js";import"./useBaseUiId-CBnRLDYk.js";import"./useControlled-Bbowgw5B.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./PopoverPopup-CewEisyu.js";import"./InternalBackdrop-DmC9pE0x.js";import"./composite-CcO-1qH0.js";import"./index-CqKREmsT.js";import"./getDisabledMountTransitionStyles-Cz_F6_AI.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./tick-ZxNKxEMa.js";import"./svgIconContainer-DLWtp0BU.js";import"./small-cross-Dl_P2df6.js";import"./search-vjT1hCHx.js";import"./cross-BgyJlmiP.js";import"./useValueChanged-BedL59h3.js";import"./getPseudoElementBounds-Dgc6Xv0e.js";import"./CompositeItem-CRCvuWR7.js";import"./makeExternalStore-B-sos_Fc.js";import"./BaseForm-D6z3Tb7X.js";import"./ActionButton-BCQKfrqp.js";import"./Button-BNn-NlyQ.js";import"./SkeletonBar-DsYTpZqP.js";import"./Tooltip-CaSy6w0D.js";import"./info-sign-B3h6-yRi.js";import"./chevron-up-Dy4oGccG.js";import"./chevron-down-C7FnpsrF.js";import"./useEventCallback-CTQI-oGY.js";import"./iconLoader-CtW5mLAJ.js";import"./Switch-eF5UPxAL.js";import"./CompositeRoot-kbTi56P6.js";import"./TimePicker-CCcE-Fie.js";import"./CollapsiblePanel-CmwuXWb4.js";import"./error-DACjt9aW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D9G4bz54.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
