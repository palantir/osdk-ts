import{f as p,j as e}from"./iframe-DEpmrtbG.js";import{O as i}from"./object-table-BJGCVnLx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bgg2uCW1.js";import"./Table-DMdwAM2N.js";import"./index-DgxVBE9v.js";import"./Dialog-BL-J1NYg.js";import"./cross-CrU6nGJP.js";import"./svgIconContainer-DWCXHbm6.js";import"./useBaseUiId-CETaC9GH.js";import"./InternalBackdrop-BJf2S27G.js";import"./composite-DBo_GtSD.js";import"./index-gBnbSOoM.js";import"./index-BsQx4f-z.js";import"./index-By9oDPdz.js";import"./useEventCallback-DWcDc9KV.js";import"./SkeletonBar-qEbRKPf1.js";import"./LoadingCell--WEN8DBK.js";import"./ColumnConfigDialog-Dph9Pt0O.js";import"./DraggableList-ce_8KGNq.js";import"./search-B4TawZLP.js";import"./Input-DnQqAjUi.js";import"./useControlled-CxIvThFp.js";import"./Button-C-DZ3Yzq.js";import"./small-cross-wFOvE6mp.js";import"./ActionButton-CmDGjkch.js";import"./Checkbox-BcwdHxHD.js";import"./useValueChanged-CVjECJ2T.js";import"./CollapsiblePanel-BCcZQ43x.js";import"./MultiColumnSortDialog-CKQGaall.js";import"./MenuTrigger-CApU9aj8.js";import"./CompositeItem-LCipfobg.js";import"./ToolbarRootContext-BN4SwV4N.js";import"./getDisabledMountTransitionStyles-hbhLeVH_.js";import"./getPseudoElementBounds-DeGavAO8.js";import"./chevron-down-Cvm0d31k.js";import"./index-Ddv81Ai4.js";import"./error-DVsFEdhY.js";import"./BaseCbacBanner--TlWJCKJ.js";import"./makeExternalStore-BaPAj8aa.js";import"./Tooltip-DFM3nmx3.js";import"./PopoverPopup-BCiIUJbQ.js";import"./debounce-BECAHL4g.js";import"./useOsdkClient-CRefb4Et.js";import"./tick-C59Dr2Db.js";import"./DropdownField-D0CE821u.js";import"./isEqual-Cz0QPFxe.js";import"./withOsdkMetrics-DnWSlC-3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
