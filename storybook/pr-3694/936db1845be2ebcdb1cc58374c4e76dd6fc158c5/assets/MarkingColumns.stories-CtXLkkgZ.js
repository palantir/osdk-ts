import{f as n,j as t}from"./iframe-iKRdyAbr.js";import{O as p}from"./object-table-CfGh1g6p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVTmALjq.js";import"./Table-D1LJtnso.js";import"./index-C2n8TGAO.js";import"./Dialog-Bd2KyOqA.js";import"./cross-DZwGj8TX.js";import"./svgIconContainer-CNPfWT_A.js";import"./useBaseUiId-DuUa_hc_.js";import"./InternalBackdrop-CS2TIlww.js";import"./composite-BmLc-Elc.js";import"./index-CXUpj6H9.js";import"./index-D-6utWIs.js";import"./index-B2MphmoY.js";import"./useEventCallback-Bop8n_se.js";import"./SkeletonBar-tbmsUTDI.js";import"./LoadingCell-Wys7WsMp.js";import"./ColumnConfigDialog-zqK0A3PC.js";import"./DraggableList-CMfL2W5E.js";import"./search-WZ4NTqVw.js";import"./Input-CUl0DuD9.js";import"./useControlled-5vKOO904.js";import"./Button-D7T6F8Hw.js";import"./small-cross-UNY_pFrc.js";import"./ActionButton-FVBuQYCL.js";import"./Checkbox-CLcEG5uP.js";import"./useValueChanged-BaMuqykI.js";import"./CollapsiblePanel-C2WAmUkZ.js";import"./MultiColumnSortDialog-Apo19woa.js";import"./MenuTrigger-Cz4eEXNU.js";import"./CompositeItem-CaECQ_4V.js";import"./ToolbarRootContext-417TxmOR.js";import"./getDisabledMountTransitionStyles-COx5rIS6.js";import"./getPseudoElementBounds-s3ikR9Bn.js";import"./chevron-down-BDeoM4Nk.js";import"./index-BXqtYAVA.js";import"./error-DPjZwhx_.js";import"./BaseCbacBanner-BW5ldW3y.js";import"./makeExternalStore-BxufXohf.js";import"./Tooltip-Cz14GjKF.js";import"./PopoverPopup-BGteLk75.js";import"./toNumber-DmHnQL00.js";import"./useOsdkClient-CrxzjaDB.js";import"./tick-D0KwJzGW.js";import"./DropdownField-DQ3Jw2LG.js";import"./withOsdkMetrics-DDxC3Viq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
