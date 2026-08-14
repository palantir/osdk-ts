import{j as i}from"./iframe-CQ8GnM4F.js";import{O as p}from"./object-table-BPqZt8Xh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cda_Hagl.js";import"./preload-helper-DTHymVTT.js";import"./Table-BqwFxCuG.js";import"./index-D-qb5elk.js";import"./Dialog-BiR9_kSU.js";import"./cross-B-B76LsO.js";import"./svgIconContainer-CFj_QVpE.js";import"./useBaseUiId-DNylri0h.js";import"./InternalBackdrop-Bnpz9z3C.js";import"./composite-D8Op5omk.js";import"./index-CBfM1eTV.js";import"./index-vRbi-hPZ.js";import"./index-CWxTPRvQ.js";import"./useEventCallback-CwBNysST.js";import"./SkeletonBar-Co95I2t2.js";import"./LoadingCell-DWloxnsX.js";import"./ColumnConfigDialog-CruqBtkT.js";import"./DraggableList-QH52Hljs.js";import"./search-BD7N_Px9.js";import"./Input-DxXc3FHJ.js";import"./useControlled-Nzu8rvWU.js";import"./Button-D03uZiM4.js";import"./small-cross-Dd0EKvPu.js";import"./ActionButton-C1IWap4H.js";import"./Checkbox-CG60OHSc.js";import"./useValueChanged--dnQ0E3_.js";import"./CollapsiblePanel-CjOn5bi3.js";import"./MultiColumnSortDialog-CtGjZ3gI.js";import"./MenuTrigger-BkjkPR8E.js";import"./CompositeItem-DUQ-QWk-.js";import"./ToolbarRootContext-Cuym0TD9.js";import"./getDisabledMountTransitionStyles-COIZu6QW.js";import"./getPseudoElementBounds-_QKh0K1T.js";import"./chevron-down-ELLpGOmV.js";import"./index-Il0eZ9cQ.js";import"./error-BTrU7oox.js";import"./BaseCbacBanner-D8j1QTMP.js";import"./makeExternalStore-DtmpZgSb.js";import"./Tooltip-CrdnIALV.js";import"./PopoverPopup-Bw_tKaRO.js";import"./debounce-Drhc6M_Y.js";import"./useOsdkClient-DswCZ-gI.js";import"./tick-YtV6mj8r.js";import"./DropdownField--HKs-g6O.js";import"./isEqual-CfQIWlQk.js";import"./withOsdkMetrics-D2yFydsJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
