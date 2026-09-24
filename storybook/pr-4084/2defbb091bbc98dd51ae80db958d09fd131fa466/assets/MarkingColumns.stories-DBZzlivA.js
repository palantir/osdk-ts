import{f as p,j as e}from"./iframe-0nbFd4Up.js";import{O as i}from"./object-table-CGLRthHP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9c2Zh8f.js";import"./Table-DnFyr-eR.js";import"./index-DwMakAAg.js";import"./Dialog-B1ObiwL9.js";import"./cross-DNUyMOOH.js";import"./svgIconContainer-CfgrNU9r.js";import"./useBaseUiId-hHYCbJGR.js";import"./InternalBackdrop-KhB9QZ7N.js";import"./composite-BsbtETqs.js";import"./index-5aC9zCcy.js";import"./index-CS8KPTZX.js";import"./index-D8qb59k0.js";import"./useEventCallback-nhi0bkCi.js";import"./SkeletonBar-BJn80Ony.js";import"./LoadingCell-CNKTGqtW.js";import"./ColumnConfigDialog-CPNjz2SP.js";import"./DraggableList-DnaVkmQi.js";import"./search-DDtr797p.js";import"./Input-YuE0Ls83.js";import"./useControlled-Gi7J51jw.js";import"./Button-Cn_l7fEs.js";import"./small-cross--2hEoLnO.js";import"./ActionButton-Tx5l-Qj1.js";import"./Checkbox-C7_DFOBZ.js";import"./useValueChanged-BdLBZwcj.js";import"./CollapsiblePanel-vf3p_QIK.js";import"./MultiColumnSortDialog-G_D659ph.js";import"./MenuTrigger-O_uVwxuL.js";import"./CompositeItem-C9hOZqfz.js";import"./ToolbarRootContext-B0NC_oEf.js";import"./getDisabledMountTransitionStyles-BI_PHpJd.js";import"./getPseudoElementBounds-aNzsWKIs.js";import"./chevron-down-BNwXq3g8.js";import"./index-BxiA765S.js";import"./error-CFI9j2MF.js";import"./BaseCbacBanner-BcZ2Qwl1.js";import"./makeExternalStore-Dwl2nMnb.js";import"./Tooltip-CRSGFbZX.js";import"./PopoverPopup-DFBzgF9k.js";import"./debounce--e6JvBD_.js";import"./useOsdkClient-CrSzWz2k.js";import"./tick-CC64mxmv.js";import"./DropdownField-DdLtiHfF.js";import"./isEqual-Dv1Q4U2c.js";import"./withOsdkMetrics-DTNlxinE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
