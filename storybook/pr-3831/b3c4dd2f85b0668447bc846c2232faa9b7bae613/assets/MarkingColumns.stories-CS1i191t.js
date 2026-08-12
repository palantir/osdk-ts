import{f as p,j as e}from"./iframe-CZN1N75z.js";import{O as i}from"./object-table-CtXjGvBC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw86qjs4.js";import"./Table-BZoID_Mp.js";import"./index-BRVA8pfy.js";import"./Dialog-Avwiaasg.js";import"./cross-BUPEAbju.js";import"./svgIconContainer-OYzxRDDu.js";import"./useBaseUiId-BhqTpn-A.js";import"./InternalBackdrop-Da2ga8Po.js";import"./composite-BOWBPj0r.js";import"./index-BL8DZWnZ.js";import"./index-rUijMERz.js";import"./index-CBRjBxvt.js";import"./useEventCallback-TYMlq9dq.js";import"./SkeletonBar-Dm2D-U7J.js";import"./LoadingCell-BUJ_xe-O.js";import"./ColumnConfigDialog-mDy05K6w.js";import"./DraggableList-zYyClb1p.js";import"./search-DpmtddYG.js";import"./Input-4HpsLPAr.js";import"./useControlled-Co7-DLRd.js";import"./isEqual-Bjk4nWrt.js";import"./isObject-CxdzCrBm.js";import"./Button-C8c4R169.js";import"./ActionButton-B7JmwFN6.js";import"./Checkbox-3wyYSXhv.js";import"./useValueChanged-BtVPxKIb.js";import"./CollapsiblePanel-BSkEcukT.js";import"./MultiColumnSortDialog-QG0Zo_sR.js";import"./MenuTrigger-43Mc5yck.js";import"./CompositeItem-DLFuEVrs.js";import"./ToolbarRootContext-IqzlHljh.js";import"./getDisabledMountTransitionStyles-BUM7Jrx3.js";import"./getPseudoElementBounds-76rXSUBd.js";import"./chevron-down-BBx72XFw.js";import"./index-C6DRiLu1.js";import"./error-Ohh9at4C.js";import"./BaseCbacBanner-f_5-7-41.js";import"./makeExternalStore-jXoxqI6f.js";import"./Tooltip-CN_hxpEt.js";import"./PopoverPopup-DYRdvUS7.js";import"./toNumber-CfU6rNfo.js";import"./useOsdkClient-Bw1dbXWl.js";import"./tick-D5Vwfd2_.js";import"./DropdownField-D2Wgd-Su.js";import"./withOsdkMetrics-C2NSp3nJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
