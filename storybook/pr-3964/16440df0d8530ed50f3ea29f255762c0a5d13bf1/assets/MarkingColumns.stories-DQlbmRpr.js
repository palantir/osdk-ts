import{f as p,j as e}from"./iframe-BPFPjQfN.js";import{O as i}from"./object-table-Y0mlN0Vb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BS5sFlIZ.js";import"./Table-CguB3Bpq.js";import"./index-DLsuK50b.js";import"./Dialog-Dg-1TYJ4.js";import"./cross-jacAbTr1.js";import"./svgIconContainer-BCrLikms.js";import"./useBaseUiId-XR0mowR0.js";import"./InternalBackdrop-Df1he87e.js";import"./composite--6cSo0WV.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./index-Biydlrf3.js";import"./useEventCallback-DNQjSEKX.js";import"./SkeletonBar-CMuVE2LV.js";import"./LoadingCell-BlrvphZB.js";import"./ColumnConfigDialog-BbWkPFl5.js";import"./DraggableList-BUUF-S7z.js";import"./search-CZtJ4QjI.js";import"./Input-Cbr4DxDr.js";import"./useControlled-DWmknCjz.js";import"./Button-MukxU7Us.js";import"./small-cross-yjorOgrv.js";import"./ActionButton-CQmjB9pW.js";import"./Checkbox-DfSpVE3t.js";import"./useValueChanged-CuY1VjDq.js";import"./CollapsiblePanel-DYgAn-VX.js";import"./MultiColumnSortDialog-DgiO0ntJ.js";import"./MenuTrigger-CGQOXJie.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./getDisabledMountTransitionStyles-BoepTDS0.js";import"./getPseudoElementBounds-CV-CmjZt.js";import"./chevron-down-U37QTCrW.js";import"./index-D2ej1Jb2.js";import"./error-DEs_Iieb.js";import"./BaseCbacBanner-D18zz_iP.js";import"./makeExternalStore-BJ259EIr.js";import"./Tooltip-3bmH_QUq.js";import"./PopoverPopup-Bn_qWbD4.js";import"./debounce-CINcFD0i.js";import"./useOsdkClient-e-CK1Pug.js";import"./tick-DSAjIfQR.js";import"./DropdownField-Bu6RRAh2.js";import"./isEqual-DcRXgc-e.js";import"./withOsdkMetrics-DyIxSijK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
