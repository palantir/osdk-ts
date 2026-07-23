import{f as p,j as e}from"./iframe-C_Pv3Jbd.js";import{O as i}from"./object-table-DQ827xV-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAWBxbEF.js";import"./Table-BA8Otlu6.js";import"./index-CP6e4PYC.js";import"./Dialog-p4V7jc3I.js";import"./cross-DTseTQ2Z.js";import"./svgIconContainer-Ce7urqQf.js";import"./useBaseUiId-DYizqAnY.js";import"./InternalBackdrop-Amryn3S-.js";import"./composite-DgoWnZCr.js";import"./index-SADmy14t.js";import"./index-a8UjtM81.js";import"./index-Dhg3D2oH.js";import"./useEventCallback-C9D8elQI.js";import"./SkeletonBar-CBV_YSxB.js";import"./LoadingCell-B1fFvQlu.js";import"./ColumnConfigDialog-BlVwtRIF.js";import"./DraggableList-B7VFRjFl.js";import"./search-DX7DB_41.js";import"./Input-D8GpyMjX.js";import"./useControlled-CqvE6bu2.js";import"./isEqual-B2F0NQwN.js";import"./isObject-yVrjqZAT.js";import"./Button-Bm1k5fAp.js";import"./ActionButton-DKVluRLb.js";import"./Checkbox-BbEfD_mG.js";import"./useValueChanged-BwPrso9v.js";import"./CollapsiblePanel-DJaL2lpu.js";import"./MultiColumnSortDialog-DXWPJyqW.js";import"./MenuTrigger-CgdPrFpm.js";import"./CompositeItem-Cl-rdabj.js";import"./ToolbarRootContext-DYmJz4jF.js";import"./getDisabledMountTransitionStyles-Dldb0r_1.js";import"./getPseudoElementBounds-CKDXOC4J.js";import"./chevron-down-Cp5ec-M-.js";import"./index-Ca4GGAAu.js";import"./error-CxH-v8gH.js";import"./BaseCbacBanner-DyjoCB6u.js";import"./makeExternalStore-Bmfsg2Df.js";import"./Tooltip-2mSpwKKA.js";import"./PopoverPopup-BXHC7Yci.js";import"./toNumber-Dg932QTp.js";import"./useOsdkClient-grxZgNOJ.js";import"./tick-CE0UYf6e.js";import"./DropdownField-B0Lxobck.js";import"./withOsdkMetrics-CqP5kgBK.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
