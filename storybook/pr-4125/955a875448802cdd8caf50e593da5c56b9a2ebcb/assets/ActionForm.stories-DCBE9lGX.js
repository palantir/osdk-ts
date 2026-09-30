import{j as t,g as n}from"./iframe-CJUVjq4K.js";import{A as r}from"./action-form-n5tbIJaa.js";import"./preload-helper-DSClUnrb.js";import"./DropdownField-2TmnJYIn.js";import"./debounce-Ckmd3QDC.js";import"./useOsdkClient-Bn_kWgls.js";import"./index-GE7urbEt.js";import"./Input-CRzIer8e.js";import"./useBaseUiId-CYXUYH1v.js";import"./useControlled-CmmcI5hz.js";import"./index-Cy6fVwoK.js";import"./index-Bf3fiI44.js";import"./PopoverPopup-BSqbMmuQ.js";import"./InternalBackdrop-C3RvedXC.js";import"./composite-DKgrSWPF.js";import"./index-DebWIRa-.js";import"./getDisabledMountTransitionStyles-CJ0sEwK5.js";import"./ToolbarRootContext-BC2o7QKp.js";import"./tick-Dnvepkck.js";import"./svgIconContainer-CvZRP5Wc.js";import"./small-cross-CVDb-HU5.js";import"./search-DE0VchUk.js";import"./cross-B9ZydxGz.js";import"./useValueChanged-XTKnjh2G.js";import"./getPseudoElementBounds-5mjFlJzS.js";import"./CompositeItem-Dt49eISw.js";import"./makeExternalStore-X814geH6.js";import"./BaseForm-Cna-o8dR.js";import"./ActionButton-DVQysWwt.js";import"./Button-3MSado4D.js";import"./SkeletonBar-B9k800l5.js";import"./Tooltip-DWTM9fE9.js";import"./info-sign-DHKjmu50.js";import"./chevron-up-DIECRHXw.js";import"./chevron-down-CQOxC3pu.js";import"./useEventCallback-BIZx9_-2.js";import"./iconLoader-k-JLmzsp.js";import"./Switch-C5MUu6YN.js";import"./CompositeRoot-B95obCZE.js";import"./TimePicker-BQlAljnG.js";import"./CollapsiblePanel-8s1IX430.js";import"./error-Qoo-TgP1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-_5PcUp3d.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
