import{f as n,j as t}from"./iframe-DvSsWOGD.js";import{O as p}from"./object-table-KVetoiv_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw7LDbE4.js";import"./Table-BG8ZJra2.js";import"./index-CRD1OKKx.js";import"./Dialog-D6fMAKLj.js";import"./cross-9OtffuUq.js";import"./svgIconContainer-DYt0LuCy.js";import"./useBaseUiId-BXtbo1zV.js";import"./InternalBackdrop-rn2c_UeU.js";import"./composite-BifI5eLe.js";import"./index-DqQLR9pm.js";import"./index-NEDzvt0j.js";import"./index-qvgAexZk.js";import"./useEventCallback-Cwv64Jci.js";import"./SkeletonBar-B0G9dDKE.js";import"./LoadingCell-DM2ShOsF.js";import"./ColumnConfigDialog-_aRj8Tqz.js";import"./DraggableList-DLaWXxbL.js";import"./search-CBMSVh9L.js";import"./Input-Dn9RdB6-.js";import"./useControlled-B-YI8NeY.js";import"./Button-CDEfdqWP.js";import"./small-cross-BCRHL83K.js";import"./ActionButton-JJqjmlRW.js";import"./Checkbox-BqewF1kX.js";import"./useValueChanged-BfzlC5Kx.js";import"./CollapsiblePanel-nPyAYt5B.js";import"./MultiColumnSortDialog-CPs234_L.js";import"./MenuTrigger-dmfflgN-.js";import"./CompositeItem-CzWG2HR2.js";import"./ToolbarRootContext-B-CTABm3.js";import"./getDisabledMountTransitionStyles-CbEOKEhV.js";import"./getPseudoElementBounds-CijPI-5o.js";import"./chevron-down-DiHtOlUa.js";import"./index-DVyyh1QX.js";import"./error-BS8X9T93.js";import"./BaseCbacBanner-BElD4AB4.js";import"./makeExternalStore-D5i6UVaC.js";import"./Tooltip-CE47Vlys.js";import"./PopoverPopup-BcMp6M43.js";import"./toNumber-DMN8V-08.js";import"./useOsdkClient-MnajlCKh.js";import"./tick-BFDgtng5.js";import"./DropdownField-Yxtg6zNQ.js";import"./withOsdkMetrics-CJlHKlRX.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
