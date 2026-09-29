import{f as p,j as e}from"./iframe-BkR_0Whf.js";import{O as i}from"./object-table-BiV8DsTh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZj2lHf4.js";import"./Table-DWdPcWcs.js";import"./index-ZGE4mIMl.js";import"./Dialog-CHqpvbLH.js";import"./cross-Cj_dISDs.js";import"./svgIconContainer-Cq5Gigac.js";import"./useBaseUiId-D0GFLUCc.js";import"./InternalBackdrop-D0JetBQu.js";import"./composite-DK0lUWCR.js";import"./index-BHvnJTnu.js";import"./index-BYjUCuHE.js";import"./index-CxCc5iXi.js";import"./useEventCallback-Cdxw0ly7.js";import"./SkeletonBar-9syakgvG.js";import"./LoadingCell-CprQtNoH.js";import"./ColumnConfigDialog-C6twjef-.js";import"./DraggableList-FbSRwKFW.js";import"./search-BYwC6oDp.js";import"./Input-iGBf8GKC.js";import"./useControlled-qGG-lubz.js";import"./Button-9bj61-xy.js";import"./small-cross-eQubl5AS.js";import"./ActionButton-Cq36Fl98.js";import"./Checkbox-C2MnQ6N0.js";import"./useValueChanged-Tgi1bGwX.js";import"./CollapsiblePanel-DKzvo46z.js";import"./MultiColumnSortDialog-ApIxEZyx.js";import"./MenuTrigger-CVkzJIND.js";import"./CompositeItem-DJJJBa43.js";import"./ToolbarRootContext-B0bmzvoG.js";import"./getDisabledMountTransitionStyles-BmZHkwg0.js";import"./getPseudoElementBounds-DddSmM7X.js";import"./chevron-down-D-JVojHo.js";import"./index-BWbnaTYz.js";import"./error-CceWhdeD.js";import"./BaseCbacBanner-BvjqhU3p.js";import"./makeExternalStore-32xgHA4-.js";import"./Tooltip-W6-jI_uz.js";import"./PopoverPopup-BFEoSKAS.js";import"./debounce-DonsOBxM.js";import"./useOsdkClient-pLSvuV2v.js";import"./tick-u2RvG_GJ.js";import"./DropdownField-CX_iuiat.js";import"./isEqual-LemhL52S.js";import"./withOsdkMetrics-Ejahsq4F.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
