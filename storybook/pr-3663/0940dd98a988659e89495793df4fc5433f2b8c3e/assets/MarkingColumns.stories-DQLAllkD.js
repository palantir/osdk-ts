import{f as n,j as t}from"./iframe-DvAHs_rK.js";import{O as p}from"./object-table-D1hONy3a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cxypp6NC.js";import"./Table-B105BuXd.js";import"./index-BNrAxUQu.js";import"./Dialog-DkJK_BX0.js";import"./cross-D-wVv7sP.js";import"./svgIconContainer-_lD2_6yh.js";import"./useBaseUiId-C8LpUgdp.js";import"./InternalBackdrop-DRKGoIto.js";import"./composite-obrHYeEl.js";import"./index-BStcrrnt.js";import"./index-Beg4FSvD.js";import"./index-CWEXOfzd.js";import"./useEventCallback-D1feD4mF.js";import"./SkeletonBar-DHXUsL8M.js";import"./LoadingCell-BUu2Aqco.js";import"./ColumnConfigDialog-OdtS8Kia.js";import"./DraggableList-CDheprCt.js";import"./search-C7QeuW8f.js";import"./Input-Bn1PVFyp.js";import"./useControlled-DkXAwXE4.js";import"./Button-Dpk0BmRN.js";import"./small-cross-CRkTRXZe.js";import"./ActionButton-B4pIiey-.js";import"./Checkbox-Dy0mNCQd.js";import"./useValueChanged-BSvHUJSp.js";import"./CollapsiblePanel-BHdJ5erx.js";import"./MultiColumnSortDialog-BYmjINSb.js";import"./MenuTrigger-5qotg0o8.js";import"./CompositeItem-DX3MatO1.js";import"./ToolbarRootContext-QUpobhM8.js";import"./getDisabledMountTransitionStyles-BGGJzaWw.js";import"./getPseudoElementBounds-BJxsTHXv.js";import"./chevron-down-CF2-IqN0.js";import"./index-CcI9RKAo.js";import"./error-BypgT7Ly.js";import"./BaseCbacBanner-CeJwR4kp.js";import"./makeExternalStore-CtSpQ8cF.js";import"./Tooltip-Dag7KUcm.js";import"./PopoverPopup-Bi8M9EWf.js";import"./toNumber-bXab-IHs.js";import"./useOsdkClient-CM8QbUtQ.js";import"./tick-CA5OH1ZX.js";import"./DropdownField-_fKfs5he.js";import"./withOsdkMetrics-uQpOCGzU.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
