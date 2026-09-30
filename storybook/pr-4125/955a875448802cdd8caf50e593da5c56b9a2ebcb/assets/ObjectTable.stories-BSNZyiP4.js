import{j as i}from"./iframe-CJUVjq4K.js";import{O as p}from"./object-table-9j7hJKGq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-8t1iR8.js";import"./preload-helper-DSClUnrb.js";import"./Table-BHtfhcbt.js";import"./index-GE7urbEt.js";import"./Dialog-BuLoeA1I.js";import"./cross-B9ZydxGz.js";import"./svgIconContainer-CvZRP5Wc.js";import"./useBaseUiId-CYXUYH1v.js";import"./InternalBackdrop-C3RvedXC.js";import"./composite-DKgrSWPF.js";import"./index-Cy6fVwoK.js";import"./index-Bf3fiI44.js";import"./index-DebWIRa-.js";import"./useEventCallback-BIZx9_-2.js";import"./SkeletonBar-B9k800l5.js";import"./LoadingCell-BMMxeSXI.js";import"./ColumnConfigDialog-D97QBTu9.js";import"./DraggableList-BVcfWvj2.js";import"./search-DE0VchUk.js";import"./Input-CRzIer8e.js";import"./useControlled-CmmcI5hz.js";import"./Button-3MSado4D.js";import"./small-cross-CVDb-HU5.js";import"./ActionButton-DVQysWwt.js";import"./Checkbox-CZkvMdfq.js";import"./useValueChanged-XTKnjh2G.js";import"./CollapsiblePanel-8s1IX430.js";import"./MultiColumnSortDialog-DVQqUNoO.js";import"./MenuTrigger-DuK6ZS-3.js";import"./CompositeItem-Dt49eISw.js";import"./ToolbarRootContext-BC2o7QKp.js";import"./getDisabledMountTransitionStyles-CJ0sEwK5.js";import"./getPseudoElementBounds-5mjFlJzS.js";import"./chevron-down-CQOxC3pu.js";import"./index-CnwddG-W.js";import"./error-Qoo-TgP1.js";import"./BaseCbacBanner-ClYJmr6A.js";import"./makeExternalStore-X814geH6.js";import"./Tooltip-DWTM9fE9.js";import"./PopoverPopup-BSqbMmuQ.js";import"./debounce-Ckmd3QDC.js";import"./useOsdkClient-Bn_kWgls.js";import"./tick-Dnvepkck.js";import"./DropdownField-2TmnJYIn.js";import"./isEqual-CaNBV33-.js";import"./withOsdkMetrics-_5PcUp3d.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
