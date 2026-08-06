import{f as p,j as e}from"./iframe-DHvAViPR.js";import{O as i}from"./object-table-D-9flvkC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dr0qt1Io.js";import"./Table-FpwJusy2.js";import"./index-Bu8HbTmD.js";import"./Dialog-CW9JkQdy.js";import"./cross-jMdHsiQa.js";import"./svgIconContainer-DlMS91CX.js";import"./useBaseUiId-DC8JngT2.js";import"./InternalBackdrop-DocgtOsD.js";import"./composite-BqPomtbs.js";import"./index-C-uf0j7T.js";import"./index-BK9f1euG.js";import"./index-C0SFg9My.js";import"./useEventCallback-Mkp6eG4i.js";import"./SkeletonBar-CWpkfD4i.js";import"./LoadingCell-zT2gHZcw.js";import"./ColumnConfigDialog-BtvhjzuN.js";import"./DraggableList-CSoZ-IJ0.js";import"./search-CslhogKf.js";import"./Input-BahMzRfS.js";import"./useControlled-DhJY5-ob.js";import"./isEqual-BF6ez8mI.js";import"./isObject-DN-_A1Sa.js";import"./Button-CRVZcrRv.js";import"./ActionButton-C21ouRUL.js";import"./Checkbox-DwtHAgLP.js";import"./useValueChanged-BPn_zts2.js";import"./CollapsiblePanel-oahSC77k.js";import"./MultiColumnSortDialog-CCYfQtt4.js";import"./MenuTrigger-BS7gNlfS.js";import"./CompositeItem-DFHh1YHK.js";import"./ToolbarRootContext-D6av5NKs.js";import"./getDisabledMountTransitionStyles-Cm1DkgqH.js";import"./getPseudoElementBounds-BVHhalps.js";import"./chevron-down-m5ZtkVRt.js";import"./index-CFJ8T4c9.js";import"./error-ChBbUgez.js";import"./BaseCbacBanner-Dp4nf7jM.js";import"./makeExternalStore-hiekBPtY.js";import"./Tooltip-D-DaL636.js";import"./PopoverPopup-CQo59VTy.js";import"./toNumber-DrkGwxOv.js";import"./useOsdkClient-CHv6FTUh.js";import"./tick-CdE1sA9u.js";import"./DropdownField-KeSCUBSh.js";import"./withOsdkMetrics-CU3cEKz5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
