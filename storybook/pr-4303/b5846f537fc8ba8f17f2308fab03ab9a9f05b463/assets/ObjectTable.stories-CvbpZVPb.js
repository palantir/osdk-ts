import{j as i}from"./iframe-gvVvTYdX.js";import{O as p}from"./object-table-DFjBN_se.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CgY_xdYl.js";import"./preload-helper-C4B8pL_K.js";import"./Table-1Rz47czG.js";import"./index-BKV8xI6r.js";import"./Dialog-DBoNWch_.js";import"./cross-DXV_E_3w.js";import"./svgIconContainer-CbGtxYsB.js";import"./useBaseUiId-fY3jSIio.js";import"./InternalBackdrop-CNqwZwO_.js";import"./composite-U12YfSVj.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./index-DCXWz-bU.js";import"./useEventCallback-DfimSMM1.js";import"./SkeletonBar-CVnxkGMs.js";import"./LoadingCell-DpBxHhHx.js";import"./ColumnConfigDialog-CWwBUXFN.js";import"./DraggableList-qN4wxLC1.js";import"./search-BpBkWvYy.js";import"./Input-B5s_ufnw.js";import"./useControlled-Cz01Hj64.js";import"./Button-CM6iPOlW.js";import"./small-cross-BV4qub4t.js";import"./ActionButton-BgSv7ShY.js";import"./Checkbox-DYgYeeFL.js";import"./useValueChanged-C3nivXet.js";import"./CollapsiblePanel-nOE5zCVh.js";import"./MultiColumnSortDialog-BdNNmNBG.js";import"./MenuTrigger-Q0BQc2_7.js";import"./CompositeItem-Ceyb7lxq.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./getDisabledMountTransitionStyles-By9d2gS-.js";import"./getPseudoElementBounds-VG4Ji2N1.js";import"./chevron-down-DNhCoDCr.js";import"./index-Ct7dCOO5.js";import"./error-oahmhnhI.js";import"./BaseCbacBanner-D7bzuDy6.js";import"./makeExternalStore-eDqNkvsc.js";import"./Tooltip-gD2N15mM.js";import"./PopoverPopup-BLoCic10.js";import"./debounce-NgHrS01x.js";import"./useOsdkClient-Bxmva0H0.js";import"./tick-DcPidvDM.js";import"./DropdownField-CySas3qf.js";import"./isEqual-DTkPEdjj.js";import"./withOsdkMetrics-DQiolCAA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
