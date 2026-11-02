import{f as p,j as e}from"./iframe-CgfdIm0T.js";import{O as i}from"./object-table-DrnlDv9c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C8qWAL46.js";import"./Table-DUMakJ11.js";import"./index-BeSyGo3F.js";import"./Dialog-U0YBM8su.js";import"./cross-CWciybKu.js";import"./svgIconContainer-DQ0tbGLY.js";import"./useBaseUiId-BuuF3bkV.js";import"./InternalBackdrop-qMgkwTyz.js";import"./composite-CUpx3Hda.js";import"./index-B8rhYuyr.js";import"./index-bby2SWWb.js";import"./index-BYKYJzqq.js";import"./useEventCallback-roPvTisA.js";import"./SkeletonBar-BRUSZP5d.js";import"./LoadingCell-CpCzQijd.js";import"./ColumnConfigDialog-CoKK8VcE.js";import"./DraggableList-Dr8Zz3hH.js";import"./search-DENXSVyb.js";import"./Input-BG9nzqHz.js";import"./useControlled-B0N5dBnJ.js";import"./Button-CVc3RSfH.js";import"./small-cross-DX0KVrVi.js";import"./ActionButton-CcLOh3Yb.js";import"./Checkbox-DTTupP5N.js";import"./useValueChanged-0xGZfbNw.js";import"./CollapsiblePanel-CNv0K6GO.js";import"./MultiColumnSortDialog-C6XaIndo.js";import"./MenuTrigger-DZtYSqfe.js";import"./CompositeItem-BTF_cTSf.js";import"./ToolbarRootContext-DMK8ajZX.js";import"./getDisabledMountTransitionStyles-COYOVfxZ.js";import"./getPseudoElementBounds-FnH3Aw9k.js";import"./chevron-down-CiBD6Dqi.js";import"./index-BBcDpAeT.js";import"./error-Bu8LxMV7.js";import"./BaseCbacBanner-C_N-7cgH.js";import"./makeExternalStore-BNPt347_.js";import"./Tooltip-ygywzpjU.js";import"./PopoverPopup-DlHSMVYr.js";import"./debounce-DQksQltd.js";import"./useOsdkClient-B3iR8qwm.js";import"./tick-hxPJxWFp.js";import"./DropdownField-BMHyrqgr.js";import"./isEqual-D3J8sFzN.js";import"./withOsdkMetrics-BU1Vym1S.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
