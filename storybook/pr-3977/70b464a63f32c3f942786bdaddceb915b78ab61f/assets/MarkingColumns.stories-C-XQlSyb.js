import{f as p,j as e}from"./iframe-Dnd58nRU.js";import{O as i}from"./object-table-36X5EB7b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bacdch3y.js";import"./Table-odfQbrMk.js";import"./index-hYlZ2w7K.js";import"./Dialog-BNIro01J.js";import"./cross-DMNj6xwh.js";import"./svgIconContainer-BHVYL7Dt.js";import"./useBaseUiId-QDvzqdbv.js";import"./InternalBackdrop-BaUHehEq.js";import"./composite-Cv9S1-0v.js";import"./index-DlC_w9JR.js";import"./index-DuJ2F_r3.js";import"./index-DtRvjs5i.js";import"./useEventCallback-BVDE2vxg.js";import"./SkeletonBar-Drw_WsxT.js";import"./LoadingCell-DBUN3W3b.js";import"./ColumnConfigDialog-Bj6EY7Df.js";import"./DraggableList-BuXt7WoE.js";import"./search-CbjmGrOZ.js";import"./Input-C8T687yb.js";import"./useControlled-DMuhh4MF.js";import"./Button-DKxF8-HR.js";import"./small-cross-BY_zS1NT.js";import"./ActionButton-T9I7pXx-.js";import"./Checkbox-FUVkSfEp.js";import"./useValueChanged-8c_54rdl.js";import"./CollapsiblePanel-GO-pTe1W.js";import"./MultiColumnSortDialog-D_N1NvYX.js";import"./MenuTrigger-CTZ1Irxn.js";import"./CompositeItem-CHl5HG0C.js";import"./ToolbarRootContext-DfzKIhjA.js";import"./getDisabledMountTransitionStyles-Bh1xaRIU.js";import"./getPseudoElementBounds-In6m9mGL.js";import"./chevron-down-BXQTBdLk.js";import"./index-DIWs-l-i.js";import"./error-BmtsW4Hj.js";import"./BaseCbacBanner-DaEeqfC1.js";import"./makeExternalStore-CZWRqldg.js";import"./Tooltip-Cg9LbpYA.js";import"./PopoverPopup-DEFTS9RR.js";import"./debounce-Dw-OFY0_.js";import"./useOsdkClient-DeyorYS6.js";import"./tick-Cx8bHHej.js";import"./DropdownField-BGwjtvIi.js";import"./isEqual-CVAqa5cj.js";import"./withOsdkMetrics-BOeNno_q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
