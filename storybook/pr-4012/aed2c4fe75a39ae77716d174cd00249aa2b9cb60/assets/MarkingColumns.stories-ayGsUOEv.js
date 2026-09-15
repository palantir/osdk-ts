import{f as p,j as e}from"./iframe-luQilSOF.js";import{O as i}from"./object-table-D_BqH1Hg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKBqwCKh.js";import"./Table-BagWR1Ww.js";import"./index-Bz5LVora.js";import"./Dialog-Lv9F4OgU.js";import"./cross-dcAeg2cP.js";import"./svgIconContainer-Dg-z8JPf.js";import"./useBaseUiId-BIcPA1wg.js";import"./InternalBackdrop-CbMdhPVq.js";import"./composite-BqKU6h-l.js";import"./index-C2BPTamy.js";import"./index-CXosHwau.js";import"./index-BkNSozDa.js";import"./useEventCallback-Cac5EMzj.js";import"./SkeletonBar-DKdanr-N.js";import"./LoadingCell-DLmJphPR.js";import"./ColumnConfigDialog-CY95iwzL.js";import"./DraggableList-CF9NsHRJ.js";import"./search-B5llV8dS.js";import"./Input-BK5kzofZ.js";import"./useControlled-BcMtuVsI.js";import"./Button-CNpzMVry.js";import"./small-cross-DZFGtHrI.js";import"./ActionButton-BsMQ9zjV.js";import"./Checkbox-BZ25OhG5.js";import"./useValueChanged-sApPA-B_.js";import"./CollapsiblePanel-Dre8cIpY.js";import"./MultiColumnSortDialog-b-9uFQN3.js";import"./MenuTrigger-BjxfWAfx.js";import"./CompositeItem-5KLXQsnX.js";import"./ToolbarRootContext-iSsHGgjo.js";import"./getDisabledMountTransitionStyles-DuXtt4zv.js";import"./getPseudoElementBounds-DdBLUXDN.js";import"./chevron-down-DV7XSuWi.js";import"./index-BnFccNhI.js";import"./error-D7uvB3Tp.js";import"./BaseCbacBanner-BSCFDJYo.js";import"./makeExternalStore-D9PcNge9.js";import"./Tooltip-CDExLyRp.js";import"./PopoverPopup-B9ZyQpmI.js";import"./debounce-DhX6Egr1.js";import"./useOsdkClient-BsFMFNEo.js";import"./tick-D7ya3IWu.js";import"./DropdownField-CC2Dpk0A.js";import"./isEqual-DQb8zkzB.js";import"./withOsdkMetrics-CIz4zTAP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
