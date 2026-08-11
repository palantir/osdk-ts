import{f as p,j as e}from"./iframe-BuOHRKsP.js";import{O as i}from"./object-table-Dh5uZT37.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D55cUpwl.js";import"./Table-4GqQvA83.js";import"./index-BBfXYKOl.js";import"./Dialog-BoyspaYP.js";import"./cross-BRcFo6DS.js";import"./svgIconContainer-Nml_YWLq.js";import"./useBaseUiId-D4iw-mlj.js";import"./InternalBackdrop-BxXZhSIT.js";import"./composite-B1qo73Ui.js";import"./index-DfhwtYnd.js";import"./index-l9rhgyQ3.js";import"./index-BuDougKq.js";import"./useEventCallback-_FbLDc9d.js";import"./SkeletonBar-8IqkC77G.js";import"./LoadingCell-lHm284pn.js";import"./ColumnConfigDialog-4l9xpm6q.js";import"./DraggableList-DkZp2fJx.js";import"./search-BuBL3EQ9.js";import"./Input-DcZ1PnWt.js";import"./useControlled-bWISvX2W.js";import"./isEqual-B8V58-SC.js";import"./isObject-Cxa4M8A5.js";import"./Button-DaTxS74m.js";import"./ActionButton-BIw-HXWG.js";import"./Checkbox-xauC_CBS.js";import"./useValueChanged-fHZRy_TU.js";import"./CollapsiblePanel-BFq7mLRQ.js";import"./MultiColumnSortDialog-Cm1NN1Vr.js";import"./MenuTrigger-B7e8WWT3.js";import"./CompositeItem-CaeozsZB.js";import"./ToolbarRootContext-Cs3xyXej.js";import"./getDisabledMountTransitionStyles-LZAqiDzF.js";import"./getPseudoElementBounds-gD1Rdf0Y.js";import"./chevron-down-CxHFRpwG.js";import"./index-DrlXNLRO.js";import"./error-BSxgzHvg.js";import"./BaseCbacBanner-KeqlOfhu.js";import"./makeExternalStore-DTc4l4C7.js";import"./Tooltip-jkjAhTBw.js";import"./PopoverPopup-CAaSEamS.js";import"./toNumber-CBd-AFVs.js";import"./useOsdkClient-DaTm5Mi6.js";import"./tick-j8abGY1t.js";import"./DropdownField-DOyDaEa4.js";import"./withOsdkMetrics-DZ1nPowA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
