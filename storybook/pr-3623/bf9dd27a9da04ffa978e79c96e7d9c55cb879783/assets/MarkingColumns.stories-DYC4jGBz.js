import{f as n,j as t}from"./iframe-BQr7m57P.js";import{O as p}from"./object-table-C57qx4ff.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Don5t6xJ.js";import"./Table-EfWCKk9D.js";import"./index-H8nXahHz.js";import"./Dialog-BU6VJV9n.js";import"./cross-YqVZ7uQZ.js";import"./svgIconContainer-Dm9cfv8p.js";import"./useBaseUiId-BF6EbEou.js";import"./InternalBackdrop-kYoqShZV.js";import"./composite-B8gb6eS7.js";import"./index-BbJO5frt.js";import"./index-CXQ_prqI.js";import"./index-bsFZ-ldO.js";import"./useEventCallback-BkE7xqkb.js";import"./SkeletonBar-BQ_Hd7A2.js";import"./LoadingCell-DDw3MAdj.js";import"./ColumnConfigDialog-DO1b3TqC.js";import"./DraggableList-yFyqiU0h.js";import"./search-DZCrf5le.js";import"./Input-DRJZ9z-s.js";import"./useControlled-Tpu3D55U.js";import"./Button-DZYEtZfL.js";import"./small-cross-CGcCVIq0.js";import"./ActionButton-BWh8FWZI.js";import"./Checkbox-tj9Mze2J.js";import"./useValueChanged-DMB88MVD.js";import"./CollapsiblePanel-DyQsQEDO.js";import"./MultiColumnSortDialog-Cm3FUPpQ.js";import"./MenuTrigger-CVATy_Lw.js";import"./CompositeItem-BxDlztsz.js";import"./ToolbarRootContext-uOhSmZ0o.js";import"./getDisabledMountTransitionStyles-DesZ7vro.js";import"./getPseudoElementBounds-CNAZ7jbb.js";import"./chevron-down-Co2tg5mU.js";import"./index-qrG-6oRl.js";import"./error-Ceo_ap97.js";import"./BaseCbacBanner-CJ9ygZ9-.js";import"./makeExternalStore-BlNc40mf.js";import"./Tooltip-BsHbg2L5.js";import"./PopoverPopup-DHckLWh-.js";import"./toNumber-Da4CLOD5.js";import"./useOsdkClient-C5abaWOk.js";import"./tick-DhTUR2iT.js";import"./DropdownField-KCCjPXaj.js";import"./withOsdkMetrics-D9SI-c98.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
