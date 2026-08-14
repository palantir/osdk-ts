import{j as i}from"./iframe-BTO3ph4q.js";import{O as p}from"./object-table-ZtjQh0D1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DcGxTHFL.js";import"./preload-helper-CtN9PVAK.js";import"./Table-D1saxuSL.js";import"./index-x3hFww3S.js";import"./Dialog-twcDSStr.js";import"./cross-O3i2QmOd.js";import"./svgIconContainer-CevlEVVg.js";import"./useBaseUiId-1MvsnHF0.js";import"./InternalBackdrop-B8D4UxU4.js";import"./composite-7kQ7OmSD.js";import"./index-CyMmgwkh.js";import"./index-BtRkO4nr.js";import"./index-OkUz4tnS.js";import"./useEventCallback-DVIoo-le.js";import"./SkeletonBar-DnIcD4-7.js";import"./LoadingCell-Dr1yP9hd.js";import"./ColumnConfigDialog-CzpHCp2S.js";import"./DraggableList-kTaWSR77.js";import"./search-DuX0harO.js";import"./Input-D7e4vYID.js";import"./useControlled-D3IlQblQ.js";import"./Button-CQHuz0SR.js";import"./small-cross-BntLkeb7.js";import"./ActionButton-vd1tLPE-.js";import"./Checkbox-CIBOJMyv.js";import"./useValueChanged-RARJ6Fyz.js";import"./CollapsiblePanel-CADx3q8o.js";import"./MultiColumnSortDialog-D6_aaGU_.js";import"./MenuTrigger-Bx-NfINM.js";import"./CompositeItem-D4n0rGlc.js";import"./ToolbarRootContext-0OHqE9f1.js";import"./getDisabledMountTransitionStyles-C7iSZ93K.js";import"./getPseudoElementBounds-DUZbWFdi.js";import"./chevron-down-BJp9RPDS.js";import"./index-DiCFXBX4.js";import"./error-Z9A5zRFa.js";import"./BaseCbacBanner-Ds7WPPqk.js";import"./makeExternalStore-D6jtgBE4.js";import"./Tooltip-tv9WXm6u.js";import"./PopoverPopup-CUZk9_WB.js";import"./debounce-BQY7DgD2.js";import"./useOsdkClient-NkKMF8Dg.js";import"./tick-B6zWYNj2.js";import"./DropdownField-CtnJsT3u.js";import"./isEqual--Y75NqJ1.js";import"./withOsdkMetrics-B5F2x99w.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
