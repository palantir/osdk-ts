import{f as p,j as e}from"./iframe-B8u7gh3f.js";import{O as i}from"./object-table-DGcNnZhf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WafZdqsp.js";import"./Table-CBhSVv8e.js";import"./index-B2c1cb03.js";import"./Dialog-D3nigKJq.js";import"./cross-hgHZeAKk.js";import"./svgIconContainer-B6iifYBg.js";import"./useBaseUiId-ClLZ4ptx.js";import"./InternalBackdrop-Dn9hoYWT.js";import"./composite-CR8H6FxL.js";import"./index-BDYDLka6.js";import"./index-Dl-kCjjB.js";import"./index-BYeQN3x4.js";import"./useEventCallback-D4-6hAVq.js";import"./SkeletonBar-Ckm-CmKx.js";import"./LoadingCell-DOvZpN40.js";import"./ColumnConfigDialog-C3LyV05L.js";import"./DraggableList-BcOZ4Fpe.js";import"./search-D-7hDAKT.js";import"./Input-BqdHP0PO.js";import"./useControlled-DbLBYTQb.js";import"./isEqual-D4NgSsMA.js";import"./isObject-D1Pv7rfV.js";import"./Button-CPqVQKFs.js";import"./ActionButton-DoVfnVEZ.js";import"./Checkbox-BZrp5qyO.js";import"./useValueChanged-Dmeu0BJQ.js";import"./CollapsiblePanel-BEu2ASIA.js";import"./MultiColumnSortDialog-CgOgujub.js";import"./MenuTrigger-CKrfBupR.js";import"./CompositeItem-_7eOW45r.js";import"./ToolbarRootContext-VxV573kB.js";import"./getDisabledMountTransitionStyles-C1Ba-Z3q.js";import"./getPseudoElementBounds-CQI5lsdM.js";import"./chevron-down-5MIE9vEU.js";import"./index-sJkcPWg3.js";import"./error-4m3zFcfA.js";import"./BaseCbacBanner-D930LvZB.js";import"./makeExternalStore-DFAo_Yao.js";import"./Tooltip-DTlgFI5j.js";import"./PopoverPopup-Btf0G27n.js";import"./toNumber-6eHQoYtr.js";import"./useOsdkClient-BCAceeny.js";import"./tick-B1DUeJZO.js";import"./DropdownField-DMjUwYzX.js";import"./withOsdkMetrics-D3TlapU0.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
