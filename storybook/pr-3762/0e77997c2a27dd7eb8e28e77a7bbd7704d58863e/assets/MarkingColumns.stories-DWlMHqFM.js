import{f as p,j as e}from"./iframe-Dtkqspnq.js";import{O as i}from"./object-table-DiHqFcSM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMjwTO2l.js";import"./Table-DI_lBPB0.js";import"./index-O6kMzL-B.js";import"./Dialog-BxJLX5gJ.js";import"./cross-RSYUfYNl.js";import"./svgIconContainer-7kIDCLLr.js";import"./useBaseUiId-BA2Wb1vw.js";import"./InternalBackdrop-BuFxK96J.js";import"./composite-C43fxzlr.js";import"./index-BK1pEJ_2.js";import"./index-DnTpAg1q.js";import"./index-CNSyaydD.js";import"./useEventCallback-CdXupzoB.js";import"./SkeletonBar-C9wlHxAM.js";import"./LoadingCell-CcqRQaB-.js";import"./ColumnConfigDialog-CzVJq6uj.js";import"./DraggableList-upkd7pkh.js";import"./search-BdsiJdsL.js";import"./Input-BQhqp0i4.js";import"./useControlled-DsSZ6QOu.js";import"./isEqual-flx9m8JW.js";import"./isObject-BWu7U3TW.js";import"./Button-GHfwW4ze.js";import"./ActionButton-BbMkmZ8Y.js";import"./Checkbox-CwYXbW0D.js";import"./useValueChanged-BA9uiMY5.js";import"./CollapsiblePanel-BCuoLOAT.js";import"./MultiColumnSortDialog-Rm7UzozG.js";import"./MenuTrigger-BKQQaiOA.js";import"./CompositeItem-C-3HiIeo.js";import"./ToolbarRootContext-BVt7FkS8.js";import"./getDisabledMountTransitionStyles-BeMvHOSS.js";import"./getPseudoElementBounds-BOhqKyIV.js";import"./chevron-down-Beub6QMI.js";import"./index-BzmK8_eD.js";import"./error-D0-EM7fN.js";import"./BaseCbacBanner-CpEldF-7.js";import"./makeExternalStore-CpwKRFYJ.js";import"./Tooltip-BrhYXS_I.js";import"./PopoverPopup-YNJds1hs.js";import"./toNumber-BWA8ft4y.js";import"./useOsdkClient-Du0uLL2W.js";import"./tick-BZpmxQ9o.js";import"./DropdownField-CFRjAz-l.js";import"./withOsdkMetrics-bTLqPtnq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
