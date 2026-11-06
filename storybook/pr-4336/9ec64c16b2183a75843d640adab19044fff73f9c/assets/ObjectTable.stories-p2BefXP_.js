import{j as i}from"./iframe-29gR9XhZ.js";import{O as p}from"./object-table-B_Rv7_z1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CO78ZzgL.js";import"./preload-helper-DlT-mGxO.js";import"./Table-8XFDe7Kt.js";import"./index-CrsEpx0M.js";import"./Dialog-CjGGuHXe.js";import"./cross-CuUhPQxd.js";import"./svgIconContainer-B81IYS8r.js";import"./useBaseUiId-s8FPLP5u.js";import"./InternalBackdrop-BprBEkhL.js";import"./composite-C-osCGVl.js";import"./index-DdlQpJHG.js";import"./index-BVNMC1S5.js";import"./index-Cch7mQ8a.js";import"./useEventCallback-DBhYM9Hy.js";import"./SkeletonBar-C37AZzuf.js";import"./LoadingCell-CwQHZBtp.js";import"./ColumnConfigDialog-aevR0De2.js";import"./DraggableList-D3CO-Yut.js";import"./search-DAxbo9jb.js";import"./Input-5lsFnUBK.js";import"./useControlled-DH4JcH5f.js";import"./Button-DYk_F-qJ.js";import"./small-cross-B-y2x7T0.js";import"./ActionButton-DBsW9PSK.js";import"./Checkbox-DVxcG_YL.js";import"./useValueChanged-B5seCtbl.js";import"./CollapsiblePanel-CQQxgaFT.js";import"./MultiColumnSortDialog-ClDrcpFd.js";import"./MenuTrigger-B8Mb7Vam.js";import"./CompositeItem-7um1p8gd.js";import"./ToolbarRootContext-Vw1tC3hX.js";import"./getDisabledMountTransitionStyles-D9EBmjTC.js";import"./getPseudoElementBounds-BV3Dd7LZ.js";import"./chevron-down-C2ebRgMi.js";import"./index-DG-eMoMu.js";import"./error-C8ioQ8xA.js";import"./BaseCbacBanner-CiBPlSfz.js";import"./makeExternalStore-CAnIClXP.js";import"./Tooltip-BXN6Rclk.js";import"./PopoverPopup-CIsYphuH.js";import"./debounce-DxHc7Ker.js";import"./useOsdkClient-CwzE6u8u.js";import"./tick-T4_w1PlJ.js";import"./DropdownField-BNL8L0v5.js";import"./isEqual-0bZjIzta.js";import"./withOsdkMetrics-B8queKnp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
