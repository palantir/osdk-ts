import{f as p,j as e}from"./iframe-DFLNqEm2.js";import{O as i}from"./object-table-BzCwhrP9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4OJk57-.js";import"./Table-Csirv5fL.js";import"./index-fk_tQ1YC.js";import"./Dialog-CfKlKKmV.js";import"./cross-DMqxAY0f.js";import"./svgIconContainer-5792X2so.js";import"./useBaseUiId-f39Vd-uF.js";import"./InternalBackdrop-DsVJKrRk.js";import"./composite-luK9vRGl.js";import"./index-CA9B81mf.js";import"./index-BJjObxmA.js";import"./index-DEOn4aKD.js";import"./useEventCallback-D63bKoHu.js";import"./SkeletonBar-BOr5ioOf.js";import"./LoadingCell-DPPwvS8w.js";import"./ColumnConfigDialog-aRCbvdi3.js";import"./DraggableList-D3byIqUN.js";import"./search-LoblqU0W.js";import"./Input-CsKqmdcW.js";import"./useControlled-BgQ6tJlm.js";import"./Button-BbpsJ4er.js";import"./small-cross-CBeD8iwS.js";import"./ActionButton-B5J36pLX.js";import"./Checkbox-D53VBo_9.js";import"./useValueChanged-C-TRa-z8.js";import"./CollapsiblePanel-C7HlC61M.js";import"./MultiColumnSortDialog-ATzrXawV.js";import"./MenuTrigger-c_Jrk9MS.js";import"./CompositeItem-DHZAlp7N.js";import"./ToolbarRootContext-CH5CakMV.js";import"./getDisabledMountTransitionStyles-Czp6bpN4.js";import"./getPseudoElementBounds-Br4mtL1e.js";import"./chevron-down-CHUZ5wYq.js";import"./index-j4zmBLn_.js";import"./error-C8Ukd2CZ.js";import"./BaseCbacBanner-BeddFxq4.js";import"./makeExternalStore-Coy-sieI.js";import"./Tooltip-QrcynOTk.js";import"./PopoverPopup-CS5MDXSc.js";import"./debounce-B-uclRIy.js";import"./useOsdkClient-ENy8kaW0.js";import"./tick-DZ_zylkj.js";import"./DropdownField-DhjuDgoz.js";import"./isEqual-BUPfKLFl.js";import"./withOsdkMetrics-BaDAnBzc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
