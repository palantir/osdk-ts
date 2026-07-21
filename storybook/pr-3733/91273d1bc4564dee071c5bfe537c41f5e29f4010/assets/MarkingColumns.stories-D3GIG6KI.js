import{f as n,j as t}from"./iframe-BzlYLQ-i.js";import{O as p}from"./object-table-DZwSXS8A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ch6_Jnnc.js";import"./Table-wlsI2hT9.js";import"./index-0NDkVbp8.js";import"./Dialog-DNv64uTw.js";import"./cross-CtsDX5u-.js";import"./svgIconContainer-CzqCBiqK.js";import"./useBaseUiId-Dr8TPlc3.js";import"./InternalBackdrop-DecYFjhO.js";import"./composite-Ca4ja29w.js";import"./index-CymzoPXI.js";import"./index-VloNGu1B.js";import"./index-D7fqZBgp.js";import"./useEventCallback-ByhDukM5.js";import"./SkeletonBar-_qxaSpur.js";import"./LoadingCell-he8RKOo8.js";import"./ColumnConfigDialog-B6VCeGeu.js";import"./DraggableList-Fpkuy5RU.js";import"./search-3vJQud9L.js";import"./Input-QoZRQCyF.js";import"./useControlled-Dp8h5goj.js";import"./Button-Bn3n_M--.js";import"./small-cross-CcM1sRD7.js";import"./ActionButton-gNqGFZZ_.js";import"./Checkbox-0qQsM7_K.js";import"./useValueChanged-CGaiwyxu.js";import"./CollapsiblePanel-D96YU18d.js";import"./MultiColumnSortDialog-BibnkhfC.js";import"./MenuTrigger-BjmtGjy4.js";import"./CompositeItem-DT554UZE.js";import"./ToolbarRootContext-SlT4-41c.js";import"./getDisabledMountTransitionStyles-BqLwDNMu.js";import"./getPseudoElementBounds-Ca3_tA3u.js";import"./chevron-down-DkEE_eX1.js";import"./index-Djutzn40.js";import"./error-BwoO0b5Y.js";import"./BaseCbacBanner-CZtYZuzk.js";import"./makeExternalStore-6MpUzXMo.js";import"./Tooltip-vD9O4Yku.js";import"./PopoverPopup-xInezTbI.js";import"./toNumber-BjGUkA-7.js";import"./useOsdkClient-DcQwJVGP.js";import"./tick-Bw3CrYCD.js";import"./DropdownField-CQbnvbW4.js";import"./withOsdkMetrics-DZsWQYqQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
