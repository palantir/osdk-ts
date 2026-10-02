import{j as i}from"./iframe-BolfAo4P.js";import{O as p}from"./object-table-CGzR-sbg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6fnLY55.js";import"./preload-helper-ByLp_rEH.js";import"./Table-BEqc_WR2.js";import"./index-Dmp4oRqW.js";import"./Dialog-CZoZOnFW.js";import"./cross-CPB91upb.js";import"./svgIconContainer-zqDwx0Og.js";import"./useBaseUiId-DvZ-ac1w.js";import"./InternalBackdrop-DZT8OdtD.js";import"./composite-kotVvYj1.js";import"./index-Bt9kKuNp.js";import"./index-Cea80THD.js";import"./index-D4xBMDlg.js";import"./useEventCallback-CGEex2j7.js";import"./SkeletonBar-DUdd9eS6.js";import"./LoadingCell-Fz4GYLYB.js";import"./ColumnConfigDialog-D_o0xYK3.js";import"./DraggableList-BmC77OFq.js";import"./search-Sp-9ghy3.js";import"./Input-DnQW0UEK.js";import"./useControlled-C5FT7OgD.js";import"./Button-D-ABdEsl.js";import"./small-cross-CxRkjASt.js";import"./ActionButton-duX_H6Q1.js";import"./Checkbox-BzfUZdq-.js";import"./useValueChanged-DaE8aoFn.js";import"./CollapsiblePanel-CpsBsEMc.js";import"./MultiColumnSortDialog-DAhtncQF.js";import"./MenuTrigger-kv8wd5CF.js";import"./CompositeItem-BQgJHL6C.js";import"./ToolbarRootContext-Dsfyi3tb.js";import"./getDisabledMountTransitionStyles-D2DQ87Q4.js";import"./getPseudoElementBounds-JSG5w0o1.js";import"./chevron-down-Bj7fILeX.js";import"./index-DXDGkGFP.js";import"./error-Dnl49oZI.js";import"./BaseCbacBanner-BMamh7k1.js";import"./makeExternalStore-B6jLw3hY.js";import"./Tooltip-SA4YBfEO.js";import"./PopoverPopup-CE-WFncL.js";import"./debounce-B4mSXpkc.js";import"./useOsdkClient-BZmtEJhW.js";import"./tick-CY1tZTIW.js";import"./DropdownField-1RfM4rou.js";import"./isEqual-r9e_6t0W.js";import"./withOsdkMetrics-DkkczEbv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
