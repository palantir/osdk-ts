import{f as p,j as e}from"./iframe-B3O9T_SG.js";import{O as i}from"./object-table-Cz6Ax0W-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPdbREwC.js";import"./Table-C-NLrUmP.js";import"./index-BwoUB_Qf.js";import"./Dialog-DyxMmZVC.js";import"./cross-Xt_GMyVs.js";import"./svgIconContainer-BPe5aJfR.js";import"./useBaseUiId-BICM1opj.js";import"./InternalBackdrop-BS30d1ux.js";import"./composite-D7y544dA.js";import"./index-CJOOs8zG.js";import"./index-QdBHREHi.js";import"./index-XMttNw81.js";import"./useEventCallback-DigiG9Xr.js";import"./SkeletonBar-uDL8CaFH.js";import"./LoadingCell-DcaOP2yK.js";import"./ColumnConfigDialog-DZPLl2H6.js";import"./DraggableList-BDMD6G6l.js";import"./search-Av7_nbfA.js";import"./Input-Dk0bR2r3.js";import"./useControlled-n7PhTfzO.js";import"./Button-DrW0QaFB.js";import"./small-cross-DK_4FkMK.js";import"./ActionButton-3prn6Dln.js";import"./Checkbox-C_OCS2UT.js";import"./useValueChanged-c0DtYdQL.js";import"./CollapsiblePanel-CM3enrfL.js";import"./MultiColumnSortDialog-BdgyQSSH.js";import"./MenuTrigger-iDnX6M_C.js";import"./CompositeItem-BqJr4Pc-.js";import"./ToolbarRootContext-CmKKFUT-.js";import"./getDisabledMountTransitionStyles-Cq0bqOj0.js";import"./getPseudoElementBounds-DVha8Hx2.js";import"./chevron-down-8HdkIbSK.js";import"./index-CwDIHAhZ.js";import"./error-B1lEKcyy.js";import"./BaseCbacBanner-CrbRG4w5.js";import"./makeExternalStore-DAW5CeGe.js";import"./Tooltip-B-wMuj2p.js";import"./PopoverPopup-BbibQ6TS.js";import"./debounce-D1aWhqSl.js";import"./useOsdkClient-V2N--xWx.js";import"./tick-DYY6YpT9.js";import"./DropdownField-hc9k2JiQ.js";import"./isEqual-CsPWNbb2.js";import"./withOsdkMetrics-DKpBc77k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
