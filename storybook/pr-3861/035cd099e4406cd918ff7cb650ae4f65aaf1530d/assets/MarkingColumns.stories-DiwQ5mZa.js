import{f as p,j as e}from"./iframe-w1UAnkHZ.js";import{O as i}from"./object-table-c1DiMKWv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-G_k10dw4.js";import"./Table-BBGIvijy.js";import"./index-DAjwvQw3.js";import"./Dialog-CevHLfzG.js";import"./cross-DKbNK5yX.js";import"./svgIconContainer-D_dZC5hw.js";import"./useBaseUiId-B91xIf3E.js";import"./InternalBackdrop-DoA4GFbR.js";import"./composite-BpZVqO51.js";import"./index-Dbx2XJAZ.js";import"./index-Btv6-V1K.js";import"./index-DMQPDlV7.js";import"./useEventCallback-CzmDrtIN.js";import"./SkeletonBar-DLj25SiX.js";import"./LoadingCell-BDt7Vxxl.js";import"./ColumnConfigDialog-jklgvSGq.js";import"./DraggableList-Drzx4Sk1.js";import"./search-DeM19rtD.js";import"./Input-tf1Imv2g.js";import"./useControlled-CyfOlT88.js";import"./Button-Bh0hjCLH.js";import"./small-cross-DRvh664v.js";import"./ActionButton-YEM69ZkU.js";import"./Checkbox-BYNjqoVY.js";import"./useValueChanged-nF-imWmC.js";import"./CollapsiblePanel-D1ce4adR.js";import"./MultiColumnSortDialog-BZm0J8oX.js";import"./MenuTrigger-Clp0CXQY.js";import"./CompositeItem-BFhWCO7j.js";import"./ToolbarRootContext-c5WYrsd5.js";import"./getDisabledMountTransitionStyles-Dee7_KOo.js";import"./getPseudoElementBounds-BiUigiPq.js";import"./chevron-down-B9i1zJjC.js";import"./index-CyLlbcvz.js";import"./error-CkfO44o7.js";import"./BaseCbacBanner-BkLY3iq6.js";import"./makeExternalStore-BvX6IRpK.js";import"./Tooltip-BNCsBTMc.js";import"./PopoverPopup-GxAjlUu6.js";import"./debounce-DOKHWH7Z.js";import"./useOsdkClient-am2GQgj5.js";import"./tick-CxunbKa6.js";import"./DropdownField-CYSEfVTF.js";import"./isEqual-BDJAkq-c.js";import"./withOsdkMetrics-DrpjUk54.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
