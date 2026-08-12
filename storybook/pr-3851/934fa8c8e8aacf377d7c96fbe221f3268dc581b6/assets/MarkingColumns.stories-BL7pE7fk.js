import{f as p,j as e}from"./iframe-BwyxbMYz.js";import{O as i}from"./object-table-BxtmdX9W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ck4OFvFV.js";import"./Table-DcRonUfM.js";import"./index-eVyunh8z.js";import"./Dialog-C5X0AMsU.js";import"./cross-CtafeApd.js";import"./svgIconContainer-cOEOezOx.js";import"./useBaseUiId-Djb3rEs2.js";import"./InternalBackdrop-Dd3Xk-Dc.js";import"./composite-DbDlXcOS.js";import"./index-i1ZIkJqK.js";import"./index-BQkt-qop.js";import"./index-U83mhX69.js";import"./useEventCallback-CltMv-oE.js";import"./SkeletonBar-DjqhLsmr.js";import"./LoadingCell-eAjwk7pb.js";import"./ColumnConfigDialog-CiyiEvIH.js";import"./DraggableList-CNlCo6Kr.js";import"./search-396yxvmZ.js";import"./Input-DDDwFt7C.js";import"./useControlled-Py9LxNrl.js";import"./isEqual-DIRrgwz9.js";import"./isObject-DTwiK1hG.js";import"./Button-CpPh9842.js";import"./ActionButton-BNWfXUgE.js";import"./Checkbox-Dn5Ztj5L.js";import"./useValueChanged-SKNmCQXf.js";import"./CollapsiblePanel-DtfN20b1.js";import"./MultiColumnSortDialog-W19bvlsv.js";import"./MenuTrigger-CGPObCqt.js";import"./CompositeItem-CIt2Luhq.js";import"./ToolbarRootContext-aO87p-2A.js";import"./getDisabledMountTransitionStyles-CivvGP1V.js";import"./getPseudoElementBounds-H-udXKPL.js";import"./chevron-down-DRr_ZByO.js";import"./index-fGT3xXi5.js";import"./error-9Pqn15gd.js";import"./BaseCbacBanner-CNkNpGxu.js";import"./makeExternalStore-dts8SMdL.js";import"./Tooltip-D7nx6rGZ.js";import"./PopoverPopup-BI9lGcbu.js";import"./toNumber-BU-l8znT.js";import"./useOsdkClient-CGyb1dMs.js";import"./tick-CvcDBPDK.js";import"./DropdownField-DHsN0P8K.js";import"./withOsdkMetrics-YkGaLtA7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
