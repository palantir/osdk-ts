import{f as p,j as e}from"./iframe-BPiQ61NS.js";import{O as i}from"./object-table-Bq7QN1Uu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJQ9k_fi.js";import"./Table-d1_7QzMV.js";import"./index-SZSXhZUW.js";import"./Dialog-C-d_ptLK.js";import"./cross-DvC9490N.js";import"./svgIconContainer-DDtODrDy.js";import"./useBaseUiId-Dvfg6NNH.js";import"./InternalBackdrop-CrULpEtL.js";import"./composite-By-vLfBy.js";import"./index-CqBvzeKE.js";import"./index-D5i89T0j.js";import"./index-oOO_dSqv.js";import"./useEventCallback-CFvCFGlh.js";import"./SkeletonBar-CpQYO9AF.js";import"./LoadingCell-tT8C8wuQ.js";import"./ColumnConfigDialog-DyiuPB9j.js";import"./DraggableList-BhWLwxlx.js";import"./search-C6hujKpf.js";import"./Input-DiYsbwYq.js";import"./useControlled-BltYGfw_.js";import"./isEqual-CmhzN_Hp.js";import"./isObject-5vLlkjFm.js";import"./Button-DJAQG-pE.js";import"./ActionButton-B16P-sif.js";import"./Checkbox-xDmEWHzv.js";import"./useValueChanged-BkjTAh5F.js";import"./CollapsiblePanel-D7dt4F-R.js";import"./MultiColumnSortDialog-Cw2ylYQt.js";import"./MenuTrigger-D9u0Vx_S.js";import"./CompositeItem-BsWK_ELB.js";import"./ToolbarRootContext-CXU6ndfp.js";import"./getDisabledMountTransitionStyles-PRz0u1s8.js";import"./getPseudoElementBounds-BCfH95-P.js";import"./chevron-down-gsnURcSJ.js";import"./index-CVebdf2y.js";import"./error-NzoaNWEe.js";import"./BaseCbacBanner-CiLdgRn9.js";import"./makeExternalStore-BNSm35RL.js";import"./Tooltip-CITVKjLr.js";import"./PopoverPopup-CLrei6NE.js";import"./toNumber-By6KbBaB.js";import"./useOsdkClient-P38RMJ1w.js";import"./tick-D0CWLy7V.js";import"./DropdownField-BDvBVq3P.js";import"./withOsdkMetrics-Cl-rqjb5.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
