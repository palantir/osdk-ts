import{j as i}from"./iframe-DPxX1jR-.js";import{O as p}from"./object-table-6p4neQQt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BQyVZFza.js";import"./preload-helper-Bl3woUlG.js";import"./Table-DQT7xoCm.js";import"./index-D6OGPiBG.js";import"./Dialog-DfzPTpFX.js";import"./cross-BO6SlDqo.js";import"./svgIconContainer-DQ5sgBjC.js";import"./useBaseUiId-BKCJofKJ.js";import"./InternalBackdrop-BDTL8dMK.js";import"./composite-BcAnYQh9.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./index-DSDqA_Ss.js";import"./useEventCallback-Bvjybx93.js";import"./SkeletonBar-BGjKDv0N.js";import"./LoadingCell-BPcqwqea.js";import"./ColumnConfigDialog-BMebv_uz.js";import"./DraggableList-BEhiYx7J.js";import"./search-B5aBIEi3.js";import"./Input-DFF83YG7.js";import"./useControlled-C7cllYbm.js";import"./Button-DQXd7O9l.js";import"./small-cross-BDDqqJMU.js";import"./ActionButton-1Q3tX4Fy.js";import"./Checkbox-DcG_vN9W.js";import"./useValueChanged-i5EMwMR_.js";import"./CollapsiblePanel-HGrFWplr.js";import"./MultiColumnSortDialog-F8EVd4m9.js";import"./MenuTrigger-CbBbJ5Lv.js";import"./CompositeItem-rTVyKIYC.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./getDisabledMountTransitionStyles-DXbjzshq.js";import"./getPseudoElementBounds-CjxlBCdr.js";import"./chevron-down-DxRPC7K7.js";import"./index-CmhRQ5VM.js";import"./error-ChO0zkiL.js";import"./BaseCbacBanner-R2dfzvOz.js";import"./makeExternalStore-64rcfTGa.js";import"./Tooltip-BOGu4iQx.js";import"./PopoverPopup-BLHlUUDe.js";import"./debounce-DlKAS5ft.js";import"./useOsdkClient-BjyL2cyC.js";import"./tick-CTGvo1gM.js";import"./DropdownField-CpYwJ58e.js";import"./isEqual-CamMyuEt.js";import"./withOsdkMetrics-NcqisCon.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
