import{j as i}from"./iframe-BCqrjcZp.js";import{O as p}from"./object-table-C_GnPGDg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-pnfQYMrz.js";import"./preload-helper-IP6Q7Lp8.js";import"./Table-C1ZLuF4G.js";import"./index-D0jlJMeY.js";import"./Dialog-CViBcxvF.js";import"./cross-B5B9w1fn.js";import"./svgIconContainer-DwsnB4Bh.js";import"./useBaseUiId-BHV9sQZt.js";import"./InternalBackdrop-CTTwd3gc.js";import"./composite-D7-rpd9b.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./index-DXLbvv5i.js";import"./useEventCallback-CVpAOZ4R.js";import"./SkeletonBar-DCUOzX1s.js";import"./LoadingCell-CJKgeEY6.js";import"./ColumnConfigDialog-5BjgoD7j.js";import"./DraggableList-ghEwlwg0.js";import"./search-uqqKBKCA.js";import"./Input-CuKouNDL.js";import"./useControlled-Bzb-P5Sw.js";import"./Button-u7PTjF0v.js";import"./small-cross-uBxq7RBA.js";import"./ActionButton-BeKm1dws.js";import"./Checkbox--_dd5ccs.js";import"./useValueChanged-Xw3hkMdy.js";import"./CollapsiblePanel-jE2vmdzP.js";import"./MultiColumnSortDialog-DVas1kCG.js";import"./MenuTrigger-C0DYfKbf.js";import"./CompositeItem-CI0_kgLB.js";import"./ToolbarRootContext-gONCPNww.js";import"./getDisabledMountTransitionStyles-fk6vko0H.js";import"./getPseudoElementBounds-BFSuywVY.js";import"./chevron-down-ClwDZxr-.js";import"./index-C-VgWq2f.js";import"./error--BdktMRw.js";import"./BaseCbacBanner-C-Bmu30y.js";import"./makeExternalStore-IQ_ZHFEU.js";import"./Tooltip-BZ1-8qFM.js";import"./PopoverPopup-lQJBNDjd.js";import"./debounce-KOiwrhH1.js";import"./useOsdkClient-DPRWmwVD.js";import"./tick-Mmlb1_fs.js";import"./DropdownField-DR9iVX7L.js";import"./isEqual-Bdex3d6x.js";import"./withOsdkMetrics-C5LHIkEx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
