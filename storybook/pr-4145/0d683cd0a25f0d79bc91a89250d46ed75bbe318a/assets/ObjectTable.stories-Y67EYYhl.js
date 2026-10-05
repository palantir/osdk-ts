import{j as i}from"./iframe-D4DE_xCy.js";import{O as p}from"./object-table-g6VGtRMd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CtXTVDrN.js";import"./preload-helper-B6-3aPT9.js";import"./Table-EWARVZic.js";import"./index-D326T4JO.js";import"./Dialog-BF6fe3fI.js";import"./cross-DXk5c3Hx.js";import"./svgIconContainer-jzN4JDBP.js";import"./useBaseUiId-BXESL0ei.js";import"./InternalBackdrop-LoBq40Ym.js";import"./composite-Dnv2BJfH.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./index-BGyff1g6.js";import"./useEventCallback-Z4zWj0DE.js";import"./SkeletonBar-DOfR0REZ.js";import"./LoadingCell-Cp8Oh-gF.js";import"./ColumnConfigDialog-DmmOy8gz.js";import"./DraggableList-BT3g7YEB.js";import"./search-DMWfSMTs.js";import"./Input-BdkDXHFP.js";import"./useControlled-C35ONjfY.js";import"./Button-ByxF5usp.js";import"./small-cross-CNDGm87l.js";import"./ActionButton-D5oyS5dM.js";import"./Checkbox-BwYysanO.js";import"./useValueChanged-f4hwQLIJ.js";import"./CollapsiblePanel-A6BmXTdr.js";import"./MultiColumnSortDialog-kRefOv0N.js";import"./MenuTrigger-CNPytmAJ.js";import"./CompositeItem-Dl-hENiN.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./getDisabledMountTransitionStyles-BKMXDL5b.js";import"./getPseudoElementBounds-mvlACyB9.js";import"./chevron-down-9HoUrmLz.js";import"./index-CVC749TS.js";import"./error-BbjQgfT9.js";import"./BaseCbacBanner-DrmZ6hu-.js";import"./makeExternalStore-BrutYjE5.js";import"./Tooltip-BR6r3LZL.js";import"./PopoverPopup-s43YRtvQ.js";import"./debounce-zunEXKGq.js";import"./useOsdkClient-Dq4Nep3C.js";import"./tick-BC_4-l9I.js";import"./DropdownField-CN5yaMV7.js";import"./isEqual-Bh_n2tIz.js";import"./withOsdkMetrics-DNRznGfV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
