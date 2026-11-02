import{f as p,j as e}from"./iframe-NFk5yTCl.js";import{O as i}from"./object-table-CEKBcnE_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DnA7Db5H.js";import"./Table-DYVuCqgi.js";import"./index-BgVD2xhp.js";import"./Dialog-BK10uP18.js";import"./cross-DRob9Y80.js";import"./svgIconContainer-BhRqV9Gd.js";import"./useBaseUiId-DI_-ZcoF.js";import"./InternalBackdrop-C2Dw-qqf.js";import"./composite-CPOhVi5o.js";import"./index-BMMU7vD9.js";import"./index-DvY3t6Bt.js";import"./index-D-jKR7g2.js";import"./useEventCallback-x3ZKmgNJ.js";import"./SkeletonBar-Csl4r0el.js";import"./LoadingCell-in8L2hj-.js";import"./ColumnConfigDialog-DqeZKdFc.js";import"./DraggableList-DCqQpQFP.js";import"./search-DY6YLRUw.js";import"./Input-BW26RmLS.js";import"./useControlled-fqF1Rj4F.js";import"./Button-BVh6l18o.js";import"./small-cross-C5dljSWN.js";import"./ActionButton-CwKbdIeo.js";import"./Checkbox-DMrIqRzw.js";import"./useValueChanged-BaXAbe4f.js";import"./CollapsiblePanel-g_CPEQOy.js";import"./MultiColumnSortDialog-DtQWVoMv.js";import"./MenuTrigger-B-Uzpqi4.js";import"./CompositeItem-ZF-3iBYW.js";import"./ToolbarRootContext-BwRqIVN-.js";import"./getDisabledMountTransitionStyles-Cflekvz6.js";import"./getPseudoElementBounds-C48v4aEa.js";import"./chevron-down-Bk9vMPo2.js";import"./index-ywB7GnFl.js";import"./error-B1DXlG8k.js";import"./BaseCbacBanner-DwPfoD51.js";import"./makeExternalStore-MEUeb9Nq.js";import"./Tooltip-BVpMXNPC.js";import"./PopoverPopup-5q1wytvg.js";import"./debounce-DP-BMAVq.js";import"./useOsdkClient-gFFrbC9S.js";import"./tick-CZZLmvI5.js";import"./DropdownField-Dyz2YO0r.js";import"./isEqual-BH-W0m4A.js";import"./withOsdkMetrics-D_cxEN1y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
