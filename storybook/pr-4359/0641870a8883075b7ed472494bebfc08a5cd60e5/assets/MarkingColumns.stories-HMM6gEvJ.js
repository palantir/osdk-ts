import{f as p,j as e}from"./iframe-BZzSz7BH.js";import{O as i}from"./object-table-NRkhlIEe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNCm3N6L.js";import"./Table-DL08LYN0.js";import"./index-B0_2NaMN.js";import"./Dialog-CENMOXYE.js";import"./cross-DZZxBCNz.js";import"./svgIconContainer-Dhl9__RH.js";import"./useBaseUiId-DkyKYNDq.js";import"./InternalBackdrop-Dz8c766k.js";import"./composite-BTQMDNX2.js";import"./index-BRGRaTrf.js";import"./index-CuHAqEhQ.js";import"./index-B8CHFzHN.js";import"./useEventCallback-s0-nnfm7.js";import"./SkeletonBar-BHiQfJ3N.js";import"./LoadingCell-Cc7BBtdp.js";import"./ColumnConfigDialog-DvyEztzL.js";import"./DraggableList-Bgkxbtf8.js";import"./search-Bp2lXg3F.js";import"./Input-D_wnf1zt.js";import"./useControlled-DTdqQX0O.js";import"./Button-DjbJHqTl.js";import"./small-cross-duhx-2IW.js";import"./ActionButton-CPOmOwV3.js";import"./Checkbox-YrYlJhGX.js";import"./useValueChanged-BTOjYRe_.js";import"./CollapsiblePanel-Cn1JiM3m.js";import"./MultiColumnSortDialog-BhDJP-we.js";import"./MenuTrigger-Cojssmun.js";import"./CompositeItem-B-WQrem9.js";import"./ToolbarRootContext-BbBpvcok.js";import"./getDisabledMountTransitionStyles-CVVnoiuw.js";import"./getPseudoElementBounds-CNHnb_Zs.js";import"./chevron-down-BtcR6Z3d.js";import"./index-CKPZYnP1.js";import"./error-CUMr5i6e.js";import"./BaseCbacBanner-Bb8aDwze.js";import"./makeExternalStore-8dQqHLia.js";import"./Tooltip-DpHxoLtf.js";import"./PopoverPopup-DSpnAg_f.js";import"./debounce-bMnFMRzg.js";import"./useOsdkClient-PElMpwH_.js";import"./tick-DNPnh0Dr.js";import"./DropdownField-squh2G6a.js";import"./isEqual-fKiVWW2e.js";import"./withOsdkMetrics-EMHKCnPx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
