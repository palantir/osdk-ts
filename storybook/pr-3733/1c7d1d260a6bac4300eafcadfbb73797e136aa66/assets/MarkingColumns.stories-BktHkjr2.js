import{f as p,j as e}from"./iframe-5Av9J7iC.js";import{O as i}from"./object-table-g8YdHhNo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgaONgBe.js";import"./Table-fOGpk7g-.js";import"./index-CakWirJ3.js";import"./Dialog--ItX3axl.js";import"./cross-BFeZD4VG.js";import"./svgIconContainer-ChqgIZeY.js";import"./useBaseUiId-CTRvM3n9.js";import"./InternalBackdrop-5aO0og_w.js";import"./composite-CJUYG2Gd.js";import"./index-B5XSfgME.js";import"./index-CePFmMhV.js";import"./index-DT2yOIbn.js";import"./useEventCallback-DwfyEcyq.js";import"./SkeletonBar-NLyrxMhT.js";import"./LoadingCell-BOPb-za1.js";import"./ColumnConfigDialog-L5WypbFv.js";import"./DraggableList-Br_5IR3l.js";import"./search-i9LMQsdM.js";import"./Input-CKLE5DGY.js";import"./useControlled-CJSxX2mb.js";import"./isEqual-Bj59b9ke.js";import"./isObject-DQi3UINm.js";import"./Button-DvaCRSj4.js";import"./ActionButton-B1qeRpNQ.js";import"./Checkbox-mlIANG1d.js";import"./useValueChanged-zgD6LkGj.js";import"./CollapsiblePanel-CUewA6lP.js";import"./MultiColumnSortDialog-oVdB0c3Z.js";import"./MenuTrigger-DDeOApUx.js";import"./CompositeItem-B_fNWGHp.js";import"./ToolbarRootContext-D9qLaZwz.js";import"./getDisabledMountTransitionStyles-DtxIq28D.js";import"./getPseudoElementBounds-CtYDnijm.js";import"./chevron-down-DDBK_vjK.js";import"./index-DFSaCp3v.js";import"./error-D7nzuD6f.js";import"./BaseCbacBanner-DZQkjBfD.js";import"./makeExternalStore-C_jIkJhs.js";import"./Tooltip-CGUfkaHY.js";import"./PopoverPopup-p-lns9ov.js";import"./toNumber-CSkHEs0v.js";import"./useOsdkClient-7qt1y6Cg.js";import"./tick-Dyc4KqdV.js";import"./DropdownField-b76NBOLF.js";import"./withOsdkMetrics-q4ppdfgP.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
