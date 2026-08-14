import{j as i}from"./iframe-C9dvvK0s.js";import{O as p}from"./object-table-DaHHjOXS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-rv0P9oFW.js";import"./preload-helper-iV6YG4Aw.js";import"./Table-BLfd7O6r.js";import"./index-CCl1SyK9.js";import"./Dialog-0kQYGq6h.js";import"./cross-DoooZe2s.js";import"./svgIconContainer-DzOculqA.js";import"./useBaseUiId-Br_MFpl1.js";import"./InternalBackdrop-CY6nwryu.js";import"./composite-C5a4BBeY.js";import"./index-R2ywC05c.js";import"./index-CkMTtaTO.js";import"./index-BPDZ_eNv.js";import"./useEventCallback-nJzbHflb.js";import"./SkeletonBar-BMLWORuN.js";import"./LoadingCell-CoPu1qnX.js";import"./ColumnConfigDialog-468qWQtg.js";import"./DraggableList-Dr7qvY_0.js";import"./search-t3Hkw5qC.js";import"./Input-VMFQEfqY.js";import"./useControlled-N1u5Cna7.js";import"./Button-yjOlms4F.js";import"./small-cross-Ci6IDqJ5.js";import"./ActionButton-DTtodqv-.js";import"./Checkbox-Blnnfp9K.js";import"./useValueChanged-DmetHvwJ.js";import"./CollapsiblePanel-ND7ZCoK2.js";import"./MultiColumnSortDialog-ED6hIEfv.js";import"./MenuTrigger-eYIaD5Ue.js";import"./CompositeItem-Bcug-Hhc.js";import"./ToolbarRootContext-B-a5UJLi.js";import"./getDisabledMountTransitionStyles-Ozj0mzgv.js";import"./getPseudoElementBounds-Bdrnt6aT.js";import"./chevron-down-Cc5gCW9T.js";import"./index-DdkJNkIB.js";import"./error-QUoX6T23.js";import"./BaseCbacBanner-B4CqUt8g.js";import"./makeExternalStore-DRTRnKjE.js";import"./Tooltip-CZkWbmpg.js";import"./PopoverPopup-Cj3n7Ars.js";import"./debounce-Z8v5BBST.js";import"./useOsdkClient-Cyoc-pgH.js";import"./tick-B8uN_Iao.js";import"./DropdownField-DOA4KkgG.js";import"./isEqual-Cpll-d8H.js";import"./withOsdkMetrics-dCYtoeio.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
