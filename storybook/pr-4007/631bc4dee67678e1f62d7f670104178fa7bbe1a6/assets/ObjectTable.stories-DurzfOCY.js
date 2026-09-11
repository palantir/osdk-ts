import{j as i}from"./iframe-BU8GFPxQ.js";import{O as p}from"./object-table-WiGfrNuV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-oFTA3jn0.js";import"./preload-helper-BSSMxuAV.js";import"./Table-_iLj8Rwt.js";import"./index-Bj-f6_Qj.js";import"./Dialog-BRZ_Mhxt.js";import"./cross-DWZb8fnb.js";import"./svgIconContainer-TGaOK_qc.js";import"./useBaseUiId-BwjQR-o4.js";import"./InternalBackdrop-4G36EFVK.js";import"./composite-Boe3qmtr.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./index-C_kynsOY.js";import"./useEventCallback-DG6Athm7.js";import"./SkeletonBar-CPA8YoA_.js";import"./LoadingCell-xe8P1haw.js";import"./ColumnConfigDialog-BFPCLBzz.js";import"./DraggableList-DseQHdl8.js";import"./search-BzzxBGZs.js";import"./Input-BKDA3F0b.js";import"./useControlled-D1XH3a1Z.js";import"./Button-BVSo85zW.js";import"./small-cross-ByWRQaND.js";import"./ActionButton-DwMdzrCh.js";import"./Checkbox-JGOrpztY.js";import"./useValueChanged-DEn3Bp16.js";import"./CollapsiblePanel-DvEibyNb.js";import"./MultiColumnSortDialog-D8RzlB43.js";import"./MenuTrigger-wpqOhd9z.js";import"./CompositeItem-CKxdCuih.js";import"./ToolbarRootContext-C_zt0aic.js";import"./getDisabledMountTransitionStyles-DdQ32HlV.js";import"./getPseudoElementBounds-CVkJL-hX.js";import"./chevron-down-Cmk3gaNN.js";import"./index-DzgdnyuN.js";import"./error-DmWc08dY.js";import"./BaseCbacBanner-DDbqCS2g.js";import"./makeExternalStore-BQ9uq3hP.js";import"./Tooltip-_KniFWIt.js";import"./PopoverPopup-DzgCN5FT.js";import"./debounce-CEAcWSfb.js";import"./useOsdkClient-CxUbeAk0.js";import"./tick-p7Xjilvh.js";import"./DropdownField-B8coeO1y.js";import"./isEqual-trZ89Cy7.js";import"./withOsdkMetrics-NEaJKOCO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
