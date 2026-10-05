import{j as t,g as n}from"./iframe-DYAom9bR.js";import{A as r}from"./action-form-DedfzdWH.js";import"./preload-helper-wH_b8k-5.js";import"./DropdownField-C1ueVugc.js";import"./debounce-BiwqmQhi.js";import"./useOsdkClient-7x4bV1DV.js";import"./index-BDzI0DMF.js";import"./Input-OPGRVn8-.js";import"./useBaseUiId-CEx3sHln.js";import"./useControlled-BCisCwEt.js";import"./index-6FSLs8PI.js";import"./index-CrUWvWSh.js";import"./PopoverPopup-DKy48gOt.js";import"./InternalBackdrop-oAf4IP9a.js";import"./composite-BeIl570u.js";import"./index-CZVh1_T-.js";import"./getDisabledMountTransitionStyles-BrF1CFns.js";import"./ToolbarRootContext-a__5SMe8.js";import"./tick-Be40iFM6.js";import"./svgIconContainer-DlXjEWqk.js";import"./small-cross-04PkP_DP.js";import"./search-V7G9cPkI.js";import"./cross-C34zCmWz.js";import"./useValueChanged-xixZlyWk.js";import"./getPseudoElementBounds-DoxjXqlD.js";import"./CompositeItem-fVngu3j_.js";import"./makeExternalStore-CS6veLxB.js";import"./BaseForm-Df51qmqw.js";import"./ActionButton-Bf-Y4ACZ.js";import"./Button-B95fuG8U.js";import"./SkeletonBar-wGn5kuO-.js";import"./Tooltip-CXruGX6E.js";import"./info-sign-CayB6goA.js";import"./chevron-up-CqLVJKrP.js";import"./chevron-down-QO6dVwDP.js";import"./useEventCallback-BU8ZD1u4.js";import"./iconLoader-D7bSDDOO.js";import"./Switch-mGPx3oap.js";import"./CompositeRoot-wvlIDSzT.js";import"./TimePicker-B2AJkkDe.js";import"./CollapsiblePanel-D42XvXp9.js";import"./error-CX6Detdp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPYPoSmq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
