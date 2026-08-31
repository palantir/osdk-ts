import{f as p,j as e}from"./iframe-kjaGychq.js";import{O as i}from"./object-table-DtAOwnvR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl0HOLga.js";import"./Table-yceMqCPQ.js";import"./index-DjgQhnBF.js";import"./Dialog-BqHc_IIV.js";import"./cross-L2jMPbGH.js";import"./svgIconContainer-CspjkWlr.js";import"./useBaseUiId-TjxpSWOe.js";import"./InternalBackdrop-1yzCUhph.js";import"./composite-BkSyEkbC.js";import"./index-D7cO7uk3.js";import"./index-6OM5s4An.js";import"./index-D-NViNaC.js";import"./useEventCallback-C-yX551Y.js";import"./SkeletonBar-BvGzHd7M.js";import"./LoadingCell-CKFEdKpP.js";import"./ColumnConfigDialog-CF8ehKcw.js";import"./DraggableList-CFUKHjHh.js";import"./search-CQrDhBIK.js";import"./Input-DVuwFRa1.js";import"./useControlled-Kf_hbsZS.js";import"./Button-DXRU1CRA.js";import"./small-cross-B0RAbmMl.js";import"./ActionButton-C_0lopXI.js";import"./Checkbox-BKEIWW3F.js";import"./useValueChanged-BMFv-pZ-.js";import"./CollapsiblePanel-DqljYdxc.js";import"./MultiColumnSortDialog-DzsepXD7.js";import"./MenuTrigger-GWXScTdU.js";import"./CompositeItem-HSXuyywu.js";import"./ToolbarRootContext-C2zyjXkq.js";import"./getDisabledMountTransitionStyles-DWY7W2-l.js";import"./getPseudoElementBounds-CuiFjfC9.js";import"./chevron-down-CgpyX1i1.js";import"./index-CYDXmlsy.js";import"./error-DkyVF_rd.js";import"./BaseCbacBanner-C9-Woo9C.js";import"./makeExternalStore-DIRQhbnc.js";import"./Tooltip-BwAGqb-f.js";import"./PopoverPopup-Dx6lE3v2.js";import"./debounce-CIETSCiW.js";import"./useOsdkClient-C_JMrZ9l.js";import"./tick-Ce83b2nO.js";import"./DropdownField-6291IN6f.js";import"./isEqual-BNwwKxjx.js";import"./withOsdkMetrics-Dj5RKdqB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
