import{j as i}from"./iframe-Cudgp9Yf.js";import{O as p}from"./object-table-CppCACw-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1ZRTQxsb.js";import"./preload-helper-4hrz9kvN.js";import"./Table-Cl3DbiIH.js";import"./index-81BYSLtR.js";import"./Dialog-940Ccla2.js";import"./cross-revkGSiW.js";import"./svgIconContainer-DHLyM821.js";import"./useBaseUiId-XTaLWo4v.js";import"./InternalBackdrop-DxBXy5tl.js";import"./composite-Cva0Dc4a.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./index-HepSRimU.js";import"./useEventCallback-DzHSKCot.js";import"./SkeletonBar-yGKH_f6h.js";import"./LoadingCell-Cj-LC_sA.js";import"./ColumnConfigDialog-NrJmvS8r.js";import"./DraggableList-0VYER9jf.js";import"./search-D0hS-0xo.js";import"./Input-Bh8eu1mD.js";import"./useControlled-CwtIgUOg.js";import"./Button-tVyqWp8F.js";import"./small-cross-ChbJVPJX.js";import"./ActionButton-Du3E86TK.js";import"./Checkbox-j-a3CiYd.js";import"./useValueChanged-CUGYJ1mb.js";import"./CollapsiblePanel-D77NNtaO.js";import"./MultiColumnSortDialog-ChhiEUPX.js";import"./MenuTrigger-BMd3jK89.js";import"./CompositeItem-DmRElDN_.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./getDisabledMountTransitionStyles-55j4z-MY.js";import"./getPseudoElementBounds-DtfdtuS3.js";import"./chevron-down-DyPkH6YY.js";import"./index-Tl8UCzrU.js";import"./error-I8BNM1L0.js";import"./BaseCbacBanner-D1UIM2bR.js";import"./makeExternalStore-DJw3BgKy.js";import"./Tooltip-BxRrglwZ.js";import"./PopoverPopup-LJZGYOwd.js";import"./debounce-Crn7KrL-.js";import"./useOsdkClient-zsU2AVrV.js";import"./tick-C8BQHCqe.js";import"./DropdownField-CSgsAkCS.js";import"./isEqual-Cmzyg9o0.js";import"./withOsdkMetrics-BT2RZEDY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
