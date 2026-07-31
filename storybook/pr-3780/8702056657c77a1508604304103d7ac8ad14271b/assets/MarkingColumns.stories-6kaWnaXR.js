import{f as p,j as e}from"./iframe-DqIzSpCg.js";import{O as i}from"./object-table-Do_2Ejyo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-R5GmqVN8.js";import"./Table-D6CCjywu.js";import"./index-BrnybYQf.js";import"./Dialog-DDIOlKE9.js";import"./cross-Dc0LE15P.js";import"./svgIconContainer-Ob4Yg7Br.js";import"./useBaseUiId-Cqtekamh.js";import"./InternalBackdrop-DF9hbMsT.js";import"./composite-Df5qJXaR.js";import"./index-CH70aXwo.js";import"./index-DGMFLn0J.js";import"./index-CCNyIM8K.js";import"./useEventCallback-DYWUko3K.js";import"./SkeletonBar-CyTTvGgo.js";import"./LoadingCell-C9XMvKrd.js";import"./ColumnConfigDialog-DCxhbfI-.js";import"./DraggableList-Bcc5zRpi.js";import"./search-DOaKOXdE.js";import"./Input-C954CXtm.js";import"./useControlled-C3eA8reA.js";import"./isEqual-DVg8JjXK.js";import"./isObject-CBRil1Wa.js";import"./Button-BKX_91Hc.js";import"./ActionButton-CCx9U4EV.js";import"./Checkbox-Dbh2lHby.js";import"./useValueChanged-7uyeyXMu.js";import"./CollapsiblePanel-Dg4ZPYnE.js";import"./MultiColumnSortDialog-1DAoLiFO.js";import"./MenuTrigger-BeMiuhCy.js";import"./CompositeItem-DnElVRNo.js";import"./ToolbarRootContext-yHYhRp3F.js";import"./getDisabledMountTransitionStyles-DjlKcSP0.js";import"./getPseudoElementBounds-BBHU_0Vc.js";import"./chevron-down-CAfWuvJU.js";import"./index-DXjCR0SH.js";import"./error-DqiHWIhs.js";import"./BaseCbacBanner-DUUuC9t3.js";import"./makeExternalStore-C1J_4LFW.js";import"./Tooltip-OEq8UMF_.js";import"./PopoverPopup-XqcHPyvv.js";import"./toNumber-BDgQ8gPM.js";import"./useOsdkClient-Mj2L1f2j.js";import"./tick-BbdGReRZ.js";import"./DropdownField-DCl53iKj.js";import"./withOsdkMetrics-toCmYVYF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
