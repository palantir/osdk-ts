import{f as n,j as t}from"./iframe-B0MCwmkW.js";import{O as p}from"./object-table-BtpaBtxV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cq3bN7Vx.js";import"./Table-BwqtCQHn.js";import"./index-Bi7FIWd1.js";import"./Dialog-DIZdJSB1.js";import"./cross-CIy4OWl3.js";import"./svgIconContainer-DQ53WJpu.js";import"./useBaseUiId-D6ID_Yju.js";import"./InternalBackdrop-Bd1bcJ3S.js";import"./composite-CLS45Qq-.js";import"./index-Cq4S4XWY.js";import"./index-CqeuUbxy.js";import"./index-CGYgL5bS.js";import"./useEventCallback-BSupjknn.js";import"./SkeletonBar-DlMXYPPB.js";import"./LoadingCell-B7QN3S0-.js";import"./ColumnConfigDialog-pDWttExe.js";import"./DraggableList-CHvsLyFF.js";import"./search-1JoZga8z.js";import"./Input-YBOzLXXQ.js";import"./useControlled-CskE57yI.js";import"./Button-CmUOI2AK.js";import"./small-cross-Bf6xfgAx.js";import"./ActionButton-ubY-FSX2.js";import"./Checkbox-DIBhKh6O.js";import"./useValueChanged-CHvP2Czw.js";import"./CollapsiblePanel-D0W420fo.js";import"./MultiColumnSortDialog-DH7enFuT.js";import"./MenuTrigger-CkMOqM77.js";import"./CompositeItem-Dy9OicaG.js";import"./ToolbarRootContext-D44CVp_Y.js";import"./getDisabledMountTransitionStyles-DMnk_fMg.js";import"./getPseudoElementBounds-DeEuEsfF.js";import"./chevron-down-DkUIIRzX.js";import"./index-C5zwgdgr.js";import"./error-CyZzEFi-.js";import"./BaseCbacBanner-CiMhiAHt.js";import"./makeExternalStore-xZ05yvsb.js";import"./Tooltip-CgP62iCZ.js";import"./PopoverPopup-AN33sLDL.js";import"./toNumber-DN16Ahe2.js";import"./useOsdkClient-DGdWfyPH.js";import"./tick-DiWju_md.js";import"./DropdownField-BW5WpuvM.js";import"./withOsdkMetrics-CUc4JKDk.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
