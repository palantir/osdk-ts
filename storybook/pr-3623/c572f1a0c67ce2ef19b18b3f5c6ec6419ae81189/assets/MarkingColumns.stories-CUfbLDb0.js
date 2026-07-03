import{f as n,j as t}from"./iframe-t9TTBx3O.js";import{O as p}from"./object-table-HteBqO7w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BTVK78Hf.js";import"./Table-qLvybnoF.js";import"./index-C4rPRc03.js";import"./Dialog-rpwB4s7j.js";import"./cross-Bou-Rogg.js";import"./svgIconContainer-DnRCoAiO.js";import"./useBaseUiId--fUJLLjc.js";import"./InternalBackdrop-BVFqhl-o.js";import"./composite-B8HA_4Kt.js";import"./index-C3C7wtTj.js";import"./index-Ba2CP1zg.js";import"./index-CZZ9Qc8a.js";import"./useEventCallback-a0Wr2F1H.js";import"./SkeletonBar-BLUjJEw5.js";import"./LoadingCell-CTzirYjE.js";import"./ColumnConfigDialog-fENbw0TF.js";import"./DraggableList-CH_BPCWw.js";import"./search-BlOD3K4L.js";import"./Input-oJupuVco.js";import"./useControlled-r95VK43g.js";import"./Button-BKDoReyy.js";import"./small-cross-szL12EJm.js";import"./ActionButton-Zua42Akv.js";import"./Checkbox-CDmsJb_3.js";import"./useValueChanged-B0zv4bn6.js";import"./CollapsiblePanel-adQIa8kh.js";import"./MultiColumnSortDialog-DDiT1Mcp.js";import"./MenuTrigger-DUfNu-ND.js";import"./CompositeItem-hZNys6h7.js";import"./ToolbarRootContext-DCBe-3lE.js";import"./getDisabledMountTransitionStyles-DgJ-rOU_.js";import"./getPseudoElementBounds-BfljS7_3.js";import"./chevron-down--r_1t3Ap.js";import"./index-D19hciPE.js";import"./error-BEYVnpIK.js";import"./BaseCbacBanner-DfSZ0d9a.js";import"./makeExternalStore-vtaBhezz.js";import"./Tooltip-BxkW8RHI.js";import"./PopoverPopup-BUpGjk0P.js";import"./toNumber-DkUgP_mo.js";import"./useOsdkClient-BYR2jwFQ.js";import"./tick-D_olbsZT.js";import"./DropdownField-BVrI8ohs.js";import"./withOsdkMetrics-Cri9smis.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
