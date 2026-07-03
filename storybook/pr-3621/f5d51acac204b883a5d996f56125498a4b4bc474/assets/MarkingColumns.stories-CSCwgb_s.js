import{f as n,j as t}from"./iframe-BOrZOH79.js";import{O as p}from"./object-table-BKhTZ8XJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-khfNwF8y.js";import"./Table-CLUMteGc.js";import"./index-OpS2NLnD.js";import"./Dialog-BB-ng3Qq.js";import"./cross-UxVdD4yY.js";import"./svgIconContainer-CMXfsOVq.js";import"./useBaseUiId-DAWJ6vhm.js";import"./InternalBackdrop-DQNwio4F.js";import"./composite-psPfsiUD.js";import"./index-5ZZLI3HR.js";import"./index-C2B3qSMb.js";import"./index-fME3zwc8.js";import"./useEventCallback-BI51UdZj.js";import"./SkeletonBar-BJ5XqHjN.js";import"./LoadingCell-DREhqEET.js";import"./ColumnConfigDialog-Rdh745a6.js";import"./DraggableList-DURk6dzo.js";import"./search-DmJUhD9Z.js";import"./Input-B1DTLM-E.js";import"./useControlled-DPZKFoRo.js";import"./Button-DSYtuHzp.js";import"./small-cross-B0d13u9J.js";import"./ActionButton-BrZwblLZ.js";import"./Checkbox-QBSAxKa0.js";import"./useValueChanged-C2qmLqNd.js";import"./CollapsiblePanel-D0qR1X5j.js";import"./MultiColumnSortDialog-HDdekzKY.js";import"./MenuTrigger-Dg8MzpQB.js";import"./CompositeItem-DvdL8HCm.js";import"./ToolbarRootContext-CHp8HRoD.js";import"./getDisabledMountTransitionStyles-CECLlZZy.js";import"./getPseudoElementBounds-Cs0_irxa.js";import"./chevron-down-CsRdFZuq.js";import"./index-DApebEpM.js";import"./error-DlL9jGSd.js";import"./BaseCbacBanner-nk2-d4Qo.js";import"./makeExternalStore-VMftzzJI.js";import"./Tooltip-0OMe_zhw.js";import"./PopoverPopup-Ch1r-QEU.js";import"./toNumber-DRgKHrQu.js";import"./useOsdkClient-BiL9lcV5.js";import"./tick-CTbRFotW.js";import"./DropdownField-Ddy0ZGQA.js";import"./withOsdkMetrics-DLG4JOdP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
