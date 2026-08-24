import{f as p,j as e}from"./iframe-t8JLfFrV.js";import{O as i}from"./object-table-BuoQ4XMI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpG0vhNh.js";import"./Table-DURgDP2Q.js";import"./index-BKF13I8U.js";import"./Dialog-Bq-PmYd-.js";import"./cross-DHcY-_Dr.js";import"./svgIconContainer-qWhULtlh.js";import"./useBaseUiId-D6QmQGbw.js";import"./InternalBackdrop-sT7DDCmz.js";import"./composite-DucXBgYZ.js";import"./index-FDv4gW4k.js";import"./index-CdIm4hCh.js";import"./index-DLb_P0fQ.js";import"./useEventCallback-CczZi8pM.js";import"./SkeletonBar-DDHpySGk.js";import"./LoadingCell-Y5z6Phez.js";import"./ColumnConfigDialog-BqSwPurl.js";import"./DraggableList-DMmER9ew.js";import"./search-4QP789O7.js";import"./Input-xRhXFxI5.js";import"./useControlled-BPo532GT.js";import"./Button-CsTwwOik.js";import"./small-cross-Cq-qnBfO.js";import"./ActionButton-CfpX88bl.js";import"./Checkbox-C6JHvvQ7.js";import"./useValueChanged-_KxSVJeX.js";import"./CollapsiblePanel-C-KMkQTO.js";import"./MultiColumnSortDialog-BTO4Xqfd.js";import"./MenuTrigger-wBePDtxt.js";import"./CompositeItem-DoQHaS8J.js";import"./ToolbarRootContext-Dlh09ihf.js";import"./getDisabledMountTransitionStyles-CYo2lWMe.js";import"./getPseudoElementBounds-tmZ9Ox8K.js";import"./chevron-down-Dnk4XBCN.js";import"./index-z9AQc1g7.js";import"./error-DjVNd1sK.js";import"./BaseCbacBanner-C8FtSuLa.js";import"./makeExternalStore-BN9bUK5B.js";import"./Tooltip-BsGdcpyA.js";import"./PopoverPopup-DqWhBpxm.js";import"./debounce-CCJFyWuV.js";import"./useOsdkClient-HL8ITlR_.js";import"./tick-v-ZyLIBY.js";import"./DropdownField-DXE-I7FT.js";import"./isEqual-B-6PSi29.js";import"./withOsdkMetrics-CJGbJg3y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
