import{j as t,g as n}from"./iframe-Cbj36Vfl.js";import{A as r}from"./action-form-DeLez3QE.js";import"./preload-helper-D9vtqHHo.js";import"./DropdownField-Bd5p68Fh.js";import"./debounce-C-I-lp5G.js";import"./useOsdkClient-Z_Xvqm2q.js";import"./index-CsY1LewD.js";import"./Input-bczR2KJT.js";import"./useBaseUiId-Dm0BFRC6.js";import"./useControlled-BLkU7nYF.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./PopoverPopup-DVJleO51.js";import"./InternalBackdrop-BqigWIDb.js";import"./composite-BNLz_aLE.js";import"./index-D7hW5oga.js";import"./getDisabledMountTransitionStyles-DVNBPl0-.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./tick-DrdzLXJS.js";import"./svgIconContainer-hIUzSHkO.js";import"./small-cross-CPlaBkT_.js";import"./search-B0cFd55B.js";import"./cross-BMM6M_v0.js";import"./useValueChanged-Be0rmsr7.js";import"./getPseudoElementBounds-BzB85nEj.js";import"./CompositeItem-DyJlzvO6.js";import"./makeExternalStore-BQvhAloH.js";import"./BaseForm-LHrbQGE1.js";import"./ActionButton-C-4-1sk9.js";import"./Button-BvKlSQww.js";import"./SkeletonBar-SALMo7gf.js";import"./Tooltip-DFxnzQIr.js";import"./info-sign-DQezIDHf.js";import"./chevron-up-B3Zo3Xg2.js";import"./chevron-down-b6fjz5-P.js";import"./useEventCallback-Dlret5nm.js";import"./iconLoader-_RsGrJkn.js";import"./Switch-DU3LA1Nv.js";import"./CompositeRoot-CLbuLNkg.js";import"./TimePicker-CyBZpYGI.js";import"./CollapsiblePanel-DTg3GoH2.js";import"./error-B5SQU-7B.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CvORwH-d.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
