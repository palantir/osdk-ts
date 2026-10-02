import{f as p,j as e}from"./iframe-UiMnRuuf.js";import{O as i}from"./object-table-BQ_pa8qJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9-KtqjS.js";import"./Table-CdT3G1Lh.js";import"./index-0Ixo6srr.js";import"./Dialog-CKhxJa7-.js";import"./cross-CN0okcjD.js";import"./svgIconContainer-Dm9tYT__.js";import"./useBaseUiId-BENer-r-.js";import"./InternalBackdrop-ETQR7T-n.js";import"./composite-jFy9GvzG.js";import"./index-e-D0c2mh.js";import"./index-DBgZ08g1.js";import"./index-DEITom6T.js";import"./useEventCallback-DXT4fJhK.js";import"./SkeletonBar-Dd8DJhB7.js";import"./LoadingCell-BIgqx3WX.js";import"./ColumnConfigDialog-CieizKEU.js";import"./DraggableList-qRNMWLPj.js";import"./search-Cp4CoIwR.js";import"./Input-CNfnK_9k.js";import"./useControlled-BRDQspVd.js";import"./Button-rRx38Mfg.js";import"./small-cross-R5-Dp5lp.js";import"./ActionButton-DuhhsnPX.js";import"./Checkbox-CY25dkni.js";import"./useValueChanged-DyztBfxc.js";import"./CollapsiblePanel-DFbxjutV.js";import"./MultiColumnSortDialog-B9ctl80s.js";import"./MenuTrigger-7RpD5ZTh.js";import"./CompositeItem-BAINckPf.js";import"./ToolbarRootContext-B5RqdBSK.js";import"./getDisabledMountTransitionStyles-D8Fbf3VT.js";import"./getPseudoElementBounds-DbDKue2D.js";import"./chevron-down-CpxF8NNT.js";import"./index-DHTqVbcd.js";import"./error-Cy2KrzuU.js";import"./BaseCbacBanner-D7i1GiXc.js";import"./makeExternalStore-pWUg2aV2.js";import"./Tooltip-Ci9SwqoQ.js";import"./PopoverPopup-BQIehYyb.js";import"./debounce-CO81sG8W.js";import"./useOsdkClient-BHPGD1cz.js";import"./tick-Cm7cC8fk.js";import"./DropdownField-CWywt0Av.js";import"./isEqual-Chza7bno.js";import"./withOsdkMetrics-D6UjXomb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
