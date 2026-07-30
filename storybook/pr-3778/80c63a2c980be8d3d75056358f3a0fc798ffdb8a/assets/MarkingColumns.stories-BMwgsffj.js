import{f as p,j as e}from"./iframe-DW5kExRz.js";import{O as i}from"./object-table-SK85HUFE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnxWtWaG.js";import"./Table-2wiIUKM9.js";import"./index-CflAnjSB.js";import"./Dialog-B342EL_s.js";import"./cross-BXaETxpe.js";import"./svgIconContainer-dsPCmsB5.js";import"./useBaseUiId-CmNJn8Jo.js";import"./InternalBackdrop-BcvQGME1.js";import"./composite-BLexdKxo.js";import"./index-DH8-sclq.js";import"./index-Cf8c--ed.js";import"./index-7GZUwAeQ.js";import"./useEventCallback-BkGasbAR.js";import"./SkeletonBar-DeBe8Oqc.js";import"./LoadingCell-C_nW1YUY.js";import"./ColumnConfigDialog-RyYmBq-t.js";import"./DraggableList-BPMLG9CE.js";import"./search-BHsGOBSH.js";import"./Input-BFC96i5B.js";import"./useControlled-dYbeX3BT.js";import"./isEqual-CZ7L-i0h.js";import"./isObject-DHnfbCQR.js";import"./Button-D0EqJKRJ.js";import"./ActionButton-2GzyxNc0.js";import"./Checkbox-MhiyCNth.js";import"./useValueChanged-Db94IZxe.js";import"./CollapsiblePanel-GCGdmqV9.js";import"./MultiColumnSortDialog-CUN72OLB.js";import"./MenuTrigger-Bi_nQ-5H.js";import"./CompositeItem-CQlwhU_S.js";import"./ToolbarRootContext-BwqzssRh.js";import"./getDisabledMountTransitionStyles-DCRJEQNW.js";import"./getPseudoElementBounds-CSZF85ks.js";import"./chevron-down-D4OFZDT7.js";import"./index-Dy-i2J-X.js";import"./error-TNuapbIk.js";import"./BaseCbacBanner-CenzC8Iv.js";import"./makeExternalStore-D3UQvTf-.js";import"./Tooltip-DXsnCRfp.js";import"./PopoverPopup-CYRcWuYi.js";import"./toNumber-0-52reWh.js";import"./useOsdkClient-AsBqnP3o.js";import"./tick-C30IwoCd.js";import"./DropdownField-D1vWjaUE.js";import"./withOsdkMetrics-CBpR0MwW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
