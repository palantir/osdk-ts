import{f as p,j as e}from"./iframe-D3AG5tAD.js";import{O as i}from"./object-table-DUXzajWZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-YtZbVH.js";import"./Table-Bmr9ycFm.js";import"./index-CU_7NiMA.js";import"./Dialog-CFS2AN6n.js";import"./cross-fuBUoHYF.js";import"./svgIconContainer-CsB1NaGz.js";import"./useBaseUiId-CdoAVwix.js";import"./InternalBackdrop-D1Z_wY0G.js";import"./composite-DbU-tGJF.js";import"./index-BZVvyLb2.js";import"./index-CUoB2gGZ.js";import"./index-B9PERA1m.js";import"./useEventCallback-DuBmw-75.js";import"./SkeletonBar-C5hEoxWl.js";import"./LoadingCell-CIpNo44n.js";import"./ColumnConfigDialog-C1SThnDn.js";import"./DraggableList-DUpUNn2F.js";import"./search-MNCXehF6.js";import"./Input-B0piQqS7.js";import"./useControlled-B37jSgMz.js";import"./Button-DctYu487.js";import"./small-cross-DcYxamEv.js";import"./ActionButton-BY5Pkidu.js";import"./Checkbox-Bv_rVJKH.js";import"./useValueChanged-CRxT1g3E.js";import"./CollapsiblePanel-D417Lx8O.js";import"./MultiColumnSortDialog-CvL8aw82.js";import"./MenuTrigger-DSdQ2I7-.js";import"./CompositeItem-BU_R-6TT.js";import"./ToolbarRootContext-DzrhBWFL.js";import"./getDisabledMountTransitionStyles-BsfOYRsX.js";import"./getPseudoElementBounds-aoUbp4wE.js";import"./chevron-down-DHx9quO2.js";import"./index-CBd9Rybf.js";import"./error-vXB8Gt0N.js";import"./BaseCbacBanner-B15--1WY.js";import"./makeExternalStore-BF60C0Cg.js";import"./Tooltip-DRDCDO4w.js";import"./PopoverPopup-DpfHguaE.js";import"./toNumber-Dj1zZW26.js";import"./useOsdkClient-BtqUTCDX.js";import"./tick-ozHR_x3h.js";import"./DropdownField-1yhXyiew.js";import"./withOsdkMetrics-O49zzeg3.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
