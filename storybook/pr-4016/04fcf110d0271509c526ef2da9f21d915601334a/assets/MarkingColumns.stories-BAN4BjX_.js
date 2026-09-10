import{f as p,j as e}from"./iframe-DCMw_0TW.js";import{O as i}from"./object-table-Ccj31N5H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nzNuDSAv.js";import"./Table-Dm-UUELM.js";import"./index-tQLNAeTv.js";import"./Dialog-Dnb7OeiM.js";import"./cross-orOEa1Of.js";import"./svgIconContainer-BuqYbofr.js";import"./useBaseUiId-D30K99H9.js";import"./InternalBackdrop-BB5KU1pv.js";import"./composite-BEUqKf6u.js";import"./index-Dk4-JQXx.js";import"./index-Xc5_iOPx.js";import"./index-DGqnKBQq.js";import"./useEventCallback-Dlb3_nai.js";import"./SkeletonBar-DGgKxMsR.js";import"./LoadingCell-Bo92g5D3.js";import"./ColumnConfigDialog-svntpNOd.js";import"./DraggableList-dWs199Tn.js";import"./search-3SCesORj.js";import"./Input-Ct67CszU.js";import"./useControlled-glFhf02I.js";import"./Button-DrHRwo7L.js";import"./small-cross-bQOb3ZfY.js";import"./ActionButton-CqBl5clt.js";import"./Checkbox-CC3H_6dm.js";import"./useValueChanged-BExaB3du.js";import"./CollapsiblePanel-udeHAS2R.js";import"./MultiColumnSortDialog-Z4gbQ2sB.js";import"./MenuTrigger-BHi5YxlN.js";import"./CompositeItem-DAFo6DYX.js";import"./ToolbarRootContext-DAgpPS14.js";import"./getDisabledMountTransitionStyles-DePFxOFo.js";import"./getPseudoElementBounds-DTBnQrKu.js";import"./chevron-down-CwIymZzb.js";import"./index-B3cn-YUq.js";import"./error-CThwrDAU.js";import"./BaseCbacBanner-HqMibrZO.js";import"./makeExternalStore-CaxsUcIE.js";import"./Tooltip-BIR0svY2.js";import"./PopoverPopup-D-oy58Yh.js";import"./debounce-B-rnFVFg.js";import"./useOsdkClient-wDDgD5tN.js";import"./tick-DWb-Pi96.js";import"./DropdownField-5tJgHFby.js";import"./isEqual-eGrV7ep1.js";import"./withOsdkMetrics-Cz4cYYHT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
