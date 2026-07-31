import{f as p,j as e}from"./iframe-CMhwc6yu.js";import{O as i}from"./object-table-Rq5DxrG4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CbbeoF4N.js";import"./Table-DRQCyrCZ.js";import"./index-C2NWml_0.js";import"./Dialog-D-n2VjII.js";import"./cross-CI2EuVLe.js";import"./svgIconContainer-Do_XH38C.js";import"./useBaseUiId-C-AKSjpe.js";import"./InternalBackdrop-YttCJD5R.js";import"./composite-BeSuuE0r.js";import"./index-CLTQ2YZZ.js";import"./index-CYf-jFq0.js";import"./index-CcLC40Dq.js";import"./useEventCallback-Duz16abh.js";import"./SkeletonBar-Bbh35rlF.js";import"./LoadingCell-CFWKBMe3.js";import"./ColumnConfigDialog-CzL28oxe.js";import"./DraggableList-MH7eKqEF.js";import"./search-BYZu81Ts.js";import"./Input-7eUEZAd2.js";import"./useControlled-MLlvuDBf.js";import"./isEqual-xtw4nyWu.js";import"./isObject-nzaBmHWQ.js";import"./Button-CE_QE-eV.js";import"./ActionButton-CPnmehQy.js";import"./Checkbox-8RIdGXXF.js";import"./useValueChanged-cQhh4GcD.js";import"./CollapsiblePanel-EqTeVic5.js";import"./MultiColumnSortDialog-BYxVW7s0.js";import"./MenuTrigger-Bvljeq7z.js";import"./CompositeItem-C5Pf2lIH.js";import"./ToolbarRootContext-otfQj27w.js";import"./getDisabledMountTransitionStyles-pTrQZdF3.js";import"./getPseudoElementBounds-DQ39mZJs.js";import"./chevron-down-B9twCniC.js";import"./index-DCQ6MC0R.js";import"./error-DiGCKWWT.js";import"./BaseCbacBanner-Ci7fn3Ji.js";import"./makeExternalStore-Cd3U3q8T.js";import"./Tooltip-CfcrXACM.js";import"./PopoverPopup-DMZFfjT6.js";import"./toNumber-qPcxCkKr.js";import"./useOsdkClient-BAYVrfgb.js";import"./tick-CTaHT6NZ.js";import"./DropdownField-B2438tnE.js";import"./withOsdkMetrics-C7tthBfr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
