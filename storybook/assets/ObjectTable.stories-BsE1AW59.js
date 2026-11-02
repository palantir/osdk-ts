import{j as i}from"./iframe-Chczgz1L.js";import{O as p}from"./object-table-Bxdzz0hQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFZuJWVk.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dse16TU5.js";import"./index-B9rruesR.js";import"./Dialog-BbtwTc0C.js";import"./cross-BNk5cXgp.js";import"./svgIconContainer-1jnQ2eo6.js";import"./useBaseUiId-BKJ7O9Ur.js";import"./InternalBackdrop-B43ScOJk.js";import"./composite-B4QMOHJZ.js";import"./index-Bt7ugu0N.js";import"./index-Dre7KrbC.js";import"./index-C3YdOJBa.js";import"./useEventCallback-iA9Hkw4u.js";import"./SkeletonBar-ygOk5JN2.js";import"./LoadingCell-DQtzbn-T.js";import"./ColumnConfigDialog-CMVJNphW.js";import"./DraggableList-DYyl4oJS.js";import"./search-wmopA8Vh.js";import"./Input-D4C3JvNi.js";import"./useControlled-BC2wgxgm.js";import"./Button-DeWrzdot.js";import"./small-cross-C5CmaSnd.js";import"./ActionButton-CZnKDqRc.js";import"./Checkbox-DgnWFNdK.js";import"./useValueChanged-BPFB-1jm.js";import"./CollapsiblePanel-MP_8oHdu.js";import"./MultiColumnSortDialog-Ca2t4niR.js";import"./MenuTrigger-DgS4uFoV.js";import"./CompositeItem-DywVVkGM.js";import"./ToolbarRootContext-BtrjEFZW.js";import"./getDisabledMountTransitionStyles-DNM4KQ8Z.js";import"./getPseudoElementBounds-kaI3yQ6b.js";import"./chevron-down-Btx-Kyg4.js";import"./index-DUC7giJN.js";import"./error-ChH6XIqA.js";import"./BaseCbacBanner-BhtkZFkf.js";import"./makeExternalStore-BDwYNInw.js";import"./Tooltip-BdxHwWMz.js";import"./PopoverPopup-C55rHfzo.js";import"./debounce-CXpZecUZ.js";import"./useOsdkClient-D5LFzarX.js";import"./tick-CT8h7pmf.js";import"./DropdownField-BuaHdJat.js";import"./isEqual-D5otW-My.js";import"./withOsdkMetrics-C9LJ-x24.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
