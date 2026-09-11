import{j as i}from"./iframe-Bw13kIxi.js";import{O as p}from"./object-table-kxZ9tU0A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8gusDsx.js";import"./preload-helper-BzOLmTcY.js";import"./Table-C8yqct6T.js";import"./index-MMxGRtZu.js";import"./Dialog-DfHRROsO.js";import"./cross-Bot7O1S5.js";import"./svgIconContainer-CHQSAFNt.js";import"./useBaseUiId-BD7FpPox.js";import"./InternalBackdrop-A7BWoqb_.js";import"./composite-BFCFgZut.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./index-BFk6o5Yc.js";import"./useEventCallback-DTY0kHsH.js";import"./SkeletonBar-CpAUSAEn.js";import"./LoadingCell-CanaaSrx.js";import"./ColumnConfigDialog-JQuoDAkJ.js";import"./DraggableList-BslGcgGG.js";import"./search-DC1ogqGn.js";import"./Input-2zOhGHVv.js";import"./useControlled-DefJa1NZ.js";import"./Button-CE0Z6ey5.js";import"./small-cross-jMKjsjhb.js";import"./ActionButton-DXMkOznn.js";import"./Checkbox-C5nrXeA-.js";import"./useValueChanged-qKqnNGu6.js";import"./CollapsiblePanel-C7c8Mi8e.js";import"./MultiColumnSortDialog-D0HB9zMf.js";import"./MenuTrigger-DrqgM8Ia.js";import"./CompositeItem-B4j9mPKG.js";import"./ToolbarRootContext-IHMHRzml.js";import"./getDisabledMountTransitionStyles-Dm6t4Qzi.js";import"./getPseudoElementBounds-BbQB3o-0.js";import"./chevron-down-hwQFkKEa.js";import"./index-Dtvh5Ts7.js";import"./error-CDpWRRdK.js";import"./BaseCbacBanner-C6nWB-Kz.js";import"./makeExternalStore-BPlb4pia.js";import"./Tooltip-C2VUAIPR.js";import"./PopoverPopup-Fr35LjTY.js";import"./debounce-BaVRg2vf.js";import"./useOsdkClient-ysIV4O88.js";import"./tick-vVehnAOz.js";import"./DropdownField-QqZNyAQs.js";import"./isEqual-DLZP89tE.js";import"./withOsdkMetrics-Bh3armvA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
