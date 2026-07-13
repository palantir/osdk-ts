import{f as n,j as t}from"./iframe-CyaLwNeN.js";import{O as p}from"./object-table-zz_cUWpZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C59wXJGm.js";import"./Table-DKHub-3R.js";import"./index-ClYCFxLc.js";import"./Dialog-DoHkd20w.js";import"./cross-YnSfoWry.js";import"./svgIconContainer-DENCU-Gn.js";import"./useBaseUiId-DvZ_p5uK.js";import"./InternalBackdrop-D-ZFDWhX.js";import"./composite-DI16xt5E.js";import"./index-Cn-2cn1s.js";import"./index-DCVzVXAO.js";import"./index-CKry7Zq0.js";import"./useEventCallback-BvVzdICO.js";import"./SkeletonBar-BQYZLXYL.js";import"./LoadingCell-BGGYZ8OO.js";import"./ColumnConfigDialog-Dy6Gx9FD.js";import"./DraggableList-D7WKsA6x.js";import"./search-BZwB1dD8.js";import"./Input-ejD1PUHf.js";import"./useControlled-CVWFOP-m.js";import"./Button-Bpm9V69u.js";import"./small-cross-BvHRjYwk.js";import"./ActionButton-BA1WCQK6.js";import"./Checkbox-Dgg2Pte1.js";import"./useValueChanged-D2MFLZ7Z.js";import"./CollapsiblePanel-1q5cIbsQ.js";import"./MultiColumnSortDialog-D8o2G0Tr.js";import"./MenuTrigger-CTWgJwx2.js";import"./CompositeItem-BlMJ0-sW.js";import"./ToolbarRootContext-n2aK4s4L.js";import"./getDisabledMountTransitionStyles-BfbgGNpV.js";import"./getPseudoElementBounds-DBziFB1M.js";import"./chevron-down-aw0xFEGn.js";import"./index-fLqOInXO.js";import"./error-CDsS4DUR.js";import"./BaseCbacBanner-gIkXQHft.js";import"./makeExternalStore-C6mAl8IT.js";import"./Tooltip-DPdrIS6c.js";import"./PopoverPopup-CjU-dXpD.js";import"./toNumber-DWddHeY0.js";import"./useOsdkClient-CxqVq7FW.js";import"./tick-Cs94Kx7I.js";import"./DropdownField-BCNJ_jPD.js";import"./withOsdkMetrics-C1chW5-0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
