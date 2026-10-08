import{j as t,g as n}from"./iframe-BZFzj4I7.js";import{A as r}from"./action-form-CAofO5Od.js";import"./preload-helper-D4VtoqvU.js";import"./DropdownField-DUmhDtNd.js";import"./debounce-BbAGx_Mx.js";import"./useOsdkClient-C4NEBTtT.js";import"./index-C9BOu-GC.js";import"./Input-CNdZYHeG.js";import"./useBaseUiId-CynpPIak.js";import"./useControlled-ed2KW_CI.js";import"./index-CRbxC94q.js";import"./index-ZJ1zgTXq.js";import"./PopoverPopup-BZRml7yC.js";import"./InternalBackdrop-CG54fetj.js";import"./composite-DOYm4spg.js";import"./index-Bk8XfLzk.js";import"./getDisabledMountTransitionStyles-Ch4NQ1Hm.js";import"./ToolbarRootContext-BpRFBWvV.js";import"./tick-CiH7fOUu.js";import"./svgIconContainer-BgU1NuNe.js";import"./small-cross-BAxJVgQG.js";import"./search-CtmR8qHz.js";import"./cross-8Ktod3hp.js";import"./useValueChanged-CuuuHRpO.js";import"./getPseudoElementBounds-DpgopoMm.js";import"./CompositeItem-V8rmNgwr.js";import"./makeExternalStore-CONCRK9u.js";import"./BaseForm-BGtZ2m7d.js";import"./ActionButton-Dex_JIm4.js";import"./Button-BADC2rqt.js";import"./SkeletonBar-bkE9C5Ws.js";import"./Tooltip-kv_sqmri.js";import"./info-sign-D-GBfgKj.js";import"./chevron-up-Cx2idefM.js";import"./chevron-down-B4Kaehlj.js";import"./useEventCallback-BCUiY9N8.js";import"./iconLoader-DjW423ec.js";import"./Switch-Di2PUZ5g.js";import"./CompositeRoot-BEl3DueR.js";import"./TimePicker-CxigkMry.js";import"./CollapsiblePanel-CGkaJLnK.js";import"./error-DXjyDcZg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LbVHGHvS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
