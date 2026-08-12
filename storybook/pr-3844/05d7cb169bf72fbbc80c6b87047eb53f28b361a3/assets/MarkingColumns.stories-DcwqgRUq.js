import{f as p,j as e}from"./iframe-Bzfl0edf.js";import{O as i}from"./object-table-D216D20g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B208VeDC.js";import"./Table-DXSJ4WFA.js";import"./index-CGVuXL6A.js";import"./Dialog-CPM6XpIW.js";import"./cross-CwTbRfdE.js";import"./svgIconContainer-Bnp_lIJz.js";import"./useBaseUiId-BJ8-iUbP.js";import"./InternalBackdrop-CdbgxrW_.js";import"./composite-C_lr7yXh.js";import"./index-CE0CDnbM.js";import"./index-Cqab7N-9.js";import"./index-qzBl6Ep6.js";import"./useEventCallback-EOEACuMH.js";import"./SkeletonBar-C8tmxbP7.js";import"./LoadingCell-Dvs5FgLo.js";import"./ColumnConfigDialog-BKNxlBbv.js";import"./DraggableList-BXsQGjpA.js";import"./search-qz1hnUVF.js";import"./Input-DisgP7IF.js";import"./useControlled-B36barjX.js";import"./isEqual-GJ2Dy3Gk.js";import"./isObject-p0Q0wz6R.js";import"./Button-fO_zAq5Q.js";import"./ActionButton-vIk83ayf.js";import"./Checkbox-CpngCqKq.js";import"./useValueChanged-TLybF-Yx.js";import"./CollapsiblePanel-Db1KUj0x.js";import"./MultiColumnSortDialog-D0k5O__9.js";import"./MenuTrigger-DliGnZwA.js";import"./CompositeItem-DlE9RLJl.js";import"./ToolbarRootContext-Dh6jr3zV.js";import"./getDisabledMountTransitionStyles-CuUAObkc.js";import"./getPseudoElementBounds-WRyicApX.js";import"./chevron-down-5xkKqCSO.js";import"./index-UVAOyVXG.js";import"./error-SO7gTkQm.js";import"./BaseCbacBanner-CNZkkluW.js";import"./makeExternalStore-Csana1x2.js";import"./Tooltip-vMXuTZw0.js";import"./PopoverPopup-CBy6YPRB.js";import"./toNumber-DVRarxex.js";import"./useOsdkClient-DujXvWiF.js";import"./tick-BGV2o7PZ.js";import"./DropdownField-ErWCEAWu.js";import"./withOsdkMetrics-Cb6Jf2gD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
