import{f as p,j as e}from"./iframe-BYI6-aLw.js";import{O as i}from"./object-table-zEM50Veu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtPj2gQg.js";import"./Table-CCnRPler.js";import"./index-DQ7c9deP.js";import"./Dialog-KvswP73d.js";import"./cross-DFx6KUE4.js";import"./svgIconContainer-BBpZUtxO.js";import"./useBaseUiId-1B5Tp9l6.js";import"./InternalBackdrop-B9c7BTIV.js";import"./composite-CifwDKrs.js";import"./index-jdHVExti.js";import"./index-DK8-M2ZQ.js";import"./index-Cukieq_M.js";import"./useEventCallback-Ck3YSB-4.js";import"./SkeletonBar-Dk1hIZHl.js";import"./LoadingCell-IfAFJP-m.js";import"./ColumnConfigDialog-DurdO-8J.js";import"./DraggableList-C0Fm2bWv.js";import"./search-CaXxmA8i.js";import"./Input-BkuGir8f.js";import"./useControlled-BZTNruXv.js";import"./isEqual-DD0yAfPL.js";import"./isObject-DVx9CejI.js";import"./Button-CRUJ4RF7.js";import"./ActionButton-7I4whYFr.js";import"./Checkbox-DjhQrfry.js";import"./useValueChanged-D9OSL-KB.js";import"./CollapsiblePanel-C4Y208nn.js";import"./MultiColumnSortDialog-B-Nm9AsS.js";import"./MenuTrigger-DZHsQamD.js";import"./CompositeItem-DfD4viOC.js";import"./ToolbarRootContext-D3speQHo.js";import"./getDisabledMountTransitionStyles-CWCq6Lcx.js";import"./getPseudoElementBounds-DC5DSIf6.js";import"./chevron-down-BDf7yWi1.js";import"./index-ClnbUonH.js";import"./error-DLiUuB2F.js";import"./BaseCbacBanner-CYen8Dov.js";import"./makeExternalStore-KpAAX1cn.js";import"./Tooltip-CvKrhMsi.js";import"./PopoverPopup-CwpMKFB5.js";import"./toNumber-dovyYQeg.js";import"./useOsdkClient-D-RzPK7q.js";import"./tick-C-01gZNd.js";import"./DropdownField-BnQEUnfj.js";import"./withOsdkMetrics-WrHGmE29.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
