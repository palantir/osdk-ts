import{j as i}from"./iframe-CTnfI1fn.js";import{O as p}from"./object-table-aPMHD6ZO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5dLgo27.js";import"./preload-helper-C5m-DnEx.js";import"./Table-hnAuiZx8.js";import"./index-BPrym6Kl.js";import"./Dialog-Bx4nD03L.js";import"./cross-D4HJDRmD.js";import"./svgIconContainer-BFETNtyc.js";import"./useBaseUiId-BSgypfGI.js";import"./InternalBackdrop-Cb5oJ93u.js";import"./composite-DP5BYXI_.js";import"./index-Tcjlr1Xh.js";import"./index-CSivwcG6.js";import"./index-Cvpf7HGY.js";import"./useEventCallback-CksauH-9.js";import"./SkeletonBar-diFfA6Py.js";import"./LoadingCell-BmwSsxYg.js";import"./ColumnConfigDialog-CR3rWsRi.js";import"./DraggableList-DTswv5-B.js";import"./search-C2q7wa1q.js";import"./Input-CpteBLrp.js";import"./useControlled-CBc9j59P.js";import"./Button-s38-kdWV.js";import"./small-cross-BdeJKm8T.js";import"./ActionButton-C3UfynQH.js";import"./Checkbox-BWBu_T2r.js";import"./useValueChanged-Dc0ezk3N.js";import"./CollapsiblePanel-2oxc_ptb.js";import"./MultiColumnSortDialog-DjIlGeDq.js";import"./MenuTrigger-DiFKGoMt.js";import"./CompositeItem-CS9C2Hpj.js";import"./ToolbarRootContext-BdrEzidw.js";import"./getDisabledMountTransitionStyles-BCsy3609.js";import"./getPseudoElementBounds-wqeFSaKd.js";import"./chevron-down-BKx-E6vn.js";import"./index-B3Orgk-A.js";import"./error-BZ1221iV.js";import"./BaseCbacBanner-BTKdSCqU.js";import"./makeExternalStore-DBGKNZLc.js";import"./Tooltip-CTQxiSY6.js";import"./PopoverPopup-Ct9yt3c3.js";import"./debounce-5bVA-BgV.js";import"./useOsdkClient-O7Mj-qAw.js";import"./tick-CoLyb-AK.js";import"./DropdownField-DE73NP0s.js";import"./isEqual-D-f_j2hI.js";import"./withOsdkMetrics-BxNR9pg9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
