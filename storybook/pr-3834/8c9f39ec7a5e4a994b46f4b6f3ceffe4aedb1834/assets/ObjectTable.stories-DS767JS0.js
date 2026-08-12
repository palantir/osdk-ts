import{j as i}from"./iframe-T8-5O5a7.js";import{O as p}from"./object-table-Cy8zQr_Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGKJTYgl.js";import"./preload-helper-BmpZImld.js";import"./Table-Cx3ow3Xr.js";import"./index-Bm1P3JuR.js";import"./Dialog-D2DawJKv.js";import"./cross-B2Ff3nzN.js";import"./svgIconContainer-DTQIUstT.js";import"./useBaseUiId-CGT1eYgE.js";import"./InternalBackdrop-CVQt1P3k.js";import"./composite-3G0XmPl8.js";import"./index-CTvYrdTG.js";import"./index-BqFbX9xD.js";import"./index-4D7iDRWN.js";import"./useEventCallback-DcrwhGVh.js";import"./SkeletonBar-aRGi46qm.js";import"./LoadingCell-BCWG_WSo.js";import"./ColumnConfigDialog-9oaVEdY0.js";import"./DraggableList-ClGw9imn.js";import"./search-gRWhsC7a.js";import"./Input-CrYGG830.js";import"./useControlled-DiVYHBT1.js";import"./isEqual-CYj9ZY_T.js";import"./isObject-D4EU1_k1.js";import"./Button-C--AVR5N.js";import"./ActionButton-CZuqOpJr.js";import"./Checkbox-q3zPQoox.js";import"./useValueChanged-B48ahuZx.js";import"./CollapsiblePanel-D6ekH2vN.js";import"./MultiColumnSortDialog-lIFw4Vg5.js";import"./MenuTrigger-Cn9_5pkM.js";import"./CompositeItem-CxOclKWd.js";import"./ToolbarRootContext-D4ao5sDu.js";import"./getDisabledMountTransitionStyles-B3GPhteV.js";import"./getPseudoElementBounds-CZWI-fTU.js";import"./chevron-down-CtzoxwNt.js";import"./index-CtKLFWsO.js";import"./error-C6IIEk7L.js";import"./BaseCbacBanner-D_gnVjwt.js";import"./makeExternalStore-V4YAFWjd.js";import"./Tooltip-Cq4Hmx15.js";import"./PopoverPopup-B5NaVdq-.js";import"./toNumber-BkQhAqa5.js";import"./useOsdkClient-DEG6jAJY.js";import"./tick-BhtMxWAI.js";import"./DropdownField-CXEt8CUB.js";import"./withOsdkMetrics-CswUt8H_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
