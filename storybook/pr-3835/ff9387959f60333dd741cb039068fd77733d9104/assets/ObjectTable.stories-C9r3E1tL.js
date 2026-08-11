import{j as i}from"./iframe-tdx6Uf_P.js";import{O as p}from"./object-table-DHeWuMA8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DftIQPZl.js";import"./preload-helper-B_he2lyp.js";import"./Table-BYXBBz9o.js";import"./index-4qw7cdU-.js";import"./Dialog-CUkV8qFD.js";import"./cross-DO9nY1S8.js";import"./svgIconContainer-CU1572n2.js";import"./useBaseUiId-9iypYP_V.js";import"./InternalBackdrop-CR1SvO8_.js";import"./composite-CabNVbdx.js";import"./index-CGb-0Bhb.js";import"./index-Bc3aW3nV.js";import"./index-BnKrk6WD.js";import"./useEventCallback-DoBhpKEA.js";import"./SkeletonBar-BZ1jBHo3.js";import"./LoadingCell-La2HjgyQ.js";import"./ColumnConfigDialog-bNRn2_O-.js";import"./DraggableList-BDUQEPvE.js";import"./search-CH-DUc6I.js";import"./Input-xHgbyYEO.js";import"./useControlled-xMZoIalt.js";import"./isEqual-BL3R25LQ.js";import"./isObject-DOPtMIte.js";import"./Button-CSckS2t3.js";import"./ActionButton-1geeM6m0.js";import"./Checkbox-t4d1GJa_.js";import"./useValueChanged-D499xU-W.js";import"./CollapsiblePanel-CmIpp0lz.js";import"./MultiColumnSortDialog-BXMkEVl7.js";import"./MenuTrigger-B8OWZr-x.js";import"./CompositeItem-CgbzO3VR.js";import"./ToolbarRootContext-DgAPui9g.js";import"./getDisabledMountTransitionStyles-CErxBYlz.js";import"./getPseudoElementBounds-C3DaOYsK.js";import"./chevron-down-BnN32e5h.js";import"./index-D33Cjobj.js";import"./error-Cf_wRazy.js";import"./BaseCbacBanner-DpC99ZeZ.js";import"./makeExternalStore-DGM9c3Eo.js";import"./Tooltip-CtEvZAbn.js";import"./PopoverPopup-CWjY2Em3.js";import"./toNumber-Cf7LvuoM.js";import"./useOsdkClient-BP4MbY_l.js";import"./tick-Hf6xU6HT.js";import"./DropdownField-D21OwRip.js";import"./withOsdkMetrics-ycYz0MI_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
