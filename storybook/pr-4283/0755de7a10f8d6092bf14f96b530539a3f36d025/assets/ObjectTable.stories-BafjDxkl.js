import{j as i}from"./iframe-Dnji8ErS.js";import{O as p}from"./object-table-BcZuD4QU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_235m5MS.js";import"./preload-helper-DBdP8Q4o.js";import"./Table-B3iD-gZe.js";import"./index-BNoiE65C.js";import"./Dialog-C-SVK6-Y.js";import"./cross-BWKDw-8_.js";import"./svgIconContainer-B0znNA-B.js";import"./useBaseUiId-ScNjevUP.js";import"./InternalBackdrop-9jtE3fb7.js";import"./composite-Bo0dFacb.js";import"./index-Calwhz4q.js";import"./index-BVgNOwgs.js";import"./index-Bka3S9OK.js";import"./useEventCallback-56O3ZT4v.js";import"./SkeletonBar-gGwHwvfg.js";import"./LoadingCell-DEtBbjKP.js";import"./ColumnConfigDialog-D2x2SSdm.js";import"./DraggableList-Cm9hxWQ5.js";import"./search-C5sdVGIt.js";import"./Input-DyynrLgV.js";import"./useControlled-DmavZ4hp.js";import"./Button-D-1VZnj-.js";import"./small-cross-wM2Fg1Ze.js";import"./ActionButton-B5ftVOcR.js";import"./Checkbox-IsH8M5rS.js";import"./useValueChanged-GZrrpvDZ.js";import"./CollapsiblePanel-BYjZCBYa.js";import"./MultiColumnSortDialog-CYJMBYTR.js";import"./MenuTrigger-oZZDVCJq.js";import"./CompositeItem-YgQK4Acr.js";import"./ToolbarRootContext-BPwepJKC.js";import"./getDisabledMountTransitionStyles-DeZ02XBV.js";import"./getPseudoElementBounds-C5houf6l.js";import"./chevron-down-r7E6FDSt.js";import"./index-Cj0RyZw2.js";import"./error-CpTRDjda.js";import"./BaseCbacBanner-C1c3Q8Aj.js";import"./makeExternalStore-BNNlgyK5.js";import"./Tooltip-DMaI5dDd.js";import"./PopoverPopup-DmROoIcA.js";import"./debounce-BAxkMmEn.js";import"./useOsdkClient-CR7GyxlC.js";import"./tick-PvaRxYp4.js";import"./DropdownField-Lc5xugId.js";import"./isEqual-B5K4ZASA.js";import"./withOsdkMetrics-DdDqJJvP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
