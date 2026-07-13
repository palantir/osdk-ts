import{f as n,j as t}from"./iframe-D1bftbFK.js";import{O as p}from"./object-table-COhG12FN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNIzgNg3.js";import"./Table-f7czZJhV.js";import"./index-D1loE7aj.js";import"./Dialog-Gw67Q6Rn.js";import"./cross-DzZeKJfj.js";import"./svgIconContainer-Dqjbb7fg.js";import"./useBaseUiId-Bvl0vz9p.js";import"./InternalBackdrop-BB3RsRDt.js";import"./composite-DOqV9ejV.js";import"./index-dOf4Grlg.js";import"./index-DlVzaQME.js";import"./index-BrmJX9uT.js";import"./useEventCallback-CQFMWWc5.js";import"./SkeletonBar-BBaAbbby.js";import"./LoadingCell-tL13-Ngd.js";import"./ColumnConfigDialog-_zRc8A_C.js";import"./DraggableList-CHohrtMd.js";import"./search-vcgo5x2D.js";import"./Input-RPabR7fY.js";import"./useControlled-BUXx323f.js";import"./Button-5rYiDiWd.js";import"./small-cross-WqHxMak_.js";import"./ActionButton-DqvSa_C_.js";import"./Checkbox-CttXfua9.js";import"./useValueChanged-qrNKsSwz.js";import"./CollapsiblePanel-Cx2HEal9.js";import"./MultiColumnSortDialog-ezonVfTE.js";import"./MenuTrigger-CeW60YCc.js";import"./CompositeItem-Bk5dEGxZ.js";import"./ToolbarRootContext-Rh3iVkuL.js";import"./getDisabledMountTransitionStyles-DcwdTU8M.js";import"./getPseudoElementBounds-C030YbuO.js";import"./chevron-down-rJxkhghQ.js";import"./index-C98djebO.js";import"./error-BwiNsD3B.js";import"./BaseCbacBanner-DOSTVC1G.js";import"./makeExternalStore-BoS1QRtv.js";import"./Tooltip-BTZWbjz7.js";import"./PopoverPopup-BUqCoHyP.js";import"./toNumber-C6Du4OzQ.js";import"./useOsdkClient-DX-l6J9g.js";import"./tick-CLSnRXRH.js";import"./DropdownField-lTLhy-GB.js";import"./withOsdkMetrics-I5lFWqrI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
