import{j as i}from"./iframe-BrJtcpJ-.js";import{O as p}from"./object-table-Ba60e5pC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRcPkV8B.js";import"./preload-helper-CuoRPrGF.js";import"./Table-fr9x0s6y.js";import"./index-nkhoJcGd.js";import"./Dialog-Co9LnxK1.js";import"./cross-d8c80yU_.js";import"./svgIconContainer-DQxuiyDQ.js";import"./useBaseUiId-DFIfo0ZP.js";import"./InternalBackdrop-BbxmA2T7.js";import"./composite-C-pSriHc.js";import"./index-Dwk1Vkcl.js";import"./index-B5ZK0sbN.js";import"./index-D5JNcTNh.js";import"./useEventCallback-DoXYXLX5.js";import"./SkeletonBar-0Ro5ifVl.js";import"./LoadingCell-DmlDNf3u.js";import"./ColumnConfigDialog-v5___XS0.js";import"./DraggableList-DwFdvBiU.js";import"./search-X8eqGfVO.js";import"./Input-DAryto7C.js";import"./useControlled-Cd1hGYJl.js";import"./Button-DcuDiaTG.js";import"./small-cross-9wqnQkm4.js";import"./ActionButton-BDrruohV.js";import"./Checkbox-H76Gvg_o.js";import"./useValueChanged-C292XOMb.js";import"./CollapsiblePanel-hSjEACXk.js";import"./MultiColumnSortDialog-wsRq_6Fi.js";import"./MenuTrigger-DNY3kAMg.js";import"./CompositeItem-wSMz-Esy.js";import"./ToolbarRootContext-EqViDiBL.js";import"./getDisabledMountTransitionStyles-BjBvYd21.js";import"./getPseudoElementBounds-DUnOVe2o.js";import"./chevron-down-CoN2lN4l.js";import"./index-CfmHUnMx.js";import"./error-DVsSmDYx.js";import"./BaseCbacBanner-B-GEVUFt.js";import"./makeExternalStore-DiNYJVVJ.js";import"./Tooltip-W6ksbOeG.js";import"./PopoverPopup-D-7Tgy13.js";import"./debounce-DAXxoF40.js";import"./useOsdkClient-dk5-s00y.js";import"./tick-B2A_YE_w.js";import"./DropdownField-BIwUeAD-.js";import"./isEqual-AUI3jiRn.js";import"./withOsdkMetrics-DpnTSy7T.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
